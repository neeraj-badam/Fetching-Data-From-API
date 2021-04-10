function FetchRepositories()
{
    var request = new XMLHttpRequest();
    var username = document.getElementById("username").value;
    
    console.log(username)
    var apikey = '431b656892250c4e5e7f9620748aca9f';
    let url=`https://api.github.com/users/${username}/repos`;
    console.log(url)
    request.open("GET",url,true);
    request.send();
    let table = document.createElement("TABLE");
    table.border = "1"
    let row = table.insertRow(-1);
    let Sno = row.insertCell(-1)
    let RepositoryName = row.insertCell(-1)
    let description = row.insertCell(-1)
    Sno.innerHTML = "SNo"
    RepositoryName.innerHTML = "RepositoryName"
    description.innerHTML = "description"
        //console.log("Url got")
    
        request.onload = function(){
            try{
            let result = JSON.parse(this.response);
            console.log(result)
            result.forEach( (day)=>{
                    let row = table.insertRow(-1);
                    let no = row.insertCell(-1)
                    let Reponame = row.insertCell(-1)
                    let desc = row.insertCell(-1)
                    console.log(result.indexOf(day))
                    no.innerHTML = result.indexOf(day)+1;
                    Reponame.innerHTML = day.name
                    desc.innerHTML = day.description
            })
            document.getElementById("nameOfUser").innerHTML = "";

            displayTable = document.getElementById("displayRepositories")
            
            displayTable.innerHTML = "";
            displayTable.value = "";
            displayTable.append(table)
            document.getElementById("nameOfUser").innerHTML = "Repositories of "+username;
            document.getElementById("nameOfUser").style.visibility = "visible";
            console.log("Fetching  ... ")
            }
            catch(Err)
            {
                alert("Enter Valid username")
            }
    }
}