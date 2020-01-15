const url = window.location.href
const descshow = document.querySelector("#card-description")

let stri = ''
for(i=0; i<url.length;i++){
    if(url[i] == '='){
        for(j=i+1; j<url.length;j++){
            stri = stri+url[j]
        }
    }
}

fetch(`https://db.ygoprodeck.com/api/v4/cardinfo.php?name=${stri}&la=english`)
    .then(res => res.json())
    .then(json => show(json))

function show(jjson){
    let view = `
                <h1 id="formatação">${jjson[0][0].name}</h1>
                <div id="cent">
                    <div id="grid-descr">
                        <aside class="ps1"><img src="https://storage.googleapis.com/ygoprodeck.com/pics/${jjson[0][0].id}.jpg"></img></aside>
                        <div class="ps2"><p class="p-format"> Tipo: ${jjson[0][0].race}  ${jjson[0][0].type} </p></div>
                        <div class="ps3"><p class="p-format"> Preço Medio: R$: ${Number(jjson[0][0].cardmarket_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} </p></div>
                        <div class="no-color"></div>
                    </div>
                </div>`

    descshow.insertAdjacentHTML('beforeend', view)

    const monster = document.querySelector("#grid-descr")
    let tipo = jjson[0][0].type.split(" ")

    if(tipo[tipo.length-1] == "Monster"){
        let view_monster = `<div class="ps4"><p class="p-format"> Atk: ${jjson[0][0].atk} Def: ${jjson[0][0].def}  Atributo: ${jjson[0][0].attribute}</p></div>
                            <div class="ps5"><div id="wid"><p class="p-format"> Descrição: ${jjson[0][0].desc} </p></div></div`
        monster.insertAdjacentHTML('beforeend', view_monster)
    }
    else{
        let view_monster = `<div class="ps6"><div id="wid"><p class="p-format"> Descrição: ${jjson[0][0].desc} </p></div></div`
        monster.insertAdjacentHTML('beforeend', view_monster)
    }

}