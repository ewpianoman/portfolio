function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden');
  }
  
  function openModal(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden');
  }
  
  document.querySelector('.modal-close').addEventListener('click', () => {
    closeModal();
  });
  
  document.querySelectorAll('.modal-open-job').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('data/jobs.json');
    });
  });
  
  document.querySelectorAll('.modal-open-education').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('data/education.json');
    });
  });

  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'div') {
      closeModal();
    }
  });