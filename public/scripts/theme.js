const sidebarStylesheet = document.getElementById("sidebar-theme").sheet;
const rootStyle = sidebarStylesheet.cssRules[0].style;

function white()
{
    //Default Colors
    rootStyle.setProperty("--content-bg","rgb(216,207,189)");
    rootStyle.setProperty("--content-bg-op-5","rgb(255,245,224,0.5)");
    rootStyle.setProperty("--content-bg-op-5","rgb(255,245,224,0.9)");
    rootStyle.setProperty("--main-color","black");
    rootStyle.setProperty("--main-font-secondary","rgba(255, 255, 255, 0.5)");
    //Default Colors

    //Selection Colors
    rootStyle.setProperty("--selection-bg","white");
    rootStyle.setProperty("--selection-color","rgb(216,207,189)");
    //Selection Colors

    //Box Colors
    rootStyle.setProperty("--box-bg","rgba(0,0,0,0.2)");
    rootStyle.setProperty("--box-hover-bg","rgba(0,0,0,0.15)");
    //Box Colors

    //Content Menu Colors
    rootStyle.setProperty("--content-menu-btn-bg","white");
    //Content Menu Colors

    //Table Colors
    rootStyle.setProperty("--table-border","white");
    rootStyle.setProperty("--table-shadow","rgba(0,0,0,0.5)");

    rootStyle.setProperty("--table-bg","rgb(206,197,179)");
    rootStyle.setProperty("--table-bg-hover","rgba(186,177,159)");
    rootStyle.setProperty("--table-on-bg-hover","rgb(226,217,199)");
    //Table Colors

    //Context Menu
    rootStyle.setProperty("--context-menu-bg","rgb(225, 215, 198)");
    //Context Menu

    //Sidebar Colors
    rootStyle.setProperty("--sidebar-panel-bg","rgb(225, 215, 198)");
    rootStyle.setProperty("--sidebar-bg-color","rgb(225, 215, 198)");
    rootStyle.setProperty("--sidebar-bg-color-op-7","rgb(225, 215, 198,0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-5","rgb(225, 215, 198,0.5)");
    rootStyle.setProperty("--sidebar-bg-color-op-7-color","rgb(234,224,206)");
    rootStyle.setProperty("--sidebar-color","black");
    rootStyle.setProperty("--sidebar-border-color","rgba(0,0,0,0.25)");
    rootStyle.setProperty("--sidebar-frame-border","2px solid rgba(0,0,0,0.25)");
    rootStyle.setProperty("--sidebar-frame-shadow","0 0 0 2px rgba(0,0,0,0.25)");
}

