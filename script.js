/* =================================
   ПОЯВЛЕНИЕ ФОТОГРАФИЙ ПРИ СКРОЛЛЕ
================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =================================
   ОТКРЫТИЕ ФОТО НА ВЕСЬ ЭКРАН
================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


const photos =
    document.querySelectorAll(".memory-image");


photos.forEach((photo) => {

    photo.addEventListener(
        "click",
        () => {

            lightboxImage.src =
                photo.src;

            lightboxImage.alt =
                photo.alt;

            lightbox.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

});



/* =================================
   ЗАКРЫТИЕ
================================= */

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);



/* =================================
   СЕКРЕТНЫЕ ФОТО
================================= */

const openSecret =
    document.getElementById("openSecret");

const secretPhoto12 =
    document.getElementById("secretPhoto12");

const secretPhoto13 =
    document.getElementById("secretPhoto13");


openSecret.addEventListener(
    "click",
    () => {

        /* Показываем фото 12 */

        secretPhoto12.classList.add(
            "show"
        );


        /* Прячем кнопку */

        openSecret.style.display =
            "none";


        /* Плавно переходим к фото 12 */

        setTimeout(() => {

            secretPhoto12.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);


        /* Через 1.2 секунды
           появляется фото 13 */

        setTimeout(() => {

            secretPhoto13.classList.add(
                "show"
            );

        }, 1200);

    }
);



/* =================================
   ОБНОВЛЕНИЕ ФОТОГАЛЕРЕИ
   → ВОЗВРАТ НА ПЕРВУЮ СТРАНИЦУ
================================= */

if (
    window.location.pathname.endsWith("memories.html") &&
    performance.getEntriesByType("navigation")[0]?.type === "reload"
) {

    window.location.replace("index.html");

}
