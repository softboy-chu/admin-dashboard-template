# admin-dashboard-template
CRM dashboard template converted from Vue 3 to React 18. Vite + Tailwind CSS + shadcn-style components + Recharts. 9 pages — contacts, companies, deals pipeline, tasks, reports, billing, settings.

src/
├── components/
│   ├── ui/
│   │   ├── Card.jsx      ← Card, CardHeader, CardTitle, CardContent
│   │   └── Button.jsx    ← Button with variant + size props
│   ├── Navbar.jsx        ← Top bar with search and account dropdown
│   └── Footer.jsx        ← Bottom bar with links
├── layouts/
│   └── MainLayout.jsx    ← Collapsible sidebar + responsive mobile drawer
├── pages/
│   ├── Dashboard.jsx
│   ├── Contacts.jsx
│   ├── Companies.jsx
│   ├── Deals.jsx
│   ├── Tasks.jsx
│   ├── Reports.jsx
│   ├── Billing.jsx
│   ├── Settings.jsx
│   └── Docs.jsx
├── lib/
│   └── utils.js          ← cn() helper (clsx + tailwind-merge)
├── App.jsx               ← Router setup
├── main.jsx
└── index.css             ← Tailwind + CSS variable theme

# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview build
npm run preview
