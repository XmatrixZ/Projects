// var dtu={
//     students:[],
//     teachers:[],
//     staff:[]
// }
// dtustudents.students.push({'name':'Christopher','id':'2K18/389','mobile':'9911012','email':'2K18/389','avg':'7.68/10','placement':'34','h_placement':'89','date1':'PRESENT','date2':'PRESENT'});
function add1()
{
}
function add2()
{ 
    var name=document.getElementById('fname').value;
    var id=document.getElementById('fid').value;
    var mobile=document.getElementById('fmobile').value;
    var email=document.getElementById('femail').value;
    var avg=document.getElementById('favg').value;
    var Placement=document.getElementById('fplacement').value;
    var hPlacement=document.getElementById('fh_placement').value;
    var date1=document.getElementById('fdate1').value;
    var date2=document.getElementById('fdate2').value;
    // dtu.students.push({'name':name,'id':id,'mobile':mobile,'email':email,'avg':avg,'placement':Placement,'h_placement':hPlacement,'date1':date1,'date2':date2});
    // for(var i=0;i<dtu.students.length;i++)
    // {
    //     table.innerHTML+="<tr><td>"+dtu.students[i].name+"</td><td>"+dtu.students[i].id+"</td><td>"+"</td><td>"+dtu.students[i].mobile+"</td><td>"+dtu.students[i].email+"</td><td>"+"</td><td>"+dtu.students[i].avg+"</td><td>"+dtu.students[i].Placement+"</td><td>"+"</td><td>"+dtu.students[i].hPlacement+"</td><td>"+dtustudents.students[i].date1+"</td><td>"+"</td><td>"+dtustudents.students[i].date2+"</td></tr>";
    // }
    var table=document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);

    cell1.innerHTML = name;
    cell2.innerHTML = id;
    cell3.innerHTML = mobile;
    cell4.innerHTML = email;
    cell5.innerHTML = avg;
    cell6.innerHTML = Placement;
    cell7.innerHTML = hPlacement;
    cell8.innerHTML = date1;
    cell9.innerHTML = date2;
}
function add3(){

}