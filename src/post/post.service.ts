import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private usersRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.usersRepository.save(createPostDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
