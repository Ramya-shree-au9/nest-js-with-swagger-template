import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm';


export enum Flags {
  N = 'N',
  Y = 'Y'
}



@Entity({ name: 'tbluser' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column()
  ssn: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  phone: string;

  @Column()
  streetAddress: string;

  @Column()
  unit: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column({ type: 'float' })
  annualIncome: number;

  @Column({ type: 'float' })
  requestedAmount: number;

  @Column({
      type:'enum',
      enum: Flags,
      default: Flags.N,
  })
  delete_flag: Flags;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
