const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de servidor",
      "Uma linguagem de marcação",
      "Uma linguagem de programação de alto nível",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Verificar se uma variável foi definida",
      "Retornar o tipo de dados de uma variável",
      "Comparar dois valores",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um modelo de objetos do desenvolvedor",
      "Uma linguagem de script",
      "Um padrão de design de software",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "Não há diferença, ambos são iguais",
      "let é usado para variáveis mutáveis, const para variáveis imutáveis",
      "const é usado para variáveis mutáveis, let para variáveis imutáveis",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um closure em JavaScript?",
    respostas: [
      "Uma função que não retorna valor",
      "Um tipo de loop",
      "Uma função que captura variáveis de seu ambiente circundante",
    ],
    correta: 2
  },
  {
    pergunta: "Como você converte uma string para um número em JavaScript?",
    respostas: [
      "parseInt()",
      "stringToNumber()",
      "toNumber()",
    ],
    correta: 0
  },
  {
    pergunta: "O que é AJAX em JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um método de comunicação assíncrona com o servidor",
      "Um framework de desenvolvimento web",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre '=='' e '===' em JavaScript?",
    respostas: [
      "Nenhuma diferença, ambos são iguais",
      "O primeiro compara apenas valores, o segundo compara valores e tipos",
      "O primeiro compara valores e tipos, o segundo apenas valores",
    ],
    correta: 1
  },
  {
    pergunta: "O que é JSON em JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um formato de intercâmbio de dados",
      "Um método de declaração de variáveis",
    ],
    correta: 1
  },
  {
    pergunta: "Como você adiciona um evento a um elemento HTML usando JavaScript?",
    respostas: [
      "addEventListener()",
      "attachEvent()",
      "eventListener()",
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//Loop ou Laço de Repetição 
// 
for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

//Começa fazendo um Loop para pegar o elemento 'dt' dentro do elemento 'dl'
//para fazer clone e para fazer aparecer as outras perguntas ele usa o appendchild
//para criar o resto das perguntas "dt" disponiveis no codigo html
// e na linha abaixo ele remove o elemento "dt" dentro do elemento "dl" (Resposta A)

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = parseInt(event.target.value) === item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }




    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //Coloca a Pergunta na Tela
  quiz.appendChild(quizItem)
}