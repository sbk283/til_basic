window.addEventListener('DOMContentLoaded',() => {
    const closeBt = this.document.querySelector(".popup_close");
    const popup = this.document.querySelector(".popup");

    closeBt.addEventListener("click", function() {
        popup.style.display = "none";
    })
});
