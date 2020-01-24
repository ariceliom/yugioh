const url = window.location.href
const descshow = document.querySelector("#card-description")
const txtt = document.querySelector(".modal-body")

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
                <h1 id="formatação">${jjson[0][0].name} <a href="#" data-toggle="modal" data-target="#modalcall"><i class="fas fa-asterisk"></i> </a> </h1>
                <div id="cent">
                    <div id="grid-descr">
                        <aside class="ps1"><img src="https://storage.googleapis.com/ygoprodeck.com/pics/${jjson[0][0].id}.jpg"></img></aside>
                        <table class="ps2">
                            <tbody id="bef-end">
                                <tr>
                                    <td class="bord"><p class="p-format"> Tipo: ${jjson[0][0].race}  ${jjson[0][0].type} </p></td>
                                </tr>
                                <tr>
                                    <td class="bord"><p class="p-format"> Preço Medio: R$: ${Number(jjson[0][0].cardmarket_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} </p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`

    txtt.innerHTML = `<p>Veja também no Prices: <a href="https://yugiohprices.com/card_price?name=${jjson[0][0].name}">https://yugiohprices.com/card_price?name=${jjson[0][0].name}</p>`
    descshow.insertAdjacentHTML('beforeend', view)

    const monster = document.querySelector("#bef-end")
    let tipo = jjson[0][0].type
    let regExp = /Monster/
    

    if(regExp.test(tipo) == true){
        let view_monster = `<tr>
                                <td class="bord"><p class="p-format"> Atk: ${jjson[0][0].atk} Def: ${jjson[0][0].def}  Atributo: ${jjson[0][0].attribute}</p></td>
                            </tr>
                            <tr>
                                <td class="bord"><p class="p-format"> Descrição: ${jjson[0][0].desc} </p></td>
                            </tr>
                            `
        monster.insertAdjacentHTML('beforeend', view_monster)
    }
    else{
        let view_monster = `<tr>
                                <td class="bord"><p class="p-format"> Descrição: ${jjson[0][0].desc} </p></td>
                            </tr>`
        monster.insertAdjacentHTML('beforeend', view_monster)
    }

}