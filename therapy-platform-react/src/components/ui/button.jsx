import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-accent-green text-white hover:bg-accent-dark hover:-translate-y-0.5",
    primary: "bg-primary-indigo text-white hover:bg-primary-dark hover:-translate-y-0.5",
    secondary: "bg-accent-green text-white hover:bg-accent-dark hover:-translate-y-0.5",
    outline: "border-2 border-primary-indigo text-primary-indigo hover:bg-primary-indigo hover:text-white",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const sizes = {
    default: "h-10 px-6 py-3",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
