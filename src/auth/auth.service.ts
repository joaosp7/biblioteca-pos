import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {

  constructor(userService: UsersService){}

  async validateUser(username:string, password:string){
  }
}