import { useEffect, useRef, useState } from 'react';

type ScrollMetrics = {
  clientHeight: number;
  scrollHeight: number;
  scrollTop: number;
};

const MIN_THUMB_HEIGHT = 44;
const HIDE_DELAY_MS = 650;

function readScrollMetrics(): ScrollMetrics {
  const root = document.documentElement;

  return {
    clientHeight: root.clientHeight,
    scrollHeight: root.scrollHeight,
    scrollTop: root.scrollTop,
  };
}

export default function ScrollOverlay(): JSX.Element | null {
  const dragStateRef = useRef<{ pointerOffset: number } | null>(null);
  const [metrics, setMetrics] = useState<ScrollMetrics>({
    clientHeight: 0,
    scrollHeight: 0,
    scrollTop: 0,
  });
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let hideTimeoutId = 0;
    let resizeObserver: ResizeObserver | null = null;

    const syncMetrics = () => {
      setMetrics(readScrollMetrics());
    };

    const scheduleSync = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        syncMetrics();
      });
    };

    const handleScroll = () => {
      setVisible(true);
      scheduleSync();
      window.clearTimeout(hideTimeoutId);
      hideTimeoutId = window.setTimeout(() => setVisible(false), HIDE_DELAY_MS);
    };

    const handleResize = () => {
      scheduleSync();
    };

    syncMetrics();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => {
        scheduleSync();
      });
      resizeObserver.observe(document.documentElement);
      resizeObserver.observe(document.body);
    }

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      window.clearTimeout(hideTimeoutId);
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxScroll = Math.max(metrics.scrollHeight - metrics.clientHeight, 0);
  const trackHeight = Math.max(metrics.clientHeight, 0);
  const thumbHeight = Math.max(
    Math.round(trackHeight * (metrics.clientHeight / metrics.scrollHeight)),
    MIN_THUMB_HEIGHT,
  );
  const maxOffset = Math.max(trackHeight - thumbHeight, 0);
  const thumbOffset = maxScroll === 0 ? 0 : (metrics.scrollTop / maxScroll) * maxOffset;

  useEffect(() => {
    if (!dragging) {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const dragState = dragStateRef.current;
      if (dragState === null) {
        return;
      }

      const nextOffset = Math.min(
        Math.max(event.clientY - dragState.pointerOffset, 0),
        maxOffset,
      );
      const nextScrollTop = maxOffset === 0 ? 0 : (nextOffset / maxOffset) * maxScroll;

      window.scrollTo({ top: nextScrollTop, behavior: 'auto' });
    };

    const stopDragging = () => {
      dragStateRef.current = null;
      setDragging(false);
      setVisible(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', stopDragging);
      window.removeEventListener('pointercancel', stopDragging);
    };
  }, [dragging, maxOffset, maxScroll]);

  const isScrollable = maxScroll > 0;

  if (!isScrollable) {
    return null;
  }

  const handleThumbPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const thumbRect = event.currentTarget.getBoundingClientRect();

    dragStateRef.current = {
      pointerOffset: event.clientY - thumbRect.top,
    };

    setVisible(true);
    setDragging(true);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  return (
    <div className={`scroll-overlay${visible || dragging ? ' is-visible' : ''}`} aria-hidden="true">
      <div className="scroll-overlay-track" />
      <div
        className={`scroll-overlay-thumb${dragging ? ' is-dragging' : ''}`}
        onPointerDown={handleThumbPointerDown}
        style={{
          height: `${thumbHeight}px`,
          transform: `translateY(${Math.round(thumbOffset)}px)`,
        }}
      />
    </div>
  );
}
