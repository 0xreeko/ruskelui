import { TextareaHTMLAttributes } from "react";
import { color } from "../types/Generics";

type textareaColorType = Extract<color, 'amethyst' | 'lazure' | 'bayoux' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' | 'citrine' | 'neropside' | 'onyx'>

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    fullWidth?: boolean
    color: textareaColorType
}

export const textareaColor: { [key in textareaColorType]: string } = {
    amethyst: "hover:border-amethyst-500 dark:hover:border-amethyst-500 selection:bg-amethyst-400/10 selection:text-amethyst-500",
    lazure: "hover:border-lazure-500 dark:hover:border-lazure-500 selection:bg-lazure-400/10 selection:text-lazure-500",
    bayoux: "hover:border-bayoux-500 dark:hover:border-bayoux-500 selection:bg-bayoux-400/10 selection:text-bayoux-500",
    jade: "hover:border-jade-500 dark:hover:border-jade-500 selection:bg-jade-400/10 selection:text-jade-500",
    purpalite: "hover:border-purpalite-500 dark:hover:border-purpalite-500 selection:text-purpalite-500",
    rosian: "hover:border-rosian-500 dark:hover:border-rosian-500 selection:bg-rosian-400/10 selection:text-rosian-500",
    scarlet: "hover:border-scarlet-500 dark:hover:border-scarlet-500 selection:bg-scarlet-400/10 selection:text-scarlet-500",
    sunstone: "hover:border-sunstone-500 dark:hover:border-sunstone-500 selection:bg-sunstone-400/10 selection:text-sunstone-500",
    tingual: "hover:border-tingual-500 dark:hover:border-tingual-500 selection:bg-tingual-400/10 selection:text-tingual-500",
    citrine: "hover:border-citrine-500 dark:hover:border-citrine-500 selection:bg-citrine-400/10 selection:text-citrine-500",
    neropside:  "hover:border-neropside dark:hover:border-neropside selection:bg-neropside/10 selection:text-neropside",
    onyx: "hover:border-onyx dark:hover:border-onyx selection:bg-onyx/10 selection:text-onyx",
}