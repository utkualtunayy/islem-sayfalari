function asal() {

    var a = parseInt(document.getElementById("asal").value);
    if (!a) {
        alert("Lütfen bir sayı giriniz")
    } // işlem yanlış!!
    else if (a % a == 0) {
        document.getElementById("sonuc").innerHTML = "Girdiğiniz sayi asaldir".fontcolor("green")
    }
    else {
        document.getElementById("sonuc").innerHTML = "Girdiğiniz sayi asal değidir".fontcolor("red")
    }
}

function faktori() {
    var a = parseInt(document.getElementById("fak").value);
    if (!a) {
        alert("Lütfen bir sayı giriniz")
    }
    else {
        var islem = a * a;
        document.getElementById("sonuc").innerHTML = islem;
    }
}

function mod() {
    var mod;
    var sayi1 = parseInt(document.getElementById("mod1").value);
    var sayi2 = parseInt(document.getElementById("mod2").value);
    if (!sayi1 || !sayi2) {
        alert("Lütfen boş bırakmayınız")
    }
    else {
        mod = (sayi1 % sayi2)
        document.getElementById("sonuc").innerHTML = mod
    }
}

function mükemmel() {
    var sayi1 = parseInt(document.getElementById("mükemmel").value);
    var toplam = 0;

    for (var i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            toplam += i
        }
    }
    if (sayi1 == toplam) {

        document.getElementById("sonuc").innerHTML = ("mükemmel sayı").fontcolor("green")
    }
    else {
        document.getElementById("sonuc").innerHTML = ("mükemmel sayı değildir").fontcolor("red")

    }
}