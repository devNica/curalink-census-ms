export interface TokenModel {
    userId: string
    token: string
    expiresIn: string
}

export type TokenPayloadModel = {
    userId: string
    roles: string[]
}

export interface SignedToken {
    token: string
    expirationDate: Date
}

export type TokenResponseModel = Pick<TokenModel, 'userId' | 'expiresIn'>