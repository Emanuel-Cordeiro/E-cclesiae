import {
  creed,
  glory,
  ourFather,
  rosaryForgiveUsJesus,
  signOfTheCross,
} from './variousPrayers';

export const angelus =
  '℣. O Anjo do Senhor anunciou à Maria.\n℟. E ela concebeu do Espírito Santo.\n\nReza-se a Ave-Maria.\n\n℣. Eis aqui a escrava do Senhor.\n℟. Faça-se em mim segundo a Vossa palavra.\n\nReza-se a Ave-Maria.\n\n℣. E o Verbo se fez carne.\n℟. E habitou entre nós.\n\nReza-se a Ave-Maria.\n\n℣. Rogai por nós, santa Mãe de Deus.\n℟. Para que sejamos dignos das promessas de Cristo.\n\n℣. Oremos: Derramai, ó Deus, a Vossa graça em nossos corações, para que, conhecendo pela mensagem do Anjo a encarnação do Vosso Filho, cheguemos, por Sua Paixão e Cruz, à glória da ressurreição. Por Cristo, Nosso Senhor.\n℟. Amém.\n\n℣. Glória ao Pai, e ao Filho e ao Espírito Santo,\n℟. Assim como era no princípio, agora e sempre, por todos os séculos dos séculos. Amém.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.';

export const angelusRosary =
  '℣. O Anjo do Senhor anunciou à Maria.\n℟. E ela concebeu do Espírito Santo.\n\nReza-se a Ave-Maria.\n\n℣. Eis aqui a escrava do Senhor.\n℟. Faça-se em mim segundo a Vossa palavra.\n\nReza-se a Ave-Maria.\n\n℣. E o Verbo se fez carne.\n℟. E habitou entre nós.\n\nReza-se a Ave-Maria.\n\nGlória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre, por todos os séculos dos séculos.';

export const hailMary =
  'Ave-Maria, cheia de graça, \no Senhor é convosco; \nbendita sois vós entre as mulheres \ne bendito é o fruto do vosso ventre, Jesus. \nSanta Maria, Mãe de Deus, \nrogai por nós, pecadores, \nagora e na hora de nossa morte. Amém.';

export const hailHolyQueen =
  'Salve Rainha, Mãe de Misericórdia, \nvida, doçura e esperança nossa, salve! \nA vós bradamos, \nos degredados filhos de Eva. \nA vós suspiramos, gemendo e chorando \nneste vale de lágrimas. \nEia, pois, advogada nossa, \nesses vossos olhos misericordiosos \na nós volvei, e, depois deste desterro, \nmostrai-nos Jesus, bendito fruto \ndo vosso ventre. \nÓ clemente, ó piedosa, \nó doce sempre Virgem Maria. \nRogai por nós, Santa Mãe de Deus, \npara que sejamos dignos das promessas de Cristo. \n\nAmém.';

export const infiniteBlessings =
  'Infinitas graças vos damos soberana rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos agora e para sempre tomarmos debaixo do vosso poderoso amparo, e para mais vos obrigar vos saudamos com uma Salve Rainha.';

export const rosaryOffering =
  'Divino Jesus, eu vos ofereço este terço que vou rezar, contemplando os mistérios de nossa Redenção. \nConcedei-me, pela intercessão de Maria, vossa Mãe Santíssima, a quem me dirijo, \nas graças necessárias para bem rezá-lo para ganhar as indulgências desta santa devoção.';

