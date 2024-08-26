// Replace placeholder text with dynamic content
document.addEventListener('DOMContentLoaded', function() {
    // Replace with user's full name
    const fullName = "John Doe"; // Kullanıcı adı buraya gelecek
    const fullNameSpan = document.querySelector('h3 span.text-danger');
    if (fullNameSpan) {
        fullNameSpan.textContent = fullName;
    }

    // Replace with current date
    const currentDate = new Date().toLocaleDateString();
    const dateElement = document.querySelector('h2:nth-of-type(1)');
    if (dateElement) {
        dateElement.textContent = currentDate;
    }

    // Replace with user's email
    const userEmail = "johndoe@example.com"; // Kullanıcı e-posta buraya gelecek
    const emailElement = document.querySelector('h2:nth-of-type(2)');
    if (emailElement) {
        emailElement.textContent = userEmail;
    }
});

// Event listener for 'Change my name' button
const changeNameButton = document.querySelector('a.btn-primary');
if (changeNameButton) {
    changeNameButton.addEventListener('click', function(event) {
        event.preventDefault();
        const newName = prompt('Enter your new name:');
        if (newName) {
            const fullNameSpan = document.querySelector('h3 span.text-danger');
            if (fullNameSpan) {
                fullNameSpan.textContent = newName;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const changeNameButton = document.querySelector('a.btn.btn-sm.btn-primary.btn-pill.transition-hover-start.m-0');
    const nameElement = document.querySelector('#mainNavHosting .text-danger');
    const emailElement = document.querySelector('.text-muted h2:nth-child(2)'); // E-posta adresini tutan öğeyi seçer

    changeNameButton.addEventListener('click', function(event) {
        event.preventDefault();

        // İsim değişikliği için prompt
        const newName = prompt("Please enter your new name:");
        if (newName) {
            nameElement.textContent = newName;
        }

        // E-posta adresi değişikliği için prompt
        const newEmail = prompt("Please enter your new email address:");
        if (newEmail) {
            emailElement.textContent = newEmail;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Protokol port numaralarını tanımlayın
    const protocolPorts = {
        "HTTP": 80,
        "HTTPS": 443,
        "SSH": 22,
        "DNS": 53
    };

    // Protokol bölümlerini seçin
    const protocolItems = document.querySelectorAll('#domains-bar .col-6');

    // Her protokol için ilgili port numarasını güncelleyin
    protocolItems.forEach(item => {
        const protocolName = item.querySelector('h2 span.fw-bold').textContent.trim();
        const port = protocolPorts[protocolName] || 'unknown';
        const pElement = item.querySelector('p');
        pElement.textContent = pElement.textContent.replace('xx', port);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const addItemsButton = document.getElementById('add-items-btn');
    const itemListContainer = document.getElementById('item-list-container');

    addItemsButton.addEventListener('click', function() {
        let numberOfItems = parseInt(prompt("How many items would you like in the list?"), 10);

        // Validate the input
        if (isNaN(numberOfItems) || numberOfItems <= 0 || numberOfItems > 10) {
            alert("Please enter a number between 1 and 10.");
            return;
        }

        // Clear the existing list
        itemListContainer.innerHTML = '';

        // Create and display the items
        for (let i = 1; i <= numberOfItems; i++) {
            const div = document.createElement('div');
            div.classList.add('d-flex', 'mb-4');

            const iconDiv = document.createElement('div');
            iconDiv.classList.add('text-primary');
            const iconImg = document.createElement('img');
            iconImg.setAttribute('width', '40');
            iconImg.setAttribute('height', '20');
            iconImg.setAttribute('src', 'demo.files/svg/various/line-chart.svg');
            iconImg.setAttribute('alt', '...');
            iconDiv.appendChild(iconImg);

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('mx-2');

            const heading = document.createElement('h3');
            heading.classList.add('h5', 'fw-bold', 'mb-1');
            heading.textContent = `Item #${i}`;

            const text = document.createElement('p');
            text.textContent = `This is item #${i}.`;

            contentDiv.appendChild(heading);
            contentDiv.appendChild(text);

            div.appendChild(iconDiv);
            div.appendChild(contentDiv);

            itemListContainer.appendChild(div);
        }
    });
});