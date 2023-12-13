const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})

const menuToggle = document.getElementById('menu__toggle');
const menuBox = document.querySelector('.menu__box');

menuToggle.addEventListener('change', function() {
  if (!menuToggle.checked) {
    // Menu is being closed
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Scroll back to the original position after a short delay (adjust the delay as needed)
    setTimeout(function() {
      window.scrollTo(0, scrollY);
    }, 100);
  }
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    }
  });
}

// Create an observer for the .fade-in elements
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // viewport
  rootMargin: '0px', // no margin
  threshold: 0.2, // 20% of the target element must be in the viewport
});

// Add all elements with the .fade-in class to the observer
document.querySelectorAll('.fade-in').forEach((element) => {
  observer.observe(element);
});

ScrollReveal().reveal('.review', { delay: 50 });
ScrollReveal().reveal('.', { delay: 50 });

ScrollReveal().reveal('#container', { delay: 50 });
ScrollReveal().reveal('#container', { delay: 150 });

ScrollReveal().reveal('.aboutheader', { delay: 50 });
ScrollReveal().reveal('.aboutheader', { delay: 150 });

ScrollReveal().reveal('.aboutp', { delay: 50 });
ScrollReveal().reveal('.aboutp', { delay: 150 });

ScrollReveal().reveal('.btn3', { delay: 250 });

ScrollReveal().reveal('h4', { delay: 150 });
ScrollReveal().reveal('.pencilcrayons', { delay: 175 });
ScrollReveal().reveal('h5', { delay: 200 });
ScrollReveal().reveal('.pencilcases', { delay: 225 });


function handleClick(e){
  e.preventDefault();
  const bars=document.querySelectorAll(".bar");
  bars.forEach((bar, i) => {
      bar.style.animationPlayState = "running";
  });
  const lastBar = bars[bars.length - 1];
  lastBar.addEventListener("animationend", () => {
      setTimeout(() => {
          window.location = e.target.href;
      }, 500);
  });
}



