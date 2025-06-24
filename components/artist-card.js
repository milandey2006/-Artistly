import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, DollarSign } from "lucide-react"

export function ArtistCard({ artist }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={artist.image || "/placeholder.svg"} alt={artist.name} />
            <AvatarFallback>
              {artist.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold truncate">{artist.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-3 w-3 mr-1" />
              {artist.location}
            </div>
            <div className="flex items-center text-sm">
              <Star className="h-3 w-3 text-yellow-500 mr-1" />
              <span className="font-medium">{artist.rating}</span>
              <span className="text-muted-foreground ml-1">({artist.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{artist.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {artist.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
          {artist.categories.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{artist.categories.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-3 w-3 mr-1" />
            {artist.priceRange}
          </div>
          <div className="text-green-600 font-medium">{artist.availability}</div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Ask for Quote</Button>
      </CardFooter>
    </Card>
  )
}
