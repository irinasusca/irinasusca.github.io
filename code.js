let dog;

//NVM fac mai multe doar ca cu marimi diferite...
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    document.getElementById('year').textContent="Anul " + Math.round((window.pageYOffset / (document.body.offsetHeight - window.innerHeight)*1200+200));
    dog=Math.round((window.pageYOffset / (document.body.offsetHeight - window.innerHeight)*1200+200));
    if(dog<380) {
        document.body.style.setProperty('--my-var', 100);
        document.getElementById('fill-color').style.backgroundColor="#EAC485";
    }
    
    else if(dog<480) {

        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#AA857A";

    }
    else if(dog<580) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#936435";
    }

    else if(dog<680) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#81241F";
    }

    else if(dog<780) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#362A2C";

    }
    else if(dog<880) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#6C3D35";
    }
    else if(dog<980) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#B04130";
    }
    else if(dog<1080) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#826E49";
    }
    else if(dog<1180) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#CB9C53";
    }
    else if(dog<1280) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="#EAC485";
    }
    
  }, false);


  ///SLIDER

  /*const slider = document.querySelector('.slider-container');
 

  const buttonRight = document.querySelector("slideRight");
  const buttonLeft = document.querySelector("slideLeft");


  buttonRight.addEventListener('click', () => {
    slider.scrollLeft += slider.offsetWidth;
  });
  buttonLeft.addEventListener('click', () => {
    slider.scrollLeft -= slider.offsetWidth;
  });
*/

const slideLeftButton1 = document.querySelector('.slideLeft');
const slideRightButton1 = document.querySelector('.slideRight');


const infoContainer = document.querySelector('#info');

// initialize the current slide index
let currentSlideIndex1 = 0;

// define the slide content
const slides1 = [
    '<div class="info-box">Goții au fost un popor germanic răsăritean. În secolele al III-lea și al IV-lea,au reprezentat o mare problemă pentru Imperiul Roman, începând cu momentul retragerii lui Aurelian din Dacia. După anul 200 s-au împărțit în vizigoți (goții de vest) și ostrogoți (goții de est).</div>',

'<div class="info-box"> Pe la anul 200 ei ajung în stepele din nordul Mării Negre și ocupă în prima jumătate a secolului III teritoriul dintre Prut și gura Hypanislui cu cetățile Olbia și Tyras, zonă identificată arheologic cu cultura Sântana de Mureș-Cerneahov.</div>',

'<div class="info-box"> Unii istorici cred că orașul Goților era situat în fortul abandonat de romani la Pietroasele în județul Buzău. Au fost descoperite de asemeni locuințe ale nobililor goți similare cu cele de tip villa ale romanilor, locuințe luxoase decorate cu vitralii de sticlă. O astfel de descoperire s-a făcut în Republica Moldova.</div>',

'<div class="info-box"> Împăratul Aurelian (270 - 275), încercând restaurarea granițelor imperiului, face o expediție împotriva goților din Dacia, dar, cu toată victoria repurtată asupra lor, în urma căreia ia titlul de "Gothicus maximus" și "Dacicus maximus", el nu mai poate restabili ordinea de mai înainte în Dacia. Astfel că, Aurelian încheie pace cu goții, cedându-le Dacia ca unor federați ai Imperiului Roman, cu îndatorirea de a păzi limita dunăreană (271).</div>',


'<div class="info-box"> Așezările goților în Dacia cuprindeau numai câmpia răsăriteană (Moldova cu partea estică a Țării Românești) </div>',

'<div class="info-box"> Invazia hunică din anul 376 a modificat dominația goților pe Dunărea de Jos. Sub impactul acestei invazii o mare parte a goților au trecut Dunărea în Imperiu </div>',

'<div class="info-box"> Pietroasele este satul de reședință al comunei cu același nume din județul Buzău, Muntenia, România. Se află într-o zonă viticolă cunoscută. În localitate și în apropierea ei s-au efectuat mai multe descoperiri arheologice, fiind găsit un castru roman cu terme datând din secolul al IV-lea e.n. și un tezaur gotic datând din aceeași perioadă. </div>',

'<div class="info-box"> Tezaurul de la Pietroasa este un tezaur arheologic format din mai multe obiecte din aur, descoperit în anul 1837 care constă în 12 obiecte, cele care sunt și astăzi expuse la Muzeul Național de Istorie a României. </div>',

'<div class="info-box"> Acestea sunt colanul elipsoidal, colanul cu inscripție runică, colanul simplu, patru fibule, patera cu figuri mitologice, două vase poligonale, un vas oenochoe și un taler, în greutate totală de 18,7975 de kilograme de aur și multe pietre prețioase ca granate, almandine, turmaline, smaralde, cristale de stâncă, safire și sticlă colorată.</div>',

'<div class="info-box">Aceasta este cea mai faimoasă și mai valoroasă grămadă de artefacte antice care s-a găsit pe teritoriul României. Ea a avut un destin datorat pe de o parte, interesului pe care i l-a acordat lumea științifică și pe de altă parte, a altor evenimente prin care a trecut încă din anul 1837 când a fost descoperită și până în anul 1956 când a fost returnată autorităților române de către U.R.S.S.</div>'
];

