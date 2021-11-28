async function telegramHook(request, response) {
    const telegramUrl = 'https://api.telegram.org/bot2111976642:AAFdHFqYslHSUbv4t6utlh95dsgjb6Lvd6c'

    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: 55677412, text: 'Requisição recebida' })
    }
    fetch(telegramUrl + '/sendMessage', reqOptions);

    response.send();
}

export default telegramHook;