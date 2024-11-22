declare global {
  namespace NodeJS {

    interface ProcessEnv {
      SERVER_PORT: string
      NODE_ENV: 'development' | 'test' | 'production'

      DB_SCHEMA_PROD: string
      DB_NAME_PROD: string
      DB_USER_PROD: string
      DB_PASSWORD_PROD: string
      DB_HOST_PROD: string
      DB_DIALECT_PROD: 'mysql' | 'postgres' | 'mssql'

      DB_SCHEMA_DEV: string
      DB_NAME_DEV: string
      DB_USER_DEV: string
      DB_PASSWORD_DEV: string
      DB_HOST_DEV: string
      DB_DIALECT_DEV: 'mysql' | 'postgres' | 'mssql'

      DB_SCHEMA_TEST: string
      DB_NAME_TEST: string
      DB_USER_TEST: string
      DB_PASSWORD_TEST: string
      DB_HOST_TEST: string
      DB_DIALECT_TEST: 'mysql' | 'postgres' | 'mssql'

      JWT_SECRET: string
      JWT_SECRET_REFRESH: string
      JWT_SECRET_EXPIRATION_SECS: string
      JWT_SECRET_REFRESH_EXPIRATION_SECS: string

    }
  }
}

export { }
