"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

const categories = ["Singer", "Dancer", "DJ", "Speaker", "Comedian", "Magician", "Band", "Orchestra"]

const priceRanges = ["$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"]

export function ArtistFilters({ filters, onFiltersChange }) {
  const updateFilter = (key, value) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onFiltersChange({
      category: "",
      location: "",
      priceRange: "",
      search: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some((value) => value !== "")

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search artists..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter city or region"
            value={filters.location}
            onChange={(e) => updateFilter("location", e.target.value)}
          />
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <Label>Price Range</Label>
          <Select value={filters.priceRange} onValueChange={(value) => updateFilter("priceRange", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All price ranges" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All price ranges</SelectItem>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}