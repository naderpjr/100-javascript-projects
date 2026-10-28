
const API_KEY = "278b7d9b7685405a92a8eb4ceb22b372";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.replaceChildren();

    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = recipe.title;
        recipeImageEl.loading = "lazy";

        const recipeContentEl = document.createElement("div");
        recipeContentEl.classList.add("recipe-content");

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.textContent = recipe.title;

        const recipeIngredientsEl = document.createElement("p");
        const ingredientsLabelEl = document.createElement("strong");

        ingredientsLabelEl.textContent = "Ingredients: ";

        const ingredients = (recipe.extendedIngredients ?? [])
            .map((ingredient) => ingredient.original)
            .filter(Boolean)
            .join(", ");

        recipeIngredientsEl.append(
            ingredientsLabelEl,
            document.createTextNode(ingredients || "Not available.")
        );

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.textContent = "View Recipe";
        recipeLinkEl.target = "_blank";
        recipeLinkEl.rel = "noopener noreferrer";

        recipeContentEl.append(
            recipeTitleEl,
            recipeIngredientsEl,
            recipeLinkEl
        );

        recipeItemEl.append(recipeImageEl, recipeContentEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch recipes (${response.status}).`);
    }

    const data = await response.json();

    if (!Array.isArray(data.recipes)) {
        throw new Error("Invalid recipe data received.");
    }

    return data.recipes;
}

async function init() {
    recipeListEl.textContent = "Loading recipes...";

    try {
        const recipes = await getRecipes();
        displayRecipes(recipes);
    } catch (error) {
        console.error("Error loading recipes:", error);
        recipeListEl.textContent =
            "Unable to load recipes. Please check your API key and try again.";
    }
}

init();
