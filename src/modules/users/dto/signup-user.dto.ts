import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class SignupCreadentialsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User ssn.',
    example: '123456789',
  })
  ssn: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'User email.',
    example: 'example@test.com',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User firstName.',
    example: 'Satheesh',
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User lastName.',
    example: 'kumar',
  })
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User dateOfBirth.',
    example: '01/10/1993',
  })
  dateOfBirth: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'User phone.',
    example: 9876543210,
  })
  phone: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User streetAddress.',
    example: 'Mettu Street',
  })
  streetAddress: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User unit.',
    example: '25',
  })
  unit: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User city.',
    example: 'chennai',
  })
  city: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User state.',
    example: 'Tamil Nadu',
  })
  state: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User zipCode.',
    example: '600028',
  })
  zipCode: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'User annualIncome.',
    example: 6000.00,
  })
  annualIncome: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'User requestedAmount.',
    example: 999.99,
  })
  requestedAmount: number;
}





  