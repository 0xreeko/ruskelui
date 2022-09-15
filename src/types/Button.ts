type variant = "base" | "ghost" | "text" | "gradient"

type direction = "tl" | "t" | "tr" | "r" | "br" | "b" | "bl" | "l"

type rippes = boolean

type disabled = boolean

type color = colorType


export interface RuiButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

    svg?: ReactNode;

    startColor?: colorType

    endColor?: colorType

    /** Available colour ways to style your Button */
    color?: colorType;

    /** Provide a size for Button */
    size: buttonSize

    direction?: direction

    disabled?: boolean

    ripples?: boolean
}