import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    constructor(private usersService:UsersService){}

    @Post()
    createUser(@Body()  createUserDto:CreateUserDto){
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }

    @Get()
    getUsersById(@Param('id') id:string){

    }
}