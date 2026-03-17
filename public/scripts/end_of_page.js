// * Help Button JS Start
const helpbox = document.getElementById("question-box");
const helpboxBtn = document.getElementById("question-boxBtn");
if(helpboxBtn)
{
    helpboxBtn.addEventListener("click", openHelpBox);
    helpboxBtn.addEventListener("contextmenu", openHelpBox);
    document.addEventListener("click", function(e) { closeHelpBox(e); });
    document.addEventListener("contextmenu", function(e) { closeHelpBox(e); });
    function openHelpBox() {
        helpbox.classList.toggle("active");
        helpboxBtn.classList.toggle("active");
    }
    function closeHelpBox(e) {
        if(!helpboxBtn.contains(e.target) && !helpbox.contains(e.target) && helpbox.classList.contains("active"))
        {
            helpbox.classList.remove("active");
            helpboxBtn.classList.remove("active");
        }
    }
}
// * Help Button JS Finish
// * Device Type
let deviceType;

function DeviceTypeFinder() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        deviceType = "mobile";
    }
    else if (/android/i.test(userAgent)) {
        deviceType = "mobile";
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        deviceType = /iPad/.test(userAgent) ? "tablet" : "mobile";
    }
    else {
        deviceType = "desktop";
    }
}
DeviceTypeFinder();
setInterval(DeviceTypeFinder, 2000);
// * Device Type
// * Table Td Elements
const tableTrElements = document.querySelectorAll(".table-content");
tableTrElements.forEach((tr) => {
    job_status = tr.getAttribute("job-status");
    if(job_status == "done") {
        DataColor(tr, "success");
    }
    else if(job_status == "cancel") {
        DataColor(tr, "danger");
    }
});
// * All PaymentResult
const data_tablePaymentResult = document.querySelectorAll(".data-tablePaymentResult");
data_tablePaymentResult.forEach((payment) => {
    if(payment.getAttribute("aria-label") == "1") {
        DataColor(payment, "success"); 
    }
    else if(payment.getAttribute("aria-label") == "0") {
        if(TableDataIntegerFunction(payment.innerText, payment, "return") == "success") {
            DataColor(payment, "warning");
        }
        else {
            DataColor(payment, "danger");
        }
    }
    else {
        TableDataIntegerFunction(payment.innerText, payment);
    }
});
// * All Receive_Partner
const data_tableMoneyReceive_Partner = document.querySelectorAll(".data-tableMoneyReceive_Partner");
data_tableMoneyReceive_Partner.forEach((partner) => {
    if(partner.getAttribute("aria-label") == "1") {
        DataColor(partner, "success");
    }
    else if(partner.getAttribute("aria-label") == "0") {
        if(TableDataIntegerFunction(partner.innerText, partner, "return") == "success") {
            DataColor(partner, "warning");
        }
        else {
            DataColor(partner, "danger");
        }
    }
    else {
        TableDataIntegerFunction(partner.innerText, partner);
    }
});
function TableDataIntegerFunction(value, data, func) {
    let dataValue = value.split("₺")[0].trim();
    dataValue = parseInt(dataValue, 10);
    if (!isNaN(dataValue) && dataValue > 0) {
        if(func == "return") {
            return "success";
        }
        else {
            DataColor(data, "success");
        }
    }
    else {
        if(func == "return") {
            return "danger";
        }
        else {
            DataColor(data, "danger");
        }
    }
}
function DataColor(data, color) {
    if(color === null || color === "") {
        data.style.removeProperty('background-color');
    }
    else {
        if(color === "success") {
            data.style.backgroundColor = rootStyle.getPropertyValue("--success-clr");
        }
        if(color === "warning") {
            data.style.backgroundColor = rootStyle.getPropertyValue("--warning-clr");
        }
        if(color === "danger") {
            data.style.backgroundColor = rootStyle.getPropertyValue("--danger-clr");
        }
    }
}
// * Table Td Elements
// * Right Click Menu
const tableRightClick = document.querySelectorAll(".tableRightClick");
const rightClickMenu = document.getElementById("myContextMenu");
const contentElement = document.querySelector('.content');
const contextGroupOperationsBtns = document.querySelectorAll(".contextGroupOperationsBtn");

