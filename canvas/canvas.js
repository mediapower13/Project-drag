


// Select all draggable items and dropzones
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

// Add event listeners for drag and drop functionality
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', dragStart);
  draggable.addEventListener('dragend', dragEnd);
});

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', dragOver);
  dropzone.addEventListener('dragenter', dragEnter);
  dropzone.addEventListener('dragleave', dragLeave);
  dropzone.addEventListener('drop', dragDrop);
});

// Drag functions
function dragStart(e) {
  this.classList.add('dragging');
  e.dataTransfer.setData('text/plain', this.id);
}

function dragEnd() {
  this.classList.remove('dragging');
}

// Dropzone functions
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

function dragLeave() {
  this.classList.remove('drag-over');
}

function dragDrop(e) {
  const draggableId = e.dataTransfer.getData('text/plain');
  const draggableElement = document.getElementById(draggableId);
  
  this.appendChild(draggableElement);
  this.classList.remove('drag-over');
}

