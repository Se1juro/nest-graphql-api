import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DATABASE_CONFIGURATION: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite3',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // False in production
};
