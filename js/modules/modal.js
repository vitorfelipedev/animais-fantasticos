export default class Modal {
  constructor(abrir, fechar, modalContainer) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(modalContainer);
    this.toggleModal = this.toggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  //abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao cliclar no lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  //Adiciona os eventos do modal
  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
  }
}
