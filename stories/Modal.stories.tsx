import React, { LegacyRef, useRef } from 'react'
import { Meta, Story } from "@storybook/react"
import { RuiModal } from '../src/Modal/'
import { RuiModalProps } from '../src/Modal/Modal'

const meta: Meta = {
    title: "@RuskelUI/Components/Modal",
    component: RuiModal
}

export default meta;




const Template: Story<RuiModalProps> = args => {
    const reffer = useRef<LegacyRef<HTMLDialogElement> | undefined>(null)
    // @ts-ignore
    const openModal = () => reffer.current.show()
    // @ts-ignore
    const closeModal = () => reffer.current.close()
    return (
        <>
            <button onClick={() => openModal()}>open Modal</button>
            <RuiModal pointer={reffer} {...args}>
                <h1>Hi this is a modal!</h1>
                <p>Giving you the room to customise the functionality around this modal, since it's extending the native Dialog element 👾</p>
                <button onClick={() => closeModal()}>close Modal</button>
            </RuiModal>
        </>
    )
}

export const Default = Template.bind({})