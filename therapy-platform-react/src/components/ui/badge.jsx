import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary-indigo text-white",
    secondary: "bg-accent-green text-white",
    accent: "bg-secondary-slate text-white",
    outline: "border border-primary-indigo text-primary-indigo",
  }

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }
