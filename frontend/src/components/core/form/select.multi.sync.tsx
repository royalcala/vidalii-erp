import React from "react";
import classes from "*.module.css";
import { makeStyles, Theme, createStyles, FormLabel, Grid } from "template-core";
import Select from 'react-select'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            fontSize: 12
        }
    }),
);
export function SelectMultiSync(props: {
    name: string,
    defaultValue: { value: any, label: any }[],
     onChange: any//subscribe to change events
    options: { value: any, label: any }[]
}) {
    const classes = useStyles();
    return (
        <>
            <FormLabel className={classes.label}>Groups</FormLabel>
            <Select
                defaultValue={props.defaultValue}
                isMulti
                // styles={customStyles}
                onChange={props.onChange}
                name={props.name}
                options={props.options}
                classNamePrefix="select"
            />
        </>
    )
}