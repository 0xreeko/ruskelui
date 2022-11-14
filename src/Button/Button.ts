import { ButtonHTMLAttributes, ReactNode } from "react";
import { color } from "../types/Generics";

type variant = "filled" | "ghost" | "text" | "social"

type type = 'button' | 'submit' | 'reset'

type buttonColorType = Extract<color, 'amethyst' | 'lazure' | 'bayoux' |  'citrine' | 'jade' | 'scarlet' | 'sunstone' | 'tingual' | 'rosian' | 'purpalite' | 'onyx' | 'neropside'>

export type socialColorType = "facebook" | "twitter" | 'dribbble' | "youtube" | 'zoom' | 'google-plus' | 'twitch' | "linkedin" | "snapchat" | "whatsapp" | "tumblr" | "reddit" | "spotify" | "medium" | "slack" | "discord" | "telegram" | "messenger"
export const socialColorStyles: { [key in socialColorType]: string } = {
    'dribbble': 'bg-[rgb(234,76,137)]',
    'discord': "bg-[rgb(114,137,218)]",
    'facebook': "bg-[rgb(59,89,153)]",
    'google-plus': "bg-[rgb(219,68,55)]",
    'linkedin': "bg-[rgb(0,119,181)]",
    'medium': "bg-[rgb(2,184,117)]",
    'messenger': "bg-[rgb(0,132,255)]",
    'reddit': "bg-[rgb(255,69,0)]",
    'zoom': "bg-[rgb(45,140,255)]",
    'slack': "bg-[rgb(74,21,75)]",
    'snapchat': "bg-[rgb(255,252,0)]",
    'spotify': "bg-[rgb(30,215,96)]",
    'telegram': "bg-[rgb(0,136,204)]",
    'tumblr': "bg-[rgb(54,70,93)]",
    'twitch': "bg-[rgb(100,65,164)]",
    'twitter': "bg-[rgb(29,161,242)]",
    'whatsapp': "bg-[rgb(37,211,102)]",
    'youtube': "bg-[rgb(255,0,0)]",
}

export interface RuiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    /** Render an SVG icon to the left side of your button */
    leftIcon?: ReactNode
    /** Render an SVG icon to the right side of your button */
    rightIcon?: ReactNode
    /** Available colour ways to style your Button */
    color?: buttonColorType;
    /** Available colour ways to style your Button */
    socialColor?: socialColorType;
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
    amethyst: "bg-amethyst-500 active:bg-amethyst-600 text-onyx",
    bayoux: "bg-bayoux-500 active:bg-bayoux-600 text-onyx",
    citrine: "bg-citrine-500 active:bg-citrine-600 text-onyx",
    jade: "bg-jade-500 active:bg-jade-600 text-onyx",
    lazure: "bg-lazure-500 active:bg-lazure-600 text-onyx",
    scarlet: "bg-scarlet-500 active:bg-scarlet-600 text-onyx",
    sunstone: "bg-sunstone-500 active:bg-sunstone-600 text-onyx",
    tingual: "bg-tingual-500 active:bg-tingual-600 text-onyx",
    rosian: "bg-rosian-500 active:bg-rosian-600 text-onyx",
    purpalite: "bg-purpalite-500 active:bg-purpalite-600 text-onyx",
    onyx: "bg-onyx hover:bg-onyx/80 active:bg-onyx/60 text-neropside",
    neropside: "bg-neropside hover:bg-neropside/80 active:bg-neropside/60 text-onyx",
}

export const ghostButtonStyles: { [key in buttonColorType]: string } = {
    amethyst: "border-amethyst-500 text-amethyst-500 hover:border-amethyst-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-amethyst-400",
    bayoux: "border-bayoux-500 text-bayoux-500 hover:border-bayoux-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-bayoux-400",
    citrine: "border-citrine-500 text-citrine-500 hover:border-citrine-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-citrine-400",
    jade: "border-jade-500 text-jade-500 hover:border-jade-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-jade-400",
    lazure: "border-lazure-500 text-lazure-500 hover:border-lazure-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-lazure-400",
    scarlet: "border-scarlet-500 text-scarlet-500 hover:border-scarlet-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-scarlet-400",
    sunstone: "border-sunstone-500 text-sunstone-500 hover:border-sunstone-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-sunstone-400",
    tingual: "border-tingual-500 text-tingual-500 hover:border-tingual-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-tingual-400",
    rosian: "border-rosian-500 text-rosian-500 hover:border-rosian-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-rosian-400",
    purpalite: "border-purpalite-500 text-purpalite-500 hover:border-purpalite-400/60 hover:text-onyx dark:hover:text-neropside hover:bg-purpalite-400",
    onyx: "border-onyx text-onyx hover:border-onyx/60 hover:text-onyx/60 hover:bg-onyx/5",
    neropside: "border-neropside text-neropside hover:border-neropside/60 hover:text-neropside/60 hover:bg-neropside/5",
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