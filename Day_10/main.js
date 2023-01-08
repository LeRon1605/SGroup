const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputSalary = document.getElementById('input-salary');
const inputCity = document.getElementById('input-city');
const table = document.getElementById('table-body');
const form = document.getElementById('form');
const data = [];

const renderRow = (obj) => `
    <tr>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>${obj.salary}</td>
        <td>${obj.city}</td>
        <td>
            <button data-id=${obj.id} onClick="deleteElement(this)">Delete</button>
        </td>
    </tr>
`;

const deleteElement = (element) => {
    element.parentElement.parentElement.remove();
    data.splice(data.indexOf(x => x.id == element.dataset.id), 1);
};

form.addEventListener('submit', e => {
    e.preventDefault();

    data.push({
        id: Date.now(),
        name: inputName.value,
        email: inputEmail.value,
        salary: inputSalary.value,
        city: inputCity.value
    });
    
    table.innerHTML = data.reduce((res, x) => res + renderRow(x), '');
});