function toSend(){
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    titleOfAllInformation.innerHTML = "Ola! "+name.value+"<br>Aqui está suas informações: <br><br>"
    getAllInformationFromForm.innerHTML = "Nome: "+name.value +" "+lastname.value+"<br>Email: "+email.value;
}