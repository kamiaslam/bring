# BRING - Next.js Website

This is a Next.js conversion of the original Portas HTML website, rebranded as BRING. The project maintains the original design and functionality while leveraging modern React and Next.js features.

## Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **TypeScript Support**: Full TypeScript implementation for better development experience
- **Responsive Design**: Maintains the original responsive design from the HTML version
- **SEO Optimized**: Built-in SEO features with Next.js metadata
- **Performance**: Optimized for fast loading and smooth user experience

## Pages

- **Home** (`/`) - Main landing page with animated sections
- **What We Do** (`/what-we-do`) - Services and approach overview
- **In Culture** (`/in-culture`) - Cultural impact and community engagement
- **Reports** (`/reports`) - Research and insights publications
- **Case Studies** (`/case-studies`) - Client work and success stories
- **Privacy Policy** (`/privacy-policy`) - Legal information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wearebring
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── globals.css         # Global styles
├── layout.tsx          # Root layout component
├── page.tsx            # Home page
├── what-we-do/         # What We Do page
├── in-culture/         # In Culture page
├── reports/            # Reports page
├── case-studies/       # Case studies page
└── privacy-policy/     # Privacy policy page
```

## Key Changes from Original

- **Branding**: All references to "Portas" have been changed to "BRING"
- **Email Addresses**: Updated to use @bringagency.com domain
- **Social Links**: Updated to reflect BRING branding
- **Modern Architecture**: Converted from static HTML to React components
- **Type Safety**: Added TypeScript for better development experience

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS Modules** - Styling (maintains original CSS classes)

## Deployment

The project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.

## Contact

For questions or support, contact: beautifulbusiness@bringagency.com 