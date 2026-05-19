console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-54] - [Creating and removing DOM elements]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 54: Creating and removing DOM elements
document.addEventListener('DOMContentLoaded', function() {
    console.log("--- Creating Elements ---");

 // createElement
 const newDiv = document.createElement('div');
 console.log("Created element:", newDiv);

 // Set properties
 newDiv.id = 'dynamic-div';
 newDiv.className = 'dynamic-box';
 newDiv.textContent = 'I was created dynamically!';
 newDiv.setAttribute('data-created', new Date().toISOString());

 console.log("Configured element:", newDiv);

 console.log("\n--- Appending Elements ---");
 const container = document.getElementById('element-container');

 if (container) {
 // appendChild (traditional)
 container.appendChild(newDiv);
 console.log("Element appended with appendChild");

 // append (modern - accepts multiple nodes and strings)
 const span1 = document.createElement('span');
 span1.textContent = 'First '
 const span2 = document.createElement('span');
 span2.textContent = 'Second ';

 container.append(span1, span2, 'Text node!');
 console.log("Multiple items appended with append()");
 }

 console.log("\n--- Insertion Methods ---");
 const target = document.getElementById('insertion-target');

 if (target) {
 // before - inserts before the element
 const beforeElement = document.createElement('div');
 beforeElement.textContent = 'Before element';
 beforeElement.className = 'inserted-before';
 target.before(beforeElement);

 // after - inserts after the element
 const afterElement = document.createElement('div');
 afterElement.textContent = 'After element';
 afterElement.className = 'inserted-after';
 target.after(afterElement);

 // prepend - inserts as first child
 const prependElement = document.createElement('div');
 prependElement.textContent = 'First child (prepended)';
 prependElement.className = 'prepended';
 target.prepend(prependElement);

 // append - inserts as last child
 const appendElement = document.createElement('div');
 appendElement.textContent = 'Last child (appended)';
 appendElement.className = 'appended';
 target.append(appendElement);
 }

 console.log("\n--- insertBefore (traditional) ---");
 const parent = document.getElementById('parent-list');

 if (parent) {
 const newItem = document.createElement('li');
 newItem.textContent = 'Inserted Item';
 newItem.className = 'inserted';

 const referenceNode = parent.children[1]; // Second child
 parent.insertBefore(newItem, referenceNode);
 console.log("Item inserted before second child");
 }

 console.log("\n--- Cloning Elements ---");
 const original = document.getElementById('clone-source');

 if (original) {
 // Shallow clone (element only, no children)
 const shallowClone = original.cloneNode(false);
 shallowClone.id = 'shallow-clone';
 shallowClone.textContent = 'Shallow Clone';
 original.after(shallowClone);

 // Deep clone (element and all children)
 const deepClone = original.cloneNode(true);
 deepClone.id = 'deep-clone';
 original.after(deepClone);

 console.log("Clones created");
 }

 console.log("\n--- Removing Elements ---");

 // remove() - modern method
 const removeMe = document.getElementById('remove-me');
 if (removeMe) {
 removeMe.remove();
 console.log("Element removed with remove()");
 }
 // removeChild - traditional method
 const parentForRemoval = document.getElementById('parent-forremoval');
 const childToRemove = document.getElementById('child-to-remove');

 if (parentForRemoval && childToRemove) {
 parentForRemoval.removeChild(childToRemove);
 console.log("Child removed with removeChild()");
 }

 console.log("\n--- Replacing Elements ---");
 const oldElement = document.getElementById('old-element');

 if (oldElement) {
 const newElement = document.createElement('div');
 newElement.id = 'new-element';
 newElement.textContent = 'I replaced the old element!';
 newElement.className = 'replacement';

 // replaceWith - modern method
 oldElement.replaceWith(newElement);
 console.log("Element replaced with replaceWith()");
 }
 console.log("\n--- Practical: Dynamic List Builder ---");
 const listBuilder = document.getElementById('list-builder');
 const addBtn = document.getElementById('add-item-btn');
 const clearBtn = document.getElementById('clear-items-btn');
 const itemInput = document.getElementById('item-input');
 const dynamicList = document.getElementById('dynamic-list');
 const itemCountSpan = document.getElementById('item-count');

 if (addBtn && dynamicList) {
 function updateItemCount() {
 if (itemCountSpan) {
 itemCountSpan.textContent = dynamicList.children.length;
 }
 }

 function createListItem(text) {
 const li = document.createElement('li');
 li.className = 'dynamic-item';

 const textSpan = document.createElement('span');
 textSpan.textContent = text;
 textSpan.className = 'item-text';

 const deleteBtn = document.createElement('button');
 deleteBtn.textContent = '✕';
 deleteBtn.className = 'delete-btn';
 deleteBtn.setAttribute('aria-label', 'Delete item');

 deleteBtn.addEventListener('click', function() {
 li.remove();
 updateItemCount();
 });

 const editBtn = document.createElement('button');
 editBtn.textContent = '✎';
 editBtn.className = 'edit-btn';

 editBtn.addEventListener('click', function() {
 const newText = prompt('Edit item:', textSpan.textContent);
 if (newText && newText.trim()) {
 textSpan.textContent = newText.trim();
 }
 });

 li.append(textSpan, editBtn, deleteBtn);

 // Double-click to toggle completed
 li.addEventListener('dblclick', function() {
 this.classList.toggle('completed');
 })
 return li;
 }

 addBtn.addEventListener('click', function() {
 const text = itemInput ? itemInput.value.trim() : '';
 if (text) {
 const newItem = createListItem(text);
 dynamicList.appendChild(newItem);
 updateItemCount();
 if (itemInput) itemInput.value = '';
 }
 });

 if (clearBtn) {
 clearBtn.addEventListener('click', function() {
 dynamicList.innerHTML = '';
 updateItemCount();
 });
 }

 // Add some sample items
 const sampleItems = ['Learn JavaScript', 'Build a project', 'MasterDOM'];
 sampleItems.forEach(text => {dynamicList.appendChild(createListItem(text));
 });
 updateItemCount();
 }

 console.log("\n--- DocumentFragment for Performance ---");
 const fragmentContainer = document.getElementById('fragment-demo');

 if (fragmentContainer) {
 console.time('Without Fragment');
 for (let i = 0; i < 1000; i++) {
 const div = document.createElement('div');
 div.textContent = `Item ${i}`;
 // DON'T DO THIS - causes reflow each time
 // fragmentContainer.appendChild(div);
 }
 console.timeEnd('Without Fragment');

 console.time('With Fragment');
 const fragment = document.createDocumentFragment();
 for (let i = 0; i < 1000; i++) {
 const div = document.createElement('div');
 div.textContent = `Item ${i}`;
 fragment.appendChild(div);
 }
 fragmentContainer.appendChild(fragment); // Single reflow!
 console.timeEnd('With Fragment');
 }
});

