import { useSearch } from "../hooks/useSearch";
import { RecipeCard } from "../components/RecipeCard";
import recipes from "../data/recipes.json";
import Link from "next/link";

export default function Home() {
  const { search, debouncedSearch, handleSearchChange } = useSearch();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  );

  return (
    <div className="container">
      <h1 className="title">Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="recipes-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))
        ) : (
          <p className="no-results">
            No recipes found. Try searching with different ingredients.
          </p>
        )}
      </div>
    </div>
  );
}