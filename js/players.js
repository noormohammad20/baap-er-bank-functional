const players = document.getElementsByClassName('player')

function setPlayerStyle(player) {
    player.style.border = '1px solid red'
    player.style.borderRadius = '15px'
    player.style.margin = '10px'
    player.style.padding = '10px'
}

for (const player of players) {
    setPlayerStyle(player)

}

function addPlayer() {
    const playersContainer = document.getElementById('players')
    const player = document.createElement('div')
    player.classList.add('player')
    player.innerHTML = `
    <h4 class="player-name">new player</h4>
    <p>Iusto molestiae expedita nihil magni culpa et voluptatem, aspernatur alias atque fuga veniam natus
     officia quo laborum est quidem voluptates harum vero cum officiisQuasi eligendi nemo sit sed
    temporibus!</p>
    `;
    setPlayerStyle(player)
    playersContainer.appendChild(player)

}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow'
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow'
    }
})