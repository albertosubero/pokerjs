let deck = [
  { card: "A", 
    suit: 1
  },
  { card: "K", 
    suit: 1
  },
  { card: "Q", 
    suit: 1
  },
  { card: "J", 
    suit: 1
  },
  { card: "10", 
    suit: 1
  },
  { card: "9", 
    suit: 1
  },
  { card: "8", 
    suit: 1
  },
  { card: "7", 
    suit: 1
  },
  { card: "6", 
    suit: 1
  },
  { card: "5", 
    suit: 1
  },
  { card: "4", 
    suit: 1
  },
  { card: "3", 
    suit: 1
  },
  { card: "2", 
    suit: 1
  }
]

let usedCards = []
let tablePlayers = [
  {
    name: "BetoBurger",
    chips: 1000,
    cards: []
  },
  {
    name: "TabisCakes",
    chips: 1000,
    cards: []
  },
  {
    name: "NachoPistacho",
    chips: 1000,
    cards: []
  },
  {
    name: "Chino",
    chips: 1000,
    cards: []
  }
]

// Push suits
deck.forEach(card => {
  deck.push({ card: card.card, suit: 2 }, { card: card.card, suit: 3 }, { card: card.card, suit: 4 })
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
  }
}

dealCards(tablePlayers)
console.log("🚀 ~ players:", tablePlayers)