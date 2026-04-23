# LynqIQ — React + Vite Website

## Stack
- **React 18** + **Vite 5**
- **React Router v6** — client-side routing
- **Framer Motion** — animations
- **EmailJS** — contact form
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

## EmailJS Setup
1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Create a service, template, and get your public key
3. Copy `.env.example` to `.env`
4. Fill in your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Build & Deploy (Vercel)
```bash
npm run build
```
Then push to GitHub and connect to Vercel. Set the env variables in Vercel's dashboard under **Settings → Environment Variables**.

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Footer.jsx / Footer.css
│   └── PageHero.jsx / PageHero.css
├── pages/
│   ├── Home.jsx / Home.css
│   ├── About.jsx / About.css
│   ├── Services.jsx / Services.css
│   ├── Contact.jsx / Contact.css
│   ├── CaseStudies.jsx / CaseStudies.css
│   ├── ServiceDetail.css
│   ├── services/
│   │   ├── DataScience.jsx
│   │   ├── SoftwareDev.jsx
│   │   ├── ITSupport.jsx
│   │   ├── CloudSolutions.jsx
│   │   └── Consulting.jsx
│   └── legal/
│       ├── Privacy.jsx
│       ├── Terms.jsx
│       └── Cookies.jsx
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```
