import React from "react";
import { Route } from "components/core/routes/Routes.many.rcontext";
import AccountIcon from 'template-icons/AccountCircle';
import { TableView, TableProps } from "../form/Table.View";
import { useQuery } from "graphql-hooks";
const route: Route = {
    name: 'Users',
    parent: 'System',
    sidebar: true,
    Icon: AccountIcon,
    Component: Users
}
export default route


const QUERY = `#graphql
query Users{
    users:userFind {
      _id
      name
      lastname
      email
      phone
      groups      
    }
  }`


function Users() {
    const { loading, error, data } = useQuery(QUERY)
    if (loading) return 'Loading...'
    if (error) return 'Error:' + JSON.stringify(error)
    const config: TableProps['config'] = {
        _id: {
            alias: "ID",
            type: 'string'
        },
        lastname: {
            alias: "LastName",
            type: "string"
        }
    }
    return <TableView config={config} data={data.users} open={{ url: "/System.User", parameters: ['_id'] }} />
}



