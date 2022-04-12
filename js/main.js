document.querySelector('button').addEventListener('click', updatePage)



function updatePage(){
    getJoke()
    getDog()
}


function getJoke(){
    // let drink = document.querySelector('input').value

    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        // console.log(data.category)
        document.querySelector('h2').innerText = data.category
        document.querySelector('h3').innerText = data.joke
        // console.log(data.drinks[0])
        // // document.querySelector('img').src = data.message
        // document.querySelector('h2').innerText = data.drinks[0].strDrink
        // document.querySelector('img').src = data.drinks[0].strDrinkThumb
        // document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function getDog(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('img').src = data.message
    })
}