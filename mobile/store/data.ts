import {create} from 'zustand'

//define o tipo de dados do usuário
export type User = {
    name: string;
    weight: string;
    height: string;
    age: string;
    level: string;
    objective: string;
    gender: string;
}

// Define o tipo de dados do estado da loja
type dataStage = {
    user: User;
    setPageOne: (data: Omit<User, 'gender' | 'objective'| 'level'>) => void;
    setPageTwo: (data: Pick<User, 'gender' | 'objective'| 'level'>) => void;
}

//função para criar a loja Zustand
export const userDataStore = create<dataStage>((set)=> ({
    user:{
        name: '',
        weight: '',
        height: '',
        age: '',
        level: '',
        objective: '',
        gender: '',
    },
    //função para atualizar os dados do usuário na primeira página
    setPageOne: (data)=> set((state) => ({user: {...state.user, ...data} })),
    setPageTwo: (data)=> set((state) => ({user: {...state.user, ...data} }))

}))




/* 
explicação do   setPageOne: (data: Omit<User, 'gener' | 'objectve'| 'level'>) => void;
-- Omit é uma utilidade do TypeScript que cria um novo tipo a partir de User, omitindo as propriedades 'gener', 'objectve' e 'level'


explicação do setpageone
-- set é uma função do Zustand que atualiza o estado da loja
-- data é um objeto que contém os dados do usuário
-- State é o estado atual da loja
-- {...state.user, ...data} é uma forma de atualizar o estado do usuário com os novos dados
--...state.user mantém os dados existentes do usuário
*/