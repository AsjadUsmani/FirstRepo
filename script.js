document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('home-section');
    setActiveLink('home-link');
});

document.getElementById('cart-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('cart-section');
    setActiveLink('cart-link');
});

document.getElementById('account-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('account-section');
    setActiveLink('account-link');
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
    document.getElementById(sectionId).classList.remove('hidden');
}

function setActiveLink(linkId) {
    var links = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    document.getElementById(linkId).classList.add('active');
}
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 2000);
});
