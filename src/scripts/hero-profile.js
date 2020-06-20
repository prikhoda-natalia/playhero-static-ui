document.getElementById("modal-backdrop").addEventListener("click", closeConfirmSaleModal);
document.getElementById("close-modal-button").addEventListener("click", closeConfirmSaleModal);
document.getElementById("purchase-submit-button").addEventListener("click", openConfirmSaleModal);

function closeConfirmSaleModal() {
  const confirmSaleModal = document.getElementById("confirm-sale-modal");
  const page = document.getElementById("hero-profile-page");

  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  confirmSaleModal.classList.remove("modal--is-shown");
}

function openConfirmSaleModal() {
  const confirmSaleModal = document.getElementById("confirm-sale-modal");
  const page = document.getElementById("hero-profile-page");

  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';

  confirmSaleModal.classList.add("modal--is-shown");
}