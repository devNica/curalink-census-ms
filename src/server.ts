import { curaLinkCore, curalinkModels } from '@devnica/curalink-dbmodels-pkg'

async function startServer() {
    const db = curaLinkCore.DatabaseOrchestratror.newOrchestrator()

    const conn: curalinkModels.DatabaseConnectionCredentials = {
        database: "curalink_db",
        host: "localhost",
        password: "windows",
        user: "postgres",
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