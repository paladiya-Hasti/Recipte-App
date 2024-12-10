import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
 
        <div >
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-96 h-48 object-cover"
            />
           
        </div>

        
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
                {recipe.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {recipe.description}
            </p>
            <div className="mt-4">
                <Link
                    to={`/recipe/${recipe.id}`}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md transition duration-200"
                >
                    View Recipe
                </Link>
            </div>
        </div>
    </div>

    );
}

export default RecipeCard;