function updateSlide1() {
    infoContainer.innerHTML = slides1[currentSlideIndex1]; // adjust duration of transition here (in milliseconds)
  }

  slideLeftButton1.addEventListener('click', function() {
    currentSlideIndex1 = (currentSlideIndex1 === 0) ? slides1.length - 1 : currentSlideIndex1 - 1;
    updateSlide1();
  });
  
  slideRightButton1.addEventListener('click', function() {
    currentSlideIndex1 = (currentSlideIndex1 === slides1.length - 1) ? 0 : currentSlideIndex1 + 1;
    updateSlide1();
  });

  updateSlide1();

//---------------------------------------------------------------------------------------------
//
  //
// 
const picsContainer = document.querySelector('#pics');

const slideLeftButton2 = document.querySelector('.slideLeft2');
const slideRightButton2 = document.querySelector('.slideRight2');
let currentSlideIndex2 = 0;

const slides2 = [
    '<div class="picture picture-box-pietroasele"><img src="photos/pietroasele.jpg"></img></div>',
    '<div class="picture picture-box-closca"><img src="photos/closca2_auto_x2.jpg"></img></div>',
    '<div class="picture picture-box-tesaurul"><img src="photos/tesaurul.png"></img></div>',
    '<div class="picture picture-box-reproducerile"><img src="photos/reproducerile.png"></img></div>'
  ];

  function updateSlide2() {
    picsContainer.innerHTML = slides2[currentSlideIndex2];

  }


slideLeftButton2.addEventListener('click', function() {
    currentSlideIndex2 = (currentSlideIndex2 === 0) ? slides2.length - 1 : currentSlideIndex2 - 1;
    updateSlide2();
  });
  
slideRightButton2.addEventListener('click', function() {
    currentSlideIndex2 = (currentSlideIndex2 === slides2.length - 1) ? 0 : currentSlideIndex2 + 1;
    updateSlide2();
  });


updateSlide2();

//---------------------------------------------------------------------------------------------

const info2Container = document.querySelector('#info2');

const slideLeftButton3 = document.querySelector('.slideLeft3');
const slideRightButton3 = document.querySelector('.slideRight3');
let currentSlideIndex3 = 0;

const slides3 = [
    '<div class="info-box">            Hunii au fost un popor nomad de origine turcică, probabil și uralică.        </div>',
    '<div class="info-box">            La est de Nistru hunii îi întâlnesc pe ostrogoţii, pe care îi înfrâng.            Vizigoţii conduşi de Atanaric, care locuiau la vest de Nistru, sunt înfrânţi şi ei şi se retrag spre sudul            Moldovei, unde încearcă să reziste, dar nu reuşesc. Această ultimă rezistenţă a goţilor lui Atanaric s-ar fi            petrecut în zona Buzăului.        </div>',
    ' <div class="info-box">            Resturi a acestor goţi înfrânţi de huni au rămas în Dobrogea până pe la anul 850 când încă îşi mai vorbeau            limba maternă. O altă parte a lor se refugiaseră            mai înainte din calea hunilor, la sud de Dunăre.        </div>',
    '<div class="info-box">            După aceasta, hunii cuprind tot ţinutul din stânga Dunării, unde îşi aşează capitala.            Conduşi de Attila, hunii efectuează mai multe expediţii de jaf împotriva imperiului bizantin şi în Peninsula            Balcanică.        </div>',
    '<div class="info-box">            În anul 447 Attila atacă Peninsula Balcanică din nou, iar în anul 451, însoţit de trupe gepide şi de goţi,            porneşte o mare expediţie spre Galia şi Italia. Această ultimă expediţie va încheia dominaţia hunilor.            În urma acestor tulburări, gepizii ajung stăpânii Daciei, iar hunii se împrăştie în diferite direcţii.            Un grup se pare că s-a aşezat în vestul Olteniei, alţii în Bulgaria.        </div>',
    '<div class="info-box">            Astfel, hunii au ieşit din istorie la fel de repede precum au şi apărut.            Este foarte posibil ca influenţe hune să nu existe asupra populaţiei daco-romane, pentru că dominaţia lor a            fost de            scurtă durată, doar vreo optzeci de ani.            În urma acestor tulburări, gepizii ajung stăpânii Daciei.        </div>'
  ];

  function updateSlide3() {
    info2Container.innerHTML = slides3[currentSlideIndex3];

  }


slideLeftButton3.addEventListener('click', function() {
    currentSlideIndex3 = (currentSlideIndex3 === 0) ? slides3.length - 1 : currentSlideIndex3 - 1;
    updateSlide3();
  });
  
slideRightButton3.addEventListener('click', function() {
    currentSlideIndex3 = (currentSlideIndex3 === slides3.length - 1) ? 0 : currentSlideIndex3 + 1;
    updateSlide3();
  });


updateSlide3();

//---------------------------------------------------------------------------------------------

const info3Container = document.querySelector('#info3');

const slideLeftButton4 = document.querySelector('.slideLeft4');
const slideRightButton4 = document.querySelector('.slideRight4');
let currentSlideIndex4 = 0;

