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
        <script src="js/backbone-validation-min.js"></script>
        <script src='SeatMapRestClient.js'></script>
        <script src='js/datepick/jquery-ui.js'></script>
        <link href="js/datepick/jquery-ui.css" rel="stylesheet">
        <script>
            $(function() {
                $( document ).tooltip();
            });

            $(window).load(function() {
                //dom not only ready, but everything is loaded
                $("td.lightblue > div > input").attr("disabled","disabled");
                $("td.lightblue > div > a").attr("href","");
            });
            function booklist(elem){
                    var id = elem.split("check")[1];
                    var checkinput = $("#"+elem);
                    var confirmlist = $("#confirmlist");
                    var a = $("#div"+id);
                    if(checkinput.prop("checked") || checkinput.checked){
                        confirmlist.append("<li id='li"+id+"'>"+id+": "+a.prop("title")+"</li>");
                    } else {
                        var li_elem = $("#li"+id);
                        li_elem.remove();
                    }
                    
                    $(".bookerror").hide();
                }
              
        </script>
        <style>
            .lightblue{
                background-color: lightblue;
            }
            .white{
                background-color: white;
            }
        </style>
    </head>
    <body>
        <table border = '2'>
            <tr>
                <td>
                    <div>Hall #: <%= request.getParameter("id")%></div>
                    <div>Date  : <%= request.getParameter("date")%></div>
                    <div id='create'></div>

                    <table id='datatable' class='tablesorter-blue'>
                    </table>
                    <br>
                </td>
                <td>
                    Booking info:
                    <table border='1' id='bookdatatable' class='tablesorter-blue'>
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
                </td>
            </tr>
            <tr>
                <td>
                    <div id='details'></div>
                </td>
                <td>
                    <div id="confirm"></div>
                </td>
            </tr>
        </table>

        <!-- Templates -->
        <script type='text/template' id='tpl-confirm-list'>
            <div class="bookerror" style="display:none; color:red;">The seats from last two rows are allowed to book only two seats side by side! </div>
                    Your booking info:
                    <ul id="confirmlist">
                    </ul>
                    <button class="confirm">Confirm Booking!</button>
        </script>
        
        <script type='text/template' id='tpl-create'>
            <!--
            Put your controls to create new entity here.

            Class 'new' is used to listen on events in JS code.
            -->
            <button class='new'>Create</button>
        </script>

        <script type='text/template' id='tpl-seatmap-list-item'>
            <div>
                <input type="checkbox" id="check<\%= id %>" onclick="booklist('check<\%= id %>')">
                <a id="div<\%= id %>" title='price=<\%= price %>; &#013;column No=<\%= widthNo %>; &#013;row No=<\%= lengthNo %>;' href='#<\%= id %>'><\%= id %></a>
            </div>
            <!--td><\%= price %></td>
            <td><\%= idMap %></td>
            <td><\%= lengthNo %></td>
            <td><\%= widthNo %></td-->
        </script>

        <script type='text/template' id='tpl-seatmap-details'>
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
            <td>price</td><td><input type='text' id='price' name='price' value='<\%= price %>'/></td></tr>
            <tr>
            <td>idMap</td><td><input disabled type='text' id='idMap' name='idMap' value=<%= request.getParameter("id")%>></td></tr>
            <tr>
            <td>Row No</td><td><input type='text' id='lengthNo' name='lengthNo' value='<\%= lengthNo %>'/></td></tr>
            <tr>
            <td>Column No</td><td><input type='text' id='widthNo' name='widthNo' value='<\%= widthNo %>'/></td></tr>
            </tbody>
            </table>
            <!--
            Put your controls to create new entity here.
            Classes 'save' and 'delete' are used to listen on events in JS code.
            -->
            <button  class='save'>Save</button>
            <button  class='delete'>Delete</button>
            <button  class='cancel'>Cancel</button>
            </div>
        </script>

        <script type='text/template' id='thead'>
            <thead>
            <tr>
            <th>id</th>
            <th>idSeat</th>
            <th>date</th>
            </tr>
            </thead>
        </script>
        <script type='text/template' id='tpl-bookinfo-list-item'>
            <td><\%= id %></td>
            <td><\%= idSeat %></td>
            <td><\%
                var d = new Date(date), // or d = new Date(date)
                fragments = [
                    d.getMonth() + 1,
                    d.getDate(),
                    d.getFullYear()
                ]; 
                print(fragments.join('/'));            
            %></td>
        </script>

    </body>
</html>
