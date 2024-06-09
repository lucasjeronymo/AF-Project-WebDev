import { Request, Response } from 'express';
import Hero from '../models/Hero';


class HeroController {

  async listAll(request: Request, response: Response) {
    const heroes = await Hero.find();
    response.json(heroes);
  }

  async create(request: Request, response: Response) {
    // return response.status(500).json({
    //   message: "Não foi dessa vez"
    // });
    // 646bf40602ce3f9161498e71

    const { name } = request.body;
    const hero = await Hero.create({ name: name });
    response.status(201).json(hero);
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;

    if (id.length != 24) {
      return response.status(422).json({
        message: `Usuário não encontrado`
      })
    }

    const hero = await Hero.findById(id);
    if (hero)
      return response.status(201).json(hero);
    return response.status(404).json({
      message: `Herói ${id} não encontrado`
    })
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    Hero.findByIdAndDelete(id).then((hero) => {
      if (hero)
        return response.sendStatus(204);
      return response.sendStatus(404);
    })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;
    Hero.findByIdAndUpdate(id, {name: name}, {new: true})
      .then((hero) => {
        if (hero) 
          return response.status(201).json(hero);
        return response.status(404).json({ message: `Usuário ${id} não encontrado!` });
      });
  }

}

export default new HeroController();
