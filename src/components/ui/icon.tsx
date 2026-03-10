import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";

import { cn } from "@/lib/utils";

function Icon({ className, size = 24, strokeWidth = 1.5, ...props }: HugeiconsIconProps) {
    return (
        <HugeiconsIcon
            className={cn(className)}
            size={size}
            strokeWidth={strokeWidth}
            {...props}
        />
    );
}

export { Icon };
