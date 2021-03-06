var wordsTest = [
  {
    'input': ['auto','bylina','mama','električka','lampa'],
    'output': ['zemiaky','auto','vidlička','bylina','lampa','mama','vlasy','električka','mirka','stránka']
  },
  {
    'input': ['jablko','vlak','hruška','zajac','pero'],
    'output': ['jablko','pero','kôň','luster','vlak','hruška','skrutka','kniha','zajac','flaša']
  },
  {
    'input': ['stolička','kakao','plechovka','stôl','mikina'],
    'output': ['sviečka','stolička','pohár','plechovka','hodiny','kakao','mikina','sieť','kľúč','stôl']
  },
  {
    'input': ['šporák','mobil','mikrovlnka','paplón','škola'],
    'output': ['mikrovlnka','ceruzka','šporák','dvere','hokej','škola','lopta','paplón','pláž','mobil']
  },
  {
    'input': ['futbal','zmrzlina','obal','tenis','lyžička'],
    'output': ['lyžička','para','futbal','poduška','jahoda','zmrzlina','oliva','obal','disketa','tenis']
  },
];

var testWordsTest = {
    'input': ['kábel','hydina','obed','asfalt','podlaha'],
    'output': ['fazuľa','papier','modrina','kábel','farba','asfalt','železo','hydina','obed','podlaha']
}

var testSentence = {
  level: 0,
  data: [
      {
        id: 1,
        sentence: 'Mojím snom je byť opravárom.',
        hidden_sentence: 'Mojím  *** je byť opravárom.',
        options: ['snom', 'životom', 'osudom'],
        correct: 'snom'
      },
      {
        id: 2,
        sentence: 'Aplikácia nefungovala, ako sme čakali.',
        hidden_sentence: 'Aplikácia nefungovala, ako sme ***.',
        options: ['dúfali', 'očakávali', 'čakali'],
        correct: 'čakali'
      },
      {
        id: 3,
        sentence: 'Moja rodina chodieva venčiť mojich psov.',
        hidden_sentence: 'Moja *** chodieva venčiť mojich psov.',
        options: ['kolegyňa', 'priateľka', 'rodina'],
        correct: 'rodina'
      },
      {
        id: 4,
        sentence: 'Stoj! Zakričal policajt na zlodeja.',
        hidden_sentence: 'Stoj! *** policajt na zlodeja.',
        options: ['Zakričal', 'Vykríkol', 'Zakýval'],
        correct: 'Zakričal'
      },
      {
        id: 5,
        sentence: 'Máme málo peňazí, aj bez nich sa však vieme potešiť.',
        hidden_sentence: 'Máme málo ***, aj bez nich sa však vieme potešiť.',
        options: ['priateľov', 'peňazí', 'hier'],
        correct: 'peňazí'
      }
    ]
  }


