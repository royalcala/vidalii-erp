import React from "react";
import { Route } from "components/core/routes/Routes.many.rcontext";
import AccountIcon from 'template-icons/AccountCircle';
import { useQuery } from "graphql-hooks";
import { Dashboard, Props } from "../admin/Admin.Dashboard";
import PeopleIcon from 'template-icons/People';
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

    const props: Props = {
        Icon: route.Icon,
        name: route.name,
        parent: route.parent,
        table: {
            config: {
                _id: {
                    type: 'string',
                    search:true
                },
                name: {
                    type: "string",
                    search:true
                },
                lastname: {
                    type: "string",
                    search:true
                },
                email: {
                    type: "email",
                    search:true
                },
                phone: {
                    type: "number",
                    search:true
                },
                groups: {
                    type: "number"
                }
            },
            data: data.users,
            open: { url: "/System.User", parameters: ['_id'] }

        }
    }
    return <Dashboard {...props} />
}



