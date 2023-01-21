var medic = [];

function addMedicamento() {

    event.preventDefault(); 
    let medicamento = {
        "mName":document.getElementById('mName').value,
        "mQte":document.getElementById('mQte').value,
        "mClass":document.getElementById('mClass').value
     
    }
    
    document.getElementById('mName').value="";
    document.getElementById('mQte').value="";
    document.getElementById('mClass').value="";
     
    medic.push(medicamento);   
    renderTable();
 }
 
 function renderTable() {
     
     let table = document.getElementById('tbMedicamentos');
     table.innerHTML = `<tr>
        <th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>Classe do Medicamento</th>
        <th>Remover</th>
     </tr>`
 
     for(let i = 0; i < medic.length; i++) {
 
         table.innerHTML = table.innerHTML + `<td> ${ i } </td>
         <td> ${medic[i].mName}</td>
         <td> ${medic[i].mQte}</td>
         <td> ${medic[i].mClass}</td>
         <td><img src="remove.png" width="25px" onclick="delMedic(${i})"></td>`
 
     }
 }
 
 function delMedic(index) {
     medic.splice(index,1);
     renderTable();
 }