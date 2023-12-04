document.addEventListener('DOMContentLoaded', function () {
    const sobreNosTexto = document.getElementById('sobre-nos-texto');
    const lerMaisLink = document.getElementById('ler-mais-link');
    const iconeLerMais = document.getElementById('icone-ler-mais');

    lerMaisLink.addEventListener('click', function () {
        sobreNosTexto.classList.toggle('exibir-texto');
        if (sobreNosTexto.classList.contains('exibir-texto')) {
            iconeLerMais.innerHTML = '&#9650;';
        } else {
            iconeLerMais.innerHTML = '&#9660;';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("overlay").style.display = "none";
    }, 2000);
});

function collapseNavbar() {
    document.querySelector('.navbar-toggler').click();
}
