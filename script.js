// Smooth scroll to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}


function scrollToFeatured() {
    const section = document.getElementById("featured-products");
    const navBarHeight = document.querySelector("nav").offsetHeight;

    // 네비게이션 바 높이만큼 추가하여 가려지지 않도록 스크롤
    window.scrollTo({
        top: section.offsetTop - navBarHeight,
        behavior: "smooth"
    });
}