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
function insertNewRecord(data){
    var table=document.getElementById("booklist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.bookname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.aurthername;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.pricename;
    cell3=newRow.insertCell(3);
    cell3.innerHTML=`<a onclick="onEdit(this)">Edit</a>
                    <a onclick="onDelete(this)">Delete</a>`;
}
function resetForm(){
    document.getElementById("bookname").value="";
    document.getElementById("aurthername").value="";
    document.getElementById("pricename").value="";
    selectedRow=null;
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("bookname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("aurthername").value=selectedRow.cells[1].innerHTML;
    document.getElementById("pricename").value=selectedRow.cells[2].innerHTML;

}

function updateData(formData){
    selectedRow.cells[0].innerHTML=formData.bookname;
    selectedRow.cells[1].innerHTML=formData.aurthername;
    selectedRow.cells[2].innerHTML=formData.pricename;
}
function onDelete(td){
    if(confirm("Are you sure to Delete?")){
        row=td.parentElement.parentElement;
        document.getElementById("booklist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isvalid=true;
}