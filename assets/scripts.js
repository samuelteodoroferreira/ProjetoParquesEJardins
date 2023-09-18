function showFrame(frameId) {
    // Oculta todos os iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.style.display = 'none';
    });

    // Exibe o iframe especificado
    const frameToShow = document.getElementById(frameId);
    if (frameToShow) {
        frameToShow.style.display = 'block';
    }
}

window.onload = function () {
    alert("A página foi carregada.");
};