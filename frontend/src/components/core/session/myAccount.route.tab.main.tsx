import React from 'react';
import { PropsTab, Tab } from "components/core/admin/Admin.Doc.Tabs"
import { useMutation, useQuery } from 'graphql-hooks'
import { FormProps, Form } from "../form/form";
import { useForm } from 'react-hook-form';
import util from "util";
const UPDATE_MY_USER = `#graphql
mutation updateMyUser($user:UserUpdate){
  userUpdateMyAccount(user:$user){
    _id
  }
}
`
const QUERY_MY_USER = `#graphql
query GetMyUser{
  myUser:userGetMyUser{
    name
    lastname
    email
    phone    
    groups
    password
  }
}
`
const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const { control, getValues } = useForm<{}>()

  mutation.set(Mutation,
    () => {
      //util.inspect for print object to string
      const values = util.inspect(getValues()).replaceAll("'", '"')
      return `#graphql
      userUpdateMyAccount(user:${values}){
        _id
      }
      `
    }
  )
  const { loading, error, data } = useQuery(QUERY_MY_USER)
  if (loading) return 'Loading...'
  if (error) return 'Error:' + JSON.stringify(error)
  if (!data?.myUser?.name)
    return 'Its required to close your session first.'

  const myUser_config: FormProps['config'] = {
    name: {
      type: 'string',
    },
    lastname: {
      type: 'string'
    },
    email: {
      alias: "email(username)",
      type: 'email',
    },
    phone: {
      type: 'number'
    },
    password: {
      type: 'number'
    }
  }
  return <Form
    data={data.myUser}
    config={myUser_config}
    control={control}
  />

}

const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab