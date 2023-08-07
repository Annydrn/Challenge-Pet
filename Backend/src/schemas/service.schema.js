import { z } from "zod";

export const createServiceSchema = z.object({
  servicio: z.string({
    required_error: "Debe solicitar un servicio para su mascota",
  }),
  mascota: z.string({
    required_error: "Ingrese el nombre de su mascota",
  }),
  detalles: z.string({
    required_error: "Ingrese detalles que nos ayuden a dar un mejor servicio",
  }),
  fecha: z.string().datetime().optional(),
});
