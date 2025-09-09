# Afghan Recipe Browser 🍚🇦🇫

A beautiful, responsive web application showcasing authentic Afghan cuisine with traditional recipes passed down through generations.

![Afghan Recipe Browser](https://img.shields.io/badge/Afghan-Recipe%20Browser-green?style=for-the-badge&logo=food&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

### 🔍 **Smart Search & Filtering**
- Real-time search across recipe names, descriptions, and ingredients
- Category-based filtering (Rice Dishes, Meat, Vegetables, Desserts, Bread, Drinks)
- No results state with helpful messaging

### 📱 **Responsive Design**
- Mobile-first approach with beautiful layouts on all devices
- Tablet and desktop optimized views
- Touch-friendly interface

### 🎨 **Afghan-Inspired Design**
- Colors inspired by the Afghan flag (green, red, gold)
- Cultural patterns and styling elements
- Beautiful typography with Google Fonts (Poppins)
- Font Awesome icons for enhanced UX

### 🍽️ **Recipe Features**
- Detailed recipe cards with prep time, cook time, and servings
- Comprehensive ingredient lists with measurements
- Step-by-step cooking instructions
- Difficulty level indicators
- Traditional Afghan recipe icons

### ♿ **Accessibility**
- Keyboard navigation support (Alt+S for search, Alt+R for recipes)
- Screen reader friendly
- High contrast colors for readability
- Focus indicators for better navigation

### ⚡ **Performance**
- Vanilla JavaScript for fast loading
- Optimized CSS with minimal external dependencies
- Smooth animations and transitions
- Efficient DOM manipulation

## 🍴 Recipe Collection

Our collection includes authentic Afghan dishes:

### 🍚 Rice Dishes
- **Kabuli Pulao** - Afghanistan's national dish with aromatic rice, lamb, and fruits
- And more traditional rice preparations

### 🥩 Meat Dishes
- **Mantu** - Steamed dumplings with spiced meat and yogurt sauce
- **Kofta Chalao** - Spiced meatballs in rich tomato sauce
- **Aushak** - Scallion dumplings with meat sauce

### 🥬 Vegetables
- **Ashak** - Leek-filled dumplings with yogurt
- **Qorma Sabzi** - Herb stew with fresh greens
- Traditional vegetable preparations

### 🍞 Bread & Pastries
- **Bolani** - Stuffed flatbread with potatoes or leeks
- **Naan-e Afghan** - Traditional tandoor-baked bread

### 🍮 Desserts
- **Sheer Khurma** - Sweet milk pudding with vermicelli
- **Firni** - Creamy rice pudding with cardamom and rose water

### 🫖 Drinks
- **Afghan Green Tea** - Traditional cardamom-spiced tea
- **Doogh** - Refreshing yogurt drink with mint

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ZamAI-Pashto/Afghan-Recipe-Browser.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Afghan-Recipe-Browser
   ```

3. Open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```

### Alternative: Live Server
For development, you can use a live server:
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# Then visit http://localhost:8000
```

## 📁 Project Structure

```
Afghan-Recipe-Browser/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # Main application JavaScript
├── recipes.js          # Recipe database
├── README.md           # Project documentation
└── .gitignore         # Git ignore rules
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup with proper meta tags and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ features for clean, maintainable code
- **Google Fonts**: Poppins font family for beautiful typography
- **Font Awesome**: Icons for enhanced user interface

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Key Features Implementation
- **CSS Grid**: Responsive recipe layout
- **CSS Custom Properties**: Theme-based color system
- **ES6 Classes**: Organized, maintainable JavaScript
- **Event Delegation**: Efficient event handling
- **Local State Management**: Filter and search state
- **Modal System**: Accessible recipe detail views

## 🎯 Usage

### Browsing Recipes
1. **View All Recipes**: The homepage displays all available recipes
2. **Search**: Use the search bar to find recipes by name, ingredients, or description
3. **Filter**: Click category buttons to filter by dish type
4. **View Details**: Click any recipe card to see full details

### Recipe Details
Each recipe includes:
- Preparation and cooking time
- Number of servings
- Difficulty level
- Complete ingredient list with measurements
- Step-by-step cooking instructions
- Cultural context and serving suggestions

### Navigation
- **Home**: Overview and search functionality
- **Recipes**: Main recipe collection
- **About**: Information about Afghan cuisine

## 🔮 Future Enhancements

### Planned Features
- [ ] Recipe favorites and bookmarking
- [ ] Print-friendly recipe format
- [ ] Recipe sharing functionality
- [ ] Multi-language support (Pashto, Dari)
- [ ] Progressive Web App (PWA) capabilities
- [ ] Recipe rating and reviews
- [ ] Shopping list generation
- [ ] Nutritional information
- [ ] Video cooking tutorials
- [ ] User-submitted recipes

### Technical Improvements
- [ ] Service Worker for offline functionality
- [ ] Image optimization and lazy loading
- [ ] Recipe schema markup for SEO
- [ ] Unit tests for JavaScript functions
- [ ] Performance monitoring
- [ ] Dark mode theme
- [ ] Recipe import/export functionality

## 🤝 Contributing

We welcome contributions to improve the Afghan Recipe Browser! Here's how you can help:

### Recipe Contributions
- Add new authentic Afghan recipes
- Improve existing recipe descriptions
- Add regional variations
- Provide cultural context

### Technical Contributions
- Bug fixes and improvements
- New features implementation
- Performance optimizations
- Accessibility enhancements

### Contribution Process
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Recipe Format
When adding new recipes, please follow this structure:
```javascript
{
    id: number,
    name: "Recipe Name",
    category: "category",
    description: "Brief description",
    prepTime: "XX min",
    cookTime: "XX min",
    servings: number,
    difficulty: "Easy|Medium|Hard",
    ingredients: ["ingredient 1", "ingredient 2"],
    instructions: ["step 1", "step 2"],
    icon: "🍽️"
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Traditional Afghan cooks and families who preserved these recipes
- The Afghan community for sharing their culinary heritage
- Contributors and maintainers of this project
- Open source community for tools and resources

## 📞 Contact & Support

- **Issues**: Report bugs or request features via GitHub Issues
- **Email**: [Your contact email]
- **Community**: Join our discussions in GitHub Discussions

## 🌍 Cultural Note

Afghan cuisine represents a rich cultural heritage that spans centuries. These recipes are more than just instructions—they're stories, traditions, and connections to the beautiful land of Afghanistan. We encourage users to explore not just the flavors, but also the cultural significance of each dish.

**Note**: This project is created with respect and appreciation for Afghan culture and cuisine. We strive to represent recipes authentically while making them accessible to cooks worldwide.

---

**Made with ❤️ for preserving and sharing Afghan culinary traditions**

*Last updated: 2024*