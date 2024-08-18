import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Status } from 'src/shared/enums/status.enum';

export class orderDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsNumber()
    order_amount: number;
    
    @IsNotEmpty()
    @IsEnum(Status)
    status: Status;
}