import React from 'react'

const Filter = ({onSubmit, task}) => {
    const {values, errors, handleBlur, handleSubmit, handleChange, onChange, onBlur, isSubmitting } = 
    useFormik({
        initialValues: {
            progress: "",
            category: "",
            priority: "",
        },
        onSubmit
    })
}

export default Filter