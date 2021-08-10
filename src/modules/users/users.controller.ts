import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { SignupCreadentialsDto }from './dto/signup-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/signup')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "SignUp" })
  async signup(
    @Body() signupCreadentialsDto: SignupCreadentialsDto,
  ){
    return this.usersService.signIn(signupCreadentialsDto);
  }
}
