import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { User } from "src/schemas/User.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUsersDto } from "./dto/updateUsers.dto";

@Injectable()
export class UsersService{
    constructor(
        @InjectModel(User.name) private userModal : Model<User>
    ){}

    createUser(createUserDto:CreateUserDto){
        const user = new this.userModal(createUserDto);
        return user.save()
    }
    getUsers(){
        return this.userModal.find()
    }
    getUsersById(id:string){
        return this.userModal.findById(id)
    }
    updateUsers(id:string , updateUsersDto:UpdateUsersDto){
        return this.userModal.findByIdAndUpdate(id,updateUsersDto,{new:true})
    }
    deleteUser(id:string){
        return this.userModal.findByIdAndDelete(id)
    }
}