function light_blue()
{
    //Default Colors
    rootStyle.setProperty("--content-bg","#3F979B");
    rootStyle.setProperty("--content-bg-op-5","rgb(63, 151, 155,0.5)");
    rootStyle.setProperty("--content-bg-op-9","rgb(63, 151, 155,0.9)");
    rootStyle.setProperty("--main-color","white");
    rootStyle.setProperty("--main-font-secondary","rgba(255, 255, 255, 0.5)");
    //Default Colors

    //Selection Colors
    rootStyle.setProperty("--selection-bg","white");
    rootStyle.setProperty("--selection-color","black");
    //Selection Colors

    //Box Colors
    rootStyle.setProperty("--box-bg","rgba(33,37,41,0.55)");
    rootStyle.setProperty("--box-hover-bg","rgba(44,48,52,0.45)");
    //Box Colors

    //Content Menu Colors
    rootStyle.setProperty("--content-menu-btn-bg","white");
    //Content Menu Colors

    //Table Colors
    rootStyle.setProperty("--table-border","white");
    rootStyle.setProperty("--table-shadow","var(--bs-dark)");

    rootStyle.setProperty("--table-bg","#3F979B");
    rootStyle.setProperty("--table-bg-hover","#2a656879");
    rootStyle.setProperty("--table-on-bg-hover","rgb(83,187,192)");
    //Table Colors

    //Context Menu
    rootStyle.setProperty("--context-menu-bg","#205E61");
    //Context Menu


    //Sidebar Colors
    rootStyle.setProperty("--sidebar-panel-bg","#205E61");
    rootStyle.setProperty("--sidebar-bg-color","#205E61");
    rootStyle.setProperty("--sidebar-bg-color-op-7","rgba(32, 94, 97, 0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-5","rgba(32, 94, 97, 0.5)");
    rootStyle.setProperty("--sidebar-bg-color-op-7-color","rgba(41,111,114)");
    rootStyle.setProperty("--sidebar-color","white");
    rootStyle.setProperty("--sidebar-border-color","rgba(255,255,255,0.15)");
    rootStyle.setProperty("--sidebar-frame-border","2px solid white");
    rootStyle.setProperty("--sidebar-frame-shadow","0 0 0 2px white");
}
function dark()
{
    //Default Colors
    rootStyle.setProperty("--content-bg","rgba(36,36,36)");
    rootStyle.setProperty("--content-bg-op-5","rgba(30, 30, 30,0.5)");
    rootStyle.setProperty("--content-bg-op-9","rgba(30, 30, 30,0.9)");
    rootStyle.setProperty("--main-color","white");
    rootStyle.setProperty("--main-font-secondary","rgba(255, 255, 255, 0.5)");
    //Default Colors

    //Selection Colors
    rootStyle.setProperty("--selection-bg","white");
    rootStyle.setProperty("--selection-color","black");
    //Selection Colors

    //Box Colors
    rootStyle.setProperty("--box-bg","rgba(30, 30, 30, 1)");
    rootStyle.setProperty("--box-hover-bg","rgba(30, 30, 30, 0.7)");
    //Box Colors

    //Content Menu Colors
    rootStyle.setProperty("--content-menu-btn-bg","white");
    //Content Menu Colors

    //Table Colors
    rootStyle.setProperty("--table-border","white");
    rootStyle.setProperty("--table-shadow","var(--bs-dark)");

    rootStyle.setProperty("--table-bg","#222222");
    rootStyle.setProperty("--table-bg-hover","rgb(50,50,50,0.55)");
    rootStyle.setProperty("--table-on-bg-hover","rgb(65,65,65)");
    //Table Colors

    //Context Menu
    rootStyle.setProperty("--context-menu-bg","#222222");
    //Context Menu

    //Sidebar Colors
    rootStyle.setProperty("--sidebar-panel-bg","#222222");
    rootStyle.setProperty("--sidebar-bg-color","#222222");
    rootStyle.setProperty("--sidebar-bg-color-op-7","rgba(39, 40, 41, 0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-5","rgba(39, 40, 41, 0.5)");
    rootStyle.setProperty("--sidebar-bg-color-op-7-color","rgba(39, 40, 41)");
    rootStyle.setProperty("--sidebar-color","white");
    rootStyle.setProperty("--sidebar-border-color","rgba(255,255,255,0.04)");
    rootStyle.setProperty("--sidebar-frame-border","2px solid white");
    rootStyle.setProperty("--sidebar-frame-shadow","0 0 0 2px white");
}
function black()
{
    //Default Colors
    rootStyle.setProperty("--content-bg","rgb(0,0,0)");
    rootStyle.setProperty("--content-bg-op-5","rgba(0,0,0,0.5)");
    rootStyle.setProperty("--content-bg-op-9","rgba(0,0,0,0.9)");
    rootStyle.setProperty("--main-color","white");
    rootStyle.setProperty("--main-font-secondary","rgba(255, 255, 255, 0.5)");
    //Default Colors

    //Selection Colors
    rootStyle.setProperty("--selection-bg","white");
    rootStyle.setProperty("--selection-color","black");
    //Selection Colors

    //Box Colors
    rootStyle.setProperty("--box-bg","rgba(0,0,0)");
    rootStyle.setProperty("--box-hover-bg","rgba(3,3,3)");
    //Box Colors

    //Content Menu Colors
    rootStyle.setProperty("--content-menu-btn-bg","white");
    //Content Menu Colors

    //Table Colors
    rootStyle.setProperty("--table-border","var(--sidebar-border-color)");
    rootStyle.setProperty("--table-shadow","transparent");

    rootStyle.setProperty("--table-bg","rgb(0,0,0)");
    rootStyle.setProperty("--table-bg-hover","rgb(5,5,5,0.55)");
    rootStyle.setProperty("--table-on-bg-hover","rgb(10,10,10)");
    //Table Colors

    //Context Menu
    rootStyle.setProperty("--context-menu-bg","rgb(0,0,0)");
    //Context Menu

    //Sidebar Colors
    rootStyle.setProperty("--sidebar-panel-bg","rgb(0,0,0)");
    rootStyle.setProperty("--sidebar-bg-color","rgb(0,0,0)");
    rootStyle.setProperty("--sidebar-bg-color-op-7","rgba(0,0,0, 0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-5","rgba(0,0,0, 0.5)");
    rootStyle.setProperty("--sidebar-bg-color-op-7-color","rgba(0,0,0)");
    rootStyle.setProperty("--sidebar-color","white");
    rootStyle.setProperty("--sidebar-border-color","rgba(255,255,255,0.15)");
    rootStyle.setProperty("--sidebar-frame-border","2px solid rgba(255,255,255,0.15)");
    rootStyle.setProperty("--sidebar-frame-shadow","0 0 0 2px var(--sidebar-border-color)");
}
function dark_blue()
{
    //Default Colors
    rootStyle.setProperty("--content-bg","rgb(25, 25, 35)");
    rootStyle.setProperty("--content-bg-op-5","rgba(30,28,40,0.5)");
    rootStyle.setProperty("--content-bg-op-9","rgba(30,28,40,0.9)");
    rootStyle.setProperty("--main-color","white");
    rootStyle.setProperty("--main-font-secondary","rgba(255, 255, 255, 0.5)");
    //Default Colors

    //Selection Colors
    rootStyle.setProperty("--selection-bg","white");
    rootStyle.setProperty("--selection-color","black");
    //Selection Colors

    //Box Colors
    rootStyle.setProperty("--box-bg","rgba(17,20,30, 1)");
    rootStyle.setProperty("--box-hover-bg","rgba(22,25,35, 0.8)");
    //Box Colors

    //Content Menu Colors
    rootStyle.setProperty("--content-menu-btn-bg","white");
    //Content Menu Colors

    //Table Colors
    rootStyle.setProperty("--table-border","white");
    rootStyle.setProperty("--table-shadow","var(--bs-dark)");

    rootStyle.setProperty("--table-bg","rgb(17,20,30)");
    rootStyle.setProperty("--table-bg-hover","rgb(47,50,60,0.5)");
    rootStyle.setProperty("--table-on-bg-hover","rgb(57,60,70)");
    //Table Colors

    //Context Menu
    rootStyle.setProperty("--context-menu-bg","#191b24");
    //Context Menu

    //Sidebar Colors
    rootStyle.setProperty("--sidebar-panel-bg","#191b24");
    rootStyle.setProperty("--sidebar-bg-color","#191b24");
    rootStyle.setProperty("--sidebar-bg-color-op-7","rgba(30,33,43, 0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-5","rgba(30,33,43, 0.5)");
    rootStyle.setProperty("--sidebar-bg-color-op-7-color","rgba(30,31,42)");
    rootStyle.setProperty("--sidebar-color","white");
    rootStyle.setProperty("--sidebar-border-color","rgba(255,255,255,0.06)");
    rootStyle.setProperty("--sidebar-frame-border","2px solid white");
    rootStyle.setProperty("--sidebar-frame-shadow","0 0 0 2px white");
}
function trizola()
{
    //Default Colors
    rootStyle.setProperty("--content-bg","linear-gradient(125deg, #580cca, #670bb2, #780a98, #880a7f, #970a66, #a80a4d, #b80b34)");
    rootStyle.setProperty("--content-bg-op-5","linear-gradient(45deg, rgba(110, 15, 253, 0.5), rgba(129, 14, 222, 0.5), rgba(150, 12, 190, 0.5), rgba(170, 12, 159, 0.5), rgba(189, 12, 127, 0.5), rgba(210, 13, 96, 0.5), rgba(230, 14, 65, 0.5)");
    rootStyle.setProperty("--content-bg-op-9","linear-gradient(45deg, rgba(110, 15, 253, 0.9), rgba(129, 14, 222, 0.9), rgba(150, 12, 190, 0.9), rgba(170, 12, 159, 0.9), rgba(189, 12, 127, 0.9), rgba(210, 13, 96, 0.9), rgba(230, 14, 65, 0.9)");
    rootStyle.setProperty("--main-color","white");
    rootStyle.setProperty("--main-font-secondary","rgba(255, 255, 255, 0.5)");
    //Default Colors

    //Selection Colors
    rootStyle.setProperty("--selection-bg","white");
    rootStyle.setProperty("--selection-color","black");
    //Selection Colors

    //Box Colors
    rootStyle.setProperty("--box-bg","rgba(0,0,0,0.5)");
    rootStyle.setProperty("--box-hover-bg","rgba(0,0,0,0.7)");
    //Box Colors

    //Content Menu Colors
    rootStyle.setProperty("--content-menu-btn-bg","white");
    //Content Menu Colors

    //Table Colors
    rootStyle.setProperty("--table-border","white");
    rootStyle.setProperty("--table-shadow","var(--bs-dark)");

    rootStyle.setProperty("--table-bg","rgb(0,0,0,0.7)");
    rootStyle.setProperty("--table-bg-hover","rgb(0,0,0,0.5)");
    rootStyle.setProperty("--table-on-bg-hover","rgb(0,0,0,0.8)");
    //Table Colors

    //Context Menu
    rootStyle.setProperty("--context-menu-bg","linear-gradient(45deg, rgba(110, 15, 253, 0.5), rgba(129, 14, 222, 0.5), rgba(150, 12, 190, 0.5), rgba(170, 12, 159, 0.5), rgba(189, 12, 127, 0.5), rgba(210, 13, 96, 0.5), rgba(230, 14, 65, 0.5)");
    //Context Menu

    //Sidebar Colors
    rootStyle.setProperty("--sidebar-panel-bg","transparent");
    rootStyle.setProperty("--sidebar-bg-color","rgb(0,0,0,0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-7","rgba(0,0,0, 0.7)");
    rootStyle.setProperty("--sidebar-bg-color-op-5","rgba(0,0,0, 0.5)");
    rootStyle.setProperty("--sidebar-bg-color-op-7-color","rgba(30,31,42)");
    rootStyle.setProperty("--sidebar-color","white");
    rootStyle.setProperty("--sidebar-border-color","rgba(255,255,255,0.06)");
    rootStyle.setProperty("--sidebar-frame-border","2px solid white");
    rootStyle.setProperty("--sidebar-frame-shadow","0 0 0 2px white");
}