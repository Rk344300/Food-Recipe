import React from 'react';
import RecipeItem from "../components/RecipeItem";

const  Recipe =(props) =>{
    const { recipes }=props;

    return(
        
        <div className="card-columns">
            {recipes.map(recipe1 =>(
            <RecipeItem
            key={Math.random() *100}
            name={recipe1.recipe.label}
            image={recipe1.recipe.image}
            ingredientLines={recipe1.recipe.ingredientLines}
            />
            ))}

        </div>
        
    
    );
};
export default Recipe;