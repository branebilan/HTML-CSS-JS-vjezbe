let toDo = {
    "task": '',
    "date": ''
  }

  const inputElement = document.querySelector('.dodaj');
  const dateElement = document.querySelector('.datum');
  
  function addList() {

    toDo.task = inputElement;
    toDo.date = dateElement;

    let lista = document.querySelector('.prvi').appendChild(document.createElement('div'));
    lista.innerHTML = `
                      <div class="ime">
                        <div class="naziv"><input type="checkbox" class="check"><p style="margin-bottom: 2px; margin-top: 5px; margin-left: 5px; width: 200px; display: inline-block;">${inputElement.value}<p></div>
                        <div class="datum-2"><p style="margin-left: 8px; margin-top: 4px;">${dateElement.value}</p></div>
                        <div class="dugme-2"><button onclick="deleteList();" class="brisanje">Delete</button></div>
                        </div>`;
   }
   
    function deleteList() {
    document.querySelector('.ime').remove();
   }
