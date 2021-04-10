function FetchCases()
{
    var request = new XMLHttpRequest();
    var country = document.getElementById("country").value;
    
    console.log(country)
    var apikey = '431b656892250c4e5e7f9620748aca9f';
    let url=`https://api.covid19api.com/live/country/${country}`;
    console.log(url)
    request.open("GET",url,true);
    request.send();
    let table = document.createElement("TABLE");
    table.border = "1"
    let row = table.insertRow(-1);
    let Sno = row.insertCell(-1)
    let activeCases = row.insertCell(-1)
    let deathCases = row.insertCell(-1)
    let recoveredCases = row.insertCell(-1)
    Sno.innerHTML = "SNo"
    activeCases.innerHTML = "Active Cases"
    deathCases.innerHTML = "Death Cases"
    recoveredCases.innerHTML = "Total Recovered Cases"
        console.log("Url got")
    
        request.onload = function(){
            try{
                let result = JSON.parse(this.response);
                console.log(result)
                if(result.length == 0)
                {
                    throw "err";
                }
                result.forEach( (day)=>{
                    let row = table.insertRow(-1);
                    let no = row.insertCell(-1)
                    let active = row.insertCell(-1)
                    let death = row.insertCell(-1)
                    let recovered = row.insertCell(-1)
                    no.innerHTML = result.indexOf(day)+1;
                    active.innerHTML = day.Active
                    death.innerHTML = day.Deaths
                    recovered.innerHTML = day.Recovered
            })

            displayTable = document.getElementById("displayTable")
            document.getElementById("cases").innerHTML = "Total Cases of Covid in the Country : "+country
            document.getElementById("cases").style.visibility = "visible"
            displayTable.innerHTML = "";
            displayTable.value = "";
            displayTable.append(table)
            console.log("Fetching  ... ")
            }
            catch(err)
            {
                alert("No Country is present with the given name as "+country)
                console.log("I am err")
            }
    }
}