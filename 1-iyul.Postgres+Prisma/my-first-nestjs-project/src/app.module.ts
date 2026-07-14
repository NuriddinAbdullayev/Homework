import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [PrismaModule, ProductsModule, UsersModule, AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "uploads"),

      serveRoot: "/uploads",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
