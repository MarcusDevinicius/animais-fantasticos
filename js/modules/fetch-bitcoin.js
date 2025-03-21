export default function initFetchBitcoin() {
  const spanBitcoin = document.querySelector(".btc-preco");

  async function fetchBitcoin(url) {
    try {
      const btcResponse = await fetch(url);
      const btcJSON = await btcResponse.json();
      spanBitcoin.innerText = (1000 / btcJSON.BRL.sell).toFixed(4);
    } catch {
      console.log("Ocorreu um ERRO :(");
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
