// Load the museum data from museums.json
fetch('museums.json')
    .then(response => response.json())
    .then(data => {
        populateMuseumDropdown(data);
    });

// Populate the museum dropdown with data from JSON
function populateMuseumDropdown(museums) {
    const museumSelect = document.getElementById('museum');
    museums.forEach(museum => {
        const option = document.createElement('option');
        option.value = museum.id;
        option.text = `${museum.name} (${museum.city}, ${museum.state})`;
        museumSelect.add(option);
    });
    
    // Load the first museum by default
    loadMuseumDetails(museums[0]);
    
    museumSelect.addEventListener('change', function () {
        const selectedMuseum = museums.find(museum => museum.id == this.value);
        loadMuseumDetails(selectedMuseum);
    });
}

// Load the details of the selected museum
function loadMuseumDetails(museum) {
    document.getElementById('museumName').innerText = museum.name;
    document.getElementById('location').innerText = `${museum.location}, ${museum.city}, ${museum.state}`;
    document.getElementById('description').innerText = museum.description;
}

function generateTicket() {
    const museumname = document.getElementById('museumname').innerText;
    const Location = document.getElementById('Location').innerText;
    
    // Generate a random ticket number
    const ticketnumber = 'T' + Math.floor(Math.random() * 1000000);
    document.getElementById('ticketNumber').innerText = ticketnumber;

    // Get the user's name and phone number
    const Name = document.getElementById('Name').value;
    const Phone = document.getElementById('Phone').value;

    // Get the current date
    const Date = new Date().toLocaleDateString();
    document.getElementById('date').innerText = Date;

    // Generate a QR code with the ticket details
    const qrData = `Museum: ${museumname}\nLocation: ${location}\nTicket Number: ${ticketnumber}\nName: ${Name}\nPhone: ${Phone}\nDate: ${Date}`;
    document.getElementById('qrcode').innerHTML = "";
    const qrcode = new qrcode(document.getElementById("qrcode"), {
        text: qrData,
        width: 128,
        height: 128,
    });
}

function downloadTicket() {
    const ticketContainer = document.querySelector('.ticket-container');
    html2canvas(ticketContainer).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'ticket.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Load html2canvas library
document.write('<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"><\/script>');