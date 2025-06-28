//controllernutrition
import {FastifyRequest, FastifyReply} from 'fastify'

import {CreateNutritionService} from '../Services/CreateNutritionService.ts';

export enum Gender{
    Male = 'Masculino',
    Female = 'Feminino',
    Other = 'Outro'
}

export interface DataProps{
    name: string;
    age: number;
    weight: string;
    height: string;
    gender: string;
    objective: string;
    level: string;
}


class CreateNutritionController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, age, gender, height, level, objective, weight } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.excute({ name, age, gender, height, level, objective, weight });

        reply.send(nutrition)
    }
}

export { CreateNutritionController }