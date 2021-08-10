import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/database/typeorm.config';



import { UsersModule } from './modules/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import {RolesGuard} from './guards/roles.guard';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    })
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
