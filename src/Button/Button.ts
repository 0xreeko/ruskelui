import { ButtonHTMLAttributes, ReactNode } from "react";
import { color } from "../types/Generics";

type variant = "filled" | "ghost" | "text"

type type = 'button' | 'submit' | 'reset'

type buttonColorType = Extract<color, 'amethyst' | 'lazure' | 'bayoux' | 'citrine' | 'jade' | 'scarlet' | 'sunstone' | 'tingual' | 'rosian' | 'purpalite' | 'onyx' | 'neropside'>


export interface RuiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    /** Render an SVG icon to the left side of your button */
    leftIcon?: ReactNode
    /** Render an SVG icon to the right side of your button */
    rightIcon?: ReactNode
    /** Available colour ways to style your Button */
    color?: buttonColorType;
    /** Select a `variant` for your Button */
    variant: variant
    /** Select a `type` for your Button from 'button' | 'submit' | 'reset' */
    type?: type
    /** Apply loading state */
    isLoading?: boolean
    /** Label shown when loading state is true */
    loadingLabel?: ReactNode
    /** Make the button take the full width of the parent container */
    fullWidth?: boolean
}

export const filledButtonStyles: { [key in buttonColorType]: string } = {
    amethyst: "bg-amethyst-500 active:bg-amethyst-600",
    bayoux: "bg-bayoux-500 active:bg-bayoux-600",
    citrine: "bg-citrine-500 active:bg-citrine-600",
    jade: "bg-jade-500 active:bg-jade-600",
    lazure: "bg-lazure-500 active:bg-lazure-600",
    scarlet: "bg-scarlet-500 active:bg-scarlet-600",
    sunstone: "bg-sunstone-500 active:bg-sunstone-600",
    tingual: "bg-tingual-500 active:bg-tingual-600",
    rosian: "bg-rosian-500 active:bg-rosian-600",
    purpalite: "bg-purpalite-500 active:bg-purpalite-600",
    onyx: "bg-onyx-500 active:bg-onyx-600",
    neropside: "bg-neropside active:bg-neropside/60",
}

export const ghostButtonStyles: { [key in buttonColorType]: string } = {
    amethyst: "border-amethyst-500 text-amethyst-500 hover:border-amethyst-400/60 hover:text-amethyst-400/60 active:bg-amethyst-400/5",
    bayoux: "border-bayoux-500 text-bayoux-500 hover:border-bayoux-400/60 hover:text-bayoux-400/60 active:bg-bayoux-400/5",
    citrine: "border-citrine-500 text-citrine-500 hover:border-citrine-400/60 hover:text-citrine-400/60 active:bg-citrine-400/5",
    jade: "border-jade-500 text-jade-500 hover:border-jade-400/60 hover:text-jade-400/60 active:bg-jade-400/5",
    lazure: "border-lazure-500 text-lazure-500 hover:border-lazure-400/60 hover:text-lazure-400/60 active:bg-lazure-400/5",
    scarlet: "border-scarlet-500 text-scarlet-500 hover:border-scarlet-400/60 hover:text-scarlet-400/60 active:bg-scarlet-400/5",
    sunstone: "border-sunstone-500 text-sunstone-500 hover:border-sunstone-400/60 hover:text-sunstone-400/60 active:bg-sunstone-400/5",
    tingual: "border-tingual-500 text-tingual-500 hover:border-tingual-400/60 hover:text-tingual-400/60 active:bg-tingual-400/5",
    rosian: "border-rosian-500 text-rosian-500 hover:border-rosian-400/60 hover:text-rosian-400/60 active:bg-rosian-400/5",
    purpalite: "border-purpalite-500 text-purpalite-500 hover:border-purpalite-400/60 hover:text-purpalite-400/60 active:bg-purpalite-400/5",
    onyx: "border-onyx text-onyx hover:border-onyx/60 hover:text-onyx/60 active:bg-onyx/5",
    neropside: "border-neropside text-neropside hover:border-neropside/60 hover:text-neropside/60 active:bg-neropside/5",
}

export const textButtonStyles: { [key in buttonColorType]: string } = {
    amethyst: "text-amethyst-400 hover:bg-amethyst-400/10 hover:text-amethyst-400 active:bg-amethyst-400/20",
    bayoux: "text-bayoux-400 hover:bg-bayoux-400/10 hover:text-bayoux-400 active:bg-bayoux-400/20",
    citrine: "text-citrine-400 hover:bg-citrine-400/10 hover:text-citrine-400 active:bg-citrine-400/20",
    lazure: "text-lazure-400 hover:bg-lazure-400/10 hover:text-lazure-400 active:bg-lazure-400/20",
    jade: "text-jade-400 hover:bg-jade-400/10 hover:text-jade-400 active:bg-jade-400/20",
    scarlet: "text-scarlet-400 hover:bg-scarlet-400/10 hover:text-scarlet-400 active:bg-scarlet-400/20",
    sunstone: "text-sunstone-400 hover:bg-sunstone-400/10 hover:text-sunstone-400 active:bg-sunstone-400/20",
    rosian: "text-rosian-400 hover:bg-rosian-400/10 hover:text-rosian-400 active:bg-rosian-400/20",
    tingual: "text-tingual-400 hover:bg-tingual-400/10 hover:text-tingual-400 active:bg-tingual-400/20",
    purpalite: "text-purpalite-400 hover:bg-purpalite-400/10 hover:text-purpalite-400 active:bg-purpalite-400/20",
    onyx: "text-onyx hover:bg-onyx/10 hover:text-onyx-400 active:bg-onyx/20",
    neropside: "text-neropside hover:bg-neropside/10 hover:text-neropside active:bg-neropside/20",
}