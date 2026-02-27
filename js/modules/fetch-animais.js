import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const gridAnimais = document.querySelector('.numeros-grid');

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        gridAnimais.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        '[data-numero]',
        '.numeros',
        'ativo',
      );
      animaNumeros.init();
    } catch (error) {
      console.error(error);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisapi.json');
}
