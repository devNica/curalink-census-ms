

export interface CredentialsPort {
    passwordEncrypt(password: string): Promise<string>
    comparePassword(passwordHash: string, password: string): Promise<boolean>
    passwordValid(expiresIn: number): boolean
}