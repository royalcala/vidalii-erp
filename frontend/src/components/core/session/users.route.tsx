import React from "react";
import { Route } from "components/core/routes/Routes.many.rcontext";
import AccountIcon from 'template-icons/AccountCircle';
// import { useQuery } from "graphql-hooks";
import { Dashboard, Props } from "../admin/Admin.Dashboard";
import PeopleIcon from 'template-icons/People';
import { useQuery } from 'react-query'
import axios from 'axios'
import { Session } from "./User.Session";

const route: Route = {
    name: 'Users',
    parent: 'System',
    sidebar: true,
    Icon: AccountIcon,
    Component: Users
}
export default route

// function useUsers() {
//     const { client } = React.useContext(Session)
//     return useQuery("posts", async () => {
//         const { data } = await client.post('/api/userFind', {})
//         // const { data } = await axios.get(
//         //     "https://jsonplaceholder.typicode.com/posts"
//         // );
//         return data;
//     });
// }


function Users() {
    const props: Props = {
        Icon: route.Icon,
        name: route.name,
        parent: route.parent,
        table: {
            api: '/api/userFind',
            config: {
                _id: {
                    search: true
                },
                firstname: {
                    search: true
                },
                lastname: {
                    search: true
                },
                email: {
                    search: true
                },
                phone: {
                    search: true
                },
                groups: {
                    search: true,
                    searchFormat: (value) => ({
                        name: {
                            "$like": `%${value}%`
                        }
                    }),
                    format: (data: { _id: string, name: string }[]) => data.map(d => d.name).join(', ')
                }
            },
            open: { url: "/System.User", parameters: ['_id'] }

        }
    }


    return <Dashboard {...props} />
}