const slides4 = [
    '<div class="info-box">            Gepizii au fost migratori de origine germanică care în secolul al V-lea s-au stabilit în Bazinul Pannonic,            ajungând și în vestul Transilvaniei, Banat și culoarul Oltului. Se presupune că în zona Apahida, în            Transilvania, s-a aflat o curte regală gepidă.        </div>',
    '<div class="info-box">            Gepizii s-au așezat, în perioada numită Migrația popoarelor în nordul-vestul Daciei postromane.            După invazia hunilor(375 - 453), gepizii, împreună cu ostrogoții, au devenit vasali și mercenari în oastea            lui Attila.            După moartea acestuia, gepizii s-au revoltat împotriva foștilor stăpâni și            au luat în stăpânire partea de est a Panoniei (Câmpia Tisei) și vestul Daciei postromane.        </div>',
    '<div class="info-box">            Localitățile lor erau concentrate mai ales pe văile râurilor Criș, Mureș, Bega și Timiș,            extinzându-se pe văile Someșului și Arieșului în imediata apropiere a Clujului de azi, la Apahida,            localitate care pare să fi fost capitală a regatului gepid. Aici a fost descoperită necropola atribuită            căpeteniei princiare gepide creștine Omharus.        </div>',
    '<div class="info-box">            În august 2004, la Vlaha, a fost descoperită o necropolă cu 202 morminte datând în secolul al VI-lea d.Hr.            Au fost deshumate piese de ceramică, articole de bronz și o armură. O altă necropolă bogată în rămășițe            arheologice a fost            descoperită la Miercurea Sibiului. Alte necropole au fost descoperite la Morești,            județul Mureș, Noșlac, județul Alba, Brateiu, Sibiu, Șeica Mică, județul Sibiu, Timișoara.        </div>',
    '<div class="info-box">            La Turda a fost descoperit un mare mormânt gepid si o comoară. Comoara, atribuită unei prințese gepide,            a fost găsită de arheologul Mihai Bărbulescu.        </div>',
    '<div class="info-box">            În mormântul de la Turda au fost găsite obiecte care nu se purtau zilnic: cercei, brăţări şi fibule din aur            şi argint,            ornate cu pietre semipreţioase, dar şi o oglindă şi un pieptene de os.        </div>'

  ];

  function updateSlide4() {
    info3Container.innerHTML = slides4[currentSlideIndex4];

  }


slideLeftButton4.addEventListener('click', function() {
    currentSlideIndex4 = (currentSlideIndex4 === 0) ? slides4.length - 1 : currentSlideIndex4 - 1;
    updateSlide4();
  });
  
slideRightButton4.addEventListener('click', function() {
    currentSlideIndex4 = (currentSlideIndex4 === slides4.length - 1) ? 0 : currentSlideIndex4 + 1;
    updateSlide4();
  });


updateSlide4();

//---------------------------------------------------------------------------------------------

const picsContainer2 = document.querySelector('#pics2');

const slideLeftButton5 = document.querySelector('.slideLeft5');
const slideRightButton5 = document.querySelector('.slideRight5');
let currentSlideIndex5 = 0;

const slides5 = [
    '<div class="picture picture-box-gepida"><img src="photos/printesagepida.png"></img></div>',
    '<div class="picture picture-box-ornament"><img src="photos/ornament1.png"></img></div>',
    '<div class="picture picture-box-ornament2"><img src="photos/ornament2.png"></img></div>',
  ];

  function updateSlide5() {
    picsContainer2.innerHTML = slides5[currentSlideIndex5];

  }


slideLeftButton5.addEventListener('click', function() {
    currentSlideIndex5 = (currentSlideIndex5 === 0) ? slides5.length - 1 : currentSlideIndex5 - 1;
    updateSlide5();
  });
  
slideRightButton5.addEventListener('click', function() {
    currentSlideIndex5 = (currentSlideIndex5 === slides5.length - 1) ? 0 : currentSlideIndex5 + 1;
    updateSlide5();
  });


updateSlide5();

//---------------------------------------------------------------------------------------------

const info4Container = document.querySelector('#info4');

const slideLeftButton6 = document.querySelector('.slideLeft6');
const slideRightButton6 = document.querySelector('.slideRight6');
let currentSlideIndex6 = 0;

const slides6 = [
    '<div class="info-box">            Avarii au fost un popor migrator provenit din Asia Centrală a cărui limbă era probabil din grupul limbilor            turcice. Inițial,            și-au stabilit un hanat pe râul Volga, ulterior în Europa Centrală (Câmpia Panonică)            în Evul Mediu Timpuriu (secolul al VI-lea), fiind timp de două secole o putere militară de temut.        </div>',
    '<div class="info-box">            În 557, avarii, învinși în Asia Centrală de alte triburi turce, intră în Europa.            În 567, împreună cu longobarzii, avarii zdrobesc regatul gepizilor.            Teritoriul transilvan devine pentru avarii crescători de animale o regiune preferată în timpul verii.        </div>',
    '<div class="info-box">            Limba pe care avarii o vorbeau nu se cunoaşte. În limba turcă "avar" înseamnă vagabond.            Cu populaţia băştinaşă a Daciei nu se cunoaşte ce raporturi au avut, dar este posibil            ca avarii să îşi fi întins stăpânirea până la Munţii Apuseni, pornind din câmpia Tisei.        </div>',
    '<div class="info-box">            „Prisăcile” din Transilvania: Prisăcile erau fortificații sumare dispuse pe un aliniament natural ușor de            apărat și            întărit prin plantarea de vegetație deasă, șanțuri, întârituri din stâlpi de lemn.            Unii istorici români opinează că prisăcile ar fi fost opera avarilor.        </div>',
    '<div class="info-box">            Statul avar a fost distrus de către Carol cel Mare care i-a înfrânt în mai multe lupte, iar în anul 796 le-a            cucerit chiar capitala.            Restul poporului avar a fost distrus în luptele duse cu bulgarii conduşi de Krum (804-814) şi a dispărut din            istorie.        </div>'

  ];

  function updateSlide6() {
    info4Container.innerHTML = slides6[currentSlideIndex6];

  }


