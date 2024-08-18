import { IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from 'src/shared/enums/status.enum';

export class editOrderDto {
    
    @IsNotEmpty()
    @IsEnum(Status)
    status: Status;
}