import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()


export class AuthService{
  constructor( private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) return null;
    if (user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user:any) {
    const payload = {username: user.username, user: user.Id}
    return { access_token : this.jwtService.sign(payload),};
  }
}