import { handleFormSubmit } from './events/listeners.js';
import { createBookForm } from './ui/form.js'
//simple test
document.addEventListener('DOMContentLoaded', () => {
    const formEl = createBookForm();
    document.body.append(formEl);


    const form = document.getElementById('book-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});