const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover); //on the placeholder
    placeholder.addEventListener('dragenter', dragenter); //in the place of another placeholder
    placeholder.addEventListener('dragleave', dragleave); // leave place
    placeholder.addEventListener('drop', dragdrop); // mouseUp
});

function dragover(e) {
    e.preventDefault();
};

function dragenter(e) {
    e.target.classList.add('hovered');
};

function dragleave(e) {
    e.target.classList.remove('hovered');
};

function dragdrop(e) {
    e.target.append(item);
    e.target.classList.remove('hovered');
};

function dragstart(e) {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0);   
}

function dragend(e) {
    e.target.className = 'item';
}