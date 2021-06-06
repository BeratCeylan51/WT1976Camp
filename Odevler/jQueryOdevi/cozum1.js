// gorev 3
$("#gorev3").click(function () // id'si gorev3 olan etikete tıklandığında fonksiyon çalıştır
{
    var h1Metni = $("h1").text(); // h1 etiketinin değerini h1Metni değişkenine atadık
    $("#gorev3 > input:text").val(h1Metni); // id'si gorev3 olan etiketin içerisindeki type text olan input etiketinin değerini h1Metni yap
});

// görev 4
$("#gorev4").click(function () // id'si gorev4 olan etikete tıklandığında fonksiyon çalıştır
{
  $("p").each(function (index, element) // p etiketlerinin herbirini gez fonksiyonu çalıştır.
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
