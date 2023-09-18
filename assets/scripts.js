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

        //Definindo o tamanho do Iframe Cedro
        window.addEventListener('DOMContentLoaded', (event) => {
            // Obtenha a referência para o elemento <iframe>
            const iframe = document.getElementById('cedro-frame');
               
            // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
            iframe.onload = function() {
                const conteudo = iframe.contentDocument.documentElement;
                const alturaConteudo = conteudo.scrollHeight;
        
                // Defina a altura do <iframe> para a altura do conteúdo
                iframe.style.height = alturaConteudo + 'px';
            };
        });

        //Definindo o tamanho do iperosa-frame
        window.addEventListener('DOMContentLoaded', (event) => {
            // Obtenha a referência para o elemento <iframe>
            const iframe = document.getElementById('iperosa-frame');
            
            // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
            iframe.onload = function() {
                const conteudo = iframe.contentDocument.documentElement;
                const alturaConteudo = conteudo.scrollHeight;

                // Defina a altura do <iframe> para a altura do conteúdo
                iframe.style.height = alturaConteudo + 'px';
            };
        });

           //Definindo o tamanho do oiti-frame
           window.addEventListener('DOMContentLoaded', (event) => {
            // Obtenha a referência para o elemento <iframe>
            const iframe = document.getElementById('oiti-frame');
            
            // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
            iframe.onload = function() {
                const conteudo = iframe.contentDocument.documentElement;
                const alturaConteudo = conteudo.scrollHeight;

                // Defina a altura do <iframe> para a altura do conteúdo
                iframe.style.height = alturaConteudo + 'px';
            };
        });

  //Definindo o tamanho do paineira-frame
  window.addEventListener('DOMContentLoaded', (event) => {
    // Obtenha a referência para o elemento <iframe>
    const iframe = document.getElementById('paineira-frame');
    
    // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
    iframe.onload = function() {
        const conteudo = iframe.contentDocument.documentElement;
        const alturaConteudo = conteudo.scrollHeight;

        // Defina a altura do <iframe> para a altura do conteúdo
        iframe.style.height = alturaConteudo + 'px';
    };
});

 //Definindo o tamanho do paineira-frame
 window.addEventListener('DOMContentLoaded', (event) => {
    // Obtenha a referência para o elemento <iframe>
    const iframe = document.getElementById('paubrasil-frame');
    
    // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
    iframe.onload = function() {
        const conteudo = iframe.contentDocument.documentElement;
        const alturaConteudo = conteudo.scrollHeight;

        // Defina a altura do <iframe> para a altura do conteúdo
        iframe.style.height = alturaConteudo + 'px';
    };
});

 //Definindo o tamanho do paineira-frame
 window.addEventListener('DOMContentLoaded', (event) => {
    // Obtenha a referência para o elemento <iframe>
    const iframe = document.getElementById('pracaamaral-frame');
    
    // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
    iframe.onload = function() {
        const conteudo = iframe.contentDocument.documentElement;
        const alturaConteudo = conteudo.scrollHeight;

        // Defina a altura do <iframe> para a altura do conteúdo
        iframe.style.height = alturaConteudo + 'px';
    };
});


//Definindo o tamanho do paineira-frame
window.addEventListener('DOMContentLoaded', (event) => {
    // Obtenha a referência para o elemento <iframe>
    const iframe = document.getElementById('pracaamaral1941-frame');
    
    // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
    iframe.onload = function() {
        const conteudo = iframe.contentDocument.documentElement;
        const alturaConteudo = conteudo.scrollHeight;

        // Defina a altura do <iframe> para a altura do conteúdo
        iframe.style.height = alturaConteudo + 'px';
    };
});




//Definindo o tamanho do paineira-frame
window.addEventListener('DOMContentLoaded', (event) => {
    // Obtenha a referência para o elemento <iframe>
    const iframe = document.getElementById('sibiripiruna-frame');
    
    // Quando o conteúdo do <iframe> carregar, ajuste o tamanho do <iframe>
    iframe.onload = function() {
        const conteudo = iframe.contentDocument.documentElement;
        const alturaConteudo = conteudo.scrollHeight;

        // Defina a altura do <iframe> para a altura do conteúdo
        iframe.style.height = alturaConteudo + 'px';
    };
});
