async function getVideoInfo() {
    const videoId = document.getElementById('videoId').value;
    const response = await fetch('/api/video-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId })
    });
    const data = await response.json();
    document.getElementById('videoInfo').innerText = JSON.stringify(data, null, 2);
}

async function askQuestion() {
    const question = document.getElementById('question').value;
    const transcript = "Aquí va la transcripción del video"; // Reemplaza con la transcripción real

    const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, transcript })
    });

    const data = await response.json();
    document.getElementById('answer').innerText = data.answer;
}
