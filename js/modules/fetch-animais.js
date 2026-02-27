import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const gridAnimais = document.querySelector(target);
  //preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    gridAnimais.appendChild(divAnimal);
  }

  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }
  //puxa os animais através de uma arquivo JSON
  //e cria cada anima usando create animal
  async function criarAnimais() {
    try {
      //fetch aguarda resposta
      const animaisResponse = await fetch(url);
      //transforma resposta em json
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumero();
    } catch (error) {
      console.error(error);
    }
  }

  //cria  a div contendo as informações dos animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  return criarAnimais();

  fetchAnimais('./animaisapi.json');
}
