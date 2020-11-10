import * as jwt from 'jsonwebtoken'
import { USER_ROLE } from '../types'

export type AuthenticationData = {
    id: string,
    role: USER_ROLE
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
): AuthenticationData => {
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData

    return {
        id: payload.id,
        role: payload.role
    }
}

