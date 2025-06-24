"use client"

import { ArtistCard } from "@/components/artist-card"
import { mockArtists } from "@/lib/mockdata"

export default function ArtistsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Artist</h1>
        <p className="text-muted-foreground">
          Browse through our talented performers and find the perfect match for your event.
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground">{mockArtists.length} artists found</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>

      {mockArtists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No artists found.</p>
        </div>
      )}
    </div>
  )
}