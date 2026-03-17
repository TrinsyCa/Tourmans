var company_app_name = document.getElementById("company_app_name");

var protocol = window.location.protocol;
var domain = window.location.hostname;
var baseDomain = protocol + "//" + domain + "/trizola";

const menus = document.getElementById("menus");
const menusText = document.querySelectorAll("#menus span");
let menuType = document.getElementById("menuTypeID").value;

function MiniMenu(change) {
    const myurl = "http://localhost/p/trizola/";
    const set_url = myurl + "php/set_sidebar.php";
    if (window.innerWidth <= 1300) {
        /* Basic Mode */
        if(parseInt(menuType) == 1)
        {
            littleBar();
            menuType = "0";
        }
        else
        {
            openMenuBar();
            menuType = "1";
        }
        FooterVisible(0);
    }
    else {
        /* Tiny Mode */
        littleBar();
        if(change == "true")
        {
            if(parseInt(menuType) == 1)
            {
                FooterVisible(1);
                menuType = "0";
            }
            else
            {
                FooterVisible(0);
                menuType = "1";
            }

            $.post(set_url, { sidebar: menuType })
            .done(function(response) {
                console.log("İstek başarıyla tamamlandı. Sunucu yanıtı:", response);
            })
            .fail(function(error) {
                console.error("İstek başarısız oldu. Hata:", error);
            });
        }
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 1300) {
        closeMenuBar();
    }
    if (menus.offsetHeight >= window.innerHeight) {
        menus.style.overflow = "scroll";
    }
});
if (menus.offsetHeight >= window.innerHeight) {
    menus.style.overflow = "scroll";
}

function littleBar() {
    const menus = document.getElementById("menus");
    const menusText = document.querySelectorAll("#menus span");
    const content = document.querySelectorAll(".content");

    menus.classList.toggle("active");

    setTimeout(function() {
        menusText.forEach(function(span) {
            span.classList.toggle("active");
        });
    }, 100);

    content.forEach(function(item) {
        item.classList.toggle("minibar");
    });
}

function openMenuBar() {
    const menuBarBg = document.getElementById("menusBar-bg");
    const menuBar = document.getElementById("menusBar");
    const menuBarA = document.querySelectorAll(".menusBar a");

    menuBarBg.style.pointerEvents = "fill";
    menuBarBg.style.opacity = "1";
    menuBar.style.opacity = "1";
    menuBar.style.transform = "translateY(-10px)";
    menuBarA.forEach((menuA) => {
        menuA.style.pointerEvents = "auto";
    });
}

function closeMenuBar() {
    const menuBarBg = document.getElementById("menusBar-bg");
    const menuBar = document.getElementById("menusBar");
    const menuBarA = document.querySelectorAll(".menusBar a");

    menuBarBg.style.pointerEvents = "none";
    menuBarBg.style.opacity = "0";
    menuBar.style.opacity = "0";
    menuBar.style.transform = "translateY(50px)";
    menuBarA.forEach((menuA) => {
        menuA.style.pointerEvents = "none";
    });
}

var clockLock = false;
var trizolaLock = false;

document.addEventListener("DOMContentLoaded", function() {
    // * Clock Pop-Up
    var clockContentBtn = document.getElementById("clockContentBtn");
    var clockContent = document.getElementById("clockContent");

    function contentClock(status) {
        if (status === "active") {
            clockContent.classList.add("active");
            clockContentBtn.classList.add("active");
        } else {
            clockContent.classList.remove("active");
            clockContentBtn.classList.remove("active");
            clockLock = false;
        }
    }

    window.contentClock = contentClock;

    if (clockContentBtn) {
        clockContentBtn.addEventListener('mouseover', function() {
            if(trizolaLock === false) {
                contentClock('active');
            }
        });
        clockContentBtn.addEventListener('click', function() {
            if(clockLock === false) {
                contentClock('active');
                clockLock = true;
                if(trizolaLock === true) {
                    contentTrizola('disable');
                }
            }
            else {
                contentClock('disable');
                clockLock = false;
            }
        });
        clockContentBtn.addEventListener('mouseout', function() {
            if(clockLock === false) {
                contentClock('disable');
            }
        });
    }
    // * Clock Pop-Up
    // * Trizola Pop-Up
    var trizolaContentBtn = document.getElementById("trizolaContentBtn");
    var trizolaContent = document.getElementById("trizolaContent");

    function contentTrizola(status) {
        if (status === "active") {
            trizolaContent.classList.add("active");
            trizolaContentBtn.classList.add("active");
        } else {
            trizolaContent.classList.remove("active");
            trizolaContentBtn.classList.remove("active");
            trizolaLock = false;
        }
    }

    window.contentTrizola = contentTrizola;

    if (trizolaContentBtn) {
        trizolaContentBtn.addEventListener('mouseover', function() {
            if(clockLock === false) {
                contentTrizola('active');
            }
        });
        trizolaContentBtn.addEventListener('click', function() {
            if(trizolaLock === false) {
                contentTrizola('active');
                trizolaLock = true;
                if(clockLock === true) {
                    contentClock('disable');
                }
            }
            else {
                contentTrizola('disable');
                trizolaLock = false;
            }
        });
        trizolaContentBtn.addEventListener('mouseout', function() {
            if(trizolaLock === false) {
                contentTrizola('disable');
            }
        });
    }
    // * Trizola Pop-Up
});

const footer = document.querySelector("footer");
var footerBool = true;
function FooterPosition() {
    if(window.innerHeight > 830) {
        if(footerBool === true) {
            footer.style.transition = "0";
            footer.style.opacity = "0";
            setTimeout(() => {
                footer.classList.add("fixed");
                setTimeout(() => {
                    footer.style.transition = "0.2";
                    footer.style.opacity = "1";
                }, 200);
            }, 200);
        }
        footerBool = false;
    }
    else {
        if(footerBool === false) {
            footer.style.transition = "0";
            footer.style.opacity = "0";
            setTimeout(() => {
                footer.classList.remove("fixed");
                setTimeout(() => {
                    footer.style.transition = "0.2";
                    footer.style.opacity = "1";
                }, 200);
            }, 200);
        }
        footerBool = true;
    }
}
function FooterVisible(type) {
    if(type === 1) {
        footer.style.opacity = "1";
    }
    else {
        footer.style.opacity = "0";
    }
}

/** Footer Check */
window.addEventListener("DOMContentLoaded",function() {
    if(menus.classList.contains("active")) {
        FooterVisible(0);
    }
});
/** Footer Check */

var documentTitle = document.title;
async function LeavedPage() {
    document.addEventListener("visibilitychange", function() {
        if(document.visibilityState === "hidden") {
            document.title = "Trizola > " + company_app_name.innerHTML;
        }
        else {
            document.title = documentTitle;
        }
    });
}