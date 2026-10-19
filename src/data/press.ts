import type { ContentPost } from "./site";

export type PressScan = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

export type PressTranscriptSection = {
  heading?: string;
  paragraphs: string[];
};

export type PressArticle = {
  slug: string;
  outlet: string;
  outletType: "Jornal" | "Revista";
  edition?: string;
  dateLabel: string;
  isoDate?: string;
  year?: number;
  headline: string;
  kicker?: string;
  byline?: string;
  seoTitle: string;
  description: string;
  summary: string;
  context: string[];
  scans: PressScan[];
  transcript: PressTranscriptSection[];
  captions?: string[];
  notes?: string[];
};

const scan = (
  file: string,
  width: number,
  height: number,
  alt: string,
  label: string
): PressScan => ({
  src: `/images/acervo/${file}.webp`,
  width,
  height,
  alt,
  label
});

export const pressArticles: PressArticle[] = [
  {
    slug: "gazeta-esportiva-1976-a-vitoria-foi-do-karate",
    outlet: "A Gazeta Esportiva",
    outletType: "Jornal",
    edition: "3º caderno, página 33",
    dateLabel: "12 de abril de 1976",
    isoDate: "1976-04-12",
    year: 1976,
    headline: "A vitória foi do Karatê",
    seoTitle: "A vitória foi do Karatê (Gazeta Esportiva, 1976)",
    description:
      "Transcrição da reportagem da Gazeta Esportiva sobre o VIII Campeonato Paulista de Karatê, em 1976, vencido pela equipe Butoku-kai com Carlos Rocha.",
    summary:
      "O VIII Campeonato Paulista de Karatê, vencido pela Butoku-kai, com Carlos Rocha em 4º lugar.",
    context: [
      "Em abril de 1976, A Gazeta Esportiva dedicou uma página inteira ao VIII Campeonato Paulista de Karatê, disputado entre as cinco principais associações do Estado já sob a recém-criada Federação Paulista de Karatê.",
      "A Butoku-kai, academia do Mestre Taketo Okuda, venceu por equipes e ocupou os quatro primeiros lugares individuais. O 4º colocado foi Carlos Rocha, hoje instrutor chefe do Mushinkan, descrito pelo jornal como “um karateísta raçudo” e “um atleta promissor”."
    ],
    scans: [
      scan(
        "gazeta-esportiva-1976-a-vitoria-foi-do-karate",
        1786,
        2200,
        "Página de A Gazeta Esportiva de 12 de abril de 1976 com a manchete A vitória foi do Karatê e fotos da equipe Butoku-kai",
        "Página completa"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "Na disputa entre as cinco principais associações paulistas de karatê, a vitória foi do karatê que consolidou, efetivamente, sua união, através da Federação Paulista de Karatê.",
          "Uma elogiável organização e um ambiente de seriedade notável entre os concorrentes resultaram num sucesso total. A presença do público foi maciça e o certame decorreu sem maiores incidentes. Vencedora por equipe e até o 4.º lugar na disputa individual, a Butoku-kai deu mostras de um karatê moderno, eficiente e forte.",
          "As regras da competição foram as mesmas da “Federation of all Japan Karatê-Dô Organizations” (FAJKO), que são também as normas da “World Union of Karatê-Dô Organizations” (WUKO), traduzidas e adotadas pela Confederação Brasileira de Pugilismo, destinadas a reger todas as disputas de karatê no país.",
          "Participou efetivamente desta competição o professor Yasutaka Tanaka, que veio especialmente do Rio de Janeiro para o campeonato. Atuou brilhantemente na arbitragem e orientou os demais árbitros e juízes laterais, quanto à aplicação de penalidades, no sentido de padronizar os critérios."
        ]
      },
      {
        heading: "“Juro solenemente...",
        paragraphs: [
          "...competir com lealdade, respeitando assim, as normas do karatê para o engrandecimento do esporte nacional” — foi o juramento prestado pelos atletas. Foi dado, assim, início à competição, por equipes, do Paulista de Karatê, defrontando-se as escolas Shorin-ryu e Shitoryu. [trecho ilegível no original] com o atleta Shito. Seguiram-se ao primeiro confronto as lutas que decidiram a vitória, nesta primeira fase, da Shorin: Ivan Martins (da Seishin, que entrou em substituição ao atleta Ricardo de Oliveira, que torceu o joelho) e Eduardo Sho (aluno de Evans Lee) obtiveram uma bonita vitória.",
          "Na segunda rodada de equipes participaram as escolas Wadôkai (prof. Buyo) e a Goju-kai (do prof. Castanho). Sérgio (Wadô), com golpes ágeis e firmes, surpreendeu a todos, derrotando Saoka (Goju), conhecido por ser bastante técnico. No segundo confronto, a Wadô lutou com Marco Antonio, da Goju, que no Campeonato Paulista do ano passado, usou a faixa preta, recentemente estava usando a faixa branca e neste campeonato participou com a faixa roxa.",
          "Ao nosso ver esse procedimento não só é incorreto, como é um desrespeito ao mestre que gradua o atleta. Marco Antonio, no decorrer das competições, demonstrou um estranho comportamento, torcendo euforicamente, aos gritos, nos limites da área de combate. É compreensível que o público, leigo, se exalte aos gritos, mas para um praticante legítimo de karatê, cremos que não é o mais adequado.",
          "Após a vitória da equipe de Wadô-kai, confrontaram-se a Butoku-kai (que obteve uma vitória preliminarmente, no sorteio das chaves) e a Shorin-ryu.",
          "Apesar de notarmos acentuadas diferenças na técnica de combate entre as duas equipes, a supremacia técnica e física da Butoku foi notória. Osório Prudente e Ricardo D’Ellia (Zelão), foram os primeiros a disputarem. Ricardo, portador de uma envergadura impressionante, bastante agressivo, ganhou plausivamente. Na segunda luta, Rodrigo (aluno de Sérgio Yanaguizawa) deu uma exibição clara do que é a técnica clássica do karatê, derrotando Carlos Rocha, um adversário de grande porte.",
          "Outra luta notável foi a de Adauto Martins, da Shorin, que apesar de apresentar um karatê bastante clássico, foi derrotado, mostrando que o karatê de competição não é o mesmo de há alguns anos. Porém, sem sombra de dúvidas, [trecho ilegível no original] entre as equipes Shorin e Godju. Apesar de tecnicamente inferior, a Goju-kai foi a vitoriosa nesta rodada."
        ]
      },
      {
        heading: "Concluindo...",
        paragraphs: [
          "A honra ao mérito. A Butoku-kai, com seus qualificados karateístas, obteve a primeira colocação. No segundo posto ficou a Wadô-kai, em terceiro a Goju-kai, a Shorin-ryu, em quarto e na quinta colocação a Shito-ryu, que voltou para São José do Rio Preto, com seus 2 ônibus fretados, e a sua animada torcida de 100 componentes, não muito satisfeita com os resultados.",
          "Ficou evidenciada a superioridade dos atletas da Butoku-kai, mas, e os motivos? — Não é difícil de se compreender o que ocorreu se lembrarmos que o karatê praticado, em quase todo o Brasil, é um karatê que nos foi trazido há cerca de 20 ou 15 anos.",
          "Exemplos claros deste fenômeno encontramos tanto no nosso judô como no beisebol. Motivado pelo isolamento a que foram submetidos os mestres, que para aqui vieram, perderam o contato com o grande centro de desenvolvimento desta modalidade. Pratica-se, ainda, e em quase todos os centros de instrução brasileiros de karatê, um karatê bonito, clássico e tradicional. Um karatê estilista, de posturas corretas e aprofundadas.",
          "Já, no caso da Nihon Karate Kyokai, ou seja, da Butoku, não ocorre o mesmo. A presença de Taketo Okuda colocou os atletas daquela escola em contacto com as inovações japonesas. Novas técnicas foram introduzidas, praticando-se um karatê específico de competição. É lógico que, além disso, é necessário ponderar que a presença de Enio Ricardo e Antonio Gomes foi decisiva para a vitória, porém só a orientação adequada levou-os a isto.",
          "A Butoku-kai ganhou. E vai continuar ganhando enquanto as demais escolas não praticarem um karatê mais esporte do que de arte."
        ]
      },
      {
        heading: "Engatinhando",
        paragraphs: [
          "“Engatinhando” foi a palavra usada pelo prof. Sérgio Yanaguisawa, da Shorin-ryu, referindo-se à arbitragem no karatê. E, de fato, é muito discutível o sistema de arbitragem no karatê. Não achamos fácil esquematizar normas para competições de karatê, mas não se pode negar que é deficiente, no momento atual, a nossa arbitragem.",
          "Causou estranheza geral a não desclassificação de Antonio Gomes quando este atleta, num “jo-dan oizuqui”, arrancou um dente de seu adversário, Ivan Martins. De fato, se analisarmos o que diz a norma tradicional de competição, Antonio estaria praticamente desclassificado. Mas as regras atuais vão além, e o prof. Tanaka, convincentemente, explica: “Se o golpe fosse desferido em condições normais de luta, seria um caso claro de desclassificação. Porém, no momento do golpe os dois adversários atacavam, ocorrendo o que chamamos de ‘choque’, e neste caso, não só Antonio esticou o braço, como Ivan foi em direção ao golpe, havendo culpa bilateral. Mesmo assim, Antonio levaria um ‘chui’ (advertência, um ponto negativo), mas Ivan Martins não quis continuar a disputa.”",
          "Ivan, porém, não desistiu, o que houve foi um mal entendido, na hora em que Tanaka perguntou-lhe se dava para continuar e Ivan respondeu-lhe que “não” tinha problema. Em meio ao vozerio da multidão, Tanaka entendeu mal e a vitória foi para as mãos de Antonio Gomes, o que de uma forma ou de outra, fatalmente, viria a acontecer.",
          "Outro problema na arbitragem ocorreu com o professor Taketoshi Kawamura, que permitiu que dois atletas, indisciplinados, descontrolados e totalmente desconhecedores dos princípios da ética deste esporte, atracaram-se em violenta luta corporal, agarrando-se, sem dar atenção ou respeito aos apelos do árbitro central que os tentou apartar. O professor Taketoshi permitiu os faltantes continuassem a disputa, como se nada houvesse acontecido, dando um exemplo do que não se deve fazer.",
          "Na maioria das vezes, o que funciona num árbitro não é o conhecimento das regras, mas sim, o bom senso com que ele as aplica. Isto ficou claro na excelente atuação de Yasutaka Tanaka e de Yasuyuki Sasaki, que com suas experiências e presença de espírito foram tão justos quanto é possível a um ser humano normal. Porém, o mesmo não se pode dizer do professor Ito, que usou de ponderações bastante discutíveis para as suas decisões.",
          "Porém, de uma maneira geral, podemos elogiar este campeonato paulista, que em relação ao do ano passado, teve um fenomenal progresso. O presidente da Federação Paulista de Karatê, general Henrique Palmeiro D’Avilla, presente a este certame afirmou: “Nesta nova fase de nosso karatê, em que este maravilhoso esporte constituiu a sua federação própria, criando concretas condições de sobrevivência, poderemos promover acontecimentos como este, de técnica e habilidade”. O general expressou também que este, o VIII Campeonato Paulista, pode e deve ser considerado como o I Campeonato de uma nova série, que será a da federação.",
          "Outra presença notável neste campeonato, foi a do professor Yoshihide Shinzato, que participou no quadro de arbitragem, como sexto juiz, um elemento que dá o voto de Minerva. Este grande professor, presidente da União Shorin-ryu, é um dos responsáveis pela difusão deste esporte em nosso país. Após o certame paulista, Shinzato e sua equipe dirigiram-se a Joinvile, onde participaram do Campeonato Santa-catarinense de Karatê."
        ]
      },
      {
        heading: "E os kata?",
        paragraphs: [
          "Justificando que a diferença dos estilos não permitiria uma padronização de critérios para o julgamento desta modalidade de competição, não houve disputa de kata.",
          "Um erro ao nosso ver, pois sem o incentivo da prática do kata, fatalmente, teremos um declínio, no que diz respeito à técnica. O kata é essencial, pois como diz o professor Sasaki, “só o kata cultiva o espírito”. O kata é quem dá a postura, o equilíbrio e a firmeza, em potencial. Renegar o kata é abrir caminho para a prática de um karatê sem arte, pobre e resumido”.",
          "Esperamos que no próximo paulista de karatê, possamos contar com este importante item, fazendo parte da competição."
        ]
      },
      {
        heading: "Campeões, sem dúvida",
        paragraphs: [
          "Como se esperava, e não era de difícil previsão, novamente o título foi para as mãos de Enio Vezzuli. Bicampeão paulista, lutou, vigorosamente, pelo título e ele foi seu, sem dúvida nenhuma. Ricardo D’Ellia Ortiz, vice-campeão, com efeito, derrotado por Enio, porém não sem dificuldade. Antonio Gomes, vice-campeão no ano passado, desceu, agora, para o terceiro lugar, cedendo a segunda colocação para seu amigo Ricardo.",
          "O 4.º lugar foi para mais um aluno de Taketo Okuda, Carlos Rocha, um karateísta “raçudo”, que nos pareceu um atleta promissor, com boa potencialidade a ser desenvolvida."
        ]
      }
    ],
    captions: [
      "Como 6.º juiz, Yoshihide Shinzato participou do quadro de arbitragem.",
      "Eis a equipe vencedora do VIII Campeonato Paulista de Karatê. De pé, os quatro atletas que se sagraram campeões, também, na disputa individual. A partir da esquerda: Carlos Rocha, 4.º lugar; Zelão, 2.º lugar; Enio Vezzuli, 1.º lugar; e Antonio Gomes, 3.º lugar.",
      "O presidente da Federação Paulista de Karatê, general Henrique Palmeiro D’Ávila, um entusiasta dos esportes.",
      "O professor Taketo Okuda, colhendo os resultados e o professor Mario Seki, principal organizador do certame.",
      "Yasutaka Tanaka, representante da Confederação Brasileira de Pugilismo, veio do Rio, colaborou e foi homenageado."
    ],
    notes: [
      "O recorte original foi colado em partes, e duas linhas ficaram encobertas na emenda. Elas aparecem marcadas como [trecho ilegível no original]."
    ]
  },
  {
    slug: "gazeta-esportiva-1978-carlao-duplamente-campeao",
    outlet: "A Gazeta Esportiva",
    outletType: "Jornal",
    edition: "Página 15",
    dateLabel: "16 de maio de 1978",
    isoDate: "1978-05-16",
    year: 1978,
    kicker: "Wado destrona NKK no Paulista de Karatê",
    headline: "Carlão, duplamente campeão",
    byline: "Márcio Omar Chaer",
    seoTitle: "Carlão, duplamente campeão (Gazeta Esportiva, 1978)",
    description:
      "Transcrição da reportagem da Gazeta Esportiva de 1978 sobre o título de Carlos Rocha, campeão paulista de kata e kumite no mesmo campeonato.",
    summary:
      "Carlos Rocha é campeão paulista de kata e kumite no mesmo campeonato, em 1978.",
    context: [
      "Em maio de 1978, Carlos Rocha, o “Carlão”, conquistou no mesmo Campeonato Paulista os títulos individuais de kata e de kumite. Foi o primeiro ano em que o kata foi disputado oficialmente.",
      "A reportagem de Márcio Omar Chaer descreve as cinco lutas do campeão, a vitória da Wadô sobre a NKK na disputa por equipes e a convocação de Carlão para a seletiva do 3º Campeonato Pan-Americano."
    ],
    scans: [
      scan(
        "gazeta-esportiva-1978-carlao-duplamente-campeao",
        1631,
        2200,
        "Página de A Gazeta Esportiva de 16 de maio de 1978 com a manchete Carlão, duplamente campeão e fotos do Campeonato Paulista de Karatê",
        "Página completa"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "Ano que vem, no Rio Grande do Sul, será disputado o 10.º Campeonato Brasileiro de Karatê. Pela décima vez nosso Estado tentará obter o título máximo do karatê nacional. O que até hoje não conseguiu.",
          "Mas como? Como é que São Paulo, onde há mais tempo se pratica a modalidade (daqui que foram importados os precursores do karatê em todos os Estados brasileiros), onde, o número de praticantes é maior (bem maior) que a soma do número de praticantes de todos os demais Estados juntos, ainda não tem um título de campeão?",
          "É claro que não existe uma só razão para tamanho paradoxo. Mas, se formos apontar a maior, é fácil: a desorganização. Dos 10 campeonatos oficiais, apenas 4 foram disputados pelas principais escolas do Estado. Os demais foram disputados apenas pela Nihon Karate Kyokai. Em outras palavras, o potencial da modalidade nunca foi aproveitado devidamente. Em 1975, um ano após a fundação oficiosa da FPK, afinal tivemos um certame com cinco diferentes linhas técnicas. Foi o começo de uma era. A diferença da NKK então, era monstruosa. Além da equipe campeã, seus atletas (todos os sete) ocupavam do 1.º ao 7.º posto. Domingo passado, a hegemonia NKK sofreu um forte abalo. Sua equipe foi vencida.",
          "Os desdobramentos desse fato, entre outros, ainda vai dar muito o que falar. E quem vai ganhar com tudo isso é esse Estado, que começará a adquirir o tão importante “espírito de conjunto” que necessita. O mesmo espírito que levou a Wadô — campeã/78 ao pódio.",
          "O índice técnico do Campeonato Paulista não foi algo tão maravilhoso como se pretende. Mas foi promissor. Tremendamente promissor."
        ]
      },
      {
        paragraphs: [
          "Carlos Alberto Rocha, o “Carlão”, é campeão absoluto do karatê de nosso Estado. E duplamente campeão: em katá e kumitê, duas especialidades quase que impossíveis de se treinar simultaneamente, já que a primeira exige um tremendo preparo no ritmo, na contração e no “kimê”, enquanto o kumitê de competição pede um treino de velocidade, descontração e improviso.",
          "Portando o número 10, anteriormente usado por Ennio Vezzuli, Carlos provou que é mesmo “o sucessor natural” do grupo Ennio-Ricardo-Gomes, do qual ele participou um bom tempo.",
          "A grande surpresa, no entanto, estava reservada para a disputa de equipes. A Wadô campeã foi algo que fez tremer as estruturas do Ginásio da Portuguesa. Por mais que fosse um fato de se prever, já que a homogeneidade da equipe Wadô estava “ao ponto”, enquanto que a Nihon Karate Kyokai além de desfalcada de seus melhores atletas (Ricardo, Ennio e Gomes) estava, mais do que indefinida, desencontrada. Impedida a Nihon, de arrebatar seu 10.º título consecutivo foi algo estrondoso. A Wadô vem participando do Paulista há 4 anos e desde que ingressou na parada vem sendo vice-campeã, perseguindo com obstinação o título principal.",
          "A disputa na especialidade “katá”, que pela primeira vez é feita oficialmente, foi uma experiência largamente satisfatória. Os problemas de diferença de estilo não se fizeram estar como se esperava. A Nihon Karate Kyokai aqui, não deixou escapar o título, executando o Giju-shihô impecavelmente, o que lhe valeu os 7,1 pontos da vitória. A Goju-kai, com o Seiintchi foi a vice, com 6,36 pontos — apenas 0,03 à frente da terceira colocada, a Wadô, que completou 6,33 pontos. A seguir vieram a Shorin, com 6,16 e a Tanaka, com 5,9 pontos, esta última tendo estreado no Campeonato Paulista neste ano).",
          "Individualmente, como já se disse, Carlos Rocha foi o campeão também de katá, foi vice, Ricardo Marão, com o empi e, terceiro colocado o pequeno Takeo Uchida, com o seintchi."
        ]
      },
      {
        heading: "As lutas",
        paragraphs: [
          "Cinco lutas, cinco vitórias foi o que Carlão precisou para galgar os andares do pódio. Seu primeiro combate, contra José Roberto de Almeida resumiu-se a dois eficazes mae-gueri; Laerte Ferraz, que acabara de vencer a principal esperança da Shorin (o promissor Johannes) foi o segundo oponente de Carlos Rocha. Ambos estavam decididos, isso ficou claro no desempenho tanto de um como de outro, mas Laerte não contava com a precisão de um ura-ken de Carlos que, varando-lhe a defesa valeu ao campeão sua segunda vitória (veja bem que Carlos venceu a esse desclassificado por wazari apenas, enquanto que ao vice-campeão ele venceu por ippon. Com a repescagem certamente os lances de sorte no sorteio de chaves seriam neutralizados. Não diríamos que é o que acontece no caso, mas sem repescagem é muito fácil construir um quadro de classificações que não corresponda à realidade).",
          "O seu terceiro confronto foi com Ademar Bezerra (que acabara de vencer o atleta Hélio Augusto Rizzon, que no Paulista de Novos acertara o rosto de duas pessoas — uma com alguma gravidade até — e pegou em cheio o rosto de Francisco Cardoso no seu primeiro combate, mostrando não só sua inabilidade técnica como sua maldade que procurava atenuar com uma forjada “cara de inocente” após o combate), a luta foi disputadíssima, terminando o tempo regulamentar empatado, já que todas as entradas de ambos resultaram em aiutchi. Na prorrogação, todavia, venceu o melhor: um perfeito guiakuzuki de esquerda de Carlão penetrou claramente em Ademar. A garra demonstrada por este último, principalmente nessa luta, lhe valeria mais tarde o “Troféu Estímulo”.",
          "Edmundo Werner Roll, que vinha de vencer o “Tigrão” (Carlos Magalhães) da Goju, e Romic da NKK, foi o quarto derrotado de Carlos. Aqui, pôde-se constatar com clareza a ecleticidade do campeão que, praticamente, decidiu cada combate com um golpe diferente (e bem aplicado, o que é mais importante), a Werner estava reservado um mawashi-gueri em contra-ataque. E chega a luta final. O vice-campeão (de quem falaremos mais tarde), não durou tempo suficiente para que os fotógrafos regulassem suas máquinas: um mae-gueri de esquerda e um guiaku-zuqui de direita, deflagraram estrondosos aplausos da numerosa platéia ali presente. Carlos Alberto Rocha, vencedor por ippon, como convém a um autêntico campeão, diríamos."
        ]
      },
      {
        heading: "Rui, o vice",
        paragraphs: [
          "Troféu Revelação do evento, o alto (1m82) e jovem (19 anos) Rui Hayashi Tadaharu, assim como Carlos, aluno do NKK (Y. Sasaki), foi o vice do Paulista/78. Vice também no ano passado, no Paulista de Novos, Rui tem um grande futuro pela frente alicerçado em tão bom início (ele foi graduado recentemente à faixa roxa).",
          "Vencendo, respectivamente, Flavius Pugliese, e Noé Dias, Rui conquistou o direito de enfrentar o campeão Wadô, Carlos Martinez (que foi premiado no final do certame com uma ótima notícia — veja daqui a pouco), Rui não titubeou e passou adiante. Após seguidos aiutchi de guiaku-zuqui tchudan, Rui varia a fórmula com sucesso. Um kesame-zuqui encaixa-se perfeito em Robson Maciel. Rui, de notável envergadura e velocidade tem, parece-nos, o biotipo ideal para um competidor de karatê. Entretanto, matéria prima não é tudo, o que ficou bem claro na grande final."
        ]
      },
      {
        heading: "As equipes",
        paragraphs: [
          "As quatro equipes disputantes Wadô, NKK, Goju e Shorin, mostraram neste ano um karatê notavelmente uniforme, com as suas variações, é claro. Muita gente continua fazendo o treino que não leva, propriamente, ao sistema de competição que adotamos. É preciso adaptar, minha gente.",
          "Por 4 x 1, a Wadô mostrou facilidade em vencer a Goju, pela mesma contagem que a NKK derrotou a Shorin.",
          "Após a primeira rodada, que foi mais um aquecimento, partiram as duas equipes principais para a disputa do título. O primeiro combate termina com um ponto para a NKK, que Virgílio obtém sobre Silvio Teixeira, com um mae-gueri e um guiaku-zuki. Ricardo Marão, como sói acontecer, empata, conseguindo aparar todas as investidas de Samuel Delamuta. Robson Maciel, obtem o empate contra Laerte Ferraz. A vantagem da NKK diminui com um wazari (guiaku-zuki), de Edmundo Werner sobre Ademar Bezerra, entre Carlos Martinez e Carlos Rocha travaria-se o combate final. A luta é suada. Os aiutchi se repetem até que Martinez coloca o golpe da vitória: um guiaku-zuki djodan dá à Wadô o wazari que empataria em pontos (1 x 1) mas que, venceria por 2 x 1 em número de vitórias. A Wadô exultou. Os cumprimentos efusivos das linhas técnicas presentes comoveram alguns atletas às lágrimas."
        ]
      },
      {
        heading: "A arbitragem",
        paragraphs: [
          "Dirigidos os principais combates pelo carioca Yasutaka Tanaka, não se registraram falhas de monta no certame. Pequenos problemas como a não desclassificação de Hélio Rizzon (um atleta que confunde competir com outras coisas) e a consideração de golpes fora do ponto de equilíbrio, como os que se evidenciaram no combate entre Ademar Bezerra e Wagner dos Santos, ao que parece, são problemas típicos que não se erradicam tão logo."
        ]
      },
      {
        heading: "Martinez, escalado",
        paragraphs: [
          "Ao final do evento, quando Yasutaka Tanaka apontou os merecedores do Troféu Estímulo e do Troféu Revelação, foi indicado também o atleta que estará no Rio de Janeiro, domingo próximo junto a Gomes, Ricardo e Carlão disputando uma vaga para o 3.º Campeonato Panamericano, no Canadá. O fato de não ter sido apontado Rui, foi justificado por Tanaka pelo fato da pouca experiência e idade do nissei para um certame internacional. Quanto ao Troféu Revelação, dado a Rui, houve quem achasse que ele caberia ao “Tigrão” da Goju, todavia, sua boa atuação já foi registrada em outros anos, não cabendo portanto o termo “revelação” no caso. Entretanto, Tanaka não lhe poupou um elogio, ao afirmar que “seu progresso é notável”."
        ]
      }
    ],
    captions: [
      "De pé, a partir da esquerda, a equipe campeã paulista 1978: Laerte Ferraz, Samuel Delamuta, Sílvio Teixeira, Carlos Martinez e Edmundo Werner Roll. Agachados, Wagner Oliveira e Marcio Pugliese, os reservas.",
      "A partir da esquerda: o campeão de katá e kumitê Carlos Alberto Rocha, o vice Rui Hayashi Tadaharu, o terceiro colocado Robson Maciel e o Troféu Estímulo, Ademar Bezerra.",
      "Dois ataques, duas esquivas. Carlão (de pé), no entrevero com Carlos Martinez (agora também convocado para a eliminatória do Pan), decidindo a disputa por equipes.",
      "O campeão, Carlos Rocha desferindo ágil mawashi-gueri no combate com José Roberto de Almeida.",
      "Eis a NKK, vice em kumitê e campeã em katá: de pé a partir da E. — Yasuhara (técnico), Osvaldo Oliveira (da equipe de katá), Virgílio, Carlão (katá e kumitê), Robson Maciel, Rui Tadaharu. Ajoelhados: Ricardo Marão (katá e kumitê), Ademar Bezerra, Paulo Storti e Wladimir Romic."
    ]
  },
  {
    slug: "confronto-esportivo-1978-masahiko-tanaka",
    outlet: "Confronto Esportivo",
    outletType: "Jornal",
    edition: "Ano 1, nº 1, página 17",
    dateLabel: "Julho de 1978",
    isoDate: "1978-07",
    year: 1978,
    headline: "Masahiko Tanaka mostrou porque é Bi-Campeão",
    seoTitle: "Carlos Rocha e Masahiko Tanaka (Confronto Esportivo, 1978)",
    description:
      "Transcrição da matéria do Confronto Esportivo de julho de 1978 sobre a exibição do bicampeão Masahiko Tanaka em São Paulo e a demonstração com Carlos Rocha.",
    summary:
      "A exibição de Masahiko Tanaka em São Paulo e a demonstração com Carlos Rocha que arrancou aplausos.",
    context: [
      "Na primeira edição do jornal Confronto Esportivo, de julho de 1978, a capa trazia a chamada “A raça brasileira surpreendeu Tanaka”.",
      "A matéria da página 17 relata a exibição do bicampeão Masahiko Tanaka em 13 de junho, no Hobby Sports, e o momento em que Carlos Rocha, numa das demonstrações, aproveitou um golpe e agarrou o campeão, arrancando aplausos da plateia."
    ],
    scans: [
      scan(
        "confronto-esportivo-1978-masahiko-tanaka",
        2200,
        1627,
        "Página 17 do jornal Confronto Esportivo de julho de 1978 com a manchete Masahiko Tanaka mostrou porque é Bi-Campeão e o nome Carlos Rocha destacado",
        "Página 17"
      ),
      scan(
        "confronto-esportivo-1978-capa",
        420,
        540,
        "Capa do jornal Confronto Esportivo, ano 1, número 1, julho de 1978, com a manchete A raça brasileira surpreendeu Tanaka",
        "Capa"
      ),
      scan(
        "confronto-esportivo-1978-10-paulista",
        414,
        540,
        "Página do Confronto Esportivo com a matéria Muitas lágrimas, no 10º Paulista de Karatê",
        "Muitas lágrimas, no 10º Paulista de Karatê"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "A exibição do bi-campeão Masahiko Tanaka no dia 13 de Junho no Hobby Sports — mostrou muitas técnicas e qualidades que se desconheciam no Karatê do Brasil, — sempre olhando fixamente nos olhos do adversário, parecia que adivinhava os golpes a serem desferidos pelos adversários. Nas suas explicações servindo como juiz de algumas lutas, fêz ver aos contendores e ao público presente os pontos errados de cada um e em seguida sempre demonstrando aos mesmos o que deveria ser feito.",
          "Em uma das demonstrações com o nosso brasileiro Carlos Rocha o campeão sentiu um pouco embaraçado porque até então a maioria dos seus adversários pareciam estar receosos de lutar com ele, mas Carlos Rocha aproveitando um golpe mal dado por Masahiko Tanaka agarrou com toda sua energia em seu corpo na altura do pescoço conseguindo com isto tirar aplausos da platéia presente, e se não fosse pela intervenção dos organizadores Carlos Rocha ficaria muito mais tempo agarrado no campeão.",
          "A demonstração do Katá feita pelos atlétas brasileiros ali presentes mostraram ao bi-campeão a quantas andam o Karatê no Brasil e com a demonstração do nosso Carlão, ficou provado quanta raça existe dentro de um karateista brasileiro."
        ]
      }
    ],
    notes: [
      "Os destaques em vermelho no nome de Carlos Rocha foram feitos no recorte do acervo, não no jornal original.",
      "A página “Muitas lágrimas, no 10º Paulista de Karatê” existe no acervo só em baixa resolução. Por isso o texto dela não foi transcrito."
    ]
  },
  {
    slug: "jornal-da-cidade-bauru-1998-carlos-rocha-visita-marathon",
    outlet: "Jornal da Cidade",
    outletType: "Jornal",
    edition: "Bauru (SP)",
    dateLabel: "Fevereiro de 1998",
    isoDate: "1998-02",
    year: 1998,
    kicker: "Karatê",
    headline: "Carlos Rocha visita Marathon",
    seoTitle: "Carlos Rocha visita Marathon (Bauru, 1998)",
    description:
      "Transcrição da nota do Jornal da Cidade, de Bauru, sobre o treinamento ministrado pelo professor Carlos Rocha à equipe da Academia Marathon em 1998.",
    summary:
      "Já 5º Dan, Carlos Rocha ministra um treino para a equipe de competição da Academia Marathon, em Bauru.",
    context: [
      "Em 1998, o Jornal da Cidade, de Bauru, registrou a visita do professor Carlos Rocha, então 5º Dan, à Academia Marathon, a convite do professor Roberto A. B. Júnior, para um treino com a equipe de competição."
    ],
    scans: [
      scan(
        "jornal-da-cidade-bauru-1998-carlos-rocha-visita-marathon",
        960,
        1285,
        "Recorte do Jornal da Cidade de Bauru com foto da equipe da Academia Marathon e o título Carlos Rocha visita Marathon",
        "Recorte"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "O professor Carlos Rocha, um dos grandes nomes do karatê nacional, esteve presente na Academia Marathon, em Bauru, no último sábado, onde ministrou um treinamento específico para a equipe da academia.",
          "Rocha mora em São Paulo, está graduado no 5º Dan e foi convidado pelo professor Roberto A.B. Júnior. Além de sua técnica, aproveitou também para passar um pouco de sua experiência em competições.",
          "A equipe da Marathon está em ritmo forte de preparação para os mais variados torneios que irá disputar este ano. Entre eles, destacam-se o Campeonato Paulista, Brasileiro, Jogos Regionais e Abertos.",
          "Rocha, após sua aula, elogiou os karatecas da Marathon, principalmente pelo excelente nível técnico em que se encontram. Segundo ele, a equipe está bem condicionada fisicamente e também com o lado psicológico bem desenvolvido. Para Rocha, o equilíbrio emocional em competições fortes como Brasileiro, é fundamental."
        ]
      }
    ],
    captions: [
      "A equipe da Marathon prepara-se para disputar Paulista e Brasileiro."
    ],
    notes: [
      "O recorte não traz a data impressa. O mês e o ano seguem a identificação do acervo pessoal do Sensei."
    ]
  },
  {
    slug: "a-cidade-ribeirao-preto-1998-maior-nome-do-karate",
    outlet: "A Cidade",
    outletType: "Jornal",
    edition: "Ribeirão Preto (SP)",
    dateLabel: "25 de junho de 1998",
    isoDate: "1998-06-25",
    year: 1998,
    headline: "Maior nome do karatê brasileiro em Ribeirão Preto",
    seoTitle: "Carlos Rocha em Ribeirão Preto (A Cidade, 1998)",
    description:
      "Transcrição da matéria do jornal A Cidade, de Ribeirão Preto, sobre o curso avançado de karatê ministrado pelo Sensei Carlos Rocha em junho de 1998.",
    summary:
      "O Sensei Carlos Rocha vai a Ribeirão Preto para um curso avançado e para o 1º Encontro JKA de Karatê do Interior.",
    context: [
      "Em junho de 1998, o jornal A Cidade, de Ribeirão Preto, anunciou o Curso Avançado de Karatê ministrado pelo Sensei Carlos Rocha, a convite do prof. Roberto Sant’Anna e da Associação Brazil JKA de Karatê.",
      "Na mesma visita, o Sensei foi o palestrante principal do 1º Encontro JKA de Karatê do Interior, voltado a padronizar as técnicas do Karate Shotokan JKA como praticado no Japão."
    ],
    scans: [
      scan(
        "a-cidade-ribeirao-preto-1998-maior-nome-do-karate",
        1542,
        2200,
        "Página do jornal A Cidade de Ribeirão Preto de 25 de junho de 1998 com a manchete Maior nome do karatê brasileiro em Ribeirão Preto e foto do Sensei Carlos Rocha",
        "Página completa"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "Neste próximo final de semana, dias 27 e 28 de junho, estará em Ribeirão Preto ministrando um Curso Avançado de Karatê o professor Carlos Rocha, 5º Dan da modalidade e considerado o maior nome que o karatê já produziu no país. Ex-campeão brasileiro e campeão paulista por várias vezes, Sensei Carlão, como é mais conhecido, pertenceu à famosa Equipe Butoku-kan, liderada pelo Grã-Mestre Taketo Okuda; equipe esta, considerada imbatível dentro do universo do karatê tradicional.",
          "A convite do prof. Roberto Sant’Anna e da Associação Brazil JKA de Karatê o Sensei Carlão será o palestrante principal no 1º Encontro JKA de Karatê do Interior, com o propósito de Standartizar as técnicas do karatê Shotokan JKA, assim como ele é praticado no Japão. O karatê da JKA enfatiza primeiramente a eficiência em combate real, juntamente com a formação do caráter do praticante, contrariamente ao karatê-esporte como é divulgado, que só busca “resultados” em competições.",
          "Os interessados em participar do Curso, procurar o prof. Roberto Sant’Anna, faixa-preta 4º Dan e representante oficial da JKA na região de Ribeirão Preto, na escola de Esportes Green Planet, na rua José da Silva, 1011, próximo à rotatória do mosteiro. [telefone de contato da época omitido]"
        ]
      }
    ],
    captions: ["Sensei Carlos Rocha, em seminário no Dojô da Green Planet."]
  },
  {
    slug: "combat-sport-2001-shotokan-jka-em-sao-paulo",
    outlet: "Combat Sport",
    outletType: "Revista",
    edition: "Ano 3, nº 14, páginas 32 a 34",
    dateLabel: "Janeiro de 2001",
    isoDate: "2001-01",
    year: 2001,
    headline: "O estilo Shotokan e a Nihon Karate Kiokay JKA em São Paulo",
    byline: "Carlos Rocha",
    seoTitle: "Shotokan JKA em São Paulo, por Carlos Rocha (2001)",
    description:
      "Transcrição do artigo do Sensei Carlos Rocha na revista Combat Sport (2001) sobre a história do Karate Shotokan JKA em São Paulo, de Harada a Okuda.",
    summary:
      "Escrito pelo próprio Sensei, o artigo conta a história do Shotokan JKA em São Paulo, de Harada e Okuda à JKA Brasil.",
    context: [
      "Nesta edição da revista Combat Sport, o próprio Sensei Carlos Rocha escreveu um breve histórico do Karate Shotokan JKA em São Paulo. O texto vai da chegada do Mestre Mitsusuke Harada, nos anos 1950, ao trabalho do Mestre Taketo Okuda e à reconstrução da JKA Brasil.",
      "O artigo traz fotos do arquivo pessoal do Sensei, de 1974 a 1999, e um perfil que já indicava a Academia Mushin-Kan, na Rua Domingos de Moraes, 2216, o mesmo endereço do dojo hoje."
    ],
    scans: [
      scan(
        "combat-sport-2001-pagina-32",
        1612,
        2200,
        "Página 32 da revista Combat Sport com o texto de abertura e fotos de Mitsusuke Harada e da equipe Butoku-kan em 1974",
        "Página 32"
      ),
      scan(
        "combat-sport-2001-pagina-33",
        1588,
        2200,
        "Página 33 da revista Combat Sport com foto de Carlos Rocha e Virgilio Carolino no 1º Campeonato Oficial da FPK, em 1974",
        "Página 33"
      ),
      scan(
        "combat-sport-2001-pagina-34",
        1654,
        2200,
        "Página 34 da revista Combat Sport com fotos de mestres da JKA e o perfil do Sensei Carlos Rocha",
        "Página 34"
      ),
      scan(
        "combat-sport-2001-capa",
        1629,
        2193,
        "Capa da revista Combat Sport, ano 3, número 14, com a chamada O Estilo Shotokan e a Nihon Karate Kiokay JKA",
        "Capa"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "Em meados dos anos 50, Mestre Mitsusuke Harada - antigo aluno direto do fundador do estilo Shotokan, Gichin Funakoshi - se estabelece no Brasil, permanecendo em nosso país alguns poucos anos e iniciando os ensinamentos do Karate Shotokan aos paulistanos. Hoje Mestre Harada vive na Inglaterra, onde dirige sua própria organização à qual deu o nome de Shotokai.",
          "O estilo praticado pelo Mestre Harada em muito se diferenciava do estilo moderno desenvolvido pelo Mestre Nakayama que, após anos de estudo e análise dos movimentos, fundamentou através da JKA/NKK (Nihon Karate Kiokay ou Japan Karate Association) o estilo Shotokan praticado dentro da Associação Japonesa de Karate, única entidade reconhecida pelo equivalente ao nosso MEC, no Japão. Após a partida de Mestre Harada, chega a São Paulo Mestre Juichi Sagara, recém saído da Universidade Takudai, onde havia aprendido o Karate JKA juntamente com os mestres Sadamu Uriu, Yasutaka Tanaka, entre outros que também vieram se estabelecer no Brasil. Vários alunos desses mestres se destacaram, como Ricardo Carvalho, Luiz Watanabe, Adelino Barros Nogueira. No início dos anos 70 chega ao Brasil o primeiro mestre de Karate saído do Curso de Profissionais da JKA (Kenshusei / Shidoin-Gueiko), Mestre Taketo Okuda, enviado diretamente pelo Mestre Masatoshi Nakayama para divulgar o estilo JKA no Brasil.",
          "Mestre Takedo Okuda abre então sua academia em São Paulo, tendo como alunos futuros grandes nomes do Karate Paulista, como Yasuyuki Sasaki, Ricardo D’Elia, Ennio Vezulli, Carlos Rocha, Antonio Gomes Martins, Pedro Okuyama, Pedro Campana, Ricardo Marão, Virgilio Carolino, dentre tantos outros.",
          "Vale frisar aqui que o Prof. Ennio Vezulli, também aluno da Associação Butoku-kan do Mestre Okuda, foi o único brasileiro até hoje a se formar no mesmo curso de profissionais da JKA, vivendo no Japão durante dois anos em treinamento intensivo. Na sua volta ao Brasil, como instrutor profissional da JKA, abre sua própria academia, a Associação Augusta de Karate-do.",
          "Até meados de 1986, a JKA contava com vários representantes espalhados pelo Brasil, tais como: Rio de Janeiro - Mestres Yasutaka Tanaka e Sadamu Uriu (Também passou pelo Rio de Janeiro Mestre Takeuchi); Brasília - Mestre Higashino; Bahia / Belém do Pará - Mestre Yoshizo Machida, que ensinou na academia dos famosos irmãos Caribé).",
          "É importante lembrar que Mestre Taketo Okuda, além dos treinamentos normais, instituiu também em sua academia o Curso de Profissionais, no qual só alguns alunos eram convidados a participar, dentre eles Yasuyuki Sasaki, Ricardo D’Elia, Ennio Vezzulli, Carlos Rocha, Antonio Gomes Martins.",
          "Isso contribuiu em muito na elevação do nível do Karate Paulista dos anos 70 como se pôde notar, com a fundação da Federação Paulista de Karate. O estilo Shotokan (Butoku-kan) foi campeão por equipe e individual de 1974 a 1978.",
          "Após 1978, os campeonatos paulistas deixaram de ser por estilos e passaram a ser por academias. A JKA começa então a perder sua unidade de São Paulo. Enquanto unida, a JKA trouxe grandes nomes do Karate Mundial ao país, como: Isaka (1973), o instrutor chefe Nakayama (1974), Oishi (1976), Masahiko Tanaka, Assai e Yahara, entre outros.",
          "Após a morte do Mestre Nakayama em 1987, o Karate da JKA sofre um grande abalo, com a separação de grandes mestres dentro do Japão e consequentemente em todo o mundo.",
          "Em 1992 a JKA tinha dois grupos dentro do Japão, um dirigido pelo Mestre Assai e outro dirigido pelo Mestre Sigiura. Hoje a facção do Mestre Sigiura é a única que pode usar o logotipo e o nome Japan Karate Association, reconhecida inclusive pelo governo japonês. A organização liderada pelo Mestre Assai atualmente leva o nome de Japan Karate Shotokan (JKS).",
          "Em 1997, com a vinda do Mestre Tanaka, começa a reconstrução da JKA Brasil, tendo por representantes os Mestre Yasuyuki Sasaki, Yoshizo Machida e Carlos Rocha."
        ]
      },
      {
        heading: "Carlos Rocha (perfil publicado na revista)",
        paragraphs: [
          "Carlos Rocha - um dos representantes da JKA no Brasil - é 5º dan em exame realizado na Africa do Sul (23/03/2000), tendo por examinadores Masahiko Tanaka e Stain Schimit. É campeão sul-americano (Cone Sul 1986), brasileiro (1977) e paulista (1978). Ministrou aulas durante 10 anos para a Polícia e Comandos Especiais do Exército uruguaio. Tem 25 anos de treino direto com o Prof. Taketo Okuda. É com vasta experiência que traça esta breve história do Karate JKA paulista, no intuito de congregar todos os karatecas JKA a treinarem juntos, visando um crescente aprimoramento técnico. Carlos Rocha ministra cursos técnicos a quaisquer interessados independente de estarem ou não filiados a alguma federação.",
          "Contato: Academia Mushin-Kan, Rua Domingos de Moraes, 2216, Vila Mariana - São Paulo - SP - CEP 04056-000. [telefone da época omitido]"
        ]
      },
      {
        heading: "Box da redação",
        paragraphs: [
          "Dos mestres retratados nesta matéria, temos as seguintes informações: Taketo Okuda atua na Academia Butoku-kan, em São Paulo; Roberto Sant’anna ensina na Academia Green Planet, em Ribeirão Preto (SP); Marcio Chaer atualmente treina na academia Mushin-Kan; Enio Vezzulli é proprietário da famosa marca Meikyo de kimonos; Sasaki preenche uma agenda repleta de atividades, é professor da USP e da Academia Lembu-kan e representa a JKA no Brasil; Tomeji Ito dá aulas na Academia Botuku-kai, em São Paulo; no Karate Tradicional do Rio de Janeiro, Tanaka continua sendo o nome forte; de Ricardo Marão e Kawamura Sensei estamos sem contato atual."
        ]
      }
    ],
    captions: [
      "Mestre Mitsusuke Harada (1978 - Lisboa). Foto: cedida por Marcio Chaer.",
      "A partir da esquerda: Taketo Okuda, Takeshi Oishi e Carlos Rocha (Uruguai - 1980).",
      "Da esq. p/ dir.: Mitsuji, Ennio Vezulli, Morio Seiki, Taketo Okuda, Sasaki, Roberto Garita, Carlos Rocha, Ricardo D’elia, Antonio Gomes (1974).",
      "À dir. Carlos Rocha e à esq. Virgilio Carolino no 1º Campeonato Oficial da recém formada FPK. Local: Monte Líbano, 1974.",
      "Esq. p/ dir.: Carlos Rocha, Massahiko Tanaka e Roberto Sant’anna (São José do Rio Preto - 1999).",
      "Esq. p/ dir.: atletas Ennio Vezzulli, Carlos Rocha e Ricardo Marão, em pé os professores Kawamura, Taketo Okuda e Tomeji Ito (equipe campeã kata no Camp. Bras. de 1977 - Ginásio do Ibirapuera - SP).",
      "Esq. p/ dir.: Sasaki, Tanaka, Assai e Taketo Okuda."
    ],
    notes: [
      "A grafia dos nomes segue a revista, que alterna formas como Vezulli/Vezzulli e Okuda/“Takedo” Okuda."
    ]
  },
  {
    slug: "kiai-mae-geri-a-arma-letal-do-karate",
    outlet: "Kiai",
    outletType: "Revista",
    edition: "Ano VII, nº 38, páginas 22 a 26",
    dateLabel: "Edição nº 38",
    headline: "Mae-Geri: a arma letal do karatê",
    byline: "Carlos Rocha",
    seoTitle: "Mae-Geri: a arma letal do karatê (Revista Kiai)",
    description:
      "Transcrição do artigo técnico do Sensei Carlos Rocha na revista Kiai sobre o Mae-Geri: etapas de execução, variações e o espírito do treino.",
    summary:
      "Artigo técnico do Sensei sobre o chute frontal, das etapas de execução às variações Kizami, Mae e Oi-Geri.",
    context: [
      "A pedido da revista Kiai, o Sensei Carlos Rocha escreveu e demonstrou, em fotos, a execução do Mae-Geri, o chute frontal do karatê.",
      "O texto divide o aprendizado em quatro etapas, apresenta as variações Kizami-Geri, Mae-Geri e Oi-Geri e defende o treino exaustivo como caminho da arte marcial."
    ],
    scans: [
      scan(
        "kiai-38-mae-geri-pagina-22",
        1508,
        2200,
        "Página de abertura da matéria Mae-Geri na revista Kiai, com foto histórica de um chute frontal",
        "Página 22"
      ),
      scan(
        "kiai-38-mae-geri-pagina-23",
        1522,
        2200,
        "Página 23 da revista Kiai com o título A arma letal do karatê e o texto de introdução por Carlos Rocha",
        "Página 23"
      ),
      scan(
        "kiai-38-mae-geri-pagina-24",
        1599,
        2200,
        "Página 24 da revista Kiai com foto de competição e o Sensei Carlos Rocha demonstrando a primeira etapa do Mae-Geri",
        "Página 24"
      ),
      scan(
        "kiai-38-mae-geri-pagina-25",
        1552,
        2200,
        "Página 25 da revista Kiai com as etapas 2 a 4 do Mae-Geri e foto do Sensei executando o chute",
        "Página 25"
      ),
      scan(
        "kiai-38-mae-geri-pagina-26",
        1615,
        2200,
        "Página 26 da revista Kiai com sequências de fotos do Kizami-Geri, Mae-Geri e Oi-Geri",
        "Página 26"
      ),
      scan(
        "kiai-38-capa",
        1211,
        1600,
        "Capa da revista Kiai, ano VII, número 38, com a chamada Mae-Geri, a arma letal do karatê",
        "Capa"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "Sem a menor dúvida o karatê é hoje, a modalidade que ocupa o maior espaço em nossas edições, e a pedido de nossos milhares de leitores, voltamos a publicar matérias técnicas sobre a modalidade. Longe de tentar ensinar algo novo, a professores e praticantes estamos com essa iniciativa, buscando apenas mostrar aspectos técnicos e formas distintas de aplicação de cada golpe.",
          "Para atender nossos leitores, convidamos o professor Carlos Rocha, um praticante acima da média, que busca sempre descobrir e extrair o máximo possível do aprendizado e da prática do karatê-dô.",
          "O Mae-Geri, como qualquer outra técnica de arte marcial é extremamente simples de ser entendido, porém para adentrar no verdadeiro conhecimento é necessário o treinamento de uma vida.",
          "O primeiro passo importante para se “conhecer” profundamente uma técnica de arte marcial é ter “shoshin”, mente de um eterno aprendiz, um papel em branco no qual se possam inscrever os conhecimentos móveis dos segredos da arte marcial escolhida, neste caso o karatê.",
          "Ao se praticar diariamente o Mae-Geri e suas variações, surgirão muitas dúvidas, dificuldades na sua aplicação, até que esta técnica se torne natural e intuitiva.",
          "Podemos constatar esta dificuldade, assistindo às competições de hoje onde raramente esta técnica é usada, quando o karatê é encarado como um esporte competitivo, onde a preocupação é vencer o adversário. O Mae-Geri é uma técnica arriscada, onde é necessário um espírito de guerreiro e não de competidor. O guerreiro é aquele que está sempre tentando vencer a si mesmo, abandonando sempre o conhecido, o seguro, para penetrar no desconhecido, no arriscado, em última instância, no vazio.",
          "Quando o Mae-Geri se tornar natural e intuitivo é necessário treiná-lo no kumitê. O karatê dispõe do Kihon-Ippon Kumitê e do Jiu-Ippon Kumitê, para o treinamento do Mae-Geri.",
          "Enfim, o Mae-Geri, ou o karatê como um todo deve ser treinado exaustivamente, além dos limites do corpo, pois ao se ultrapassar os limites do corpo, adentrados ao conhecimento das forças espirituais, que são verdadeiros objetivos da verdadeira arte marcial, o de restabelecer nossa ligação com o universo, nos ajudando a concretizar nosso incrível potencial e a sentir a alegria de ser, Oss!",
          "O Mae-Geri é um chute frontal, que pode ser aplicado partindo-se de várias posições ou bases características do karatê (kokutsu, Nekoashi, etc.) porém a mais apropriada e eficiente é partindo-se do Zenkutsu.",
          "O Mae-Geri é uma técnica de chute usado em várias outras artes marciais, mas talvez o karatê é o que mais aprimorou a arte deste chute.",
          "Para aprendê-lo corretamente passaremos a apresentar as várias etapas da execução deste chute."
        ]
      },
      {
        heading: "1ª etapa",
        paragraphs: [
          "Fique em pé (pés juntos) e flexione somente os tornozelos e joelhos, deixando o tronco na posição vertical em relação ao solo. Estas flexões do joelho e tornozelo também definem a altura do quadril em relação ao solo, quando da aplicação do Mae-Geri."
        ]
      },
      {
        heading: "2ª etapa",
        paragraphs: [
          "Levante uma das pernas, elevando e flexionando o máximo possível o joelho da perna que você levantou. Observe que a perna que ficou no solo permaneça na posição (flexionada) da 1ª etapa, evitando assim levantar o quadril em relação ao solo; ao levantar a perna, prepare o pé levantando os dedos para chutar com o kochi do pé."
        ]
      },
      {
        heading: "3ª etapa",
        paragraphs: [
          "Projete a parte inferior da perna a frente para o alto o mais longe possível, projetando também o quadril a frente, sem dobrar o tronco (ponto importante). Observe que ao chutar o pé de base não gire para o lado fazendo escapar a força do quadril. O pé ao atingir o alvo deve estar com os dedos levantados (kochi). Após o chute volte a flexionar a perna, mantendo a altura do joelho, antes de voltar à posição inicial.",
          "Importante: A repetição deste fundamento deve ser praticado exaustivamente para que o corpo aprenda a executá-lo com perfeição."
        ]
      },
      {
        heading: "4ª etapa",
        paragraphs: [
          "Aqui começa praticamente a execução do Mae-Geri. Fique agora na posição Zenkutsu e a partir desta posição pratique as etapas 1, 2 e 3.",
          "Ao executar o Mae-Geri observe que o chute deve ser penetrante. Mantenha o tronco reto evitando projetá-lo para trás. Procure chutar o mais longe possível fortalecendo assim a perna de base. Não levante o quadril e transfira o peso do corpo ao chute. O Mae-Geri é um golpe apoiado nos músculos dos glúteos e abdominais. Não gire o pé de base, para não escapar a força do quadril. Ao chutar longe, além de fortalecer a perna de base, você aprende a bascular o quadril, sem dobrar o tronco, ou projetá-lo excessivamente para trás. Não mude nunca a altura do quadril em relação ao solo, durante a execução do chute."
        ]
      },
      {
        heading: "As variações do chute frontal",
        paragraphs: [
          "O chute frontal Geri pode ser dividido basicamente em:",
          "1 - Kizami-Geri: chute usado a partir da perna da frente.",
          "2 - Mae-Geri: chute usado a partir da perna de trás.",
          "3 - Oi-Geri: chute usado a partir da perna de trás com o deslocamento de um passo à frente."
        ]
      }
    ],
    notes: [
      "As páginas digitalizadas não trazem o mês e o ano da edição. Por isso a data aparece só como edição nº 38."
    ]
  },
  {
    slug: "kiai-oizuki-simplicidade-com-extrema-eficiencia",
    outlet: "Kiai",
    outletType: "Revista",
    edition: "Ano VIII, nº 39, páginas 4 a 6",
    dateLabel: "Edição nº 39",
    headline: "Oizuki: simplicidade com extrema eficiência",
    byline: "Carlos Rocha",
    seoTitle: "Oizuki, por Carlos Rocha (Revista Kiai)",
    description:
      "Transcrição do artigo do Sensei Carlos Rocha na revista Kiai sobre o Oizuki: postura, deslocamento, sincronização do soco e o sentido do treino.",
    summary:
      "Artigo técnico do Sensei sobre o soco com avanço, com fotos feitas no dojo Mushinkan.",
    context: [
      "Na edição seguinte da revista Kiai, o Sensei Carlos Rocha voltou com um artigo técnico sobre o Oizuki, o soco com avanço de um passo.",
      "As fotos foram feitas no dojo Mushinkan e mostram, passo a passo, o deslocamento e a sincronização entre o passo e o soco. O texto termina com uma reflexão sobre o karatê como prática e não como teoria."
    ],
    scans: [
      scan(
        "kiai-39-oizuki-pagina-4",
        1505,
        2200,
        "Página de abertura da matéria Oizuki na revista Kiai, com o Sensei Carlos Rocha socando diante do banner do Mushinkan",
        "Página 4"
      ),
      scan(
        "kiai-39-oizuki-pagina-5",
        1551,
        2200,
        "Página 5 da revista Kiai com fotos numeradas do Sensei Carlos Rocha executando o Oizuki no dojo Mushinkan",
        "Página 5"
      ),
      scan(
        "kiai-39-oizuki-pagina-6",
        1621,
        2159,
        "Página 6 da revista Kiai com três karatecas executando o Oizuki em sincronia e detalhes da mão fechada",
        "Página 6"
      ),
      scan(
        "kiai-39-capa",
        1198,
        1600,
        "Capa da revista Kiai, ano VIII, número 39, com a chamada Oizuki, simplicidade com extrema eficiência",
        "Capa"
      )
    ],
    transcript: [
      {
        paragraphs: [
          "Oizuki é a técnica de socar avançando um passo, terminando na posição Zenkutsu. Para treinar esta técnica simples, mas de difícil execução, siga as etapas seguintes:",
          "Em pé (posição shinzentai) relaxe o corpo, tire a força dos ombros, relaxe ligeiramente os joelhos e sinta as plantas dos pés totalmente apoiadas no chão. Concentre toda a energia no tandem (ver figura).",
          "Pratique então o chiokuzuki (soco em pé). Ao socar não esqueça de manter os cotovelos juntos ao corpo e sempre atrás dos pulsos. Concentre-se e mantenha o foco do soco (judan/chiudan etc). Pratique constantemente até dominar a técnica de socar em pé.",
          "Em guedan-barai, concentre-se agora na posição zenkutsu, as plantas dos pés devem estar completamente apoiadas no chão. Perna da frente flexionada mantendo a borda externa do pé dianteiro direcionado à frente. Pé de trás o máximo virado à frente para facilitar a movimentação do quadril. O corpo relaxado, energia concentrada no tonden. Inicie o passo observando o seguinte: (foto 3)"
        ]
      },
      {
        heading: "O passo, de A a I",
        paragraphs: [
          "A - Mantenha a mesma altura durante todo o passo.",
          "B - Dependendo do kamae a perna da frente (direita/esquerda) será o que executará todo o esforço de deslocamento.",
          "C - A perna dianteira puxa o corpo à frente, até o meio da passada, mantenha o corpo ainda de lado, não altere a altura inicial (foto 4).",
          "D - Para que a puxada da perna seja eficiente mantenha o pé dianteiro agarrado no chão e virado para frente (detalhe foto 7).",
          "E - Quando a passada estiver no meio, os pés juntos, passe agora a empurrar o corpo com a mesma perna esquerda, à frente, para que o movimento alcance a máxima velocidade.",
          "F - A partir do meio da passada comece a aplicar o movimento do soco treinado na etapa 1 para que o soco e o passo terminem exatamente sincronizados.",
          "G - Estique completamente e instantaneamente a perna esquerda para que ela possa apoiar o soco. Observe que o pé que ficou atrás no término do soco fique o máximo possível virado à frente, para apoiar o quadril que também deve estar virado para frente (foto 5 e 6), força máxima no tanden.",
          "H - Importante: durante todo o movimento do oizuki, a energia deve ser mantida no tanden evitando assim que o corpo flutue e fique leve, não conseguindo imprimir força no soco.",
          "I - Manter o tronco sempre vertical do solo, cabeça firme, orelhas em cima dos ombros, queixo ligeiramente tencionado junto do corpo, lembre-se que toda a força do golpe em karatê, depende de velocidade portanto, use a máxima possível.",
          "Teoricamente se você seguir estes passos você executou um bom Oizuki.",
          "Na prática, porém, você terá de repetir esta técnica milhares de vezes. Quanto mais praticá-la mais verá e sentirá quão difícil é executar um bom oizuki. Treine, treine e treine!"
        ]
      },
      {
        heading: "Karatê é oizuki",
        paragraphs: [
          "Oizuki é todo karatê. É a mesma coisa.",
          "Agora que tomou conhecimento teórico de como fazer tecnicamente um “oizuki”, treine uma vida exaustivamente e começará a saber o que o karatê “não é”.",
          "Saber o que é o karatê, é impossível, pois aqui conheça o reinado de “ser”.",
          "Você não pode conhecer karatê, mas pode “ser” karatê, e nesta dimensão está apenas a “saber”, não há o conhecimento, nem tão pouco o conhecedor. Este “saber” é totalmente diferente de todos os outros conhecimentos.",
          "Nesta dimensão saber e ser são o mesmo.",
          "Não há nem mesmo como explicar ou ensinar, porque conhecimento é morto e é uma coisa, está na mente.",
          "Pior ainda, conhecimento só existe do passado, e este tipo de saber, nunca está no passado, nem no futuro.",
          "É agora, é aqui, é o momento que é eterno, não pode ser explicado.",
          "Entenda, feche seus olhos e “saiba”. Abra seus olhos e “saiba”, agora não abra, nem feche e ainda “saberá”, isto é ser, é saber.",
          "Karatê só existe nesta dimensão, e não pode estar contido em nenhum livro. E isto não é teoria é prática infinita."
        ]
      }
    ],
    notes: [
      "As páginas digitalizadas não trazem o mês e o ano da edição. Por isso a data aparece só como edição nº 39.",
      "No acervo não há a página com as fotos 1 e 2 citadas no texto."
    ]
  }
];

export function getPressArticle(slug: string) {
  return pressArticles.find((article) => article.slug === slug);
}

export const pressHref = (slug: string) => `/conteudos/acervo/${slug}`;

export const pressThumbnail = (slug: string) =>
  `/images/acervo/thumb-${slug}.webp`;

export function toContentPost(article: PressArticle): ContentPost {
  return {
    slug: article.slug,
    category: "ACERVO",
    date: article.year ? String(article.year) : article.dateLabel,
    title: article.headline,
    summary: article.summary,
    imageLabel: `Recorte · ${article.outlet}`,
    image: pressThumbnail(article.slug),
    imagePosition: "center top",
    href: pressHref(article.slug)
  };
}

export const pressPosts: ContentPost[] = pressArticles.map(toContentPost);
