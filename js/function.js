function generateCard (){

    const myRow = document.createElement("div")
    myRow.classList.add("my-row")
    containerCard.append(myRow)
    for(let i=0; i < ourTeam.length; i++){
        const membro = ourTeam[i]
        const nomeMembro = ourTeam[i].completeName.name
        const cognomeMembro = ourTeam[i].completeName.surname
        const nomeCompleto = nomeMembro + " " + cognomeMembro
        const photoMembro = membro.photo
        console.log(membro.photo);
        
        
// aggiungo span per testo
        const myTxt = document.createElement("span")
// aggiungo un tag img
        const myImg = document.createElement("img");
        // dico al mio tag img di prendere il SRC="" dell membro.photo
        myImg.src = photoMembro


    
    console.log("nome = " + nomeCompleto + "lavoro = " + membro.Ruolo);

    const card = document.createElement("div")
    card.classList.add("my-card")
    myRow.append(card)
    
    card.append(myImg)
    
    
    
    }


}

generateCard()



