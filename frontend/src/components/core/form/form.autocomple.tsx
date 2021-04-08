import React, { useState } from "react";
import Select from 'react-select/async';
const customStyles = {
    // option: (provided: any, state: any) => ({
    //     ...provided,
    //     borderBottom: '1px dotted pink',
    //     color: state.isSelected ? 'red' : 'blue',
    //     padding: 20,
    // }),
    // control: () => ({
    //     // none of react-select's styles are passed to <Control />
    //     // width: 200,
    // }),
    // singleValue: (provided: any, state: any) => {
    //     const opacity = state.isDisabled ? 0.5 : 1;
    //     const transition = 'opacity 300ms';

    //     return { ...provided, opacity, transition };
    // }
}
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
    defaultValue: any
}
export function AutoComplete(props: AutoCompleteProps) {
    // const [selectedOption, setSelectedOption] = useState({ value: 'chocolate', label: 'Chocolate' });

    return (
        <Select
            styles={customStyles}
            // defaultValue={[{value:'hi',label:"Hi"},{value:'hi',label:"Hi2"}]}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
            isMulti={props.isMulti}
            cacheOptions
            loadOptions={props.loadOptions}
        // loadOptions={
        //     inputValue =>
        //         new Promise(resolve => {
        //             setTimeout(() => {
        //                 resolve([{ value: "ho", label: "he" }]);
        //             }, 0);
        //         })
        // }
        />
    );
}