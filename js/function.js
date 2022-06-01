function generateCard (lista){

    const myRow = document.createElement("div")
    myRow.classList.add("my-row")
    containerCard.append(myRow)
    for(let i=0; i < lista.length; i++){
        const membro = ourTeam[i]
        const nomeMembro = ourTeam[i].completeName.name
        const cognomeMembro = ourTeam[i].completeName.surname
        const nomeCompleto = nomeMembro + " " + cognomeMembro
        const photoMembro = membro.photo

        
        console.log("nome = " + nomeCompleto + "lavoro = " + membro.Ruolo);
        // creo il div delle mia carta e aggiungo la classe del CSS my-card
        const card = document.createElement("div")
        card.classList.add("my-card")

        // appendo ogni carta a myRow
        myRow.append(card)
        
        // creo un div che contiene la mia img e aggiungo classe CSS al mio div
        const myImgCont = document.createElement("div");
        myImgCont.classList.add("img-card");

        // creo il tag img
        const myImg = document.createElement("img");

        
        // dico al mio tag img di prendere il SRC="" dell membro.photo
        myImg.src = photoMembro
        // appendo la mia img al div
        myImgCont.append(myImg)
        
        // creo una variabile per aggiungere uno span
        const printName = document.createElement("span")
        printName.append(nomeCompleto)

        const printWork = document.createElement("span")
        printWork.append(membro.Ruolo)

        // appendo il mio container con l immagine alla carta
        card.append(myImgCont)
        card.append(printName)
        card.append(printWork)
    
    }


}




