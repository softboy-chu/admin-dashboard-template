import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t py-6 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <span>© 2025, made with</span>
          <Heart size={16} className="text-red-500 fill-red-500" />
          <span>by</span>
          <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Creative Tim
          </a>
          <span>for a better web. • Distributed by</span>
          <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            ThemeWagon
          </a>
        </div>
        <div className="flex items-center gap-6 text-sm">
          {['Creative Tim', 'About Us', 'Blog', 'License'].map((link) => (
            <a key={link} href="#!" className="text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
