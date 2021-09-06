document.addEventListener('DOMContentLoaded', () => {
    
    //create card options
    const cardArr = [
        {
            name: 'Ash',
            img: 'images/Ash.png'
        },
        {
            name: 'Ash',
            img: 'images/Ash.png'
        },
        {
            name: 'Brock',
            img: 'images/Brock.png'
        },
        {
            name: 'Brock',
            img: 'images/Brock.png'
        },
        {
            name: 'Cilan',
            img: 'images/Cilan.png'
        },
        {
            name: 'Cilan',
            img: 'images/Cilan.png'
        },
        {
            name: 'Misty',
            img: 'images/Misty.png'
        },
        {
            name: 'Misty',
            img: 'images/Misty.png'
        },
        {
            name: 'Professor-Oak',
            img: 'images/Professor_Oak.png'
        },
        {
            name: 'Professor-Oak',
            img: 'images/Professor_Oak.png'
        },
        {
            name: 'Serena',
            img: 'images/Serena.png'
        },
        {
            name: 'Serena',
            img: 'images/Serena.png'
        },
    ]

    //randomize cards array
    cardArr.sort(() => 0.5 - Math.random())

    //pickup element with classname of grid in html
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create game board
    function createBoard() {
        //loop over card array
        for(let i = 0; i < cardArr.length; i++){
            //create an image element for each card
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('height', '100px')
            card.setAttribute('width', '100px')
            card.setAttribute('data-id', i)
            //invoke flipcard if the cards have been clicked on
            //addEventListener() sets up a function that will be called whenever the specified event is delivered to the target
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //what to do if the cards chosen match
        if(cardsChosen[0] === cardsChosen[1]){
            alert('YOU FOUND A MATCH!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen);
        } 
        //what to do if the cards chosen don't match
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('SORRY, TRY AGAIN!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        //if the number of cards won equals the number of cards in our array, we know we've collected all the possible cards in our cards array
        if(cardsWon.length === cardArr.length / 2) {
            resultDisplay.textContent = 'YOU WON!'
        }
    }


    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArr[cardId].name)
        cardsChosenId.push(cardId)
        //this attribute lets us add an image to the square based on the card id it holds
        this.setAttribute('src', cardArr[cardId].img)
        if(cardsChosen.length === 2){
            //gives us some time so the whole thing doesn't happen too quickly
            setTimeout(checkForMatch, 500)
        }
    }







createBoard()

})