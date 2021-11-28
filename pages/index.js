import { useEffect, useState } from 'react';
//import WebSocket from 'ws';
//const WebSocket = require('ws');

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <h2>BTCBRL</h2>
                <MarketData />
            </div>
        </div>
    )
}

function MarketData() {
    const [lastPrice, setLastPrice] = useState(0);
    const [serverTime, setServerTime] = useState('');

    useEffect(() => {
        const binanceHook = new WebSocket('wss://stream.binance.com:9443/ws/btcbrl@kline_1m');

        binanceHook.addEventListener('ping', () => {
            binanceHook.send();
        })

        binanceHook.onmessage = (e) => {
            const candle = JSON.parse(e.data);
            setLastPrice(candle.k.c);
            setServerTime(new Date(candle.E).toLocaleString('pt-br'));
        };
    });

    return (
        <div>
            <p>{serverTime}</p>
            <p>{lastPrice}</p>
        </div>
    )
}

export default Home;