import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest
} from 'fastify';

import {CreateNutritionController} from './Controllers/CreateNutritionController';

/*
request: é o objeto que contém informações sobre a solicitação HTTP recebida, como parâmetros, cabeçalhos e corpo da requisição.
reply: é o objeto usado para enviar uma resposta de volta ao cliente, permitindo definir o status da resposta, cabeçalhos e corpo da resposta.
options: é um objeto que contém opções de configuração para o plugin, como tempo limite, cache, etc.
handle: é um método que define a lógica a ser executada quando a rota é acessada, permitindo processar a solicitação e enviar uma resposta.
*/

// Função que define as rotas da aplicação
export async function routes(fastify: FastifyInstance, opitions: FastifyPluginOptions) {
    // Rota GET para o endpoint '/test'
    fastify.get('/test', (request: FastifyRequest, reply: FastifyReply) => {

        let responseText= "```json\n{\n  \"nome\": \"Carlos\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 24,\n  \"altura\": 1.74,\n  \"peso\": 80,\n  \"objetivo\": \"Emagrecer\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"2 fatias de pao integral\",\n        \"2 ovos mexidos\",\n        \"1/2 abacate\",\n        \"1 xicara de cafe sem acucar\"\n      ]\n    },\n    {\n      \"horario\": \"11:00\",\n      \"nome\": \"Lanche da Manha\",\n      \"alimentos\": [\n        \"1 iogurte natural desnatado\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de peito de frango grelhado\",\n        \"1 xicara de arroz integral\",\n        \"1 prato de salada verde variada com legumes\",\n        \"1 colher de sopa de azeite extra virgem\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 fruta (maca, pera ou laranja)\",\n        \"3 biscoitos de agua e sal integral\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado ou cozido\",\n        \"1 batata doce media cozida\",\n        \"1 prato de legumes cozidos no vapor (brocolis, couve-flor, cenoura)\"\n      ]\n    },\n    {\n      \"horario\": \"22:00\",\n      \"nome\": \"Ceia (Opcional)\",\n      \"alimentos\": [\n        \"1 copo de leite desnatado\",\n        \"1 scoop de whey protein\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein (pos-treino)\",\n    \"Creatina (melhora performance e recuperacao)\",\n    \"Cafeina (pre-treino, com cautela)\",\n    \"Multivitaminico (para complementar a dieta)\"\n  ]\n}\n```"

        try{
            //extrair o json
            let jsonResponse = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonResponse);

            return reply.send ({
                data: jsonObject
            })
        }catch (error){
            console.log(error)
        }

        reply.send({ok: true, message: 'Test route is working!'});

    })

    fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply);
    })
}
