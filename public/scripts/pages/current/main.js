$(document).ready(function() {
    var table = $('#example').DataTable( {
       lengthChange: false,
       buttons: [ 'excel', {
         extend: 'pdfHtml5',
         orientation: 'landscape',
         pageSize: 'LEGAL'
      }],
      language: {
         search: "Ara:",
         paginate: {
            previous: "Önceki",
            next: "Sonraki"
         },
         emptyTable: "Tabloda Gösterilecek İş Yok",
      },
      order: [
         [0, 'desc'],
         [1, 'asc']
      ]
    });
 
    table.buttons().container()
       .appendTo('#example_wrapper .col-md-6:eq(0)');
 });

function goJobPage() {
   event.stopPropagation();
   var page = "/job/" + rightClickMenuText_UUID.value;
   talert('danger', 'Bu işlem şu anda geliştirilme aşamasındadır.<br>Lütfen gelecek güncellemelerde tekrar deneyin.', 'Tüm Detaylar', 'Tamam');
   /* window.location.href = page; */
}
// Job Active Status
const ContextMenu_JobType = document.getElementById("ContextMenu_JobType");

ContextMenu_JobType.addEventListener('click', function(event) {
   var sutunId = rightClickMenuText_ID.value;
   var name = rightClickMenuText_Type.value;
   var jobType = rightClickMenuText_ActiveVal.value;
   if(name == "TUR") {
      name = "Turu";
      name2 = "Tur";
   }
   if(name == "TRANSFER") {
      name = "Transferi";
      name2 = "Transfer";
   }
   if(name == "TRANSFER + TUR") {
      name = "Transfer + Turu";
      name2 = "Transfer + Tur";
   }
   if(name == "DURAKLAMALI TRANSFER") {
      name = "Duraklamalı Transferi";
      name2 = "Duraklamalı Transfer";
   }
   if(name == "KARŞILAMA") {
      name = "Karşılamayı";
      name2 = "Karşılama";
   }
   if(name == "DEPAR") {
      name = "Deparı";
      name2 = "Depar";
   }
   let alertText;
   let statusAlert;
   if(jobType == "in-progress")
   {
      alertText = 'Bu '+ name + ' , \"İş Yapıldı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      statusAlert = "success";
   }
   else if(jobType == "done")
   {
      alertText = 'Bu '+ name + ' , \"İş Yapılmadı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      statusAlert = "warning";
   }
   if(event.ctrlKey) {
      JobTypeFunc(jobType);
   }
   else {
      talert(statusAlert, alertText, "İş Durumu", "Devam Et", function() {
         JobTypeFunc(jobType);
      });
   }
   function JobTypeFunc(type) {
      const dataTableTr = document.getElementById("tableTrElementId-"+sutunId);
      if(type == "in-progress")
      {
         $.post("../jobs/check.php", { sutunId: sutunId })
         .done(function(response) {
            dataTableTr.setAttribute("job-status", "done");
            rightClickMenuBtn_Active.innerHTML = '<i class="fa-solid fa-check"></i> İş Yapıldı';
            DataColor(dataTableTr, "success");
            talert("success", "İş yapıldı olarak güncellendi", "İş Durumu");
         })
         .fail(function() {
            talert("danger", "Bir hata oluştu lütfen destek ile iletişime geçin", "İş Durumu", "Destek", null, null, "/support");
         });
      }
      else if(type == "done")
      {
         $.post("../jobs/restore.php", { sutunId: sutunId })
         .done(function(response) {
            dataTableTr.setAttribute("job-status", "in-progress");
            rightClickMenuBtn_Active.innerHTML = '<i class="fa-regular fa-heart"></i> İş Yapılmadı';
            DataColor(dataTableTr, null);
            talert("warning", "İş yapılmadı olarak güncellendi", "İş Durumu");
         })
         .fail(function() {
            talert("danger", "Bir hata oluştu lütfen destek ile iletişime geçin", "İş Durumu", "Destek", null, null, "/support");
         });
      }
   }
});

