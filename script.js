const allCards = [
    // --- СТАРШИЕ АРКАНЫ ---
    { name: "The Fool",           image: "cards/The_Fool.jpg",           type: "major", number: "0" },
    { name: "The Magician",       image: "cards/The_Magician.jpg",       type: "major", number: "I" },
    { name: "The High Priestess", image: "cards/The_High_Priestess.jpg", type: "major", number: "II" },
    { name: "The Empress",        image: "cards/The_Empress.jpg",        type: "major", number: "III" },
    { name: "The Emperor",        image: "cards/The_Emperor.jpg",        type: "major", number: "IV" },
    { name: "The Hierophant",     image: "cards/The_Hierophant.jpg",     type: "major", number: "V" },
    { name: "The Lovers",         image: "cards/The_Lovers.jpg",         type: "major", number: "VI" },
    { name: "The Chariot",        image: "cards/The_Chariot.jpg",        type: "major", number: "VII" },
    { name: "Strength",           image: "cards/Strength.jpg",           type: "major", number: "VIII" },
    { name: "The Hermit",         image: "cards/The_Hermit.jpg",         type: "major", number: "IX" },
    { name: "Wheel of Fortune",   image: "cards/Wheel_of_Fortune.jpg",   type: "major", number: "X" },
    { name: "Justice",            image: "cards/The_Justice.jpg",            type: "major", number: "XI" },
    { name: "The Hanged Man",     image: "cards/The_Hanged_Man.jpg",     type: "major", number: "XII" },
    { name: "Death",              image: "cards/Death.jpg",              type: "major", number: "XIII" },
    { name: "Temperance",         image: "cards/Temperance.jpg",         type: "major", number: "XIV" },
    { name: "The Devil",          image: "cards/The_Devil.jpg",          type: "major", number: "XV" },
    { name: "The Tower",          image: "cards/The_Tower.jpg",          type: "major", number: "XVI" },
    { name: "The Star",           image: "cards/The_Star.jpg",           type: "major", number: "XVII" },
    { name: "The Moon",           image: "cards/The_Moon.jpg",           type: "major", number: "XVIII" },
    { name: "The Sun",            image: "cards/The_Sun.jpg",            type: "major", number: "XIX" },
    { name: "Judgement",          image: "cards/Judgement.jpg",          type: "major", number: "XX" },
    { name: "The World",          image: "cards/The_World.jpg",          type: "major", number: "XXI" },

    // --- МАСТЬ ЖЕЗЛОВ (WANDS) ---
    { name: "Ace of Wands",    suit: "wands", type: "minor", number: "A" },
    { name: "Two of Wands",    suit: "wands", type: "minor", number: "II" },
    { name: "Three of Wands",  suit: "wands", type: "minor", number: "III" },
    { name: "Four of Wands",   suit: "wands", type: "minor", number: "IV" },
    { name: "Five of Wands",   suit: "wands", type: "minor", number: "V" },
    { name: "Six of Wands",    suit: "wands", type: "minor", number: "VI" },
    { name: "Seven of Wands",  suit: "wands", type: "minor", number: "VII" },
    { name: "Eight of Wands",  suit: "wands", type: "minor", number: "VIII" },
    { name: "Nine of Wands",   suit: "wands", type: "minor", number: "IX" },
    { name: "Ten of Wands",    suit: "wands", type: "minor", number: "X" },
    { name: "Page of Wands",   suit: "wands", type: "minor", number: "" },
    { name: "Knight of Wands", suit: "wands", type: "minor", number: "" },
    { name: "Queen of Wands",  suit: "wands", type: "minor", number: "" },
    { name: "King of Wands",   suit: "wands", type: "minor", number: "" },

    // --- МАСТЬ КУБКОВ (CUPS) ---
    { name: "Ace of Cups",    suit: "cups", type: "minor", number: "A" },
    { name: "Two of Cups",    suit: "cups", type: "minor", number: "II" },
    { name: "Three of Cups",  suit: "cups", type: "minor", number: "III" },
    { name: "Four of Cups",   suit: "cups", type: "minor", number: "IV" },
    { name: "Five of Cups",   suit: "cups", type: "minor", number: "V" },
    { name: "Six of Cups",    suit: "cups", type: "minor", number: "VI" },
    { name: "Seven of Cups",  suit: "cups", type: "minor", number: "VII" },
    { name: "Eight of Cups",  suit: "cups", type: "minor", number: "VIII" },
    { name: "Nine of Cups",   suit: "cups", type: "minor", number: "IX" },
    { name: "Ten of Cups",    suit: "cups", type: "minor", number: "X" },
    { name: "Page of Cups",   suit: "cups", type: "minor", number: "" },
    { name: "Knight of Cups", suit: "cups", type: "minor", number: "" },
    { name: "Queen of Cups",  suit: "cups", type: "minor", number: "" },
    { name: "King of Cups",   suit: "cups", type: "minor", number: "" },

    // --- МАСТЬ МЕЧЕЙ (SWORDS) ---
    { name: "Ace of Swords",    suit: "swords", type: "minor", number: "A" },
    { name: "Two of Swords",    suit: "swords", type: "minor", number: "II" },
    { name: "Three of Swords",  suit: "swords", type: "minor", number: "III" },
    { name: "Four of Swords",   suit: "swords", type: "minor", number: "IV" },
    { name: "Five of Swords",   suit: "swords", type: "minor", number: "V" },
    { name: "Six of Swords",    suit: "swords", type: "minor", number: "VI" },
    { name: "Seven of Swords",  suit: "swords", type: "minor", number: "VII" },
    { name: "Eight of Swords",  suit: "swords", type: "minor", number: "VIII" },
    { name: "Nine of Swords",   suit: "swords", type: "minor", number: "IX" },
    { name: "Ten of Swords",    suit: "swords", type: "minor", number: "X" },
    { name: "Page of Swords",   suit: "swords", type: "minor", number: "" },
    { name: "Knight of Swords", suit: "swords", type: "minor", number: "" },
    { name: "Queen of Swords",  suit: "swords", type: "minor", number: "" },
    { name: "King of Swords",   suit: "swords", type: "minor", number: "" },

    // --- МАСТЬ ПЕНТАКЛЕЙ (PENTACLES) ---
    { name: "Ace of Pentacles",    suit: "pentacles", type: "minor", number: "A" },
    { name: "Two of Pentacles",    suit: "pentacles", type: "minor", number: "II" },
    { name: "Three of Pentacles",  suit: "pentacles", type: "minor", number: "III" },
    { name: "Four of Pentacles",   suit: "pentacles", type: "minor", number: "IV" },
    { name: "Five of Pentacles",   suit: "pentacles", type: "minor", number: "V" },
    { name: "Six of Pentacles",    suit: "pentacles", type: "minor", number: "VI" },
    { name: "Seven of Pentacles",  suit: "pentacles", type: "minor", number: "VII" },
    { name: "Eight of Pentacles",  suit: "pentacles", type: "minor", number: "VIII" },
    { name: "Nine of Pentacles",   suit: "pentacles", type: "minor", number: "IX" },
    { name: "Ten of Pentacles",    suit: "pentacles", type: "minor", number: "X" },
    { name: "Page of Pentacles",   suit: "pentacles", type: "minor", number: "" },
    { name: "Knight of Pentacles", suit: "pentacles", type: "minor", number: "" },
    { name: "Queen of Pentacles",  suit: "pentacles", type: "minor", number: "" },
    { name: "King of Pentacles",   suit: "pentacles", type: "minor", number: "" }
];

