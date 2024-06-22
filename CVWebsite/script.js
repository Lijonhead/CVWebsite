
function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Easter egg 1
document.getElementById('footer').addEventListener('click', function() {
    
    document.body.style.backgroundImage = 'url("images/easter-egg-bg.jpg")';
});

// Easter egg 2
let keySequence = '';
document.addEventListener('keydown', function(event) {
    keySequence += event.key;
    if (keySequence.includes('1337')) {
        alert('Congratulations, you found the Easter egg!');
        keySequence = ''; 
    }
});



window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        document.body.classList.add('show-back-to-top');
    } else {
        document.body.classList.remove('show-back-to-top');
    }
});


document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});