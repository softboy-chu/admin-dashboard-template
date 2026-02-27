import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Menu, User, CreditCard, LogOut, ChevronDown } from 'lucide-react'

interface NavbarProps {
  onToggleSidebar: () => void
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', search)
  }

  return (
    <nav className="bg-card border-b sticky top-0 z-40">
      <div className="px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 hover:bg-accent rounded-md"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-64 lg:w-96 text-sm"
                />
              </div>
            </form>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleSidebar}
              className="hidden lg:block p-2 hover:bg-accent rounded-md"
              aria-label="Toggle sidebar"
            >
              <Menu size={20} />
            </button>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <User size={18} />
                </div>
                <span className="hidden sm:block text-sm font-medium">Account</span>
                <ChevronDown size={16} className="hidden sm:block" />
              </button>

              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-card border rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                    <button
                      onClick={() => { navigate('/billing'); setDropdownOpen(false) }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent"
                    >
                      <CreditCard size={16} />
                      <span>Billing</span>
                    </button>
                    <button
                      onClick={() => { console.log('logout'); setDropdownOpen(false) }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent text-red-600"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}
