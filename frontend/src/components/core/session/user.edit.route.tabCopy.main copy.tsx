import React from 'react';
import {  useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../admin/Admin.Doc.Tabs';

import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { Form, FormProps } from '../form/form';
import { objectString } from '../form/utils';




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
  groups:groupList(selectFormat:true)
}
  `)

  mutation.set(Mutation,
    () => {
      const values = getValues()
      //@ts-ignore
      values.groups = values.groups.map(
        (data: { label: string, value: string }) => data.value
      )
      const objString = objectString(getValues())
      return `#graphql
      userUpdate(
        user: ${objString},
        _id:\"${params._id}\"){
        _id
      }
      `
    }
  )


  if (loading) return 'loading...'
  else if (error) return JSON.stringify(error)
  else if (!data?.user[0])
    return `User not found`

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
        loadOptions: async (inputValue) => data.groups.filter(
          (group: { value: string, label: string }) => group.label.toLowerCase()
            .includes(inputValue.toLowerCase())
        )
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