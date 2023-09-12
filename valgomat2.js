const questions = [{question: 'Skolefritidsordningen bør bli helt gratis i Bergen',
enig: {PP: 0, DEM: 0, LIB: 0,  H: 0, KRF: 0 , V: 0, KON: 0, SP: 0, FRP: 0, MDG: 0, PS: 0, FS: 0, AP: 0, SV: 0, R: 0, INP: 0, FP: 0, NKP: 0, GP: 0, BL: 0,},
litt_enig: {MDG: 2, AP: 2, H: 0},
litt_unig: {MDG: 2, AP: 2, H: 0},
uenig: {MDG: 0, AP: 0, H: 2},
}, 
{question: 'Jeg vil att bybanen går over Bryggen',
enig: {MDG: 2, AP: 2, H: 0},
uenig: {MDG: 0, AP: 0, H: 2},
},
{question: 'Jeg vil att bybanen går over Bryggen',
enig: {MDG: 2, AP: 2, H: 0},
uenig: {MDG: 0, AP: 0, H: 2},
}
]; // ... add more questions

let partyScore ={
    MDG: 0,
    AP: 0,
    H: 0
}

const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementsByName('answer')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            questionT.innerHTML = questions[qidx].question
        radioChecked.checked = false
        
    }
        else { 
            //
        }
    }

}


function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)
    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices) {
        partyScore[party] += partyChoices[party]
}
console.log(partyScore)
}