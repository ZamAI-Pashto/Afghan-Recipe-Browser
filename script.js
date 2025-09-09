// Afghan Recipe Browser - Main Application Script

class AfghanRecipeBrowser {
    constructor() {
        this.currentFilter = 'all';
        this.currentSearchTerm = '';
        this.init();
    }

    init() {
        this.bindEventListeners();
        this.displayRecipes(afghanRecipes);
        this.updateFilterCounts();
    }

    bindEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        searchInput.addEventListener('input', (e) => {
            this.currentSearchTerm = e.target.value.toLowerCase();
            this.filterAndDisplayRecipes();
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.filterAndDisplayRecipes();
            }
        });

        searchBtn.addEventListener('click', () => {
            this.filterAndDisplayRecipes();
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(button => button.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                this.currentFilter = e.target.dataset.category;
                this.filterAndDisplayRecipes();
            });
        });

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all nav links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                // Add active class to clicked link
                e.target.classList.add('active');
                
                const targetId = e.target.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });

        // Modal functionality
        const modal = document.getElementById('recipeModal');
        const closeModal = document.querySelector('.close');
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    filterAndDisplayRecipes() {
        let filteredRecipes = afghanRecipes;

        // Filter by category
        if (this.currentFilter !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => 
                recipe.category === this.currentFilter
            );
        }

        // Filter by search term
        if (this.currentSearchTerm) {
            filteredRecipes = filteredRecipes.filter(recipe =>
                recipe.name.toLowerCase().includes(this.currentSearchTerm) ||
                recipe.description.toLowerCase().includes(this.currentSearchTerm) ||
                recipe.ingredients.some(ingredient => 
                    ingredient.toLowerCase().includes(this.currentSearchTerm)
                ) ||
                recipe.category.toLowerCase().includes(this.currentSearchTerm)
            );
        }

        this.displayRecipes(filteredRecipes);
    }

    displayRecipes(recipes) {
        const recipeGrid = document.getElementById('recipeGrid');
        const noResults = document.getElementById('noResults');

        if (recipes.length === 0) {
            recipeGrid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        recipeGrid.style.display = 'grid';
        noResults.style.display = 'none';

        recipeGrid.innerHTML = recipes.map(recipe => `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div class="recipe-image">
                    <span style="font-size: 3rem;">${recipe.icon}</span>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    <div class="recipe-meta">
                        <span class="recipe-category">${this.formatCategory(recipe.category)}</span>
                        <span class="recipe-time">
                            <i class="fas fa-clock"></i>
                            ${recipe.prepTime || '30 min'}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click listeners to recipe cards
        const recipeCards = document.querySelectorAll('.recipe-card');
        recipeCards.forEach(card => {
            card.addEventListener('click', () => {
                const recipeId = parseInt(card.dataset.recipeId);
                this.showRecipeModal(recipeId);
            });
        });
    }

    showRecipeModal(recipeId) {
        const recipe = afghanRecipes.find(r => r.id === recipeId);
        if (!recipe) return;

        const modal = document.getElementById('recipeModal');
        const modalContent = document.getElementById('modalContent');

        modalContent.innerHTML = `
            <h2 class="modal-recipe-title">${recipe.name}</h2>
            <div class="modal-recipe-image">
                <span style="font-size: 4rem;">${recipe.icon}</span>
            </div>
            
            <div class="recipe-info" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem; text-align: center;">
                <div style="background: var(--background-light); padding: 1rem; border-radius: 8px;">
                    <i class="fas fa-clock" style="color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                    <p><strong>Prep Time</strong></p>
                    <p>${recipe.prepTime || 'N/A'}</p>
                </div>
                <div style="background: var(--background-light); padding: 1rem; border-radius: 8px;">
                    <i class="fas fa-fire" style="color: var(--secondary-color); margin-bottom: 0.5rem;"></i>
                    <p><strong>Cook Time</strong></p>
                    <p>${recipe.cookTime || 'N/A'}</p>
                </div>
                <div style="background: var(--background-light); padding: 1rem; border-radius: 8px;">
                    <i class="fas fa-users" style="color: var(--accent-color); margin-bottom: 0.5rem;"></i>
                    <p><strong>Servings</strong></p>
                    <p>${recipe.servings || 'N/A'}</p>
                </div>
                <div style="background: var(--background-light); padding: 1rem; border-radius: 8px;">
                    <i class="fas fa-chart-bar" style="color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                    <p><strong>Difficulty</strong></p>
                    <p>${recipe.difficulty || 'Medium'}</p>
                </div>
            </div>

            <div class="recipe-details">
                <div class="ingredients-section">
                    <h3><i class="fas fa-list"></i> Ingredients</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `
                            <li>${ingredient}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="instructions-section">
                    <h3><i class="fas fa-clipboard-list"></i> Instructions</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(instruction => `
                            <li>${instruction}</li>
                        `).join('')}
                    </ol>
                </div>
            </div>

            <div style="margin-top: 2rem; padding: 1rem; background: var(--background-light); border-radius: 8px; text-align: center;">
                <p style="color: var(--text-secondary); font-style: italic;">
                    <i class="fas fa-heart" style="color: var(--secondary-color);"></i>
                    This traditional Afghan recipe has been passed down through generations. Enjoy!
                </p>
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    formatCategory(category) {
        const categoryMap = {
            'rice': 'Rice Dishes',
            'meat': 'Meat Dishes',
            'vegetables': 'Vegetables',
            'desserts': 'Desserts',
            'bread': 'Bread & Pastries',
            'drinks': 'Drinks'
        };
        return categoryMap[category] || category;
    }

    updateFilterCounts() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            const category = btn.dataset.category;
            if (category === 'all') {
                return; // Don't add count to "All Recipes"
            }
            
            const count = afghanRecipes.filter(recipe => recipe.category === category).length;
            if (count > 0) {
                btn.innerHTML += ` (${count})`;
            }
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Utility method to search recipes by various criteria
    searchRecipes(query) {
        const searchTerm = query.toLowerCase();
        return afghanRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(searchTerm)
            ) ||
            recipe.instructions.some(instruction => 
                instruction.toLowerCase().includes(searchTerm)
            )
        );
    }

    // Method to get recipes by category
    getRecipesByCategory(category) {
        if (category === 'all') {
            return afghanRecipes;
        }
        return afghanRecipes.filter(recipe => recipe.category === category);
    }

    // Method to get random recipe
    getRandomRecipe() {
        const randomIndex = Math.floor(Math.random() * afghanRecipes.length);
        return afghanRecipes[randomIndex];
    }

    // Method to get featured recipes (for future enhancement)
    getFeaturedRecipes(count = 3) {
        // Return first few recipes as featured for now
        return afghanRecipes.slice(0, count);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new AfghanRecipeBrowser();
    
    // Add some loading animation
    const recipeGrid = document.getElementById('recipeGrid');
    recipeGrid.innerHTML = '<div class="loading" style="grid-column: 1 / -1; text-align: center; padding: 2rem;"></div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        app.displayRecipes(afghanRecipes);
    }, 500);

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect for header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Alt + S to focus search
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
        
        // Alt + R to go to recipes section
        if (e.altKey && e.key === 'r') {
            e.preventDefault();
            document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Make app globally available for debugging
    window.afghanRecipeApp = app;
});

// Service Worker registration for future PWA enhancement
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here for offline functionality
        console.log('Afghan Recipe Browser loaded successfully!');
    });
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AfghanRecipeBrowser;
}