// Job Active Cancel
const ContextMenu_Cancel = document.getElementById("ContextMenu_Cancel");

ContextMenu_Cancel.addEventListener('click', function(event) {
   var sutunId = rightClickMenuText_ID.value;
   var name = rightClickMenuText_Type.value;
   var jobType = rightClickMenuText_ActiveVal.value;
   if(name == "TUR") {
      name = "Turu";
      name2 = "Tur";
   }
   if(name == "TRANSFER") {
      name = "Transferi";
      name2 = "Transfer";
   }
   if(name == "TRANSFER + TUR") {
      name = "Transfer + Turu";
      name2 = "Transfer + Tur";
   }
   if(name == "DURAKLAMALI TRANSFER") {
      name = "Duraklamalı Transferi";
      name2 = "Duraklamalı Transfer";
   }
   if(name == "KARŞILAMA") {
      name = "Karşılamayı";
      name2 = "Karşılama";
   }
   if(name == "DEPAR") {
      name = "Deparı";
      name2 = "Depar";
   }
   let alertText;
   let statusAlert;
   if(jobType == "cancel")
   {
      alertText = 'Bu '+ name + ' , \"İş İptalini\" Kaldırmak İstediğinize Emin Misiniz?';
      statusAlert = "warning";
   }
   else
   {
      alertText = 'Bu '+ name + ' , \"İş İptal Edildi\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      statusAlert = "danger";
   }
   if(event.ctrlKey) {
      CancelFunc(jobType);
   }
   else {
      talert(statusAlert, alertText, "İş Durumu", "Devam Et", function() {
         CancelFunc(jobType);
      });
   }
   function CancelFunc(type) {
      const dataTableTr = document.getElementById("tableTrElementId-"+sutunId);
      if(type != "cancel")
      {
         $.post("../jobs/cancel.php", { sutunId: sutunId })
         .done(function(response) {
            dataTableTr.setAttribute("job-status", "cancel");
            DataColor(dataTableTr, "danger");
            talert("danger", "İş iptal edildi", "İş Durumu");
         })
         .fail(function() {
            talert("danger", "Bir hata oluştu lütfen destek ile iletişime geçin", "İş Durumu", "Destek", null, null, "/support");
         });
      }
      else
      {
         $.post("../jobs/restore.php", { sutunId: sutunId })
         .done(function(response) {
            dataTableTr.setAttribute("job-status", "in-progress");
            DataColor(dataTableTr, null);
            talert("success", "İş iptali kaldırıldı. İş yapılmadı olarak yeniden güncellendi", "İş Durumu");
         })
         .fail(function() {
            talert("danger", "Bir hata oluştu lütfen destek ile iletişime geçin", "İş Durumu", "Destek", null, null, "/support");
         });
      }
   }
});

/* Money Receive Passenger */

const ContextMenu_MoneyReceive_Passenger = document.getElementById("ContextMenu_MoneyReceive_Passenger");

