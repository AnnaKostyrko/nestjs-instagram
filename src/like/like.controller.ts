import { Controller, Get, Post, Param, Delete, HttpCode } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller()
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  async create(@Param('postId') postId: string) {
    await this.likeService.create({ postId: +postId });
  }

  @Get()
  find(@Param('postId') postId: string) {
    return this.likeService.find(+postId);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.likeService.remove(+id);
  }
}
