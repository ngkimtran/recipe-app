import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = 'ff3f1db3';
    const APP_KEY = '8b7083a5b9911f4e1264e279e25ca001';
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
      getRecipes();
    }, [query]);

    const getRecipes = async() => {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then (response => response.json())
      .then(response => setRecipes(response.hits));
    }
    
    const updateSearch = (e) => {
      setSearch(e.target.value);
    }
    
    const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    
    return (
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value ={search} onChange={updateSearch} required/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe =>(
            <Recipe 
              key={recipe.recipe.label} 
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    );
};

export default App;