slideLeftButton6.addEventListener('click', function() {
    currentSlideIndex6 = (currentSlideIndex6 === 0) ? slides6.length - 1 : currentSlideIndex6 - 1;
    updateSlide6();
  });
  
slideRightButton6.addEventListener('click', function() {
    currentSlideIndex6 = (currentSlideIndex6 === slides6.length - 1) ? 0 : currentSlideIndex6 + 1;
    updateSlide6();
  });


updateSlide6();

//---------------------------------------------------------------------------------------------

const picsContainer3 = document.querySelector('#pics3');

const slideLeftButton7 = document.querySelector('.slideLeft7');
const slideRightButton7 = document.querySelector('.slideRight7');
let currentSlideIndex7 = 0;

const slides7 = [
    '<div class="picture picture-box-avari-vas"><img src="photos/avari1.png"></img></div>',
     '<div class="picture picture-box-avari-tezaur"><img src="photos/avari2.png"></img></div>'

  ];

  function updateSlide7() {
    picsContainer3.innerHTML = slides7[currentSlideIndex7];

  }


slideLeftButton7.addEventListener('click', function() {
    currentSlideIndex7 = (currentSlideIndex7 === 0) ? slides7.length - 1 : currentSlideIndex7 - 1;
    updateSlide7();
  });
  
slideRightButton7.addEventListener('click', function() {
    currentSlideIndex7 = (currentSlideIndex7 === slides7.length - 1) ? 0 : currentSlideIndex7 + 1;
    updateSlide7();
  });


updateSlide7();

//---------------------------------------------------------------------------------------------

const info5Container = document.querySelector('#info5');

const slideLeftButton8 = document.querySelector('.slideLeft8');
const slideRightButton8 = document.querySelector('.slideRight8');
let currentSlideIndex8 = 0;

const slides8 = [
    '<div class="info-box">            Slavii au fost un popor de origine indo-europeană, care a migrat dinspre răsăritul Europei. Ei căutau            pământuri mai bune pentru agricultură și pășunat.        </div>',
    '<div class="info-box">            Slavii de răsărit sunt rușii, ucrainenii și bielorușii de astăzi. Slavii de apus sunt cehii, slovacii și            polonezii. Iar slavii de sud, cei care au migrat la sudul Dunării, sunt strămoșii bulgarilor, sârbilor,            croaților, macedonenilor, slovenilor, bosniacilor și muntenegrenilor.        </div>',
    '<div class="info-box">            Slavii au pătruns în regiunile Moldova și Muntenia începând cu sfârșitul secolului al V-lea și în prima            jumătate a secolului al VI-lea.        </div>',
    ' <div class="info-box">            Procesul de slavizare a provinciilor romane de la sud de Dunăre a dus la migrarea populației din zonele            fertile            pentru agricultură de la câmpie în zona împădurită de la deal și munte. Aceasta a determinat schimbarea            modului de viață,            păstoritul devenind ocupația principală a populației romanice.</div>',
    '<div class="info-box">            După ce slavii plecau în căutarea altor            teritorii, populația autohtonă revenea            din zonele de refugiu în zonele de proveniență. Au existat, astfel, două populații, una românească și una            slavă, care au conviețuit între secolele VIII-X.        </div>',
    '<div class="info-box">            În timp ce slavii stabiliți la sud de Dunăre au asimilat celelalte grupuri etnice existente (traci, iliri,            celți, sciți), slavii de la nordul Dunării au fost asimilați între secolele VIII-X de daco-romani,            aceasta fiind ultima etapă în finalizarea etnogenezei românești.        </div>'


  ];

  function updateSlide8() {
    info5Container.innerHTML = slides8[currentSlideIndex8];

  }


slideLeftButton8.addEventListener('click', function() {
    currentSlideIndex8 = (currentSlideIndex8 === 0) ? slides8.length - 1 : currentSlideIndex8 - 1;
    updateSlide8();
  });
  
slideRightButton8.addEventListener('click', function() {
    currentSlideIndex8 = (currentSlideIndex8 === slides8.length - 1) ? 0 : currentSlideIndex8 + 1;
    updateSlide8();
  });


updateSlide8();

//---------------------------------------------------------------------------------------------

const picsContainer4 = document.querySelector('#pics4');

const slideLeftButton9 = document.querySelector('.slideLeft9');
const slideRightButton9 = document.querySelector('.slideRight9');
let currentSlideIndex9 = 0;

const slides9 = [
    '<div class="picture picture-box-slavi1"><img src="photos/slavi1.png"></img></div>',
    '<div class="picture picture-box-slavi2"><img src="photos/slavi2.png"></img></div>'
  ];

  function updateSlide9() {
    picsContainer4.innerHTML = slides9[currentSlideIndex9];

  }


slideLeftButton9.addEventListener('click', function() {
    currentSlideIndex9 = (currentSlideIndex9 === 0) ? slides9.length - 1 : currentSlideIndex9 - 1;
    updateSlide9();
  });
  
