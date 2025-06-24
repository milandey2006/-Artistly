import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Music, Users, Zap } from "lucide-react"

const categories = [
  {
    name: "Singers",
    description: "Solo vocalists and vocal groups",
    icon: Mic,
    count: "150+ artists",
    href: "/artists?category=Singer",
  },
  {
    name: "Dancers",
    description: "Professional dance performers",
    icon: Users,
    count: "120+ artists",
    href: "/artists?category=Dancer",
  },
  {
    name: "DJs",
    description: "Music mixers and entertainers",
    icon: Music,
    count: "80+ artists",
    href: "/artists?category=DJ",
  },
  {
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: Zap,
    count: "60+ artists",
    href: "/artists?category=Speaker",
  },
]

export function Category() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover talented performers across various categories. From intimate acoustic sets to high-energy dance
            performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                  <p className="text-primary font-medium text-sm">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
