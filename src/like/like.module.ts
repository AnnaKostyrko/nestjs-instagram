import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../post/entities/post.entity';
import { Like } from './entities/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Like, Post])],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
