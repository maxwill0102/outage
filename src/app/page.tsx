"use client";

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Search } from "lucide-react"

export default function Home() {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    console.log("Searching for:", query)
  }

  const services = [
    { name: "Twitter", status: "down", reports: 125 },
    { name: "WhatsApp", status: "ok", reports: 42 },
    { name: "Al Rajhi", status: "slow", reports: 67 },
    { name: "Discord", status: "down", reports: 233 },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Is a service down in your country?</h1>
        <div className="flex items-center justify-center gap-2">
          <Input
            placeholder="Search a service like Twitter..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-md"
          />
          <Button onClick={handleSearch}><Search className="mr-2" /> Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc) => (
          <Card key={svc.name}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{svc.name}</h2>
                <p className="text-sm text-muted-foreground">Reports: {svc.reports}</p>
              </div>
              <div className="text-sm">
                {svc.status === "ok" && <span className="text-green-600">✅ OK</span>}
                {svc.status === "down" && <span className="text-red-600">❌ Down</span>}
                {svc.status === "slow" && <span className="text-yellow-600">⚠️ Slow</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center text-muted-foreground text-sm">
        <Globe className="inline mr-1" /> Serving Saudi Arabia | Last updated 2 minutes ago
      </div>
    </div>
  )
}
