import React, { useState } from "react";
import Select from 'react-select/async';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const promiseOptions = (inputValue: any) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(options);
        }, 1000);
    })
export type AutoCompleteProps = {
    name: string, //generate an HTML input with this name, containing the current value
    placeholder: string,
    isMulti: boolean,
    loadOptions: (inputValue: any) => any
    onChange: any//subscribe to change events
}
export function AutoComplete(props: AutoCompleteProps) {
    // const [selectedOption, setSelectedOption] = useState({ value: 'chocolate', label: 'Chocolate' });

    return (
        <Select
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
            isMulti={props.isMulti}
            cacheOptions
            //@ts-ignore
            loadOptions={props.loadOptions}
        />
    );
}