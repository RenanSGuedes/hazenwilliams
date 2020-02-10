function calculaGrandeza() {
    var vazao; var comprimento; var atrito; var diametro; var hf;

    hf = document.getElementById("perd1").value;
    vazao = document.getElementById("vaz1").value;
    comprimento = document.getElementById("comp1").value;
    atrito = document.getElementById("atr1").value;
    diametro = document.getElementById("dia1").value;

    var hf1 = (10.65 * Math.pow(vazao, 1.852) * comprimento) / (Math.pow(atrito, 1.852) * Math.pow(diametro, 4.871));
    var vazao1 = Math.pow(hf * Math.pow(atrito, 1.852) * Math.pow(diametro, 4.871), 1 / 1.852) / Math.pow(10.65 * comprimento, 1 / 1.852);
    var comprimento1 = (hf * Math.pow(atrito, 1.852) * Math.pow(diametro, 4.871)) / (10.65 * Math.pow(vazao, 1.852));
    var atrito1 = Math.pow(10.65 * Math.pow(vazao, 1.852) * comprimento, 1 / 1.852) / Math.pow(Math.pow(diametro, 4.871) * hf, 1 / 1.852);
    var diametro1 = Math.pow(10.65 * Math.pow(vazao, 1.852) * comprimento, 1 / 4.871) / Math.pow(Math.pow(atrito, 1.852) * hf, 1 / 4.871);

    if (hf === "" && vazao !== "" && comprimento !== "" && atrito !== "" && diametro !== "") {
        //document.write(hf1);
        return hf1;
    } else if (hf !== "" && vazao === "" && comprimento !== "" && atrito !== "" && diametro !== ""){
        //document.write(vazao1);
        return vazao1;
    }  else if (hf !== "" && vazao !== "" && comprimento === "" && atrito !== "" && diametro !== ""){
        //document.write(comprimento1);
        return comprimento1;
    } else if (hf !== "" && vazao !== "" && comprimento !== "" && atrito === "" && diametro !== "") {
        //ocument.write(atrito1);
        return atrito1;
    } else if (hf !== "" && vazao !== "" && comprimento !== "" && atrito !== "" && diametro === "") {
        //document.write(diametro1);
        return diametro1;
    }
}

function converteParaCentimetros() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (100 * parseFloat(calculaGrandeza())).toPrecision(3)+" cm";
}
function converteParaMetros() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (parseFloat(calculaGrandeza())).toPrecision(3)+" m";
}
function converteParaMilimetros() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (1000 * parseFloat(calculaGrandeza())).toPrecision(3)+" mm";
}
function escreveAtrito() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (parseFloat(calculaGrandeza())).toPrecision(3);
}

function converteParaMetrosCubicosPorHora() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (3600 * parseFloat(calculaGrandeza())).toPrecision(3) +" m³/h";
}
function converteParaMetrosCubicosPorMinuto() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (60 * parseFloat(calculaGrandeza())).toPrecision(3) +" m³/min";
}
function converteParaMetrosCubicosPorSegundo() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (parseFloat(calculaGrandeza())).toPrecision(3) +" m³/s";
}
