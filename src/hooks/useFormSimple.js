import { useState } from "react";

export const useFormSimple = (initialForm) => {

    const [formState, setFormState] = useState(initialForm)


    //llaves cuadradas para referenciar a la prop computada del objeto
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log(value)
        // console.log(name)
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}