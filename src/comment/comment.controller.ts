import { Controller, Get, Post, Body, Param, Delete, UseGuards, HttpCode } from "@nestjs/common";
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "../auth/user-decorator";
import { CreatePostDto } from "../post/dto/create-post.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";

@UseGuards(JwtAuthGuard)
@ApiTags('comments')
@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(
    @Param('postId') postId: string,
    @CurrentUser() user,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    await this.commentService.create(+postId, user.userId, createCommentDto);
  }

  @Get()
  find(@Param('postId') postId: string) {
    return this.commentService.find(+postId);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.commentService.remove(+id);
  }
}
