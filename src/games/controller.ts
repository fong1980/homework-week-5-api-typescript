import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity';





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
    return game.save()
    }

    // @Put('/games/:id')
    // async updatePage(
    // @Param('id') id: number,
    // @Body() update: Partial<Game>
    // ) {
    // const page = await Game.findOne(id)
    // if (!page) throw new NotFoundError('Cannot find page')

    // return Page.merge(page, update).save()
    // }



    //http post :4000/games name=lol color=blue board=test
//http post :4000/games name=lol color=blue



    
  


//     @Get('/game/:id')
// getPage(
//   @Param('id') id: number
// ) {
//   return Game.findOne(id)
// }

    
}