# ChromeXT - Landing Page

A modern, responsive landing page for ChromeXT, a Chrome extension that helps online shoppers with features like autobuy flash sale functionality, auto-apply coupons, and wishlist management.

![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Theme UI](https://img.shields.io/badge/Theme%20UI-0.16.2-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 and React 18
- **Responsive Design**: Mobile-first approach with Theme UI
- **SEO Optimized**: Structured data and meta tags with next-seo
- **Fast Performance**: Optimized images and code splitting
- **Type Safe**: Configured with JSX transform
- **Analytics Ready**: Google Analytics integration

## 📋 Pages

1. **Home** (`/`) - Main landing page showcasing all features
2. **Flash Sale** (`/autobuy-flash-sale/`) - AutoBuy Flash Sale feature details
3. **Contact Us** (`/contact/`) - Contact form for user inquiries
4. **Privacy Policy** (`/privacy-policy/`) - Privacy policy and terms

## 🛠️ Tech Stack

- **Framework**: [Next.js 14.2.33](https://nextjs.org/)
- **React**: [React 18.3.1](https://react.dev/)
- **Styling**: [Theme UI 0.16.2](https://theme-ui.com/) with Emotion 11
- **Animation**: [Framer Motion 11](https://www.framer.com/motion/)
- **Carousel**: [Swiper 11](https://swiperjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Forms**: SendGrid for email, Mailchimp for newsletter
- **Analytics**: Google Analytics via react-ga
- **SEO**: next-seo

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sourabhbgp/chromext-landing-page.git

# Navigate to project directory
cd chromext-landing-page

# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# SendGrid (for contact form)
SENDGRID_API_KEY=your_sendgrid_api_key

# Mailchimp (for newsletter)
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_list_id

# Google Analytics
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

**⚠️ Important**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

## 📁 Project Structure

```
src/
├── pages/              # Next.js pages (file-based routing)
│   ├── index.js        # Home page
│   ├── autobuy-flash-sale.js
│   ├── contact.js
│   ├── privacy-policy.js
│   └── api/            # API routes
├── sections/           # Page sections (Banner, Services, etc.)
├── saleSections/       # Flash sale specific sections
├── components/         # Reusable UI components
├── contexts/           # React Context providers
├── theme/              # Theme UI configuration
├── assets/             # Images, SVGs, and static assets
└── analytics/          # Google Analytics setup
```

## 🎨 Customization

### Theme

The theme configuration is located in `src/theme/index.js`. You can customize:

- Colors (primary, secondary, etc.)
- Typography (fonts, sizes)
- Breakpoints
- Component variants

### Navigation

Update navigation links in:
- Desktop: `src/components/header/header.js`
- Mobile: `src/components/header/mobileDrawer.js`

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository at [vercel.com](https://vercel.com) for automatic deployments.

### Other Platforms

- **Netlify**: Supports Next.js with automatic deployments
- **AWS Amplify**: Full support for Next.js SSR
- **Docker**: Use the included Dockerfile for containerized deployment

## 📝 Recent Updates

### Version 2.0.0 (Latest)

- ✅ Upgraded to Next.js 14 and React 18
- ✅ Updated all packages to latest stable versions
- ✅ Fixed static image imports for Next.js 14
- ✅ Migrated Swiper to v11 modules-based API
- ✅ Configured new JSX transform for Theme UI
- ✅ Streamlined to 4 core pages
- ✅ Removed unused components and WordPress assets
- ✅ Added comprehensive documentation (CLAUDE.md)
- ✅ Security: Removed hardcoded API keys

See [CLAUDE.md](./CLAUDE.md) for detailed migration notes and troubleshooting.

## 🐛 Troubleshooting

### Images Not Displaying

Always use the custom `Image` component instead of theme-ui's Image:

```javascript
import Image from "components/image"; // ✅ Correct
```

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check Node.js version: `node -v` (should be 18+)

### API Routes Not Working

- Verify environment variables are set in `.env.local`
- Restart the dev server after adding new env variables

See [CLAUDE.md](./CLAUDE.md) for more troubleshooting tips.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- Website: [ChromeXT](https://chromext.com)
- Email: sourabhbgp1994@gmail.com
- GitHub: [@sourabhbgp](https://github.com/sourabhbgp)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Theme UI](https://theme-ui.com/) - Build consistent, themeable React apps
- [Vercel](https://vercel.com/) - Deployment platform
- [Claude Code](https://claude.com/claude-code) - AI coding assistant

---

Made with ❤️ by [Sourabh Kumar](https://github.com/sourabhbgp)
