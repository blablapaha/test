import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Author } from "./author";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  bookId: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Number)
  @Column()
  pageCount: number;

  @Field(() => Number)
  @Column()
  authorId: number;

  @Field(() => Author, { nullable: true })
  @ManyToOne(() => Author)
  author: Author;
}
