import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Recipe = () => {

    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const responseApiIngredients = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            const responseApiIngredientsData = await responseApiIngredients.json();

            setIngredients(await responseApiIngredientsData.meals);
        })();
    }, [])


    return (
        <>
            <Header />
            <div className="">
                <h2 className="text-center">Les ingrédients des recettes</h2>
                {ingredients ? (
                    <div className="d-flex flex-wrap">
                        {ingredients.map((ingredient) => {
                            return (
                                <div className="d-flex flex-wrap ">
                                    <p className="m-3">{ingredient.strIngredient}</p>
                                </div>
                            )

                        })}
                    </div>
                ) : (
                    <p>Elles sont en cours de chargement</p>
                )}

            </div>
            <Footer />
        </>
    )
}

export default Recipe;