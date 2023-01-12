import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { LikeService } from './like.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user-decorator';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('likes')
@Controller()
export class LikeController {
  constructor(private readonly likeService: LikeService) {}
  @Post()
  async create(@Param('postId') postId: string, @CurrentUser() user) {
    await this.likeService.create(+postId, user.userId);
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
