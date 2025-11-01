// --- БАЗА ДАННЫХ КАРТ (редактируй, как хочешь) ---
const allCards = [
    { name: "0. Шут", effect: "Происходит что-то нелепое и непредвиденное." },
    { name: "I. Маг", effect: "Вы получаете преимущество на все проверки Интеллекта на сегодня." },
    { name: "II. Жрица", effect: "Вы можете задать Мастеру один вопрос, на который можно ответить 'да' или 'нет'." },
    { name: "III. Императрица", effect: "Вы находите источник пищи и чистой воды, достаточный для всей группы на один день." },
    { name: "IV. Император", effect: "Вы получаете преимущество на все проверки Харизмы (Убеждение) до следующего рассвета." },
    { name: "X. Башня", effect: "Внезапное разрушение! Ближайшее к вам строение (мост, башня, стена) начинает рушиться." }
];

// --- ИНИЦИАЛИЗАЦИЯ ---
let deck = [];
let discard = [];
let isAnimating = false;

// Находим элементы на странице
const deckPileElement = document.getElementById('deck-pile');
const discardPileElement = document.getElementById('discard-pile');
const animationZone = document.getElementById('animation-zone');
const deckCountSpan = document.getElementById('deck-count');
const discardCountSpan = document.getElementById('discard-count');

// --- ФУНКЦИИ ---

// Функция для создания HTML-элемента карты
function createCardElement(cardData, isFaceUp = false) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    if (isFaceUp) {
        cardElement.classList.add('card-face');
        cardElement.innerHTML = `<h3>${cardData.name}</h3><p>${cardData.effect}</p>`;
    } else {
        cardElement.classList.add('card-back');
    }
    return cardElement;
}

// Функция для обновления всего на экране
function renderPiles() {
    // Очищаем стопки
    deckPileElement.innerHTML = '';
    discardPileElement.innerHTML = '';

    // Показываем рубашку, если в колоде есть карты
    if (deck.length > 0) {
        const topCard = createCardElement(null, false);
        deckPileElement.appendChild(topCard);
    }

    // Показываем лицо последней сброшенной карты
    if (discard.length > 0) {
        const topDiscardedCard = createCardElement(discard[discard.length - 1], true);
        discardPileElement.appendChild(topDiscardedCard);
    }
    
    // Обновляем счётчики
    deckCountSpan.textContent = deck.length;
    discardCountSpan.textContent = discard.length;
}

// Функция "перетасовки" колоды
function shuffleDeck() {
    deck = [...allCards]; // Копируем все карты
    discard = [];
    isAnimating = false;
    animationZone.innerHTML = ''; // Очищаем зону анимации
    renderPiles();
    alert('Цикл завершён. Колода перетасована!');
}


// --- ГЛАВНАЯ ЛОГИКА ---

// Вешаем обработчик клика на стопку колоды
deckPileElement.addEventListener('click', function() {
    if (isAnimating) return; // Если анимация идёт, ничего не делаем

    if (deck.length === 0) {
        shuffleDeck();
        return;
    }

    isAnimating = true;

    // 1. Берём карту из данных
    const drawnCardData = deck.shift();

    // 2. Создаём карту для анимации
    animationZone.innerHTML = ''; // Очищаем зону
    const flippingCard = document.createElement('div');
    flippingCard.className = 'flipping-card';

    const flipperBack = createCardElement(null, false);
    flipperBack.classList.add('flipper-back');

    const flipperFace = createCardElement(drawnCardData, true);
    flipperFace.classList.add('flipper-face');

    flippingCard.appendChild(flipperBack);
    flippingCard.appendChild(flipperFace);
    animationZone.appendChild(flippingCard);

    // 3. Запускаем анимацию переворота
    setTimeout(() => {
        flippingCard.style.transform = 'rotateY(180deg)';
    }, 100); // Небольшая задержка для старта

    // 4. После анимации обновляем состояние
    setTimeout(() => {
        discard.push(drawnCardData); // Перемещаем карту в сброс
        animationZone.innerHTML = ''; // Убираем карту из зоны анимации
        renderPiles(); // Перерисовываем стопки
        isAnimating = false;
    }, 1500); // Время должно быть больше, чем длительность анимации
});

// --- ПЕРВЫЙ ЗАПУСК ---
deck = [...allCards]; // Заполняем колоду при первой загрузке
renderPiles();