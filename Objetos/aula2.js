const Gabriel = {
    nome: 'Gabriel S Barbosa',
    idade: 24,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

Gabriel.descrever();

// contato dinamico com o objeto //

Gabriel['nome'] = 'teste';

// contato direto com o objeto //

Gabriel.nome = 'teste';




