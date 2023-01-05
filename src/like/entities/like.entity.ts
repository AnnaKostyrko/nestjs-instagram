import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('likes')
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postId: number;
}
