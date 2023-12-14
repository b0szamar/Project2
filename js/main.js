const emojis = ['💗', '😳', '😴', '😍', '🤑', '💩', '💀', '🤡'];
const cards = emojis.concat(emojis);
let flippedCards = [];
let matchedCards = [];
function shuffle(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}
function createCard(emoji) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    const emojiContainer = document.createElement('div');
    emojiContainer.classList.add('emoji');
    emojiContainer.textContent = emoji;
    card.appendChild(emojiContainer);
    card.addEventListener('click', flipCard);
    return card;
}
function createBoard() {
    shuffle(cards);
    const gameContainer = document.querySelector('.memory-game');
    cards.forEach(emoji => {
        const card = createCard(emoji);
        gameContainer.appendChild(card);
    });
}
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped') && flippedCards.indexOf(this) === -1) {
        this.classList.add('flipped');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 2000);
        }
    }
}
let tries=0;
let ossz=0;
function checkMatch() {
    const [card1, card2] = flippedCards;
    const emoji1 = card1.dataset.emoji;
    const emoji2 = card2.dataset.emoji;
    if (emoji1 === emoji2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        ossz=ossz+1;
        if (matchedCards.length === cards.length) {
            alert('Gratulálok! Összesen '+ossz+' probálkozásba telt megcsinálni!');
            setTimeout(5000);
            location.reload()
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        tries=tries+1;
        ossz=ossz+1;
    }
    flippedCards = [];
    document.getElementById('probak').innerHTML = "A sikertelen tippek száma: "+tries;
}
document.getElementById('probak').innerHTML = "A sikertelen tippek száma: ";
createBoard();