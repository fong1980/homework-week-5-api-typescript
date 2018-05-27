import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity';

const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
]



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
        var things = ['red', 'blue', 'green','yellow','magenta'];
        game.color=things[Math.floor(Math.random()*things.length)];
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
    return Game.merge(game, update).save()
    
}

   // http put :4000/games/7 name=newname color=nocolor 




//http post :4000/games name=lol color=blue



    
  


//     @Get('/game/:id')
// getPage(
//   @Param('id') id: number
// ) {
//   return Game.findOne(id)
// }

    
}

