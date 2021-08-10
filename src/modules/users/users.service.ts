import { Injectable,InternalServerErrorException } from '@nestjs/common';
import { SignupCreadentialsDto }from './dto/signup-user.dto';
import { UserRepository } from '../../repository/users.repository';
import { InjectRepository } from '@nestjs/typeorm';


import { UserEntity } from '../../entities/users.entity';






@Injectable()
export class UsersService {
  constructor( @InjectRepository(UserRepository) private readonly userRepository: UserRepository
  ) {}
  async signIn(
    signupCreadentialsDto: SignupCreadentialsDto,
  ){

    if(signupCreadentialsDto.ssn.length!=9){
      return {"statusCode": 400, "message": ["Invalid SSN."],"error": "Bad Request"}
    }

    if(signupCreadentialsDto.phone.toString().length!=10){
      return {"statusCode": 400, "message": ["Invalid Phone Number."],"error": "Bad Request"}
    }

    try {
      let userid:any = await this.userRepository.find( {select:["userID"], where:{email:signupCreadentialsDto.email}});
      if(userid.length>0){
        return {"statusCode": 400, "message": ["This Email Already Exists."],"error": "Bad Request"}
      }
      let userEntity =  new UserEntity();
      userEntity.ssn = signupCreadentialsDto.ssn;
      userEntity.email = signupCreadentialsDto.email;
      userEntity.firstName = signupCreadentialsDto.firstName;
      userEntity.lastName = signupCreadentialsDto.lastName;
      userEntity.dateOfBirth = signupCreadentialsDto.dateOfBirth;
      userEntity.phone = signupCreadentialsDto.phone.toString();
      userEntity.streetAddress = signupCreadentialsDto.streetAddress;
      userEntity.unit = signupCreadentialsDto.unit;
      userEntity.city = signupCreadentialsDto.city;
      userEntity.state = signupCreadentialsDto.state;
      userEntity.zipCode = signupCreadentialsDto.zipCode;
      userEntity.annualIncome = signupCreadentialsDto.annualIncome;
      userEntity.requestedAmount = signupCreadentialsDto.requestedAmount;
      let user = await this.userRepository.save(userEntity)
      return {"statusCode": 20, "user": user}
    } catch (error) {
      console.log(error);
      return {"statusCode": 500, "message": [new InternalServerErrorException(error)['response']['name']], "error": "Bad Request"};
    }
  }

    
}
