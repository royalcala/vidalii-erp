import React from "react"
import { makeStyles } from 'template-core/styles';
import Table from 'template-core/Table';
import TableBody from 'template-core/TableBody';
import TableCell from 'template-core/TableCell';
import TableContainer from 'template-core/TableContainer';
import TableHead from 'template-core/TableHead';
import TableRow from 'template-core/TableRow';
import Paper from 'template-core/Paper';
import { Controller, UseFormMethods, UseControllerOptions, useFieldArray } from 'react-hook-form';
import InputBase from 'template-core/InputBase';
import DeleteIcon from 'template-icons/Delete';
import { red } from 'template-core/colors';
import IconButton from 'template-core/IconButton';
import Tooltip from 'template-core/Tooltip';
const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});


export type TableProps = {
    config: {
        [key: string]: {
            alias: string,
            type: 'string' | 'number' | 'email' | 'password' | 'autocompletes'//html5
            helperText?: string,
            rules?: UseControllerOptions<any>['rules'],
        }
    },
    configArray: {
        defaultValuesKey: string,
        keyName: string
        control: UseFormMethods['control']
    }

}
let helperTableUnique = 0
export function TableEdit(props: TableProps) {
    const { fields, remove, insert } = useFieldArray(
        {
            control: props.configArray.control,
            name: props.configArray.defaultValuesKey,
            // keyName: props.configArray.keyName
        }
    );
    const classes = useStyles();
    const entries = Object.entries(props.config)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" key={0} />
                        {entries.map(
                            ([key, value], index) =>
                                props.configArray.keyName === key ?
                                    <TableCell align="left" key={index + 1}>#item</TableCell>
                                    : <TableCell align="left" key={index + 1}>{value.alias}</TableCell>
                        )}
                        {/* <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        fields.map(
                            (row, indexRow) => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell align="left" key={indexRow}>
                                            <Tooltip title="Delete">
                                                <IconButton color="inherit" aria-label="Delete"
                                                    onClick={() => {
                                                        remove(indexRow)
                                                    }}>
                                                    <DeleteIcon style={{ color: red[300] }} />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                        {entries.map(
                                            ([nameField, configField], index) => {
                                                return (
                                                    <TableCell align="left" key={index} >
                                                        <Controller
                                                            name={`${props.configArray.defaultValuesKey}[${indexRow}].${nameField}`}
                                                            control={props.configArray.control}
                                                            defaultValue={row[nameField]}
                                                            rules={configField?.rules ? configField.rules : {}}
                                                            render={({ onChange, value }) =>
                                                                props.configArray.keyName === nameField
                                                                    ? <div>{indexRow + 1}</div>
                                                                    :
                                                                    <InputBase
                                                                        placeholder={nameField}
                                                                        // id={uniqueId}
                                                                        value={value}
                                                                        onChange={onChange}
                                                                    // name={nameField}
                                                                    />
                                                            }
                                                        />

                                                    </TableCell>
                                                )
                                            }
                                            // <TableCell align="right">{row.calories}</TableCell>
                                        )}
                                    </TableRow>
                                )
                            }

                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}