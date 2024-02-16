let deck = [
  { card: "A", 
    suit: "spades"
  },
  { card: "K", 
    suit: "spades"
  },
  { card: "Q", 
    suit: "spades"
  },
  { card: "J", 
    suit: "spades"
  },
  { card: "10", 
    suit: "spades"
  },
  { card: "9", 
    suit: "spades"
  },
  { card: "8", 
    suit: "spades"
  },
  { card: "7", 
    suit: "spades"
  },
  { card: "6", 
    suit: "spades"
  },
  { card: "5", 
    suit: "spades"
  },
  { card: "4", 
    suit: "spades"
  },
  { card: "3", 
    suit: "spades"
  },
  { card: "2", 
    suit: "spades"
  }
]

let usedCards = []
let tablePlayers = [
  {
    _id: "player_1",
    name: "BetoBurger",
    chips: 1000,
    cards: []
  },
  {
    _id: "player_2",
    name: "TabisCakes",
    chips: 1000,
    cards: []
  },
  {
    _id: "player_3",
    name: "NachoPistacho",
    chips: 1000,
    cards: []
  },
  {
    _id: "player_4",
    name: "Chino",
    chips: 1000,
    cards: []
  }
]

// Push suits
deck.forEach(card => {
  deck.push({ card: card.card, suit: "hearts" }, { card: card.card, suit: "diamonds" }, { card: card.card, suit: "clubs" })
})

// Deck Suffle
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

console.log("🚀 ~ deck:", shuffle(deck))

// Deals Cards
function dealCards(players) {
  for (let i = 0; i < players.length; i++) {
    const firstCard = i === 0 ? i : i + i
    const secondCard = firstCard + 1
    players[i].cards.push(deck[firstCard], deck[secondCard])

    // Render Cards
    renderPlayerCards(players[i])
  }
}

// Render Cards
function renderPlayerCards({ name, _id, cards } = player) {
  let playerSit = document.getElementById(_id)
  const playerName = document.createElement('div')

  playerName.classList.add('player__name')
  playerName.textContent = name;
  playerSit.appendChild(playerName);

  cards.forEach(card => {
    // ✅ Create card
    const playerCard = document.createElement('div');
    // ✅ Add classes to card
    playerCard.classList.add('card', card.suit);
    // display card value
    playerCard.textContent = card.card;
    // Render card
    playerSit.appendChild(playerCard);
  })
}

dealCards(tablePlayers)
console.log("🚀 ~ players:", tablePlayers)