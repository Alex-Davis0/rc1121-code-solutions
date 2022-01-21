console.log('Lodash is loaded:', typeof _ !== 'undefined');

function draw(player, deck, cardsPerHand, maxPerson) {
  while (cardsPerHand > 0) {
    let card = 0;
    do {
      card = Math.floor((Math.random() * 52) + 1);
    } while (!deck[card]);
    player.hand.push(deck[card]);
    delete deck[card];
    cardsPerHand--;
  }
  const currentHand = player.hand.reduce((acc, card) => acc + card.value, 0);
  if (currentHand > maxPerson.value) {
    maxPerson.name = player.name;
    maxPerson.value = currentHand;
    maxPerson.hand = player.hand;
  }

}

function play(players, cardsPerHand) {
  const suits = ['diamonds', 'spades', 'clubs', 'hearts'];
  const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

  const deck = {};
  let cardCount = 1;
  for (const suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
      const rank = ranks[i];
      const value = values[i];
      deck[cardCount] = { suit, rank, value };
      cardCount++;
    }
  }

  const maxPerson = {
    value: 0,
    name: null,
    hand: []
  };
  for (const player of players) {
    draw(player, deck, cardsPerHand, maxPerson);
  }
  console.log(`${maxPerson.name} wins with a hand of ${maxPerson.hand[0].rank} and ${maxPerson.hand[1].rank} (${maxPerson.value})`);
}

const players = [
  {
    name: 'Jane',
    hand: []
  },
  {
    name: 'John',
    hand: []
  },
  {
    name: 'Jack',
    hand: []
  },
  {
    name: '',
    hand: []
  }
];

const cardsPerHand = 2;

play(players, cardsPerHand);
