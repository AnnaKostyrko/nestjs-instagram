import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { Like } from '../../like/entities/like.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Role } from '../../roles/role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Post, (post) => post.author)
  post: Post[];

  @OneToMany(() => Like, (like) => like.user)
  like: Like[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Comment[];

  @Column({ default: Role.User })
  role: Role;

  @ManyToMany(() => User, (user) => user.friends)
  @JoinTable()
  friends: User[];
}
