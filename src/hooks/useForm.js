/* eslint-disable */

import { useState, useEffect, useMemo } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});
    const [touchedFields, setTouchedFields] = useState({});

    useEffect(() => {
      createValidators();
    }, [formState])

    const isFormValid = useMemo( () => {

        for(const formValue of Object.keys(formValidation)){
            if (formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [formValidation])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
        //setTouchedFields({ ...touchedFields, [name]: true });
    }

    const onFieldBlur = (fieldName) => {
        setTouchedFields({
          ...touchedFields,
          [fieldName]: true,
        });
      };

    const onResetForm = () => {
        setFormState( initialForm );
        setTouchedFields({});
    }

    const createValidators = () => {

        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)){
            //console.log(formField)
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
        // console.log(formCheckedValues)

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onFieldBlur,
        ...formValidation,
        isFormValid,
        touchedFields,
    }
}