export default function Docs() {
  const pre = (code) => (
    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
      <code className="text-sm">{code}</code>
    </pre>
  );

  return (
    <div className="max-w-4xl">
      <h1 className="text-xl font-bold mb-2">Documentation</h1>
      <p className="text-muted-foreground mb-8">Installation and setup guide</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground">
            This is a modern CRM template built with React, Vite, and Tailwind CSS.
            It features a clean, minimalistic design perfect for developers to customize for their specific needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">9 Complete Pages</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Dashboard — Overview with key metrics and activity</li>
                <li>Contacts — Contact management with search</li>
                <li>Companies — Company directory and details</li>
                <li>Deals — Kanban-style pipeline tracking</li>
                <li>Tasks — Task management with status columns</li>
                <li>Reports — Analytics with Recharts line & donut charts</li>
                <li>Billing — Subscription and invoice management</li>
                <li>Settings — User preferences and configuration</li>
                <li>Docs — This documentation page</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Modern Tech Stack</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>React 18 with hooks</li>
                <li>React Router v6 for navigation</li>
                <li>Vite for fast development</li>
                <li>Tailwind CSS for styling</li>
                <li>Recharts for interactive charts</li>
                <li>Lucide React for icons</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Install Dependencies</h3>
              {pre('npm install')}
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2. Start Development Server</h3>
              {pre('npm run dev')}
              <p className="text-muted-foreground mt-2 text-sm">The app starts on <code className="bg-muted px-1 rounded">http://localhost:5173</code></p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">3. Build for Production</h3>
              {pre('npm run build')}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          {pre(`src/
├── components/
│   ├── ui/          # Reusable UI components (Card, Button)
│   ├── Navbar.jsx
│   └── Footer.jsx
├── layouts/
│   └── MainLayout.jsx
├── lib/
│   └── utils.js
├── pages/           # Route-level page components
│   ├── Dashboard.jsx
│   ├── Contacts.jsx
│   ├── Companies.jsx
│   ├── Deals.jsx
│   ├── Tasks.jsx
│   ├── Reports.jsx
│   ├── Billing.jsx
│   ├── Settings.jsx
│   └── Docs.jsx
├── App.jsx          # Router config
├── main.jsx         # Entry point
└── index.css        # Global styles + CSS variables`)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Customization</h2>
          <div>
            <h3 className="text-lg font-medium mb-2">Change Color Theme</h3>
            <p className="text-muted-foreground mb-2 text-sm">Edit <code className="bg-muted px-1 rounded">src/index.css</code>:</p>
            {pre(`:root {
  --primary: 142 76% 36%;  /* green */
  --ring:    142 76% 36%;
}`)}
          </div>
        </section>

        <section className="pb-8">
          <h2 className="text-2xl font-semibold mb-4">Deployment</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
            <li>Build command: <code className="bg-muted px-1 rounded">npm run build</code></li>
            <li>Publish directory: <code className="bg-muted px-1 rounded">dist</code></li>
            <li>Works on Netlify, Vercel, or any static host</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
