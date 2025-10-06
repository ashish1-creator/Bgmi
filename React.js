document.getElementById('bgmiForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value.trim();
    const startdate = document.getElementById('startdate').value.trim();
    const gunskins = document.getElementById('gunskins').value.trim();
    const killratio = parseFloat(document.getElementById('killratio').value);
    const headshot = document.getElementById('headshot').value.trim();
    const matches = document.getElementById('matches').value.trim();
    const errorDiv = document.getElementById('error-message');

    // Check for empty fields
    if (!username || !startdate || !gunskins || !killratio || !headshot || !matches) {
        e.preventDefault();
        errorDiv.textContent = "Please Enter your details.";
        return false;
    }

    // KD logic
    let resultMsg = "";
    if (killratio < 2) {
        resultMsg = "You are a noob. Improve your skills and comeback stronger.";
    } else if (killratio >= 2 && killratio < 4) {
        resultMsg = "You are a moderate player. All the best, improve your skills!";
    } else if (killratio >= 4) {
        resultMsg = "You are a pro player champ, keep moving!";
    }

    // Pass resultMsg as a query parameter
    // Append to form action
    this.action = `result.html?username=${encodeURIComponent(username)}&startdate=${encodeURIComponent(startdate)}&gunskins=${encodeURIComponent(gunskins)}&killratio=${encodeURIComponent(killratio)}&headshot=${encodeURIComponent(headshot)}&matches=${encodeURIComponent(matches)}&resultMsg=${encodeURIComponent(resultMsg)}`;
});