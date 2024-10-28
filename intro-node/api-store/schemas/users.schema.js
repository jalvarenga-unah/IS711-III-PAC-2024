import { z } from 'zod'


const userSchema = z.object(
    {
        "name": z.string({
            invalid_type_error: "El nombre debe ser un string"
        }).trim().min(3, {
            message: "El nombre debe tener al menos 3 caracteres"
        }),
        "username": z.string().trim().min(5),
        "email": z.string().email({
            message: "El email no es válido"
        }).endsWith('unah.hn', {
            message: "El email debe ser de un estudiante de la UNAH"
        }),
        "phone": z.string().length(8),
        "website": z.string().url(),
    },
)

export const validateUserSchema = (user) => userSchema.safeParse(user)