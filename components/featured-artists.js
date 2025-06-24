import { ArtistCard } from "@/components/artist-card"
import { Button } from "@/components/ui/button"
import { mockArtists } from "@/lib/mockdata"
import Link from "next/link"

export function FeaturedArtists() {
  const featuredArtists = mockArtists.slice(0, 3)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Artists</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet some of our top-rated performers who consistently deliver exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/artists">View All Artists</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
