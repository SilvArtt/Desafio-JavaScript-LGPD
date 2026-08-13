let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    return arr.findIndex(car => car.nome === carClass.nome);
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }

    const pos = GetCarArrPosition(carArr, carClass);

    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Você já selecionou 2 veículos. Desmarque um deles para escolher outro.");
            el.checked = false;
            return;
        }
        if (pos === -1) {
            carArr.push(carClass);
        }
    } else {
        if (pos !== -1) {
            carArr.splice(pos, 1);
        }
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

const compareFields = [
    { id: "image",           html: true, render: car => `<img src="${car.image}" alt="${car.nome}">` },
    { id: "modelo",          get: car => car.nome },
    { id: "alturacacamba",   get: car => car.alturaCacamba },
    { id: "alturaveiculo",   get: car => car.alturaVeiculo },
    { id: "alturasolo",      get: car => car.alturaSolo },
    { id: "capacidadecarga", get: car => car.capacidadeCarga },
    { id: "motor",           get: car => car.motor },
    { id: "potencia",        get: car => car.potencia },
    { id: "volumecacamba",   get: car => car.volumeCacamba },
    { id: "roda",            get: car => car.roda },
    { id: "preco",           get: car => car.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
];

function UpdateCompareTable() {
    carArr.forEach((car, index) => {
        compareFields.forEach(field => {
            const cell = document.getElementById(`compare_${field.id}_${index}`);
            if (!cell) return;

            const value = field.render ? field.render(car) : field.get(car);
            cell[field.html ? "innerHTML" : "innerText"] = value;
        });
    });
}