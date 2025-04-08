document.addEventListener("DOMContentLoaded", function() {
    const simBtn = document.getElementById("simBtn");
    const naoBtn = document.getElementById("naoBtn");
    const mensagem = document.getElementById("mensagem");
    const heartContainer = document.getElementById("heartContainer");

    let tentativas = 0;

    // Animação de entrada do título
    gsap.from(".titulo", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });

    // Resposta ao "Sim" com efeitos românticos
    simBtn.addEventListener("click", function() {
        mensagem.innerHTML = "aeeeee gatinha você me fez o cara mais feliz do mundo minha princesa perfeita eu quero você em tudo na minha vida gabi sua perfeita 💕 💝💝🥰🥰💖🥰";
        tocarMusica("somSim");
        criarCorações(30, 60); // Aumenta a quantidade e tamanho dos corações
        gsap.to("body", { background: "linear-gradient(to right, #ff4e50, #fc913a)", duration: 1 });
    });

    // Resposta ao "Não" com animação e som
    naoBtn.addEventListener("click", function() {
        tocarMusica("somNao");
        gsap.to("body", { backgroundColor: "#444", duration: 1 });
        setTimeout(() => {
            mensagem.innerHTML = "Poxa... Certeza que não quer reconsiderar? 🥺💔";
        }, 1500);
    });

    // Botão "Não" fugindo da resposta
    naoBtn.addEventListener("mouseover", function() {
        if (tentativas < 0) {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            naoBtn.style.position = "absolute";
            naoBtn.style.left = `${x}px`;
            naoBtn.style.top = `${y}px`;
            tentativas++;
        } else {
            naoBtn.style.display = "none";
            mensagem.innerHTML = "Sem saída... Você já é minha! 😘 só minha viu so minha gabi mas de ninguém 🥺😍😍😉🩷💞";
        }
    });

    // Criar corações flutuantes com animação GSAP
    function criarCorações(qtd, size) {
        for (let i = 0; i < qtd; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.fontSize = `${size}px`;
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = Math.random() * window.innerHeight + "px";
            heartContainer.appendChild(heart);

            gsap.fromTo(heart, 
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1.5, duration: 1, yoyo: true, repeat: -1 }
            );

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    // Função para tocar áudio
    function tocarMusica(arquivo) {
        let audio = document.getElementById(arquivo);
        audio.play();
    }
});