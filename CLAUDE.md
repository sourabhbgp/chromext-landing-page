# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based landing page for ChromeXT, a Chrome extension for online shoppers. The site promotes features like autobuy flash sale functionality, auto-apply coupons, and wishlist management.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2.33 (latest stable)
- **React**: React 18.3.1 and React DOM 18.3.1
- **UI Library**: Theme UI 0.16.2 with Emotion 11 for styling and theming
- **State Management**: React Context API with custom providers
- **Animation**: Framer Motion 11
- **Carousel**: Swiper 11 (modules-based API)
- **Analytics**: Google Analytics via react-ga
- **Email**: SendGrid for contact forms
- **SEO**: next-seo for meta tags and structured data

### Project Structure

```
src/
├── pages/           # Next.js pages (file-based routing)
├── sections/        # Major page sections (Banner, Services, etc.)
├── saleSections/    # Flash sale specific sections
├── components/      # Reusable UI components
├── contexts/        # React Context providers and state management
├── theme/           # Theme UI configuration
├── assets/          # Images, SVGs, and static assets
└── analytics/       # Google Analytics setup and sitemap generation
```

### Key Architectural Patterns

**1. Custom Context Pattern**
The app uses a custom context creation pattern in `contexts/create-context.js` that combines state and dispatch:
- `StickyProvider` manages header sticky state via `app.provider.js`
- `DrawerProvider` manages mobile menu drawer state
- Each uses reducer pattern with clear action types (SET_STICKY, REMOVE_STICKY, TOGGLE)

**2. Layout Composition**
- `_app.js` wraps all pages with `ThemeProvider` → `StickyProvider` → `Layout`
- `Layout` component (src/components/layout.js) includes:
  - Sticky header with waypoint detection
  - Main content area
  - Footer
- Uses `react-stickynode` and `react-waypoint` for scroll-based sticky behavior

**3. Component-Based Sections**
Pages compose sections rather than having monolithic page components:

**Home Page (index.js):**
```javascript
<Banner />
<Services />
<BoostAgencies />
<Testimonials />
<Feature />
<CallToAction />
```

**Flash Sale Page (autobuy-flash-sale.js):**
```javascript
<Banner />      // from saleSections/
<Partners />    // from saleSections/
<Workflow />    // from saleSections/
<Faq />        // from saleSections/
```

**4. Theme UI Styling**
- All styling uses Theme UI's `sx` prop
- Theme configuration in `src/theme/index.js` defines:
  - Color palette with primary/secondary colors
  - Responsive breakpoints (7 breakpoints from 480px to 1620px)
  - Typography scale and font families
  - Component variants (buttons, cards, forms, etc.)
- Inline styles objects defined at bottom of component files

**5. Import Resolution**
`jsconfig.json` sets `baseUrl: "src"`, enabling absolute imports:
```javascript
import Layout from "components/layout"  // instead of "../components/layout"
import SEO from "components/seo"
```

### Routing & Redirects

**Pages:**
- `/` - Home page (index.js)
- `/autobuy-flash-sale` - Flash sale feature page
- `/contact` - Contact form page
- `/privacy-policy` - Privacy policy page
- `/api/send-grid` - SendGrid email API route
- `/api/subscribe` - Newsletter subscription API route

**Redirects** (configured in next.config.js):
- All `/best.*` paths redirect to `/blog/best.*`
- `/ps5-price-restock-india` redirects to blog version
- Uses trailing slash: true

### State Management

**App-level state** (contexts/app/):
- `isSticky`: Controls header sticky state based on scroll position
- `isSidebarSticky`: Controls sidebar sticky behavior
- Actions: SET_STICKY, REMOVE_STICKY, SET_SIDEBAR_STICKY, REMOVE_SIDEBAR_STICKY

**Drawer state** (contexts/drawer/):
- `isOpen`: Controls mobile menu drawer visibility
- Action: TOGGLE

### Analytics

Google Analytics is initialized in `_app.js`:
- UA tracking ID: UA-173181071-1
- Page views logged on route changes
- Helper functions in `src/analytics/index.js`: logEvent, logException

### Next.js Configuration

- Built-in image optimization (Next.js 14)
- Trailing slashes enabled on all routes
- Custom redirects for blog paths
- Uses new JSX transform with Theme UI

### Package Updates & Migration (Next.js 10 → 14, React 16 → 18)

The project has been upgraded from Next.js 10 to 14 and React 16 to 18 with all latest stable packages:

**Major Package Updates:**
- **React**: 16.x → 18.3.1
- **React DOM**: 16.x → 18.3.1
- **Next.js**: 10.2.3 → 14.2.33
- **Theme UI**: 0.11.x → 0.16.2
- **Emotion**: @emotion/core → @emotion/react 11.14.0
- **Swiper**: 6.x → 11.1.15 (modules-based API)
- **Framer Motion**: 4.x → 11.13.5
- **react-custom-scrollbars**: Replaced with react-custom-scrollbars-2 4.5.0

**Critical Migration Fixes:**

