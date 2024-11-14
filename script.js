var selectedRow=null;
function onFormSubmit(){
   var formData= readFormData();
   if(selectedRow==null){
    insertNewRecord(formData);
   }else{
    updateData(formData);
   }
   resetForm();
}
function readFormData(){
    var formData={};
    formData["bookname"]=document.getElementById("bookname").value;
    formData["aurthername"]=document.getElementById("aurthername").value;
    formData["pricename"]=document.getElementById("pricename").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("booklist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.bookname;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.aurthername;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pricename;

    // var cell4 = newRow.insertCell(3);
    // cell4.innerHTML = `
    //     <div class="button-container">
    //         <button onclick="onEdit(this)" class="btn edit-btn">Edit</button>
    //         <button onclick="onDelete(this)" class="btn delete-btn">Delete</button>
    //     </div>
    // `;

    cell3 = newRow.insertCell(3);
cell3.innerHTML = `
    <a onclick="onEdit(this)" class="btn edit-btn">Edit</a>
    <a onclick="onDelete(this)" class="btn delete-btn">Delete</a>
`;

    // cell3=newRow.insertCell(3);
    // cell3.innerHTML=`<a onclick="onEdit(this)">Edit</a>
    //                 <a onclick="onDelete(this)">Delete</a>`;
}


function resetForm(){
    document.getElementById("bookname").value="";
    document.getElementById("aurthername").value="";
    document.getElementById("pricename").value="";
    selectedRow=null;
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    if (selectedRow && selectedRow.cells.length >= 3) {
        document.getElementById("bookname").value = selectedRow.cells[0].innerHTML;
        document.getElementById("aurthername").value = selectedRow.cells[1].innerHTML;
        document.getElementById("pricename").value = selectedRow.cells[2].innerHTML;
    } else {
        console.error("Selected row or its cells are not defined properly.");
    }

}

function updateData(formData){
    selectedRow.cells[0].innerHTML=formData.bookname;
    selectedRow.cells[1].innerHTML=formData.aurthername;
    selectedRow.cells[2].innerHTML=formData.pricename;
}
// function onDelete(td){
//     if(confirm("Are you sure to Delete?")){
//         row=td.parentElement.parentElement;
//         document.getElementById("booklist").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }
function onDelete(td) {
    // Create the modal elements
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.width = "300px";
    modalContent.style.textAlign = "center";
    modalContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

    const message = document.createElement("p");
    message.innerText = "Are you sure you want to delete?";

    const confirmButton = document.createElement("button");
    confirmButton.innerText = "Yes";
    confirmButton.style.margin = "10px";
    confirmButton.style.padding = "8px 16px";
    confirmButton.style.border = "none";
    confirmButton.style.borderRadius = "4px";
    confirmButton.style.backgroundColor = "#f44336";
    confirmButton.style.color = "white";
    confirmButton.style.cursor = "pointer";

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "No";
    cancelButton.style.margin = "10px";
    cancelButton.style.padding = "8px 16px";
    cancelButton.style.border = "none";
    cancelButton.style.borderRadius = "4px";
    cancelButton.style.backgroundColor = "#ccc";
    cancelButton.style.color = "black";
    cancelButton.style.cursor = "pointer";

    // Append elements to the modal content
    modalContent.appendChild(message);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
    modal.appendChild(modalContent);

    // Append the modal to the document body
    document.body.appendChild(modal);

    // Event listener for confirm button
    confirmButton.onclick = function() {
        const row = td.parentElement.parentElement;
        document.getElementById("booklist").deleteRow(row.rowIndex);
        resetForm();
        document.body.removeChild(modal); // Remove modal after confirming
    };

    // Event listener for cancel button
    cancelButton.onclick = function() {
        document.body.removeChild(modal); // Remove modal without deleting
    };
}

function validate(){
    isvalid=true;
}