slideRightButton9.addEventListener('click', function() {
    currentSlideIndex9 = (currentSlideIndex9 === slides9.length - 1) ? 0 : currentSlideIndex9 + 1;
    updateSlide9();
  });


updateSlide9();

//---------------------------------------------------------------------------------------------

const info6Container = document.querySelector('#info6');

const slideLeftButton10 = document.querySelector('.slideLeft10');
const slideRightButton10 = document.querySelector('.slideRight10');
let currentSlideIndex10 = 0;

const slides10 = [
        '<div class="info-box">            O perioadă mai îndelungată au stat în regiunea Volgăi (secolele al VII-lea – al VIII-lea), unde au întâlnit            puternicul stat al bulgarilor. O grupare a ungurilor a locuit și în regiunea Bașchiriei care mai târziu a            fost numită Magna Hungaria. Au purtat lupte cu pecenegii, uzii, hazarii.        </div>',
        '<div class="info-box">            În secolul al XIII-lea călugărul            Ricardus scria despre unguri: “Sunt păgâni, n-au nicio știință despre Dumnezeu.            Nu se închină la idoli, ci trăiesc ca dobitoacele. Nu cultivă pământul, mănâncă carne de cal,            de lup și de alte de acest fel. Beau lapte și sânge de cal”.        </div>',
        '<div class="info-box">            Cronica lui Nestor, Povesti Vremennâh let, redactată în secolul al XI-lea la Kiev, narează cucerirea            maghiară: “Ungurii trecură pe lângă Kiev            și au ajuns la Dnipru unde-și întinseră corturile, că erau nomazi ca polovții. Veniți din Răsărit mergeau            grăbiți prin munții înalți care s-au numit            ungurești (Carpații nordici) și au luptat cu cei care trăiau acolo, vlahii și sloveanii.                    </div>',
        '<div class="info-box">            Pe urmă ungurii înlăturară pe vlahi și luară această țară și se așezară cu sloveanii împreună pe care îi            supuseseră și de atunci țara se numește Ungaria”.        </div>',
        ' <div class="info-box">            Între anii 896 și 899 au distrus statul Moraviei Mari (din Slovacia) și au ocupat toată regiunea dintre râul            Tisa și Dunăre, în 906. Din 899            au continuat raidurile călăreților maghiari în Europa Centrală. Obiectivele lor erau Germania și Nordul            Italiei.         </div>',
        '<div class="info-box">            Germania, slăbită după dinastia            carolingiană, nu putea face față invaziilor succesive ale ungurilor. Germania de Nord (Saxonia, Turingia,            Westfalia) și Sudul Germaniei (Suabia, Bavaria)            au fost devastate și jefuite copios de maghiari. Apogeul invaziilor a fost între 920 și 926 după moartea lui            Arpad în 907.        </div>',
        '<div class="info-box">            Relațiile maghiarilor, nomazi hrăpăreți, nu a fost de bună vecinătate cu cnezatele și voievodatele            românești. Unii, fără muncă,            voiau să-și însușească bunurile celorlalți, care nu voiau să-și lase moșia muncită și apărată din moși            strămoși, unor venetici aduși            de vânturile pustiului asiatic.            Românii nu au stat pasivi și au opus rezistență înverșunată invadatorilor.        </div>',
        '<div class="info-box">            Transilvania fusese numită în documentele scrise în limba latină, Ultrasilvana până la jumătatea secolului            al XII-lea, iar în corespondența papală            cu Ordinul Teutonic din secolul al XIII-lea era numită Terra ultra montes nivium,            Țara de peste munții cu zăpadă (Carpații). Maghiarii o numeau Ardeal/Erdely (pădure, pădurea regelui).        </div>',
        '<div class="info-box">            Până în 1075, Ardealul fusese teritoriu de graniță disputat de pecenegi și unguri.            Cucerirea Transilvaniei de către unguri s-a prelungit până către finalul secolului al XII-lea.        </div>'

  ];

  function updateSlide10() {
    info6Container.innerHTML = slides10[currentSlideIndex10];

  }


slideLeftButton10.addEventListener('click', function() {
    currentSlideIndex10 = (currentSlideIndex10 === 0) ? slides10.length - 1 : currentSlideIndex10 - 1;
    updateSlide10();
  });
  
slideRightButton10.addEventListener('click', function() {
    currentSlideIndex10 = (currentSlideIndex10 === slides10.length - 1) ? 0 : currentSlideIndex10 + 1;
    updateSlide10();
  });


updateSlide10();

//---------------------------------------------------------------------------------------------

const picsContainer5 = document.querySelector('#pics5');

const slideLeftButton11 = document.querySelector('.slideLeft11');
const slideRightButton11 = document.querySelector('.slideRight11');
let currentSlideIndex11 = 0;

const slides11 = [
    '<div class="picture picture-box-unguri1"><img src="photos/unguri1.png"></img></div>',
    '<div class="picture picture-box-unguri2"><img src="photos/unguri2.png"></img></div>'
  ];

  function updateSlide11() {
    picsContainer5.innerHTML = slides11[currentSlideIndex11];

  }


slideLeftButton11.addEventListener('click', function() {
    currentSlideIndex11 = (currentSlideIndex11 === 0) ? slides11.length - 1 : currentSlideIndex11 - 1;
    updateSlide11();
  });
  
slideRightButton11.addEventListener('click', function() {
    currentSlideIndex11 = (currentSlideIndex11 === slides11.length - 1) ? 0 : currentSlideIndex11 + 1;
    updateSlide11();
  });


