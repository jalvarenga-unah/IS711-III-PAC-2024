import cors from 'cors'

export const corsMiddleware = () => cors({
    origin: (origin, callback) => {

        //* IMPORNTANTE: EL "origin" SOLO VIENE DESDE FUERA DEL SERVIDOR

        const accesos_permitidos = [
            'http://localhost:3000',
            'http://localhost:5500',
            'https://miapp.com'
        ]

        if (accesos_permitidos.includes(origin)) {
            callback(null, true)
        }

        // Necesario para que resoponda a las peticiones desde el servidor
        if (!origin) {
            callback(null, true)
        }

        callback(new Error('Acceso denegado'))

    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
})