import {config}from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'bavuuc1lrjv6vm7soxxv-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE|| 'bavuuc1lrjv6vm7soxxv'
export const DB_USER=process.env.DB_USER|| 'ulybjb2wgz4fi8w6'
export const DB_PASSWORD=process.env.DB_PASSWORD||'xBcYeoCnPT11gbBEipp4'
export const DB_PORT=process.env.DB_PORT|| 3306
export const PORT= process.env.PORT|| 3000