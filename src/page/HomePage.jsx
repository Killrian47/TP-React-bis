import Footer from "../component/Footer";
import Header from "../component/Header";

const HomePage = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className="text-center text-danger mt-5">Bienvenue sur la page d'accueil</h1>
            </div>
            <Footer />
        </>

    );
};

export default HomePage;