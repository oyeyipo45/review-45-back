import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    USERNAME: str(),
    PASSWORD: str(),
    DB_NAME: str(),
  });
};

export default validateEnv;
