// Questao 1_5 //
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christimas on Bear Montain,Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

let recorrente; 
let ambos;

for (const key in info2) {
    if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
        recorrente = info.recorrente;
        delete info.recorrente;
        delete info2.recorrente;
        ambos =  'Ambos recorrentes';
    }
    
    console.log(info[key] + " e " + info2[key]);
    info.recorrente = recorrente;
    info2.recorrente = recorrente;
    }
    console.log(ambos);