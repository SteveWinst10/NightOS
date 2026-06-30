function updateTime() {
    var now = new Date();
    
    var timeStr = now.toLocaleTimeString();
    var dateStr = now.toLocaleDateString();
    
    var timeText = document.getElementById("clock");
    if (timeText) {
        timeText.innerHTML = `<pre>${timeStr}     ${dateStr}</pre>`;
    }
}
setInterval(updateTime, 1000);