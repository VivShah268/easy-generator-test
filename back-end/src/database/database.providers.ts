
import * as mongoose from "mongoose";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect("mongodb+srv://Admin:Admin@c1.uq8kd.mongodb.net/?retryWrites=true&w=majority&appName=C1"),
  },
];
