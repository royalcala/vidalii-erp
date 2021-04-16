import React from "react";
import { Route } from "components/core/routes/Routes.many.rcontext";
import AccountIcon from 'template-icons/AccountCircle';
import { Tab } from "../admin/Admin.Doc.Tabs";
import { Doc } from "../admin/Admin.Doc_";
import { useParams } from "react-router-dom";
const route: Route = {
    name: 'User',
    parent: 'System',
    paramaters: '/:_id',
    sidebar: false,
    Icon: AccountIcon,
    Component: User
}
export default route

const getTabs = require.context(
    'components',
    true,
    /user\.edit\.route\.tab\..+\.(tsx|js)$/
)

const Tabs = getTabs.keys().map(dir => {
    return getTabs(dir).default as Tab
})

function User() {
    return <Doc
        breadcrum={route}
        tabs={Tabs}
    />
}



