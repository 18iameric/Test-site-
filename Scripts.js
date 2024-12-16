document.getElementById('sendChat').addEventListener('click', async () => {
    const userMessage = document.getElementById('chatInput').value;
    const chatResponseDiv = document.getElementById('chatResponse');

    chatResponseDiv.textContent = "Thinking...";

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_API_KEY`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: userMessage }]
            })
        });

        const data = await response.json();
        const reply = data.choices[0].message.content;
        chatResponseDiv.textContent = reply;
    } catch (error
