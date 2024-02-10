import { IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    userName:string;

    @IsOptional()
    @IsString()
    avatarUrl?:string;

    @IsOptional()
    @IsString()
    displayName?:string
}