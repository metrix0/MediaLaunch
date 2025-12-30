if (window.innerWidth > 600) {
    document.getElementById('video').src = 'img/VideoMed.mp4'
} else {
    document.getElementById('video').src = 'img/VideoMedCompressed.mp4'
}

function Welcome(){
    let time = 1
    setTimeout(function (){
        removeLoader()
        document.title = "Media Launch"
    },time)

    setTimeout(function (){
        testimonialsUl.innerHTML = ''
        testimoialsInsert()
    },1)
}

function removeLoader(){
    setTimeout(()=>{
        let loader = document.getElementById('loader');
        loader.style = 'display: none;';
    },1);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

function shiver(bool, click, el) {
    const arrows = document.getElementsByClassName('flying')

    if(bool){
        for(let i = 0; i <arrows.length; i++){
            arrows[i].classList.add('shiver')
        }
    } else {
        for(let i = 0; i <arrows.length; i++){
            arrows[i].classList.remove('shiver')
        }
        if(click){
            for(let i = 0; i <arrows.length; i++){
                arrows[i].classList.add('burst')
            }
            el.onmouseover = function (){}
            setTimeout(function (){
                el.onmouseover = function (){shiver(true)}
            },1500)
        }
    }
}

var passedOver = false
function passOver(){
    passedOver = false
    const cont = document.getElementById('passOver')
    cont.classList.remove('none_important')
    setTimeout(function (){
        cont.style.left = '0%'
        setTimeout(function (){passedOver = true;},400)
        setTimeout(function (){
            cont.style.left = '200%'
            document.getElementById('arrows').innerHTML =
                '<i class="fa-solid fa-arrow-right flying" style="animation-delay: 1s;font-size: 480%;left: -3%; position: absolute; z-index: 1; transform: scaleX(110%); color: var(--select2)"></i>' +
                '<i class="fa-solid fa-arrow-right flying" style="top: -20%;right: 0; font-size: 350%; position: absolute; z-index: 1; transform: scaleX(110%); color: var(--select2)"></i>' +
                '<i class="fa-solid fa-arrow-right flying" style="animation-delay: 2s;left: 60%;bottom: 5%;font-size: 550%; position: absolute; z-index: 1; transform: scaleX(110%); color: var(--select2)"></i>'
            setTimeout(function (){
                cont.classList.add('none_important')
                setTimeout(function (){ cont.style.left = '-100%' },10)
            },1000)
        },1000)
    },10)
}

const testimonials = [
    {
        name:"Pizzaria Amorim, Mês 1. Mais de 150 pedidos com Ticket Médio de +R$ 100 (+R$ 16.000)",
        imgpath:"amorim.jpg",
        result:"+154 pedidos gerados no 1° mês",
        desc:"Sucesso nas vendas em Delivery do Cardápio Digital.",
        extended:true,
        results:[
            { type:"video", src:"img/resultados/amo1.mp4" },
            { type:"img", src:"img/resultados/amo2.webp" },
            { type:"video", src:"img/resultados/amo3.mp4" },
            { type:"img", src:"img/resultados/amo4.webp" }
        ]
    },

    {
        "name":"D'Baked, Mês 1. Pedidos pelo Cardápio Digital e Whatsapp.",
        "imgpath":"dbaked.jpg",
        "result":"+300 pedidos gerados no 1° mês",
        "desc": "Além do lançamento surpreendente dos produtos de Páscoa.",
        extended:true,
        results:[
            { type:"video", src:"img/resultados/db2.mp4" },
            { type:"img", src:"img/resultados/db3.webp" },
            { type:"video", src:"img/resultados/db4.mp4" },
            { type:"img", src:"img/resultados/db1.webp" }

        ]

    },
    {
        "name":"Four Hamburgueria, Mês 1.",
        "imgpath":"four.jpg",
        "result":"+100.000 visualizações no 1° Mês.",
        "desc": "Com uma produção visual de dar água na boca!",
        extended:true,
        results:[
            { type:"video", src:"img/resultados/fou1.mp4" },
            { type:"img", src:"img/resultados/fou2.webp" },
            { type:"video", src:"img/resultados/fou3.mp4" },
            { type:"img", src:"img/resultados/fou4.webp" },
        ]
    },
    {
        "name":"Saboritto, Mês 1",
        "imgpath":"saboritto2.jpg",
        "result":"+400 Contatos no Whatsapp no 1° Mês",
        "desc": "E lançamento das vertentes Almoço e Café da Manhã.",
        extended:true,
        results:[
            { type:"video", src:"img/resultados/sab2.mp4" },
            { type:"img", src:"img/resultados/sab1.webp" },
            { type:"video", src:"img/resultados/sab4.mp4" },
            { type:"img", src:"img/resultados/sab3.webp" }

        ]
    },
    {
        "name":"Orc Burger (Barra Bonita)",
        "imgpath":"orc.jpg",
        "result":"+50.000 Engajamentos (Like, Follow, etc)",
        "desc": "E lançamento de novos produtos com sucesso.",
        extended:true,
        results:[
            { type:"video", src:"img/resultados/orc2.mp4" },
            { type:"img", src:"img/resultados/orc1.webp" },
            { type:"video", src:"img/resultados/orc4.mp4" },
            { type:"img", src:"img/resultados/orc3.webp" }

        ]
    },
    {
        "name":"Padaria Florença",
        "imgpath":"florenca.jpg",
        "result":"+700 contatos no Whatsapp",
        "desc": "Apoio à nova fase da Padaria e Confeitaria, cardápios e delivery.",
        extended:true,
        results:[
            { type:"video", src:"img/resultados/flo1.mp4" },
            { type:"img", src:"img/resultados/flo2.webp" },
            { type:"video", src:"img/resultados/flo3.mp4" },
            { type:"img", src:"img/resultados/flo4.webp" }
        ]
    },

    // {
    //     "name":"Três Chefs",
    //     "imgpath":"treschefs.jpg",
    //     "result":"+146 LEADS EM 1 MÊS",
    //     "desc": "Lançamento de novos produtos com sucesso."
    // },
    {
        "name":"Germânia",
        "imgpath":"germania.jpg",
        "result":"+100 LEADS no mês",
        "desc": "Mais alcance e reconhecimento da marca, em B2B e B2C."
    },
    {
        "name":"Cowbrownies",
        "imgpath":"cowbrownies.jpg",
        "result":"+ VENDAS/MÊS",
        "desc": "Cowbrownies precisava de um visual belo e que dá muita fome!"
    },
    {
        "name":"Lugs",
        "imgpath":"lugs.jpg",
        "result":"+100 MIL visualizações",
        "desc": "A Lug's precisava de reconhecimento, através da internet e influencers!"
    }
]
const testimonialsUl = document.getElementById('testimoinalGrid')
var shadowIndex = 1

function testimoialsInsert(){
    for(let i = 0; i < testimonials.length; i++){

        if(testimonials[i].extended){

            const wrap = document.createElement('div')
            wrap.classList.add('extendedWrap')

            const left = document.createElement('div')
            left.classList.add('extendedLeft')
            left.innerHTML =
                '<div class="gridElement shadow'+shadowIndex+'">' +
                '<img class="lazy" src="img/testimonials/'+testimonials[i].imgpath+'" style="width:100%;border-radius:10px">' +
                '</div>'

            if(shadowIndex++ >= 3){ shadowIndex = 1 }

            const right = document.createElement('div')
            right.classList.add('resultsGrid')

            right.innerHTML =
                '<div style="grid-column:1/-1;margin-bottom:14px;" class="divGridtext">' +
                '<span class="gradText fontInc4" style="font-size:130%; font-weight: bold">'+testimonials[i].result+'</span><br>' +
                '<span class="fontInc2" style="font-size:80%;opacity:.8; margin-top: 2%; display: inline-block; line-height: 160%">'+testimonials[i].name+'</span>' +
                '</div>'

            let j = 0
            testimonials[i].results.forEach(a=>{
                j++
                const ad = document.createElement('div')
                ad.classList.add('adItem')
                ad.innerHTML = a.type === 'video'
                    ? '<video src="'+a.src+'" muted autoplay loop playsinline class="lazy-video"></video>'
                    : '<img src="'+a.src+'" class="lazy">'
                if(j > 3)ad.classList.add("pcbye")
                right.appendChild(ad)
            })

            wrap.appendChild(left)
            wrap.appendChild(right)
            testimonialsUl.appendChild(wrap)

        } else {

            const div = document.createElement('div')
            div.classList.add('gridElement','shadow'+shadowIndex)
            if(shadowIndex++ >= 3){ shadowIndex = 1 }

            div.innerHTML =
                '<img src="img/testimonials/'+testimonials[i].imgpath+'" style="width:100%;border-radius:10px 10px 0 0">' +
                '<p style="color:white;background:linear-gradient(10deg,var(--grad1),var(--grad2),var(--grad3));padding:5% 0;text-align:center;border-radius:0 0 10px 10px">' +
                '<span class="cand">'+testimonials[i].result+'</span><br>' +
                '<span style="font-size:85%;width:90%;display:inline-block;margin-top:2%">'+testimonials[i].desc+'</span><br>' +
                '</p>'

            testimonialsUl.appendChild(div)
        }
    }

    document.querySelectorAll("img.lazy").forEach(el => mediaObserver.observe(el));
    document.querySelectorAll("video.lazy-video").forEach(el => mediaObserver.observe(el));
}

function openMenu(op){
    const cfg = document.getElementById('menu')
    if(op){
        cfg.classList.remove('none')
        setTimeout(()=>cfg.classList.remove('hiddenMenu'),10)
    } else {
        cfg.classList.add('hiddenMenu')
        setTimeout(()=>cfg.classList.add('none'),800)
    }
}

var form = document.getElementById("form");

const handleSubmit = event => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    const telInput = document.getElementById("telInput");
    const telError = document.getElementById("telError");

    telError.style.display = "none";
    telInput.style.border = "";

    if (telInput.value.replace(/\D/g, "").length < 8) {
        telError.style.display = "block";
        telInput.style.border = "1px solid #e53935";
        return;
    }
    fetch("/", {
        method:"POST",
        headers:{ "Content-Type":"application/x-www-form-urlencoded" },
        body:new URLSearchParams(formData).toString()
    })
        .then(()=>setTimeout(()=>window.location="../contato-recebido",150))
        .catch(()=>alert("Opa! Houve algum problema ao enviar o número."));
};

document.querySelector("form").addEventListener("submit", handleSubmit);


const mediaObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (el.tagName === "IMG" && el.dataset.src) {
            el.src = el.dataset.src;
            el.removeAttribute("data-src");
        }

        if (el.tagName === "VIDEO" && el.dataset.src) {
            el.src = el.dataset.src;
            el.load();
            el.play().catch(()=>{});
            el.removeAttribute("data-src");
        }

        observer.unobserve(el);
    });
}, {
    rootMargin: "200px" // preload slightly before visible
});


const videoVisibilityObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play().catch(()=>{});
        } else {
            video.pause();
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll("video").forEach(v => videoVisibilityObserver.observe(v));