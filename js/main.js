const cards = document.querySelector('#cards')


fetch('https://db.ygoprodeck.com/api/v4/cardinfo.php')
    .then(res => res.json())
    .then(json => show(json))

function show(jjson) {
    for(i = 0; i<40; i++){
        let view = `
                    <div id="pos" class="center">
                        <p id="nome"><a href="#">${jjson[0][i].name}</a></p>
                        <div id="tot" class="grow">
                            <img onclick="link('${jjson[0][i].id}')" src="${jjson[0][i].image_url}" id="tam"></img>
                        </div>
                        <div id="flex-cent">
                            <p id="price_color">Preço: <span>R$</span>${Number(jjson[0][i].cardmarket_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        </div>
                    </div>`
        cards.insertAdjacentHTML('beforeend', view)
    }
}

let link = function(valor){
    window.location = "card-page.html?="+valor;
}

    // for(i of jjson[0]){
    //     let view = `
    //                 <div id="pos"> 
    //                     <p id="nome">${i.name}</p>
    //                     <a href="${jjson[0][i].image_url}" id="tot"><img src="${jjson[0][i].image_url}" id="tam"></img></a>
    //                 </div>`
    //     cards.insertAdjacentHTML('beforeend', view)
    // }
    // ------------------ Para todas as cartas ^^^^^^ ----------------------
