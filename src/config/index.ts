import { config } from "dotenv";
config({ path: `.env` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const { NODE_ENV, PORT, USERNAME, PASSWORD, DB_NAME, ORIGIN } = process.env;
