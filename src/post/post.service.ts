import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    return this.postRepository.save(createPostDto);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find({ order: { id: 'desc' } });
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  update(id: number, updatePostDto: UpdatePostDto): Promise<UpdateResult> {
    return this.postRepository.update(id, { caption: updatePostDto.caption });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.postRepository.delete(id);
  }
}
