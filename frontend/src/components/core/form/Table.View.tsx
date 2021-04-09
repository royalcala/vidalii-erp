import React from "react"
import { makeStyles } from 'template-core/styles';
import Table from 'template-core/Table';
import TableBody from 'template-core/TableBody';
import TableCell from 'template-core/TableCell';
import TableContainer from 'template-core/TableContainer';
import TableHead from 'template-core/TableHead';
import TableRow from 'template-core/TableRow';
import OpenInNewIcon from 'template-icons/OpenInNew';
import { blue } from 'template-core/colors';
import Tooltip from 'template-core/Tooltip';
import { Link } from 'react-router-dom'
import { Button, Grid, TextField } from "template-core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});


export type TableProps = {
    config: {
        [key: string]: {
            alias?: string,
            type: 'string' | 'number' | 'email' | 'password' | 'autocompletes',//html5
            search?: boolean
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
    const { control, getValues } = useForm<{}>()
    const onSearch = (e: any) => {
        if (e.key === 'Enter') {
            console.log('enter pressed');
            //TODO run query for search
        }
    }
    return (
        <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={3}
        >
            <Grid item >
                <TextField id="filled-basic" label="Query" />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary">
                    Search
                </Button>
            </Grid>
            <TableContainer>
                <Table className={classes.table} size="small" aria-label="dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" key={0} />
                            {entries.map(
                                ([key, value], index) => (
                                    <TableCell align="left" key={index + 1}>
                                        {value?.search === true
                                            ? <TextField label={value?.alias ? value.alias : key} onKeyDown={onSearch} />
                                            : value?.alias ? value.alias : key
                                        }

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
                                                    >
                                                        <OpenInNewIcon style={{ color: blue[300] }} />
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
            <Grid item >
                Prev
            </Grid>
            <Grid item >
                Next
            </Grid>
        </Grid>
    )
}