export const rosaryMysteries = {
  joyful:
    '1° Mistério\nAnunciação do Arcanjo São Gabriel a Nossa Senhora\n2° Mistério\nVisitação de Nossa Senhora à sua prima Santa Isabel\n3° Mistério\nNascimento de Jesus em Belém\n4° Mistério\nApresentação do Menino Jesus no Templo e a purificação de Nossa Senhora\n5° Mistério\nPerda e encontro do Menino Jesus no Templo',
  sorrowful:
    '1° Mistério\nAgonia de Jesus no Horto\n2° Mistério\nFlagelação de Jesus atado a coluna\n3° Mistério\nCoroação de Espinhos de Nosso Senhor\n4° Mistério\nJesus carregando a cruz no caminho do Calvário\n5° Mistério\nCrucifixão e morte de nosso Senhor Jesus Cristo',
  luminous:
    '1° Mistério\nBatismo de Jesus no rio Jordão\n2° Mistério\nAuto-revelação de Jesus nas Bodas de Caná\n3° Mistério\nJesus pregando seus ensinamentos e o anúncio do Reino de Deus\n4° Mistério\nTransfiguração de Nosso Senhor Jesus Cristo\n5° Mistério\nInstituição da Eucaristia',
  glorious:
    '1° Mistério\nRessurreição de Nosso Senhor Jesus Cristo\n2° Mistério\nAscensão de Nosso Senhor Jesus Cristo ao Céu\n3° Mistério\nVinda do Espírito Santo sobre os Apóstolos\n4° Mistério\nAssunção de Nossa Senhora ao céu\n5° Mistério\nCoroação de Nossa Senhora como Rainha de todos os anjos e santos',
};

export const rosaryPrayers = [
  {
    title: 'Inicia-se o terço com:',
    prayer: signOfTheCross,
    selected: false,
  },
  {
    title: 'Oferecimento',
    prayer: rosaryOffering,
    selected: false,
  },
  {
    title: 'Oração do Creio',
    prayer: creed,
    selected: false,
  },
  {
    title: 'Pai Nosso',
    prayer: ourFather,
    selected: false,
  },
  {
    title: 'Angelus',
    prayer: angelusRosary,
    selected: false,
  },
  {
    title: 'Para cada mistério rezar:',
    prayer: '1 Pai Nosso\n10 Ave Maria',
    selected: false,
  },
  {
    title: 'Ao final do mistério rezar:',
    prayer: glory + '\n' + rosaryForgiveUsJesus,
    selected: false,
  },
  {
    title: 'Ao final do terço rezar:',
    prayer: infiniteBlessings + '\n' + hailHolyQueen,
    selected: false,
  },
];

