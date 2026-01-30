import { create } from 'zustand';

 const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  setSearchTerm: (term) =>
    set({ searchTerm: term }),

  
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));
export default useRecipeStore;