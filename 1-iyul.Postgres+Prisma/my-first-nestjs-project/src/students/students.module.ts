import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [PrismaModule],
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
