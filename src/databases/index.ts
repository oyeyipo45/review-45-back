import { USERNAME, PASSWORD, DB_NAME } from "../config";

export const dbConnection = {
  url: `mongodb+srv://${USERNAME}:${PASSWORD}@damilola.s7fen.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
