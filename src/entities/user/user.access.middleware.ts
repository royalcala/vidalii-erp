import { Response } from "express";
import { Context } from "../../service";
//https://developer.mozilla.org/es/docs/Web/HTTP/Status
export const controlByGroups = (groups: string[]) => (req, res: Response, next) => {
    const context = req.context as Context

    const isInGroup = context.token.groups.find(
        value => groups.find(valu2 => valu2 === value)
    )
    if (isInGroup)
        next()
    else
        res.status(401).send(`You do not have authorization for run this api`)

}