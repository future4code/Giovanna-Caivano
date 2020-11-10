import { Request, Response } from 'express'

export const sayHi = (
    req: Request,
    res: Response
) => {
    try {
        res.send({ message: "chegou" })
    } catch (error) {
        throw new Error(error);
    }
}