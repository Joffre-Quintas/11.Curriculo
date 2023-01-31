const principalText = document.querySelector('#principal_text')

function typeWriter(e){
    const arrayText = e.textContent.split('');
    console.log(arrayText);
    e.textContent = '';
    arrayText.forEach((letter,i) => {
        setTimeout(() => {
            e.innerHTML += letter
        }, 75*i)
    })    
}

typeWriter(principalText,75)
AOS.init();
