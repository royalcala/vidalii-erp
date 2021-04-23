import React from 'react';
import { useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../admin/Admin.Doc.Tabs';

// import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { Form, FormProps } from '../form/form';
// import { objectString } from '../form/utils';
import { useQuery } from 'react-query'
import { Session } from './User.Session';


function useUser(_id: string) {
  const { client } = React.useContext(Session)
  return useQuery("user", async () => {
    const { data } = await client.post('/api/userFind', { _id })
    // const { data } = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    // );
    return data;
  });
}
const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const { control, getValues } = useForm<{}>()
  let params: any = useParams();
  const { data, isError, isLoading } = useUser(params._id)
  console.log(data)
  mutation.set(Mutation,
    () => {
      alert("hi")
    }
  )


  if (isLoading) return 'loading...'
  if (isError) return 'Error.'

  const config: FormProps['config'] = {
    firstname: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    email: {
      type: 'email'
    },
    groups: {
      type: "autocomplete",
      autoComplete: {
        isMulti: true,
        loadOptions: async (inputValue) => data[0].groups.filter(
          (group: { _id: string, name: string }) => group.name.toLowerCase()
            .includes(inputValue.toLowerCase())
        )
      }
    }
  }

  return <Form
    data={data[0]}
    config={config}
    control={control}
  />
}




const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab