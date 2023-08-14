import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
  constructor(parameters) {}

  @Field(() => String, { description: 'Description of the todo' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  description: string;
}
