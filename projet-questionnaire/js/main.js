const questionnaire = [
    {
        question : "La terre est-elle ronde ?\n 1 = oui  2 = non",
        reponse : 1,
    },
    {
        question : "Le Canada est-il aux Etats-Unis ?\n 1 = oui  2 = non",
        reponse : 2,
    },
    {
        question : "Jacques Chirac est-il le premier homme à avoir traversé la manche en avion ?\n 1 = oui  2 = non",
        reponse : 2,
    },
    {
        question : "Le premier homme à avoir traversé la manche est :\n 1 = Coluche  2 = Louis Blériot",
        reponse : 2,
    },
]

let nbBonneRep = 0;

for (let i = 0; i < questionnaire.length; i++){
    let user = prompt(questionnaire[i].question);
    if(user == questionnaire[i].reponse){
        alert("Bonne réponse");
        nbBonneRep += 1;
    }
    else {
        alert("Mauvaise réponse")
    }
}
if (nbBonneRep <= 1){
    alert (`Vous avez ${nbBonneRep} bonne réponse sur ${questionnaire.length} !`)
}
else {
    alert (`Vous avez ${nbBonneRep} bonnes réponses sur ${questionnaire.length} !`)
}




console.log($(".div-eleve").data("note1+note2/2"))