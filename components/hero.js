import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2563eb]/5 via-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Connect with
            <span className="text-blue-500"> Talented Artists</span>
            <br />
            for Your Next Event
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Artistly is the premier platform connecting event planners with professional performing artists. Find the
            perfect talent for your event or showcase your skills to potential clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 ">
            <Button size="lg" asChild className="bg-blue-500 text-white">
              <Link href="/artists">
                Browse Artists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/onboard">Join as Artist</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Verified Artists</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm text-muted-foreground">Events Booked</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
