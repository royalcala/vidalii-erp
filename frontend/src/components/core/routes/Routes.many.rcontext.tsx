
export type Route = {
    name: string,
    parent: string | null
    paramaters?: string, // /:parameter1/:parameter2
    sidebar?: boolean,
    Icon: React.FunctionComponent,
    Component: React.FunctionComponent | Function
}

const getContext = require.context(
    'components',
    true,
    /.+\.route\.(tsx|js)$/
)

export const Routes = getContext.keys().map(dir => {
    return getContext(dir).default as Route //as React.FunctionComponent<Props>
})