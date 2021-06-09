document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            image: 'images/fries.png',
            found: false
        }, 
        {
            name: 'fries',
            image: 'images/fries.png', 
            found: false
        }, 
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png',
            found: false
        }, 
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png',
            found: false
        }, 
        {
            name: 'hotdog',
            image: 'images/hotdog.png',
            found: false
        }, 
        {
            name: 'hotdog',
            image: 'images/hotdog.png',
            found: false
        }, 
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png', 
            found: false
        }, 
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png',
            found: false
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png',
            found: false
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png',
            found: false
        },
        {
            name: 'pizza',
            image: 'images/pizza.png',
            found: false
        },
        {
            name: 'pizza',
            image: 'images/pizza.png',
            found: false
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChoosen = []
    let cardsChoosenId = []
    let cardsWon = []

     //create gameboard
     function createBoard() {
         for(let i = 0; i < cardArray.length; i++) {
             var card = document.createElement('img')
             card.setAttribute('src', 'images/blank.png')
             card.setAttribute('data-id', i)
             card.addEventListener('click', flipcard)
             grid.appendChild(card)
         }
     }

     //check for matches
     function checkForMatch() {
         var cards = document.querySelectorAll('img')
         const optionOneId = cardsChoosenId[0]
         const optionTwoId = cardsChoosenId[1]
         if(cardsChoosen[0] === cardsChoosen[1]){
             alert("You found a match!")
             cards[optionOneId].setAttribute('src', 'images/white.png')
             cards[optionTwoId].setAttribute('src', 'images/white.png')
             cardArray[optionOneId].found = true
             cardArray[optionTwoId].found = true
             cardsWon.push(cardsChoosen)
         } else {
             cards[optionOneId].setAttribute('src', 'images/blank.png')
             cards[optionTwoId].setAttribute('src', 'images/blank.png')
             alert('Sorry, try again')
         }

         cardsChoosen = []
         cardsChoosenId = []
         resultDisplay.textContent = cardsWon.length

         if(cardsWon.length === cards.length/2){
            resultDisplay.textContent = "Congratulations! You have found them all!"
         }
     }

     //flip your card
     function flipcard(){
         if(cardsWon.length < cardArray.length/2 ) {
            var cardId = this.getAttribute('data-id')
            if(cardArray[cardId].found == false){
                cardsChoosen.push(cardArray[cardId].name)
                cardsChoosenId.push(cardId)
                this.setAttribute('src', cardArray[cardId].image)
                if(cardsChoosen.length === 2) {
                    setTimeout(checkForMatch, 500)
                }
            }
        }
     }

     createBoard()
});
