import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { UpdateUsersDto } from "./dto/updateUsers.dto";

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

    @Get(":id")
    getUsersById(@Param('id') id:string){
        return this.usersService.getUsersById(id)
    }

    @Patch(":id")
    updateUser(@Param("id") id:string , @Body() updateUsersDto:UpdateUsersDto){
        return this.usersService.updateUsers(id,updateUsersDto)
    }

    @Delete(":id")
    deleteUser(@Param("id") id:string){
        return this.usersService.deleteUser(id)
    }
}