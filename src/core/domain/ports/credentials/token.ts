import { SignedToken, TokenPayloadModel } from "@core/application/models/token/token";
import { VerifiedTokenResponseModel } from "@core/domain/token/token";


export interface TokenPort {
    signAccessToken: (payload: TokenPayloadModel) => SignedToken
    signRefresToken: (payload: TokenPayloadModel) => SignedToken
    verify: (jwtToken: string, isAccessToken?: boolean) => VerifiedTokenResponseModel
}