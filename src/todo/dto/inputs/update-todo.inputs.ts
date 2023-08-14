import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  constructor(parameters) {}

  @Field(() => Int, { description: 'Id of the todo' })
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, {
    description: 'Description of the todo',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(30)
  description?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
