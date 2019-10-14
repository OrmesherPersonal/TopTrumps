class Cards {
    constructor(name, wins, losses, kos, submissions, height) {
        this._name = name;
        this._wins = wins;
        this._losses = losses;
        this._kos = kos;
        this._submissions = submissions;
        this._height = height;
    }
    get name() {
        return this._name;
    }
    get wins() {
        return this._wins;
    }
    get losses() {
        return this._losses;
    }
    get kos() {
        return this._kos;
    }
    get submissions() {
        return this._submissions;
    }
    get height() {
        return this._height;
    }
}

let player1cards = [];
let player2cards = [];
let currentPlayer = 1;
let cards = [];
let cardsTheSame = [];
let card = [];

// initailise cards
let card1 = new Cards("Georges St. Pierre", 26, 2, 8, 6, 177);
cards.push(card1);
let card2 = new Cards("Micheal Bisping", 30, 9, 17, 3, 187);
cards.push(card2);
let card3 = new Cards("Dan Henderson", 32, 15, 17, 1, 185);
cards.push(card3);
let card4 = new Cards("Tony Ferguson", 25, 3, 12, 8, 182);
cards.push(card4);
let card5 = new Cards("Khabib Nurmagomedov", 28, 0, 8, 10, 177);
cards.push(card5);
let card6 = new Cards("Conor Mcgregor", 21, 4, 18, 1, 172);
cards.push(card6);
let card7 = new Cards("Nate Diaz", 20, 11, 5, 11, 182);
cards.push(card7);
let card8 = new Cards("Jon Jones", 25, 1, 10, 6, 193);
cards.push(card8);
let card9 = new Cards("Daniel Cormier", 22, 2, 10, 5, 180);
cards.push(card9);
let card10 = new Cards("Stipe Miocic", 19, 2, 15, 0, 193);
cards.push(card10);
let card11 = new Cards("Francis Ngannou", 14, 3, 10, 4, 193);
cards.push(card11);
let card12 = new Cards("Chuck Liddell", 21, 9, 13, 1, 187);
cards.push(card12);
let card13 = new Cards("Tito Ortiz", 20, 12, 10, 4, 187);
cards.push(card13);
let card14 = new Cards("Anderson Silva", 34, 10, 23, 3, 187);
cards.push(card14);
let card15 = new Cards("Max Holloway", 21, 4, 10, 2, 180);
cards.push(card15);
let card16 = new Cards("Jose Aldo", 28, 5, 17, 1, 170);
cards.push(card16);
let card17 = new Cards("Frankie Edgar", 23, 7, 7, 4, 167);
cards.push(card17);
let card18 = new Cards("B.J. Penn", 16, 14, 7, 6, 175);
cards.push(card18);
let card19 = new Cards("Diego Sanchez", 29, 12, 10, 6, 177);
cards.push(card19);
let card20 = new Cards("Donald Cerrone", 36, 13, 10, 17, 182);
cards.push(card20);
let card21 = new Cards("Leon Edwards", 18, 3, 6, 3, 182);
cards.push(card21);
let card22 = new Cards("Robbie Lawler", 28, 14, 20, 1, 180);
cards.push(card22);
let card23 = new Cards("Demian Maia", 27, 9, 3, 13, 182);
cards.push(card23);
let card24 = new Cards("Jorge Masvidal", 34, 13, 15, 2, 180);
cards.push(card24);
let card25 = new Cards("Amanda Nunes", 18, 4, 13, 3, 172);
cards.push(card25);
let card26 = new Cards("Ronda Rousey", 12, 2, 2, 9, 167);
cards.push(card26);
let card27 = new Cards("Henry Cejudo", 15, 2, 7, 0, 162);
cards.push(card27);
let card28 = new Cards("Demetrious Johnson", 29, 3, 5, 12, 160);
cards.push(card28);
let card29 = new Cards("Israel Adesanya", 18, 0, 14, 0, 193);
cards.push(card29);
let card30 = new Cards("Quintin Jackson", 38, 13, 20, 4, 185);
cards.push(card30);

const playGame = () => {
    shuffle(cards);
    dealCards(cards);
    startGame();
    if (player1Score == 0 || player2Score == 0) {
        endGame();
    }
}

const shuffle = (cards) => {
    cards.sort(() => Math.random() - 0.5);
}

const dealCards = (cards) => {

    let cardCounter = 0;

    for (i = 0; i < cards.length; i++) {
        if (cardCounter % 2 == 0) {
            player1cards.push(cards[i]);
            cardCounter++;
        }
        else {
            player2cards.push(cards[i]);
            cardCounter++;
        }
    }
};

