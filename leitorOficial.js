// lista de leitores em um array
let leitores = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
];

// função para sortear pares de leitores
function sortearPares(leitores) {
    // Embaralha a lista de leitores
    leitores = embaralhar(leitores.slice()); // 'slice' cria uma copia da lista leitores e 'embaralhar' embaralha a copia sem alterar a lista original.
    
// Sortear pares
    for (let i = 0; i < leitores.length; i += 2) { // nesse loop for, 'i' é inicializado com zero, e o loop continua enquanto 'i' for menor que o comprimento da lista leitores. A cada iteração do loop, 'i' é incrementado em 2 (i += 2), o que permite percorrer a lista em pares. Essa é a estrutura de um loop for, e é usada aqui para garantir que cada par de leitores seja selecionado de forma unica, sem repetições.
        
        // Verificar se estamos no ultimo par e se a lista tem número ímpar de leitores.
        if (i === leitores.length - 1 && leitores.length % 2 !== 0) {
            console.log(leitores[i] + " lerá sozinho."); // 1. verifica se estamos na última iteração do loop, ou seja, se 'i' é igual ao numero do ultimo elemento da lista leitores. 2. Verifica se o comprimento da lista de leitores é impar ou par. 3. Se as duas condições forem verdadeiras, o leitor final deve ser sozinho.
        } else {
            console.log(leitores[i] + " e " + leitores[i + 1] + " Farão a leitura."); // caso contrari, else imprime na tela a dupla de leitores
        }
    }
}

// a função embaralhar copia e retorna o array ja embaralhado que é usado na função 'sortearPares' 
function embaralhar(pessoa) { // essa função usa o algoritmo 'Fisher-Yates' para fazer o embaralhamento de forma correta.
    for (let i = 0; i < pessoa.length; i++) { // enquanto o valor da variável 'i' for menor que o comprimento de 'pessoa', o loop continuara executando.
        const h = Math.floor(Math.random() * pessoa.length); // 'Math.random' gera um numero aleatorio entre 0 e 1 (exclusivo). Esse valor é multiplicado pelo comprimento de 'pessoa' e 'Math.floor' arredonda para baixo para o inteiro mais próximo, resultando em 'h' ser um índice valido dentro do array.
        [pessoa[i], pessoa[h]] = [pessoa[h], pessoa[i]]; // ao fazer a atribuição [pessoa[i], pessoa[h]] = [pessoa[h], pessoa[i]], os elementos nos índices 'i' e 'h' do pessoa são trocados de posição. Isso tecnica é usada para embaralhar os elementos de forma eficiente.
    }
    return pessoa;
}

// Teste
sortearPares(leitores);
