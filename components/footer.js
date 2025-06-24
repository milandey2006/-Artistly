import Link from "next/link"
import { Music, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Artistly</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting event planners with talented performing artists worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-primary">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link href="/onboard" className="text-muted-foreground hover:text-primary">
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/artists?category=Singer" className="text-muted-foreground hover:text-primary">
                  Singers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=Dancer" className="text-muted-foreground hover:text-primary">
                  Dancers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=DJ" className="text-muted-foreground hover:text-primary">
                  DJs
                </Link>
              </li>
              <li>
                <Link href="/artists?category=Speaker" className="text-muted-foreground hover:text-primary">
                  Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>deymilan066@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9987703344</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, IN</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Milan.Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
