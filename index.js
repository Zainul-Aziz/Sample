function func()
  {
    $.get("https://api.covid19api.com/summary",

      function (data)
      {
       //console.log(data['Countries'].length);
       var tabval = document.getElementById('tabval');

       for(var i=1; i<(data['Countries'].length) ;i++)
       {
         var x = tabval.insertRow();

         x.insertCell(0); 
         tabval.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];
         tabval.rows[i].cells[0].style.background = "#918ce4";
        

         x.insertCell(1);
         tabval.rows[i].cells[1].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
         tabval.rows[i].cells[1].style.background = "#7a4a91";
         

         x.insertCell(2);
         tabval.rows[i].cells[2].innerHTML = data['Countries'][i-1]['TotalRecovered'];
         tabval.rows[i].cells[2].style.background = "#7a4a91";
         

         x.insertCell(3);
         tabval.rows[i].cells[3].innerHTML = data['Countries'][i-1]['TotalDeaths'];
         tabval.rows[i].cells[3].style.background = "#7a4a91";
         

         x.insertCell(4);
         tabval.rows[i].cells[4].innerHTML = data['Countries'][i-1]['NewConfirmed'];
         tabval.rows[i].cells[4].style.background = "#7a4a91";
     

         x.insertCell(5);
         tabval.rows[i].cells[5].innerHTML = data['Countries'][i-1]['NewRecovered'];
         tabval.rows[i].cells[5].style.background = "#7a4a91";
        

         x.insertCell(6);
         tabval.rows[i].cells[6].innerHTML = data['Countries'][i-1]['NewDeaths'];
         tabval.rows[i].cells[6].style.background = "#7a4a91";
       }
      }
    );
  }
