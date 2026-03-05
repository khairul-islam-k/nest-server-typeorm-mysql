import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye')
  sayBye(): string {
    return this.appService.sayBye();
  }

  // login
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  // check
  @UseGuards(JwtAuthGuard)
  @Get('check/auth')
  checkFunction() {
    return this.authService.checkFunction();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req: any) {
  //   return req.user;
  // }

  // register
  // @Post('auth/register')
  // signUp(@Body() body: any) {
  //   return this.authService.signUp(body);
  // }
}
