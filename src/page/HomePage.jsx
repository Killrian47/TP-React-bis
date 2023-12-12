import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import LastThreeMeals from "../component/LastThreeMeals";
import RandomMeal from "../component/RandomMeal";

const HomePage = () => {

    const [meals, setMeals] = useState(null);

    useEffect(() => {
        (async () => {
            const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            const mealsResponseData = await mealsResponse.json();

            setMeals(await mealsResponseData.meals);
        })();
    }, [])

    return (
        <>
            <Header />
            <div>
                <h1 className="text-center text-danger mt-5">Bienvenue sur la page d'accueil</h1>
            </div>

            {meals ? (
                <>
                    <LastThreeMeals meals={meals} />
                    <RandomMeal meals={meals} />
                </>
            ) : (
                <p>Les données sont en chargement</p>
            )
            }

            <Footer />
        </>

    );
};

export default HomePage;