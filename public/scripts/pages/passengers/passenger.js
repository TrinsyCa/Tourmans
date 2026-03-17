function deletepassenger(sutunId, sutunName) {
    if (confirm("Bu Müşteriyi Silmek İstediğinize Emin Misiniz?")) {
       if (confirm("Müşteri Silinecek , Onaylıyor Musunuz ?")) {
          $.post("delete.php", { sutunId: sutunId, sutunName: sutunName })
             .done(function (response) {
                if (response === "Sütun başarıyla silindi") {
                   $("tr[data-sutunId='" + sutunId + "']").remove();
                }
                console.log(response);

                window.location.href = "./";
             })
             .fail(function () {
                console.log("Sütün silinirken bir hata oluştu");
             });
       }
    }
 }



 function deletecomment(sutunId, sutunName) {
    if (confirm("Bu Yorum Fotoğrafını Silmek İstediğinize Emin Misiniz?")) {
       $.post("deletecomment.php", { sutunId: sutunId, sutunName: sutunName })
          .done(function (response) {
             if (response === "Sütun başarıyla silindi") {
                $("tr[data-sutunId='" + sutunId + "']").remove();
             }
             console.log(response);

             location.reload();
          })
          .fail(function () {
             console.log("Sütün silinirken bir hata oluştu");
          });
    }
 }

 function activeBtn() {
    var fileBtn = document.getElementById("fileBtn");
    fileBtn.style.opacity = "1";
    fileBtn.style.pointerEvents = "auto";
    fileBtn.style.transform = "translate(-50%,-50%)";
 }


 function submitImageName() {
    var fileInput = document.getElementById("comment");
    var imageName = fileInput.value.split('\\').pop(); // Get the filename from the full path
    var hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "img");
    hiddenInput.setAttribute("value", imageName);

    var form = document.getElementById("uploadForm");
    form.appendChild(hiddenInput);
    form.submit();
 }





 function yapildi(sutunId, name) {
    event.stopPropagation();
    if (name == "TUR") {
       name = "Turu";
       name2 = "Tur";
    }
    if (name == "TRANSFER") {
       name = "Transferi";
       name2 = "Transfer";
    }
    if (confirm('Bu ' + name + " Yapıldığı İçin Arşive Almak İstediğinize Emin Misiniz?")) {
       if (confirm('Bu ' + name2 + ' Arşive Alınacak , Onaylıyor Musunuz ?')) {
          $.post("../jobs/check.php", { sutunId: sutunId })
             .done(function (response) {
                if (response === "Sütun başarıyla silindi") {
                   $("tr[data-sutunId='" + sutunId + "']").remove();
                }
                console.log(response);

                location.reload();
             })
             .fail(function () {
                console.log("Sütün arşive alınırken bir hata oluştu");
             });
       }
    }
 }

 function geriyukle(sutunId, name) {
    event.stopPropagation();
    if (name == "TUR") {
       name = "Turu";
       name2 = "Tur";
    }
    if (name == "TRANSFER") {
       name = "Transferi";
       name2 = "Transfer";
    }
    if (confirm('Bu Arşivlenmiş ' + name + " Arşivlerden Çıkarmak İstediğinize Emin Misiniz?")) {
       if (confirm('Bu ' + name2 + ' Arşivden Çıkarılacak , Onaylıyor Musunuz ?')) {
          $.post("../jobs/restore.php", { sutunId: sutunId })
             .done(function (response) {
                if (response === "Sütun başarıyla silindi") {
                   $("tr[data-sutunId='" + sutunId + "']").remove();
                }
                console.log(response);

                location.reload();
             })
             .fail(function () {
                console.log("Sütün arşiv ile ilgili bir hata oluştu");
             });
       }
    }
 }

 function reservationsyapildi(sutunId, name) {
    event.stopPropagation();
    if (name == "TUR") {
       name = "Turu";
       name2 = "Tur";
    }
    if (name == "TRANSFER") {
       name = "Transferi";
       name2 = "Transfer";
    }
    if (confirm('Bu ' + name + " Yapıldığı İçin Arşive Almak İstediğinize Emin Misiniz?")) {
       if (confirm('Bu ' + name2 + ' Arşive Alınacak , Onaylıyor Musunuz ?')) {
          $.post("../reservations/check.php", { sutunId: sutunId })
             .done(function (response) {
                if (response === "Sütun başarıyla silindi") {
                   $("tr[data-sutunId='" + sutunId + "']").remove();
                }
                console.log(response);

                location.reload();
             })
             .fail(function () {
                console.log("Sütün arşive alınırken bir hata oluştu");
             });
       }
    }
 }

 function reservationsgeriyukle(sutunId, name) {
    event.stopPropagation();
    if (name == "TUR") {
       name = "Turu";
       name2 = "Tur";
    }
    if (name == "TRANSFER") {
       name = "Transferi";
       name2 = "Transfer";
    }
    if (confirm('Bu Arşivlenmiş ' + name + " Arşivlerden Çıkarmak İstediğinize Emin Misiniz?")) {
       if (confirm('Bu ' + name2 + ' Arşivden Çıkarılacak , Onaylıyor Musunuz ?')) {
          $.post("../reservations/restore.php", { sutunId: sutunId })
             .done(function (response) {
                if (response === "Sütun başarıyla silindi") {
                   $("tr[data-sutunId='" + sutunId + "']").remove();
                }
                console.log(response);

                location.reload();
             })
             .fail(function () {
                console.log("Sütün arşiv ile ilgili bir hata oluştu");
             });
       }
    }
 }

 function copy(elementId) {
    const element = document.getElementById(elementId);
    const copiedContent = element.value;
    navigator.clipboard.writeText(copiedContent);
 }

 function copyAll(name_surname, phone, country, social, email, about) {
    let element = "";

    if (name_surname && document.getElementById(name_surname).value) {
       element += "Müşteri : " + document.getElementById(name_surname).value + "\n";
    }
    if (phone && document.getElementById(phone).value) {
       element += "Telefon : +" + document.getElementById(phone).value + "\n";
    }
    if (country && document.getElementById(country).value) {
       element += "Ülke : " + document.getElementById(country).value + "\n";
    }
    if (social && document.getElementById(social).value) {
       element += "İnstagram : @" + document.getElementById(social).value + "\n";
    }
    if (email && document.getElementById(email).value) {
       element += "Email : " + document.getElementById(email).value + "\n";
    }
    /*
    ? Hakkında Bölümü Kopyalama
    if (about && document.getElementById(about).value) {
        element += "\nHakkında : " + document.getElementById(about).value + "\n";
    }*/

    const copiedContent = element.trim();
    navigator.clipboard.writeText(copiedContent);
    alert(name_surname + " Bilgileri Kopyalandı");
 }



 var dateFilter = document.querySelector(".dateFilter");
 var dateFilterBox = document.querySelector(".dateFilterBox");
 function opendateFilter() {
    dateFilter.style.backdropFilter = "blur(5px)";
    dateFilter.style.pointerEvents = "auto";
    dateFilter.style.background = "rgba(255,255,255,0.1)";
    dateFilter.style.transitionDelay = "0";
    dateFilterBox.style.scale = "1";
    dateFilterBox.style.opacity = "1";
    dateFilterBox.style.transitionDelay = "0.3s";
 }
 function closedateFilter() {
    dateFilter.style.backdropFilter = "blur(0)";
    dateFilter.style.pointerEvents = "none";
    dateFilter.style.background = "0";
    dateFilterBox.style.transitionDelay = "0";
    dateFilter.style.transitionDelay = "0.3s";
    dateFilterBox.style.scale = "0";
    dateFilterBox.style.opacity = "0";
 }

 var table = document.getElementById("table");

 $(document).ready(function () {
    var table = $('#example').DataTable({
       lengthChange: false,
    });

    table.buttons().container()
       .appendTo('#example_wrapper .col-md-6:eq(0)');
 });

 var myheader1 = document.getElementById("header1");
 var myheader2 = document.getElementById("header2");

 function header1() {
    myheader1.classList.add("active");
    myheader2.classList.remove("active");
    table.style.transform = "translateX(0)";
 }
 function header2() {
    myheader1.classList.remove("active");
    myheader2.classList.add("active");
    table.style.transform = "translateX(-100%)";
 }

 $('#name_surname').on('input', function() {
    const nameSurnameValue = $(this).val(); // #name_surname inputunun değerini al
    const addNameSurnameElements = document.querySelectorAll(".add_name_surname"); // .add_name_surname sınıfına sahip tüm elementleri al
    const companyName = document.getElementById("panel_company_name").value;

    document.title = nameSurnameValue+" - "+companyName;
    
    addNameSurnameElements.forEach(function(element) {
       element.innerText = nameSurnameValue; // Her bir elementin içeriğini güncelle
    });
 });


 $(document).ready(function () {
    var previousValues = {
       name_surname: $('#name_surname').val(),
       phone: $('#phone').val(),
       country: $('#country').val(),
       social: $('#social').val(),
       email: $('#email').val(),
       about: $('#about').val(),
       friends: $('#friends').val(),
       passenger_id: $('#passenger_id').val()
    };

    function autoSave() {
       var currentValues = {
          name_surname: $('#name_surname').val(),
          phone: $('#phone').val(),
          country: $('#country').val(),
          social: $('#social').val(),
          email: $('#email').val(),
          about: $('#about').val(),
          friends: $('#friends').val(),
          passenger_id: $('#passenger_id').val()
       };

       if (JSON.stringify(currentValues) !== JSON.stringify(previousValues)) {
          $.ajax({
             url: "save_data.php",
             method: "POST",
             dataType: "text",
             data: {
                passenger_id: currentValues.passenger_id,
                name_surname: currentValues.name_surname,
                phone: currentValues.phone,
                country: currentValues.country,
                social: currentValues.social,
                email: currentValues.email,
                friends: currentValues.friends,
                about: currentValues.about
             },
             success: function (cevap) {
                if (cevap !== '') {
                   $("#passenger_id").val(cevap);
                }
             }
          });

          // Güncel değerleri sakla
          previousValues = currentValues;
       }
    }

    $('#name_surname, #phone, #country ,#email, #social, #comment, #about, #friends').on('input', function() {
       autoSave();
    });
 });

 function bigText(inputElement) {
    var box = inputElement;
    var topValue = box.getAttribute('data-topvalue');
    box.classList.add("bigText");
    box.classList.remove("smallText");
 }

 function smallText(inputElement) {
    var box = inputElement;
    box.classList.remove("bigText");
    box.classList.add("smallText");
 }

 function sil(sutunId, name) {
    event.stopPropagation();
    if (name == "TUR") {
       name = "Turu";
       name2 = "Tur";
    }
    if (name == "TRANSFER") {
       name = "Transferi";
       name2 = "Transfer";
    }
    if (confirm('Bu ' + name + " Silmek İstediğinize Emin Misiniz?")) {
       if (confirm('Bu ' + name2 + ' Silinecek , Onaylıyor Musunuz ?')) {
          $.post("../jobs/delete.php", { sutunId: sutunId })
             .done(function (response) {
                if (response === "Sütun başarıyla silindi") {
                   $("tr[data-sutunId='" + sutunId + "']").remove();
                }
                console.log(response);

                location.reload();
             })
             .fail(function () {
                console.log("Sütün silinirken bir hata oluştu");
             });
       }
    }
 }
 function duzenle(id) {
    window.location.href = "../jobs/job=" + id;
 }

 var menupassengers = document.getElementById("menupassengers");

 menupassengers.classList.add("active-menu");