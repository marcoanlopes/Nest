import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users: User[] = [];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    users.push(newUser);
    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const getByIdUser = new User();
    getByIdUser.id = id;
    
    return getByIdUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
