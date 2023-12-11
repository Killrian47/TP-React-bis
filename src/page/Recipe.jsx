import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Recipe = () => {

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        (async () => {
            const responseApiRecipes = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const responseApiRecipesData = await responseApiRecipes.json();

            setRecipes(await responseApiRecipesData.meals);
        })();
    }, [])


    return (
        <>
            <Header />
            <div className="">
                <h2 className="text-center">Les origines des recettes</h2>
                {recipes ? (
                    <div className="d-flex flex-wrap">
                        {recipes.map((recipe) => {
                            return (
                                <div className="d-flex flex-wrap justify-content-between w-100 mt-3">
                                    <p className="text-center w-100">{recipe.strArea}</p>
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