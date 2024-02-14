document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('infinite-slider');
    let currentPosition = 0;
    let cardWidth = 184.5; 
    let moveAmount = cardWidth * 2; 
    
    const sliderContent = slider.innerHTML;
    slider.innerHTML += sliderContent; 

    
    function startContinuousMovement() {
        setInterval(() => {
            currentPosition -= 1; 
            if (currentPosition <= -slider.offsetWidth / 2) {
                currentPosition = 0; // Reset position
            }
            slider.style.transform = `translateX(${currentPosition}px)`;
        }, 20); 
    }

    
    function moveSlider(direction) {
        alert("move");
        currentPosition += (direction === 'left' ? 1 : -1) * moveAmount;
        
        if (currentPosition > 0) {
            currentPosition = -slider.offsetWidth / 2;
        } else if (currentPosition <= -slider.offsetWidth) {
            currentPosition = 0;
        }
        slider.style.transform = `translateX(${currentPosition}px)`;
    }

    document.querySelector('.custom-carousel-control-prev').addEventListener('click', function() {
        alert("hi");
        moveSlider('left');
    });

    document.querySelector('.custom-carousel-control-next').addEventListener('click', function() {
        moveSlider('right');
    });

    startContinuousMovement(); 
});
