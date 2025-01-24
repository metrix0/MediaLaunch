
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

            // hide the loader
            loader.style = 'display: none;';
        },
        1);
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
    }
    else{
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
            document.getElementById('arrows').innerHTML = '<i class="fa-solid fa-arrow-right flying" style="animation-delay: 1s;font-size: 480%;left: -3%; position: absolute; z-index: 1; transform: scaleX(110%); color: var(--select2)"></i>\n' +
                '        <i class="fa-solid fa-arrow-right flying" style="top: -20%;right: 0; font-size: 350%; position: absolute; z-index: 1; transform: scaleX(110%); color: var(--select2)"></i>\n' +
                '        <i class="fa-solid fa-arrow-right flying" style="animation-delay: 2s;left: 60%;bottom: 5%;font-size: 550%; position: absolute; z-index: 1; transform: scaleX(110%); color: var(--select2)"></i>\n'
            setTimeout(function (){
                cont.classList.add('none_important')
                setTimeout(function (){            cont.style.left = '-100%';
                },10)
            },1000)
        },1000)

    },10)
}

const testimonials = [
    {
        "name":"Orc",
        "imgpath":"orc.jpg",
        "result":"+146 LEADS EM 1 MÊS",
        "desc": "Lançamento de novos produtos com sucesso."
    },
    {
        "name":"Total Ar",
        "imgpath":"totalar.jpg",
        "result":"+ RECONHECIMENTO",
        "desc": "Com a TotalAr alcançamos mais consumidores e empreendimentos!"
    },
    {
        "name":"Germânia",
        "imgpath":"germania.jpg",
        "result":"+ RECONHECIMENTO",
        "desc": "A Germânia de Rio Claro precisava de mais alcance."
    },
    {
        "name":"Cowbrownies",
        "imgpath":"cowbrownies.jpg",
        "result":"+ VENDAS/MÊS",
        "desc": "Cowbrownies precisava de um visual belo e que dá muita fome!"
    },
    // {
    //     "name":"Metal Móveis",
    //     "imgpath":"metal.png",
    //     "result":"+1000 VENDAS/MÊS",
    //     "desc": "Cowbrownies precisava de um visual belo e que dá muita fome!"
    // },
    {
        "name":"Casulo Veste",
        "imgpath":"casulo.jpg",
        "result":"LANÇAMENTO DO ZERO",
        "desc": "Lançamento da Loja com múltiplos clientes ativos!"
    },
    {
        "name":"Baliero",
        "imgpath":"baliero.jpg",
        "result":"+ RENOME E TRÁFEGO",
        "desc": "Combinamos nossa criatividade com suas fotos incríveis."
    },
    {
        "name":"Lugs",
        "imgpath":"lugs.jpg",
        "result":"+ RECONHECIMENTO",
        "desc": "A Lug's precisava de reconhecimento, através da internet e influencers!"
    },
    {
        "name":"John Vitor",
        "imgpath":"johnvitor.jpg",
        "result":"LEADS QUALIFICADOS",
        "desc": "Entregamos um visual profissional que atrai o tipo certo de cliente."
    },
]
const testimonialsUl = document.getElementById('testimoinalGrid')
var shadowIndex = 1
function testimoialsInsert(){
    for(let i = 0; i < testimonials.length; i++){
        const div = document.createElement('div')
        div.classList.add('gridElement')
        div.classList.add('shadow'+shadowIndex)
        if(shadowIndex++ >= 3){shadowIndex = 1}
        div.innerHTML = '        <img src="img/testimonials/'+testimonials[i].imgpath+'" style="width: 100%; border-radius: 4px 4px 0 0">' +
            '        <p style="color: white;background: linear-gradient(10deg, var(--grad1) 0%, var(--grad2) 50%, var(--grad3) 100%);padding-bottom: 5%; border-radius: 0 0 4px 4px;padding-top: 3%; text-align: center">' +
            '          <span class="cand">' +
            '            '+testimonials[i].result+'' +
            '          </span>' +
            '          <br>' +
            '          <span style="font-size: 85%; width: 90%; display: inline-block;margin-top: 2%">' +
            '            '+testimonials[i].desc+'' +
            '          </span>' +
            '          <br>' +
            '          <span style="font-size: 60%;margin-top: 5%;display: inline-block;cursor: pointer;" onclick="window.open(\'https://wa.me/5519988760900?text=Ol%C3%A1,%20vim%20pelo%20site.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es,%20n%C3%BAmeros%20e%20m%C3%A9tricas%20sobre%20o%20projeto '+testimonials[i].name+'?\')">' +
            '            Saiba mais' +
            '          </span>' +
            '        </p>'
        testimonialsUl.appendChild(div)
    }
}

function openMenu(op){
    const cfg = document.getElementById('menu')
    if(op){
        cfg.classList.remove('none')
        setTimeout(function (){cfg.classList.remove('hiddenMenu')},10)
    }
    else{
        cfg.classList.add('hiddenMenu')
        setTimeout(function (){cfg.classList.add('none')},800)
    }
}






var form = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    console.log("a");
    if(document.getElementById("telInput").value !== ""){
        shiver(false,true, document.getElementById("formbutton")); passOver()
        // var status = document.getElementById("my-form-status");
        SetTimeout(function(){
            status.innerHTML = "Agradecemos o Envio!";
                form.reset();
                function iterate(){
                    if(passedOver){window.location = "../contato-recebido"}
                    else setTimeout(function (){iterate()},200)
                }
                iterate()
        }
        else {
                status.innerHTML = "Opa! Houve algum problema ao enviar o número."
             }
        },250);
    }


}


form.addEventListener("submit", handleSubmit)
