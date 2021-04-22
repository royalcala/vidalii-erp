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
import { useForm, Controller } from "react-hook-form";
import { Session } from "../session/User.Session";
import { useQuery } from "react-query";

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});


export type TableProps = {
    api: string,
    config: {
        [key: string]: {
            alias?: string,
            format?: (value: any) => any
            search?: boolean
        }
    },
    open: {
        url: string,//-->/System.User
        parameters: string[]//-->_id
    } // /route/:slug
}

export function TableView(props: TableProps) {
    console.log('redered TableView')
    const classes = useStyles();
    const { client } = React.useContext(Session)
    const [search, setSearch] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [data, setData] = React.useState([]);
    //const [entries, setEntries] = React.useState(props.config)
    React.useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const { data } = await client.post<any[]>(props.api, search)

                //@ts-ignore
                setData(data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [search]);
    const entries = Object.entries(props.config)
    const { control, getValues } = useForm<{}>()
    const onSearch = (e: any) => {
        if (e.key === 'Enter') {
            console.log('click enterss')
            const entries = Object.entries(getValues()).filter(
                ([key, value]) => value !== ''
            )
            const filter = Object.fromEntries(entries)
            console.log({ filter })
            //reload table
            setSearch(filter)
        }
    }
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
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
                                ([key, config], index) => (
                                    <TableCell align="left" key={index + 1}>
                                        {config?.search === true
                                            ?
                                            <Controller
                                                name={key}
                                                control={control}
                                                defaultValue=""
                                                render={({ onChange, value }) => <TextField
                                                    label={config?.alias ? config.alias : key}
                                                    onKeyDown={onSearch}
                                                    value={value}
                                                    onChange={onChange}
                                                />}
                                            />
                                            //  <TextField label={config?.alias ? config.alias : key} onKeyDown={onSearch} />
                                            : config?.alias ? config.alias : key
                                        }

                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            //@ts-ignore
                            data.map(
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
                                                            {
                                                                configField?.format !== undefined
                                                                    ? configField.format(row[nameField])
                                                                    : row[nameField]
                                                            }
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