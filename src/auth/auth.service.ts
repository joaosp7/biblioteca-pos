import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,

  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (username === user.username && user.password === password){
      const { password, ...result } = user; //another way of defining some variable, result here is everyhing of object user except password
      return result;
    }
    return null;
  }

  async login(user:any){
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
