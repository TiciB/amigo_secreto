# amigo_secreto

Este é um projeto simples em JavaScript que permite criar uma lista de amigos e sortear um "amigo secreto" de forma aleatória. Ele pode ser usado para realizar sorteios de amigos secretos em eventos ou confraternizações.

Funcionalidades
Adicionar Nome: Permite adicionar nomes à lista de amigos.
Sortear Amigo Secreto: Após adicionar os nomes, é possível sortear aleatoriamente um "amigo secreto".
Validações:
Não é possível adicionar nomes em branco.
Nomes duplicados não são permitidos.
O sorteio não pode ser realizado sem nomes na lista.
Como Usar
Adicionar Amigos:

Digite o nome de um amigo no campo de entrada e clique no botão Adicionar.
O nome será adicionado à lista de amigos na tela.
Sortear o Amigo Secreto:

Clique no botão Sortear para revelar o nome do amigo secreto sorteado.
Estrutura do Código
O código JavaScript faz uso dos seguintes elementos:

Entrada de texto (<input>): Para o usuário digitar o nome do amigo.
Botões (<button>): Para adicionar o nome à lista e sortear o amigo secreto.
Lista de Amigos (<ul>): Exibe os amigos adicionados.
Resultado (<div>): Exibe o nome do amigo secreto sorteado.
Funcionalidade do Código
adicionarAmigo: Valida se o nome inserido é válido e não repetido antes de adicioná-lo à lista.
sortearAmigo: Sorteia aleatoriamente um nome da lista e o exibe como "amigo secreto".
atualizarListaAmigos: Atualiza a lista de amigos na interface cada vez que um novo amigo é adicionado.
Tecnologias Utilizadas
HTML: Para estrutura da página. (Fornecido pela Alura)
CSS: Para estilização. (Fornecido pela Alura)
JavaScript: Para interação e funcionalidade da página.
Como Executar
Baixe ou clone o repositório.
Abra o arquivo HTML em um navegador para usar a aplicação.
