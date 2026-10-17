// 1. Search Player Function
function searchPlayer() {
    const input = document.getElementById("playerName").value.trim().toLowerCase();
    const resultDiv = document.getElementById("searchResult");

    if (!input) {
        resultDiv.innerHTML = "<p class='error-msg'>Please enter a player name.</p>";
        return;
    }

    if (typeof players === "undefined") {
        resultDiv.innerHTML = "<p class='error-msg'>Player data is not loaded.</p>";
        return;
    }

    const foundPlayer = players.find(p => 
        p.name.toLowerCase().includes(input) || p.id.toLowerCase() === input
    );

    if (foundPlayer) {
        resultDiv.innerHTML = `
            <div class="preview-card">
                <button class="close-btn" onclick="clearResult('searchResult')">&times;</button>
                <img src="${foundPlayer.image}" alt="${foundPlayer.name}">
                <div class="preview-info">
                    <h4>${foundPlayer.name} (#${foundPlayer.number})</h4>
                    <p><strong>Position:</strong> ${foundPlayer.position}</p>
                    <p><strong>Nationality:</strong> ${foundPlayer.nationality}</p>
                    <a href="playerProfile.html?id=${foundPlayer.id}" class="view-profile-btn">View Full Profile →</a>
                </div>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<p class='error-msg'>This player does not currently play for Real Madrid.</p>`;
    }
}

// 2. Random Player Generator Function
function getRandomPlayer() {
    const resultDiv = document.getElementById("randomPlayerResult");

    if (typeof players === "undefined" || !players.length) {
        resultDiv.innerHTML = "<p class='error-msg'>Player data could not be loaded.</p>";
        return;
    }

    const randomIndex = Math.floor(Math.random() * players.length);
    const randomPlayer = players[randomIndex];

    resultDiv.innerHTML = `
        <div class="preview-card">
            <button class="close-btn" onclick="clearResult('randomPlayerResult')">&times;</button>
            <img src="${randomPlayer.image}" alt="${randomPlayer.name}">
            <div class="preview-info">
                <h4>${randomPlayer.name} (#${randomPlayer.number})</h4>
                <p><strong>Position:</strong> ${randomPlayer.position}</p>
                <p><strong>Nationality:</strong> ${randomPlayer.nationality}</p>
                <a href="playerProfile.html?id=${randomPlayer.id}" class="view-profile-btn">View Full Profile →</a>
            </div>
        </div>
    `;
}

// 3. Helper function to clear the result box
function clearResult(elementId) {
    document.getElementById(elementId).innerHTML = "";
    if (elementId === 'searchResult') {
        document.getElementById('playerName').value = ""; // Optional: clears input box too
    }
}

// Allow pressing Enter in input field to search
document.getElementById("playerName")?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchPlayer();
    }
});