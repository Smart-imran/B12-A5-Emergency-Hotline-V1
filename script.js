
let heartCount = 0; 
let coinCount = 100; 
let copyCount = 0; 
const historyList = document.getElementById('history-list'); 

// Update navbar counts
function updateNavbar() {
    document.getElementById('heart-count').textContent = heartCount; 
    document.getElementById('coin-count').textContent = coinCount; 
    document.getElementById('copy-count').textContent = copyCount; 
}

// Handle heart icon clicks
let heartIcons = document.querySelectorAll('.heart-icon');
for (let icon of heartIcons) {
    icon.addEventListener('click', function() {
        if (this.classList.contains('text-red-500')) {
            this.classList.remove('text-red-500');
            heartCount--; // Decrease count by 1 when red is removed
        } else {
            this.classList.add('text-red-500');
            heartCount++; // Increase count by 1 when red is added
        }
        updateNavbar(); 
    });
}

// Handle copy button clicks
let copyButtons = document.querySelectorAll('.copy-btn');
for (let btn of copyButtons) {
    btn.addEventListener('click', function() {
        let number = this.dataset.number; 
        navigator.clipboard.writeText(number).then(function() {
            alert('Number : ' + number + ' copied to clipboard!'); 
            copyCount++; 
            updateNavbar(); 
        }).catch(function(err) {
            console.error('Failed to copy: ', err); 
        });
    });
}

// Handle call button clicks
let callButtons = document.querySelectorAll('.call-btn');
for (let btn of callButtons) {
    btn.addEventListener('click', function() {
        let name = this.dataset.name; 
        let number = this.dataset.number; 

        if (coinCount < 20) { 
            alert('Insufficient coins! Need at least 20 coins to make a call.');
            return; 
        }

        alert('Calling ' + name + ' at ' + number + '.'); 
        coinCount -= 20; 
        updateNavbar(); 

        // Get current time and add to history
        let now = new Date();
        let time = now.toLocaleString('en-US', { 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true, 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        let li = document.createElement('li'); 
        li.classList.add('p-2', 'bg-gray-100', 'rounded'); 
        li.innerHTML = [
            '<p class="font-bold">' + name + '</p>',
            '<p>' + number + '</p>',
            '<p class="text-sm text-gray-500">' + time + '</p>'
        ].join(''); 
        historyList.appendChild(li); 
    });
}

// Handle clear history button click
document.getElementById('clear-history').addEventListener('click', function() {
    historyList.innerHTML = ''; 
});

// Initialize navbar on page load
updateNavbar();