import foods from "./data/foods.json"

function Food() {
    return (
        <>
            <h1>Bienvenue sur la page Food</h1>

            <table>
                <thead>
                    <th>Nom</th>
                    <th>Besoin de couvert</th>
                    <th>Nutriscore</th>
                    <th>Prix</th>
                    <th>Poids</th>
                </thead>

                <tbody>
                    {foods.map((food) => (
                        <tr key={food.id}>
                            <td>{food.name}</td>
                            <td>{food.besoin_couvert}</td>
                            <td>{food.nutriscore}</td>
                            <td>{food.price}</td>
                            <td>{food.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Food