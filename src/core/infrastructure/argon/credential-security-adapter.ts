import argon from 'argon2'
import { CredentialsPort } from "@core/domain/ports/credentials/credentials";


export class CredentialSecurityAdapter implements CredentialsPort {

    private static instance: CredentialSecurityAdapter

    private constructor() { }

    static init(): CredentialSecurityAdapter {

        if (!CredentialSecurityAdapter.instance) {
            CredentialSecurityAdapter.instance = new CredentialSecurityAdapter()
        }

        return CredentialSecurityAdapter.instance
    }

    async passwordEncrypt(password: string): Promise<string> {
        return argon.hash(password)
    }

    async comparePassword(passwordHash: string, password: string): Promise<boolean> {
        return await argon.verify(passwordHash, password)
    }

    passwordValid(expiresIn: number): boolean {
        const currentDateInMiliSeconds = new Date().getTime()
        return expiresIn < currentDateInMiliSeconds
    }

}
