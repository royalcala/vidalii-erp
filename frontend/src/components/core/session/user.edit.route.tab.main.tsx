import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../admin/Admin.Doc.Tabs';
import { TableEdit, TableProps } from "../form/Table.Edit";
import util from "util";
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { Form, FormProps } from '../form/form';




const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const { control, getValues } = useForm<{}>()
  let params: any = useParams();
  const { loading, error, data } = useQuery(`#graphql
 {
    user:userFind(operators:"${params._id}") {
    _id
    name
    lastname
    email
    phone
    groups(selectFormat:true)
  }
}
  `)

  mutation.set(Mutation,
    () => {
      //util.inspect for print object to string
      const values = util.inspect(getValues()).replaceAll("'", '"')
      return `#graphql
      userUpdate(
        user: ${values},
        _id:\"${params._id}\"){
        _id
      }
      `
    }
  )


  if (loading) return 'loading...'
  else if (error) return 'Error:' + JSON.stringify(error)

  console.log('dataUser::', data.user[0])
  // data.user[0].groups = (data.user[0].groups).map((value: string) => ({ value, label: value }))
  const config: FormProps['config'] = {
    name: {
      alias: "Name",
      type: 'string'
    },
    lastname: {
      alias: "LastName",
      type: 'string'
    },
    email: {
      type: 'email'
    },
    groups: {
      type: "autocomplete",
      autoComplete: {
        isMulti: true,
        loadOptions: async (inputValue) =>
          ([{ value: "ho", label: "he" }]) //fetch
        // new Promise(resolve => {
        //   setTimeout(() => {
        //     resolve([{ value: "ho", label: "he" }]);
        //   }, 0);
        // }),
      }
    }
  }

  return <Form
    data={data.user[0]}
    config={config}
    control={control}
  />
}




const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab