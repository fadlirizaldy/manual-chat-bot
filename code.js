const textUser = document.querySelector("input[type='text']");
const pertanyaan = document.querySelector("p");
const submitResponse = document.querySelector("input[type='submit']");
const wrapper = document.querySelector('.wrapper');

let idx = 0;

let userData = {}

const botSay = (data) => {
    return [`Halo, ${data} Selamat Datang di Chat Bot, Berapa usia kamu?`,
            `Wahh, kita beda ${data} tahun. Kegiatannya lagi ngapain nih?`,
            `Ga sibuk banget ya, yaudah aku pamit dulu yes! bye bye ${data}`,
            `Thank you for chatting with me ${data}, Glad to see you`]
}


function botChat(){
    idx++;
    if (idx == 1){
        setTimeout(() => {
            pertanyaan.innerHTML = botSay(textUser.value)[idx-1];
            userData.nama = textUser.value;
            textUser.value = '';
        }, 1200);   
    }
    else if (idx == 2){
        setTimeout(() => {
            let umur = Math.abs(parseInt(textUser.value) - 21);
            if(isNaN(umur)){
                umur = '?';
            }
            userData.umurUser = umur;
            pertanyaan.innerHTML = botSay(umur)[idx-1];
            textUser.value = '';
        }, 1200);   
    }
    
    else if (idx == 3){
        setTimeout(() => {
            pertanyaan.innerHTML = botSay(userData.nama)[idx-1];
            textUser.value = '';
        }, 1200)   
    }

    else {
        finish();   
    }
}

function finish(){
    pertanyaan.innerHTML = botSay(userData.nama).slice(-1);
    textUser.remove();
    submitResponse.remove();

    const counter = document.createElement('p');
    const textCounter = document.createTextNode(`Redirecting in 5 sec..`)
    counter.appendChild(textCounter);
    wrapper.appendChild(counter);

    const counterReload = document.getElementById('counterReload');

    // membuat "redirecting setelah finish"
    let i = 4; // setinterval is method for doing function at every given time
    setInterval(function(){
        counter.innerHTML = `Redirecting in ${i} sec..`
        if (i <= 0){
            window.location.reload();
        }
        i--;
    }, 1000)
}

textUser.addEventListener('keyup', e => {
    if (e.keyCode === 13){
        botChat();
    }
}); 