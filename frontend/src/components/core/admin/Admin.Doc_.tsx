import React from 'react'
import { Props as HeaderProps, DocSave } from "./Admin.Doc.Header.Save";
import DocTabs, { Tab } from "./Admin.Doc.Tabs";
import { makeStyles, createStyles, Theme } from 'template-core/styles';
import Paper from 'template-core/Paper';
import Grid from 'template-core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
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
        button: {
            marginRight: theme.spacing(0.5)
        }
    }),
);
interface Props {
    breadcrum: HeaderProps['breadcrum'],
    tabs: Tab[],
}

export function Doc(props: Props) {
    const classes = useStyles();
    //mutation is together, queries is for each tab,
    //mutation params with reac-router-dom useParams() for get the id 
    const mutation: HeaderProps['gql']['mutation'] = new Map()
    return (
        <>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container >
                                <Grid item xs={2} >
                                    <DocSave
                                        breadcrum={props.breadcrum}
                                        gql={{
                                            mutation
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    TODO, require.context other actions like email
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <DocTabs tabs={props.tabs} mutation={mutation} />
        </>
    )
}