var sentences = [
  {
    level: 1,
    data: [
      {
        id: 1,
        sentence: 'Mama má Evu.',
        hidden_sentence: 'Mama má ***',
        options: ['mamu', 'Evu', 'sestru'],
        correct: 'Evu'
      },
      {
        id: 2,
        sentence: 'Dom na kopci.',
        hidden_sentence: '*** na kopci.',
        options: ['Dom', 'Strom', 'Kopec'],
        correct: 'Dom'
      },
      {
        id: 3,
        sentence: 'Škola je skvelá.',
        hidden_sentence: 'Škola je ***.',
        options: ['dobrá', 'ťažká', 'skvelá'],
        correct: 'skvelá'
      },
      {
        id: 4,
        sentence: 'Dnes je pekne',
        hidden_sentence: 'Dnes *** pekne.',
        options: ['je', 'nieje', 'bolo'],
        correct: 'je'
      },
      {
        id: 5,
        sentence: 'Zelená je tráva',
        hidden_sentence: 'Zelená je ***.',
        options: ['voda', 'tráva', 'stena'],
        correct: 'tráva'
      }
    ]
  },
  {
    level: 2,
    data: [
      {
        id: 1,
        sentence: 'Biely linajkový zošit leží na lavici.',
        hidden_sentence: 'Biely linajkový zošit leží na ***.',
        options: ['stole', 'stoličke', 'lavici'],
        correct: 'lavici'
      },
      {
        id: 2,
        sentence: 'Podlaha je mokrá pretože sa ráno umyla.',
        hidden_sentence: 'Podlaha je mokrá *** sa ráno umyla.',
        options: ['odkedy', 'pretože', 'lebo'],
        correct: 'pretože'
      },
      {
        id: 3,
        sentence: 'Biele stoličky boli v jednej miestnosti.',
        hidden_sentence: 'Biele stoličky *** v jednej miestnosti.',
        options: ['boli', 'zhromaždili', 'zoskupili'],
        correct: 'boli'
      },
      {
        id: 4,
        sentence: 'Prednášková hala bola plná študentov.',
        hidden_sentence: 'Prednášková *** bola plná študentov.',
        options: ['hala', 'sála', 'miestnosť'],
        correct: 'hala'
      },
      {
        id: 5,
        sentence: 'Ťahavá fazuľa sa obtáča okolo palice.',
        hidden_sentence: 'Ťahavá fazuľa sa *** okolo palice.',
        options: ['obtáča', 'omotáva', 'ťahá'],
        correct: 'obtáča'
      },
    ],
  },
  {
    level: 3,
    data: [
      {
        id: 1,
        sentence: 'Deti obstali svojho učiteľa. Obľubujem sladké a štavnaté ovo­cie.',
        hidden_sentence: 'Deti *** svojho učiteľa. Obľubujem sladké a štavnaté ovo­cie.',
        options: ['zastali', 'spoznali', 'obstali'],
        correct: 'obstali'
      },
      {
        id: 2,
        sentence: 'V obilí žijú sysle. Učiteľka napísala veľa dobrých vysvedčení.',
        hidden_sentence: 'V obilí žijú sysle. Učiteľka *** veľa dobrých vysvedčení.',
        options: ['vypísala', 'napísala', 'rozdala'],
        correct: 'napísala'
      },
      {
        id: 3,
        sentence: 'Vyhral som v skákaní. Na Ponitrí sa nachádzajú náleziská uhlia.',
        hidden_sentence: '*** som v skákaní. Na Ponitrí sa nachádzajú náleziská uhlia.',
        options: ['Vyhral', 'Zvíťazil', 'Najlepší'],
        correct: 'Vyhral'
      },
      {
        id: 4,
        sentence: 'Mačka drieme v prítmí domu. Na Slovensku máme veľa pekných pohorí.',
        hidden_sentence: 'Mačka drieme v prítmí domu. Na Slovensku *** veľa pekných pohorí.',
        options: ['nájdeme', 'uvidíme', 'máme'],
        correct: 'máme'
      },
      {
        id: 5,
        sentence: 'Vtáčence sa ukryli v tŕní. Starý otec sa dožil dlhého veku v zdraví.',
        hidden_sentence: 'Vtáčence sa *** v tŕní. Starý otec sa dožil dlhého veku v zdraví.',
        options: ['usadili', 'ukryli', 'skryli'],
        correct: 'ukryli'
      },
    ],
  },
  {
    level: 4,
    data: [
      {
        id: 1,
        sentence: 'Preplávali sme ústím rieky. Považím tečie rieka Váh. Babička sa zvítala s deťmi. Na výlete sme prešli pohorím až do Pezinka.',
        hidden_sentence: 'Preplávali sme ústím rieky. Považím *** rieka Váh. Babička sa zvítala s deťmi. Na výlete sme prešli pohorím až do Pezinka.',
        options: ['preteká', 'preniká', 'tečie'],
        correct: 'tečie'
      },
      {
        id: 2,
        sentence: 'Pri malom húsati sa zjavil had. Údolím sa ťahá pás kosodreviny. V mori žije veľa živočíchov. Užitočné lienky chytajú vošky.',
        hidden_sentence: 'Pri malom húsati sa zjavil had. Údolím sa ťahá pás kosodreviny. V mori žije veľa živočíchov. *** lienky chytajú vošky.',
        options: ['Červené', 'Užitočné', 'Početné'],
        correct: 'Užitočné'
      },
      {
        id: 3,
        sentence: 'Ako kuchár predviedol v cudzine svoje umenie jedlami z hydiny. Cestoval loďou po mori. Späť z ostrova letel v dobrom počasí.',
        hidden_sentence: 'Ako kuchár *** v cudzine svoje umenie jedlami z hydiny. Cestoval loďou po mori. Späť z ostrova letel v dobrom počasí.',
        options: ['predvádzal', 'predvádza', 'predviedol'],
        correct: 'predviedol'
      },
      {
        id: 4,
        sentence: 'Včely priletúvali na púpavy. Naberali si sladkej šťavy. Srnky sa prichádzajú napiť do rieky vody. V lese sa najedli potravy.',
        hidden_sentence: 'Včely priletúvali na púpavy. Naberali si sladkej šťavy. Srnky sa prichádzajú napiť do *** vody. V lese sa najedli potravy.',
        options: ['rieky', 'potoka', 'jazera'],
        correct: 'rieky'
      },
      {
        id: 5,
        sentence: 'Dievčatá sa stretnú v Považskej Bystrici. Obe sú veľké parádnice. Často chodie­vajú v zime v teplej baranici. Vonku sneží.',
        hidden_sentence: 'Dievčatá sa stretnú v Považskej Bystrici. Obe sú veľké parádnice. *** chodie­vajú v zime v teplej baranici. Vonku sneží.',
        options: ['Všetky', 'Mnohé', 'Často'],
        correct: 'Často'
      },
    ]
  },
  {
    level: 5,
    data: [
      {
        id: 1,
        sentence: 'Na jar sa liahnu mláďatá. Alicka má veľa radosti z maličkého húsaťa. Zobáčikom si šklbe zo zelenej trávy. Jej mačka sedáva na haluzi. Sníva o chutnej myši. Mi­nule ju vo sne naháňala po ďalekej stepi. Alici sa na tvári zjavil úsmev.',
        hidden_sentence: 'Na jar sa liahnu mláďatá. Alicka má veľa radosti z maličkého húsaťa. Zobáčikom si šklbe zo zelenej trávy. Jej mačka sedáva na haluzi. Sníva o chutnej myši. Mi­nule ju vo sne naháňala po *** stepi. Alici sa na tvári zjavil úsmev.',
        options: ['ďalekej', 'suchej', 'trávnatej'],
        correct: 'ďalekej'
      },
      {
        id: 2,
        sentence: 'Hlavou mi bežali myšlienky. Danici sme blahoželali k sviatku pestrou kyticou. Urobili sme ju zo zmesi kvetín. Boli v nej snežienky, fialky a prvosienky. Vy­zdobili sme ju maslami. Spolu s kamarátkami sme mali z oslavy veľa radosti.',
        hidden_sentence: 'Hlavou mi bežali myšlienky. Danici sme blahoželali k sviatku pestrou kyticou. Urobili sme ju *** zmesi kvetín. Boli v nej snežienky, fialky a prvosienky. Vy­zdobili sme ju maslami. Spolu s kamarátkami sme mali z oslavy veľa radosti.',
        options: ['pomocou', 'zo', 'použitím'],
        correct: 'zo'
      },
      {
        id: 3,
        sentence: 'Vtáčiky spievajú pekné pesničky. Ich melódia sa ozýva horou aj dolinami. Ku­kučke sa podarilo uloviť tučné larvy hmyzu. Podelí sa so svojimi mláďatami? Vrany vyhrabávajú v zemi dážďovky. Lastovičky zasa v letku chytajú muchy.',
        hidden_sentence: '*** spievajú pekné pesničky. Ich melódia sa ozýva horou aj dolinami. Ku­kučke sa podarilo uloviť tučné larvy hmyzu. Podelí sa so svojimi mláďatami? Vrany vyhrabávajú v zemi dážďovky. Lastovičky zasa v letku chytajú muchy.',
        options: ['Sláviky', 'Drozdíky', 'Vtáčiky'],
        correct: 'Vtáčiky'
      },
      {
        id: 4,
        sentence: 'Viem vytvoriť pekné kresby aj maľby. Niekedy maľujeme obraz krajiny. Včera sme kreslili dve brezy podľa predlohy. V telocvični nosím cvičky. Z násobilky mám samé jednotky. Učíme sa aj o osi uhla. Nemýľte sa! Nemyslím tým osu.',
        hidden_sentence: 'Viem vytvoriť pekné kresby aj maľby. Niekedy maľujeme obraz krajiny. *** sme kreslili dve brezy podľa predlohy. V telocvični nosím cvičky. Z násobilky mám samé jednotky. Učíme sa aj o osi uhla. Nemýľte sa! Nemyslím tým osu.',
        options: ['Včera', 'Minule', 'Nedávno'],
        correct: 'Včera'
      },
      {
        id: 5,
        sentence: 'Murári práve murovali steny. Práca im išla od ruky. Dvaja elektrikári zasa zavá­dzali elektriku do murovky. Obe povolania sa mi páčili. Cestou k nášmu domu sme videli, ako piloti šikovne ovládali svoje lietadlá. Chcel by som byť to i to.',
        hidden_sentence: 'Murári práve murovali steny. Práca im išla od ruky. Dvaja elektrikári zasa zavá­dzali elektriku do murovky. Obe povolania sa mi páčili. Cestou k nášmu domu sme ***, ako piloti šikovne ovládali svoje lietadlá. Chcel by som byť to i to.',
        options: ['sledovali', 'pozorovali', 'videli'],
        correct: 'videli'
      },
    ]
  }
]

