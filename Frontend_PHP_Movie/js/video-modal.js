import { closeModal, qySel, videoResize } from './functions.js';

qySel('.video-modal .modal-close-btn').addEventListener('click', (e) => {
  qySel('.video-modal iframe').src = '';
  closeModal('.video-modal');
}); //click

window.addEventListener('resize', () => {
  videoResize();
});
