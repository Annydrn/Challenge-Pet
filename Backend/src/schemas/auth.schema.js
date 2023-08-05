import {z} from "zod"

export const signUpSchema = z.object({
firstname: z.string({
    required_error:"Su nombre es requerido"
}),
lastname: z.string({
    required_error: "Su apellido es requerido"
}),
email: z.string({
    required_error:"Debe ingresar un correo electronico"
}).email({
    message:"correo invalido"
}),
password: z.string({
    required_error:"La constraseña es requerida"
}).min(6,{
    message:"La contraseña debe tener un minimo de 6 caracteres"
})
});

export const loginSchema= z.object({
    email: z.string({
        required_error:"El e-mail es requerido",
    }).email({
        message:"Correo invalido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
    }).min (6,{
message:"La contraseña debe tener un minimo de 6 caracteres "
    })
})