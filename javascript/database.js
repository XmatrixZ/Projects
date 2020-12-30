// var dtu={
//     students:[],
//     teachers:[],
//     staff:[]
// }
// dtustudents.students.push({'name':'Christopher','id':'2K18/389','mobile':'9911012','email':'2K18/389','avg':'7.68/10','placement':'34','h_placement':'89','date1':'PRESENT','date2':'PRESENT'});
function add1()
{
    var name1=document.getElementById('fname1').value;
    var id1=document.getElementById('fid1').value;
    var post1=document.getElementById('fpost1').value;
    var mobile1=document.getElementById('fmobile1').value;
    var email1=document.getElementById('femail1').value;
    var date11=document.getElementById('f1date1').value;
    var date21=document.getElementById('f1date2').value;
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

    cell1.innerHTML = name1;
    cell2.innerHTML = id1;
    cell3.innerHTML = post1;
    cell4.innerHTML = mobile1;
    cell5.innerHTML = email1;
    cell6.innerHTML = date11;
    cell7.innerHTML = date21;
    document.getElementById("myinput").reset();
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
    var table=document.getElementsByTagName('table')[1];
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
    document.getElementById("myinput").reset();
}
function add3()
{
    var name2=document.getElementById('fname2').value;
    var id2=document.getElementById('fid2').value;
    var group2=document.getElementById('fgroup2').value;
    var mobile2=document.getElementById('fmobile2').value;
    var email2=document.getElementById('femail2').value;
    var CGPA2=document.getElementById('fCGPA2').value;
    var date12=document.getElementById('f2date1').value;
    var date22=document.getElementById('f2date2').value;
    // dtu.students.push({'name':name,'id':id,'mobile':mobile,'email':email,'avg':avg,'placement':Placement,'h_placement':hPlacement,'date1':date1,'date2':date2});
    // for(var i=0;i<dtu.students.length;i++)
    // {
    //     table.innerHTML+="<tr><td>"+dtu.students[i].name+"</td><td>"+dtu.students[i].id+"</td><td>"+"</td><td>"+dtu.students[i].mobile+"</td><td>"+dtu.students[i].email+"</td><td>"+"</td><td>"+dtu.students[i].avg+"</td><td>"+dtu.students[i].Placement+"</td><td>"+"</td><td>"+dtu.students[i].hPlacement+"</td><td>"+dtustudents.students[i].date1+"</td><td>"+"</td><td>"+dtustudents.students[i].date2+"</td></tr>";
    // }
    var table=document.getElementsByTagName('table')[2];
    var newRow = table.insertRow(table.rows.length-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = name2;
    cell2.innerHTML = id2;
    cell3.innerHTML = group2;
    cell4.innerHTML = mobile2;
    cell5.innerHTML = email2;
    cell6.innerHTML = CGPA2;
    cell7.innerHTML = date12;
    cell8.innerHTML = date22;
    document.getElementById("myinput").reset();
}
