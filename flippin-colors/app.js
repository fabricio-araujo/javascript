const button = document.getElementById('btn');
const color = document.querySelector('.color')

button.addEventListener('click', function(){
    let rgba = 0;
    for (let i  = 0; i < 10; i++) {
        rgba = generate_rgba(); 
    }  
    
    document.body.style.backgroundColor = rgba;
    color.textContent = rgba;
})

function generate_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

