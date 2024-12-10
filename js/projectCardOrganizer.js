const media = window.matchMedia("(max-width: 55rem)");

const cardContainer = document.getElementById("projectCards");
const cardContainerOverflow = document.getElementById("projectCardsOverflow");

var projectCards = [];
var projectCardsOverflow= [];
var constructedCards = [];

cards.forEach((card) => {

    const cardContent = `
        <div class="card">

            <img src="${card.imgSrc}" alt="ProjectPic" height="50" width="auto">
    
            <h1>&lt;${card.title}&gt;</h1>
        
            <p>${card.desc}</p>
    
            <button type="button" onclick="location.href='${card.link}'">${card.button}</button>
                        
        </div>
        `;

        constructedCards.push(cardContent);
});

function organizeCards(constructedCards) {
    if (media.matches) {
        projectCards = constructedCards.slice(0,1);
        projectCardsOverflow = constructedCards.slice(1);
    }
    else {
        projectCards = constructedCards.slice(0,2);
        projectCardsOverflow = constructedCards.slice(2);

    }
    updateCards(projectCards, projectCardsOverflow);
}

function updateCards(cards, cardsOverflow) {
    cardContainer.innerHTML = cards.join("");
    cardContainerOverflow.innerHTML = cardsOverflow.join("");
}

media.addEventListener("change", () => {
    organizeCards(constructedCards);
});

organizeCards(constructedCards);