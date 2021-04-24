import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../admin/Admin.Doc.Tabs';

// import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { Form, FormProps } from '../form/form';
// import { objectString } from '../form/utils';
import { useQuery } from 'react-query'
import { Session } from './User.Session';
import TextField from 'template-core/TextField';
import Box from 'template-core/Box';
import makeStyles from 'template-core/styles/makeStyles';
import createStyles from 'template-core/styles/createStyles';
import { Theme } from 'template-core/styles';
import Select from 'react-select'
import Grid from 'template-core/Grid';
import { FormLabel, Typography } from 'template-core';
import { SelectMultiSync } from '../form/select.multi.sync'

function useFetchData(_id: string) {
  const { client } = React.useContext(Session)
  return useQuery("user", async () => {
    const user = client.post('/api/userFind', { _id })
    const groups = client.post('/api/groupFind', {})
    const data = await Promise.all([user, groups])
    console.log(data)
    return {
      user: data[0].data[0],
      groups: data[1].data
    };
  });
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    label: {
      fontSize: 12
    }
  }),
);
const customStyles = {
  // option: (provided:any, state:any) => ({
  //   ...provided,
  //   borderBottom: '1px dotted pink',
  //   color: state.isSelected ? 'red' : 'blue',
  //   padding: 20,
  // }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  // singleValue: (provided:any, state:any) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const classes = useStyles();
  const { client } = React.useContext(Session)
  const { control, getValues } = useForm<{}>()
  let params: any = useParams();
  let { data, isError, isLoading } = useFetchData(params._id)

  mutation.set(Mutation,
    async () => {
      console.log(getValues())
      // const { data } = await client.post<any[]>('/api/userUpdate', getValues())
    }
  )


  if (isLoading) return 'loading...'
  if (isError) return 'Error.'
  if ( data?.user.length === 0) return <div>User not found</div>

  return (
    <Grid container className={classes.root} spacing={2}>
      {[
        'firstname',
        'lastname',
        'email',
        'phone',
      ].map(
        (value, index) => <Controller
          name={value}
          control={control}
          defaultValue={data?.user[value]}
          render={(data: any) => {
            return (
              <Grid key={index} item>
                <TextField label={value} {...data} />
              </Grid>
            )
          }

          }
        />
      )}
      <Grid key="groups" item>
        {/* <Controller
          name="groups"
          control={control}
          defaultValue={data?.user.groups.map(({ _id, name }: { _id: string, name: string }) => ({ value: _id, label: name }))}
          render={({ onChange, value }: any) => {
            return (
              <SelectMultiSync
                name="groups"
                defaultValue={value}
                onChange={onChange}
                options={[{ label: "orange", value: "1" }]}
              />
            )
          }

          }
        /> */}
      </Grid>
    </Grid>
  )
}




const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab