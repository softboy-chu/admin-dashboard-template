export default function Docs() {
  const CodeBlock = ({ children }: { children: string }) => (
    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
      <code className="text-sm">{children}</code>
    </pre>
  )

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
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Dashboard — Overview with key metrics and activity</li>
                <li>Contacts — Contact management with search</li>
                <li>Companies — Company directory and details</li>
                <li>Deals/Pipeline — Kanban-style deal tracking</li>
                <li>Tasks — Task management with status tracking</li>
                <li>Reports — Analytics and performance metrics with Chart.js</li>
                <li>Billing — Subscription and invoice management</li>
                <li>Settings — User preferences and configuration</li>
                <li>Docs — This documentation page</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Tech Stack</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>React 18 with hooks</li>
                <li>TypeScript for type safety</li>
                <li>Vite for fast development</li>
                <li>Tailwind CSS for styling</li>
                <li>React Router v6 for navigation</li>
                <li>Chart.js with react-chartjs-2 for interactive charts</li>
                <li>Lucide React for icons</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Clone or Download</h3>
              <CodeBlock>{`git clone <your-repository-url>\ncd react-crm-template`}</CodeBlock>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2. Install Dependencies</h3>
              <CodeBlock>{`npm install`}</CodeBlock>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">3. Start Development Server</h3>
              <CodeBlock>{`npm run dev`}</CodeBlock>
              <p className="text-muted-foreground mt-2">
                The application will start on <code className="bg-muted px-1 rounded">http://localhost:5173</code>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">4. Build for Production</h3>
              <CodeBlock>{`npm run build`}</CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <CodeBlock>{`src/
├── components/
│   ├── ui/          # Reusable UI components (Card, Button)
│   ├── Navbar.tsx
│   └── Footer.tsx
├── layouts/
│   └── MainLayout.tsx
├── lib/
│   └── utils.ts
├── pages/
│   ├── Dashboard.tsx
│   ├── Contacts.tsx
│   ├── Companies.tsx
│   ├── Deals.tsx
│   ├── Tasks.tsx
│   ├── Reports.tsx
│   ├── Billing.tsx
│   ├── Settings.tsx
│   └── Docs.tsx
├── router/
│   └── index.tsx
├── App.tsx
├── main.tsx
└── index.css`}</CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Add New Pages</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Create a new component in <code className="bg-muted px-1 rounded">src/pages/</code></li>
            <li>Add the route in <code className="bg-muted px-1 rounded">src/router/index.tsx</code></li>
            <li>Add navigation item in <code className="bg-muted px-1 rounded">src/layouts/MainLayout.tsx</code></li>
          </ol>
        </section>

        <section className="pb-8">
          <h2 className="text-2xl font-semibold mb-4">Customization</h2>
          <h3 className="text-lg font-medium mb-2">Change Color Theme</h3>
          <p className="text-muted-foreground mb-2">
            Edit <code className="bg-muted px-1 rounded">src/index.css</code> to change the primary color:
          </p>
          <CodeBlock>{`:root {\n  --primary: 142 76% 36%;  /* green */\n  --ring: 142 76% 36%;\n}`}</CodeBlock>
        </section>
      </div>
    </div>
  )
}
