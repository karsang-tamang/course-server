const params = new URLSearchParams(window.location.search);

const playerId = params.get("id");

const player = players.find(
    p => p.id === playerId
);


if (player) {

    document.title = player.name;

    document.getElementById("name").textContent = player.name;

    document.getElementById("number").textContent = `Jersey Number: ${player.number}`;

    document.getElementById("nationality").textContent = `Nationality: ${player.nationality}`;

    document.getElementById("position").textContent = `Position: ${player.position}`;

    document.getElementById("age").textContent = `Age: ${player.age}`;

    document.getElementById("height").textContent = `Height: ${player.height}`;

    document.getElementById("description").textContent = player.description;

    const playerImage = document.getElementById("player-image");
    playerImage.src = player.image;
    playerImage.alt = player.name;
}
else {

    document.getElementById("name").textContent = "Player Not Found";
}