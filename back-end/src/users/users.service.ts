import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/user.dto";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(@Inject("USER_MODEL") private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({email}).exec();
  }
}