updateSlide11();

//---------------------------------------------------------------------------------------------

const info7Container = document.querySelector('#info7');

const slideLeftButton12 = document.querySelector('.slideLeft12');
const slideRightButton12 = document.querySelector('.slideRight12');
let currentSlideIndex12 = 0;

const slides12 = [
        '<div class="info-box"> Cumanii au fost un popor originar din Asia.</div>',
        '<div class="info-box">            Secolul al IX-lea i-a surprins pe cumani în spațiul geografic dintre fluviile Ural și Volga,            în apropierea pecenegilor. După mutarea (migrarea) pecenegilor spre vest, între Nistru și Carpați,            pe la finele secolului al IX-lea, cumanii au luat locul acestora dintre Don și Nipru.         </div>',
        '<div class="info-box">            În a doua jumătate a            secolului al XI-lea,            după ce resturile hoardelor pecenegilor rămase în urma decimării lor in bătăliile cu Imperiul Bizantin s-au            mutat peste Dunăre,            cumanii au luat în stăpânire (1070-75) teritorii ocupate până atunci de românii și pecenegii dintre Nistru            și Carpați,            iar resturile pecenegilor s-au contopit cu ei.        </div>',
        '<div class="info-box">            Prima atestare a regiunii Țara Făgărașului a fost „Terra Blacorum”, in 1222.            În Evul Mediu, a găzduit pe lângă populația românească și comunități sedentarizate            la sfârșitul secolului al XIII-lea ale unor variate seminții turcice tradițional migratoare cum ar fi            cumanii, pecenegii,            și, într-o mai mică măsură, uzii.                    </div>',
        '<div class="info-box">            Astfel, documentele timpului semnalează existența în anul 1224 a pădurii blazilor și a pecenegilor posibil            între Munții Făgăraș și Valea Oltului.        </div>',
        '<div class="info-box">            Cumanii și pecenegii par a fi conviețuit în simbioză pașnică cu populatia româna, mulți din ei liberi și            posesori de diplome nobiliare în Țara Făgărașului.            În timp, au fost asimilați de populația ungară și română din zonă.        </div>'

  ];

  function updateSlide12() {
    info7Container.innerHTML = slides12[currentSlideIndex12];

  }


slideLeftButton12.addEventListener('click', function() {
    currentSlideIndex12 = (currentSlideIndex12 === 0) ? slides12.length - 1 : currentSlideIndex12 - 1;
    updateSlide12();
  });
  
slideRightButton12.addEventListener('click', function() {
    currentSlideIndex12 = (currentSlideIndex12 === slides12.length - 1) ? 0 : currentSlideIndex12 + 1;
    updateSlide12();
  });


updateSlide12();

//---------------------------------------------------------------------------------------------

const info8Container = document.querySelector('#info8');

const slideLeftButton13 = document.querySelector('.slideLeft13');
const slideRightButton13 = document.querySelector('.slideRight13');
let currentSlideIndex13 = 0;

const slides13 = [
        '<div class="info-box">            Pecenegii au fost un popor seminomad originar din stepele Asiei Centrale.            În secolul al IX-lea ei au populat nordul Mării Negre, iar în secolele al XI-lea-al XII-lea au pătruns în            Peninsula Balcanică.            Numele pecenegilor derivă din limba turcă veche și înseamnă „cumnați sau clanuri/triburi înrudite".        </div>',
        '<div class="info-box">            885 - Pecenegii îi atacă pe unguri și îi împing spre vest.            889 - Pecenegii trec granița hazară și se stabilesc în una dintre patriile temporare ale ungurilor.            894 - Pecenegii, aliați cu bulgarii, îi împing pe unguri din Atelkuzu dincolo de Carpați pe teritoriul            Ungariei de astăzi.            903-905 Pecenegii înaintează și ocupă Oltenia și Banatul, iar în Transilvania ocupă zona din apropierea            orașului Alba Iulia.        </div>',
        '<div class="info-box">            Singura regiune din Transilvania unde există o concentrare masivă de toponime de origine pecenegă se află în            sud-est,            în județele Brașov și Covasna. Cel mai important dintre aceste toponime este chiar Brașov. Deși sufixul este            slav, ceea ce a condus la presupunerea            că denumirea ar fi slavă, s-a putut demonstra că Brasso, devenit apoi Brașov, provine din termenul turcic            Barasu, care înseamnă „apă albă”.        </div>'
  ];

  function updateSlide13() {
    info8Container.innerHTML = slides13[currentSlideIndex13];

  }


slideLeftButton13.addEventListener('click', function() {
    currentSlideIndex13 = (currentSlideIndex13 === 0) ? slides13.length - 1 : currentSlideIndex13 - 1;
    updateSlide13();
  });
  
slideRightButton13.addEventListener('click', function() {
    currentSlideIndex13 = (currentSlideIndex13 === slides13.length - 1) ? 0 : currentSlideIndex13 + 1;
    updateSlide13();
  });


updateSlide13();

//---------------------------------------------------------------------------------------------

const picsContainer6 = document.querySelector('#pics6');

const slideLeftButton14 = document.querySelector('.slideLeft14');
const slideRightButton14 = document.querySelector('.slideRight14');
let currentSlideIndex14 = 0;

