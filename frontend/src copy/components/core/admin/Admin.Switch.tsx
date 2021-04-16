import {
    Switch, Route
} from "react-router-dom";
import { Routes } from "../routes/Routes.many.rcontext";



export default function SwitchRoutes() {
    const getPath = (name: string, parent: string | null, parameters: string | undefined) => {
        let url = parent === null
            ? '/' + name
            : '/' + parent + '.' + name
        if (parameters)
            url = url + parameters
        return url
    }
    return (
        <Switch>
            { Routes.map(
                ({ Component, name, parent, paramaters }, index) => {
                    return (
                        <Route
                            key={index}
                            path={getPath(name, parent, paramaters)}
                            component={Component as any}
                        />
                    )
                }
            )}
        </Switch>
    )
}