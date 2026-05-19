console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-57] - []");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 57: Complete table population and management with JavaScript
document.addEventListener('DOMContentLoaded', function() {

 // Sample data
 const students = [
 { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A', email:
'john@example.com', major: 'Computer Science' },
 { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'A-', email:
'jane@example.com', major: 'Mathematics' },
 { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'B+',
email: 'bob@example.com', major: 'Physics' },
 { id: 4, firstName: 'Alice', lastName: 'Williams', age: 21, grade: 'A',
email: 'alice@example.com', major: 'Engineering' },
 { id: 5, firstName: 'Charlie', lastName: 'Brown', age: 20, grade: 'B',
email: 'charlie@example.com', major: 'Computer Science' },
 { id: 6, firstName: 'Diana', lastName: 'Miller', age: 23, grade: 'A-',
email: 'diana@example.com', major: 'Biology' },
 { id: 7, firstName: 'Edward', lastName: 'Davis', age: 22, grade: 'C+',
email: 'edward@example.com', major: 'Chemistry' },
 { id: 8, firstName: 'Fiona', lastName: 'Garcia', age: 20, grade: 'B+',
email: 'fiona@example.com', major: 'Mathematics' }
 ];

 // DOM elements
 const tableBody = document.getElementById('table-body');
 const searchInput = document.getElementById('search-input');
 const gradeFilter = document.getElementById('grade-filter');
 const majorFilter = document.getElementById('major-filter');
 const sortSelect = document.getElementById('sort-select');
 const addStudentBtn = document.getElementById('add-student-btn');
 const studentForm = document.getElementById('student-form');
 const formTitle = document.getElementById('form-title');
 const cancelFormBtn = document.getElementById('cancel-form');
 const statsDisplay = document.getElementById('stats-display');
 const exportBtn = document.getElementById('export-btn');
 const paginationContainer = document.getElementById('pagination');

 // State
 let currentData = [...students];
 let filteredData = [...students];
 let editingId = null;
 let currentPage = 1;
 const rowsPerPage = 5;

 // Initialize filters
 function initializeFilters() {
 const grades = [...new Set(students.map(s => s.grade))].sort();
 const majors = [...new Set(students.map(s => s.major))].sort();

 grades.forEach(grade => {
 const option = document.createElement('option');
 option.value = grade;
 option.textContent = grade;
 if (gradeFilter) gradeFilter.appendChild(option);
 });

 majors.forEach(major => {
 const option = document.createElement('option');
 option.value = major;
 option.textContent = major;
 if (majorFilter) majorFilter.appendChild(option);
 });
 }

 // Render table with current filtered data
 function renderTable() {
 if (!tableBody) return;

 const start = (currentPage - 1) * rowsPerPage;
 const end = start + rowsPerPage;
 const pageData = filteredData.slice(start, end);

 if (pageData.length === 0 && currentPage > 1) {
 currentPage--;
 renderTable();
 return;
 }

 // Use DocumentFragment for performance
 const fragment = document.createDocumentFragment();

 pageData.forEach(student => {
 const row = document.createElement('tr');
 row.dataset.id = student.id;

 // Apply row color based on grade
 if (student.grade.startsWith('A')) {
 row.style.backgroundColor = '#e8f5e9';
 } else if (student.grade.startsWith('B')) {
 row.style.backgroundColor = '#fff8e1';
 } else if (student.grade.startsWith('C')) {
 row.style.backgroundColor = '#ffebee';
 }

 row.innerHTML = `
 <td>${student.id}</td>
 <td>${student.firstName}</td>
 <td>${student.lastName}</td>
 <td>${student.age}</td>
 <td><span class="grade-badge grade-${student.grade.charAt(0).toLowerCase()}">${student.grade}</span></td>
 <td>${student.email}</td>
 <td>${student.major}</td>
 <td class="action-cell">
 <button class="edit-btn" data-id="${student.id}" title="Edit">✎</button>
 <button class="delete-btn" data-id="${student.id}" title="Delete">✕</button>
 </td>
 `;

 fragment.appendChild(row);
 });

 // Clear and repaint
 tableBody.innerHTML = '';
 tableBody.appendChild(fragment);

 // Update stats and pagination
 updateStats();
 renderPagination();
 }

 // Update statistics
 function updateStats() {
 if (!statsDisplay) return;

 const total = filteredData.length;

 const avgAge = total > 0
 ? (filteredData.reduce((sum, s) => sum + s.age, 0) / total).toFixed(1)
 : 0;

 const aGrades = filteredData.filter(s => s.grade.startsWith('A')).length;

 const csCount = filteredData.filter(
 s => s.major === 'Computer Science'
 ).length;

 statsDisplay.innerHTML = `
 <div class="stat-card">
 <span class="stat-value">${total}</span>
 <span class="stat-label">Total Students</span>
 </div>

 <div class="stat-card">
 <span class="stat-value">${avgAge}</span>
 <span class="stat-label">Average Age</span>
 </div>

 <div class="stat-card">
 <span class="stat-value">${aGrades}</span>
 <span class="stat-label">A Grades</span>
 </div>

 <div class="stat-card">
 <span class="stat-value">${csCount}</span>
 <span class="stat-label">CS Majors</span>
 </div>
 `;
 }

 // Render pagination controls
 function renderPagination() {
 if (!paginationContainer) return;

 const totalPages = Math.ceil(filteredData.length / rowsPerPage);
 let html = '';

 // Previous button
 html += `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="prev">«</button>`;

 // Page numbers
 for (let i = 1; i <= totalPages; i++) {

 if (
 i === 1 ||
 i === totalPages ||
 (i >= currentPage - 2 && i <= currentPage + 2)
 ) {

 html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;

 } else if (i === currentPage - 3 || i === currentPage + 3) {

 html += '<span class="page-ellipsis">...</span>';
 }
 }

 // Next button
 html += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="next">»</button>`;

 paginationContainer.innerHTML = html;

 // FIXED HERE
 paginationContainer.querySelectorAll('.page-btn[data-page]').forEach(btn => {

 btn.addEventListener('click', function() {

 const page = this.dataset.page;

 if (page === 'prev' && currentPage > 1) {
 currentPage--;

 } else if (page === 'next' && currentPage < totalPages) {
 currentPage++;

 } else if (!isNaN(page)) {
 currentPage = parseInt(page);
 }

 renderTable();
 });
 });
 }

 // Filter data based on search and filters
 function filterData() {

 const searchTerm = searchInput
 ? searchInput.value.toLowerCase()
 : '';

 const gradeValue = gradeFilter
 ? gradeFilter.value
 : '';

 const majorValue = majorFilter
 ? majorFilter.value
 : '';

 filteredData = currentData.filter(student => {

 // Search filter
 const matchesSearch =
 !searchTerm ||
 student.firstName.toLowerCase().includes(searchTerm) ||
 student.lastName.toLowerCase().includes(searchTerm) ||
 student.email.toLowerCase().includes(searchTerm) ||
 student.major.toLowerCase().includes(searchTerm);

 // Grade filter
 const matchesGrade =
 !gradeValue ||
 student.grade === gradeValue;

 // Major filter
 const matchesMajor =
 !majorValue ||
 student.major === majorValue;

 return matchesSearch && matchesGrade && matchesMajor;
 });

 // Apply sorting
 sortData();

 currentPage = 1;
 renderTable();
 }

 // Sort data
 function sortData() {

 if (!sortSelect) return;

 const sortBy = sortSelect.value;

 switch(sortBy) {

 case 'name-asc':
 filteredData.sort((a, b) =>
 a.firstName.localeCompare(b.firstName));
 break;

 case 'name-desc':
 filteredData.sort((a, b) =>
 b.firstName.localeCompare(a.firstName));
 break;

 case 'age-asc':
 filteredData.sort((a, b) => a.age - b.age);
 break;

 case 'age-desc':
 filteredData.sort((a, b) => b.age - a.age);
 break;

 case 'grade-asc':
 filteredData.sort((a, b) =>
 a.grade.localeCompare(b.grade));
 break;

 case 'grade-desc':
 filteredData.sort((a, b) =>
 b.grade.localeCompare(a.grade));
 break;
 }
 }

 // Show form for add/edit
 function showForm(student = null) {

 if (!studentForm) return;

 if (student) {

 editingId = student.id;

 formTitle.textContent = 'Edit Student';

 document.getElementById('student-id').value = student.id;
 document.getElementById('first-name').value = student.firstName;
 document.getElementById('last-name').value = student.lastName;
 document.getElementById('student-age').value = student.age;
 document.getElementById('student-grade').value = student.grade;
 document.getElementById('student-email').value = student.email;
 document.getElementById('student-major').value = student.major;

 } else {

 editingId = null;

 formTitle.textContent = 'Add New Student';

 document.getElementById('student-form').reset();
 }

 studentForm.style.display = 'block';

 studentForm.scrollIntoView({
 behavior: 'smooth'
 });
 }

 // Hide form
 function hideForm() {

 if (studentForm) {
 studentForm.style.display = 'none';
 editingId = null;
 }
 }

 // Save student (add or update)
 function saveStudent(formData) {

 const student = {
 firstName: formData.get('firstName'),
 lastName: formData.get('lastName'),
 age: parseInt(formData.get('age')),
 grade: formData.get('grade'),
 email: formData.get('email'),
 major: formData.get('major')
 };

 if (editingId) {

 // Update existing
 const index = currentData.findIndex(
 s => s.id === editingId
 );

 if (index !== -1) {

 student.id = editingId;
 currentData[index] = student;
 }

 } else {

 // Add new
 const newId =
 Math.max(...currentData.map(s => s.id), 0) + 1;

 student.id = newId;

 currentData.push(student);
 }

 filterData();
 hideForm();
 }

 // Delete student
 function deleteStudent(id) {

 if (confirm('Are you sure you want to delete this student?')) {

 currentData = currentData.filter(
 s => s.id !== id
 );

 filterData();
 }
 }

 // Export to CSV
 function exportToCSV() {

 const headers = [
 'ID',
 'First Name',
 'Last Name',
 'Age',
 'Grade',
 'Email',
 'Major'
 ];

 const rows = filteredData.map(s => [
 s.id,
 s.firstName,
 s.lastName,
 s.age,
 s.grade,
 s.email,
 s.major
 ]);

 let csv = headers.join(',') + '\n';

 rows.forEach(row => {
 csv += row.map(cell => `"${cell}"`).join(',') + '\n';
 });

 const blob = new Blob([csv], {
 type: 'text/csv'
 });

 const url = URL.createObjectURL(blob);

 const a = document.createElement('a');

 a.href = url;
 a.download = 'students.csv';

 a.click();

 URL.revokeObjectURL(url);
 }

 // Event Listeners
 if (searchInput) {
 searchInput.addEventListener('input', filterData);
 }

 if (gradeFilter) {
 gradeFilter.addEventListener('change', filterData);
 }

 if (majorFilter) {
 majorFilter.addEventListener('change', filterData);
 }

 if (sortSelect) {
 sortSelect.addEventListener('change', filterData);
 }

 if (addStudentBtn) {
 addStudentBtn.addEventListener('click', () => showForm());
 }

 if (cancelFormBtn) {
 cancelFormBtn.addEventListener('click', hideForm);
 }

 if (studentForm) {

 studentForm.addEventListener('submit', function(e) {

 e.preventDefault();

 saveStudent(new FormData(this));
 });
 }

 if (exportBtn) {
 exportBtn.addEventListener('click', exportToCSV);
 }

 // Event delegation for edit and delete buttons
 if (tableBody) {

 tableBody.addEventListener('click', function(e) {

 const target = e.target;

 if (target.classList.contains('edit-btn')) {

 const id = parseInt(target.dataset.id);

 const student = currentData.find(
 s => s.id === id
 );

 if (student) showForm(student);
 }

 if (target.classList.contains('delete-btn')) {

 const id = parseInt(target.dataset.id);

 deleteStudent(id);
 }
 });
 }

 // Clear filters button
 const clearFiltersBtn = document.getElementById('clear-filters');

 if (clearFiltersBtn) {

 clearFiltersBtn.addEventListener('click', function() {

 if (searchInput) searchInput.value = '';
 if (gradeFilter) gradeFilter.value = '';
 if (majorFilter) majorFilter.value = '';
 if (sortSelect) sortSelect.value = 'name-asc';

 filterData();
 });
 }

 // Initialize
 initializeFilters();
 filterData();

});
