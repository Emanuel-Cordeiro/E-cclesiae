interface PrayerType {
  title: string;
  prayer: string;
}

interface PrayerCategoryType {
  [key: string]: PrayerType;
}

export interface PrayersDataType {
  [category: string]: PrayerCategoryType;
}

export const prayersData: PrayersDataType = {
  Adoração: {
    adoroTeDevote: {
      title: 'Eu Vos Adoro',
      prayer:
        'Eu te adoro com afeto, Deus oculto,\nque te escondes nestas aparências.\nA ti sujeita-se o meu coração por inteiro\ne desfalece ao te contemplar.\nA vista, o tato e o gosto não te alcançam,\nmas só com o ouvir-te firmemente creio.\nCreio em tudo o que disse o Filho de Deus,\nnada mais verdadeiro do que esta Palavra da Verdade.\n\nNa cruz estava oculta somente a tua divindade,\nmas aqui se esconde também a humanidade.\nEu, porém, crendo e confessando ambas,\npeço-te o que pediu o ladrão arrependido.\n\nTal como Tomé, também eu não vejo as tuas chagas, mas confesso, Senhor, que és o meu Deus; faz-me crer sempre mais em ti,\nesperar em ti, amar-te.\n\nÓ memorial da morte do Senhor,\npão vivo que dás vida ao homem,\nfaz que meu pensamento sempre de ti viva,\ne que sempre lhe seja doce este saber.\n\nSenhor Jesus, terno pelicano, \nlava-me a mim, imundo, com teu sangue,\ndo qual uma só gota já pode\nsalvar o mundo de todos os pecados.\n\nJesus, a quem agora vejo sob véus,\npeço-te que se cumpra o que mais anseio:\nque vendo o teu rosto descoberto,\nseja eu feliz contemplando a tua glória.',
    },
    pangueLingua: {
      title: 'Canta, ó Lingua',
      prayer:
        'Canta, ó língua, o mistériodo Corpo glorioso\ne do precioso Sangue que verteu,\npara resgate do mundo,\no Rei das nações, Filho de uma Mãe fecunda.\n\nDado a nós, por nós nascido\nda Virgem Imaculada,\ndepois de ter vivido no mundo\ne espalhado a semente da palavra,\nencerrou com portentosa instituição\no tempo de sua permanência entre nós.\n\nNa noite da Última Ceia,\nestando à mesa com os irmãos,\ndepois de observar perfeitamente\na lei (mosaica) no que concerne ao banquete legal (da páscoa), dá-se a si mesmo,\ncom as próprias mãos, como alimento à turba dos doze Apóstolos.\n\nO Verbo humanado com uma palavra\nfez de sua carne um pão verdadeiro,\ne o vinho torna-se o Sangue de Cristo,\ne se falham os sentidos, basta somente a fé\npara confirmar os corações retos.\n\nProstrados, portanto, adoremos\na tão grande Sacramento;\nceda lugar a antiga aliança ao novo rito,\ne supra a fé à fraqueza\ndos sentidos.\n\nLouvor e canto de alegria,\nsaudação, honra, poder e ação de graças\nao Pai e ao Filho;\nigual homenagem se preste àquele (Espírito Santo), que de ambos procede.\n\nAmém.',
    },
    tantumErgoSacramentum: {
      title: 'Tão Sublime Sacramento',
      prayer:
        'Tão sublime sacramento\nAdoremos neste altar\nPois o Antigo Testamento\nDeu ao Novo seu lugar\nVenha a fé, por suplemento\nOs sentidos completar\n\nAo eterno Pai cantemos\nE a Jesus, o Salvador\nAo Espírito exaltemos\nNa Trindade eterno amor\nAo Deus uno e trino demos\nA alegria do louvor\n\nAmém! Amém!',
    },
    adorationAct: {
      title: 'Ato de Adoração',
      prayer:
        'Eu vos adoro com profundo respeito, meu Jesus, verdadeiro Pão da Vida Eterna!\n\n1. Eu vos adoro com profundo respeito, meu Jesus, no Santíssimo Sacramento; reconheço-vos por verdadeiro Deus e homem; e tenho a intenção de suprir com este ato de adoração, a frieza de tantos cristãos ao passarem diante de vossas igrejas e, às vezes, mesmo diante de vosso sagrado tabernáculo, em que vos dignais estar a toda hora, desejando, com impaciência amorosa comunicar-vos com vossos fiéis – nem ao menos vós saúdam! E com sua indiferença se mostram como os hebreus no deserto, nauseados deste maná celeste! Eu vos ofereço o preciosíssimo Sangue que derramastes da chaga de vosso pé esquerdo, em reparação de tão insuportável tibieza; e, encerrando-me espiritualmente nesta Sagrada Chaga, peito mil e mil vezes:\n\nGraças e louvores sejam dados a todo o momento ao Santíssimo e Diviníssimo Sacramento.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.\n\n2. Eu vos adoro com profundo respeito, meu Jesus. Reconheço-vos presente no Santíssimo Sacramento, e tenho a intenção de reparar a ingratidão de tantos cristãos que vendo-vos sair a visitar os pobres enfermos, para ser o seu conforto e consolação na grande viagem para a eternidade, vos deixam passar sem acompanhar-vos e apenas se dignam a fazer um ato de externa adoração. Eu vos ofereço, em reparação de tamanha frieza, o preciosíssimo Sangue que derramastes da chaga de vosso pé direito, e, encerrando-me espiritualmente nesta Sagrada Chaga, repito mil e mil vezes:\n\nGraças e louvores sejam dados a todo o momento ao Santíssimo e Diviníssimo Sacramento.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.\n\n3. Eu vos adoro com profundo respeito, meu Jesus, verdadeiro Pão da vida eterna; e com este ato de adoração tenho a intenção de compensar as muitas feridas que vosso Coração sofre, todos os dias pela profanação das Igrejas, onde vos dignais estar debaixo das espécies sacramentais, para ser adorado e amado por vossos fiéis. Eu vos ofereço, em reparação de tantas irreverências, o preciosíssimo Sangue que derramastes da chaga de vossa mão esquerda, e, encerrando-me espiritualmente nesta Sagrada Chaga, repito mil e mil vezes:\n\nGraças e louvores sejam dados a todo o momento ao Santíssimo e Diviníssimo Sacramento.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.\n\n4. Eu vos adoro com profundo respeito, meu Jesus, Pão da vivo descido dos céus; e tenho a intenção de reparar com este ato de adoração, tantas e tão repetidas irreverências que cada dia cometem vossos fiéis ao assistirem a Santa Missa, na qual por excesso de amor, renovais, de modo incruento, o mesmo Sacrifício que consumastes no calvário, para a nossa salvação. Eu vos ofereço, em reparação de tanta ingratidão, o preciosíssimo Sangue que derramastes da chaga de vossa mão direita, e, encerrando-me espiritualmente nesta Sagrada Chaga, reúno minha vós às vozes dos Anjos que, em adoração, vos rodeiam, dizendo, juntamente com eles:\n\nGraças e louvores sejam dados a todo o momento ao Santíssimo e Diviníssimo Sacramento.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.\n\n5. Eu vos adoro com profundo respeito, meu Jesus, verdadeira vítima de expiação por nossos pecados; e vos ofereço este ato de adoração em compensação dos sacrilégios e ultrajes que recebeis de tantos cristãos, que se atrevem até ir receber-vos na Santa Comunhão tendo a sua alma em pecado mortal! Eu vos ofereço, em reparação de tão abomináveis sacrilégios, as últimas gotas de vosso preciosíssimo Sangue que derramastes da chaga do lado, e, encerrando-me nesta Sagrada Chaga, eu vos adoro, bendigo e amo, repetindo, em união com todas as almas devotas do santíssimo sacramento:\n\nGraças e louvores sejam dados a todo o momento ao Santíssimo e Diviníssimo Sacramento.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.',
    },
  },
  'Orações Marianas': {
    angelus: {
      title: 'Angelus',
      prayer:
        '℣. O Anjo do Senhor anunciou à Maria.\n℟. E ela concebeu do Espírito Santo.\n\nReza-se a Ave-Maria.\n\n℣. Eis aqui a escrava do Senhor.\n℟. Faça-se em mim segundo a Vossa palavra.\n\nReza-se a Ave-Maria.\n\n℣. E o Verbo se fez carne.\n℟. E habitou entre nós.\n\nReza-se a Ave-Maria.\n\n℣. Rogai por nós, santa Mãe de Deus.\n℟. Para que sejamos dignos das promessas de Cristo.\n\n℣. Oremos: Derramai, ó Deus, a Vossa graça em nossos corações, para que, conhecendo pela mensagem do Anjo a encarnação do Vosso Filho, cheguemos, por Sua Paixão e Cruz, à glória da ressurreição. Por Cristo, Nosso Senhor.\n℟. Amém.\n\n℣. Glória ao Pai, e ao Filho e ao Espírito Santo,\n℟. Assim como era no princípio, agora e sempre, por todos os séculos dos séculos. Amém.\n\nPai-Nosso, Ave-Maria e Glória ao Pai.',
    },
    hailMary: {
      title: 'Ave Maria',
      prayer:
        'Ave-Maria, cheia de graça, \no Senhor é convosco; \nbendita sois vós entre as mulheres \ne bendito é o fruto do vosso ventre, Jesus. \nSanta Maria, Mãe de Deus, \nrogai por nós, pecadores, \nagora e na hora de nossa morte. Amém.',
    },
    hailHolyQueen: {
      title: 'Salve Rainha',
      prayer:
        'Salve Rainha, Mãe de Misericórdia, \nvida, doçura e esperança nossa, salve! \nA vós bradamos, \nos degredados filhos de Eva. \nA vós suspiramos, gemendo e chorando \nneste vale de lágrimas. \nEia, pois, advogada nossa, \nesses vossos olhos misericordiosos \na nós volvei, e, depois deste desterro, \nmostrai-nos Jesus, bendito fruto \ndo vosso ventre. \nÓ clemente, ó piedosa, \nó doce sempre Virgem Maria. \nRogai por nós, Santa Mãe de Deus, \npara que sejamos dignos das promessas de Cristo. \n\nAmém.',
    },
    infiniteBlessings: {
      title: 'Infinitas Graças',
      prayer:
        'Infinitas graças vos damos soberana rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos agora e para sempre tomarmos debaixo do vosso poderoso amparo, e para mais vos obrigar vos saudamos com uma Salve Rainha.',
    },
    rosary: {
      title: 'Terço',
      prayer: 'Conteúdo do terço',
    },
    fullRosary: {
      title: 'Rosário',
      prayer: 'Conteúdo do rosário',
    },
  },
  Orações: {
    ourFather: {
      title: 'Pai Nosso',
      prayer:
        'Pai nosso que estais nos céus, \nsantificado seja o Vosso nome, \nvenha nós o Vosso Reino, \nseja feita a Vossa vontade \nassim na terra como no Céu. \nO pão nosso de cada dia nos dai hoje, \nperdoai-nos as nossas ofensas \nassim como nós perdoamos a quem nos tem ofendido, \ne não nos deixeis cair em tentação, \nmas livrai-nos do mal. Amém.',
    },
    glory: {
      title: 'Glória',
      prayer:
        'Pai nosso que estais nos céus, \nsantificado seja o Vosso nome, \nvenha nós o Vosso Reino, \nseja feita a Vossa vontade \nassim na terra como no Céu. \nO pão nosso de cada dia nos dai hoje, \nperdoai-nos as nossas ofensas \nassim como nós perdoamos a quem nos tem ofendido, \ne não nos deixeis cair em tentação, \nmas livrai-nos do mal. Amém.',
    },
    signOfTheCross: {
      title: 'Sinal da Santa Cruz',
      prayer:
        'Pelo Sinal da Santa Cruz, \nlivrai-nos, Deus Nosso Senhor, \ndos nossos inimigos. \nEm nome do Pai, \ne do Filho \ne do Espírito Santo. \nAmém.',
    },
    holyAngels: {
      title: 'Santo Anjo',
      prayer:
        'Santo Anjo do Senhor, \nmeu zeloso e guardador, \nse a ti me confiou a piedade divina, \nsempre me rege, \nguarda, governa e ilumina. \nAmém.',
    },
    holySpirit: {
      title: 'Vide Espírito Santo',
      prayer:
        'Vinde, Espírito Santo, enchei os corações dos Vossos fiéis e acendei neles o fogo do Vosso Amor. \nEnviai o Vosso Espírito e tudo será criado \ne renovareis a face da Terra. \nOremos: Ó Deus que instruiste os corações dos Vossos fiéis, com a luz do Espírito Santo, \nfazei com que apreciemos retamente todas as coisas segundo o mesmo Espírito \ne gozemos da Sua consolação. \nPor Cristo Senhor Nosso. \n\nAmém.',
    },
    saintMichaelisArchangel: {
      title: 'Oração de São Miguel Arcanjo',
      prayer:
        'São Miguel Arcanjo, \ndefendei-nos no combate, \nsede o nosso refúgio \ncontra as maldades e ciladas do demônio. \nOrdene-lhe, Deus, instantemente o pedimos. \nE vós, príncipe da milícia celeste, \npela virtude divina, precipitai ao inferno satanás \ne os outros espíritos malignos, \nque andam pelo mundo para perder as almas. Amém.',
    },
    creed: {
      title: 'Creio',
      prayer:
        'Creio em Deus, Pai todo-poderoso, Criador do Céu e da Terra e em Jesus Cristo, seu único Filho, nosso Senhor \nque foi concebido pelo poder do Espírito Santo; \nnasceu da Virgem Maria; \npadeceu sob Pôncio Pilatos, \nfoi crucificado, morto e sepultado; \ndesceu à mansão dos mortos; \nressuscitou ao terceiro dia; \nsubiu aos Céus; \nestá sentado à direita de Deus Pai todo-poderoso, \nde onde há de vir a julgar os vivos e os mortos. \nCreio no Espírito Santo; \nna Santa Igreja Católica; \nna comunhão dos Santos; \nna remissão dos pecados; \nna ressurreição da carne; \ne na vida eterna. \n\nAmém.',
    },
    contrictionAct: {
      title: 'Ato de Contrição',
      prayer:
        'Senhor meu, Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes Vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque Vos amo e Vos estimo, pesa-me, Senhor, de vos ter ofendido; e proponho firmemente, ajudado com os auxílios de Vossa divina graça, emendar-me e nunca mais tornar a Vos ofender; espero alcançar de Vossa infinita misericórdia o perdão de minhas culpas. Amém.',
    },
    saintBenedict: {
      title: 'Oração de São Bento',
      prayer:
        'A Cruz Sagrada seja a minha luz, não seja o dragão o meu guia. \nRetira-te, satanás! Nunca me aconselhes coisas vãs. \nÉ mau o que tu me ofereces. Bebe tu mesmo os teus venenos.',
    },
  },
};
