const contactInputs = document.querySelectorAll('.contact-input'); // znajdujemy wszystkie elementy z klasa contact-input
console.log(contactInputs)
for(let i=0; i< contactInputs.length;i++) {
    //wewnatrz naszej petli musimy uzyskac dostep do naszego labela czyli naszego inpute name itd.
    let currentLabel = contactInputs[i].parentElement.firstElementChild; //uzyskujemy dostep do pierwszego elementu child
    console.log(currentLabel)
    //potrzebukemy dodac nasluch na zdarenie focus, czyli najechania kursoerm myszy na pole input
    contactInputs[i].addEventListener('focus',function() {
        currentLabel.classList.add('move-up');
    });

    //po odkliknieciu powinno usunac, wiec
    contactInputs[i].addEventListener('blur', function(){
        if (contactInputs[1].value===''){
        currentLabel.classList.remove('move-up');
        }
    });
}