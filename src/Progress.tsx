import React, { HTMLAttributes } from 'react'
// @ts-ignore
import styles from './modules/Progress.module.css'
import { colorType, barPosType } from './utils';

export interface Props extends HTMLAttributes<HTMLElement>{
    /**
     * Sets the percentage value for the progress bar and changes how much is filled.
     */
    percentage?: number;

    /**
     * Choose from RuskelUI's neonic colours and Tailwind's native colours!
     */
    color: colorType;

    /** Progress Donut name */
    name: string;

    /** Enables for dual gradients */
    isGradient?: boolean;

    /** Starting colour for dual gradient */
    startColour?: colorType;
    
    /** Ending colour for dual gradient */
    endColour?: colorType;

    /**horizontal linear direction of gradient */
    position?: barPosType
}

const barColours: {[key in colorType]: string[]} = {
    amber: ["bg-amber-400", "from-amber-400", "to-amber-600"],
    amethyst: ["bg-amethyst-400", "from-amethyst-400", "to-amethyst-600"],
    aqua: ["bg-aqua-400", "from-aqua-400", "to-aqua-600"],
    azure: ["bg-azure-400", "from-azure-400", "to-azure-600"],
    blue: ["bg-blue-400", "from-blue-400", "to-blue-600"],
    cyan: ["bg-cyan-400", "from-cyan-400", "to-cyan-600"],
    emerald: ["bg-emerald-400", "from-emerald-400", "to-emerald-600"],
    fuchsia: ["bg-fuchsia-400", "from-fuchsia-400", "to-fuchsia-600"],
    green: ["bg-green-400", "from-green-400", "to-green-600"],
    indigo: ["bg-indigo-400", "from-indigo-400", "to-indigo-600"],
    jade: ["bg-jade-400", "from-jade-400", "to-jade-600"],
    jasper: ["bg-jasper-400", "from-jasper-400", "to-jasper-600"],
    kunzite: ["bg-kunzite-400", "from-kunzite-400", "to-kunzite-600"],
    lime: ["bg-lime-400", "from-lime-400", "to-lime-600"],
    moonstone: ["bg-moonstone-400", "from-moonstone-400", "to-moonstone-600"],
    orange: ["bg-orange-400", "from-orange-400", "to-orange-600"],
    peridot: ['bg-peridot-600', 'from-peridot-400', "to-peridot-600"],
    pink: ["bg-pink-400", "from-pink-400", "to-pink-600"],
    purple: ["bg-purple-400", "from-purple-400", "to-purple-600"],
    red: ["bg-red-400", "from-red-400", "to-red-600"],
    rose: ["bg-rose-400", "from-rose-400", "to-rose-600"],
    ruby: ["bg-ruby-400", "from-ruby-400", "to-ruby-600"],
    russian: ["bg-russian-400", "from-russian-400", "to-russian-600"],
    scarlet: ["bg-scarlet-400", "from-scarlet-400", "to-scarlet-600"],
    stratos: ["bg-stratos-400", "from-stratos-400", "to-stratos-600"],
    sunstone: ["bg-sunstone-400", "from-sunstone-400", "to-sunstone-600"],
    sylver: ["bg-sylver-400", "from-sylver-400", "to-sylver-600"],
    teal: ["bg-teal-400", "from-teal-400", "to-teal-600"],
    violet: ["bg-violet-400", "from-violet-400", "to-violet-600"],
    yellow: ["bg-yellow-400", "from-yellow-400", "to-yellow-600"]
}
  
const donutColours: { [key in colorType]: string } = {
    amber: "text-amber-400",
    amethyst: "text-amethyst-400",
    aqua: "text-aqua-400",
    azure: "text-azure-400",
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    fuchsia: "text-fuchsia-400",
    green: "text-green-400",
    indigo: "text-indigo-400",
    jade: "text-jade-400",
    jasper: "text-jasper-400",
    kunzite: "text-kunzite-400",
    lime: "text-lime-400",
    moonstone: "text-moonstone-400",
    orange: "text-orange-400",
    peridot: "text-peridot-400",
    pink: "text-pink-400",
    purple: "text-purple-400",
    red: "text-red-400",
    rose: "text-rose-400",
    ruby: "text-ruby-400",
    russian: "text-russian-400",
    scarlet: "text-scarlet-400",
    stratos: "text-stratos-400",
    sunstone: "text-sunstone-400",
    sylver: "text-sylver-400",
    teal: "text-teal-400",
    violet: "text-violet-400",
    yellow: "text-yellow-400"
}

const positionVar: {[key in barPosType]: string} = {
    r: "bg-gradient-to-r",
    l: "bg-gradient-to-l",
}

const RuiProgressBar = ({ name, percentage, isGradient, color = 'amethyst', startColour = 'blue', endColour = 'amethyst', position = 'r' }: Props) => {
    return (
        <div id={name} tabIndex={0} role={'progressbar'} className={styles.progress}>
            <div className={`h-full absolute rounded-full duration-300 ${isGradient ? `${positionVar[position]} ${barColours[startColour][1]} ${barColours[endColour][2]}` : `${barColours[color][0]}`}`} style={{width: `${percentage}%`}}></div>
            <span className="sr-only">Progress Bar</span>
        </div>
    )
};
 const RuiProgressDonut = ({ name, percentage = 0, color = 'ruby' }: Props) => {
    return (
        <div id={name} className="relative inline-flex items-center justify-center">
            <div className={`absolute text-d-h4 font-semibold ${donutColours[color]}`}>{percentage}%</div>
            <svg className={styles.svg} viewBox="0 0 120 120" >
                <circle className="text-black/30" strokeWidth={4} stroke="currentColor" fill="transparent" r="54" cx="60" cy="60" />
                <circle className={`${donutColours[color]}`} strokeWidth="10" strokeDasharray={100} style={{ strokeDashoffset: Number(100 - percentage) }} pathLength="100" strokeLinecap="round" stroke="currentColor" fill="transparent" r="54" cx="60" cy="60" />
            </svg>
            <span className="sr-only">Progress Donut</span>
        </div>
    )
};


export const RuiProgress = () => (
     <>select Progress.Bar or Progress.Donut</>
 )

RuiProgress.Bar = RuiProgressBar
RuiProgress.Donut = RuiProgressDonut


export default RuiProgress