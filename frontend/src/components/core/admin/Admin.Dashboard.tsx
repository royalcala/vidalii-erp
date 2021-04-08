import React from 'react'
import Grid from "template-core/Grid";
import Breadcrumbs from "template-core/Breadcrumbs";
import Link from "template-core/Link";
import Typography from 'template-core/Typography';
import { makeStyles, createStyles, Theme } from 'template-core/styles';
import { TableView, TableProps } from "../form/Table.View";
import Paper from 'template-core/Paper';
import { FormControl, FormHelperText, Input, InputLabel } from 'template-core';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        link: {
            display: 'flex',
        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 20,
            height: 20,
        },
    }),
);
export type Props = {
    parent: string | null,
    Icon: Function,
    name: string
    table: TableProps
}
export function Dashboard(props: Props) {
    const [query,setQuery]=React.useState()

    const classes = useStyles();
    return <Paper className={classes.paper}>
        <Grid container >
            <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb">
                    {props?.parent !== null ?
                        <Link color="inherit" href="#" className={classes.link}>
                            {props.parent}
                        </Link>
                        : <Link color="inherit" href="#" className={classes.link}>
                            /
        </Link>
                    }
                    <Typography color="textPrimary" className={classes.link}>
                        <props.Icon className={classes.icon} />
                        {props.name}
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12}>
                <TableView config={props.table.config} data={props.table.data} open={props.table.open} />
            </Grid>
        </Grid>
    </Paper>
}