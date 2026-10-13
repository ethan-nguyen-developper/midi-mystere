import foods from "./data/foods.json"

import { useState, useEffect } from "react"

function Foods() {
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

    return (
        <>
            <h1>Page Foods</h1>

            {foods.map((food) => (
                <div key={food.id}>
                    <p>Nom : {food.name}</p>
                    <p>Marque : {food.brand}</p>
                    <p>Prix : {food.price} €</p>
                    <p>Catégorie : {food.category}</p>
                    <p>Type : {food.mealType}</p>
                    <p>Température : {food.temperature}</p>
                    <p>Poids : {food.weightGrams} g</p>
                    { favorites.some(favorite => favorite.id === food.id) === false ?
                        <button onClick={() => handleAddToFavorites(food)}>Ajouter aux favoris</button>
                        :
                        <button onClick={() => handleDeleteFromFavorites(food)}>Supprimer des favoris</button>
                    }
                </div>
            ))}
        </>
    )
}

export default Foods