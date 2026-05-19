console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-59] - []");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 59: Complete form validation system
document.addEventListener('DOMContentLoaded', function() {

 // Validation rules configuration
 const validationRules = {

 username: {
 required: true,
 minLength: 3,
 maxLength: 20,
 pattern: /^[a-zA-Z0-9_]+$/,
 message: 'Username must be 3-20 alphanumeric characters or underscore'
 },

 email: {
 required: true,
 pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
 message: 'Please enter a valid email address'
 },

 password: {
 required: true,
 minLength: 8,
 pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
 message: 'Password must be 8+ chars with uppercase, lowercase, and number'
 },

 confirmPassword: {
 required: true,
 matchWith: 'password',
 message: 'Passwords do not match'
 },

 phone: {
 required: false,
 pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
 message: 'Enter valid phone: (123) 456-7890 or 123-456-7890'
 },

 age: {
 required: true,
 min: 18,
 max: 120,
 message: 'Age must be between 18 and 120'
 },

 website: {
 required: false,
 pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
 message: 'Enter a valid URL (e.g., https://example.com)'
 },

 zipCode: {
 required: true,
 pattern: /^\d{5}(-\d{4})?$/,
 message: 'Enter valid ZIP code: 12345 or 12345-6789'
 },

 creditCard: {
 required: false,
 pattern: /^(\d{4}[\s-]?){3}\d{4}$/,
 message: 'Enter valid 16-digit card number'
 }

 };

 // Get form and fields
 const form = document.getElementById('validation-form');

 const fields =
 document.querySelectorAll('[data-validate]');

 const submitBtn =
 document.getElementById('submit-btn');

 const resetBtn =
 document.getElementById('reset-btn');

 const successMessage =
 document.getElementById('success-message');

 // Validation state
 const fieldState = new Map();

 // Initialize fields
 fields.forEach(field => {

 fieldState.set(field.id, {
 touched: false,
 valid: false,
 errors: []
 });

 });

 // Validate a single field
 function validateField(field) {

 const fieldId = field.id;

 const rules = validationRules[fieldId];

 const value = field.value.trim();

 const state = fieldState.get(fieldId);

 const errors = [];

 if (!rules) return true;

 // Required check
 if (rules.required && !value) {
 errors.push(`${fieldId} is required`);
 }

 if (value) {

 // Min length
 if (
 rules.minLength &&
 value.length < rules.minLength
 ) {

 errors.push(
 `Minimum ${rules.minLength} characters required`
 );
 }

 // Max length
 if (
 rules.maxLength &&
 value.length > rules.maxLength
 ) {

 errors.push(
 `Maximum ${rules.maxLength} characters allowed`
 );
 }

 // Pattern check
 if (
 rules.pattern &&
 !rules.pattern.test(value)
 ) {

 errors.push(rules.message);
 }

 // Min value
 if (
 rules.min !== undefined &&
 parseInt(value) < rules.min
 ) {

 errors.push(rules.message);
 }

 // Max value
 if (
 rules.max !== undefined &&
 parseInt(value) > rules.max
 ) {

 errors.push(rules.message);
 }

 // Match with another field
 if (rules.matchWith) {

 const matchField =
 document.getElementById(rules.matchWith);

 if (
 matchField &&
 value !== matchField.value
 ) {

 errors.push(rules.message);
 }
 }

 // Credit card validation
 if (fieldId === 'creditCard' && value) {

 if (!luhnCheck(value.replace(/\D/g, ''))) {

 errors.push('Invalid credit card number');
 }
 }
 }

 // Update state
 state.errors = errors;

 state.valid = errors.length === 0;

 // Update UI
 updateFieldUI(field, errors);

 return state.valid;
 }

 // Luhn algorithm
 function luhnCheck(cardNumber) {

 if (!/^\d+$/.test(cardNumber)) {
 return false;
 }

 let sum = 0;

 let alternate = false;

 for (let i = cardNumber.length - 1; i >= 0; i--) {

 let n = parseInt(cardNumber.charAt(i));

 if (alternate) {

 n *= 2;

 if (n > 9) n -= 9;
 }

 sum += n;

 alternate = !alternate;
 }

 return sum % 10 === 0;
 }

 // Update UI
 function updateFieldUI(field, errors) {

 const formGroup =
 field.closest('.form-group');

 const errorContainer =
 formGroup.querySelector('.field-error');

 const successIcon =
 formGroup.querySelector('.success-icon');

 const errorIcon =
 formGroup.querySelector('.error-icon');

 // Remove classes
 formGroup.classList.remove('valid', 'invalid');

 if (
 errors.length === 0 &&
 fieldState.get(field.id).touched
 ) {

 formGroup.classList.add('valid');

 if (successIcon)
 successIcon.style.display = 'inline';

 if (errorIcon)
 errorIcon.style.display = 'none';

 if (errorContainer)
 errorContainer.textContent = '';

 } else if (errors.length > 0) {

 formGroup.classList.add('invalid');

 if (successIcon)
 successIcon.style.display = 'none';

 if (errorIcon)
 errorIcon.style.display = 'inline';

 if (errorContainer)
 errorContainer.textContent = errors[0];

 } else {

 if (successIcon)
 successIcon.style.display = 'none';

 if (errorIcon)
 errorIcon.style.display = 'none';

 if (errorContainer)
 errorContainer.textContent = '';
 }
 }

 // Validate entire form
 function validateForm() {

 let isValid = true;

 fields.forEach(field => {

 const state =
 fieldState.get(field.id);

 state.touched = true;

 if (!validateField(field)) {
 isValid = false;
 }

 });

 // Update submit button
 if (submitBtn) {
 submitBtn.disabled = !isValid;
 }

 return isValid;
 }

 // Real-time validation
 fields.forEach(field => {

 field.addEventListener('input', function() {

 const state =
 fieldState.get(this.id);

 if (state.touched) {
 validateField(this);
 }

 validateForm();
 });

 field.addEventListener('blur', function() {

 const state =
 fieldState.get(this.id);

 state.touched = true;

 validateField(this);

 validateForm();
 });

 field.addEventListener('focus', function() {

 const formGroup =
 this.closest('.form-group');

 formGroup.classList.add('focused');
 });
 });

 // Password strength
 const passwordField =
 document.getElementById('password');

 const strengthBar =
 document.getElementById('password-strength');

 const strengthText =
 document.getElementById('strength-text');

 if (passwordField) {

 passwordField.addEventListener('input', function() {

 const password = this.value;

 const strength =
 calculatePasswordStrength(password);

 if (strengthBar) {

 strengthBar.style.width =
 `${strength.score * 25}%`;

 strengthBar.style.backgroundColor =
 strength.color;
 }

 if (strengthText) {

 strengthText.textContent =
 strength.label;

 strengthText.style.color =
 strength.color;
 }
 });
 }

 function calculatePasswordStrength(password) {

 if (!password) {

 return {
 score: 0,
 label: 'No password',
 color: '#ddd'
 };
 }

 let score = 0;

 if (password.length >= 8) score++;
 if (password.length >= 12) score++;
 if (/[a-z]/.test(password)) score++;
 if (/[A-Z]/.test(password)) score++;
 if (/\d/.test(password)) score++;
 if (/[^a-zA-Z0-9]/.test(password)) score++;

 const normalized =
 Math.min(Math.floor(score / 1.5), 4);

 const levels = [

 { label: 'Very Weak', color: '#f44336' },
 { label: 'Weak', color: '#ff9800' },
 { label: 'Fair', color: '#ffc107' },
 { label: 'Good', color: '#2196F3' },
 { label: 'Strong', color: '#4CAF50' }

 ];

 return {
 score: normalized,
 ...levels[normalized]
 };
 }

 // Form submission
 if (form) {

 form.addEventListener('submit', function(e) {

 e.preventDefault();

 if (validateForm()) {

 const formData = new FormData(form);

 const data = {};

 formData.forEach((value, key) => {
 data[key] = value;
 });

 console.log(
 'Form submitted successfully:',
 data
 );

 if (successMessage) {

 successMessage.style.display = 'block';

 successMessage.textContent =
 '✓ Form submitted successfully!';
 }

 } else {

 if (successMessage) {

 successMessage.style.display = 'block';

 successMessage.style.backgroundColor =
 '#ffebee';

 successMessage.style.color =
 '#c62828';

 successMessage.textContent =
 '✗ Please fix validation errors';
 }
 }
 });
 }

 // Reset form
 if (resetBtn) {

 resetBtn.addEventListener('click', function() {

 form.reset();

 fields.forEach(field => {

 const state =
 fieldState.get(field.id);

 state.touched = false;
 state.valid = false;
 state.errors = [];

 const formGroup =
 field.closest('.form-group');

 formGroup.classList.remove(
 'valid',
 'invalid',
 'focused'
 );

 const successIcon =
 formGroup.querySelector('.success-icon');

 const errorIcon =
 formGroup.querySelector('.error-icon');

 if (successIcon)
 successIcon.style.display = 'none';

 if (errorIcon)
 errorIcon.style.display = 'none';
 });

 if (submitBtn)
 submitBtn.disabled = true;

 if (successMessage)
 successMessage.style.display = 'none';

 if (strengthBar)
 strengthBar.style.width = '0%';

 if (strengthText)
 strengthText.textContent = '';
 });
 }

 // Initialize submit button
 if (submitBtn) {
 submitBtn.disabled = true;
 }

});