// SMOOTH SCROLL NAV
document.querySelectorAll(".main-text a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

//HIPER LINKS
document.querySelector(".contact-btn, .btn-hidden").addEventListener("click", function () {
  window.location.href = "https://lu.ma/c9hb9rcy";
});
document.querySelector(".facebook").addEventListener("click", function () {
  window.location.href = "https://www.facebook.com/@Mobidea";
});
document.querySelector(".instagram").addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/mobidea_cpa/";
});
document.querySelector(".linkedin").addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/company/mobidea/";
});
document.querySelector(".telegram").addEventListener("click", function () {
  window.location.href = "https://t.me/+KFdF_RPNhF85YTlk";
});
