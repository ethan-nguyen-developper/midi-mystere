import { useState } from "react"

function Repas() {
    const [input, setInput] = useState("")

    return (
        <>
            <h1>Page Repas</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Soumettre</button>
            <p>{input}</p>
        </>
    )
}

export default Repas