const slides14 = [
    '<div class="picture picture-box-pecenegi"><img src="photos/pecenegi1.png"></img></div>',
    '<div class="picture picture-box-pecenegi2"><img src="photos/pecenegi2.png"></img></div>',
    '<div class="picture picture-box-pecenegi3"><img src="photos/pecenegi3.png"></img></div>'
  ];

  function updateSlide14() {
    picsContainer6.innerHTML = slides14[currentSlideIndex14];

  }


slideLeftButton14.addEventListener('click', function() {
    currentSlideIndex14 = (currentSlideIndex14 === 0) ? slides14.length - 1 : currentSlideIndex14 - 1;
    updateSlide14();
  });
  
slideRightButton14.addEventListener('click', function() {
    currentSlideIndex14 = (currentSlideIndex14 === slides14.length - 1) ? 0 : currentSlideIndex14 + 1;
    updateSlide14();
  });


updateSlide14();

//---------------------------------------------------------------------------------------------

const info9Container = document.querySelector('#info9');

const slideLeftButton15 = document.querySelector('.slideLeft15');
const slideRightButton15 = document.querySelector('.slideRight15');
let currentSlideIndex15 = 0;

const slides15 = [
    '<div class="info-box">            Succesor al lui Ginghis Han, Batu Han a început cucerirea Rusiei, ocupând în scurt timp cnezatele Moscovei,            Kievului și Novgorodului.            De la Kiev armata mongolă s-a împărțit în trei grupuri. Cel central a pătruns în Ungaria și, după ce a            zdrobit pe malul râului Sajo armata maghiară,            a ajuns până în Dalmația. Grupul sudic după ce a străbătut Moldova și Muntenia, a pătruns în Transilvania.        </div>',
    '<div class="info-box">            Marea invazie mongola a afectat si regiunile din țările române,importante atât pentru prada,            cât si pentru faptul ca reprezentau baze de atac spre alte tari. Românii, care nu dispuneau de formatiuni            statale consolidate,            de structuri militare bine organizate, de fortificatii corespunzatoare, nu au fost în stare sa le reziste.                    </div>',
    '<div class="info-box">Din cauza invaziei            care a distrus majoritatea evidențelor culturale de scriitură și limbă când a fost prădată zona în 1241,            puține mărturii ale evului mediu            cultural românesc mai există astăzi.</div>',
    '<div class="info-box">            Tătarii au intrat mai întâi în Moldova plecând din zona Halîciului (Galiția). Un corp de oaste a înaintat            de-a lungul râului Ceremuș până la Cârlibaba unde s-au împărțit în două coloane: una condusă de hanul Cadan            a pornit apoi prin pasul Rotunda spre Rodna iar a doua coloană            (Buri) a pornit spre Maramureș. Cadan a cucerit în continuare Rodna, Bistrița, Clujul și Oradea.        </div>',
    '<div class="info-box">            Un alt corp de oaste condus de Calcan a intrat în Moldova și a ajuns la trecătoarea Oituz unde s-a luptat cu            românii și secuii și a cucerit apoi Tușnad,            Odorhei, Cetatea de Baltă, Blaj și Alba Iulia.        </div>',
    '<div class="info-box">            Un alt corp de oaste, condus de Bugec, a înaintat de-a lungul Siretului și a distrus biserica fortificată a            cumanilor de pe Milcov.            În continuare Bugec a cucerit zona Buzăului și a intrat pe valea Buzăului (drumul tătarului) spre Brașov.                    </div>',
    '<div class="info-box">S-a întâlnit la Târgu Secuiesc cu Calcan            și apoi a luat drumul Făgărașului, intrând (probabil pe valea Oltului) în teritoriul lui Seneslau până la            Turnu Severin.            În continuare Budjek a intrat în Banat de-a lungul râului Cerna, atacând și cucerind Cenadul și în final            Timișoara.</div>'

  ];

  function updateSlide15() {
    info9Container.innerHTML = slides15[currentSlideIndex15];

  }


slideLeftButton15.addEventListener('click', function() {
    currentSlideIndex15 = (currentSlideIndex15 === 0) ? slides15.length - 1 : currentSlideIndex15 - 1;
    updateSlide15();
  });
  
slideRightButton15.addEventListener('click', function() {
    currentSlideIndex15 = (currentSlideIndex15 === slides15.length - 1) ? 0 : currentSlideIndex15 + 1;
    updateSlide15();
  });


updateSlide15();

//---------------------------------------------------------------------------------------------

const picsContainer7 = document.querySelector('#pics7');

const slideLeftButton16 = document.querySelector('.slideLeft16');
const slideRightButton16 = document.querySelector('.slideRight16');
let currentSlideIndex16 = 0;

const slides16 = [
    '<div class="picture picture-box-mongoli1"><img src="photos/mongoli1.png"></img></div>',
    '<div class="picture picture-box-mongoli2"><img src="photos/mongoli2.png"></img></div>'
  ];

  function updateSlide16() {
    picsContainer7.innerHTML = slides16[currentSlideIndex16];

  }


slideLeftButton16.addEventListener('click', function() {
    currentSlideIndex16 = (currentSlideIndex16 === 0) ? slides16.length - 1 : currentSlideIndex16 - 1;
    updateSlide16();
  });
  
slideRightButton16.addEventListener('click', function() {
    currentSlideIndex16 = (currentSlideIndex16 === slides16.length - 1) ? 0 : currentSlideIndex16 + 1;
    updateSlide16();
  });


