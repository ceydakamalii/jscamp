/*
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
 Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
*/
let findPrime = function (...numbers) {
    for(let i=0; i<numbers.length;i++){
        let counter=0;
        if(numbers[i]==1){
            console.log(`${numbers[i]} sayi asal degildir.`)
            continue;
        }
        for(let j =2;j<numbers[i];j++){
            if(numbers[i]%j==0){
               counter++;
            }
        }
        if(counter==0){
            console.log(`${numbers[i]} sayi asaldir.`)
        }
        else{
            console.log(`${numbers[i]} sayi asal degildir.`)
        }
        
    }
}
findPrime(3,5,1,10)

/*
2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
 (Arkadaş sayılar için google)
*/
let friendlyNumbers = function (a,b) {
    let counter1=0;
    let counter2=0;
    for(let i=1;i<a;i++){
        if(a%i==0){
            counter1+=i
        }
    }
    //console.log(counter1)
    for(let i=1;i<b;i++){
        if(b%i==0){
            counter2+=i
        }
    }
    //console.log(counter2)
    return counter1 == b && counter2 == a
    ? console.log(`${a} ve ${b} sayıları arkadaş sayılardır.`)
    : console.log(
        `${a} ve ${b} sayıları arkadaş sayı değillerdir.`
      );
}
friendlyNumbers(220,284)

/*
3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
*/
let perfectNumbers= function () {

    for(let i=2;i<1000;i++){
        let counter=0;
        for(let j=1;j<i;j++){
            if(i%j==0){
                counter+=j
            }
        }
        if(counter==i){
            console.log(`${i} mükkemmel sayidir.`)
        }
    }
    
}
perfectNumbers()

/*
4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/
let findPrime2 = function() {

    for(let i=2;i<1000;i++){
        let counter=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                counter++;
            }
        }
        if(counter==0){
            console.log(`${i} asal sayidir.`)
        }
        
    } 
}
findPrime2()