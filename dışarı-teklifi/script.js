

let moveCount = 0;
const maxMoves = 5;
const noButton = document.getElementById("no");

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function moveNoButton() {
    
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    let x = Math.random() * (window.innerWidth - buttonWidth - 40);
    let y = Math.random() * (window.innerHeight - buttonHeight - 40);
    
    x = Math.max(20, Math.min(x, window.innerWidth - buttonWidth - 20));
    y = Math.max(20, Math.min(y, window.innerHeight - buttonHeight - 20));
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    
    moveCount++;
    
    if(moveCount >= maxMoves) {
        noButton.style.position = 'relative';
        noButton.style.left = '0';
        noButton.style.top = '0';
        
        noButton.removeEventListener('click', moveNoButton);

        noButton.addEventListener('click', function() {
            showPage('page5');
        });
    }
    
}
noButton.addEventListener('click', moveNoButton);


function selectActivity(activity) {
    localStorage.setItem('selectedActivity', activity);
    showPage('page3');
}

function selectDate(date) {
    localStorage.setItem('selectedDate', date);
    showPage('page4');
    document.getElementById("chosenActivity").textContent = localStorage.getItem("selectedActivity");
    document.getElementById("chosenDate").textContent = localStorage.getItem("selectedDate");
}

function sendWhatsApp() {
    const activity = localStorage.getItem("selectedActivity");
    const date = localStorage.getItem("selectedDate");
    const message = `Hadi lan ordan, asıl sen gelemezsin. Planımız: ${activity} - Tarih: ${date}`;
    const whatsappURL = `https://wa.me/905528674536?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}