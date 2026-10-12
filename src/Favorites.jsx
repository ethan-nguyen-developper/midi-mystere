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
                    <p>{favorite.name}</p>
                    <button onClick={() => handleDeleteFromFavorites(favorite.id)}>Supprimer des favoris</button>
                </div>
            ))}
        </>
    )
}

export default Favorites