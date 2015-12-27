<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel='stylesheet' href='http://mottie.github.com/tablesorter/css/theme.blue.css'>
        <link rel='stylesheet' href='http://mottie.github.com/tablesorter/addons/pager/jquery.tablesorter.pager.css'>
        <script src='js/libs/underscore.js/underscore-min.js'></script>
        <script src='js/libs/jquery/jquery.min.js'></script>
        <script src='js/libs/backbone.js/backbone-min.js'></script>
        <script src='js/jquery.tablesorter.min.js'></script>
        <script src='js/jquery.tablesorter.pager.js'></script>
        <script src='MapRestClient.js'></script>
        <script src="js/backbone-validation-min.js"></script>
        <script src="js/jquery.validate.js"></script>
        <script src="js/additional-methods.js"></script>
        <script src='js/datepick/jquery-ui.js'></script>
        <link href="js/datepick/jquery-ui.css" rel="stylesheet">
        
    </head>
    <body>
        <div id='create'></div>

        <table id='datatable' class='tablesorter-blue'>
        </table>
        <div class='pager' id='pager'>
            <img src='http://mottie.github.com/tablesorter/addons/pager/icons/first.png' class='first' alt='First'/>
            <img src='http://mottie.github.com/tablesorter/addons/pager/icons/prev.png' class='prev' alt='Prev'/>
            <span class='pagedisplay'></span> <!-- this can be any element, including an input -->
            <img src='http://mottie.github.com/tablesorter/addons/pager/icons/next.png' class='next' alt='Next'/>
            <img src='http://mottie.github.com/tablesorter/addons/pager/icons/last.png' class='last' alt='Last'/>
            <select class='pagesize'>
                <option selected='selected' value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
            </select>
        </div>
        <br>

        <div id='details'></div>

        <!-- Templates -->
        <script type='text/template' id='tpl-create'>
            <!--
            Put your controls to create new entity here.

            Class 'new' is used to listen on events in JS code.
            -->
            <button class='new'>Create</button>
        </script>

        <script type='text/template' id='thead'>
            <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>width</th>
            <th>length</th>
            </tr>
            </thead>
        </script>
        <script type='text/template' id='tpl-map-list-item'>
                <td><a href='#<\%= id %>'><\%= id %></a></td>
                <td><\%= name %></td>
                <td><\%= width %></td>
                <td><\%= length %></td>
                <td>
                    <form name="<\%= id %>" action="/CinemaWebApp/seatmap.htm?id=<\%= id %>" method="POST" id="<\%= id %>">
                        <input type="text" id="fromDate<\%= id %>" name="fromDate"/>
                        <button type="submit" onclick='javascript:document.getElementById(<\%= id %>).action=document.getElementById(<\%= id %>).action.split("&date=")[0]+"&date="+document.getElementById("fromDate<\%= id %>").value;'>Choose seat...</button>
                    </form>
                </td>
        </script>
        <script type='text/template' id='tpl-map-details'>
            <div>
            <div class="validation-error"></div>
            <table>
            <tbody>
            <tr><td>Id</td>
            <td>
            <input disabled type='text' id='id' name='id' value='<\%= typeof(id)!== "undefined" ? id : "" %>'  />
            </td>
            </tr>
            <tr>
            <td>name</td><td><input type='text' id='name' name='name' value='<\%= name %>'/></td></tr>
            <tr>
            <td>width</td><td><input type='text' id='width' name='width' value='<\%= width %>'/></td></tr>
            <tr>
            <td>length</td><td><input type='text' id='length' name='length' value='<\%= length %>'/></td></tr>
            </tbody>
            </table>
            <!--
            Put your controls to create new entity here.
            Classes 'save' and 'delete' are used to listen on events in JS code.
            -->
            <button  class='save'>Save</button>
            <button  class='delete'>Delete</button>
            </div>
        </script>


    </body>
</html>
