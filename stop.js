let startTime;
let intervalId;
let isRunning = false;

function updateStopwatch() {
    const currentTime = new Date().getTime() - startTime;
    const hours = Math.floor(currentTime / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((currentTime % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((currentTime % 60000) / 1000).toString().padStart(2, '0');
    
    document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(intervalId);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        startTime = new Date().getTime() - (startTime || 0);
        intervalId = setInterval(updateStopwatch, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(intervalId);
    document.getElementById('stopwatch').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
    startTime = null;
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', resetStopwatch);