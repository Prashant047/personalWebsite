import * as React from "react"
 
import { cn } from "@/lib/utils"
 
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-md border border-neutral-700 overflow-hidden",
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
    className={cn("px-3 py-4 pb-1", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
 
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-md  leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-3 py-4 pt-0 text-sm text-neutral-400", className)} {...props} />
))
CardContent.displayName = "CardContent"
 
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-3 py-4 pt-0 text-xs ", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
 
 
export { Card, CardHeader, CardFooter, CardTitle, CardContent }