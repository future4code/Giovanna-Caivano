import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (name, value) => {
    const newForm = {...form, [name]: value};
    
    setForm(newForm);
    console.log(name, value)
    }

    const resetState = () => {
        setForm(initialState);
    }
    return {form, onChange, resetState}
}
 
export default useForm;