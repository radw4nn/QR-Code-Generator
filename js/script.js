let imgContainer = document.getElementById("imgContainer");
let codePic = document.getElementById("codePic");
let qrInput = document.getElementById("qrInput");

function createQRCode(){
    if (qrInput.value.length > 0){
    codePic.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
    imgContainer.classList.add("show-img");
    }

    else{
        qrInput.classList.add("empty");
        setTimeout(()=>{
            qrInput.classList.remove("empty")
        },1000);
    }
}