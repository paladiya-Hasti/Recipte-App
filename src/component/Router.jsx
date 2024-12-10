import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddRecipe from '../pages/AddRecipe'
import Recipes from '../pages/Recipes'
import { initialRecipes } from '../data/Recipe'
import RecipeList from './RecipeList'
import RecipeDetails from './RecipeDetails'
import EditRecipe from './EditRecipe'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router = () => {
  
  const [recipes, setRecipes] = useState(initialRecipes);
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
  };

  const handleEditRecipe = (editedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === editedRecipe.id ? editedRecipe : recipe));
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home recipes={recipes}/>}/>
        <Route path='/add-recipe' element={<AddRecipe onAddRecipe={handleAddRecipe}/>}/>
        <Route path='/recipes' element={<Recipes recipes={recipes}/>}/>
        <Route path='/recipe-list' element={<RecipeList  recipes={recipes} onDelete={handleDeleteRecipe}/>}/>
        <Route path='/recipe/:id' element={<RecipeDetails recipes={recipes}/>}/>
        <Route path='/edit-recipe/:id' element={<EditRecipe recipes={recipes} onEditRecipe={handleEditRecipe}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Register/>}/>

      </Routes>
    </div>
  )
}

export default Router