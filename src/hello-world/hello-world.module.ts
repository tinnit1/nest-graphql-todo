import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';
import { Args, Float, Int, Query } from '@nestjs/graphql';

@Module({
  providers: [HelloWorldResolver],
})
export class HelloWorldModule {
  @Query(() => String, { name: 'hello', description: 'Hello World function' })
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, { name: 'random', description: 'Random number function' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
  @Query(() => Int, {
    name: 'randomInt',
    description: 'From zero to a number function (default 6)',
  })
  gerRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to) + 1;
  }
}
