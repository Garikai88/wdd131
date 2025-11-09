const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter button click event
button.addEventListener('click', function() {
    //Check if input is not blank
    if (input.value.trim().length > 0) {
        // Create a list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set text content
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove chapter');
        deleteButton.classList.add('delete');

        // Append delete button to list item, then to list
        li.append(deleteButton);
        list.append(li);

        // Clear input and refocus
        input.value = '';
        input.focus();
    } else {
        // If input is blank, alert and refocus
        alert("Please enter a chapter before adding.");
        input.focus();
    }
});

// Event Delegation: handle delete clicks from the parent <ul>
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete')) {
       const li = e.target.parentElement;
       list.removeChild(li); 
    }
});