const rightClickMenuText_ID = document.getElementById("rightClickMenuText_ID");
const rightClickMenuText_UUID = document.getElementById("rightClickMenuText_UUID");
const rightClickMenuText_Type = document.getElementById("rightClickMenuText_Type");
const rightClickMenuText_Date = document.getElementById("rightClickMenuText_Date");
const rightClickMenuText_Partner = document.getElementById("rightClickMenuText_Partner");
const rightClickMenuText_Driver = document.getElementById("rightClickMenuText_Driver");
const rightClickMenuText_Receive = document.getElementById("rightClickMenuText_Receive");
const rightClickMenuText_ProgressPayment = document.getElementById("rightClickMenuText_ProgressPayment");
const rightClickMenuText_Payment = document.getElementById("rightClickMenuText_Payment");
const rightClickMenuText_MoneyReceive_Passenger = document.getElementById("rightClickMenuText_MoneyReceive_Passenger");
const rightClickMenuText_MoneyReceive_Partner = document.getElementById("rightClickMenuText_MoneyReceive_Partner");
const rightClickMenuText_MoneyReceive_PartnerNoFormat = document.getElementById("rightClickMenuText_MoneyReceive_PartnerNoFormat");
const rightClickMenuText_Cost = document.getElementById("rightMenuClickText_Cost");
const rightClickMenuText_Result = document.getElementById("rightClickMenuText_Result");
const rightClickMenuText_ResultNoFormat = document.getElementById("rightClickMenuText_ResultNoFormat");
const rightClickMenuText_Taken = document.getElementById("rightClickMenuText_Taken");
const rightClickMenuText_ActiveVal = document.getElementById("rightClickMenuText_ActiveVal");

const rightClickMenuTdElement = document.getElementById("rightClickMenuTdElement");
const rightClickMenuTdElement_Data = document.getElementById("rightClickMenuTdElement_Data");
const rightClickMenuTdElement_Line = document.getElementById("rightClickMenuTdElement_Line");

const rightClickMenuBtn_MoneyReceive_Passenger = document.getElementById("rightClickMenuBtn_MoneyReceive_Passenger");
const rightClickMenuBtn_MoneyReceive_Partner = document.getElementById("rightClickMenuBtn_MoneyReceive_Partner");
const rightClickMenuBtn_Active = document.getElementById("rightClickMenuBtn_Active");
const rightClickMenuBtn_Cancel = document.getElementById("rightClickMenuBtn_Cancel");
const rightClickMenuText_JobNumber = document.getElementById("rightClickMenuText_JobNumber");

const rightClickMenu_ID = "";
const rightClickMenu_Date = "";
const rightClickMenu_Active = "";

