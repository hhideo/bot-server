async function getPrice(request, response) {
    const fetchPrice = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL');
    const fetchPriceJSON = await fetchPrice.json();

    response.json({
        price: fetchPriceJSON.price
    });
}

export default getPrice;