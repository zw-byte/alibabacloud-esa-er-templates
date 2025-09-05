# TechHub E-commerce Template

A premium e-commerce website template built with SvelteKit and TypeScript, featuring clean, modern design inspired by premium tech retailers and modern web technologies.

## 🚀 Features

- **Modern Tech Stack**: SvelteKit + TypeScript + Tailwind CSS
- **Premium Design**: Clean, minimalist design inspired by premium tech retailers
- **Responsive Design**: Mobile-first approach with perfect desktop experience
- **Three Core Pages**:
  - **Homepage**: Hero section, featured products, categories, and company features
  - **Products Page**: Product grid with filtering, sorting, and search functionality
  - **Product Detail**: Detailed product view with image gallery and purchase options
- **Premium Components**: Reusable UI components with smooth animations
- **Performance Optimized**: Fast loading with modern web standards

## 🎨 Design Highlights

- **Modern Color Palette**: Clean whites, subtle grays, and signature blue accents
- **Typography**: System font stack for optimal readability and performance
- **Animations**: Smooth transitions and hover effects
- **Layout**: Generous whitespace and centered alignment
- **Interactive Elements**: Hover states, loading indicators, and micro-interactions
- **Custom SVG Icons**: Original, copyright-free product illustrations

## 📱 Pages Overview

### Homepage (`/`)
- Full-screen hero section with gradient background
- Category showcase with hover effects
- Featured products grid
- Company features and benefits
- Newsletter signup section

### Products Page (`/products`)
- Advanced filtering by category
- Multiple sorting options (price, rating, newest)
- Search functionality
- Responsive product grid
- Empty state handling

### Product Detail Page (`/products/[id]`)
- Image gallery with thumbnails
- Product specifications and features
- Configurable options (storage, color)
- Quantity selector
- Stock status indicator
- Related products section

## 🛠 Tech Stack

- **Framework**: SvelteKit 2.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **Icons**: Custom SVG icons
- **Images**: Original SVG illustrations (copyright-free)

## 🚀 Getting Started

### Prerequisites
- Node.js 20.16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd svelte
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── lib/
│   └── components/          # Reusable UI components
│       ├── Header.svelte    # Navigation header
│       ├── Footer.svelte    # Site footer
│       ├── Button.svelte    # Button component
│       └── ProductCard.svelte # Product card
├── routes/
│   ├── +layout.svelte       # Main layout
│   ├── +page.svelte         # Homepage
│   └── products/
│       ├── +page.svelte     # Products listing
│       └── [id]/
│           └── +page.svelte # Product detail
├── app.css                  # Global styles
└── app.html                 # HTML template
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'tech-blue': '#007AFF',
  'tech-gray': {
    // Custom gray scale
  }
}
```

### Typography
The project uses system fonts for optimal performance. You can customize in `src/app.css`:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
```

### Components
All components are modular and can be easily customized. Key components:
- `Button.svelte`: Configurable button with variants
- `ProductCard.svelte`: Product display card with hover effects
- `Header.svelte`: Navigation with mobile menu
- `Footer.svelte`: Site footer with links and newsletter

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking
- `npm run check:watch` - Type checking in watch mode

### Code Style

The project follows modern TypeScript and Svelte best practices:
- TypeScript strict mode enabled
- Reactive statements for dynamic content
- Component composition patterns
- Semantic HTML structure

## 🌟 Key Features Implementation

### Responsive Design
- Mobile-first CSS approach
- Breakpoint system: `sm`, `md`, `lg`, `xl`
- Touch-friendly interactive elements
- Optimized mobile navigation

### Product Filtering & Search
- Real-time category filtering
- Multiple sort options
- Search across product names and categories
- URL state management (can be extended)

### Image Gallery
- Thumbnail navigation
- Smooth transitions
- Optimized loading
- Responsive sizing

### Shopping Cart (Ready for Extension)
- Cart icon with item count
- Add to cart functionality structure
- Quantity management
- Local storage ready

## 🚀 Static Site Deployment

The project is configured for **static site generation** and ready for deployment on:

### Quick Deployment
```bash
# Build static files
npm run build

# Deploy the 'build/' directory to your hosting provider
```

### Supported Platforms
- **Netlify**: Connect Git repo, build command: `npm run build`, publish directory: `build`
- **Vercel**: Connect Git repo, framework preset: SvelteKit, output directory: `build`  
- **Cloudflare Pages**: Connect Git repo, build command: `npm run build`, build output: `build`
- **Firebase Hosting**: Set public directory to `build` in `firebase.json`
- **Traditional hosting**: Upload `build/` directory contents to web server

### Pre-rendered Pages
All pages are pre-rendered as static HTML:
- `/` - Homepage
- `/products` - Products listing  
- `/products/1` to `/products/12` - Individual product pages
- `404.html` - Custom 404 error page for handling non-existent routes

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using SvelteKit and inspired by modern design excellence.**