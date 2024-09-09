/* Hipotenüs Hesabı Başlangıç */
function HesaplaHipotenus()
{
    var k1=Number(document.getElementById("dikkenar").value);
    var k2=Number(document.getElementById("uzunkenar").value);
    var hipotenus=Math.sqrt((k1*k1)+(k2*k2));
    document.getElementById("sonuc").innerHTML="Hipotenüs: "+hipotenus;
}
var hesaphipotenus=document.getElementById("sonucbutton");
hesaphipotenus.onclick=HesaplaHipotenus; 
/* Hipotenüs Hesabı Bitiş */

/* Üçgen Hesabı Başlangıç */
function HesaplaUcgenAlan()
{
    var k1=Number(document.getElementById("yukseklik").value);
    var k2=Number(document.getElementById("taban").value);
    var k3=Number(document.getElementById("ucgensolkenar").value);
    var k4=Number(document.getElementById("ucgensagkenar").value);
    var ucgen=((k1*k2)/2);
    var ucgencevre=(k2+k3+k4);
    document.getElementById("cevap").innerHTML="Üçgen Alanı: "+ucgen;
    document.getElementById("cevapcevre").innerHTML="Üçgen Çevresi: "+ucgencevre;            
}
var hesapucgen=document.getElementById("sonucucgen");
hesapucgen.onclick=HesaplaUcgenAlan; 
/* Üçgen Hesabı Bitiş */

/* Kare Hesabı Başlangıç */
function HesaplaKare()
{
    var k1=Number(document.getElementById("kenar").value);
    var k2=Number(document.getElementById("kenar").value);
    var kare=((k1*k1));
    var karecevre=((k2*4));
    document.getElementById("cevapkare").innerHTML="Karenin Alanı: "+kare;
    document.getElementById("cevapkarecevre").innerHTML="Karenin Çevresi: "+karecevre;
}
var hesapkare=document.getElementById("sonuckare");
hesapkare.onclick=HesaplaKare; 
/* Kare Hesabı Bitiş */


/* Yamuk Hesabı Başlangıç */
function HesaplaYamuk()
{
    var k1=Number(document.getElementById("yamukalttaban").value);
    var k2=Number(document.getElementById("yamuküsttaban").value);
    var k3=Number(document.getElementById("yamukyükseklik").value);
    var k4=Number(document.getElementById("yamuksolkenar").value);
    var k5=Number(document.getElementById("yamuksağkenar").value);
    var yamuk=(((k1*k2)/(2*k3)));
    var yamukcevre=((k1+k2+k4+k5));
    document.getElementById("cevapyamuk").innerHTML="Yamuk Alanı: "+yamuk;
    document.getElementById("cevapyamukcevre").innerHTML="Yamuk Çevre: "+yamukcevre;
}
var hesapyamuk=document.getElementById("yamuksonuc");
hesapyamuk.onclick=HesaplaYamuk; 
/* Yamuk Hesabı Bitiş */

/* Daire Hesabı Başlangıç */
function HesaplaDaire()
{
    var k1=Number(document.getElementById("daireyarıcap").value);
    var yamuk=(3.16*(k1*k1));
    var yamukcevre=(2*(3.16*k1));
    document.getElementById("cevapdaire").innerHTML="Daire Alanı: "+yamuk;
    document.getElementById("cevapdairecevre").innerHTML="Daire Çevresi: "+yamukcevre;
}
var hesapdaire=document.getElementById("dairesonuc");
hesapdaire.onclick=HesaplaDaire; 
/* Daire Hesabı Bitiş */

/* Küre Hesabı Başlangıç */
function HesaplaKüre()
{
    var k1=Number(document.getElementById("küreyarıcap").value);
    var küre=((4*3.16)*(k1*k1));
    var kürecevre=((2*3.16)*k1);
    document.getElementById("cevapküre").innerHTML="Küre Alanı: "+küre;
    document.getElementById("cevapkürecevre").innerHTML="Küre Çevresi: "+kürecevre;
}
var hesapküre=document.getElementById("küresonuc");
hesapküre.onclick=HesaplaKüre; 
/* Küre Hesabı Bitiş */