var images = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'
]

function timer(level) {
  switch(level) {
    case 1:
        return 2000;
    case 2:
        return 4000;
    case 3:
        return 7000;
    case 4:
        return 10000;
    case 5:
        return 14000;
    default:
        return 10000;
  }
}

var group = 0;
var sentence = 0;
var results = 1;
var points = 0;

function answer(id) {
  if (id == 'x') {
    sendEvent('NO_ANSWER');
    points += 1;
  } else if (sentences[group].data[sentence].correct == sentences[group].data[sentence].options[id]) {
    sendEvent('OK');
    points += 3;
  } else {
    sendEvent('WRONG');
  }

  sentence += 1;
  if(sentence == 5) {
    showSecondary();  
  }
/*  if(group == 5) {
    sendEvent('KONIEC_BODY_' + points.toString());
    stopExperiment();
  }*/
  if(results == 1) {
    show();
  }
}

function answerReaction(id) {
  if(id == 0) {
    console.log('disagree');
  } else {
    console.log('agree');
  }
  //set
  showSecondPart(); 
}

function answerSecondaryTask() {
  //get checked words
  var answer = 'answer_secundary';
  var checkboxesChecked = [];
  //get checked elements
  for(var i=0; i<10; i++) {
    if(document.getElementById('c'+i.toString()).checked) {
      answer = answer.concat('_'+document.getElementById('sec_option_'+i.toString()).textContent);
    }
  }  
  //send event
  sendEvent(answer);   
  //go next iteration   
  results = 1;  

  if(group == 6){
    sendEvent('KONIEC_BODY_' + points.toString());
    stopExperiment();
  } else {
  show(); 
  }
}


