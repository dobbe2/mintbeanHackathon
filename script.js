//setting the suit and value arrays to create deck of card
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck1 = makeDeck() ;
shuffle(deck1);
renderDeck(deck1);

//creating the deck of cards into new array
function makeDeck(){
    let deck = new Array();

    for (let i = 0; i <suits.length; i++){

        for(let x = 0; x < values.length; x++){

            let card = {Value:values[x], Suite:suits[i]};
            deck.push(card)
            // console.log(card)
        }
    }
    return deck;
    // console.log(deck)
}

console.log(deck1)

//shuffling algorithm, switch 2 random cards in deck 1000 times
function shuffle(){
    for (let i=0; i <1000; i++){
        let card1 = Math.floor((Math.random() * deck1.length));
        let card2 = Math.floor((Math.random() * deck1.length));
        let tempSpot = deck1[card1];

        deck1[card1] = deck1[card2];
        deck1[card2] = tempSpot;
    }
}

//code to display the deck (all 52 cards)
function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
	for(let i = 0; i < deck1.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck1[i].Suite;
        console.log(deck1[i])

		value.innerHTML = deck1[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

