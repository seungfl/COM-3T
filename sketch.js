var video1;
let horoscope;
let archivoEB, archivoMI, archivoLI;
let videoMask;

let inputName, selectMonth, selectDay;

let printZodiac = 0;

function preload(){
  //load json data for reading
  horoscope = loadJSON("horoscope.json");
  //preload all images
  buttonCamera = loadImage('buttonCamera.png');
  submitButton = loadImage('submit.png');
  videoMask = loadImage('videoMask.png');
  //Zodiacs
  imageAquarius = loadImage('Aquarius.png');
  imageAries = loadImage('Aries.png');
  imageCancer = loadImage('Cancer.png');
  imageCapricorn = loadImage('Capricorn.png');
  imageGemini = loadImage('Gemini.png');
  imageLeo = loadImage('Leon.png');
  imageLibra = loadImage('Libra.png');
  imagePisces = loadImage('Pisces.png');
  imageSagittarius = loadImage('Sagittarius.png');
  imageScorpio = loadImage('Scorpio.png');
  imageTaurus = loadImage('Taurus.png');
  zodiacMask = loadImage('zodiacMask.png')
  //Planets
  imageMoon = loadImage('moon.png');
  imageSun = loadImage('sun.png');
  //Font
  archivoEB = loadFont('Archivo-ExtraBold.ttf');
  archivoMI = loadFont('Archivo-MediumItalic.ttf');
  archivoLI = loadFont('Archivo-LightItalic.ttf');

}

function setup() {
  createCanvas(1016, 910);
  console.log(horoscope);


  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "user"
      }
    }
  };

  //video1 = createCapture(VIDEO);
  video1 = createCapture(constraints);
  video1.size(512,288);
  video1.hide();

  textAlign(CENTER);

  inputName = createInput();
  inputName.position(36,50);

  selectMonth = createSelect();
  selectMonth.position(136,50);
  selectMonth.option(' ');
  selectMonth.option('January');
  selectMonth.option('February');
  selectMonth.option('March');
  selectMonth.option('April');
  selectMonth.option('May');
  selectMonth.option('June');
  selectMonth.option('July');
  selectMonth.option('August');
  selectMonth.option('September');
  selectMonth.option('October');
  selectMonth.option('November');
  selectMonth.option('December');

  selectDay = createSelect();
  selectDay.position(236,50);
  selectDay.option(' ');
  selectDay.option('1');
  selectDay.option('2');
  selectDay.option('3');
  selectDay.option('4');
  selectDay.option('5');
  selectDay.option('6');
  selectDay.option('7');
  selectDay.option('8');
  selectDay.option('9');
  selectDay.option('10');
  selectDay.option('11');
  selectDay.option('12');
  selectDay.option('13');
  selectDay.option('14');
  selectDay.option('15');
  selectDay.option('16');
  selectDay.option('17');
  selectDay.option('18');
  selectDay.option('19');
  selectDay.option('20');
  selectDay.option('21');
  selectDay.option('22');
  selectDay.option('23');
  selectDay.option('24');
  selectDay.option('25');
  selectDay.option('26');
  selectDay.option('27');
  selectDay.option('28');
  selectDay.option('29');
  selectDay.option('30');
  selectDay.option('31');

  // let submitDate = createButton('sumbit');
  // submitDate.position(300,50);
  // submitDate.mousePressed(zodiacAssign);

}

