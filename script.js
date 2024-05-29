

window.onscroll = function(){
    let Navbar = document.querySelector('nav');

    if(window.scrollY > 0){
        Navbar.style.background = 'white';
    }
    else{
        Navbar.style.background = 'transparent';
    }

}

function toogleMenu(){
    let Menu = document.getElementById('menu-links');
    Menu.classList.toggle('show-menu')
}


function contact(){
    window.location.href="contact.html";
  }

function About(){
    window.location.href="About us.html"
}

function service(){
    window.location.href="Ourservices.html"
}


// const message = `Building Trust, Scaling <br>
// Success: Your IT <br>
// Journey Starts Here`;

// const typingPromises = (message, timeout) =>
//   [...message].map(
//     (ch, i) =>
//       new Promise(resolve => {
//         setTimeout(() => {
//           resolve(message.substring(0, i + 1));
//         }, timeout * i);
//       })
//   );

// typingPromises(message, 120).forEach(promise => {
//   promise.then(portion => {
//     document.querySelector('p').innerHTML = portion;
//   });
// });




