
document.addEventListener('DOMContentLoaded', () => {
    VANTA.RINGS({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xfff0f0,
        color: 0x5e006d,
    })
})
let Qrbox = document.getElementById("Qrbox");
let QrImg = document.getElementById("QrImg");
let url = document.getElementById("url");

function generateQr(){
    QrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
}
