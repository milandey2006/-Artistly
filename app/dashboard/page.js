"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Eye, CheckCircle, XCircle, Clock } from "lucide-react"

// Mock data - you can replace this with real data later
const mockArtistSubmissions = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    categories: ["Singer", "Guitarist"],
    location: "New York, NY",
    priceRange: "$1,000 - $2,500",
    status: "pending"
  },
  {
    id: "2", 
    name: "Sarah Johnson",
    email: "sarah@example.com",
    categories: ["Dancer", "Choreographer"],
    location: "Los Angeles, CA",
    priceRange: "$2,500 - $5,000",
    status: "approved"
  },
  {
    id: "3",
    name: "Mike Wilson",
    email: "mike@example.com", 
    categories: ["DJ", "Producer"],
    location: "Miami, FL",
    priceRange: "$500 - $1,000",
    status: "rejected"
  },
  {
    id: "4",
    name: "Lisa Chen",
    email: "lisa@example.com",
    categories: ["Speaker", "Coach"],
    location: "San Francisco, CA", 
    priceRange: "$5,000 - $10,000",
    status: "pending"
  }
]

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState(mockArtistSubmissions)
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter submissions based on status and search
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesStatus = statusFilter === "all" || submission.status === statusFilter
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.categories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesStatus && matchesSearch
  })

  // Update submission status
  const updateStatus = (id, newStatus) => {
    setSubmissions((prev) =>
      prev.map((submission) => 
        submission.id === id ? { ...submission, status: newStatus } : submission
      )
    )
  }

  // Get status icon
  const getStatusIcon = (status) => {
    if (status === "approved") return <CheckCircle className="h-4 w-4 text-green-500" />
    if (status === "rejected") return <XCircle className="h-4 w-4 text-red-500" />
    return <Clock className="h-4 w-4 text-yellow-500" />
  }

  // Get status badge
  const getStatusBadge = (status) => {
    let variant = "secondary"
    if (status === "approved") variant = "default"
    if (status === "rejected") variant = "destructive"

    return (
      <Badge variant={variant}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
        <p className="text-gray-600">Review and manage artist applications and booking requests.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Eye className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((s) => s.status === "pending").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((s) => s.status === "approved").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((s) => s.status === "rejected").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Artist Applications</CardTitle>
          <CardDescription>Review and manage artist onboarding applications</CardDescription>
        </CardHeader>
        <CardContent>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-[180px] p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <div key={submission.id} className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Artist Info */}
                  <div className="flex-1">
                    <div className="font-medium text-lg">{submission.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{submission.email}</div>
                    <div className="text-sm text-gray-600 mb-2">{submission.location}</div>
                    <div className="text-sm font-medium mb-2">{submission.priceRange}</div>
                    
                    {/* Categories */}
                    <div className="flex flex-wrap gap-1">
                      {submission.categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex flex-col items-end gap-3">
                    {/* Status */}
                    <div className="flex items-center gap-2">
                      {getStatusIcon(submission.status)}
                      {getStatusBadge(submission.status)}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {submission.status === "pending" && (
                        <>
                          <Button 
                            size="sm" 
                            onClick={() => updateStatus(submission.id, "approved")}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => updateStatus(submission.id, "rejected")}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      {submission.status !== "pending" && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => updateStatus(submission.id, "pending")}
                        >
                          Reset
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredSubmissions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No applications found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}