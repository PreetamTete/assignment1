function addRowBottom()
{
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;


    var table = document.getElementsByTagName('table')[0];


    var newRow = table.insertRow(6);

    // var cel1 = newRow.insertCell(0);
    var cel0 = newRow.insertCell(0);
    var cel1 = newRow.insertCell(1);
    var cel2 = newRow.insertCell(2);
    var cel3 = newRow.insertCell(3);
    var cel4 = newRow.insertCell(4);

    cel0.innerHTML = "";
    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = city;
    cel4.innerHTML = country;
}
function addRowTop()
{
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;


    var table = document.getElementsByTagName('table')[0];


    var newRow = table.insertRow(1);

    // var cel1 = newRow.insertCell(0);
    var cel0 = newRow.insertCell(0);
    var cel1 = newRow.insertCell(1);
    var cel2 = newRow.insertCell(2);
    var cel3 = newRow.insertCell(3);
    var cel4 = newRow.insertCell(4);

    cel0.innerHTML = "";
    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = city;
    cel4.innerHTML = country;
}