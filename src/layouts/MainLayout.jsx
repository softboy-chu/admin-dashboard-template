import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  LayoutDashboard, Users, Building2, TrendingUp, CheckSquare,
  BarChart3, Settings, BookOpen, ChevronLeft, ChevronRight, CreditCard
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Contacts',  path: '/contacts',  icon: Users },
  { name: 'Companies', path: '/companies', icon: Building2 },
  { name: 'Deals',     path: '/deals',     icon: TrendingUp },
  { name: 'Tasks',     path: '/tasks',     icon: CheckSquare },
  { name: 'Reports',   path: '/reports',   icon: BarChart3 },
  { name: 'Billing',   path: '/billing',   icon: CreditCard },
  { name: 'Settings',  path: '/settings',  icon: Settings },
  { name: 'Docs',      path: '/docs',      icon: BookOpen },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const toggle = () => setSidebarOpen(o => !o);
  const closeMobile = () => { if (isMobile) setSidebarOpen(false); };

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeMobile} />
      )}

      {/* Sidebar */}
      <aside
        className={[
          'bg-card border-r transition-all duration-300 flex flex-col fixed lg:relative h-full z-50 overflow-hidden',
          isMobile
            ? (sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full')
            : (sidebarOpen ? 'w-64' : 'w-16'),
        ].join(' ')}
      >
        <div className="p-4 border-b flex items-center justify-between min-h-[65px]">
          {sidebarOpen && <h3 className="text-sm font-semibold whitespace-nowrap">Material Shadcn React</h3>}
          <button
            onClick={toggle}
            className={['p-2 hover:bg-accent rounded-md hidden lg:block', !sidebarOpen && 'mx-auto'].filter(Boolean).join(' ')}
          >
            {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigation.map(item => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobile}
                className={[
                  'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm',
                  active ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground',
                ].join(' ')}
              >
                <Icon size={20} className="shrink-0" />
                {sidebarOpen && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onToggleSidebar={toggle} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
