
// --- 回到顶部功能 ---
var mybutton = document.getElementById("backToTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 图片灯箱功能 ---
var lightbox = document.getElementById("imageLightbox");
var lightboxImg = document.getElementById("lightboxImg");
var span = document.getElementsByClassName("close-lightbox")[0];

function openLightbox(imgElement) {
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

span.onclick = function () {
    lightbox.style.display = "none";
}

// 点击背景也可以关闭
lightbox.onclick = function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
}

// 按ESC键关闭
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});
