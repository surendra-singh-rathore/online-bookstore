import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class editBookDto {

    @IsNotEmpty()
    @IsString()
    book_title: string;

    @IsNotEmpty()
    @IsString()
    book_author: string;

    @IsNotEmpty()
    @IsNumber()
    isbn: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}