import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Like } from "../like/entities/like.entity";
import { Repository } from "typeorm";
import { Post } from "../post/entities/post.entity";
import { Comment } from "./entities/comment.entity";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(
    postId: number,
    userId: number,
    createCommentDto: CreateCommentDto,
  ) {
    const post = await this.postRepository.findOneBy({
      id: postId,
    });
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.BAD_REQUEST);
    }
    post.commentCount++;
    await this.postRepository.save(post);

    return this.commentRepository.save({ postId, userId, ...createCommentDto });
  }

  find(postId: number) {
    return this.commentRepository.find({
      where: { postId },
      order: { id: 'asc' },
    });
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}
