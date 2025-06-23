window.addEventListener('DOMContentLoaded', () => {
    const closeBt: Element | null = document.querySelector(".popup_close");
    const popup: HTMLElement | null = document.querySelector(".popup");

    closeBt?.addEventListener("click", () => {
        popup!.style.display = "none";
    });
});