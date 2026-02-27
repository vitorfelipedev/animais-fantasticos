export default class AnimaNumeros {
  constructor(numeros, target, observeClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(target);
    this.observeClass = observeClass;
    //bind this do objeto do calback mutation
    this.handleMutation = this.handleMutation.bind(this);
  }

  //Recebe elemento do dom com número em seu texto
  //Incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    let start = 0;
    const incremento = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 15 * Math.random());
  }

  //Ativa incrementar número para cada número selecionado do DOM.
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero),
    );
  }

  //Funcção que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //adiciona o mutation observe para verificar quando a classe ativo é adicionado ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
