import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { findRecipe } from "../../utils/findRecipe";
import recipes from "../../data/recipes.json";
import Image from "next/image";

export default function RecipeDetails() {
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.id) {
      setRecipe(findRecipe(recipes, router.query.id));
      setLoading(false);
    }
  }, [router.query.id]);

  if (loading) return <Loading />;
  if (!recipe) return <NotFound onBack={() => router.push("/")} />;

  const { name, image, ingredients, cooking_time, instructions } = recipe;

  return (
    <div className="recipe-container">
      <h1 className="title">{name}</h1>
      <div className="image-container">
        <Image
          src={`/${image}`}
          alt={name}
          width={500}
          height={300}
          className="recipe-detail-image"
          priority
        />
      </div>
      <div className="recipe-content">
        <p><strong>Ingredients:</strong> {ingredients.join(", ")}</p>
        <p><strong>Cooking Time:</strong> {cooking_time} minutes</p>
        <p><strong>Instructions:</strong> {instructions}</p>
      </div>
      <button onClick={() => router.push("/")} className="btn-primary mt-8">
        Back to Home
      </button>
    </div>
  );
}