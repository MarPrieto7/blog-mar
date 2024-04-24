import { rateLimit } from 'express-rate-limit';

//Uso la libreria rateLimit para definir la cantidad de intentos que se pueden hacer en el login
export const limitLogin = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 3, // Max number of entries to try log in
    message: 'Too many fail requests, try in again in 15 minutes',
})