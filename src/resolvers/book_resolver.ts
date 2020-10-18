import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import { BookInput } from "../view/book_input";
import { AuthorInput } from "../view/author_input";
import { Book } from "../models/book";
import { Author } from "../models/author";

@Resolver(Book)
export class BookResolver {
    @Query(() => [Book])
    async books(): Promise<Book[]> {
        return Book.find();
    }

    @Mutation(() => Book)
    async createBook(@Arg("input") data: BookInput) {
        const book = Book.create(data);
        await book.save();
        return book;
    }

    @Mutation(() => Author)
    async createAuthor(@Arg("input") data: AuthorInput) {
        const author = Author.create(data);
        await author.save();
        return author;
    }

    @FieldResolver()
    async author(@Root() book: Book) {
        return Author.findOne({ authorId: book.authorId });
    }
}
