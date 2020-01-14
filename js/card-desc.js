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
                        <div class="ps2"><p class="p-format">Tipo: ${jjson[0][0].type}</p></div>
                    </div>
                </div>`
    descshow.insertAdjacentHTML('beforeend', view)
    alert(jjson[0][0].name)
}