1. **Next.js 14 Link Component:**
   - No longer requires nested `<a>` tags
   - Custom Link component updated with `legacyBehavior` and `passHref` props
   - Location: `src/components/link.js`
   ```javascript
   <NextLink href={path} passHref legacyBehavior>
     <A {...rest}>{children || label}</A>
   </NextLink>
   ```

2. **Static Image Imports:**
   - Next.js 14 static imports return objects with `src` property
   - Custom Image component handles both old and new format
   - Location: `src/components/image.js` and `src/components/logo.js`
   ```javascript
   const imageSrc = typeof src === 'object' && src?.src ? src.src : src;
   ```
   - **Fixed Files**: Image component, Logo component, Accordion component

3. **Swiper v11 API Changes:**
   - Modules now imported from `swiper/modules`
   - Must pass modules via `modules` prop
   - Updated CSS imports
   ```javascript
   import { Thumbs, Autoplay } from "swiper/modules";
   <Swiper modules={[Thumbs, Autoplay]} {...params}>
   ```
   - CSS: `"swiper/css"`, `"swiper/css/navigation"`, `"swiper/css/pagination"`

4. **Theme UI & JSX Transform:**
   - Removed all `/** @jsx jsx */` pragmas
   - Configured `jsconfig.json` with new JSX transform:
   ```json
   {
     "compilerOptions": {
       "jsx": "react-jsx",
       "jsxImportSource": "theme-ui"
     }
   }
   ```

5. **Emotion Migration:**
   - Changed from `@emotion/core` to `@emotion/react`
   - Updated all imports across components

6. **Next.js Configuration:**
   - Removed `next-optimized-images` plugin (incompatible with Next.js 14)
   - Using built-in Next.js 14 image optimization
   - Removed `target: "serverless"` (deprecated in Next.js 12+)

**All Build Errors Resolved:**
- ✅ Module not found errors (emotion, swiper, etc.)
- ✅ JSX pragma conflicts
- ✅ Hydration errors from nested Link tags
- ✅ Image loading issues with static imports
- ✅ Accordion icon display issues
- ✅ Build completes with zero errors/warnings

### Site Structure Cleanup

The website has been streamlined to focus on **4 core pages only**:

1. **Home** (`/`) - Main landing page with all sections
2. **Flash Sale** (`/autobuy-flash-sale/`) - AutoBuy Flash Sale feature page
3. **Contact Us** (`/contact/`) - Contact form page
4. **Privacy Policy** (`/privacy-policy/`) - Privacy policy page

**Navigation Updated:**
- Desktop navigation in `src/components/header/header.js`
- Mobile navigation in `src/components/header/mobileDrawer.js`
- Both show all 4 pages consistently

**Removed Unused Components:**
- `src/sections/customer-support.js`
- `src/sections/video-one.js`
- WordPress-related assets
- Unused header data files

## Development Notes

- The site uses Theme UI with the new JSX transform (configured in jsconfig.json with `jsxImportSource: "theme-ui"`)
- **All images must use the custom `Image` component** (`src/components/image.js`) to handle Next.js 14 static imports
- Icons from react-icons library (mainly `io` and `io5` packages)
- The header becomes sticky when user scrolls past a waypoint
- Mobile navigation uses rc-drawer for slide-out menu
- Forms use theme-ui form components with custom styling
- FAQ accordion icons fixed to use custom Image component (src/components/accordion/accordion.js:2)

## Troubleshooting Common Issues

### Images Not Displaying

**Problem:** Images or icons not showing on the page

**Solution:** Always use the custom `Image` component instead of theme-ui's `Image`:
```javascript
// ❌ Wrong - will break with Next.js 14 static imports
import { Image } from "theme-ui";

// ✅ Correct - handles Next.js 14 static imports
import Image from "components/image";
```

**Files that have been fixed:**
- `src/components/image.js` - Custom wrapper component
- `src/components/logo.js` - Logo component
- `src/components/accordion/accordion.js` - Accordion icons

### Hydration Errors

**Problem:** "Hydration failed because the initial UI does not match what was rendered on the server"

**Solution:** This was caused by nested `<a>` tags in Next.js 14 Link components. Fixed by:
1. Adding `legacyBehavior` and `passHref` to custom Link component
2. Removing nested `<a>` tags from header navigation
3. Using `NextLink` with proper styling

### Build Errors After Package Updates

**Problem:** Module not found or import errors after updating packages

**Common fixes:**
- Emotion: Change `@emotion/core` → `@emotion/react`
- Swiper: Import modules from `swiper/modules` and pass via `modules` prop
- Custom scrollbars: Use `react-custom-scrollbars-2` for React 18
- JSX pragma: Remove all `/** @jsx jsx */` comments, use jsconfig.json instead

### Swiper Not Working

**Problem:** Swiper carousel not displaying or throwing errors

**Solution:** Swiper v11 uses a new modules-based API:
```javascript
// Import modules
import { Thumbs, Autoplay } from "swiper/modules";

// Pass modules prop
<Swiper modules={[Thumbs, Autoplay]} {...params}>

// Import CSS separately
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
```