const startGame = () => {
    alert(`Game Rules 
    Pick a statistic all categories exept losses are highest wins for losses the lowest value wins, 
    player 1 goes first then whoever wins the last hand gets to pick the next category
    first player to win all cards is the winner
    `)
    while (player1cards.length != 0 && player2cards.length != 0) {
        let selection = 0;

        if (currentPlayer == 1) {
            selection = prompt(`SCORES - Player 1 has ${player1cards.length} cards \ Player 2 has ${player2cards.length} cards\ncards in Draw pile ${cardsTheSame.length}

        Player 1's turn to pick
        ${player1cards[0].name}
        1. Wins = ${player1cards[0].wins}                     2. Losses = ${player1cards[0].losses}
        3. KO's = ${player1cards[0].kos}                      4. Submissions = ${player1cards[0].submissions}
        5. Height = ${player1cards[0].height} cm           6. Exit Game
        Select a Category`);
        }
        else {
            selection = prompt(`SCORES - Player 1 has ${player1cards.length} cards \ Player 2 has ${player2cards.length} cards\ncards in Draw pile ${cardsTheSame.length}

        Player 2's turn to pick
        ${player2cards[0].name}
        1. Wins = ${player2cards[0].wins}                     2. Losses = ${player2cards[0].losses}
        3. KO's = ${player2cards[0].kos}                      4. Submissions = ${player2cards[0].submissions}
        5. Height = ${player2cards[0].height} cm           6. Exit Game
        Select a Category`);
        }

        switch (selection) {
            case "1": selectionFunction(player1cards[0].wins, player2cards[0].wins, "wins");
                break;
            case "2": selectionFunction(player1cards[0].losses, player2cards[0].losses, "losses");
                break;
            case "3": selectionFunction(player1cards[0].kos, player2cards[0].kos, "kos");
                break;
            case "4": selectionFunction(player1cards[0].submissions, player2cards[0].submissions, "submissions");
                break;
            case "5": selectionFunction(player1cards[0].height, player2cards[0].height, "height");
                break;
            case "6": return;

            default: alert("Please select 1-6")
        }
    }
}

const selectionFunction = (player1, player2, category) => {
    if (player1 > player2) {
        alertCompareScores(player1, player2, category, 1);
        console.log(`player 1 wins the card`);
        player1Wins();
    }
    else if (player1 < player2) {
        console.log(`player 2 wins the card`);
        alertCompareScores(player1, player2, category, 2);
        player2Wins();
    }
    else {
        alertCompareScores(player1, player2, category, 3);
        itsADraw();
    }
}

const alertCompareScores = (player1Score, player2Score, catagory, winner) => {

    if (winner == "1") {
        alert(`Player 1 ${player1cards[0].name}\n ${catagory} = ${player1Score}\nPlayer 2 ${player2cards[0].name}\n${catagory} = ${player2Score}\n\nPlayer 1 wins`);
    }
    else if (winner == "2") {
        alert(`Player 1 ${player1cards[0].name}\n ${catagory} = ${player1Score}\nPlayer 2 ${player2cards[0].name}\n${catagory} = ${player2Score}\n\nPlayer 2 wins`);
    }
    else {
        alert(`Player 1 ${player1cards[0].name}\n ${catagory} = ${player1Score}\nPlayer 2 ${player2cards[0].name}\n${catagory} = ${player2Score}\n\nIt's a draw cards go in the middle`);
    }
}

const player1Wins = () => {
    if (cardsTheSame.length > 0) {
        checkIfAnyCardsInDrawPile(1);
    }
    card = player2cards.shift();
    player1cards.push(card);
    card = player1cards.shift();
    player1cards.push(card);
    currentPlayer = 1;
}

const player2Wins = () => {
    if (cardsTheSame.length > 0) {
        checkIfAnyCardsInDrawPile(2);
    }
    card = player1cards.shift();
    player2cards.push(card);
    card = player2cards.shift();
    player2cards.push(card);
    currentPlayer = 2;
}

const itsADraw = () => {
    card = player1cards.shift();
    cardsTheSame.push(card);
    card = player2cards.shift();
    cardsTheSame.push(card);
}

const checkIfAnyCardsInDrawPile = (player) => {
    let arraylength = cardsTheSame.length;
    for (let i = 0; i < arraylength; i++) {
        if (player == 1) {
            card = cardsTheSame.shift();
            player1cards.push(card);
        }
        else {
            card = cardsTheSame.shift();
            player2cards.push(card);
        }
    }
}

const endGame = () => {

    player1cards.length === 0 ? alert(`Player 2 is the winner`) : alert(`Player 1 is the winner`);
}

playGame();