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
* ? Şoför Bölümü
*/

const searchdriverInput = document.getElementById("driver");
const driversList = document.querySelector(".drivers-list");
const driverEdit = document.getElementById("driverEdit");
const driverEditbtn = document.getElementById("driverEditbtn");

function choseDriver(element, d_id) {
    driversList.style.display = "none";
    if (d_id != 0) {
        searchdriverInput.value = element.innerText;
        driverEdit.value = d_id;
        driverEditbtn.style.opacity = "1";
        driverEditbtn.style.right = "-2%";
        driverEditbtn.style.pointerEvents = "visible";
        driverEditbtn.style.cursor = "pointer";
    }
    else {
        searchdriverInput.value = "";
        driverEdit.value = "0";
        driverEditbtn.style.opacity = "0";
        driverEditbtn.style.right = "-5.2%";
        driverEditbtn.style.pointerEvents = "none";
        driverEditbtn.style.cursor = "text";
    }

    save_driver(d_id);
}
function driverEditbtn_Func() {
    driverEditbtn.style.opacity = "1";
    driverEditbtn.style.right = "-2%";
    driverEditbtn.style.pointerEvents = "visible";
    driverEditbtn.style.cursor = "pointer";
}
function driversOpen() {
    driversList.style.display = "block";
}
function driversClose() {
    driversList.style.display = "none";
}
document.addEventListener("click", function (event) {
    if (!searchdriverInput.contains(event.target)) {
        driversList.style.display = "none";
    }
});
searchdriverInput.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        driverEditbtn.style.opacity = "0";
        driverEditbtn.style.right = "-5.2%";
        driverEditbtn.style.pointerEvents = "none";
    }
});
searchdriverInput.addEventListener("input", function (event) {
    driverEditbtn.style.opacity = "0";
    driverEditbtn.style.right = "-5.2%";
    driverEditbtn.style.pointerEvents = "none";
});
function driverEditlink() {
    window.location.href = "../drivers/driver=" + driverEdit.value;
}

/**
 * ? Search Menu
 */
function searchMenu() {
    /**
     * ? Şoför Arama
     */
    searchdriverInput.addEventListener('keyup', function () {
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
}
searchMenu();

function save_driver(driver_id) {
    $.ajax({
        url: "./sections/company/driver/save_data.php",
        method: "POST",
        dataType: "text",
        data: {
            driver: driver_id
        },
        success: function (response) {
            if(response.trim() == "success") {
                console.log("Çalıştı");
            } else {
                console.error("Hata oluştu: " + response);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Ajax Hatası: " + textStatus + " - " + errorThrown);
        }
    });
}