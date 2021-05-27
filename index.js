/**
  Na mdn https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects#funkcje

  jest kilka funkcji globalnych nalezacych do JS - przejrzyj je i zwroc uwage szczegolnie na takie jak:

  i wykonaj w konsoli (patrz ex_1) kilka cwiczen:

  parseInt(1e1);
  parseInt('0xFF');
  parseInt('0xFF', 10);
  parseInt('0xFF', 16);
  parseInt(0377, 10);
  parseInt('0377', 10);

  parseFloat('1e1');
  parseFloat('10.909em');
*/

parseInt('1e1');
1
parseInt('0xFF');
255
parseInt('0xFF', 10);
0
parseInt('0xFF', 16);
255
parseInt(0377, 10);
255
parseInt('0377', 10);
377
parseFloat('1e1');
10
parseFloat('10.909em');
10.909;



/*
  Napisz obiekt, ktory opisze Twoj telefon, czyli marka, model, color, ...
*/
const phone_1 = {
    brand: "samsung ",
    type: "note10",
    color: "black",
    system: "android",
};



/**
 * Napisz listę (array) zawierającą nazwy narzędzi potrzebnych w uprawie ogródka
 * (kilka max 5)
 * */

const array_garden = ["szpadel", "grabie", "lopata", "konewka"];




/**
 * Napisz funkcję fn, która jako parametr przyjmie obiekt z zadania ex_2_2
 * i zwroci marke i model w formie string,
 *
 * Napisz funkcje w 3 postaciach
 * 1. funkcja normalna - zdefiniowana z nazwa
 * 2. funkcja jako wartosc
 * 3. funkcja strzalkowa
 * */


//1
function fn(phone_1) {
    return phone_1.brand + phone_1.type;
}

//2

const fn_2 = function (phone_1) {
    return phone_1.brand + phone_1.type;
}

//3

const fn_3 = (phone_1) => {
    return phone_1.brand + phone_1.type;
}

//4
const fn_4 = phone_1 => phone_1.brand + phone_1.type;




/**
 * Napisz funkcje fn, która przyjmie jako parametr string np. 'koparka'
 * i zwroci string zlozony z pierwszej i ostatniej litery podanego w parametrze ciagu znakow
 * */

const array_1 = ['k','o', 'p', 'a', 'r', 'k', 'a'];

const fn_array = array_1 => array_1[0] + array_1[6];




/**
 * Mając opis operatorów: https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Expressions_and_Operators
 *
 * Zadeklaruj stala CITY_SPEED_LIMIT i przypisz jej wartosc 50,
 * zadeklaruj stala TWO_LANE_EXPRESSWAY_SPEED_LIMIT i przypisz jej wartosc 120,
 * zadeklaruj stala HIGHWAY_SPEED_LIMIT i przypisz jej wartosc 140.
 *
 * Utworz zmienna speed, w ktorej bedzie mozna zmieniac wartosc.
 * Niech wartosc poczatkowa tej zmiennej wynosi 49.
 *
 * Utworz zmienna typeOfRoad, w ktorej bedzie mozna zmieniac wartosc.
 * Niech wartosc poczatkowa tej zmiennej wynosi 'city'.
 *
 * przy uzyciu operatorów logiczne "i" i logiczne "lub"
 *
 * przeksztalc zdania na zapis programu sprawdzjącego czy jadę prawidlowo
 *
 * 1. Jadę przez miasto i mam prędkosć 70
 *
 * 2. Jadę autostradą i mam prędkoć 119
 *
 * 3. Jadę drogą ekspresowa i mam prędkosc 170
 *
 * - w jakis sposob mozna napisać funkcje, ktora przyjmie typ drogi i aktualna prędkosc i zwroci czy jade prawidlowo czy przekroczylem prędkosc
 *
 */


const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let typeOfRoad = "city";
let speed = 49; 
//let speed = window.prompt("podaj predkosc");


if (speed <= CITY_SPEED_LIMIT) {
    console.log("Jezdziesz prawidlowo");
}
    else {
    console.log("Zwolnij wariacie");   
}; 

