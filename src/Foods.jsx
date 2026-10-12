import foods from "./data/foods.json"

function Foods() {
    return (
        <>
            <h1>Page Foods</h1>

            {foods.map((food) => (
                <div key={food.id}>
                    <p>{food.name}</p>
                </div>
            ))}
        </>
    )
}

export default Foods