function selectedTableContext(elementID,elementUUID,elementDate,elementType,
    elementPartner,elementDriver,elementReceive,elementProgressPayment,
    elementPayment,elementCost,elementMoneyReceivePartnerNoFormat,elementResult,elementResultNoFormat,elementTaken,elementJobNumber) {
    const selectedTableTr = document.getElementById("tableTrElementId-"+elementID);
    const tableTdJobStatus = selectedTableTr.getAttribute("job-status");
    const tableTdMoneyReceive_Passenger = document.getElementById("data-tableMoneyReceive_Passenger-"+elementID).getAttribute("aria-label");
    const tableTdMoneyReceive_Partner = document.getElementById("data-tableMoneyReceive_Partner-"+elementID).getAttribute("aria-label");
    const tableTdPaymentResult = document.getElementById("data-tablePaymentResult-" + elementID);

    rightClickMenuText_ID.value = elementID;
    rightClickMenuText_UUID.value = elementUUID;
    rightClickMenuText_Type.value = elementType; 
    rightClickMenuText_Date.innerText = elementDate;
    rightClickMenuText_ActiveVal.value = tableTdJobStatus;
    rightClickMenuText_Partner.value = elementPartner;
    rightClickMenuText_Driver.value = elementDriver;
    rightClickMenuText_Receive.value = elementReceive;
    rightClickMenuText_ProgressPayment.value = elementProgressPayment;
    rightClickMenuText_Payment.value = elementPayment;
    rightClickMenuText_MoneyReceive_Passenger.value = tableTdMoneyReceive_Passenger;
    rightClickMenuText_MoneyReceive_Partner.value = tableTdMoneyReceive_Partner;
    rightClickMenuText_MoneyReceive_PartnerNoFormat.value = elementMoneyReceivePartnerNoFormat;
    rightClickMenuText_Cost.value = elementCost;
    rightClickMenuText_Result.value = elementResult;
    rightClickMenuText_ResultNoFormat.value = elementResultNoFormat;
    rightClickMenuText_Taken.value = elementTaken;

    // rightClickMenuText_JobNumber.innerText = "Barkod Numarası: " + elementJobNumber;
    
    if(tableTdJobStatus == "in-progress") {
        selectedTableTr.setAttribute("job-status", "in-progress");
        rightClickMenuBtn_Active.innerHTML = '<i class="fa-regular fa-heart"></i> İş Yapılmadı';
    }
    else if(tableTdJobStatus == "done") {
        selectedTableTr.setAttribute("job-status", "done");
        rightClickMenuBtn_Active.innerHTML = '<i class="fa-solid fa-heart"></i> İş Yapıldı';
    }
    
    if(tableTdJobStatus == "cancel") {
        ContextMenu_JobType.style.display = 'none';
        selectedTableTr.setAttribute("job-status", "cancel");
        rightClickMenuBtn_Cancel.innerHTML = '<i class="fa-solid fa-ban"></i> İş İptal Edildi';
    }
    else {
        ContextMenu_JobType.style.display = 'inline-block';
        rightClickMenuBtn_Cancel.innerHTML = '<i class="fa-solid fa-ban"></i> İş İptal Et';
    }

    if (tableTdMoneyReceive_Passenger == '1') {
        if (parseFloat(tableTdPaymentResult.getAttribute("data-value")) < 0) {
            rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-solid fa-circle-check"></i> Şoför Borcu Ödendi';
        } else {
            rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-solid fa-circle-check"></i> Şoför Ödemesi Alındı';
        }
    }
    else {
        if (parseFloat(tableTdPaymentResult.getAttribute("data-value")) < 0) {
            rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-regular fa-circle-check"></i> Şoför Borcu Ödenmedi';
        } else {
            rightClickMenuBtn_MoneyReceive_Passenger.innerHTML = '<i class="fa-regular fa-circle-check"></i> Şoför Ödemesi Alınmadı';
        }
    }
    if(tableTdMoneyReceive_Partner == '1') {
        if(parseFloat(rightClickMenuText_MoneyReceive_PartnerNoFormat.value) < 0) {
            rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tedarikçiye Ödeme Yapıldı';
        }
        else {
            rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tedarikçi Ödemesi Alındı';
        }
    }
    else {
        if(parseFloat(rightClickMenuText_MoneyReceive_PartnerNoFormat.value) < 0) {
            rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-regular fa-circle-check"></i> Tedarikçiye Ödeme Yapılmadı';
        }
        else {
            rightClickMenuBtn_MoneyReceive_Partner.innerHTML = '<i class="fa-regular fa-circle-check"></i> Tedarikçi Ödemesi Alınmadı';
        }
    }
}

function closeRightMenu() {
    if (rightClickMenu) {
        rightClickMenu.classList.remove("open");
    }
    closeAllInnerMenus();
}

