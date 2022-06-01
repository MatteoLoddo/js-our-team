const containerCard = document.querySelector(".container-card")
console.log(containerCard);

// creo il mio array con dentro gli oggetti (oggetti = membroTeam)
const ourTeam = [
    {
        completeName :{
            name: "Gianni",
            surname: "Pao",
        },
        Ruolo:"Founder & CEO",
        photo: "img/angela-caroll-chief-editor.jpg"
    },
    {
        completeName :{
            name: "Piero",
            surname: "Bao",
        },
        Ruolo:"Chief Editor",
        photo: "img/new-team-member-04.jpg"
    },
    {
        completeName :{
            name: "Federico",
            surname: "Riccio",
        },
        Ruolo:"Office Manager",
        photo: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        completeName :{
            name: "Fabio",
            surname: "Rengar",
        },
        Ruolo:"Social Media Menager",
        photo: "img/new-team-member-03.jpg"
    },
    {
        completeName :{
            name: "Leo",
            surname: "il Casanova",
        },
        Ruolo:"Developer",
        photo: "img/new-team-member-01.jpg"
    },
    {
        completeName :{
            name: "Baolo",
            surname: "Rao",
        },
        Ruolo:"Graphic Designer",
        photo: "img/new-team-member-02.jpg"
    },
    
]

const ilMioTeam = generateCard(ourTeam)
