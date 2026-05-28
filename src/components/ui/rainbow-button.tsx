import React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn("rainbow-btn", className)}
        style={style}
        {...props}
      />
    )
  }
)

RainbowButton.displayName = "RainbowButton"

export { RainbowButton }