function closeAllInnerMenus() {
    document.querySelectorAll(".innerMenu.open").forEach(function(submenu) {
        submenu.classList.remove("open");
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.querySelectorAll(".menu-container");
    menuContainer.forEach(function(container) {
        container.querySelectorAll(".contextTitleBtn").forEach(function(btn) {
            btn.addEventListener("mouseover", function() {
                container.classList.add("lightHover");
            });
            btn.addEventListener("mouseout", function() {
                container.classList.remove("lightHover");
            });
        });

        container.querySelectorAll(".contextTitle").forEach(function(btn) {
            btn.addEventListener("mouseover", function() {
                myContextMenu.classList.add("lightHover");
            });
            btn.addEventListener("mouseout", function() {
                myContextMenu.classList.remove("lightHover");
            });
        });
    });


    //* Context Menu Settings
    function positionContextMenu(e) {
        if (deviceType == "desktop") {
            e.preventDefault();
    
            var menuHeight = rightClickMenu.offsetHeight;
            var menuWidth = rightClickMenu.offsetWidth;
    
            var contentRect = contentElement.getBoundingClientRect();
    
            var x = e.pageX;
            var y = e.pageY;
    
            if (x + menuWidth > contentRect.right) {
                x = contentRect.right - menuWidth;
            }
            if (y + menuHeight > contentRect.bottom) {
                y = contentRect.bottom - menuHeight;
            }
    
            if (x < contentRect.left) {
                x = contentRect.left;
            }
            if (y < contentRect.top) {
                y = contentRect.top;
            }
    
            rightClickMenu.style.left = `${x}px`;
            rightClickMenu.style.top = `${y}px`;
            rightClickMenu.classList.add("open");
    
            rightClickMenuTdElement.value = e.target.innerText;
            rightClickMenuTdElement_Data.value = e.target.getAttribute("data");
            rightClickMenuTdElement_Line.value = e.target.getAttribute("line");
        }
    }
    function adjustContextMenuPosition() {
        if (rightClickMenu && rightClickMenu.classList.contains("open")) {
            var menuHeight = rightClickMenu.offsetHeight;
            var menuWidth = rightClickMenu.offsetWidth;
    
            var contentRect = contentElement.getBoundingClientRect();
    
            var x = parseInt(rightClickMenu.style.left);
            var y = parseInt(rightClickMenu.style.top);
    
            if (x + menuWidth > contentRect.right) {
                x = contentRect.right - menuWidth;
            }
            if (y + menuHeight > contentRect.bottom) {
                y = contentRect.bottom - menuHeight;
            }
    
            if (x < contentRect.left) {
                x = contentRect.left;
            }
            if (y < contentRect.top) {
                y = contentRect.top;
            }
    
            rightClickMenu.style.left = `${x}px`;
            rightClickMenu.style.top = `${y}px`;
        }
    }

    //* Close Special Context Menu When CLick
    if(rightClickMenu) {
        document.addEventListener('click', function () {
            closeRightMenu();
        });
        rightClickMenu.addEventListener('contextmenu', function (e) {
            //! Sağ tıklandığında açık olan contextmenulerini kapatması için bir if yerleştirilecek
            closeRightMenu();
        });
    }
    //* Close Special Context Menu When CLick

    /** Get Special Context Menu */
    tableRightClick.forEach(function(tr) {
        const tableRightClickTd = tr.querySelectorAll("td");
        tableRightClickTd.forEach(function(td) {
            td.addEventListener('contextmenu', function(e) {
                positionContextMenu(e);
            });
        });
    });
    ResizeFuncs();
    function ResizeFuncs() {
        adjustContextMenuPosition();
        FooterPosition();
    }
    window.addEventListener('resize', ResizeFuncs);
    window.addEventListener('scroll', adjustContextMenuPosition);

    // Block Context Menu
    // document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

    /** Block Developer Mode */
    // document.addEventListener('keydown', function (e) {
    //     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    //         e.preventDefault();
    //     }
    // });

    function positionInnerMenu(innerMenu, operationBtn) {
        const contentElement = document.querySelector('.content');
        const contentRect = contentElement.getBoundingClientRect();
        const operationBtnRect = operationBtn.getBoundingClientRect();
        const innerAriaLabel = innerMenu.getAttribute("aria-label");
        const innerMenuWidth = innerAriaLabel > 1 ? (innerMenu.offsetWidth * innerAriaLabel) / 2 : innerMenu.offsetWidth;
        const innerMenuHeight = innerMenu.offsetHeight;

        const spaceOnRight = contentRect.right - operationBtnRect.right + 35;

        if (spaceOnRight >= innerMenuWidth) {
            innerMenu.style.left = '338px';
            innerMenu.style.right = '';
        } else {
            innerMenu.style.right = '338px';
            innerMenu.style.left = '';
        }
    }

    contextGroupOperationsBtns.forEach(function(operationBtn) {
        const innerMenu = operationBtn.nextElementSibling;

        if (innerMenu) {
            operationBtn.addEventListener('mouseover', function () {
                closeAllInnerMenus();
                positionInnerMenu(innerMenu, operationBtn);
                innerMenu.classList.add('open');
            });

            innerMenu.addEventListener('mouseover', function () {
                innerMenu.classList.add('open');
            });

            innerMenu.addEventListener('mouseout', function () {
                setTimeout(() => {
                    if (!innerMenu.matches(':hover')) {
                        innerMenu.classList.remove('open');
                    }
                }, 200);
            });

            operationBtn.addEventListener('mouseout', function () {
                setTimeout(() => {
                    if (!innerMenu.matches(':hover')) {
                        innerMenu.classList.remove('open');
                    }
                }, 200);
            });

            const subMenuBtns = innerMenu.querySelectorAll(".contextGroupOperationsBtn");

            subMenuBtns.forEach(function(subBtn) {
                const subInnerMenu = subBtn.nextElementSibling;

                if (subInnerMenu) {
                    subBtn.addEventListener('mouseover', function () {
                        closeAllInnerMenus();
                        positionInnerMenu(subInnerMenu, subBtn);
                        subInnerMenu.classList.add('open');
                    });

                    subInnerMenu.addEventListener('mouseover', function () {
                        subInnerMenu.classList.add('open');
                    });

                    subInnerMenu.addEventListener('mouseout', function () {
                        setTimeout(() => {
                            if (!subInnerMenu.matches(':hover')) {
                                subInnerMenu.classList.remove('open');
                            }
                        }, 200);
                    });

                    subBtn.addEventListener('mouseout', function () {
                        setTimeout(() => {
                            if (!subInnerMenu.matches(':hover')) {
                                subInnerMenu.classList.remove('open');
                            }
                        }, 200);
                    });
                }
            });
        }
    });

    document.addEventListener("visibilitychange", function() {
        if(document.visibilityState === "hidden") {
            closeRightMenu();
        }
    });
    //* Context Menu Settings
});
// * Right Click Menu



//* Library Check

function checkLibraries() {
    var scripts = document.getElementsByTagName('script');
    var jQueryIncluded = false;
    var requiredScripts = [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
        "https://code.iconify.design/3/3.1.1/iconify.min.js",
        "/scripts/sidebar.js",
        "/scripts/popup/talert.js",
        "/packages/ajax/libs/jquery/3.5.1/jquery.min.js"
    ];

    var scriptsFound = requiredScripts.map(function(src) {
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.includes(src)) {
                return true;
            }
        }
        return false;
    });

    if (scriptsFound.includes(false)) {
        talert("danger","Kütüphaneleriniz yüklenemediğinden dolayı sayfanız yeniden başlatılacak.","Gerekli Kütüphaneler Eksik","Sorun Devam Ederse",null, null,"/support");
        document.querySelector("html").classList.add("lock");
        setTimeout(() => {
            location.reload();
        }, 4500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkLibraries();
    setInterval(checkLibraries, 5000);
});

//* Library Check

window.addEventListener("DOMContentLoaded", LeavedPage);