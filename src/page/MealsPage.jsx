import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const MealsPage = () => {

    const [meals, setMeals] = useState(null);

    useEffect(() => {
        (async () => {
            const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setMeals(await responseApi.json());
        })();
    }, []);

    return (
        <>
            <Header />
            <div className="d-flex flex-wrap">
                {meals ? (
                    <>
                        {meals.meals.map((meal) => {
                            return (
                                <div className='p-2 m-3'>
                                    <p><strong>{meal.strMeal}</strong></p>
                                    <Link to={`/meal/detail/${meal.idMeal}`}>Voir la recette</Link>
                                </div>
                            )
                        })}
                    </>
                ) :
                    (
                        <p>Les recettes sont en cours de chargement</p>
                    )}
            </div>
            <Footer />
        </>

    );
};

export default MealsPage;