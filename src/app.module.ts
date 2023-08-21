import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DATABASE_CONFIGURATION } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIGURATION),
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
