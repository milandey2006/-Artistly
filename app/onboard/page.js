"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

const categories = ["Singer", "Dancer", "DJ", "Speaker", "Comedian", "Magician", "Band", "Orchestra"]
const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Mandarin", "Hindi"]
const priceRanges = ["$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"]

export default function ArtistForm() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  

  const handleSubmit = () => {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const location = document.getElementById('location').value
    const bio = document.getElementById('bio').value
    const priceRange = document.getElementById('priceRange').value
    

    const selectedCategories = categories.filter(category => 
      document.getElementById(`category-${category}`).checked
    )
    

    const selectedLanguages = languages.filter(language => 
      document.getElementById(`language-${language}`).checked
    )
    

    if (!name || !email || !phone || !location || !bio) {
      alert('Please fill in all required fields')
      return
    }
    
    if (bio.length < 50) {
      alert('Bio must be at least 50 characters')
      return
    }
    
    if (selectedCategories.length === 0) {
      alert('Please select at least one category')
      return
    }
    
    if (selectedLanguages.length === 0) {
      alert('Please select at least one language')
      return
    }
    
    if (!priceRange) {
      alert('Please select a price range')
      return
    }
    

    console.log('Form Data:', {
      name, email, phone, location, bio, priceRange,
      categories: selectedCategories,
      languages: selectedLanguages
    })
    

    setIsSubmitted(true)
  }


  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for joining Artistly. We will review your profile and contact you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Artist Onboarding</CardTitle>
            <CardDescription>
              Join our platform and start receiving booking requests from event planners.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
       
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>

              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <Input id="location" placeholder="City, State/Country" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bio *</label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself, your experience, and what makes you unique..."
                  className="min-h-[100px]"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Minimum 50 characters. This will be displayed on your profile.
                </p>
              </div>
            </div>

         
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Performance Categories *</h3>
              <p className="text-sm text-gray-600">What type of performances do you offer?</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor={`category-${category}`} className="text-sm">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

    
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Languages *</h3>
              <p className="text-sm text-gray-600">What languages can you perform in?</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`language-${language}`}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor={`language-${language}`} className="text-sm">
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </div>

   
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Pricing *</h3>
              <div>
                <label className="block text-sm font-medium mb-2">Fee Range</label>
                <select 
                  id="priceRange"
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select your typical fee range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

        
            <Button onClick={handleSubmit} className="w-full" size="lg">
              Submit Application
            </Button>
            
          </CardContent>
        </Card>
      </div>
    </div>
  )
}