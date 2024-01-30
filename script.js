const formElements = document.getElementById('wifi-form').elements;
const qrcodeContainer = document.getElementById("qrcode");
let qrcode; 
let ssid = document.getElementById("ssid").value;
let encryption = document.getElementById("encryption").value;
let hidden = document.getElementById("hidden").checked;
const initialQrText = `WIFI:S:${ssid};T:${encryption};P:;H:${hidden};;`;
qrcode = new QRCode(qrcodeContainer, {
    text: initialQrText,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
});

for (const element of formElements) {
    if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
        element.addEventListener('input', updateQrCode); 
    } else { 
        element.addEventListener('change', updateQrCode);
    }
}

function updateQrCode() {
    ssid = document.getElementById("ssid").value;
    password = document.getElementById("password").value;
    encryption = document.getElementById("encryption").value;
    hidden = document.getElementById("hidden").checked;
    const qrText = `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden};;`;
    
    qrcode.clear(); 
    qrcode.makeCode(qrText); 
}