updateSlide16();

//---------------------------------------------------------------------------------------------

const info10Container = document.querySelector('#info10');

const slideLeftButton17 = document.querySelector('.slideLeft17');
const slideRightButton17 = document.querySelector('.slideRight17');
let currentSlideIndex17 = 0;

const slides17 = [
    '<div class="info-box">            Tătarii au fost o populaţie nomadă originară din Mongolia.            Erau foarte buni călăreţi şi arcaşi, ca multe alte neamuri nomade. Pe lângă arcuri şi săgeţi ei mai aveau şi            lănci şi săbii,            dar pe acestea din urmă le foloseau mai rar,            pentru că în general evitau lupta din apropiere, preferând să atace prin surprindere şi să dispară            fulgerător.        </div>',
    '<div class="info-box">            În anul 1241 tătarii lansează o mare invazie a Europei şi ajung şi pe teritoriul ţării noastre. Aici, ca şi            peste tot pe unde au trecut, tătarii au distrus, au jefuit şi au ucis populaţia, trecând mai departe spre            inima Europei.         </div>',
    '<div class="info-box">Deşi conducătorii locali şi populaţia a încercat să se împotrivească tătarilor şi pe            teritoriul actualei Românii, ei au fost distruşi rapid de către tătari, care aveau chiar şi posibilitatea de            a purta scurte asedii asupra oraşelor            fortificate întâlnite în drumul lor de pradă.            Astfel, sunt distruse principalele oraşe din ţară, iar populaţia măcelărită.</div>',
    '<div class="info-box">            De foarte multe ori tătarii sunt confundaţi cu mongolii. Practic, când se vorbeşte despre marea invazie            mongolă din 1241,            etnonimele tătar şi mongol sunt considerate, de mulţi, unul sau acelaşi lucru, adică descriind una şi            aceeaşi populaţie.         </div>',
    '<div class="info-box">            În realitate,            lucrurile stau puţin diferit. Într-adevăr în secolul al XIII lea la marea invazie îndreptată împotriva            Europei de Genghis Han şi urmaşii            săi au participat atât mongoli, cât şi tătari.         </div>',
    '<div class="info-box">Între ei erau asemănări mari la nivel cultural, militar şi            social, însă aceste neamuri erau diferite.            Dacă originea mongolilor este clară, când vine vorba de tătari, părerile specialiştilor au fost împărţite.            Pentru unii, tătarii ar avea origine mongolă            şi ar fi fost o uniune de triburi, din marile stepe ale Asiei Centrale, care a fost cooptată de Genghis Han            în marile lui campanii.</div>',
    '<div class="info-box">            „Înfăţişarea tătarilor este îngrozitoare. Ei au membrele scurte şi trunchiurile mari, faţa e lată, sunt            spâni.            Au ochi mici şi îndepărtaţi unul de altul. Dispreţuiesc hrana cu pâine, se hrănesc cu cărnuri atât            proaspete, cât şi putrede,            ca băutură amestecă lapte închegat cu sânge de cal. Nici apa cea mai repede nu-i poate opri: ei o trec înot            călare. Se slujesc de corturi            făcute din pânză sau piei”, scria arhidiaconul Toma din Spalato.        </div>',
    '<div class="info-box">            Tătarii au fost esenţiali pentru deschiderea rutelor Orient-Occident pe uscat. De altfel, o dată cu noile            realităţi sociale şi politice ale            hanatului, tătarii au început, pe lângă tradiţionala creştere a animalelor, să fie buni artizani în metal,            dar şi agricultori.          </div>',
    '<div class="info-box">Tătarii aveau şi            pieţe renumite de sclavi, făcând comerţ intens cu italienii pe ţărmurile Mării Negre. De altfel, aceştia au            ajuns să se convertească la islam,            dar şi să vorbească limba otomanilor, ca limbă curentă în comerţ şi politică.</div>',
    '<div class="info-box">                În anul 1783, puterea                tătarilor decade odată cu cea a Imperiului Otoman,                iar hanatul Crimeei este cucerit şi anexat Imperiului Rus de Ecaterina cea Mare.                Tătarii au continuat să vieţuiască în număr mare pe teritoriul Rusiei, dar şi al României, în Dobrogea mai                ales păstrându-şi tradiţiile.            </div> ',
    '<div class="info-box">            <i>Tătarii, un grup etnic vorbitor de limba tătară, sunt prezenți pe teritoriul actual al României din secolul            al XIII-lea.            Conform recensământului din 2011, 19.006 de oameni s-au declarat tătari, majoritatea acestora fiind tătari            crimeeni din județul Constanța.            Tătarii sunt principalii reprezentați ai islamului în România. </i>(Wikipedia)        </div>'
  ];

  function updateSlide17() {
    info10Container.innerHTML = slides17[currentSlideIndex17];

  }


slideLeftButton17.addEventListener('click', function() {
    currentSlideIndex17 = (currentSlideIndex17 === 0) ? slides17.length - 1 : currentSlideIndex17 - 1;
    updateSlide17();
  });
  
slideRightButton17.addEventListener('click', function() {
    currentSlideIndex17 = (currentSlideIndex17 === slides17.length - 1) ? 0 : currentSlideIndex17 + 1;
    updateSlide17();
  });


updateSlide17();

//---------------------------------------------------------------------------------------------
