import React from "react"
import { cn } from "@/lib/utils"

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition",
        className
      )}
      {...props}
    />
  )
)
Button.displayName = "Button"
