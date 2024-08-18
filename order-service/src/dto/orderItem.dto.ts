import { IsNotEmpty, IsNumber } from 'class-validator';

export class orderItemDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    order_id: number;

    @IsNotEmpty()
    @IsNumber()
    book_id: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}