document.getElementById('form').addEventListener('submit', guardar);

function guardar(e) {
  let titulo = document.getElementById('titulo').value;
  let fecha = document.getElementById('fecha').value;
  /* console.log(description) */

  let tarea = {
    titulo,
    fecha
  };
  
  if(localStorage.getItem('tareas') === null) {
    let tareas = [];
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  } else {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
  
  verTareas();
  document.getElementById('form').reset();
  e.preventDefault();
}

function eliminartareas(titulo) {
  /* console.log(title) */
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  for(let i = 0; i < tareas.length; i++) {
    if(tareas[i].titulo == titulo) {
      tareas.splice(i, 1);
    }
  }
  
  localStorage.setItem('tareas', JSON.stringify(tareas));
  verTareas();
}

function verTareas() {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  let verTareas = document.getElementById('tareas');
  verTareas.innerHTML = '';
  for(let i = 0; i < tareas.length; i++) {
    let titulo = tareas[i].titulo;
    let fecha = tareas[i].fecha;

    verTareas.innerHTML += `<div class="">
        <div class="lista">
          <p>${titulo} - ${fecha}
          <a href="#" onclick="eliminartareas('${titulo}')" class="btn">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

verTareas();
