export default async function fetchBitcoin(url, target) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const bitcoinReal = data.BRL.buy;
    const doacao = (100 / bitcoinReal).toFixed(8).replace('.', ',');
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = doacao;
  } catch (error) {
    console.error(error);
  }
}
