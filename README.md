# CloudSync - SaaS Company Profile Website

A professional and modern company profile website for Tech SaaS Company built with Next.js 14, featuring full multi-language support (English & Indonesian) and dark/light mode.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Multi-language Support** (English & Indonesian) using next-intl
- **Dark/Light Mode** with smooth transitions
- **Fully Responsive** design
- **Modern UI/UX** with glassmorphism effects
- **Production-ready** code with best practices

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl
- Lucide React (icons)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Language Support

The website supports two languages:
- **English** (default) - `/en`
- **Indonesian** - `/id`

Language switching is available in the navbar with smooth transitions.

## 🎨 Theme Support

- **Light Mode** (default)
- **Dark Mode** with smooth transitions
- Theme preference is saved in localStorage
- System preference detection

## 📁 Project Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ProductDemo.tsx
│   │   ├── Stats.tsx
│   │   ├── Integrations.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── FAQ.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Accordion.tsx
│   │   └── Tabs.tsx
│   └── providers/
│       └── ThemeProvider.tsx
├── lib/
│   ├── i18n/
│   │   └── config.ts
│   └── utils.ts
├── messages/
│   ├── en.json
│   └── id.json
└── middleware.ts
```

## 🎯 Sections

1. **Hero** - Headline, CTA buttons, trust badges
2. **Features** - Key product features with icons
3. **Product Demo** - Interactive tabs showing product capabilities
4. **Stats** - Key metrics with animated counters
5. **Integrations** - Partner integrations grid
6. **Pricing** - Three-tier pricing with monthly/yearly toggle
7. **Testimonials** - Customer testimonials
8. **CTA** - Final call-to-action section
9. **FAQ** - Frequently asked questions with accordion

## 🔧 Configuration

### Language Configuration
Language settings are configured in `lib/i18n/config.ts`. Supported locales can be modified there.

### Theme Configuration
Theme settings are in `components/providers/ThemeProvider.tsx`. Colors are defined in `app/globals.css`.

### Tailwind Configuration
Custom styles and animations are in `tailwind.config.ts`.

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Contact

For questions or support, please contact the development team.
