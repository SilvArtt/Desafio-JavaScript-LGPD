class Carousel {
    // atributos estáticos declarados direto na classe (em vez de uma variável global solta)
    static slides = [];
    static sequence = 0;
    static interval = null;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "Method Start need a Array Variable.";
        }

        Carousel.slides = arr;
        Carousel.sequence = 0;
        Carousel.Render();
        Carousel.ResetInterval();
    }

    static Render() {
        const current = Carousel.slides[Carousel.sequence];
        const image = document.getElementById("carousel");
        const imgTitle = document.getElementById("carousel-title");

        if (image) {
            image.style.backgroundImage = `url('${current.image}')`;
            image.style.cursor = "pointer";


            image.onclick = () => {
                window.location.href = current.url;
            };
        }
        if (imgTitle) {
            imgTitle.innerHTML = `<p>${current.title} <a href="${current.url}">Verifique novidades aqui!</a></p>`;
        }
    }

    static Next() {
        Carousel.sequence = (Carousel.sequence + 1) % Carousel.slides.length;
        Carousel.Render();
        Carousel.ResetInterval();
    }

    static Previous() {
        Carousel.sequence = (Carousel.sequence - 1 + Carousel.slides.length) % Carousel.slides.length;
        Carousel.Render();
        Carousel.ResetInterval();
    }

    static ResetInterval() {
        clearInterval(Carousel.interval);
        Carousel.interval = setInterval(() => Carousel.Next(), 2000);
    }
}