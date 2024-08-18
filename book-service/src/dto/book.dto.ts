import { IsNumber, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class bookDto {
    @IsNumber()
    id: number;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    readonly book_title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    readonly book_author: string;

    @IsNumber()
    @IsNotEmpty()
    readonly isbn: number;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    readonly stock_quantity: number;
}