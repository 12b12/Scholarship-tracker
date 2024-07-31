let scholarships = [];
let totalAmount = 0;

function addScholarship() {
    const name = document.getElementById('name').value;
    const deadline = document.getElementById('deadline').value;
    const amount = document.getElementById('amount').value;

    if (name && deadline && amount) {
        const scholarship = {name, deadline, amount, applied: false};
        scholarships.push(scholarship);
        document.getElementById('output').innerText = `Added: ${name}`;
        simulateAIAnalysis(name, deadline, amount);
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

function simulateAIAnalysis(name, deadline, amount) {
    setTimeout(function () {
        const aiAnalysisResults = {
            eligibilityCriteria: 'Based on academic performance and community involvement.',
            requiredDocuments: 'Transcripts, recommendation letters, and a personal statement.',
            recommendedScholarships: ['Merit Scholarship', 'Community Service Award']
        };

        displayAIResults(name, deadline, amount, aiAnalysisResults);
    }, 1000);
}

function displayAIResults(name, deadline, amount, aiAnalysisResults) {
    const output = document.getElementById('output');
    const scholarshipInfo = document.createElement('div');

   /* scholarshipInfo.innerHTML = `
        <p>Scholarship: ${name}</p>
        <p>Deadline: ${deadline}</p>
        <p>Amount: ${amount}</p>
        <p>Eligibility Criteria: ${aiAnalysisResults.eligibilityCriteria}</p>
        <p>Required Documents: ${aiAnalysisResults.requiredDocuments}</p>
        <p>Recommended Scholarships: ${aiAnalysisResults.recommendedScholarships.join(', ')}</p> */
    

    output.appendChild(scholarshipInfo);

    const scholarship = {
        name,
        deadline,
        amount,
        applied: false,
        notapplied: false
    };
    scholarships.push(scholarship);

    totalAmount += parseFloat(amount);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}



