async function telegramHook(request, response) {
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`

    const { message } = request.body;

    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: message.from.id, text: `Echo: ${message.text}` })
    }
    const sentMessage = await fetch(telegramUrl + '/sendMessage', reqOptions);

    response.json(await sentMessage.json());
}

export default telegramHook;