function show() {
  img = randomize(images)[0];
  document.body.style.backgroundImage = "url('screens/" + img + "')";

  word = wordsTest[group].input[sentence];
  sentence_group = sentences[group];

  document.getElementById('options').style.display = "none";
  document.getElementById('sentence').style.display = "none";
  document.getElementById('hidden_sentence').style.display = "none";
  document.getElementById('secundary_task').style.display = "none";
  document.getElementById('word').innerHTML = word;
  document.getElementById('word').style.display = "block";
  sendEvent('word_' + word + '_screen_' + img);

  setTimeout(function() {
    document.getElementById('word').style.display = "none";
    document.getElementById('sentence').innerHTML = sentence_group.data[sentence].sentence;
    document.getElementById('sentence').style.display = "block";
    sendEvent('sentence_level_' + sentence_group.level.toString() + '_id_' + sentence_group.data[sentence].id.toString());
  }, 2000);

  setTimeout(function() {
    document.getElementById('sentence').style.display = "none";
    document.getElementById('hidden_sentence').innerHTML = sentence_group.data[sentence].hidden_sentence;
    document.getElementById('hidden_sentence').style.display = "block";
    document.getElementById('option_0').innerHTML = sentence_group.data[sentence].options[0];
    document.getElementById('option_1').innerHTML = sentence_group.data[sentence].options[1];
    document.getElementById('option_2').innerHTML = sentence_group.data[sentence].options[2];
    document.getElementById('options').style.display = "block";
    sendEvent('options_level_' + sentence_group.level.toString() + '_id_' + sentence_group.data[sentence].id.toString());
  }, timer(sentence_group.level) + 2000);
}

function showSecondary() {
  document.getElementById('options').style.display = "none";
  document.getElementById('hidden_sentence').style.display = "none";
  document.getElementById('sentence').style.display = "none";
  document.getElementById('secundary_task').style.display = "block";
  document.getElementById('secundary_task').style.textAlign = "left";
  //set all options not chceked
  var checkboxes = document.getElementsByTagName('input');
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
      }
  }

  //input posssible worlds
  document.getElementById(('sec_option_0')).innerHTML = wordsTest[group].output[0];
  document.getElementById(('sec_option_1')).innerHTML = wordsTest[group].output[1];
  document.getElementById(('sec_option_2')).innerHTML = wordsTest[group].output[2];
  document.getElementById(('sec_option_3')).innerHTML = wordsTest[group].output[3];
  document.getElementById(('sec_option_4')).innerHTML = wordsTest[group].output[4];
  document.getElementById(('sec_option_5')).innerHTML = wordsTest[group].output[5];
  document.getElementById(('sec_option_6')).innerHTML = wordsTest[group].output[6];
  document.getElementById(('sec_option_7')).innerHTML = wordsTest[group].output[7];
  document.getElementById(('sec_option_8')).innerHTML = wordsTest[group].output[8];
  document.getElementById(('sec_option_9')).innerHTML = wordsTest[group].output[9];
  results = 0;
  group +=1;
  sentence = 0;
}

function randomize(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function runTest() {
  randomize(wordsTest);
  randomize(sentences);
  wordsTest.unshift(testWordsTest);
  sentences.unshift(testSentence);
  show(wordsTest[0].input[0], sentences[0]);
}

function stopExperiment() {
  setTimeout(function() {
    window.location.href = "end.html?points=" + points;
  }, 1050);
}

function getPoints() {
  var backlink = location.search.split('points=')[1];
  document.getElementById('points').innerHTML = backlink;
}