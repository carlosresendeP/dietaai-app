 interface RefeicoesProps{
    horario: string;
    nome: string;
    alimentos: string[];
}


export interface Data{
    nome: string;
    idade: string;
    peso: string;
    altura: string;
    sexo: string;
    objetivo: string;
    suplementos: string[];
    refeicoes: RefeicoesProps[];
}