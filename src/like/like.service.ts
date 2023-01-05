import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';
import { Post } from '../post/entities/post.entity';
// import { UpdateLikeDto } from './dto/update-like.dto';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createLikeDto: CreateLikeDto) {
    const post = await this.postRepository.findOneBy({
      id: createLikeDto.postId,
    });
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.BAD_REQUEST);
    }
    post.likeCount++;
    await this.postRepository.save(post);
    return this.likeRepository.save(createLikeDto);
  }

  find(postId: number) {
    return this.likeRepository.findBy({ postId });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.likeRepository.delete(id);
  }
}
