import { Controller, Get, Post, Body, Param, Response, NotFoundException } from "@nestjs/common";
import { CreateUserDto, ValidateUserDto } from "./dto/user.dto";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log("here", createUserDto)
    return this.usersService.create(createUserDto);
  }

  @Get(":email")
  async findOneByEmail(@Param("email") email: string): Promise<User> {
    return this.usersService.findOne(email);
  }

  @Post("validate")
  async validateUserCredentails(@Body() validateUserDto: ValidateUserDto): Promise<User> {
    const user = await this.usersService.findOne(validateUserDto.email);
    if (user && user.password == validateUserDto.password) return user;
    throw new NotFoundException();
  }
}