import React from "react";
import { Route } from "components/core/routes/Routes.many.rcontext";
import AccountIcon from 'template-icons/AccountCircle';
import { Tab } from "../core/admin/Admin.Doc.Tabs";
import { Doc } from "../core/admin/Admin.Doc_";
import { useParams } from "react-router-dom";
const route: Route = {
    name: 'ContactEdit',
    parent: 'CRM',
    // paramaters: '/:_id',
    sidebar: false,
    Icon: AccountIcon,
    Component: Contact
}
export default route

const getTabs = require.context(
    'components',
    true,
    /contacts\.edit\.route\.tab\..+\.(tsx|js)$/
)

const Tabs = getTabs.keys().map(dir => {
    return getTabs(dir).default as Tab
})

function Contact() {
    return <Doc
        breadcrum={route}
        tabs={Tabs}
    />
}



