import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClimbersModule } from './climbers/climbers.module';
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";
import { PostModule } from './post/post.module';
import { Post } from "./post/entities/post.entity";
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49153,
      username: 'postgres',
      password: 'postgrespw',
      database: 'postgres',
      entities: [User, Post],
      synchronize: true,
      logging: true,
    }),
    ClimbersModule,
    UsersModule,
    PostModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
