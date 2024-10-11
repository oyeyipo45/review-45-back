import validateEnv from "./utils/validateEnv";
import App from "./app";
import HotelsRoute from './routes/hotels.routes';

validateEnv();

const app = new App([new HotelsRoute()]);

app.listen();
