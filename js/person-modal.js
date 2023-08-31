import { closeModal, qySel } from './functions.js';

qySel('.person-modal .modal-close-btn').addEventListener('click', (e) => {
  closeModal('.person-modal');
});

qySel('.person-modal .more').addEventListener('click', (e) => {
  e.preventDefault();
  qySel('.profile').classList.toggle('active');
  qySel('.more').classList.toggle('active');
});
