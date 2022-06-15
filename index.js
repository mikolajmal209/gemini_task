const students = [
    {
        name: 'Martin',
        lastName: 'Lant',
        marks: [9, 8, null, 7, 5],
    },
    {
        name: 'Francesco',
        lastName: 'Portus',
        marks: [5, 4, 2, 3, 2],
    },
    {
        name: 'Bill',
        lastName: 'Merdoc',
        marks: [10, null, null, null, 10],
    },
    {
        name: 'John',
        lastName: 'Entman',
        marks: [9, 8, 9, 7, 5],
    },
];

const container = document.getElementById('base');

students.forEach((students, idx) => {
    const card = document.createElement('div');
    let sum = 0;
    for (var number of students.marks) {
        sum += number;
    }
    const avg = sum / students.marks.length;

    if (avg > 5) {
        card.style.borderColor = 'green'
    }
    const results = students.marks.filter((element) => {
        return element !== null;
    });
    const card_content = `   
     <div class="card">
    <div class="card-header" id="heading-${idx}">
    <h5>${students.name}</h5>
    <p>Lastname: ${students.lastName}</p>
    </div>

      <div class="card-marks">
        <p>Marks :${students.marks}</p>
      </div>
      <div class="lectures">
      <p>presence :${results.length}</p>
    </div>
    <div class="card-avg">
    <p>Average Mark: ${avg}</p>
  </div>
    </div>
  </div>`;
    container.innerHTML += card_content;
});
