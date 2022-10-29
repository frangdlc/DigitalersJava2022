const app = document.getElementById('typewriter');

const typewriter = new Typewriter (app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('Gracias por visitar mi web')
    .pauseFor(200)
    .start()

