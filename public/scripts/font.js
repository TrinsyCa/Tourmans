function FontFamily(fontFamily)
{
    const sidebarStylesheet = document.getElementById("sidebar-theme").sheet;
    const rootStyle = sidebarStylesheet.cssRules[0].style;

    const font = "'" + fontFamily + "'" + ", sans-serif";

    rootStyle.setProperty("--main-font", font);
}