function closeModal() {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelectorAll('.details');
  modal.classList.add('hidden');
  modalContent.forEach(item => {
    item.classList.add('hidden');
  });
}

function openModal(contentId) {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector(`#${contentId}`);
  modal.classList.remove('hidden');
  modalContent.classList.remove('hidden');
}

document.querySelector('.modal-close').addEventListener('click', () => {
  closeModal();
});

document.querySelectorAll('.modal-open').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = item.dataset.modal;
    openModal(modalId);
  });
});

document.querySelector('.modal').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() !== 'div') {
    closeModal();
  }
});