ContextMenu_MoneyReceive_Passenger.addEventListener('click', function(event) {
   const id = rightClickMenuText_ID.value;
   const MoneyReceive = rightClickMenuText_MoneyReceive_Passenger.value;
   let typeName = rightClickMenuText_Type.value;

   switch (typeName) {
      case "TUR":
         typeName = "Turu";
            break;
      case "TRANSFER":
         typeName = "Transferi";
            break;
      case "TRANSFER + TUR":
         typeName = "Transfer + Turu";
            break;
      case "DURAKLAMALI TRANSFER":
         typeName = "Duraklamalı Transferi";
            break;
      default:
         typeName = "İşi";
   }

   let receive_status;
   let alertText;
   let statusAlert;

   if (MoneyReceive == "0") {
      receive_status = "1";
      if(parseFloat(rightClickMenuText_ResultNoFormat.value) < 0) {
         alertText = 'Bu ' + typeName + ' , \"Şoför Borcu Ödendi\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      }
      else {
         alertText = 'Bu ' + typeName + ' , \"Şoför Ödemesi Alındı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      }
      statusAlert = "success";
   } else {
      receive_status = "0";
      if(parseFloat(rightClickMenuText_ResultNoFormat.value) < 0) {
         alertText = 'Bu ' + typeName + ' , \"Şoför Borcu Ödenmedi\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
         statusAlert = "danger";
      }
      else {
         alertText = 'Bu ' + typeName + ' , \"Şoför Ödemesi Alınmadı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
         statusAlert = "warning";
      }
   }

   if(event.ctrlKey) {
      MoneyReceive_Passenger_Func();
   }
   else {
      talert(statusAlert,alertText, "Şoför Borcu", "Devam Et", function() {
         MoneyReceive_Passenger_Func();
      }, "İptal");
   }
   function MoneyReceive_Passenger_Func() {
      $.post("../php/jobs/money_receives/passenger.php", { id: id, receive_status: receive_status })
         .done(function(response) {
            const dataTableMoneyReceive_Passenger = document.getElementById("data-tableMoneyReceive_Passenger-"+id);
            const dataTablePaymentResult = document.getElementById("data-tablePaymentResult-"+id);
            if (receive_status == "1") {
               dataTableMoneyReceive_Passenger.setAttribute("aria-label", "1");
               dataTablePaymentResult.innerHTML = rightClickMenuText_Result.value;
               if(TableDataIntegerFunction(dataTablePaymentResult.innerText,dataTablePaymentResult, "return") == "danger") {
                  DataColor(dataTablePaymentResult, "success");
                  talert("success", "Şoföre olan borç ödendi olarak güncellendi", "Şoför Borç");
                  rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-solid fa-circle-check"></i> Şoför Borcu Ödendi';
               }
               else {
                  DataColor(dataTablePaymentResult, "success");
                  talert("success", "Şoförden ödeme alındı olarak güncellendi", "Şoför Borç");
                  rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-solid fa-circle-check"></i> Şoför Ödemesi Alındı';
               }
            } else {
               dataTableMoneyReceive_Passenger.setAttribute("aria-label", "0");
               dataTablePaymentResult.innerHTML = rightClickMenuText_Result.value;
               if(TableDataIntegerFunction(dataTablePaymentResult.innerText,dataTablePaymentResult, "return") == "success") {
                  DataColor(dataTablePaymentResult, "warning");
                  talert("warning", "Şoförden ödeme bekleniyor olarak güncellendi<br>Şoför Borcu: " + rightClickMenuText_Result.value, "Şoför Borç");
                  rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-regular fa-circle-check"></i> Şoför Borcu Ödenmedi';
               }
               else {
                  DataColor(dataTablePaymentResult, "danger");
                  talert("danger", "Şoföre olan borç ödenmedi olarak güncellendi<br>Şoföre Olan Borcunuz: " + rightClickMenuText_Result.value, "Şoför Borç");
                  rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-regular fa-circle-check"></i> Şoför Ödemesi Alınmadı';
               }
            }
         })
         .fail(function() {
            talert('danger', 'Bir hata oluştu lütfen destek ile iletişime geçin<br>Eğer destek ekibine bağlanamazsanız lütfen bağlantınızı kontrol edin', 'İşlem Hatası', 'Destek', null, null, ['https://trizola.com/support', 'blank']);
        });
   }
});

const filterContainer = document.querySelectorAll(".filterContainer");
filterContainer.forEach((filterCon) => {
   const tableModeInputBox = filterCon.querySelectorAll(".tableModeInputBox");
   tableModeInputBox.forEach((modeInputBox) => {
      const inputBtns = modeInputBox.querySelectorAll(".tableModeInputSide input");
      inputBtns.forEach((inputBtn) => {
         inputBtn.addEventListener("click", function() {
            inputBtns.forEach((inputBtn) => {
               inputBtn.classList.remove("active-mode-filter");
            });
            if(!inputBtn.classList.contains("clearModeInput")) {
               inputBtn.classList.add("active-mode-filter");
            }
         });
      });
   });
});

/* Money Receive Partner */

const ContextMenu_MoneyReceive_Partner = document.getElementById("ContextMenu_MoneyReceive_Partner");

ContextMenu_MoneyReceive_Partner.addEventListener('click', function(event) {
   const id = rightClickMenuText_ID.value;
   const MoneyReceive = rightClickMenuText_MoneyReceive_Partner.value;
   let typeName = rightClickMenuText_Type.value;

   switch (typeName) {
      case "TUR":
         typeName = "Turu";
            break;
      case "TRANSFER":
         typeName = "Transferi";
            break;
      case "TRANSFER + TUR":
         typeName = "Transfer + Turu";
            break;
      case "DURAKLAMALI TRANSFER":
         typeName = "Duraklamalı Transferi";
            break;
      default:
         typeName = "İşi";
   }

   let receive_status;
   let alertText;
   let statusAlert;

   if (MoneyReceive == "0") {
      receive_status = "1";
      if(parseFloat(rightClickMenuText_MoneyReceive_PartnerNoFormat.value) < 0) {
         alertText = 'Bu ' + typeName + ' , \"Tedarikçiye Ödemesi Yapıldı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      }
      else {
         alertText = 'Bu ' + typeName + ' , \"Tedarikçi Ödemesi Alındı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
      }
      statusAlert = "success";
   } else {
      receive_status = "0";
      if(parseFloat(rightClickMenuText_MoneyReceive_PartnerNoFormat.value) < 0) {
         alertText = 'Bu ' + typeName + ' , \"Tedarikçiye Ödemesi Yapılmadı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
         statusAlert = "danger";
      }
      else {
         alertText = 'Bu ' + typeName + ' , \"Tedarikçi Ödemesi Alınmadı\" Olarak İşaretlemek İstediğinize Emin Misiniz?';
         statusAlert = "warning";
      }
   }

   if(event.ctrlKey) {
      MoneyReceive_Partner_Func();
   }
   else {
      talert(statusAlert,alertText, "Tedarikçi Ödemesi", "Devam Et", function() {
         MoneyReceive_Partner_Func();
      });
   }
   function MoneyReceive_Partner_Func() {
      $.post("../php/jobs/money_receives/partner.php", { id: id, receive_status: receive_status })
         .done(function(response) {
            const dataTableMoneyReceive_Partner = document.getElementById("data-tableMoneyReceive_Partner-"+id);
            if (receive_status == "1") {
               dataTableMoneyReceive_Partner.setAttribute("aria-label", "1");
               dataTableMoneyReceive_Partner.innerHTML = dataTableMoneyReceive_Partner.getAttribute("value");
               if(TableDataIntegerFunction(dataTableMoneyReceive_Partner.getAttribute("value"),dataTableMoneyReceive_Partner, "return") == "danger") {
                  DataColor(dataTableMoneyReceive_Partner, "success");
                  talert("success", "Tedarikçiye ödeme yapıldı olarak güncellendi<br>Tedarikçi Payı: " + dataTableMoneyReceive_Partner.getAttribute("value"), "Tedarikçi Ödemesi");
                  rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tedarikçiye Ödeme Yapıldı';
               }
               else {
                  DataColor(dataTableMoneyReceive_Partner, "success");
                  talert("success", "Tedarikçi ödemesi alındı olarak güncellendi<br>Tedarikçi Payı: " + dataTableMoneyReceive_Partner.getAttribute("value"), "Tedarikçi Ödemesi");
                  rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tedarikçi Ödemesi Alındı';
               }
            } else {
               dataTableMoneyReceive_Partner.setAttribute("aria-label", "0");
               dataTableMoneyReceive_Partner.innerHTML = dataTableMoneyReceive_Partner.getAttribute("value");
               if(TableDataIntegerFunction(dataTableMoneyReceive_Partner.getAttribute("value"),dataTableMoneyReceive_Partner, "return") == "success") {
                  DataColor(dataTableMoneyReceive_Partner, "warning");
                  talert("warning", "Tedarikçi ödemesi alınmadı olarak güncellendi<br>Tedarikçi Payı: " + dataTableMoneyReceive_Partner.getAttribute("value"), "Tedarikçi Ödemesi");  
                  rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-regular fa-circle-check"></i> Tedarikçi Ödemesi Alınmadı';
               }
               else {
                  DataColor(dataTableMoneyReceive_Partner, "danger");
                  talert("danger", "Tedarikçiye ödeme yapılmadı olarak güncellendi<br>Tedarikçi Payı: " + dataTableMoneyReceive_Partner.getAttribute("value"), "Tedarikçi Ödemesi");  
                  rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-regular fa-circle-check"></i> Tedarikçiye Ödeme Yapılmadı';
               }
            }
         })
         .fail(function() {
            talert('danger', 'Bir hata oluştu lütfen destek ile iletişime geçin<br>Eğer destek ekibine bağlanamazsanız lütfen bağlantınızı kontrol edin', 'İşlem Hatası', 'Destek', null, null, ['https://trizola.com/support', 'blank']);
        });
   }
});

const ContextMenu_DeleteFunc = document.getElementById("ContextMenu_DeleteFunc");
ContextMenu_DeleteFunc.addEventListener("click", function(event){
   if(event.ctrlKey) {
      deleteFunc(true, "rightClick");
   }
   else {
      deleteFunc(false, "rightClick");
   }
});

function deleteFunc(CtrlKey, where, sutunId, name) {
   event.stopPropagation();
   if(where == "rightClick") {
      sutunId = rightClickMenuText_ID.value;
      name = rightClickMenuText_Type.value;
   }
   if(name == "TUR") {
      name = "Turu";
      name2 = "Tur";
   }
   if(name == "TRANSFER") {
      name = "Transferi";
      name2 = "Transfer";
   }
   if(name == "TRANSFER + TUR") {
      name = "Transfer + Turu";
      name2 = "Transfer + Tur";
   }
   if(name == "DURAKLAMALI TRANSFER") {
      name = "Duraklamalı Transferi";
      name2 = "Duraklamalı Transfer";
   }
   if(name == "KARŞILAMA") {
      name = "Karşılamayı";
      name2 = "Karşılama";
   }
   if(name == "DEPAR") {
      name = "Deparı";
      name2 = "Depar";
   }
   function deleteFunctionAjax() {
      $.post("../jobs/delete.php", { sutunId: sutunId })
      .done(function(response) {
         if (response === "Sütun başarıyla silindi") {
            $("tr[data-sutunId='" + sutunId + "']").remove();
         }
         if(where == "rightClick" && rightClickMenuText_Date.innerText.trim() != "") {
            talert("success", rightClickMenuText_Date.innerText + " Tarihli " + name + " Sildiniz");
         }
         else {
            talert("success", name + " Sildiniz");
         }
         setTimeout(function() {
            location.reload();
         }, 2000);
      });
   }
   if(CtrlKey !== true) {
      if(where == "rightClick" && rightClickMenuText_Date.innerText != "") {
         talert("danger", rightClickMenuText_Date.innerText + " Tarihli " + name + " Silmek İstediğinize Emin Misiniz?", name2 + " Silinecek", name + " Sil", function() {
            deleteFunctionAjax();
         });
      }
      else {
         talert("danger", "Bu " + name + " Silmek İstediğinize Emin Misiniz?", name2 + " Silinecek", name + " Sil", function() {
            deleteFunctionAjax();
         });
      }
   }
   else {
      deleteFunctionAjax();
      if(where == "rightClick" && rightClickMenuText_Date.innerText.trim() != "") {
         talert("success", rightClickMenuText_Date.innerText + " Tarihli " + name + " Sildiniz");
      }
      else {
         talert("success", name + " Sildiniz");
      }
   }
}
function copy(where,datetxt, partner, driver,receive,progress_payment,payment,cost,result,taken)
{
   if(where == "rightClick")
   {
      datetxt = rightClickMenuText_Date.innerText;
      partner = rightClickMenuText_Partner.value;
      driver = rightClickMenuText_Driver.value;
      receive = rightClickMenuText_Receive.value;
      progress_payment = rightClickMenuText_ProgressPayment.value;
      payment = rightClickMenuText_Payment.value;
      cost = rightClickMenuText_Cost.value;
      result = rightClickMenuText_Result.value;
      taken = rightClickMenuText_Taken.value;
   }
   event.stopPropagation();

   var text =
   "Tarih : "+ datetxt + "\n" +
   "İş Ortağı : " + partner + "\n" + 
   "Şoför : " + driver + "\n" +
   "Müşteriden Alınacak : " + receive + "\n" +
   "Hakediş : " + progress_payment + "\n" +
   "Ödeme : " + payment + "\n" +
   "Maliyet : " + cost + "\n" +
   "Borç : " + result + "\n" + 
   "Alacak : " + taken;

   navigator.clipboard.writeText(text)
      .then(function() {
            talert("success",datetxt + " Tarihli İşin Bilgileri<br>Panoya Kopyalandı");
      })
      .catch(function(error) {
            talert("danger", "Bilgiler Kopyalanırken Bir Hata Oluştu");
      });
}
function copyThis()
{
   const element = rightClickMenuTdElement.value;
   navigator.clipboard.writeText(element);

   talert("success", `❝ ${element} ❞`, "Hücre Kopyalandı");
}
function tableCellOpen() {
   console.log("çalıştı");
}
function tableCellPost() {
   $.post("/php/cell.php", { 
      id: rightClickMenuText_ID.value,
      table: rightClickMenuTdElement_Data.value,
      line: rightClickMenuTdElement_Line.value,
      input: cellEditInput.value,
   })
   .done(function(response) {
      if(response === "update php success") {
         const TrElement = document.querySelector(`tr[columnID="${rightClickMenuText_ID}"]`);
         const TdElement = TrElement.querySelector(`td[data="${rightClickMenuTdElement_Data}"][line="${rightClickMenuTdElement_Line}"]`);
         TdElement.innerText = cellEditInput.value;
         closeEditCell();
      }
   });
}
function tableCellClose() {
   
}
function copyDate()
{
   const element = rightClickMenuText_Date.innerText;
   navigator.clipboard.writeText(element)
      .then(function() {
         talert("success", element, "Tarih Kopyalandı");
      })
      .catch(function() {
         talert("danger", "Tarih Kopyalanırken Bir Sorun Oluştu")
      });
}
function copyBox(value, name) {
   event.stopPropagation();

   switch (name) {
      case "all-split": 
      var text = "Toplam Tedarikçi Payı : " + value; 
      var alertText = "Toplam Tedarikçi Payı";
      break;

      case "all-debt":
      var text = "Toplam Borç : " + value; 
      var alertText = "Toplam Borç";
      break;

      case "all-taken":
      var text = "Toplam Alacak : " + value; 
      var alertText = "Toplam Alacak";
      break;
   }

   navigator.clipboard.writeText(text)
      .then(function() {
         talert("success", alertText + " Panoya Kopyalandı");
      })
      .catch(function() {
         talert("danger", alertText + " Kopyalanırken Bir Sorun Oluştu");
      });
}
function copyText(info,element)
{
     const text = element.innerText;
     const tempInput = document.createElement('input');
     document.body.appendChild(tempInput);
     tempInput.value = info+text;
     tempInput.select();
     document.execCommand('copy');
     document.body.removeChild(tempInput);

     alert("Metin Kopyalandı\n\n"+tempInput.value);
}
function goPartnerPage(id)
{
   window.open("../partners/partner=" + id);
}
function goDriverPage(id)
{
   window.open("../drivers/driver="+id);
}
function duzenle(where,id)
{
   event.stopPropagation();
   if(where == "rightClick")
   {
      id = rightClickMenuText_ID.value;
   }
   window.location.href = "../jobs/edit/job=" + id;
}