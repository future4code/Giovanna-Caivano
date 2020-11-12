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
