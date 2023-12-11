import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Categories = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const responseApiCategories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
            const responseApiCategoriesData = await responseApiCategories.json();

            setCategories(await responseApiCategoriesData.meals);
        })();
    }, [])

    console.log(categories);

    return (
        <>
            <Header />
            <div className="">
                <h2 className="text-center">Les catégories</h2>
                {categories ? (
                    <div className="d-flex flex-wrap">
                        {categories.map((category) => {
                            return (
                                <div className="d-flex flex-wrap justify-content-between w-100 mt-3">
                                    <p className="text-center w-100">{category.strCategory}</p>
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

export default Categories;