function draw() {
  background(105, 253, 255);

  push();
  // video1.filter(GRAY);
  imageMode(CENTER);
  tint(0, 115, 255);
  image(video1, 255, 400);
  pop();

  imageMode(CORNER);

  image(videoMask,0,110);

  image(buttonCamera,460,22);
  image(submitButton,300,23);

  fill(255);
  textFont(archivoEB);
  textSize(20);
  text("SUBMIT",375,65);

  let printMonth = selectMonth.value();
  let printDay = selectDay.value();
  let printName = inputName.value();

  //CAPRICORN
  if(printZodiac==1) {
    image(imageCapricorn,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Capricorn.ruling_body_classic,765.5,618);
    text(horoscope.western_zodiac.Capricorn.trait ,765.5,668);
    text(horoscope.western_zodiac.Capricorn.element,765.5,718);
    text(horoscope.western_zodiac.Capricorn.sign,765.5,768);
  }
  //AQUARIUS
  if(printZodiac==2) {
    image(imageAquarius,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Aquarius.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Aquarius.trait,765.5,668);
    text(horoscope.western_zodiac.Aquarius.element,765.5,718);
    text(horoscope.western_zodiac.Aquarius.sign,765.5,768);
  }
  //PISCES
  if(printZodiac==3) {
    image(imagePisces,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Pisces.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Pisces.trait,765.5,668);
    text(horoscope.western_zodiac.Pisces.element,765.5,718);
    text(horoscope.western_zodiac.Pisces.sign,765.5,768);
  }
  //ARIES
  if(printZodiac==4) {
    image(imageAries,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Aries.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Aries.trait,765.5,668);
    text(horoscope.western_zodiac.Aries.element,765.5,718);
    text(horoscope.western_zodiac.Aries.sign,765.5,768);
  }
  //TAURUS
  if(printZodiac==5) {
    image(imageTaurus,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Taurus.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Taurus.trait,765.5,668);
    text(horoscope.western_zodiac.Taurus.element,765.5,718);
    text(horoscope.western_zodiac.Taurus.sign,765.5,768);
  }
  //GEMINI
  if(printZodiac==6) {
    image(imageGemini,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Gemini.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Gemini.trait,765.5,668);
    text(horoscope.western_zodiac.Gemini.element,765.5,718);
    text(horoscope.western_zodiac.Gemini.sign,765.5,768);
  }
  //CANCER
  if(printZodiac==7) {
    image(imageCancer,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Cancer.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Cancer.trait,765.5,668);
    text(horoscope.western_zodiac.Cancer.element,765.5,718);
    text(horoscope.western_zodiac.Cancer.sign,765.5,768);
  }
  //LEO
  if(printZodiac==8) {
    image(imageLeo,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Leo.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Leo.trait,765.5,668);
    text(horoscope.western_zodiac.Leo.element,765.5,718);
    text(horoscope.western_zodiac.Leo.sign,765.5,768);
  }
  //VIRGO
  if(printZodiac==9) {
    image(imageVirgo,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Virgo.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Virgo.trait,765.5,668);
    text(horoscope.western_zodiac.Virgo.element,765.5,718);
    text(horoscope.western_zodiac.Virgo.sign,765.5,768);
  }
  //LIBRA
  if(printZodiac==10) {
    image(imageLibra,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Libra.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Libra.trait,765.5,668);
    text(horoscope.western_zodiac.Libra.element,765.5,718);
    text(horoscope.western_zodiac.Libra.sign,765.5,768);
  }
  //SCORPIO
  if(printZodiac==11) {
    image(imageScorpio,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Scorpio.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Scorpio.trait,765.5,668);
    text(horoscope.western_zodiac.Scorpio.element,765.5,718);
    text(horoscope.western_zodiac.Scorpio.sign,765.5,768);
  }
  //SAGITTARIUS
  if(printZodiac==12) {
    image(imageSagittarius,630,210);
    textFont(archivoMI);
    textSize(18);
    text(horoscope.western_zodiac.Sagittarius.ruling_body_modern,765.5,618);
    text(horoscope.western_zodiac.Sagittarius.trait,765.5,668);
    text(horoscope.western_zodiac.Sagittarius.element,765.5,718);
    text(horoscope.western_zodiac.Sagittarius.sign,765.5,768);
  }

  if(0<printZodiac) {
    textFont(archivoLI);
    textSize(10);
    text("PLANET", 765.5, 602);
    text("TRAITS", 765.5, 652);
    text("ELEMENTS", 765.5, 702);
    text("SIGN", 765.5, 752);
    image(zodiacMask,588,218);
    textFont(archivoEB);
    textSize(45);
    text(printName,765.5,373);
    fill(105, 253, 255);
    textSize(21);
    text(printMonth + " " + printDay ,765.5,400);
  }
}

function mousePressed(){
  if (mouseY >= 42 && mouseY <= 77 && mouseX >= 470 && mouseX<= 520){
    let saveCard = get( 0, 110, 1016, 800);
    saveCard.save("COM-3T_Membership.png");
    print("picture saved");
}
  if (mouseY >= 40 && mouseY <=80 && mouseX >= 300 && mouseX<= 445){
    zodiacAssign();
    print("zodiac assigned");
}
}

function zodiacAssign() {
  let printMonth = selectMonth.value();
  let printDay = selectDay.value();

  if(printMonth=='January') {if(printDay<=19) {printZodiac=1}else {printZodiac=2}}
  if(printMonth=='February') {if(printDay<=18) {printZodiac=2}else {printZodiac=3}}
  if(printMonth=='March') {if(printDay<=20) {printZodiac=3}else {printZodiac=4}}
  if(printMonth=='April') {if(printDay<=19) {printZodiac=4}else {printZodiac=5}}
  if(printMonth=='May') {if(printDay<=20) {printZodiac=5}else {printZodiac=6}}
  if(printMonth=='June') {if(printDay<=20) {printZodiac=6}else {printZodiac=7}}
  if(printMonth=='July') {if(printDay<=22) {printZodiac=7}else {printZodiac=8}}
  if(printMonth=='August') {if(printDay<=22) {printZodiac=8}else {printZodiac=9}}
  if(printMonth=='September') {if(printDay<=22) {printZodiac=9}else {printZodiac=10}}
  if(printMonth=='October') {if(printDay<=22) {printZodiac=10}else {printZodiac=11}}
  if(printMonth=='November') {if(printDay<=21) {printZodiac=11}else {printZodiac=12}}
  if(printMonth=='December') {if(printDay<=21) {printZodiac=12}else {printZodiac=1}}

  print("Submit button pressed.");
}
