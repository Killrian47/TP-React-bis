import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";

const MealDetail = () => {
    let { id } = useParams();
    const [oneMeal, setOneMeal] = useState(null);
    //let ingredientsForRecipe = [];

    useEffect(() => {
        (async () => {
            const oneMealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
            const oneMealResponseData = await oneMealResponse.json();

            setOneMeal(await oneMealResponseData.meals[0]);

            /*let index = 1;
            for await (ingredientsForRecipe of oneMeal) {
                ingredientsForRecipe.push(oneMeal.strIngredient + index);
                console.log(await ingredientsForRecipe);
                index++
            }*/
        })();
    }, [])

    console.log(oneMeal);

    return (
        <>
            <Header />
            {
                oneMeal ? (
                    <>
                        <div className="w-100 d-flex align-items-center flex-column">
                            <h2 className=" mt-3 ">Les détails de {oneMeal.strMeal}</h2>
                            <img className="mt-3" src={oneMeal.strMealThumb} alt={`image recette ${oneMeal.strMeal}`} width={500} height={500} />
                            <p className="w-50 mt-3">{oneMeal.strInstructions}</p>
                        </div>
                    </>
                ) : (
                    <h2 className="text-center text-danger">La recette est en cours de chargement</h2>
                )
            }
        </>
    )
}

export default MealDetail;