let scholarships = [];
let totalAmount = 0;

function addScholarship() {
    const name = document.getElementById('name').value;
    const deadline = document.getElementById('deadline').value;
    const amount = document.getElementById('amount').value;

    if (name && deadline && amount) {
        // Check if the scholarship already exists
        const existingScholarship = scholarships.find(scholarship => scholarship.name === name && scholarship.deadline === deadline && scholarship.amount === amount);
        if (existingScholarship) {
            document.getElementById('output').innerText = 'This scholarship has already been added.';
        } else {
            const scholarship = {name, deadline, amount, applied: false};
            scholarships.push(scholarship);
            document.getElementById('output').innerText = `Added: ${name}`;
            updateTotalAmount();
        }
    } else {
        document.getElementById('output').innerText = 'Please fill in all required fields (Name, Deadline, Amount).';
    }
}

function viewScholarships() {
    let output = '';
    scholarships.forEach(scholarship => {
        output += `Name: ${scholarship.name}\nDeadline: ${scholarship.deadline}\nAmount: ${scholarship.amount}\nApplied: ${scholarship.applied}\n\n`;
    });
    document.getElementById('output').innerText = output || 'No scholarships added.';
}

function markAsApplied() {
    const name = prompt('Enter the name of the scholarship to mark as applied:');
    const scholarship = scholarships.find(s => s.name === name);
    if (scholarship) {
        scholarship.applied = true;
        document.getElementById('output').innerText = `Marked ${name} as applied.`;
    } else {
        document.getElementById('output').innerText = `Scholarship ${name} not found.`;
    }
}

function updateTotalAmount() {
    totalAmount = scholarships.reduce((sum, scholarship) => sum + parseFloat(scholarship.amount), 0);
    document.getElementById('totalAmount').innerText = `Total Amount: ${totalAmount.toFixed(2)}`;
}
