import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CourseModule } from './course/course.module';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [PrismaModule, ProductsModule, UsersModule, AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "uploads"),

      serveRoot: "/uploads",
    }),
    CourseModule,
    StudentsModule,
  ],
  controllers: [AppController, StudentsController],
  providers: [AppService, StudentsService],
})
export class AppModule {}
