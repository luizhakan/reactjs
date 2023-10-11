export interface ProfissionalCadastro {
    nome: string;
    email: string;
    telefone: string;
    registro: string;
    especialidade: string;
    endereco: {
        logradouro: string;
        bairro: string;
        cidade: string;
        uf: string;
        complemento: string;
        cep: string;
        numero: string;
    }
}