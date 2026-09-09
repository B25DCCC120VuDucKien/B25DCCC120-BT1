
let welcome = document.getElementById("welcome");
let button = document.getElementById("change-color-btn");
let now = new Date();
let hour = now.getHours();
if (hour >= 5 && hour < 12) {
    welcome.innerText = "Chào buổi sáng! Chúc bạn một ngày tốt lành.";
} else if (hour >= 12 && hour < 18) {
    welcome.innerText = "Chào buổi chiều! Chúc bạn học tập tốt.";
} else {
    welcome.innerText = "Chào buổi tối! Chúc bạn có một buổi tối vui vẻ.";
}
button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});