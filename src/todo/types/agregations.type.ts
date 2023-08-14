import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Aggregations' })
export class Aggregations {
  @Field(() => Int, { description: 'Total of todos' })
  total: number;

  @Field(() => Int, { description: 'Total of pending' })
  pending: number;

  @Field(() => Int, { description: 'Total of completed' })
  completed: number;
}
