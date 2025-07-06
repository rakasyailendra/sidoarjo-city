document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });

    setTimeout(() => {
        alert("Selamat datang di Explore Sidoarjo! Nikmati pengalaman menjelajahi kota kami.");
    }, 1000);

    const articleTitles = document.querySelectorAll("article h2");
    articleTitles.forEach(title => {
        title.style.cursor = "pointer";
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            if (content) {
                content.style.display = content.style.display === "none" ? "block" : "none";
            }
        });
    });
});