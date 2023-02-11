import { useCallback, useState } from "react";
import React from "react";

export function useForm() {
    const [values, setValues] = useState({})

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }

    return { values, handleChange, setValues };
}

export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    function handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });

        setIsValid(target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}

export function useInputWithValidation() {
    const [isValid, setIsValid] = React.useState(true);

    function handleChange(e) {
        const mailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

        setIsValid(mailValidation.test(e.target.value))
    }

    return { handleChange, isValid };
};

export function useInputWithValidationName() {
    const [isValid, setIsValid] = React.useState(true);

    function handleChange(e) {
        const target = e.target;
        
        setIsValid(target.checkValidity())
    }

    return { handleChange, isValid };
};