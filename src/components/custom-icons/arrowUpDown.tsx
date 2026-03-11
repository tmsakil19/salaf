import type { SVGProps } from "react";

export function ArrowUpDownIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            {...props}
        >
            <path
                d="M8.33333 4.16667L4.16667 0L0 4.16667H8.33333ZM8.33333 8.33333L4.16667 12.5L0 8.33333H8.33333Z"
                fill="currentColor"
            />
        </svg>
    );
}