// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
//import Controller from "./controller" //here add controller

import setupDb from './db'
import gamesController from './games/controller';

const app = createKoaServer({
   controllers: [
    gamesController
   ] //import controllers
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))


