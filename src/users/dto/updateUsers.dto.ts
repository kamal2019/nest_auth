import { IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class UpdateUsersDto{
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