if (speed = 70 || speed > CITY_SPEED_LIMIT  ) {
    console.log ("Jedziesz za szybko");
}  
    else {
        console.log ("jedziesz prawidlowo");
    }

if (speed = 119 &&  speed < HIGHWAY_SPEED_LIMIT) {
    console.log ("Jedziesz prawidlowo");
}
    else {
        console.log ("Jedziesz za szybko");
    }; 

if (speed = 170 &&  TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
    console.log ("Zwolnij");
} 
    else {
        console.log ("Jedziesz prawidlowo");
    }; 


function drive_safe (speed, typeOfRoad) {
    let CITY_SPEED_LIMIT = "city";
    let HIGHWAY_SPEED_LIMIT = "highway";
    let TWO_LANE_EXPRESSWAY_SPEED_LIMIT = "express";

if (speed > 50 && typeOfRoad == CITY_SPEED_LIMIT) {
    console.log("przekroczyles predkosc");
    }
    else {
        console.log("Jedziesz prawidlowo");
    }

if (speed > 120 && typeOfRoad == TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
    console.log("przekroczyles predkosc");
    }
    else {
        console.log("Jedziesz prawidlowo");
    }
} 
if (speed > 140 && typeOfRoad == HIGHWAY_SPEED_LIMIT) {
    console.log("przekroczyles predkosc");
    }
    else { 
    console.log("Jedziesz prawidlowo");
}


/**
 * Napisz funkcje fn, która przyjmie dowolny łańcuch znaków (domylnie niech to będzie 'koparka')
 * funkcja powinna zliczyć ilosc znaków i zwrocic o tym informacje
 *
 * czyli dla string 'koparka'
 * a - 2
 * k - 2
 * o - 1
 * p - 1
 *
 * Jezeli nie wiesz jak jak rozwiązac to zadanie - sprobuj zacząć - napisac na kartce co bys zrobil/a
 *  */

   /*function loop(koparka) {
 let dict = {};
    function count(ch) {
        if(!dict.hasOwnProperty(ch)){
            dict[ch] = 0;
        }
        dict[ch]++;
    }
    koparka.split('').forEach(count)
    console.log(dict);
};

*/




/*
Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.

Zróbmy proste teoretyczne założenie,
że jeżeli imię kończy się literą "a" to jest to żeńskie imię, w przeciwnym wypadku męskie.
Funkcja powinna zwracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.

Przykładowo:
checkFemale("Justyna") === true
checkFemale("Marcin") === false
*/



/**
 * Napisz funkcję, która przyjmie jako parametry:
 * - wartosc spalania samochodu np. 8.5,
 * - cene benzyny np. 5.56
 * - długosc trasy np 732
 *
 * niech funkcja zwróci sredni koszt przejechania danej trasy.
 *
 * Sprobuj napisac ta funkcje w ten sposob, ze jej dzialanie jest podzielone na dwie czesci
 * w pierwszej czesci funkcja przyjmuje tylko jeden parametr wartosc spalania samochodu
 * i zwraca funkcje, ktora przyjmuje pozostale parametry i dopiero wywolanie tej funkcji zwroci
 * koszt trasy
 * */
/*
function car(trasa, cena, spalanie ) {
    let trasa = 732;
    let cena = 5.56
    let spalanie = 8.5;

    function car_1(){
        
    }
}
*/





/**
 * Utwórz dwa obiekty. Kazdy z obiektów powinien opisywac owoc, tak zeby w opsie znalazly sie:
 * - nazwa
 * - cena za kilogram
 *
 * napisz funkcje, ktora przyjmie jako parametry:
 *
 * - obiekt z opisem owocu opisanego wyzej
 * - ilosc w kilogramach np. 0.83
 *
 * funkcja powinna zwrocic kwote do zaplaty, obliczona w sposob:
 * -- kiedy parametr drugi jest wiekszy rowny 1 wtedy kwota obliczana jest jako promocyjna ze znizka 10%
 * -- kiedy parametr drugi jest jest mniejszy od 1 kwote obliczamy od ceny podstawowej
 *
 * sprobuj, z pomoca domkniecia utworzyc curring tej funkcji.
 * */
