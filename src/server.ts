import { getDatabaseCrendential } from '@core/shared/configs/db-credentials'
import { curaLinkCore, curalinkModels } from '@devnica/curalink-dbmodels-pkg'

async function startServer() {

    /** Obtener las credenciales de conexiona la base de datos, segun ambiente */
    const credentials = getDatabaseCrendential()

    const db = curaLinkCore.DatabaseOrchestratror.newOrchestrator()

    const conn: curalinkModels.DatabaseConnectionCredentials = {
        database: credentials.DB_NAME,
        host: credentials.DB_HOST,
        password: credentials.DB_PASSWORD,
        user: credentials.DB_USER,
        logging: false,
    }

    try {

        const seqAdapter = await db.initialize(conn)
        await db.migrations(seqAdapter, 'public', 'auth')

    } catch (error) {
        console.log(error)
    }

}


startServer()