import { useState } from 'react';

function Home(props) {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <p>{props.price}</p>
                <p>BTCBRL</p>
                <Price />
            </div>
        </div>
    )
}

function Price() {
    const [lastPrice, setLastPrice] = useState(0);

    function getPrice() {
        setLastPrice(lastPrice + 1);
    }

    return (
        <div>
            <p>{lastPrice}</p>
            <button onClick={getPrice}>Incremento</button>
        </div>
    )
}

export async function getStaticProps() {
    const fetchPrice = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL');
    const fetchPriceJSON = await fetchPrice.json();

    return {
        props: {
            price: fetchPriceJSON.price
        }
    }
}

export default Home;