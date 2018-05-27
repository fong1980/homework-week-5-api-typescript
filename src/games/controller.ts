import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity';

const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
]
const colors = ['red', 'blue', 'green','yellow','magenta'];
const checkcolor=(a:string):boolean => (colors.indexOf(a) > -1)


const bb1 = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
]

// const bb2 = [
//     ['o', 'o', 'o'],
//     ['o', 'o', 'o'],
//     ['o', '1', 'o']
// ]

// const bb3 = [
//     ['o', '1', 'o'],
//     ['o', 'o', 'o'],
//     ['o', '1', 'o']
//]

const moves = (board1:string[][], board2:string[][]) =>
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length

    const checkmoves=(b1:string[][],b2:string[][]):boolean=>{
        if (moves(b1,b2) < 2){            
            return true}
        else {
            return false
        }
    }

@JsonController()
export default class gamesController {

    @Get('/games')
    async allGames() {
      const games = await Game.find()
      return { games }
    }
 // http :4000/games


    @Post('/games')
    @HttpCode(201)
    creategame(
    @Body() game: Game
    ) {        
        game.color=colors[Math.floor(Math.random()*colors.length)];
        game.board=defaultBoard  
    return game.save()
    }
//http post :4000/games name=lol color=blue 

    @Put('/games/:id')
    async updatePage(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Cannot find page')
    if (!checkcolor(update.color)) throw new NotFoundError('wrong color')
    //this below should work, but cound't find a way to put a [][] value into the board by using the httpie. 
    // if (!checkmoves(update.board,game.board))throw new NotFoundError('HTTP 4000 Bad Request-to much move')
    return Game.merge(game, update).save()
    }

//test color
//http put :4000/games/7 name=newname color=blue 

 // http put :4000/games/7 name=newname color=nocolor 
// http put :4000/games/2 name=newname color=nocolor board='[[\'o\', 'o', 'o'],['o', 'o', 'o'],['o', '1', 'o']]'
//http put :4000/games/2 name=newname color=blue board='{['o', 'o', 'o'],['o', 'o', 'o'],['o', '1', 'o']}'
  
//[['o', 'o', 'o'],['o', 'o', 'o'],['o', '1', 'o']]
  
}


// http post :4000/games/2 name=newname color=nocolor board=

