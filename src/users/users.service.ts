import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
    id: 1,
    username: 'sonic',
    password: 'shadow',
  }]
  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
