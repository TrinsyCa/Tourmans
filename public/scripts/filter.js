const tableFilter = document.querySelector(".tableFilter");
const allSidebarBtns = tableFilter.querySelectorAll('.filterSelectSectionSide .filterSidebarBtn');
const allSections = tableFilter.querySelectorAll('.filterContent section');
function opentableFilter()
{
    tableFilter.classList.add("active");

    if(allSidebarBtns.length > 0) {
        setTimeout(() => { allSidebarBtns[0].classList.add('active') }, 600);
    } else {
        talert("danger", "Bir hata oluştu, lütfen sayfayı yenileyip tekrardan deneyin.<br>Eğer sorun devam ederse destek ile iletişime geçin.", "Sayfa Filtreleme Hatası", "Sayfayı Yenile", function() { location.reload(true) });
    }

    if (allSections.length > 0) {
        setTimeout(() => { allSections[0].classList.add('active'); }, 600);
    } else {
        talert("danger", "Bir hata oluştu, lütfen sayfayı yenileyip tekrardan deneyin.<br>Eğer sorun devam ederse destek ile iletişime geçin.", "Sayfa Filtreleme Hatası", "Sayfayı Yenile", function() { location.reload(true) });
    }
}
function closetableFilter()
{
    tableFilter.classList.remove("active");

    allSidebarBtns.forEach((btn) => {
        btn.classList.remove("active");
    });

    allSections.forEach((section) => {
        section.classList.remove("active");
    })
}
document.addEventListener("keydown", function(event) {
   if (event.key === "F5") {
      window.location.href = "./";
   }
});

function filterSection(button, index) {
    const filterContent = tableFilter.querySelector('.filterContent .filterForm');
    const sections = tableFilter.querySelectorAll('.filterContent .filterForm section');
    
    const percentage = 100 / sections.length;
    filterContent.style.transform = `translateX(-${percentage * index}%)`;
    
    document.querySelectorAll('.filterSidebarBtn').forEach((btn) => {
        btn.classList.remove("active");
    });
    button.classList.add("active");

    selectedSection(button.getAttribute("aria-label"));
}

function selectedSection(sectionName) {
    const mySection = tableFilter.querySelector(`.filterContent section.${sectionName}`);

    allSections.forEach((section) => {
        section.classList.remove("active");
    });
    mySection.classList.add("active");
}