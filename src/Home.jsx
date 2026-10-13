import foods from "./data/foods.json"

import { useState, useEffect } from "react"

function Home() {
    const [food, setFood] = useState(0)
    const [click, setClick] = useState(false)
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function handleAddToFavorites(food) {
        setFavorites([ ... favorites, food])
    }

    function handleDeleteFromFavorites(food) {
        setFavorites([ ... favorites.filter(favorite => favorite.id != food.id)])
    }

    function pickRandomFood() {
        setClick(true)
        setFood(Math.floor(Math.random() * foods.length))
    }

    return (
        <>
            <h1>Midi Mystère</h1>
            <p>Tu manges quoi ce midi ?</p>

            <button onClick={() => pickRandomFood()}>Choisis mon repas !</button>

            { click === true &&
                <>
                    <p>Nom : {foods[food].name}</p>
                    <p>Marque : {foods[food].brand}</p>
                    <p>Prix : {foods[food].price} €</p>
                    <p>Catégorie : {foods[food].category}</p>
                    <p>Type : {foods[food].mealType}</p>
                    <p>Température : {foods[food].temperature}</p>
                    <p>Poids : {foods[food].weightGrams} g</p>
                    { favorites.some(favorite => favorite.id === foods[food].id) === false ?
                        <button onClick={() => handleAddToFavorites(foods[food])}>Ajouter aux favoris</button>
                        :
                        <button onClick={() => handleDeleteFromFavorites(foods[food])}>Supprimer des favoris</button>
                    }
                </>
            }
        </>
    )
}

export default Home