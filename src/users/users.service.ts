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

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  delete(id: string) {
    return this.userRepository.delete({ id });
  }
}
