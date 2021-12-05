"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    let database;
    if (process.env.NODE_ENV === "production") {
        database = {
            type: process.env.TYPE || "postgres",
            host: process.env.HOST || "localhost",
            port: parseInt(process.env.DBPORT, 10) || 5432,
            username: process.env.DBUSER,
            password: process.env.PASSWORD,
            database: process.env.DBNAME,
            migrationsRun: true,
            logging: true,
            synchronize: true,
            migrations: ['../src/migrations/*{.ts,.js}'],
            entities: ["../dist/**/*.entity{.ts,.js}"],
            subscribers: ["../dist/subscribers/**/*{.js,.ts}"],
            cli: {
                migrationsDir: "src/migrations"
            },
        };
    }
    else {
        database = {
            host: process.env.HOST || "localhost",
            port: parseInt(process.env.DBPORT, 10) || 5432,
            type: process.env.TYPE || "postgres",
            username: process.env.DBUSER,
            password: process.env.PASSWORD,
            database: process.env.DBNAME,
            migrationsRun: true,
            logging: true,
            synchronize: true,
            migrations: ['dist/src/migrations/*{.ts,.js}'],
            entities: ["dist/**/*.entity{.ts,.js}"],
            subscribers: ["dist/subscribers/**/*{.js,.ts}"],
            cli: {
                migrationsDir: "src/migrations"
            },
        };
    }
    return {
        database,
        JWT_SECRET: process.env.JWT_SECRET || "1234566778",
    };
};
//# sourceMappingURL=configuration.js.map