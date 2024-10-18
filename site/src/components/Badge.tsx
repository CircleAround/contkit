import * as React from "react"
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { badgeVariants as UIBadgeVariants } from "@/components/ui/badge"

const BadgeVariants = cva(
  UIBadgeVariants(), // 既存のバリエーションを継承
  {
    variants: {
      variant: {
        primary: "bg-zinc-900 py-1 text-white",
        secondary: "border-2 border-zinc-900 bg-white py-1 text-zinc-900",
      },
      state: {
        default: 'pointer-events-none transition-none',
        success: "pointer-events-none border-none bg-green-500 text-white transition-none",
        warning: "pointer-events-none border-none bg-yellow-400 text-zinc-900 transition-none",
        danger: "pointer-events-none border-none bg-red-500 text-white transition-none",
      },
      shape: {
        none: 'rounded-none	',
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: "primary",
      state: "default",
      shape: "full",
    },
  }
)

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof BadgeVariants>

function Badge({ className, variant, state, shape,  children, ...others }: BadgeProps) {
  return (
    <div className={twMerge(BadgeVariants({ variant, state, shape }), className)} {...others}>
      {children}
    </div>
  )
}

export { Badge }