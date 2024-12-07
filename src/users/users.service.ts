import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import dataSource from '../../db/data-source';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor( 
    @InjectRepository(User)
    private userRepository: Repository<User>, 
  
  ) {}

    
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.insert(createUserDto);
  }

  async findAll() {
    const users = this.userRepository.find();
    return users;
  }

  async findOneByUsername( username: string){
    return await this.userRepository.findOneBy({username});
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({ id }, updateUserDto);
  }

  async delete(id: string) {
    return await this.userRepository.delete({ id });
  }
}
