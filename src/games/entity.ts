// src/games/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
//import { IsIn, validate } from 'class-validator';




@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

 //@IsIn('text',{nullable:false}) 
 @Column('text', {nullable:false})
  color: string

  @Column('json', {nullable:false})
  board: string[][]
}










// \*\* a function that returns the number of changes between boards

// ```
// const moves = (board1, board2) =>
//   board1
//     .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
//     .reduce((a, b) => a.concat(b))
//     .length
// ```



