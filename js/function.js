function generateCard (){

    const myRow = document.createElement("div")
    myRow.classList.add("my-row")
    containerCard.append(myRow)
    for(let i=0; i < ourTeam.length; i++){
        const membro = ourTeam[i]
        const nomeMembro = ourTeam[i].completeName.name
        const cognomeMembro = ourTeam[i].completeName.surname
        const nomeCompleto = nomeMembro + " " + cognomeMembro


    
    console.log("nome = " + nomeCompleto + "lavoro = " + membro.Ruolo);

    const card = document.createElement("div")
    card.classList.add("my-card")
    myRow.append(card)
    const myTxt = document.createElement("span")
    
    
    }


}

generateCard()