let deck = [];
let discard = [];
let isAnimating = false;

const deckPileElement = document.getElementById('deck-pile');
const discardPileElement = document.getElementById('discard-pile');
const animationZone = document.getElementById('animation-zone');
const deckCountSpan = document.getElementById('deck-count');
const discardCountSpan = document.getElementById('discard-count');
const shuffleButton = document.getElementById('shuffle-button');

// --- ФУНКЦИИ ---

function saveState() {
    localStorage.setItem('tarotDeck', JSON.stringify(deck));
    localStorage.setItem('tarotDiscard', JSON.stringify(discard));
}

function loadState() {
    const savedDeck = localStorage.getItem('tarotDeck');
    const savedDiscard = localStorage.getItem('tarotDiscard');
    if (savedDeck && savedDiscard) {
        deck = JSON.parse(savedDeck);
        discard = JSON.parse(savedDiscard);
        return true;
    }
    return false;
}

function createCardElement(cardData, isFaceUp = false) {
    const cardElement = document.createElement('div');
    if (isFaceUp) {
        cardElement.className = 'card card-face';
        if (cardData.type === 'major') {
            cardElement.style.backgroundImage = `url('${cardData.image}')`;
        } else {
            cardElement.classList.add(`suit-${cardData.suit}`);
            cardElement.innerHTML = `
                <div class="card-number-top">${cardData.number}</div>
                <div class="card-name-minor">${cardData.name}</div>
            `;
        }
    } else {
        cardElement.className = 'card card-back';
    }
    return cardElement;
}

