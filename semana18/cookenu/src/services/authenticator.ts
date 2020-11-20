import * as jwt from 'jsonwebtoken'
export type AuthenticationData = {
    id: string
}

export const generateToken = (
    payload: AuthenticationData
): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}

export const getTokenData = (
    token: string
):AuthenticationData => {
    const payload:AuthenticationData = jwt.verify(
        token,
        process.env.JWT_KEY as string 
    ) as AuthenticationData

    return {
        id: payload.id
    }
}
