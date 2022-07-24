
const searchBar = document.getElementById('searchBar');

const searchBarMobile = document.getElementById('searchBarMobile');

let cardsName = [
    "rainbow",
    "etherscan",
    "uniswap",
    "trustwallet",
    "binancedex",
    "argent",
    "opensea",
    "metamask",
    "compound",
];

searchBar.addEventListener('keyup', (e)=>{
    filter(e.target.value.toLowerCase())
});

searchBarMobile.addEventListener('keyup', (e)=>{
    filter(e.target.value.toLowerCase())
});

function filter(search){
    const filteredCards = cardsName.filter((card)=>{
        return(
           card.includes(search) 
        )
    } )
    displayCards(filteredCards)
}

function displayCards(name){
    let allElements = document.getElementsByClassName('element');
    let noElement = document.getElementsByClassName('no-element');
    let arrayElements = Array.from(allElements);
    arrayElements.map((elem) =>{
        let title = elem.children[2].children[0].innerHTML;
        let cleanTitle = title.toLowerCase().replace(/\s/g, '');
        if(name === undefined || name.length === 9){
            elem.style.display = "block";
        }
        else if (name.includes(cleanTitle)){
            elem.style.display = "block";
        }
        else{
            elem.style.display = "none";
        }
    });
    name.length === 0 ? noElement[0].style.display = "flex" : noElement[0].style.display = "none";
}

displayCards();

