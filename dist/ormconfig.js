module.exports = {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    type: process.env.DATABASE_TYPE || "postgres",
    username: "postgres",
    password: "password",
    database: "user-crud",
    synchronize: false,
    migrationsRun: true,
    migrations: ["dist/src/migrations/*{.ts,.js}"],
    entities: ["dist/**/*.entity{.ts,.js}"],
    seeds: ["dist/**/*.seed{.ts,.js}"],
    factories: ["dist/**/*.factory{.ts,.js}"],
    cli: {
        migrationsDir: "src/migrations"
    },
};
//# sourceMappingURL=ormconfig.js.map