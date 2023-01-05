import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgUrl: string;

  @Column()
  caption: string;

  @Column({ default: 0 })
  likeCount: number;
}
