
 document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.querySelector('.dodaj');
  const dateElement = document.querySelector('.datum');
  const timeElement = document.querySelector('.vrime');
  var lista = document.querySelector('.afterdodatak');

  function addList() {
 
 let textnode = `<div class="ime">
                        <div class="naziv"><input type="checkbox" class="check"><p style="margin-bottom: 2px; margin-top: 2px; margin-left: 1px; padding-top: 6px; width: 200px; display: inline-block; text-align: center;">${inputElement.value}<p></div>
                        <div class="datum-2"><p style="margin-left: 13px; margin-top: 4px;">${dateElement.value}</p></div>
                        <div class="vrime-2"><p style="margin-left: 13px; margin-top: 4px;">${timeElement.value}</p></div>
                        <div class="dugme-2"><button  class="brisanje">Delete</button></div>
                        </div>`;
    
   if (inputElement.value === '')  {
  alert("Napishi neshto.");
   }
    else {
   lista.insertAdjacentHTML('afterbegin', textnode);
   }
    
  }  

    function deleteAll() {
                      lista.innerText = '';
                      }  

function deleteList(event) {
  const zadatak = event.target.closest('.ime');
  
  if (zadatak) {
    zadatak.remove();
  }
}

lista.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('brisanje')) {
    deleteList(event);
  }
});
    
 window.addList = addList;
  window.deleteAll = deleteAll;
});
   
