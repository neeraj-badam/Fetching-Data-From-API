function WeatherReport()
{
    var request = new XMLHttpRequest();
    var city = document.getElementById("city").value;
    
    console.log(city)
    var apikey = '431b656892250c4e5e7f9620748aca9f';
    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;
    console.log(url)
    request.open("GET",url,true);
    request.send();
    request.onload = function(){
        let table = document.createElement("TABLE");
        let row = table.insertRow(-1);
        let Sno = row.insertCell(-1)
        let temperature = row.insertCell(-1)
        let date = row.insertCell(-1)
        let time = row.insertCell(-1)
        Sno.innerHTML = "S.No"
        temperature.innerHTML = "Temperature"
        date.innerHTML = "Date"
        time.innerHTML = "Time"
        table.border = "1"
        try{
        let result = JSON.parse(this.response);
        console.log(result)
        let x = new Array(result);
        x.forEach( (day)=>{
            let display = day.list;
            //console.log(display)
            console.log("<br>")
            for(let i=0;i<display.length;i++)
            {
                console.log(display[i])  
                let date = display[i].dt_txt.split(" ");
                let row = table.insertRow(-1);
                let sno = row.insertCell(-1)
                let temperatureDisplay = row.insertCell(-1)
                let dateDisplay = row.insertCell(-1)
                let t = row.insertCell(-1)
                sno.innerHTML = display.indexOf(display[i])+1
                console.log(sno)
                temperatureDisplay.innerHTML = display[i].main.temp
                dateDisplay.innerHTML = date[0]
                t.innerHTML = date[1]
            }
        })
        
        displayTable = document.getElementById("displayTable")
    	displayTable.innerHTML = "";
        displayTable.append(table)
        console.log("Fetching  ... ")
        }
        catch(Err)
        {
            alert("Enter Valid city name")
            
        }
    }
}