export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const bitcoinReal = data.BRL.buy;
      const doacao = (100 / bitcoinReal).toFixed(8).replace('.', ',');
      const dadosContato = document.querySelector('#contato .dados');
      const liBitcoin = document.createElement('li');
      liBitcoin.innerHTML = `Doe <span class="verde-destaque">${doacao}</span> bitcoin para nos ajudar!`;
      dadosContato.appendChild(liBitcoin);
    } catch (error) {
      console.error(error);
    }
  }

  fetchBitcoin('https://blockchain.info/ticker');
}
