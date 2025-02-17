import { forwardRef } from "react"

type CardProps = React.ComponentProps<"div">

// 카드 컴포넌트
export const Card = forwardRef(({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
))
Card.displayName = "Card"

export const CardHeader = forwardRef(({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))
CardHeader.displayName = "CardHeader"

export const CardTitle = forwardRef(({ className, ref, ...props }: CardProps) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
))
CardTitle.displayName = "CardTitle"

export const CardContent = forwardRef(({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"
