# Paris Elegance 🗼

A sophisticated travel experience platform designed specifically for Indian travelers exploring Paris. This application combines curated experiences, practical travel information, and seamless booking functionality to help visitors discover the City of Light with confidence and ease.

![Paris Elegance](https://images.unsplash.com/photo-1769374343053-9a7a3a6d0c6c?w=1200&auto=format&fit=crop)

## ✨ Features

### 🎯 Curated Experiences
- **Handpicked Activities**: Browse through carefully selected tours, museum entries, and exclusive experiences
- **Smart Filtering**: Filter attractions by category, search by name, and refine your exploration
- **Detailed Information**: Each activity includes comprehensive descriptions, highlights, best-for recommendations, and practical details

### 💰 Dual Currency Pricing
- **INR-First Approach**: All prices displayed in Indian Rupees (INR) as the primary currency
- **Euro Reference**: EUR prices shown alongside for easy comparison
- **No Mental Math**: Designed specifically for Indian travelers to avoid currency conversion confusion

### 🗺️ Journey Planning
- **Personalized Itineraries**: Use the Journey Planner to create custom itineraries based on duration, interests, and travel pace
- **Live Cost Estimates**: Get real-time INR cost estimates for your planned activities
- **Smart Recommendations**: Receive suggestions tailored to your preferences

### 📍 Neighborhood Discovery
- **Curated Districts**: Explore Paris's most iconic neighborhoods with insider knowledge
- **Local Insights**: Learn about the character, highlights, and hidden gems of each area
- **Practical Information**: Get pricing and logistical details for each neighborhood

### 📸 Visual Gallery
- **Stunning Photography**: Browse a curated collection of Paris imagery
- **Categorized Collections**: Filter by landmarks, neighborhoods, lifestyle, and more
- **Interactive Lightbox**: Full-screen viewing with keyboard navigation

### 🛒 Booking System
- **Shopping Basket**: Add activities to your basket for easy booking
- **Activity Details**: View comprehensive information before booking
- **User Authentication**: Sign-in functionality for personalized experiences

### 🍽️ Comprehensive Guides
- **Food & Dining**: Discover Parisian culinary scene with restaurant recommendations
- **Shopping Guide**: Explore boutiques, markets, and shopping districts
- **Seasonal Guide**: Learn about Paris throughout the seasons
- **Budget Planning**: Practical budgeting advice and cost breakdowns
- **Practical Information**: Visa requirements, transportation tips, and essential travel advice

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/paris-elegance.git
   cd paris-elegance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `build` directory.

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.8
- **Build Tool**: Create React App (react-scripts)
- **Routing**: React Router DOM 7.18.2
- **Styling**: Tailwind CSS 3.4.19
- **State Management**: React Context API
- **Language**: JavaScript

## 📁 Project Structure

```
paris-elegance/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ActivityCard.js
│   │   ├── Footer.js
│   │   └── Navbar.js
│   ├── context/            # React Context providers
│   │   └── BasketContext.js
│   ├── data/               # Static data and content
│   │   └── activities.json
│   ├── pages/              # Page components
│   │   ├── ActivityDetail.js
│   │   ├── Attractions.js
│   │   ├── Basket.js
│   │   ├── Budget.js
│   │   ├── Discover.js
│   │   ├── FoodDining.js
│   │   ├── Gallery.js
│   │   ├── Home.js
│   │   ├── PlanJourney.js
│   │   ├── Practical.js
│   │   ├── SeasonalGuide.js
│   │   ├── Shopping.js
│   │   └── SignIn.js
│   ├── assets/             # Static assets
│   ├── App.js              # Main app component
│   └── index.js            # Application entry point
├── public/                 # Public assets (index.html, favicon.svg, icons.svg)
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with featured experiences and site overview |
| **Discover** | `/discover` | Explore Paris neighborhoods and curated districts |
| **Attractions** | `/attractions` | Browse and filter all bookable activities |
| **Activity Detail** | `/activity/:id` | Detailed view of individual experiences |
| **Plan Journey** | `/plan-your-journey` | Interactive itinerary planner |
| **Practical** | `/practical` | Essential travel information and tips |
| **Food & Dining** | `/food-dining` | Culinary guide and restaurant recommendations |
| **Shopping** | `/shopping` | Shopping districts and boutique guide |
| **Seasonal Guide** | `/seasonal-guide` | Seasonal travel advice and events |
| **Budget** | `/budget` | Budget planning and cost breakdowns |
| **Gallery** | `/gallery` | Curated photo gallery of Paris |
| **Basket** | `/basket` | Shopping basket and booking management |
| **Sign In** | `/sign-in` | User authentication |

## 🌟 Key Highlights

### 🇮🇳 Indian Traveler Focus
- Visa checklists specifically for Indian citizens
- Direct flight information from major Indian cities
- Cultural context and practical tips for Indian visitors
- INR pricing to eliminate currency conversion confusion

### 🎨 Design Philosophy
- **Elegant Typography**: Combining display fonts for headings with readable body text
- **Sophisticated Color Palette**: Inspired by Parisian elegance with gold accents
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Accessibility**: Keyboard navigation and screen reader friendly

### ⚡ Performance
- **Fast Loading**: Optimized images and lazy loading
- **Smooth Navigation**: Client-side routing with React Router
- **Efficient Rendering**: React 19 with modern optimization techniques

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Images**: Special thanks to Unsplash and the talented photographers who have made their beautiful Paris photography available
- **Icons**: Material Symbols by Google
- **Inspiration**: The timeless beauty and elegance of Paris, France

## 📞 Contact

For questions, suggestions, or feedback, please reach out:

- **Email**: contact@pariselegance.com
- **GitHub Issues**: [Open an issue](https://github.com/yourusername/paris-elegance/issues)

## 🗺️ Roadmap

### Upcoming Features
- [ ] Multi-language support (Hindi, French, English)
- [ ] Real-time availability checking
- [ ] Integration with booking APIs
- [ ] User reviews and ratings
- [ ] Offline mode for travel planning
- [ ] Mobile app version
- [ ] Augmented reality city guide

---

**Made with ❤️ for travelers who dream of Paris**

*Paris Elegance - Your gateway to the City of Light*
