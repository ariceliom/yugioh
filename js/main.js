// https://db.ygoprodeck.com/api/v4/cardinfo.php
const cards = document.querySelector('#cards')

fetch('https://db.ygoprodeck.com/api/v4/cardinfo.php')
    .then(res => res.json())
    .then(json => show(json))

function show(jjson) {
    for(i = 0; i<20; i++){
        let view = `
                    <div id="pos"> 
                        <p id="nome">${jjson[0][i].name}</p>
                        <div id="tot">
                            <a href="https://storage.googleapis.com/ygoprodeck.com/pics/${jjson[0][i].id}.jpg"><img src="https://storage.googleapis.com/ygoprodeck.com/pics/${jjson[0][i].id}.jpg" id="tam"></img></a>
                        </div>
                    </div>`
        cards.insertAdjacentHTML('beforeend', view)
    }
    // for(i of jjson[0]){
    //     let view = `
    //                 <div id="pos"> 
    //                     <p id="nome">${i.name}</p>
    //                     <a href="https://storage.googleapis.com/ygoprodeck.com/pics/${i.id}.jpg" id="tot"><img src="https://storage.googleapis.com/ygoprodeck.com/pics/${i.id}.jpg" id="tam"></img></a>
    //                 </div>`
    //     cards.insertAdjacentHTML('beforeend', view)
    // }
}

cards.addEventListener('click', function(event){
    let vars = document.getElementById("tam").getAttribute("src");
    alert(vars)
})

