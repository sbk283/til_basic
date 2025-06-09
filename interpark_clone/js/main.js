window.addEventListener("DOMContentLoaded", function() {
    // main
    const main = this.document.querySelector(".main");
    // 윈도우 스크롤 체크
    window.addEventListener("scroll", function() {
        const scY = window.scrollY;

        if (scY > 0) {
            console.log("스크롤됨");
            main.classList.add("main_scroll");
        } else {
            console.log("스크롤 최상단");
            main.classList.remove("main_scroll");
        }
    });
});
