import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../core/admin/Admin.Doc.Tabs';
import { TableEdit, TableProps } from "../core/form/Table.Edit";
import util from "util";
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { Form, FormProps } from '../core/form/form';



const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const { control, getValues } = useForm<{}>()
  let params: any = useParams();
  const { loading, error, data } = useQuery(`#graphql
 {
    user:userFind(operators:"${params._id}") {
    _id
    _id_company

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

  const config: FormProps['config'] = {
    name: {
      alias: "Name",
      type: 'string'
    },
    lastname: {
      alias: "LastName",
      type: 'string'
    },
    email:{
      type:'email'
    }
  }
  if (loading) return 'loading...'
  else if (error) return 'Error:' + JSON.stringify(error)
  else
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