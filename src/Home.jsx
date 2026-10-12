import foods from "./data/foods.json"

import { useState } from "react"

function Home() {
    const [food, setFood] = useState(0)
    const [click, setClick] = useState(false)

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
                <p>{foods[food].name}</p>
            }
        </>
    )
}

export default Home