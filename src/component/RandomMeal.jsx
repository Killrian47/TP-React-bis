const RandomMeal = ({ meals }) => {
    const randomMeal = meals[(Math.floor(Math.random() * meals.length))]

    return (
        <section>
            <>
                <h2 className="mb-3">Recette aléatoire : </h2>
                <article>
                    <h3 className="mb-5">{randomMeal.strMeal}</h3>
                </article>
            </>
        </section>
    )
}

export default RandomMeal;