function wp(element)
{
   var phone = element.innerHTML;
   console.log("telefona basıldı");
   if(phone > 0)
   {
      window.open("https://wa.me/"+phone);
   }
}


var dateFilter = document.querySelector(".dateFilter");
var dateFilterBox = document.querySelector(".dateFilterBox");
function opendateFilter()
{
   dateFilter.classList.add("active");
}
function closedateFilter()
{
   dateFilter.classList.remove("active");
}

document.addEventListener("keydown", function(event) {
   if (event.key === "F5") {
       window.location.href = "./";
   }
});

$(document).ready(function() {
   var table = $('#example').DataTable( {
      lengthChange: false,
      buttons: [ 
         {
            extend: 'copy',
            exportOptions: {
               columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            }
         },
         {
            extend: 'excel',
            exportOptions: {
               columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            }  
         },
         {
            extend: 'pdf',
            customize:function (doc) {
               doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
            },
            exportOptions: {
               columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            }
         },
      ],
      language: {
         search: "Ara:",
         paginate: {
            previous: "Önceki",
            next: "Sonraki"
         },
      },
      order: [
         [0, 'desc'],
         [1, 'asc']
      ]
   });
 
   table.buttons().container()
        .appendTo( '#example_wrapper .col-md-6:eq(0)' );
} );

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
   function yapildi(sutunId,name) {
   event.stopPropagation();
   if(name == "TUR")
   {
      name = "Turu";
      name2 = "Tur";
   }
   if(name == "TRANSFER")
   {
      name = "Transferi";
      name2 = "Transfer";
   }
   if(name == "TRANSFER + TUR")
   {
      name = "Transfer + Turu";
      name2 = "Transfer + Tur";
   }
   if(name == "DURAKLAMALI TRANSFER")
   {
      name = "Duraklamalı Transferi";
      name2 = "Duraklamalı Transfer";
   }
      if (confirm('Bu '+ name + " \"Yapılanlar\" Bölümüne Almak İstediğinize Emin Misiniz?")) {
         if(confirm('Bu '+name2+' \"Yapılanlar\" Alınacak , Onaylıyor Musunuz ?'))
         {
            $.post("check.php", { sutunId: sutunId })
            .done(function(response) {
               if (response === "Sütun başarıyla silindi") {
                  $("tr[data-sutunId='" + sutunId + "']").remove();
               }
               console.log(response);

               location.reload();
            })
            .fail(function() {
               console.log("Sütün arşive alınırken bir hata oluştu");
            });
         }
      }
   }
   function sil(sutunId,name) {
   event.stopPropagation();
   if(name == "TUR")
   {
      name = "Turu";
      name2 = "Tur";
   }
   if(name == "TRANSFER")
   {
      name = "Transferi";
      name2 = "Transfer";
   }
   if(name == "TRANSFER + TUR")
   {
      name = "Transfer + Turu";
      name2 = "Transfer + Tur";
   }
   if(name == "DURAKLAMALI TRANSFER")
   {
      name = "Duraklamalı Transferi";
      name2 = "Duraklamalı Transfer";
   }
      if (confirm('Bu '+ name + " Silmek İstediğinize Emin Misiniz?")) {
         if(confirm('Bu '+name2+' Silinecek , Onaylıyor Musunuz ?'))
         {
            $.post("delete.php", { sutunId: sutunId })
            .done(function(response) {
               if (response === "Sütun başarıyla silindi") {
                  $("tr[data-sutunId='" + sutunId + "']").remove();
               }
               console.log(response);

               location.reload();
            })
            .fail(function() {
               console.log("Sütün silinirken bir hata oluştu");
            });
         }
      }
   }
   function duzenle(id)
   {
      window.location.href = "edit/job=" + id;
   }

   var menujoblist = document.getElementById("menujoblist");

   menujoblist.classList.add("active-menu");