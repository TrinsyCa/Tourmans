/**
    * ? Profil Kutuları
    */
   /**
    * ? İş Ortağı Profil Kutuları
    */
   

   const partnerProfileBox = document.getElementById("partnerProfileBox");
   const partnerBoxID = document.getElementById("partnerBoxID");
   const partnerBoxName = document.getElementById("partnerBoxName");
   const partnerBoxPhone = document.getElementById("partnerBoxPhone");
   const partnerBoxPhone2 = document.getElementById("partnerBoxPhone2");
   const partnerBoxCategory = document.getElementById("partnerBoxCategory");
   const partnerBoxLink = document.getElementById("partnerBoxLink");

   function partnerProfileBoxActive(id,name_surname,phone,phone2,category)
   {
      partnerProfileBox.classList.add("active");

      partnerBoxID.value = id;
      partnerBoxName.value = name_surname;
      phone ? partnerBoxPhone.value = "+"+phone : partnerBoxPhone.value = "";
      phone2 ? partnerBoxPhone2.value = "+"+phone2 : partnerBoxPhone2.value = "";
      partnerBoxCategory.value = category;
      partnerBoxLink.href = "../partners/partner="+id;
   }

   function partnerProfileBoxActiveOver()
   {
      partnerProfileBox.classList.add("active");
   }

   function partnerProfileBoxDisable()
   {
      partnerProfileBox.classList.remove("active");
   }

   function partnerProfileBoxCopy(name, phone, phone2, category) {
      let element = "";

      var name = document.getElementById(name).value;
      var phone = document.getElementById(phone).value;
      var phone2 = document.getElementById(phone2).value;
      var category = document.getElementById(category).value;

      if (name) {
         element += "İş Ortağı : " + name + "\n";
      }
      if (phone) {
         element += "Telefon : " + phone + "\n";
      }
      if (phone2) {
         element += "2. Telefon : " + phone2 + "\n";
      }
      if (category) {
         element += "Tür : " + category + "\n";
      }

      const copiedContent = element.trim();
      navigator.clipboard.writeText(copiedContent);
      alert(name + " Bilgileri Kopyalandı");
   }

   /**
    * ? Şoför Profil Kutuları
    */


   const driverProfileBox = document.getElementById("driverProfileBox");
   const driverBoxID = document.getElementById("driverBoxID");
   const driverBoxNameSurname = document.getElementById("driverBoxNameSurname");
   const driverBoxPhone = document.getElementById("driverBoxPhone");
   const driverBoxSocial = document.getElementById("driverBoxSocial");
   const driverBoxBrand = document.getElementById("driverBoxBrand");
   const driverBoxPlateNo = document.getElementById("driverBoxPlateNo");
   const driverBoxLink = document.getElementById("driverBoxLink");

   function driverProfileBoxActive(id,name_surname,phone,social,brand,plate_no)
   {
      driverProfileBox.classList.add("active");

      driverBoxID.value = id;
      driverBoxNameSurname.value = name_surname;
      phone ? driverBoxPhone.value = "+"+phone : driverBoxPhone.value = "";
      social ? driverBoxSocial.value = "@"+social : driverBoxSocial.value = "";
      driverBoxBrand.value = brand;
      driverBoxPlateNo.value = plate_no;
      driverBoxLink.href = "../drivers/driver="+id;
   }

   function driverProfileBoxActiveOver()
   {
      driverProfileBox.classList.add("active");
   }

   function driverProfileBoxDisable()
   {
      driverProfileBox.classList.remove("active");
   }

   function driverProfileBoxCopy(name_surname, phone, social, brand, plate_no) {
      let element = "";

      var name_surname = document.getElementById(name_surname).value;
      var phone = document.getElementById(phone).value;
      var brand = document.getElementById(brand).value;
      var plate_no = document.getElementById(plate_no).value;
      var social = document.getElementById(social).value;

      if (name_surname) {
         element += "Şoför : " + name_surname + "\n";
      }
      if (phone) {
         element += "Telefon : " + phone + "\n";
      }
      if (brand) {
         element += "Araç Markası : " + brand + "\n";
      }
      if (plate_no) {
         element += "Plaka No : " + plate_no + "\n";
      }
      if (social) {
         element += "Instagram : " + social + "\n";
      }

      const copiedContent = element.trim();
      navigator.clipboard.writeText(copiedContent);
      alert(name_surname + " Bilgileri Kopyalandı");
   }

   /**
    * ? Müşteri Profil Kutuları
    */

   const passengerProfileBox = document.getElementById("passengerProfileBox");
   const passengerBoxID = document.getElementById("passengerBoxID");
   const passengerBoxNameSurname = document.getElementById("passengerBoxNameSurname");
   const passengerBoxPhone = document.getElementById("passengerBoxPhone");
   const passengerBoxSocial = document.getElementById("passengerBoxSocial");
   const passengerBoxCountry = document.getElementById("passengerBoxCountry");
   const passengerBoxEmail = document.getElementById("passengerBoxEmail");
   const passengerBoxLink = document.getElementById("passengerBoxLink");

   function passengerProfileBoxActive(id,name_surname,phone,social,country,email)
   {
      passengerProfileBox.classList.add("active");

      passengerBoxID.value = id;
      passengerBoxNameSurname.value = name_surname;
      phone ? passengerBoxPhone.value = "+"+phone : passengerBoxPhone.value = "";
      social ? passengerBoxSocial.value = "@"+social : passengerBoxSocial.value = "";
      passengerBoxCountry.value = country;
      passengerBoxEmail.value = email;
      passengerBoxLink.href = "../passengers/passenger="+id;
   }

   function passengerProfileBoxActiveOver()
   {
      passengerProfileBox.classList.add("active");
   }

   function passengerProfileBoxDisable()
   {
      passengerProfileBox.classList.remove("active");
   }

   function passengerProfileBoxCopy(name_surname,phone,social,country,email) {
      let element = "";

      var name_surname = document.getElementById(name_surname).value;
      var phone = document.getElementById(phone).value;
      var social = document.getElementById(social).value;
      var country = document.getElementById(country).value;
      var email = document.getElementById(email).value;

      if (name_surname) {
         element += "Müşteri : " + name_surname + "\n";
      }
      if (phone) {
         element += "Telefon : " + phone + "\n";
      }
      if (country) {
         element += "Ülkesi : " + country + "\n";
      }
      if (social) {
         element += "Instagram : " + social + "\n";
      }
      if (email) {
         element += "Email : " + email + "\n";
      }

      const copiedContent = element.trim();
      navigator.clipboard.writeText(copiedContent);
      alert(name_surname + " Bilgileri Kopyalandı");
   }

   /**
    * ? Profil Kutuları
    */


   /**
    * ? My-List tıklandığında SearchBx tasarım işlemi
    */
    function handleHold() {
      var inputElement = document.getElementById("driver");
      inputElement.classList.add("active-input");
   }

   // Basılı tutma işlemi sona erdiğinde tetiklenecek fonksiyon
   function handleRelease() {
      var inputElement = document.getElementById("driver");
      inputElement.classList.remove("active-input");
   }

   // .my-list içeriğine basılı tutma ve serbest bırakma olaylarına dinleyiciler ekleme
   var myListElement = document.querySelector(".my-list");
   myListElement.addEventListener("mousedown", handleHold);
   myListElement.addEventListener("mouseup", handleRelease);
   myListElement.addEventListener("mouseleave", handleRelease);


   /**
    * ? İş Ortağı Bölümü
    */

    const searchpartnerInput = document.getElementById("partner");
   const partnersList = document.querySelector(".partners-list");
   const partnerEdit = document.getElementById("partnerEdit");
   const partnerEditbtn = document.getElementById("partnerEditbtn");

   function chosePartner(element, pa_id)
   {
      searchpartnerInput.value = element;
      partnerEdit.value = pa_id;
      partnersList.style.display = "none";
      partnerEditbtn.style.opacity = "1";
      partnerEditbtn.style.right = "-2%";
      partnerEditbtn.style.pointerEvents = "visible";
      partnerEditbtn.style.cursor = "pointer";
   }
   function partnersOpen()
   {
      partnersList.style.display = "block";
   }
   function partnersClose()
   {
      partnersList.style.display = "none";
   }
   document.addEventListener("click", function(event) {
   if (!searchpartnerInput.contains(event.target)) {
      partnersList.style.display = "none";
   }
   });
   searchpartnerInput.addEventListener("keydown", function(event) {
   if (event.key === "Backspace") {
      partnerEditbtn.style.opacity = "0";
      partnerEditbtn.style.right = "-5.2%";
      partnerEditbtn.style.pointerEvents = "none";
   }
   });
   searchpartnerInput.addEventListener("input", function(event) {
      partnerEditbtn.style.opacity = "0";
      partnerEditbtn.style.right = "-5.2%";
      partnerEditbtn.style.pointerEvents = "none";
   });
   function partnerEditlink()
   {
      window.location.href="../partners/partner="+partnerEdit.value;
   }


   /**
    * ? Şoför Bölümü
    */

   const searchdriverInput = document.getElementById("driver");
   const driversList = document.querySelector(".drivers-list");
   const driverPlate = document.getElementById("driverplateno");
   const driverPhone = document.getElementById("driverphone");
   const gdriverPhone = document.getElementById("g-driverphone");
   const driverEdit = document.getElementById("driverEdit");
   const driverEditbtn = document.getElementById("driverEditbtn");

   function choseDriver(element, dphone, dplate,d_id)
   {
      searchdriverInput.value = element.innerText;
      driverPhone.value = dphone;
      driverPlate.value = dplate;
      driverEdit.value = d_id;
      driversList.style.display = "none";
      driverPlate.readOnly = true;
      driverPhone.readOnly = true;
      driverEditbtn.style.opacity = "1";
      driverEditbtn.style.right = "-2%";
      driverEditbtn.style.pointerEvents = "visible";
      driverEditbtn.style.cursor = "pointer";
      gdriverPhone.classList.add("gfocus");
   }
   function driversOpen()
   {
      driversList.style.display = "block";
   }
   function driversClose()
   {
      driversList.style.display = "none";
   }
   document.addEventListener("click", function(event) {
   if (!searchdriverInput.contains(event.target)) {
      driversList.style.display = "none";
   }
   });
   searchdriverInput.addEventListener("keydown", function(event) {
   if (event.key === "Backspace") {
      driverPlate.readOnly = false;
      driverPhone.readOnly = false;
      driverPhone.value = "";
      driverPlate.value = "";
      gdriverPhone.classList.remove("gfocus");
      driverEditbtn.style.opacity = "0";
      driverEditbtn.style.right = "-5.2%";
      driverEditbtn.style.pointerEvents = "none";
   }
   });
   searchdriverInput.addEventListener("input", function(event) {
      driverPlate.readOnly = false;
      driverPhone.readOnly = false;
      driverPhone.value = "";
      driverPlate.value = "";
      gdriverPhone.classList.remove("gfocus");
      driverEditbtn.style.opacity = "0";
      driverEditbtn.style.right = "-5.2%";
      driverEditbtn.style.pointerEvents = "none";
   });
   function driverEditlink()
   {
      window.location.href="../drivers/driver="+driverEdit.value;
   }

   /**
    * ? Müşteri Bölümü
    */
   
   const searchpassengerInput = document.getElementById("passenger");
   const passengersList = document.querySelector(".passengers-list");
   const passengerPhone = document.getElementById("passengerphone");
   const gpassengerPhone = document.getElementById("g-passengerphone");
   const passengerEdit = document.getElementById("passengerEdit");
   const passengerEditbtn = document.getElementById("passengerEditbtn");

   function chosePassenger(element, pphone,p_id)
   {
      searchpassengerInput.value = element.innerText;
      passengerPhone.value = pphone;
      passengerEdit.value = p_id;
      passengersList.style.display = "none";
      passengerPhone.readOnly = true;
      passengerEditbtn.style.opacity = "1";
      passengerEditbtn.style.right = "-2%";
      passengerEditbtn.style.pointerEvents = "auto";
      passengerEditbtn.style.cursor = "pointer";
      gpassengerPhone.classList.add("gfocus");
   }
   function passengersOpen()
   {
      passengersList.style.display = "block";
   }
   function passengersClose()
   {
      passengersList.style.display = "none";
   }
   document.addEventListener("click", function(event) {
   if (!searchpassengerInput.contains(event.target)) {
      passengersList.style.display = "none";
   }
   });
   searchpassengerInput.addEventListener("keydown", function(event) {
   if (event.key === "Backspace") {
      passengerPhone.readOnly = false;
      passengerPhone.value = "";
      gpassengerPhone.classList.remove("gfocus");
      passengerEditbtn.style.opacity = "0";
      passengerEditbtn.style.right = "-5.2%";
      passengerEditbtn.style.pointerEvents = "none";
   }
   });
   searchpassengerInput.addEventListener("input", function(event)
   {
      passengerPhone.readOnly = false;
      passengerPhone.value = "";
      gpassengerPhone.classList.remove("gfocus");
      passengerEditbtn.style.opacity = "0";
      passengerEditbtn.style.right = "-5.2%";
      passengerEditbtn.style.pointerEvents = "none";
   });
   function passengerEditlink()
   {
      window.location.href = "../passengers/passenger="+passengerEdit.value;
   }

   /**
    * ? Search Menu
    */
   function searchMenu()
   {
      /**
       * ? İş Ortağı Arama
       */
      searchpartnerInput.addEventListener('keyup', function(){
         let data = this.value.toUpperCase();
         let liItems = document.querySelectorAll(".partners-list ul li");
         for (let i = 0; i < liItems.length; i++) {
            if (liItems[i].innerHTML.toUpperCase().indexOf(data) > -1) {
            liItems[i].style.display = "";
            } else {
            liItems[i].style.display = "none";
            }
         }
      });

      
      /**
       * ? Şoför Arama
       */
      searchdriverInput.addEventListener('keyup', function(){
         let data = this.value.toUpperCase();
         let liItems = document.querySelectorAll(".drivers-list ul li");
         for (let i = 0; i < liItems.length; i++) {
            if (liItems[i].innerHTML.toUpperCase().indexOf(data) > -1) {
            liItems[i].style.display = "";
            } else {
            liItems[i].style.display = "none";
            }
         }
      });

      /**
       * ? Müşteri Arama
       */
      searchpassengerInput.addEventListener('keyup', function(){
         let data = this.value.toUpperCase();
         let liItems = document.querySelectorAll(".passengers-list ul li");
         for (let i = 0; i < liItems.length; i++) {
            if (liItems[i].innerHTML.toUpperCase().indexOf(data) > -1) {
            liItems[i].style.display = "";
            } else {
            liItems[i].style.display = "none";
            }
         }
      });
   }
   searchMenu();

   checkChosePartner();
   function checkChosePartner()
   {
      if(searchpartnerInput.value.length > 0)
      {
         partnerEditbtn.style.opacity = "1";
         partnerEditbtn.style.right = "-2%";
         partnerEditbtn.style.pointerEvents = "visible";
         partnerEditbtn.style.cursor = "pointer";
      }
      if(searchdriverInput.value.length > 0)
      {
         driverPlate.readOnly = true;
         driverPhone.readOnly = true;
         driverEditbtn.style.opacity = "1";
         driverEditbtn.style.right = "-2%";
         driverEditbtn.style.pointerEvents = "visible";
         driverEditbtn.style.cursor = "pointer";
         gdriverPhone.classList.add("gfocus");
      }
      if(searchpassengerInput.value.length > 0)
      {
         passengerPhone.readOnly = true;
         passengerEditbtn.style.opacity = "1";
         passengerEditbtn.style.right = "-2%";
         passengerEditbtn.style.pointerEvents = "auto";
         passengerEditbtn.style.cursor = "pointer";
         gpassengerPhone.classList.add("gfocus");
      }
   }





   const inputDate = document.getElementById("datePicker");
   const formattedDate = document.getElementById("formattedDate");

   inputDate.addEventListener("change", () => {
      const selectedDateValue = inputDate.value; // Tarih değeri al
      const dateParts = selectedDateValue.split("-"); // Tarihi parçalara ayır
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // JavaScript ayları 0-11 arasında temsil eder
      const day = parseInt(dateParts[2], 10);

      const selectedDate = new Date(year, month, day);

      if (isNaN(selectedDate)) {
         console.error("Geçersiz tarih formatı!");
         return;
      }

      const formattedDateString = formatDate(selectedDateValue);

      formattedDate.value = formattedDateString;
   });

   function formatDate(inputDateValue) {
      var dateParts = inputDateValue.split("-");
      var day = new Date(inputDateValue).toLocaleDateString('tr-TR', { weekday: 'long' });
      return dateParts[0] + "." + dateParts[1] + "." + dateParts[2] + " - " + day;
   }

   function timeNumber(input) {
      var value = input.value;
    var formattedValue = "";

    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");

    formattedValue = value;

    input.value = formattedValue;
        }
        function clockNumber(input) {
      var value = input.value;
    var formattedValue = "";

    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");

    if (value.length >= 2) {
        formattedValue = value.slice(0, 2) + ":" + value.slice(2);
    } else {
        formattedValue = value;
    }

    input.value = formattedValue;
        }
   var menujoblist = document.getElementById("menujoblist");

   menujoblist.classList.add("active-menu");