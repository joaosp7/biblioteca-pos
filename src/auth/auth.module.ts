import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule , JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: {expiresIn: '60s'},
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
