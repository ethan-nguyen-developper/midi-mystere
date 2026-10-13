import { useState, useEffect } from "react"

function Favorites() {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function handleDeleteFromFavorites(id) {
        setFavorites([ ... favorites.filter(favorite => favorite.id != id)])
    }
    
    return (
        <>
            <h1>Page Favorites</h1>

            {favorites.map((favorite) => (
                <div key={favorite.id}>
                    <p>Nom : {favorite.name}</p>
                    <p>Marque : {favorite.brand}</p>
                    <p>Prix : {favorite.price} €</p>
                    <p>Catégorie : {favorite.category}</p>
                    <p>Type : {favorite.mealType}</p>
                    <p>Température : {favorite.temperature}</p>
                    <p>Poids : {favorite.weightGrams} g</p>
                    <button onClick={() => handleDeleteFromFavorites(favorite.id)}>Supprimer des favoris</button>
                </div>
            ))}
        </>
    )
}

export default Favorites