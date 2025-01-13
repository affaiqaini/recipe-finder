export const findRecipe = (recipes, id) => recipes.find(r => 
    r.id === parseInt(id) || 
    r.name.toLowerCase().includes(id?.toLowerCase())
  );