/* Faktöriyel Hesabı Başlangıç */
function HesaplaFaktöriyel(){
    var faktöriyelsayaç=1;
    var sayi=document.getElementById("faktöriyelsayi").value;
    sayi=Number(sayi);
     
    if(sayi>=0)
    {
     
    for(var i=1;i<=sayi;i++)
    {
    faktöriyelsayaç=faktöriyelsayaç*i;
    }
    document.getElementById("faktöriyelcevap").innerHTML=(sayi+" Sayısının Faktöriyeli "+faktöriyelsayaç);
    }
     
    }
     
    var hesapfaktöriyel=document.getElementById("faktöriyelsonuc");
    hesapfaktöriyel.onclick=HesaplaFaktöriyel;
/* Faktöriyel Hesabı Bitiş */

/* EBOB EKOK Hesabı Başlangıç */
function HesaplaEbobEkok()
{
    var k1=Number(document.getElementById("ebobekoksayı1").value);
    var k2=Number(document.getElementById("ebobekoksayı2").value);
    var kucukSayi = (k1 < k2) ? k1 : k2;
    
    for(var i = kucukSayi; i > 0; i--){
        if((k1%i == 0) && (k2%i == 0)){
            ebob = i;
            break;
        }
    }
    ekok = (k1 * k2) /ebob;
    document.getElementById("ebobcevap").innerHTML="EBOB: "+ebob;
    document.getElementById("ekokcevap").innerHTML="EKOK: "+ekok;
}
var hesapebobekok=document.getElementById("ebobekoksonuc");
hesapebobekok.onclick=HesaplaEbobEkok;
/* EBOB EKOK Hesabı Başlangıç */

/* Karekök Hesabı Başlangıç */

function HesaplaKarekök()
{
var k1=Number(document.getElementById("karekoksayı").value);
var karekok=Math.sqrt(k1);
document.getElementById("karekokcevap").innerHTML="Sayının Karekökü: "+karekok;
}
var hesapkarekök=document.getElementById("karekoksonuc");
hesapkarekök.onclick=HesaplaKarekök; 
/* Karekök Hesabı Başlangıç */

/* Öklit Uzaklığı Başlangıç */
function HesaplaOklit()
{
    var k1=Number(document.getElementById("anoktasıx").value);
    var k2=Number(document.getElementById("anoktasıy").value);
    var k3=Number(document.getElementById("bnoktasıx").value);
    var k4=Number(document.getElementById("bnoktasıy").value);
    var oklit=Math.sqrt(((k1-k3)*(k1-k3))+((k2-k3)*(k2-k3)));
    document.getElementById("uzaklıkcevap").innerHTML="Öklit Uzaklığı: "+oklit;
}
var hesapoklit=document.getElementById("uzaklıksonuc");
hesapoklit.onclick=HesaplaOklit; 
/* Öklit Uzaklığı Bitiş */

$(document).ready(function(){
    $("#index2renk").click(function(){
        $("#inputlar").css({"background-color":"#f0f8ff	"});
        $("body").css({"background-color":"#5f9ea0	"});
    });
});

$("#sonuckare").click(function(){
    var gen=Number($("#kenar").val());
    $("#kare").css({"width":gen,"height":gen,"border":"1px solid black","padding":"10px","margin":" auto","background-color":"black"});
});

$("#dikdörtgensonuc").click(function(){
    var gen=Number($("#dikdörtgenkısakenar").val());
    var yuk=Number($("#dikdörtgenuzunkenar").val());
    $("#dikdörtgen").css({"width":gen,"height":yuk,"border":"1px solid black","padding":"10px","margin":" auto","background-color":"black"});
});

$("#dikdörtgensonuc").bind('click',function(){
    var uzunluk=Number($("#dikdörtgenkısakenar").val());
    var genislik=Number($("#dikdörtgenuzunkenar").val());
    $("#cevapdikdörtgen").html("Dikdörtgen Alanı:"+genislik*uzunluk);
    $("#cevapdikdörtgencevre").html("Dikdörtgen Çevresi:"+2*(genislik+uzunluk));
});