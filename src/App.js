import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./page/HomePage.jsx";
import MealsPage from "./page/MealsPage.jsx";
import Categories from './page/Categories.jsx';
import './App.css'
import Recipe from './page/Recipe.jsx';
import Ingredient from './page/Ingredient.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meals' element={<MealsPage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/origins-recipes' element={<Recipe />} />
          <Route path='/ingredients' element={<Ingredient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
