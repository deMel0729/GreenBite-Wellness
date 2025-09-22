          window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
  
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // toggle 'scrolled' class as soon as scrollY > 0
  header.classList.toggle("scrolled", window.scrollY > 0);
});

        const RECIPES = [
    // Breakfast
    {
        id: 1,
        name: "Banana Oat Pancakes",
        category: "Breakfast",
        image: "./img/recipes/banana oat pancake.webp",
        servings: 4,
        time: "15 minutes",
        difficulty: "easy",
        ingredients: [
            "1 cup rolled oats",
            "1 ripe banana",
            "1 cup milk",
            "1 egg",
            "1 tsp baking powder",
            "1 tsp vanilla extract",
            "Pinch of salt"
        ],
        instructions: [
            "Blend oats into flour in a blender",
            "Mash banana and mix with milk and egg",
            "Combine oat flour, banana mixture, baking powder, and salt",
            "Heat non-stick pan over medium heat",
            "Pour batter to form pancakes",
            "Cook until bubbles appear, flip, and cook until golden"
        ],
        nutrition: {
            calories: 200,
            protein: "6g",
            carbs: "32g",
            fat: "5g",
            fiber: "4g",
            sugar: "8g",
            sodium: "120mg"
        }
    },
    {
        id: 2,
        name: "Avocado Toast with Egg",
        category: "Breakfast",
        image: "./img/recipes/avacado toast with egg.webp",
        servings: 2,
        time: "10 minutes",
        difficulty: "easy",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "2 eggs",
            "Salt and pepper",
            "Chili flakes (optional)"
        ],
        instructions: [
            "Toast the bread slices",
            "Mash avocado and season with salt and pepper",
            "Spread avocado on toast",
            "Fry or poach eggs and place on top",
            "Sprinkle chili flakes if desired"
        ],
        nutrition: {
            calories: 320,
            protein: "12g",
            carbs: "28g",
            fat: "18g",
            fiber: "8g",
            sugar: "2g",
            sodium: "200mg"
        }
    },

    // Lunch
    {
        id: 3,
        name: "Grilled Chicken Wrap",
        category: "Lunch",
        image: "./img/recipes/grilled chicken wrap.webp",
        servings: 2,
        time: "20 minutes",
        difficulty: "medium",
        ingredients: [
            "2 whole wheat wraps",
            "1 chicken breast, grilled and sliced",
            "1/2 cup lettuce",
            "1/4 cup shredded carrots",
            "2 tbsp hummus",
            "Salt and pepper"
        ],
        instructions: [
            "Grill the chicken and season with salt and pepper",
            "Spread hummus on wraps",
            "Add lettuce, carrots, and chicken slices",
            "Roll the wrap tightly and slice in half"
        ],
        nutrition: {
            calories: 350,
            protein: "28g",
            carbs: "40g",
            fat: "10g",
            fiber: "6g",
            sugar: "3g",
            sodium: "450mg"
        }
    },
    {
        id: 4,
        name: "Quinoa Veggie Bowl",
        category: "Lunch",
        image: "./img/recipes/quinoa veggie bowl.webp",
        servings: 2,
        time: "25 minutes",
        difficulty: "easy",
        ingredients: [
            "1 cup cooked quinoa",
            "1/2 cup cherry tomatoes, halved",
            "1/2 cup cucumber, diced",
            "1/4 cup feta cheese",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper"
        ],
        instructions: [
            "Cook quinoa according to package instructions",
            "Chop vegetables",
            "Mix quinoa, veggies, and feta in a bowl",
            "Drizzle olive oil and lemon juice, season with salt and pepper"
        ],
        nutrition: {
            calories: 300,
            protein: "10g",
            carbs: "35g",
            fat: "12g",
            fiber: "5g",
            sugar: "4g",
            sodium: "320mg"
        }
    },

    // Dinner
    {
        id: 5,
        name: "Salmon with Roasted Vegetables",
        category: "Dinner",
        image: "./img/recipes/salmon with roasted vegetable.webp",
        servings: 2,
        time: "30 minutes",
        difficulty: "medium",
        ingredients: [
            "2 salmon fillets",
            "1 cup broccoli florets",
            "1 cup carrot slices",
            "2 tbsp olive oil",
            "Salt and pepper",
            "1 tsp garlic powder"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C)",
            "Toss vegetables with olive oil, salt, pepper, and garlic powder",
            "Place vegetables on baking tray and roast for 15 min",
            "Add salmon fillets and bake for 12-15 min until cooked"
        ],
        nutrition: {
            calories: 450,
            protein: "35g",
            carbs: "20g",
            fat: "25g",
            fiber: "6g",
            sugar: "6g",
            sodium: "300mg"
        }
    },
    {
        id: 6,
        name: "Beef Stir Fry",
        category: "Dinner",
        image: "./img/recipes/beef stir fry.webp",
        servings: 2,
        time: "25 minutes",
        difficulty: "medium",
        ingredients: [
            "200g beef strips",
            "1 cup bell peppers, sliced",
            "1/2 cup broccoli florets",
            "2 tbsp soy sauce",
            "1 tbsp olive oil",
            "1 tsp ginger, minced",
            "1 tsp garlic, minced"
        ],
        instructions: [
            "Heat olive oil in pan",
            "Add beef strips and cook until brown",
            "Add garlic and ginger, stir fry for 1 min",
            "Add vegetables and soy sauce, cook until tender"
        ],
        nutrition: {
            calories: 400,
            protein: "30g",
            carbs: "15g",
            fat: "22g",
            fiber: "4g",
            sugar: "5g",
            sodium: "600mg"
        }
    },

    // Snacks
    {
        id: 7,
        name: "Fruit Yogurt Parfait",
        category: "Snack",
        image: "./img/recipes/fruit yogurt parfait.webp",
        servings: 2,
        time: "5 minutes",
        difficulty: "easy",
        ingredients: [
            "1 cup Greek yogurt",
            "1/2 cup granola",
            "1/2 cup mixed berries",
            "1 tsp honey"
        ],
        instructions: [
            "Layer yogurt, granola, and berries in a glass",
            "Drizzle honey on top",
            "Serve immediately"
        ],
        nutrition: {
            calories: 220,
            protein: "10g",
            carbs: "28g",
            fat: "7g",
            fiber: "4g",
            sugar: "12g",
            sodium: "70mg"
        }
    },
    {
        id: 8,
        name: "Roasted Chickpeas",
        category: "Snack",
        image: "./img/recipes/chick peas.webp",
        servings: 4,
        time: "20 minutes",
        difficulty: "easy",
        ingredients: [
            "1 can chickpeas, drained and rinsed",
            "1 tbsp olive oil",
            "1 tsp paprika",
            "1/2 tsp garlic powder",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C)",
            "Toss chickpeas with olive oil and seasonings",
            "Spread on baking sheet and roast 20 min, shaking halfway"
        ],
        nutrition: {
            calories: 120,
            protein: "6g",
            carbs: "18g",
            fat: "3g",
            fiber: "5g",
            sugar: "2g",
            sodium: "250mg"
        }
    }
];


        // Application State
        class RecipeApp {
            constructor() {
                this.currentCategory = 'All';
                this.searchTerm = '';
                this.init();
            }

            init() {
                this.bindEvents();
                this.renderTabs();
                this.renderRecipes();
            }

            bindEvents() {
                const searchBox = document.getElementById('searchBox');
                const closeBtn = document.getElementById('closeModal');
                const modal = document.getElementById('recipeModal');

                searchBox.addEventListener('input', (e) => this.handleSearch(e));
                closeBtn.addEventListener('click', () => this.closeModal());
                
                // Close dialog when clicking on backdrop
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.closeModal();
                    }
                });

                // Close dialog with Escape key (built-in behavior)
                modal.addEventListener('cancel', (e) => {
                    e.preventDefault(); // Prevent default cancel behavior
                    this.closeModal();
                });
            }

            handleSearch(e) {
                this.searchTerm = e.target.value;
                this.renderRecipes();
            }

            getCategories() {
                const categories = [...new Set(RECIPES.map(recipe => recipe.category))];
                return ['All', ...categories.sort()];
            }

            filterRecipes() {
                let filtered = RECIPES;

                if (this.currentCategory !== 'All') {
                    filtered = filtered.filter(recipe => recipe.category === this.currentCategory);
                }

                if (this.searchTerm) {
                    const term = this.searchTerm.toLowerCase();
                    filtered = filtered.filter(recipe => 
                        recipe.name.toLowerCase().includes(term) ||
                        recipe.ingredients.some(ingredient => 
                            ingredient.toLowerCase().includes(term)
                        )
                    );
                }

                return filtered;
            }

            renderTabs() {
                const tabNav = document.getElementById('tabNavigation');
                const categories = this.getCategories();

                tabNav.innerHTML = categories.map(category => 
                    `<button class="tab-btn ${category === this.currentCategory ? 'active' : ''}"
                        onclick="app.filterByCategory('${category}')">
                        ${category}
                    </button>`
                ).join('');
            }

            renderRecipes() {
                const grid = document.getElementById('recipeGrid');
                const filteredRecipes = this.filterRecipes();

                if (filteredRecipes.length === 0) {
                    grid.innerHTML = '<div class="no-results">No recipes found.</div>';
                    return;
                }

                grid.innerHTML = filteredRecipes.map(recipe => 
                    `<article class="recipe-card" onclick="app.openModal(${recipe.id})">
                        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                        <div class="recipe-content">
                            <h3 class="recipe-name">${recipe.name}</h3>
                            <div class="recipe-info">
                                <div class="recipe-info-item">
                                    <span>Servings:</span>
                                    <span>${recipe.servings}</span>
                                </div>
                                <div class="recipe-info-item">
                                    <span>Time:</span>
                                    <span>${recipe.time}</span>
                                </div>
                                <div class="recipe-info-item">
                                    <span>Difficulty:</span>
                                    <span class="difficulty ${recipe.difficulty}">${this.capitalize(recipe.difficulty)}</span>
                                </div>
                            </div>
                        </div>
                    </article>`
                ).join('');
            }

            openModal(recipeId) {
                const recipe = RECIPES.find(r => r.id === recipeId);
                if (!recipe) return;

                const modal = document.getElementById('recipeModal');
                const modalBody = document.getElementById('modalBody');

                modalBody.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}" class="modal-image">
                    <div class="recipe-header">
                        <h2>${recipe.name}</h2>
                        <div class="recipe-meta">
                            <div><strong>Servings:</strong> ${recipe.servings}</div>
                            <div><strong>Time:</strong> ${recipe.time}</div>
                            <div><strong>Difficulty:</strong> 
                                <span class="difficulty ${recipe.difficulty}">${this.capitalize(recipe.difficulty)}</span>
                            </div>
                        </div>
                    </div>
                    
                    <section class="recipe-section">
                        <h3>Ingredients:</h3>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </section>
                    
                    <section class="recipe-section">
                        <h3>Instructions:</h3>
                        <ol>
                            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ol>
                    </section>
                    
                    <section class="recipe-section nutrition-section">
                        <h3>Nutrition Information (Per Serving)</h3>
                        <div class="nutrition-grid">
                            ${Object.entries(recipe.nutrition).map(([key, value]) => 
                                `<div class="nutrition-item">
                                    <span class="nutrition-label">${this.capitalize(key)}:</span>
                                    <span class="nutrition-value">${value}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </section>
                `;

                modal.showModal();
            }

            closeModal() {
                const modal = document.getElementById('recipeModal');
                modal.close();
            }

            filterByCategory(category) {
                this.currentCategory = category;
                this.renderTabs();
                this.renderRecipes();
            }

            capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }

        // Initialize Application
        const app = new RecipeApp();