import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

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
                                <p className='p-2 m-3'><strong>{meal.strMeal}</strong></p>
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