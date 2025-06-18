import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl", // Added shadow-lg and hover:shadow-xl
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement, // Corrected from HTMLParagraphElement to HTMLDivElement
  React.HTMLAttributes<HTMLHeadingElement> // Corrected to HTMLHeadingElement for semantic correctness if it's a title
>(({ className, ...props }, ref) => (
  <div // Changed from h3 to div to match CardTitle definition. If it's a title, h3 or other heading tags are more semantic.
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight", // Standard CardTitle class
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"


const CardDescription = React.forwardRef<
  HTMLParagraphElement, // Corrected from HTMLDivElement
  React.HTMLAttributes<HTMLParagraphElement> // Corrected from HTMLDivElement
>(({ className, ...props }, ref) => (
  <p // Changed from div to p for semantic correctness
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
