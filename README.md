
# Desenvolvimento Web - JamBand


Este projeto foi idealizado para o Trabalho Individual da disciplina de Desenvolvimento Web - React, Serratec - 2023.2 - Petrópolis, turma 12.

Neste trabalho, um projeto web deve ser desenvolvido apresentar, ao menos:

- Utilizar pelo menos 2 Rotas;
- Ter um menu de navegação;
- Ter pelo menos 1 input vinculado a um state;
- Exibir um Array (pode mockar o array no código ou criar durante a execução da aplicação).

Como tarefas-extra: 
- Fazer um barra de pesquisa para o array. Ao digitar, o array vai sendo filtrado e exibido, ao apagar, as informações vão aparecendo;
- DICA: Utilizar 2 arrays e o método startswith.
## Descrição do projeto

A plataforma fictícia JamBand foi idealizada para ajudar a músicos a encontrarem outros músicos para formarem uma banda ou fazerem parcerias pontuais.

### Apresentação do JamBand

Bem-vindos à JamBand, a plataforma que dá um "match" nas suas paixões musicais! Se você é um músico em busca de novos colegas de banda ou parceiros musicais para colaborações especiais, você veio ao lugar certo.

A JamBand foi concebida com o objetivo de unir músicos e criar oportunidades para a música prosperar. Aqui, você pode se cadastrar, compartilhar seu talento e aguardar que alguém com ideias semelhantes o encontre e entre em contato para dar início a uma jornada musical emocionante.

Se você já tem uma banda e procura preencher aquela vaga que falta para completar o som perfeito, nossa plataforma também é o local ideal para você. Encontre guitarristas, bateristas, vocalistas e muito mais para tornar seu projeto musical uma realidade.

Além disso, a JamBand oferece uma seção especial para mostrar o resultado de nossas conexões musicais. Nossa galeria de vídeos apresenta bandas que foram formadas graças à nossa plataforma, permitindo que qualquer pessoa desfrute da música que nasceu aqui.

Então, se você está pronto para fazer novas amizades musicais, colaborar com talentosos artistas e criar algo especial, junte-se à JamBand e comece a sua jornada musical hoje. Estamos ansiosos para ver o que você vai criar!

<p align="center">
  <img src="https://uploaddeimagens.com.br/images/004/656/645/original/Sem_t%C3%ADtulo_4.png?1699232819" width="300" height="300" />
</p>

## Funcionalidades

Nesta página, o usuário tem uma barra de navegação superior com os caminhos "Home", "Cadastrar", "Encontrar", "Postar", "Galeria" e "Contato".

Na "Home" o usuário encontra uma breve descrição da plataforma e seus objetivos. Ao final da apresentação o usuário encontra dois botões "Quero encontrar minha banda" e "Quero ser encontrado por uma banda". Muito embora os botões ainda não tenham sido implementados, eles levarão o usuário, respectivamente, às abas "Cadastrar" e "Encontrar".

Em "Cadastrar", o usuário preenche um pequeno formulário de três campos: Nome, Cidade e escolhe o instumento que toca em um menu drop-down. Ao clicar no botão "Cadastrar" (localizado abaixo do formulário), o usuário recebe no console uma mensagem de sucesso no cadastro e essas informações são incluídas numa (Mock)API sob forma de JSON.

Na aba "Encontrar" encontramos uma área de input para uma pesquisa filtrada, onde a cada alteração no input os resultados são atualizados. Nesta área o usuário pode buscar o próximo membro de sua banda pelo nome, pela cidade que mora ou pelo instrumento que toca. Por definição, a lista é automaticamente consumida da API e exibida na tela abaixo da área de busca.

Em "Postar" há uma área de input onde deve ser digitado o nome da banda que foi formada com a ajuda da plataforma e uma imagem simulando uma área "drag-n-drop" para onde o arquivo em vídeo poderia ser arrastado e, enfim, postado. Já a área "Galeria", que seria destinada para exibição dos eventuais vídeos postados pelos usuários, exibe uma imagem de "Site em construção".

A área "Contato", por fim, exibe informações fictícias de telefone e e-mail para que o usuário possa entrar em contato com a equipe da plataforma.
## Ferramentas Utilizadas

- [Canva](https://www.canva.com/);
- [GitHub](https://www.github.com/);
- [Trello](https://trello.com/);
- [VS Code](https://code.visualstudio.com/);
- [ViteJS](https://vitejs.dev/);
- HTML, CSS e JS.
## Autor

- [GitHub - @Emanuel Cardoso](https://www.github.com/ecard58).


