import { useState } from "react";

const MealsPage = () => {
    
    const [meals, setMeals] = useState(null);

    if (meals === null) {
        (async() => {
            const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setMeals(await responseApi.json());
        })();
    }
 
    return (
        <div>
            {meals ? (
                <>
                    {meals.meals.map((meal) => {
                        return (
                            <p><strong>{meal.strMeal}</strong></p>
                        )
                    })}
                </>
            ) : 
            (
                <p>Les recettes sont en cours de chargement</p>
             )}
        </div>
    );
};

export default MealsPage;