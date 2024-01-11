interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 19,
  location: 'USA',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 18,
  location: 'USA',
};

const studentsList: Array<Student> = [student1, student2];  
function renderTable() {
  const table = document.createElement('table');
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
