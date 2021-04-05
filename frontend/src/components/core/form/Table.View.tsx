import React from "react"
import { makeStyles } from 'template-core/styles';
import Table from 'template-core/Table';
import TableBody from 'template-core/TableBody';
import TableCell from 'template-core/TableCell';
import TableContainer from 'template-core/TableContainer';
import TableHead from 'template-core/TableHead';
import TableRow from 'template-core/TableRow';
import Paper from 'template-core/Paper';
import OpenInNewIcon from 'template-icons/OpenInNew';
import { blue } from 'template-core/colors';
import IconButton from 'template-core/IconButton';
import Tooltip from 'template-core/Tooltip';
// import Link from 'template-core/Link';
import { Link } from 'react-router-dom'
import { FormControl, FormHelperText, Input, InputLabel } from "template-core";
import { useHistory } from "react-router-dom";

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
        }
    },
    data: any[]
    open: {
        url: string,//-->/System.User
        parameters: string[]//-->_id
    } // /route/:slug
}

export function TableView(props: TableProps) {
    const classes = useStyles();
    const entries = Object.entries(props.config)
    let history = useHistory();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" key={0} />
                        {entries.map(
                            ([key, value], index) => (
                                <TableCell align="left" key={index + 1}>
                                    <FormControl variant="filled">
                                        <InputLabel htmlFor={key + index}>{value.alias}</InputLabel>
                                        <Input
                                            id={key + index}
                                            onChange={() => { }}
                                            name={key}
                                        />
                                    </FormControl>
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.data.map(
                            (row, indexRow) => {
                                return (
                                    <TableRow key={indexRow}>
                                        <TableCell align="left" key={indexRow}>
                                            <Tooltip title="Open">
                                                {/* <IconButton color="inherit" aria-label="Delete" */}
                                                <Link to={props.open.url + `/${props.open.parameters.map(
                                                    nameParameter => {
                                                        return row[nameParameter]
                                                    }
                                                ).join('/')
                                                    }`}
                                                // onClick={() => {
                                                //     history.push(props.routeToOpen);
                                                // }}}
                                                >
                                                    <OpenInNewIcon style={{ color: blue[300] }} />
                                                    {/* </IconButton> */}
                                                </Link>
                                            </Tooltip>
                                        </TableCell>
                                        {entries.map(
                                            ([nameField, configField], index) => {
                                                return (
                                                    <TableCell align="left" key={index} >
                                                        {row[nameField]}
                                                    </TableCell>
                                                )
                                            }
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