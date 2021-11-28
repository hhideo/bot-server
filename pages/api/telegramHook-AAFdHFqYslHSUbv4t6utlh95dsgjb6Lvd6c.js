async function telegramHook(request, response) {
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`

    console.log(request.body);

    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: 55677412, text: 'Requisição recebida' })
    }
    const sentMessage = await fetch(telegramUrl + '/sendMessage', reqOptions);

    response.json(await sentMessage.json());
}

export default telegramHook;