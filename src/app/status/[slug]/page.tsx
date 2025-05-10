"use client";

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, CheckCircle, Loader } from "lucide-react"
import Link from "next/link"

const fakeData = {
  twitter: {
    name: "Twitter",
    status: "down",
    reports: 125,
    issues: ["Can't login", "Timeline not refreshing", "DMs failing"],
  },
  whatsapp: {
    name: "WhatsApp",
    status: "ok",
    reports: 18,
    issues: ["Minor delays", "Media not sending"],
  },
  discord: {
    name: "Discord",
    status: "slow",
    reports: 44,
    issues: ["Slow message delivery", "Login latency"],
  },
  alrajhi: {
    name: "Al Rajhi Bank",
    status: "ok",
    reports: 22,
    issues: ["App loading slow", "OTP timeout"]
  }
}

export default function StatusPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  type ServiceType = {
  name: string
  status: string
  reports: number
  issues: string[]
}


const [service, setService] = useState<ServiceType | null>(null)
useEffect(() => {
  const fakeData: Record<string, ServiceType> = {
    twitter: {
      name: "Twitter",
      status: "down",
      reports: 125,
      issues: ["Can't login", "Timeline not refreshing", "DMs failing"],
    },
    whatsapp: {
      name: "WhatsApp",
      status: "ok",
      reports: 18,
      issues: ["Minor delays", "Media not sending"],
    },
    discord: {
      name: "Discord",
      status: "slow",
      reports: 44,
      issues: ["Slow message delivery", "Login latency"],
    },
    alrajhi: {
      name: "Al Rajhi Bank",
      status: "ok",
      reports: 22,
      issues: ["App loading slow", "OTP timeout"],
    },
  }

  const selected = fakeData[slug]
  if (selected) {
    setService(selected)
  }
}, [slug])




  if (!service) {
    return (
      <div className="p-6 text-center text-gray-500">
        <Loader className="animate-spin inline mr-2" /> Loading service details...
      </div>
    )
  }

  const statusColor =
    service.status === "ok" ? "text-green-600" : service.status === "down" ? "text-red-600" : "text-yellow-600"

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-1" /> Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{service.name} Status</h1>
      </div>

      <Card>
        <CardContent className="p-6 space-y-3">
          <div className="text-lg">
            Current status: <span className={statusColor}>{service.status.toUpperCase()}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Total reports in last hour: {service.reports}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="font-semibold text-md mb-2">Common issues reported:</h2>
          <ul className="list-disc list-inside text-sm">
            {service.issues.map((issue: string, idx: number) => (
              <li key={idx}>
                {service.status === "ok" ? (
                  <CheckCircle className="inline mr-1 text-green-500" />
                ) : (
                  <AlertTriangle className="inline mr-1 text-yellow-500" />
                )}
                {issue}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
