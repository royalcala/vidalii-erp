import React from 'react';
import Login from '../../theme/Admin.Signin'
import Admin from '../admin/Admin';
import SimpleDialog from "../dialog/dialog.simple";
import axios, { AxiosInstance } from "axios";
import { useMutation } from 'react-query'


export const Session = React.createContext<{
    session: null | string,
    closeSession: () => void,
    client: AxiosInstance
}>({ session: null, closeSession: () => { },client:axios.create() })


const AUTH = 'authorization'
export default function UserSession() {
    const [session, setSession] = React.useState(localStorage.getItem(AUTH))
    const mutation = useMutation((credentials: { email: string, password: string }) => axios.post('/api/userLogin', credentials),
        {
            onSuccess: (data, variables, context) => {
                localStorage.setItem(AUTH, data.data)
                setSession(data.data)
            }
        })

    if (session) {
        return (
            <Session.Provider value={{
                session,
                closeSession: () => {
                    localStorage.removeItem(AUTH)
                    setSession(null)
                },
                client: axios.create({
                    headers: { [AUTH]: session }
                })
            }}>
                <Admin />
            </Session.Provider>
        )
    }
    else {
        return (
            <>
                {/* <SimpleDialog msg={openAlert.msg} open={openAlert.open} close={() => { setOpenAlert({ msg: '', open: false }) }} /> */}
                <Login mutation={mutation} />
            </>

        )
    }
}