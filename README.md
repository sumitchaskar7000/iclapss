# iClaps - Digital Marketing Website

A modern, responsive digital marketing website built with React.js, showcasing professional services, portfolio, and client engagement features.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags, semantic HTML, and optimized structure
- **Multiple Pages**: Home, Services, Portfolio, About Us, Contact, and Blog
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **Form Validation**: Contact form with comprehensive validation
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Sticky Navigation**: Header with smooth scroll and active link highlighting

## 🛠️ Tech Stack

- **React.js** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client (ready for API integration)

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
iclaps-web/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Footer.jsx          # Footer with links and newsletter
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp contact button
│   │   └── icons.jsx           # Custom SVG icon components
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero and features
│   │   ├── Services.jsx        # Services overview page
│   │   ├── Portfolio.jsx      # Portfolio and case studies
│   │   ├── About.jsx           # About us page with team info
│   │   ├── Contact.jsx         # Contact form and information
│   │   └── Blog.jsx            # Blog listing page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- Primary colors (blue): Used for main brand elements
- Saffron colors: Used for accents and highlights

### WhatsApp Number

Update the WhatsApp number in `src/components/WhatsAppButton.jsx`:
```jsx
const phoneNumber = 'YOUR_PHONE_NUMBER'
```

### Contact Information

Update contact details in `src/pages/Contact.jsx`:
- Email address
- Phone number
- Physical address
- Google Maps embed URL

### Content

All content can be customized in respective page components:
- Home page: Hero text, features, stats
- Services: Service offerings and descriptions
- Portfolio: Case studies and testimonials
- About: Team members and company information
- Blog: Blog posts and articles

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🔧 Environment Variables

Create a `.env` file for environment-specific variables (if needed):
```
VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

## 📝 License

This project is open source and available for use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact us through the website contact form.

---

Built with ❤️ by iClaps Team





