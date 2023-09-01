import { closeModal, qySel, qySelAll } from './functions.js';

qySel('.person-modal .modal-close-btn').addEventListener('click', (e) => {
  closeModal('.person-modal');
});

qySelAll('.more').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    qySel(e.currentTarget.value).classList.toggle('active');
  });
});
