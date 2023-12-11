import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="d-flex justify-content-between w-100">
                <div>
                    <h4 className="m-3">Meals in english</h4>
                </div>
                <div className="mt-3">
                    <nav className="me-5">
                        <ul className="d-flex justify-content-between">
                            <li className="pe-2"><Link to='/'>Home</Link></li>
                            <li className="pe-2"><Link to='/meals'>All meals</Link></li>
                            <li className="pe-2"><Link to='/categories'>Categories</Link></li>
                            <li className="pe-2"><Link to='/origins-recipes'>Origins</Link></li>
                            <li className="pe-2"><Link to='/ingredients'>Ingredients</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;