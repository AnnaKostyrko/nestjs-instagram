import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClimbersModule } from './climbers/climbers.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { LikeModule } from './like/like.module';
import { Like } from './like/entities/like.entity';
import { RouterModule, Routes } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/entities/comment.entity';

const routes: Routes = [
  {
    path: '/posts',
    module: PostModule,
    children: [
      {
        path: ':postId/likes',
        module: LikeModule,
      },
      {
        path: ':postId/comments',
        module: CommentModule,
      },
    ],
  },
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 55000,
      username: 'postgres',
      password: 'postgrespw',
      database: 'postgres',
      entities: [User, Post, Like, Comment],
      synchronize: true,
      logging: true,
    }),
    RouterModule.register(routes),
    ClimbersModule,
    UsersModule,
    PostModule,
    LikeModule,
    AuthModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
