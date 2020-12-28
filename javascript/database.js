var dtu={
    students:[],
    teachers:[],
    staff:[]
}
dtustudents.students.push({'name':'Christopher','id':'2K18/389','mobile':'9911012','email':'2K18/389','avg':'7.68/10','placement':'34','h_placement':'89','date1':'PRESENT','date2':'PRESENT'});
function add()
{ 
    var table=document.getElementById('table1').value;
    var name=document.getElementById('fname').value;
    var id=document.getElementById('fid').value;
    var email=document.getElementById('femail').value;
    var avg=document.getElementById('favg').value;
    var Placement=document.getElementById('fplacement').value;
    var hPlacement=document.getElementById('fh_placement').value;
    var date1=document.getElementById('fdate1').value;
    var date2=document.getElementById('fdate2').value;
    dtu.students.push({'name':name,'id':id,'mobile':mobile,'email':email,'avg':avg,'placement':Placement,'h_placement':hPlacement,'date1':date1,'date2':date2});
    for(var i=0;i<dtu.students.length;i++)
    {
        table.innerHTML+="<tr><td>"+dtu.students[i].name+"</td><td>"+dtu.students[i].id+"</td><td>"+"</td><td>"+dtu.students[i].mobile+"</td><td>"+dtu.students[i].email+"</td><td>"+"</td><td>"+dtu.students[i].avg+"</td><td>"+dtu.students[i].Placement+"</td><td>"+"</td><td>"+dtu.students[i].hPlacement+"</td><td>"+dtustudents.students[i].date1+"</td><td>"+"</td><td>"+dtustudents.students[i].date2+"</td></tr>";
    }

}