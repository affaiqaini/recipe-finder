/* RecipeCard component displays a preview card for a recipe
 * Shows recipe image, title, and cooking time
 */
export function RecipeCard({ recipe }) {
    return (
      <div className="recipe-card">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <h3 className="recipe-title">{recipe.name}</h3>
        <div className="cooking-time">
          <span>Cooking Time: </span>
          <span>{recipe.cooking_time} minutes</span>
        </div>
      </div>
    );
  }