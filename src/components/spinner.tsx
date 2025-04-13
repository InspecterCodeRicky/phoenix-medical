import { Loader } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
    },
    color: {
      white: "text-white",
      black: "text-dark",
    },
  },
  defaultVariants: {
    size: "default",
    color : "black"
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size, color }: SpinnerProps) => {
  return <p>
     <Loader className={cn(spinnerVariants({ size, color }))} />
  </p>;
};
