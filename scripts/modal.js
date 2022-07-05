function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden');
  }
  
  function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden');
  }
  
  document.querySelector('.modal-close').addEventListener('click', () => {
    closeModal();
  });
  
  document.querySelectorAll('.modal-open-job').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });
  
  document.querySelectorAll('.modal-open-education').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'div') {
      closeModal();
    }
  });