function renderPiles() {
    deckPileElement.innerHTML = '';
    discardPileElement.innerHTML = '';
    if (deck.length > 0) {
        deckPileElement.appendChild(createCardElement(null, false));
    }
    if (discard.length > 0) {
        discardPileElement.appendChild(createCardElement(discard[discard.length - 1], true));
    }
    deckCountSpan.textContent = deck.length;
    discardCountSpan.textContent = discard.length;
}

function shuffleDeck(isFirstLoad = false) {
    let arrayToShuffle = [...allCards];
    for (let c = 0; c < 3; c++) {
        for (let i = arrayToShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
        }
    }
    deck = arrayToShuffle;
    discard = [];
    saveState();
    renderPiles();
    if (!isFirstLoad) {
        alert('Цикл завершён. Колода перетасована!');
    }
}

// --- ЛОГИКА ---

deckPileElement.addEventListener('click', function() {
    if (isAnimating || deck.length === 0) {
        if (deck.length === 0) {
            shuffleDeck();
        }
        return;
    }
    isAnimating = true;

    const drawnCardData = deck.shift();
    renderPiles();

    animationZone.innerHTML = '';
    const flippingCard = document.createElement('div');
    flippingCard.className = 'flipping-card';

    const flipperBack = createCardElement(null, false);
    flipperBack.classList.add('flipper-back');

    const flipperFace = createCardElement(drawnCardData, true);
    flipperFace.classList.add('flipper-face');

    flippingCard.appendChild(flipperBack);
    flippingCard.appendChild(flipperFace);
    animationZone.appendChild(flippingCard);

    setTimeout(() => {
        flippingCard.classList.add('is-flipped');
    }, 100);

    setTimeout(() => {
        animationZone.innerHTML = '';
        discard.push(drawnCardData);
        saveState();
        renderPiles();
        isAnimating = false;
    }, 1200);
});

shuffleButton.addEventListener('click', function() {
    if (isAnimating || deck.length <= 1) {
        if (deck.length <= 1) alert("В колоде слишком мало карт для перемешивания.");
        return;
    }
    isAnimating = true;

    const cardContainer = deckPileElement;
    const numCardsToAnimate = Math.min(deck.length, 5);
    
    for (let i = 0; i < numCardsToAnimate; i++) {
        const card = document.createElement('div');
        card.className = 'shuffling-card';
        cardContainer.appendChild(card);
        setTimeout(() => {
            const randomX = (Math.random() - 0.5) * 80;
            const randomY = (Math.random() - 0.5) * 80;
            const randomRot = (Math.random() - 0.5) * 30;
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`;
        }, 50 + i * 50);
    }
    
    setTimeout(() => {
        const animatedCards = cardContainer.querySelectorAll('.shuffling-card');
        animatedCards.forEach(card => card.style.transform = 'translate(0, 0)');
    }, 800);

    setTimeout(() => {
        for (let c = 0; c < 3; c++) {
            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
        saveState();
        renderPiles();
        isAnimating = false;
        alert(`Оставшиеся ${deck.length} карт в колоде были перемешаны.`);
    }, 1400);
});

// --- ПЕРВЫЙ ЗАПУСК ---
if (!loadState()) {
    shuffleDeck(true);
} else {
    renderPiles();
}