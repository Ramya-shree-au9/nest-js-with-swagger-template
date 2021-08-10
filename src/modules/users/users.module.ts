import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from '../../repository/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UserRepository])],
  exports: [UsersService],
  providers: [UsersService]
})
export class UsersModule {}