export const fullRosaryPrayers = [
  {
    title: 'Inicia-se o rosário com:',
    prayer: signOfTheCross,
    selected: false,
  },
  {
    title: 'Oferecimento do Terço',
    prayer:
      'Uno-me a todos os santos que estão no Céu, a todos os justos que estão\nsobre a Terra, a todas as almas fiéis que estão neste lugar. Uno-me a\nVós, meu Jesus, para louvar dignamente Vossa Santa Mãe, e louvar-Vos a\nVós, nela e por Ela. Renuncio a todas as distrações que me vierem\ndurante este Rosário, que quero recitar com modéstia, atenção e devoção,\ncomo se fosse o último da minha vida. Nós Vos oferecemos, Trindade\nSantíssima, este Credo, para honrar os mistérios todos de nossa Fé; este\nPater (Pai Nosso) e estas três Ave-Marias, para honrar a unidade de\nvossa essência e a trindade de vossas pessoas. Pedimo-Vos uma fé viva,\numa esperança firme e uma caridade ardente. Assim seja.',
    selected: false,
  },
  {
    title: 'Oração do Creio',
    prayer: creed,
    selected: false,
  },
  {
    title: 'Pai Nosso',
    prayer: ourFather,
    selected: false,
  },
  {
    title: 'Rezar três Ave Marias, recitando antes de cada uma:',
    prayer:
      '1 - Louvemos a Maria, Filha bem amada do Pai Eterno.\n2 - Louvemos a Maria, Mãe admirável de Deus Filho.\n3 - Esposa fidelíssima de Deus Espírito Santo.',
    selected: false,
  },
  {
    title: 'Glória',
    prayer: glory + '\n' + rosaryForgiveUsJesus,
    selected: false,
  },
  {
    title: 'Para cada mistério rezar:',
    prayer: '1 Pai Nosso\n10 Ave Maria\nUm Glória ao Pai\nÓ meu bom Jesus...',
    selected: false,
  },
  {
    title: '1° Mistério - Mistérios Gozosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta primeira dezena, em honra a vossa\nEncarnação no seio de Maria; e vos pedimos, por esse mistério, e por sua\nintercessão uma profunda humildade. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da Encarnação, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '2° Mistério - Mistérios Gozosos',
    prayer:
      'Nos vos oferecemos, Senhor Jesus, esta segunda dezena, em honra da\nvisitação de vossa santa Mãe à sua prima santa Isabel e da santificação\nde São João Batista; e vos pedimos, por esse mistério e pela intercessão de vossa Mãe Santíssima, a caridade para com o nosso próximo. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da visitação, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '3° Mistério - Mistérios Gozosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta terceira dezena, em honra ao vosso nascimento no estábulo de Belém; e vos pedimos, por este mistérioe pela intercessão de vossa Mãe Santíssima, o desapego dos bens terrenose ao amor a pobreza. Assim seja.\nReze e medite o mistério.\nGraças ao mistério do nascimento de Jesus, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '4° Mistério - Mistérios Gozosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta quarta dezena, em honra a vossa apresentação ao templo, e da purificação de Maria; e vos pedimos, por este mistério e por sua intercessão, uma grande pureza de corpo de alma. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da purificação descei, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '5° Mistério - Mistérios Gozosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta quinta dezena, em honra ao vosso reencontro por Maria; e vos pedimos, por este mistério; e por sua intercessão, a verdadeira sabedoria.\nReze e medite o mistério.\nGraças ao mistério do reencontro de Jesus, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '6° Mistério - Mistérios Dolorosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta sexta dezena, em honra a vossa agonia mortal no Jardim das Oliveiras; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a contrição de nossos pecados. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da agonia de Jesus, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '7° Mistério - Mistérios Dolorosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta sétima dezena, em honra a vossa sangrenta flagelação; e vos pedimos, por este mistério e pela intercessão de vossa Mãe santíssima, a mortificação de nossos sentidos. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da coroação de espinhos, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '8° Mistério - Mistérios Dolorosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta oitava dezena, em honra de vossa coroação de espinhos; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, o desprezo do mundo. Assim seja. Pausa para meditar.\nReze e medite o mistério.\nGraças ao mistério do carregamento da cruz, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '9° Mistério - Mistérios Dolorosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta nona dezena, em honra do carregamento da Cruz; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a paciência em todas as nossas cruzes. Assim seja.\nReze e medite o mistério.\nGraças ao mistério do carregamento da cruz, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '10° Mistério - Mistérios Dolorosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta décima dezena, em honra a vossa crucificação e morte ignominiosa sobre o calvário; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, a conversão dos pecadores, a perseverança dos justos e o alívio das almas do purgatório. Assim seja.Graças ao mistério da crucificação de Jesus descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '11° Mistério - Mistérios Gloriosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta undécima dezena, em honra a vossa ressurreição gloriosa; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o amor a Deus e o fervor ao vosso serviço. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da ressurreição, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '12° Mistério - Mistérios Gloriosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta duodécima dezena, em honra a vossa triunfante ascensão; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, um ardente desejo do céu, nossa cara pátria. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da ascensão descei, em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '13° Mistério - Mistérios Gloriosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta décima terceira dezena, em honra do mistério de Pentecostes; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a descida do Espírito Santo em nossas almas. Assim seja.\nReze e medite o mistério.\nGraças ao mistério de Pentecostes, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '14° Mistério - Mistérios Gloriosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus, esta décima quarta dezena, em honra da ressurreição e triunfal assunção de vossa Mãe ao céu; e vos pedimos, por este mistério e por sua intercessão, uma terna devoção a tão boa mãe. Assim seja.\nReze e medite o mistério.\nGraças ao mistério da assunção descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: '15° Mistério - Mistérios Gloriosos',
    prayer:
      'Nós vos oferecemos, Senhor Jesus esta décima quinta dezena, em honra da coroação gloriosa de vossa Mãe Santíssima no céu; e vos pedimos, por este mistério e por sua intercessão, a perseverança na graça e a coroa da glória. Assim seja.\nReze e medite o mistério.\nGraças aos mistérios da coroação gloriosa de Maria, descei em nossas almas. Assim seja.',
    selected: false,
  },
  {
    title: 'Salve Rainha',
    prayer: hailHolyQueen,
    selected: false,
  },
  {
    title: 'Ladainha de Nossa Senhora',
    prayer: `Senhor, tende piedade de nós.
      Jesus Cristo, tende piedade de nós.
      Senhor, tende piedade de nós.
      Jesus Cristo, ouvi-nos.
      Jesus Cristo, atendei-nos.
       
      Pai celeste que sois Deus, tende piedade de nós.
      Filho, Redentor do mundo, que sois Deus, tende piedade de nós.
      Espírito Santo, que sois Deus, tende piedade de nós.
      Santíssima Trindade, que sois um só Deus, tende piedade de nós.
       
      Santa Maria, rogai por nós.
      Santa Mãe de Deus,
      Santa Virgem das Virgens,
      Mãe de Jesus Cristo,
      Mãe da divina graça,
      Mãe puríssima,
      Mãe castíssima,
      Mãe imaculada,
      Mãe intacta,
      Mãe amável,
      Mãe admirável,
      Mãe do bom conselho,
      Mãe do Criador,
      Mãe do Salvador,
      Virgem prudentíssima,
      Virgem venerável,
      Virgem louvável,
      Virgem poderosa,
      Virgem clemente,
      Virgem fiel,
      Espelho de justiça,
      Sede de sabedoria,
      Causa da nossa alegria,
      Vaso espiritual,
      Vaso honorífico,
      Vaso insígne de devoção,
      Rosa mística,
      Torre de David,
      Torre de marfim,
      Casa de ouro,
      Arca da aliança,
      Porta do céu,
      Estrela da manhã,
      Saúde dos enfermos,
      Refúgio dos pecadores,
      Consoladora dos aflitos,
      Auxílio dos cristãos,
      Rainha dos anjos,
      Rainha dos patriarcas,
      Rainha dos profetas,
      Rainha dos apóstolos,
      Rainha dos mártires,
      Rainha dos confessores,
      Rainha das virgens,
      Rainha de todos os santos,
      Rainha concebida sem pecado original,
      Rainha elevada ao céu,
      Rainha do sacratíssimo Rosário,
      Rainha da paz,
      
       
      Cordeiro de Deus, que tirais os pecados do mundo,
      perdoai-nos Senhor.
      Cordeiro de Deus, que tirais os pecados do mundo,
      ouvi-nos Senhor.
      Cordeiro de Deus, que tirais os pecados do mundo,
      tende piedade de nós.
      
       
      V. Rogai por nós, Santa Mãe de Deus,
      R. Para que sejamos dignos das promessas de Cristo.
      
       
      Oremos.
      Senhor Deus, nós Vos suplicamos que concedais aos vossos servos perpétua saúde de alma e de corpo; e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da presente tristeza e gozemos da eterna alegria.
      Por Cristo Nosso Senhor.
      Amém.
      (no mês de outubro)
      V. Rogai por nós, Rainha do Sacratíssimo Rosário,
      R. Para que sejamos dignos das promessas de Cristo.`,
    selected: false,
  },
  {
    title: 'Saudação Final',
    prayer: `
      Eu vos saúdo, Maria, Filha bem-amada do eterno Pai, Mãe admirável do
      Filho, Esposa mui fiel do Espírito Santo, templo augusto da santíssima
      trindade; eu vos saúdo soberana Princesa, a quem tudo está submisso no
      céu e na terra; eu vos saúdo, seguro refúgio dos pecadores, nossa
      Senhora da Misericórdia, que jamais repeliste pessoa alguma. Pecador que
      sou, me prostro aos vossos pés, e vos peço de me obter de Jesus, vosso
      amado filho, a contrição e o perdão de todos os meus pecados, e a divina
      sabedoria. Eu me consagro todo a vós, com tudo o que possuo. Eu vos
      tomo, hoje, por minha Mãe e Senhora. Tratai-me, pois, como o ultimo de
      vossos filhos e o mais obediente de vossos escravos. Atendei, minha
      Princesa, atendei aos suspiros de um coração que seja amar-vos e
      servi-vos fielmente. Que ninguém diga que, entre todos que a vós
      recorreram, seja eu o primeiro desamparado. Ó minha esperança, Ó minha
      vida, Ó minha fiel e imaculada Virgem Maria defendei-me, nutri-me,
      escutai-me, instruí-me, salvai-me. Assim seja. Em Nome do Pai, (+) do
      Filho e do Espírito Santo. Amém.
    `,
    selected: false,
  },
];
