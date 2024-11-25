

export interface StoreTokenModel {
    token: string
    userId: string
    createdAt: number
}

export interface VerifiedTokenResponseModel {
    id: string
    roles: string[]
}