import { FC } from "react"
import { Creature } from "../model/model"

type PropType = {
    value: Creature,
    onChange: (newvalue: Creature) => void,
}

const CustomForm:FC<PropType> = ({ value, onChange }) => {
    return (
        <></>
    )
}

export default CustomForm