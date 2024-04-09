export function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
export function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
export function openSignupModal() {
    closeModal('loginModal');
    openModal('signupModal');
  }