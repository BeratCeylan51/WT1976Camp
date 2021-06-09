// görev 1
$("#gorev1").click(function () // id'si gorev1 olan etikete tıklandığında belirtilen fonksiyonu çalıştır
{
    $("h2").slice(0, 3).each(function () // h2 etiketlerinden ilk 3'ünü gez 
    {
        var metin = $(this).text(); // o anki etiketin içeriğini metin değişkenine ata
        $("<li/>").text(metin).appendTo("#gorev1 > ul"); // li etiketi oluştur. içeriğine metin değişkenini yaz id'si gorev1 olan etiketin içerisindeki ul etiketine ekle
    });
});

// görev 2
$("#gorev2").click(function() // id'si gorev2 olan etikete tıklandığında belirtilen fonksiyonu çalıştır
{
    var sayi = $("article > div > h2").length; // h2 etiketlerinin eleman sayısını sayi değişkenine ata
    $("#gorev2 > input:text").val(sayi); // id'si gorev2 olan etiketin tipi text olanların değerine sayi değişkenini ver
});

// gorev 3
$("#gorev3").click(function () // id'si gorev3 olan etikete tıklandığında fonksiyon çalıştır
{
    var h1Metni = $("h1").text(); // h1 etiketinin değerini h1Metni değişkenine atadık
    $("#gorev3 > input:text").val(h1Metni); // id'si gorev3 olan etiketin içerisindeki type text olan input etiketinin değerini h1Metni yap
});

// görev 4
$("#gorev4").click(function () // id'si gorev4 olan etikete tıklandığında fonksiyon çalıştır
{
  $("p").each(function () // p etiketlerinin herbirini gez fonksiyonu çalıştır.
  {
    var metin = $(this).text(); // p etiketlerinin içerisindeki metinleri metin değişkenine atadık
    $(this) // o anki p etiketi
      .siblings("h2") // p etiketi ile aynı grupta bulunan h2 etiketini seç yani kardeş etiketini
      .append(" (" + metin.length + " karakter)"); // sonuna karakter sayısını ekle
  });
});

// görev 5
$("#gorev5").click(function () // id'si gorev5 olan etikete tıklandığında fonksiyonu çalıştır
{
    $("article > div > h2:odd").css("color", "blue"); // article içindeki div içindeki h2'lerden indisi tek olanların rengini mavi yap
    $("article > div > h2:even").css("color", "orange"); // article içindeki div içindeki h2'lerden indisi çift olanların rengini turuncu yap
    $("h1").css("color", "red"); // h1 başlığının rengini kırmızı yap
});

// görev 6
$("#gorev6").click(function() // id'si gorev6 olan etikete tıklandığında fonksiyonu çalıştır
{
    $("article > div").first().fadeOut(2000); // h1 etiketinden sonraki ilk div etiketini 2 saniyede sönerek yok et
});

//görev 7
$("#gorev7").click(function() // id'si gorev7 olan elemente tıklandığında fonksiyon çalıştır
{
    $(":header:contains('can')").each(function() // başlıklardan can içerenleri tek tek gez belirtilen fonksiyonu çalıştır
    {
        var metin = $(this).text(); // o anki ifadenin metnini al metin değişkenine ata
        $("<li/>").text(metin).appendTo("#gorev7 > ul"); // li elementi oluştur içeriğine metin değişkenini ver id'si gorev7 olan elementin içindeki ul'ye ekle
    });

});

// görev 8
$("#gorev8").click(function() // id'si gorev8 olan elemente tıklandığında fonksiyon çalıştır
{
    $.ajax({
        url: "lorem.html", // dosyanın yolunu gösterdik
        type: "get", // dosyanın okuma tipi
        success: function(ifade) // başarılı olduğunda parametre olarak dosya2yı içerin fonksiyon çalıştır
        {
            var lorem = $("<h2> Lorem </h2>" + "<p>" + ifade + "</p>"); // h2 başlığı oluştur metni Lorem paragraf elementi oluştur içerisi fonksiyonun paramtresinde bulunan değer. lorem değişkenine ata

            $("h1").after(lorem); // h1 elementinden sonraya lorem değişkenini ekle
        }

    })
});

// görev 9
$(":header").mouseover(function() // başlıkların üzerine fare ile geldiğinde belirtilen fonksiyonu çalıştır
{
    var metin = $(this).text(); // o anki başlığın metnini metin değişkenine atadım
    $("#gorev9 > input:text").val(metin); // id'si gorev9 olan etiketin tipi text olan inputunun değerinii metin değişkeni yap
});

// görev 10
$("#gorev10").click(function() // id'si gorev10 olan elemente tıklandığında belirtilen fonksiyonu çalıştır
{
    var resim = $("<img src='check.png' />"); // html yöntemi ile resim ekledik resim değişkenine atadık

    $(resim).css("width", "100px") // resim değişkeninin genişliğini ayarladık
    .css("height", "100") // yükseklik 
    .css("position", "relative") // resmin pozisyonu // relative içerisinde bulunduğu elemente göre konumlandırılır
    .css("left", "760px") // sol kenardan uzaklığı
    .css("bottom", "150px"); // alt kenardan uzaklığı

    $(".sutun:eq(1)").append(resim); // class'ı sutun indis'i 1 olan elementin içinin sonuna ekle
});
