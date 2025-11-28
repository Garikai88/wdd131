const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Utility functions
function getChapterList()  {
    return JSON.parse(localStorage.getItem("myFavBOMList")) || [];
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button'); 
    
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'Remove chapter');
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', () => {
        deleteChapter(item);
        list.removeChild(li);
    });

    li.append(deleteButton);
    list.append(li);
} 


let chaptersArray = getChapterList();

// Initial render
chaptersArray.forEach(chapter => displayList(chapter));

// Handle add button click
button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        if (!chaptersArray.includes(chapter)) {
            chaptersArray.push(chapter);
            setChapterList();
            displayList(chapter);

        } else {
            alert("That chapter is already in the list.")
        }
        input.value = '';
        input.focus();
    } else {
        alert("Please enter a chapter before adding.");
    }

});


