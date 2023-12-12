const LastThreeMeals = ({ meals }) => {

    const lastThreeMeals = meals.slice(-3)

    return (
        <section className="mb-5">
            <>
                <h2 className="mb-3">Les trois dernières recettes :</h2>
                <article>
                    {lastThreeMeals.map((meal) => {
                        return (<h3 className="pb-2">{meal.strMeal}</h3>)
                    })}
                </article>
            </>
        </section>
    )
}

export default LastThreeMeals;