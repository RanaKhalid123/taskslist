// import { Module } from '@nestjs/common';
// import { join } from 'path';
// import { ListsModule } from './lists/lists.module';
// import { TasksModule } from './tasks/tasks.module';
// import { MulterModule } from '@nestjs/platform-express';
// import { ScheduleModule } from '@nestjs/schedule';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import configuration from './config/configuration';
// import { DatabaseConfig } from './database.config';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// console.log("configuration", configuration)
// @Module({
//   imports: [ListsModule, TasksModule, GraphQLModule.forRoot(
//     {
//       autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')
//     }
//   ),
//     ConfigModule.forRoot({
//       isGlobal: true,
//       load: [configuration],
//     }),
//     ScheduleModule.forRoot(),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useClass: DatabaseConfig
//     }),
//     MulterModule.registerAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         dest: configService.get('MULTER_DEST'),
//       }),
//       inject: [ConfigService],
//     }),
//     ListsModule,
//     TasksModule
//   ],
//   controllers: [],
//   providers: [],
// })

// export class AppModule { }





import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListsModule } from './lists/lists.module';
import { TasksModule } from './tasks/tasks.module';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    TasksModule,
    ListsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      introspection: true,
      playground: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
