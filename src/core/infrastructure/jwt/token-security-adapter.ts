import jwt from 'jsonwebtoken'
import constants from '@core/shared/constants';

import { TokenPayloadModel, SignedToken } from "@core/application/models/token/token";
import { TokenPort } from "@core/domain/ports/credentials/token";
import { VerifiedTokenResponseModel } from "@core/domain/token/token";
import { createFutureDate } from "@core/shared/utils/date";

class JsonWebTokenAdapter implements TokenPort {

    constructor(
        private readonly secret: string,
        private readonly refreshSecret: string,
        private readonly accessTokenExpirationTime = 600, //miliseconds
        private readonly refreshTokenExpirationTime = 1800 // miliseconds
    ) { }

    signAccessToken(payload: TokenPayloadModel): SignedToken {

        const expirationDate = createFutureDate(
            new Date(),
            this.accessTokenExpirationTime
        )

        const token = jwt.sign(payload, this.secret, {
            expiresIn: this.accessTokenExpirationTime
        })

        return {
            token,
            expirationDate
        }
    }


    signRefresToken(payload: TokenPayloadModel): SignedToken {
        const expirationDate = createFutureDate(
            new Date(),
            this.refreshTokenExpirationTime
        )

        const token = jwt.sign(payload, this.refreshSecret, {
            expiresIn: this.refreshTokenExpirationTime
        })

        return {
            token,
            expirationDate
        }
    }

    verify(jwtToken: string, isAccessToken?: boolean): VerifiedTokenResponseModel {

        const secret = isAccessToken ? this.secret : this.refreshSecret
        const userData = jwt.verify(jwtToken, secret) as { id: string, roles: string[] }

        return {
            id: userData.id,
            roles: userData.roles
        }
    }

}


const jwtSecret = constants.JWT_SECRET
const jwtRefresh = constants.JWT_REFRESH
const accesTokenExpirationTime = Number(constants.JWT_ACCESS_EXPIRATION_TIME)
const refreshTokenExpirationTime = Number(constants.JWT_REFRESH_REFRESH_EXPIRATION_TIME)


export const jsonWebToken = new JsonWebTokenAdapter(
    jwtSecret,
    jwtRefresh,
    accesTokenExpirationTime,
    refreshTokenExpirationTime
)