export const magics = [
  {
    id: 1,
    name: 'Abençoar Alimentos',
    type: 'Divina',
    school: 'Transmutação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'alimento para 1 criatura',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia',
    improvements: [
      {
        cost: 'Truque',
        description:
          'o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido',
        require: '',
      },
      {
        cost: '1',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
      {
        cost: '1',
        description:
          'muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 2,
    name: 'Acalmar Animal',
    type: 'Divina',
    school: 'Encantamento',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 animal',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: 'Vontade anula',
      },
    ],
    description:
      'O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia',
    improvements: [
      {
        cost: '1',
        description: 'muda o alcance para médio',
        require: '',
      },
      {
        cost: '1',
        description:
          'muda o alvo para 1 monstro ou espírito com Inteligência 1 ou 2',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
      {
        cost: '5',
        description: 'muda o alvo para 1 monstro ou espírito',
        require: 'Requer 3º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 3,
    name: 'Adaga Mental',
    type: 'Arcana',
    school: 'Encantamento',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Vontade parcial',
      },
    ],
    description:
      'Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena',
    improvements: [
      {
        cost: '1',
        description:
          'você lança a magia sem gesticular ou pronunciar palavras (o que permite lançar esta magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda a duração para 1 dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta o dano em +1d6',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 4,
    name: 'Alarme',
    type: 'Arcana',
    school: 'Abjuração',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'esfera com 9m de raio',
      },
      {
        name: 'Duração',
        value: '1 dia',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo',
    improvements: [
      {
        cost: '2',
        description:
          'muda o alcance para pessoal. A área é emanada a partir de você',
        require: '',
      },
      {
        cost: '5',
        description:
          'além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo)',
        require: '',
      },
      {
        cost: '9',
        description:
          'muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas gapara rastrear o intruso.',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 5,
    name: 'Aliado Animal',
    type: 'Divina',
    school: 'Encantamento',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 animal prestativo',
      },
      {
        name: 'Duração',
        value: '1 dia',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você cria um vínculo mental com um animal prestativo em relação a você. O Aliado Animal obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um parceiro veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor',
    improvements: [
      {
        cost: '1',
        description:
          'muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca no melhor de suas capacidades até um local designado por você — em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando',
        require: '',
      },
      {
        cost: '7',
        description: 'muda o parceiro para mestre',
        require: 'Requer 3º círculo',
      },
      {
        cost: '12',
        description:
          'muda o alvo para 2 animais prestativos. Cada animal funciona como um parceiro de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de parceiros de acordo com o seu nível de personagem)',
        require: 'Requer 4º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 6,
    name: 'Alterar Destino',
    type: 'Arcana',
    school: 'Adivinhação',
    circle: 5,
    header: [
      {
        name: 'Execução',
        value: 'reação',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você automaticamente passa em um teste de resistência ou evita um ataque',
    improvements: [],
    extra: [],
  },
  {
    id: 7,
    name: 'Alterar Memória',
    type: 'Arcana',
    school: 'Encantamento',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'toque',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Vontade anula',
      },
    ],
    description:
      'Você invade a mente do alvo e altera ou apaga suas memórias da última hora',
    improvements: [
      {
        cost: '2',
        description:
          'muda o alcance para pessoal e o alvo para área cone de 4,5m',
        require: '',
      },
      {
        cost: '5',
        description:
          'você pode alterar ou apagar as memórias das últimas 24 horas',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 8,
    name: 'Alterar Tamanho',
    type: 'Arcana',
    school: 'Transmutação',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 objeto',
      },
      {
        name: 'Duração',
        value: '1 dia',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la.',
    improvements: [
      {
        cost: '1',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Força +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito',
        require: '',
      },
      {
        cost: '3',
        description:
          'muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo diminuem uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Destreza +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito',
        require: 'Requer 3º círculo',
      },
      {
        cost: '7',
        description:
          'muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m',
        require: 'Requer 4º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 9,
    name: 'Amarras Etéreas',
    type: 'Arcana',
    school: 'Convocação',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'médio',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: 'Reflexos anula',
      },
    ],
    description: `Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a CD. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todos os laços forem destruídos, a magia é dissipada. Por serem feitos de energia, os laços afetam criaturas incorpóreas`,
    improvements: [
      {
        cost: '2',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta o número de laços em um alvo a sua escolha em +1',
        require: '',
      },
      {
        cost: '3',
        description:
          'em vez do normal, cada laço é destruído automaticamente com um único ataque bem-sucedido; porém, cada laço destruído libera um choque de energia que causa 1d6+1 pontos de dano de essência na criatura amarrada',
        require: 'Requer 3º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 10,
    name: 'Amedrontar',
    type: 'Arcana',
    school: 'Necromancia',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 animal ou humanoide',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: 'Vontade parcial',
      },
    ],
    description:
      'O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica apavorado por 1 rodada, epois abalado. Se passar, fica abalado por 1d4 rodadas',
    improvements: [
      {
        cost: '2',
        description:
          'alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1',
        require: '',
      },
      {
        cost: '2',
        description: 'muda o alvo para 1 criatura',
        require: '',
      },
      {
        cost: '5',
        description:
          'afeta todos os alvos válidos a sua escolha dentro do alcance',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 11,
    name: 'Âncora Dimensional',
    type: 'Arcana',
    school: 'Abjuração',
    circle: 3,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura ou objeto',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e a habilidade incorpóreo',
    improvements: [
      {
        cost: '2',
        description:
          'muda o alcance para médio, a área para esfera com 3m de raio e o alvo para criaturas escolhidas',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flu-tuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e redução de dano 20 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino)',
        require: '',
      },
      {
        cost: '4',
        description:
          'como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e redução de dano 40',
        require: '',
      },
      {
        cost: '4',
        description:
          'muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode ser feito para entrar ou sair da área',
        require: '',
      },
      {
        cost: '9',
        description:
          'muda o alcance para médio, a área para esfera com 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 12,
    name: 'Animar Objetos',
    type: 'Arcana',
    school: 'Transmutação',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'médio',
      },
      {
        name: 'Alvo/Área',
        value:
          'até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme',
      },
      {
        name: 'Duração',
        value: '',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você concede vida a objetos inanimados. Cada objeto se torna um parceiro sob seu controle. O tipo dele é escolhido da lista de tamanho e ele não conta em seu limite de parceiros. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados são construtos com valores de Força, Destreza e PV de acordo com seu tamanho. Todos os outros atributos são nulos, eles não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Diferente de parceiros comuns, um objeto pode ser alvo de um ataque direto. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura. Estatísticas de objetos animados',
    improvements: [
      {
        cost: '5',
        description:
          'muda a duração para perma nente e adiciona componente material(prataria no valor de T$ 1.000). Você  pode ter um máximo de objetos animados igual à metade do seu nível',
        require: '',
      },
    ],
    extra: [
      {
        name: 'Minúsculo',
        description: 'FOR -3 DES 4 PV 5 Assassino ou Combatente Iniciante',
      },
      {
        name: 'Pequeno',
        description: 'For –2, Des 2, 10 PV; Combatente ou Guardião Iniciante',
      },
      {
        name: 'Médio',
        description: 'For 0, Des 1, 20 PV; Combatente ou Guardião Veterano',
      },
      {
        name: 'Grande',
        description:
          'For 2, Des 0, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano',
      },
      {
        name: 'Enorme',
        description:
          ' For 4, Des –2, 60 PV; Fortão, Guardião ou Montaria (cavalo) Mestre',
      },
    ],
  },
  {
    id: 13,
    name: 'Anular a Luz',
    type: 'Divina',
    school: 'Necromancia',
    circle: 3,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'esfera com 6m de raio',
      },
      {
        name: 'Duração',
        value: 'ver texto',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia cria uma onda de escuridão que causa diversos efeitos. Magias de até 3º círculo na área são dissipadas se você passar num teste de Religião contra a CD de cada uma. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam enjoados por 1d4 rodadas (apenas uma vez por cena). Anular a Luz anula Dispersar as Trevas (este efeito tem duração instantânea)',
    improvements: [
      {
        cost: '2',
        description: 'aumenta o bônus na Defesa em +1',
        require: '',
      },
      {
        cost: '4',
        description: 'muda as magias dissipadas para até 4º círculo',
        require: 'Requer 4º círculo',
      },
      {
        cost: '9',
        description: 'muda as magias dissipadas para até 5º círculo',
        require: 'Requer 5º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 14,
    name: 'Aparência Perfeita',
    type: 'Arcana',
    school: 'Ilusão',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor. Enquanto a magia estiver ativa, seu Carisma torna-se 5 (ou recebe um bônus de +2,caso seja 5 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que “algo está errado” ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.',
    improvements: [
      {
        cost: '1',
        description: 'muda o alcance para toque e o alvo para 1 humanoide',
        require: '',
      },
    ],
  },
  {
    id: 15,
    name: 'Aprisionamento',
    type: 'Arcana',
    school: 'Abjuração',
    circle: 5,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'permanente',
      },
      {
        name: 'Resistência',
        value: 'Vontade anula',
      },
    ],
    description: `
          Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000
          Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não
          `,
    improvements: [
      {
        cost: '',
        description: '',
        require: '',
      },
    ],
    extra: [
      {
        name: 'Acorrentamento',
        description:
          ' o alvo é preso por correntes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio',
        require: 'Componente Material: uma fina corrente de mitral',
      },
      {
        name: 'Contenção Mínima',
        description:
          'o alvo diminui para 2 cm de altura e é preso dentro de uma pedra preciosa ou objeto semelhante. Luz passa através da pedra, permitindo que o alvo veja o lado de fora e seja visto, mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro',
        require:
          'Componente Material: uma pedra preciosa, como um diamante ou rubi',
      },
      {
        name: 'Prisão Dimensional',
        description: `o alvo é transportado para um semiplano protegido contra teletransporte e viagens planares. Pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada e pequena a sua escolha`,
        require:
          'Componente Material: uma representação em miniatura da prisão, feita de jade',
      },
      {
        name: 'Sepultamento',
        description: `o alvo é sepultado nas profundezas da terra, em uma esfera mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares`,
        require: 'Componente Material: um pequeno orbe de adamante',
      },
      {
        name: 'Sono Eterno',
        description: 'o alvo adormece e não pode ser acordado',
        require:
          'Componente Material: fruta preparada com ervas soníferas raras',
      },
    ],
  },
  {
    id: 16,
    name: 'Área Escorregadia',
    type: 'Arcana',
    school: 'Convocação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'quadrado de 3m ou 1 objeto',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: 'Reflexos (veja texto)',
      },
    ],
    description:
      'Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10). Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo',
    improvements: [
      {
        cost: '1',
        description: 'aumenta a área em +1 quadrado de 1,5m',
        require: '',
      },
      {
        cost: '2',
        description: 'muda a CD dos testes de Acrobacia para 15',
        require: '',
      },
      {
        cost: '5',
        description: 'muda a CD dos testes de Acrobacia para 20',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 17,
    name: 'Arma Espiritual',
    type: 'Divina',
    school: 'Convocação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você invoca a arma preferida de sua divindade (se tiver uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.',
    improvements: [
      {
        cost: '1',
        description:
          'além do normal, a arma o protege. Você recebe +1 na Defesa',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta o bônus na Defesa em +1',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno',
        require: 'Requer 2º círculo',
      },
      {
        cost: '2',
        description: 'muda o tipo do dano para essência',
        require: 'Requer 2º círculo',
      },
      {
        cost: '2',
        description:
          'aumenta o dano causado pela arma em +1d6, limitado pelo círculo máximo de magia que você pode lançar',
        require: '',
      },
      {
        cost: '5',
        description:
          'invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada',
        require: 'Requer 3º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 18,
    name: 'Arma Mágica',
    type: 'Universal',
    school: 'Transmutação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'toque',
      },
      {
        name: 'Alvo/Área',
        value: '1 arma empunhada',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'A arma fornece +1 nos testes de ataque e rolagens de dano e é considerada mágica (não cumulativo com bônus de encantos). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam este atributo)',
    improvements: [
      {
        cost: '2',
        description:
          'aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)',
        require: '',
      },
      {
        cost: '2',
        description:
          'a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 19,
    name: 'Armadura Arcana',
    type: 'Arcana',
    school: 'Abjuração',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia cria uma película protetora invisível, mas tangível, fornecendo +4 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras',
    improvements: [
      {
        cost: '1',
        description:
          'muda a execução para reação. Em vez do normal, você cria um escudo mágico que fornece +6 na Defesa contra o próximo ataque que sofrer (cumulativo com o bônus fornecido pelo efeito básico desta magia e armaduras)',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta o bônus na Defesa em +1',
        require: '',
      },
      {
        cost: '2',
        description: 'muda a duração para 1 dia',
        require: 'Requer 2º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 20,
    name: 'Armamento da Natureza',
    type: 'Divina',
    school: 'Transmutação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'toque',
      },
      {
        name: 'Alvo/Área',
        value: '1 arma (veja texto)',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).',
    improvements: [
      {
        cost: '1',
        description: 'fornece +1 nos testes de ataque com a arma',
        require: '',
      },
      {
        cost: '2',
        description: 'muda a execução para ação de movimento',
        require: '',
      },
      {
        cost: '3',
        description: 'aumenta o bônus nos testes de ataque em +1',
        require: '',
      },
      {
        cost: '5',
        description: 'aumenta o dano da arma em mais um passo',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 21,
    name: 'Assassino Fantasmagórico',
    type: 'Arcana',
    school: 'Necromancia',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'longo',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'cena, até ser descarregada',
      },
      {
        name: 'Resistência',
        value: 'Vontade anula, Fortitude parcial',
      },
    ],
    description:
      'Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio. Quando você lança a magia, o espectro surge adjacente a você e a vítima faz um teste de Vontade. Se ela passar, percebe que o espectro é uma ilusão e a magia é dissipada. Se falhar, acredita na existência do espectro, que então flutua 18m por rodada em direção à vítima, sempre no fim do seu turno. Ele é incorpóreo e imune a magias (exceto magias que dissipam outras). Se o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com –1 PV e sangrando. O espectro persegue o alvo implacavelmente. Ele desaparece se o alvo ficar inconsciente ou se afastar além de alcance longo dele, ou se for dissipado',
    improvements: [
      {
        cost: '',
        description: '',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 22,
    name: 'Augúrio',
    type: 'Divina',
    school: 'Adivinhação',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados); “miséria” (a ação trará maus resultados); “felicidade e miséria” (para ambos) ou “nada” (para ações que não trarão resultados bons ou ruins). Com um resultado 1, a magia falha e oferece o resultado “nada”. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado. Por exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá “felicidade” se a câmara contém um tesouro desprotegido, “miséria” se contém um monstro, “felicidade e miséria” se houver um tesouro e um monstro ou “nada” se a câmara estiver vazia',
    improvements: [
      {
        cost: '3',
        description:
          'muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma',
        require: 'Requer 3º círculo',
      },
      {
        cost: '7',
        description:
          'muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “não sei”',
        require: 'Requer 4º círculo',
      },
      {
        cost: '7',
        description: 'o mestre rola 1d12; a magia só falha em um resultado 1',
        require: '',
      },
      {
        cost: '12',
        description: 'o mestre rola 1d20; a magia só falha em um resultado 1',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 23,
    name: 'Aura Divina',
    type: 'Divina',
    school: 'Abjuração',
    circle: 5,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'esfera com 9m de raio',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: 'Vontade parcial',
      },
    ],
    description:
      'Você se torna um condutor direto da energia de sua divindade, emanando uma aura brilhante da cor que escolher. Seus aliados na área recebem +5 na Defesa e em testes de resistência (você e aliados devotos da mesma divindade que você recebem +10) e ficam imunes a encantamento. Além disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre esmorecido, debilitado ou lento até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área',
    improvements: [
      {
        cost: '2',
        description:
          'aumenta os bônus na Defesa e em testes de resistência em +1',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 24,
    name: 'Aviso',
    type: 'Universal',
    school: 'Adivinhação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'movimento',
      },
      {
        name: 'Alcance',
        value: 'longo',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito. Escolha um',
    improvements: [
      {
        cost: '1',
        description:
          'aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km e assim por diante)',
        require: '',
      },
      {
        cost: '1',
        description:
          'se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno',
        require: '',
      },
      {
        cost: '2',
        description:
          'se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição',
        require: '',
      },
      {
        cost: '3',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
    ],
    extra: [
      {
        name: 'Alerta',
        description:
          'o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena',
      },
      {
        name: 'Mensagem',
        description:
          'o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo',
      },
      {
        name: 'Localização',
        description:
          'o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá',
      },
    ],
  },
  {
    id: 25,
    name: 'Banimento',
    type: 'Divina',
    school: 'Abjuração',
    circle: 3,
    header: [
      {
        name: 'Execução',
        value: '1d3+1 rodadas',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Vontade parcial',
      },
    ],
    description:
      'Você expulsa uma criatura não nativa de Arton. Um alvo nativo de outro mundo (como muitos espíritos), é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas rompidas, sendo reduzido a 0 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas. Se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso',
    improvements: [
      {
        cost: '0',
        description:
          'muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada (como por uma magia de convocação) para seu plano de origem',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 26,
    name: 'Barragem elemental de Vectorius',
    type: 'Arcana',
    school: 'Evocação',
    circle: 5,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'longo',
      },
      {
        name: 'Alvo/Área',
        value: '4 esferas elementais',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Reflexos parcial',
      },
    ],
    description:
      'Criada pelo arquimago Vectorius, esta magia produz quatro esferas, de ácido, eletricidade, fogo e frio, que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano de seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus testes de resistência',
    improvements: [
      {
        cost: '5',
        description: 'aumenta o dano de cada esfera em +2d6',
        require: '',
      },
      {
        cost: '5',
        description:
          'muda o tipo de dano de todas as esferas para essência (mas elas ainda causam os outros efeitos como se seu tipo de dano não mudasse)',
        require: '',
      },
    ],
    extra: [
      {
        name: 'Ácido',
        description: 'vulnerável até o fim da cena',
      },
      {
        name: 'Elétrica',
        description: 'atordoado por 1 rodada (apenas uma vez por cena)',
      },
      {
        name: 'Fogo',
        description: 'em chamas',
      },
      {
        name: 'Frio',
        description: 'lento até o fim da cena',
      },
    ],
  },
  {
    id: 27,
    name: 'Bênção',
    type: 'Divina',
    school: 'Encantamento',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'aliados',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Abençoa seus aliados, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição',
    improvements: [
      {
        cost: '1',
        description:
          'muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver nãose decompõe nem pode ser transformado em morto-vivo',
        require: '',
      },
      {
        cost: '2',
        description:
          'aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 28,
    name: 'Bola de Fogo',
    type: 'Arcana',
    school: 'Evocação',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'médio',
      },
      {
        name: 'Alvo/Área',
        value: 'esfera com 6m de raio',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Reflexos reduz à metade',
      },
    ],
    description:
      'Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área',
    improvements: [
      {
        cost: '2',
        description: 'aumenta o dano em +2d6',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada',
        require: '',
      },
      {
        cost: '3',
        description:
          'muda a duração para 1 dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera com 6m de raio',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 29,
    name: 'Buraco Negro',
    type: 'Universal',
    school: 'Convocação',
    circle: 5,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'longo',
      },
      {
        name: 'Alvo/Área',
        value: 'buraco negro',
      },
      {
        name: 'Duração',
        value: '3 rodadas',
      },
      {
        name: 'Resistência',
        value: 'Fortitude parcial',
      },
    ],
    description:
      'Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer umteste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre. Não se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos de Tenebra acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada',
    improvements: [
      {
        cost: '5',
        description: 'muda o efeito para que você não seja afetado',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 30,
    name: 'Caminhos da Natureza',
    type: 'Divina',
    school: 'Convocação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'criaturas escolhidas',
      },
      {
        name: 'Duração',
        value: '1 dia',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais',
    improvements: [
      {
        cost: 'Truque',
        description:
          'muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar',
        require: '',
      },
      {
        cost: '1',
        description:
          'além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta o bônus de deslocamento em +3m',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 31,
    name: 'Campo Antimagia',
    type: 'Arcana',
    school: 'Abjuração',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'sustentada',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você é cercado por uma barreira invisível com 3m de raio que acompanha seus movimentos. Qualquer habilidade mágica ou item mágico que entre na área da barreira é suprimida enquanto estiver lá. Criaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado. Criaturas mágicas, como elementais, ou construtos imbuídos com magia durante sua criação, como golens, não são diretamente afetados pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele. Uma magia que dissipa outras não dissipa um Campo Anti magia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia.',
    improvements: [
      {
        cost: '',
        description: '',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 32,
    name: 'Campo de Força',
    type: 'Arcana',
    school: 'Abjuração',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano de corte, impacto ou perfuração (esses PV não impedem que você fique inconsciente, comece a sangrar, morra...).',
    improvements: [
      {
        cost: '1',
        description:
          'muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe redução 30 contra o próximo dano que sofrer',
        require: '',
      },
      {
        cost: '1',
        description:
          'aumenta os PV temporários em +5 ou a redução de dano em +10',
        require: '',
      },
      {
        cost: '7',
        description:
          'muda o alcance para curto, o alvo para outra criatura ou objeto Enorme ou menor e a duração para sustentada. Em vez do normal, cria uma esfera imóvel e tremeluzente ao redor do alvo. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas e sempre que você se concentrar',
        require: 'Requer 4º círculo',
      },
      {
        cost: '9',
        description:
          'como o aprimoramento acima, mas tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo 9m em uma direção',
        require: 'Requer 4º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 33,
    name: 'Camuflagem ilusória',
    type: 'Arcana',
    school: 'Ilusão',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'toque',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem leve',
    improvements: [
      {
        cost: '3',
        description:
          'a imagem do alvo fica mais distorcida, aumentando a chance de falha da camuflagem leve para 50%',
        require: '',
      },
      {
        cost: '7',
        description:
          'muda o alcance para curto e o alvo para criaturas escolhidas',
        require: 'Requer 4º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 34,
    name: 'Chuva de Meteoros',
    type: 'Arcana',
    school: 'Convocação',
    circle: 5,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'longo',
      },
      {
        name: 'Alvo/Área',
        value: 'quadrado com 18m de lado',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Reflexos parcial',
      },
    ],
    description:
      'Meteoros caem dos céus, devastando a área afetada. Criaturas na área sofrem 15d6 pontos de dano de impacto, 15d6 pontos de dano de fogo e ficam caídas e presas sob os escombros (agarradas). Uma criatura que passe no teste de resistência sofre metade do dano total e não fica caída e agarrada. Uma criatura agarrada pode escapar gastando uma ação padrão e passando em um teste de Atletismo (CD da magia). Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil, e imersa numa nuvem de poeira (camuflagem leve). Esta magia só pode ser utilizada a céu aberto',
    improvements: [
      {
        cost: '2',
        description:
          'aumenta o número de meteoros que atingem a área, o que aumenta o dano em +2d6 de impacto e +2d6 de fogo',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 35,
    name: 'Círculo da Justiça',
    type: 'Divina',
    school: 'Abjuração',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'cubo com 9m de lado',
      },
      {
        name: 'Duração',
        value: '1 dia',
      },
      {
        name: 'Resistência',
        value: 'Vontade parcial',
      },
    ],
    description:
      'Também conhecida como Lágrimas de Hyninn, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir',
    improvements: [
      {
        cost: '1',
        description:
          'muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis',
        require: '',
      },
      {
        cost: '3',
        description:
          'muda a penalidade nas perícias para –10 (se passar na resistência) e –20 (se falhar)',
        require: 'Requer 4º círculo',
      },
      {
        cost: '7',
        description:
          'muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000)',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 36,
    name: 'Círculo da Restauração',
    type: 'Divina',
    school: 'Evocação',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'esfera com 3m de raio',
      },
      {
        name: 'Duração',
        value: '5 rodadas',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura pode recuperar no máximo 5 PM por dia com esta magia',
    improvements: [
      {
        cost: '2',
        description: 'aumenta a regeneração de PV em 1d8+1',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 37,
    name: 'Cólera de Azgher',
    type: 'Divina',
    school: 'evocação',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'médio',
      },
      {
        name: 'Alvo/Área',
        value: 'esfera com 6m de raio',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: ' Reflexos parcial',
      },
    ],
    description:
      'Você cria uma explosão de luz dourada e intensa. Criaturas na área ficam cegas por 1d4 rodadas e em chamas, e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega nem em chamas e sofre metade do dano',
    improvements: [
      {
        cost: '2',
        description: 'aumenta o dano em +2d6 (+2d8 contra mortos-vivos)',
        require: '',
      },
      {
        cost: '2',
        description: 'aumenta a área em +6m de raio',
        require: '',
      },
      {
        cost: '5',
        description:
          'a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na área',
        require: 'Requer 5º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 38,
    name: 'Coluna de Chamas',
    type: 'Divina',
    school: 'Evocação',
    circle: 3,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'longo',
      },
      {
        name: 'Alvo/Área',
        value: 'cilindro com 3m de raio e 30m de altura',
      },
      {
        name: 'Duração',
        value: 'instantânea',
      },
      {
        name: 'Resistência',
        value: 'Reflexos reduz à metade',
      },
    ],
    description:
      'Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área',
    improvements: [
      {
        cost: '1',
        description: 'aumenta o dano de fogo em +1d6',
        require: '',
      },
      {
        cost: '1',
        description: 'aumenta o dano de luz em +1d6',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 39,
    name: 'Comando',
    type: 'Divina',
    school: 'Encantamento',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 humanoide',
      },
      {
        name: 'Duração',
        value: '1 rodada',
      },
      {
        name: 'Resistência',
        value: 'Vontade anula',
      },
    ],
    description:
      'Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos',
    improvements: [
      {
        cost: '1',
        description: 'muda o alvo para 1 criatura',
        require: '',
      },
      {
        cost: '2',
        description: ' aumenta a quantidade de alvos em +1',
        require: '',
      },
    ],
    extra: [
      {
        name: 'Fuja',
        description:
          'o alvo gasta seu turno se afastando de você (usando todas as suas ações)',
      },
      {
        name: 'Largue',
        description:
          'o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou)',
      },
      {
        name: 'Pare',
        description: 'o alvo fica pasmo (uma vez por cena)',
      },
      {
        name: 'Senta',
        description:
          'com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno',
      },
      {
        name: 'Venha',
        description:
          'o alvo gasta seu turno se aproximando de você (usando todas as suas ações)',
      },
    ],
  },
  {
    id: 40,
    name: 'Compreensão',
    type: 'Universal',
    school: 'Adivinhação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'toque',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura ou texto',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: 'Vontade anula (veja escrição)',
      },
    ],
    description:
      'Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos. Você também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito',
    improvements: [
      {
        cost: '1',
        description: 'muda o alcance para curto',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez',
        require: '',
      },
      {
        cost: '2',
        description:
          'muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura',
        require: 'Requer 2º círculo',
      },
      {
        cost: '5',
        description:
          'muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma',
        require: 'Requer 3º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 41,
    name: 'Comunhão com a Natureza',
    type: 'Divina',
    school: 'Adivinhação',
    circle: 3,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: '1 dia',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar qualquer quantidade desses d4 e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados',
    improvements: [
      {
        cost: '1',
        description:
          'muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região',
        require: '',
      },
      {
        cost: '3',
        description: 'aumenta o número de dados de auxílio em +2',
        require: '',
      },
      {
        cost: '4',
        description: 'muda o tipo dos dados de auxílio para d6',
        require: '',
      },
      {
        cost: '8',
        description: 'muda o tipo dos dados de auxílio para d8',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 42,
    name: 'Conceder Milagre',
    type: 'Divina',
    school: 'Encantamento',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'toque',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura',
      },
      {
        name: 'Duração',
        value: 'permanente até ser descarregada',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia que ganhou',
    improvements: [
      {
        cost: '4',
        description:
          'muda o círculo da magia concedida para 3º e a penalidade de PM para –6',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 43,
    name: 'Concentração de Combate',
    type: 'Arcana',
    school: 'Adivinhação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'livre',
      },
      {
        name: 'Alcance',
        value: 'pessoal',
      },
      {
        name: 'Alvo/Área',
        value: 'você',
      },
      {
        name: 'Duração',
        value: '1 rodada',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um teste de ataque, você rola dois dados e usa o melhor resultado',
    improvements: [
      {
        cost: '2',
        description: 'muda a execução para padrão e a duração para cena',
        require: 'Requer 2º círculo',
      },
      {
        cost: '5',
        description:
          'além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado',
        require: 'Requer 3º círculo',
      },
      {
        cost: '9',
        description:
          'muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena',
        require: 'Requer 4º círculo',
      },
      {
        cost: '14',
        description:
          'muda a execução para padrão e a duração para 1 dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 na Defesa e Reflexos',
        require: 'Requer 5º círculo',
      },
    ],
    extra: [],
  },
  {
    id: 44,
    name: 'Condição',
    type: 'Divina',
    school: 'Adivinhação',
    circle: 2,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'até 5 criaturas',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Pela duração da magia, você sabe a posição e status (PV atuais, se estão com uma condição ou sob efeito de magia...) dos alvos. Depois de lançada, a distância dos alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou for para outro plano',
    improvements: [
      {
        cost: '1',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
      {
        cost: '1',
        description: 'aumenta a duração para 1 dia',
        require: '',
      },
    ],
    extra: [],
  },
  {
    id: 45,
    name: 'Conjurar Elemental',
    type: 'Arcana',
    school: 'Convocação',
    circle: 4,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'médio',
      },
      {
        name: 'Alvo/Área',
        value: 'parceiro elemental',
      },
      {
        name: 'Duração',
        value: 'sustentada',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um parceiro mestre do tipo destruidor (cuja habilidade custa apenas 2 PM para ser usada) e mais um tipo entre os indicados na lista abaixo. O elemental auxilia apenas você e não conta em seu limite de parceiros',
    improvements: [
      {
        cost: '5',
        description:
          'o elemental muda para Enorme e recebe dois tipos de parceiro indicados no seu elemento',
        require: '',
      },
      {
        cost: '5',
        description:
          'você convoca um elemental de cada tipo. Quando lança a magia, você pode escolher se cada elemental vai auxiliar você ou um aliado no alcance',
        require: 'Requer 5º círculo',
      },
    ],
    extra: [
      {
        name: 'Ar',
        description:
          'assassino, perseguidor ou vigilante. Dano de eletricidade',
      },
      {
        name: 'Água',
        description: 'ajudante, guardião ou médico. Dano de frio',
      },
      {
        name: 'Fogo',
        description: 'atirador, combatente ou fortão. Dano de fogo',
      },
      {
        name: 'Terra',
        description: 'combatente, guardião ou montaria. Dano de impacto',
      },
    ],
  },
  {
    id: 46,
    name: 'Conjurar Monstro',
    type: 'Arcana',
    school: 'Convocação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'completa',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: '1 criatura conjurada',
      },
      {
        name: 'Duração',
        value: 'sustentada',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim um construto feito de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez. O monstro surge em um ponto a sua escolha dentro do alcance e age no início de cada um de seus turnos, a partir da próxima rodada. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode gastar uma ação padrão para dar uma das seguintes ordens a ele Outros usos criativos para monstros conjurados ficam a critério do mestre. O monstro não age sem receber uma ordem. Para efeitos de jogo, o monstro conjurado tem For 2, Des 3 e todos os outros atributos nulos. Ele tem 20 pontos de vida, não tem um valor de Defesa (ataques feitos contra ele acertam automaticamente) e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade',
    improvements: [
      {
        cost: '1',
        description:
          'o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento terrestre',
        require: '',
      },
      {
        cost: '1',
        description: 'aumenta o deslocamento do monstro em +3m',
        require: '',
      },
      {
        cost: '1',
        description:
          'muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade',
        require: '',
      },
      {
        cost: '2',
        description: 'o monstro ganha percepção às cegas (alcance curto)',
        require: '',
      },
      {
        cost: '2',
        description:
          'aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.)',
        require: '',
      },
      {
        cost: '2',
        description:
          'aumenta o tamanho do monstro para Médio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m e seu ataque causa 2d6+4 pontos de dano',
        require: '',
      },
      {
        cost: '2',
        description:
          'o monstro ganha resistência 5 contra dois tipos de dano (por exemplo, corte e frio)',
        require: '',
      },
      {
        cost: '4',
        description:
          'o monstro ganha uma nova ordem: Arma de Sopro. O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade)',
        require: '',
      },
      {
        cost: '5',
        description:
          'aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m e seu ataque causa 3d6+7 pontos de dano com 3m de alcance',
        require: 'Requer 2º círculo',
      },
      {
        cost: '9',
        description:
          'o monstro ganha deslocamento de voo igual ao dobro do deslocamento',
        require: '',
      },
      {
        cost: '9',
        description: 'o monstro ganha imunidade contra dois tipos de dano',
        require: '',
      },
      {
        cost: '9',
        description:
          'aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance',
        require: 'Requer 4º círculo',
      },
      {
        cost: '14',
        description:
          'aumenta o tamanho do monstro para Colossal. Ele tem For 41, Des 10, 180 PV, deslocamento 15m e seu ataque causa 6d6+15 de dano com 9m de alcance',
        require: 'Requer 5º círculo',
      },
    ],
    extra: [
      {
        name: 'Mover',
        description:
          'o monstro se movimenta o dobro do deslocamento nessa rodada',
      },
      {
        name: 'Atacar',
        description:
          'o monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano',
      },
      {
        name: 'Lançar Magia',
        description:
          'o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo “cuspir” uma Bola de Fogo! Você gasta PM normalmente para lançar a magia',
      },
    ],
  },
  {
    id: 47,
    name: 'Conjurar Mortos-Vivos',
    type: 'Universal',
    school: '',
    circle: 0,
    header: [
      {
        name: 'Execução',
        value: '',
      },
      {
        name: 'Alcance',
        value: '',
      },
      {
        name: 'Alvo/Área',
        value: '',
      },
      {
        name: 'Duração',
        value: '',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description: '',
    improvements: [
      {
        cost: '',
        description: '',
        require: '',
      },
    ],
    extra: [],
  },
];

export const types = ['Todas', 'Arcana', 'Divina'];
export const circles = [1, 2, 3, 4, 5];
export const schools = [
  'Abjuração',
  'Adivinhação',
  'Convocação',
  'Encantamento',
  'Evocação',
  'Ilusão',
  'Necromancia',
  'Transmutação',
];
