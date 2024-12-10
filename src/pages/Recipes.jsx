import React from 'react';
import RecipeCard from '../component/RecipeCard';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Recipes({ recipes }) {
  return (
    <>
    <Header/>
    {/* <div className="recipe-list-header">
    <h1 className="mb-4 text-center">All Recipes</h1>
    </div> */}
    <div className="container mx-auto mt-4 p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
            <div key={recipe.id}>
                <RecipeCard recipe={recipe} />
            </div>
        ))}
    </div>
</div>

 <Footer/>
    </>
  );
}

export default Recipes;