import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn
} from "typeorm"

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  subject: string

  @Column()
  body: string

  @CreateDateColumn()
  createdAt: Date

  @Column()
  userId: number
}
