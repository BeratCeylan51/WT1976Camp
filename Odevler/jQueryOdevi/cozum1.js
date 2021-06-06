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
    var sayi = $("h2").length; // h2 etiketlerinin eleman sayısını sayi değişkenine ata
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
      .siblings("h2") // p etiketi ile aynı grupta bulunan h2 etiketini seç
      .append(" (" + metin.length + " karakter)"); // sonuna karakter sayısını ekle
  });
});

// görev 5
$("#gorev5").click(function ()
{
    $("h1").css("color", "red");
});
