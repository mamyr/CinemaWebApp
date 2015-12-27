/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = {
    // Create this closure to contain the cached modules
    module: function () {
        // Internal module cache.
        var modules = {};
        
        // Create a new module reference scaffold or load an
        // existing module.
        return function (name) {
            // If this module has already been created, return it.
            if (modules[name]) {
                return modules[name];
            }
            
            // Create a module and save it under this name
            return modules[name] = {Views: {}};
        };
    }()
};

var idMap = location.search.substring(1, location.search.length).split('&')[0].split('=')[1];
var loc_bookDate = location.search.substring(1, location.search.length).split('&')[1].split('=')[1];
bookDate = loc_bookDate.split("/")[2]+"-"+loc_bookDate.split("/")[0]+"-"+loc_bookDate.split("/")[1];

(function (models) {
    
// Model for Seatmap entity
    models.Seatmap = Backbone.Model.extend({
        urlRoot: "http://localhost:8084/CinemaWebApp/webresources/cinema.entities.seatmap/",
        idAttribute: 'id',
        defaults: {
            price: "",
            idMap: idMap,
            lengthNo: "",
            widthNo: ""
        },
        validation: {
            idMap: {
                min: 1,
                required: true,
                msg: " required and must be number"
            },
            price: {
                required: true,
                min: 1,
                msg: " required and must be number"
            },
            lengthNo: {
                required: true,
                min: 1,
                msg: " required and must be number"
            },
            widthNo: {
                required: true,
                min: 1,
                msg: " required and must be number"
            }
        },
        toViewJson: function () {
            var result = this.toJSON(); // displayName property is used to render item in the list
            result.displayName = this.get('id');
            return result;
        },
/*        isNew: function () {
            // default isNew() method imlementation is
            // based on the 'id' initialization which
            // sometimes is required to be initialized.
            // So isNew() is rediefined here
            return this.notSynced;
        },*/
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            
            if (method == 'create') {
                options.url = 'http://localhost:8084/CinemaWebApp/webresources/cinema.entities.seatmap/';
            }
            if (method == 'update') {
                options.url = 'http://localhost:8084/CinemaWebApp/webresources/cinema.entities.seatmap/';
            }
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
        
        
    });
    
    
    // Collection class for Seatmap entities
    models.SeatmapCollection = Backbone.Collection.extend({
        model: models.Seatmap,
        url: "http://localhost:8084/CinemaWebApp/webresources/cinema.entities.seatmap/"+idMap+"/",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
    });
// Model for Map entity
    models.Map = Backbone.Model.extend({
        urlRoot: "http://localhost:8084/CinemaWebApp/webresources/cinema.entities.map/",
        idAttribute: 'id',
        defaults: {
            name: "",
            width: "",
            length: ""
        },
        toViewJson: function () {
            var result = this.toJSON(); // displayName property is used to render item in the list
            result.displayName = this.get('name');
            return result;
        },
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
        
        
    });
    // Collection class for Map entities
    models.MapCollection = Backbone.Collection.extend({
        model: models.Map,
        url: "http://localhost:8084/CinemaWebApp/webresources/cinema.entities.map/",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
    });
// Model for Bookinfo entity
    models.Bookinfo = Backbone.Model.extend({
        urlRoot: "http://localhost:8084/CinemaWebApp/webresources/cinema.entities.bookinfo/"+loc_bookDate+"/",
        idAttribute: 'id',
        defaults: {
            idSeat: "",
            date: bookDate
        },
        toViewJson: function () {
            var result = this.toJSON(); // displayName property is used to render item in the list
            result.displayName = this.get('id');
            return result;
        },
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request Bookinfo');
                }}
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
        
        
    });
    
    
    // Collection class for Bookinfo entities
    models.BookinfoCollection = Backbone.Collection.extend({
        model: models.Bookinfo,
        url: "http://localhost:8084/CinemaWebApp/webresources/cinema.entities.bookinfo/"+loc_bookDate+"/",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request BookinfoCollection');
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
    });
    
})(app.module("models"));

(function (views) {
        var models = app.module("models");

    /////////////////////////////    
    var mapCollection = new models.MapCollection();
            mapCollection.fetch({
                success: function () {
                    console.log('success map fetch!');
                },
                    error : function(err) {
                        console.log('error callback');
                        // this error message for dev only
                        alert('There was an error. See console for details');
                        console.log(err);
                    }
            });
////////////////////
    views.BookListView = Backbone.View.extend({
        tagName: 'tbody',
        initialize: function (options) {
            this.options = options || {};
            this.model.bind("reset", this.render, this);
        },
        render: function (eventName) {
            var self = this;
            _.each(this.model.models, function (modelName) {
                $(this.el).append(new views.BookListItemView({
                    model: modelName,
                    templateName: self.options.templateName
                }).render().el);
            }, this);
            return this;
        }
    });
    
    views.BookListItemView = Backbone.View.extend({
        tagName: 'tr',
        initialize: function (options) {
            this.options = options || {};
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },
        template: function (json) {
            /*
             *  templateName is element identifier in HTML
             *  $(this.options.templateName) is element access to the element
             *  using jQuery 
             */ 
            console.log('template='+this.options.templateName);
            return _.template($(this.options.templateName).html())(json);
        },
        render: function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },
        close: function () {
            var table = $(this.el).parent().parent();
            table.trigger('disablePager');
            $(this.el).unbind();
            $(this.el).remove();
            table.trigger('enablePager');
        }
        
    });
    
////////////////////////
    views.ConfirmView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};
        },
        render: function (eventName) {
            $(this.el).html(this.template());
            return this;
        },
        template: function () {
            /*
             *  templateName is element identifier in HTML
             *  $(this.options.templateName) is element access to the element
             *  using jQuery 
             */
            return _.template($(this.options.templateName).html());
        },
        /*
         *  Classes "save"  and "delete" are used on the HTML controls to listen events.
         *  So it is supposed that HTML has controls with these classes.
         */
        events: {
            "click .confirm": "confirm",
        },
        confirm: function () {
            // TODO : put save code here
            var length = mapCollection.get(idMap).get("length");
            var width = mapCollection.get(idMap).get("width");
            var confirmlist = $('#confirmlist');

            var liChildren = confirmlist.children();                
            var childrenLength = liChildren.length;
            var pairExists, lastRow = false;
            var lastRowArr = [], pairExistsArr = [];
            
            for(var i = 0; i < childrenLength; i++){
                var idSeat = Number(liChildren[i].innerHTML.split(":")[0]);
                var widthNo = Number(liChildren[i].innerHTML.split(":")[1].split(";")[1].split("=")[1]);
                var lengthNo = Number(liChildren[i].innerHTML.split(":")[1].split(";")[2].split("=")[1]);
                var j = 0;
                if((length-lengthNo)<2){
                    lastRow = true;
                    lastRowArr.push(liChildren[i]);
                    pairExists = false;
                    while(j<childrenLength && !pairExists){
                        var idSeatP = Number(liChildren[j].innerHTML.split(":")[0]);
                        var widthNoP = Number(liChildren[j].innerHTML.split(":")[1].split(";")[1].split("=")[1]);
                        var lengthNoP = Number(liChildren[j].innerHTML.split(":")[1].split(";")[2].split("=")[1]);
                        
                        if(((widthNo+1)==widthNoP || (widthNo-1)==widthNoP) && lengthNoP==lengthNo){
                            pairExists = true;
                            pairExistsArr.push(liChildren[i]);
                        }
                        j++;
                    }
                }
            }            
            //If not all last row elements have pairs
            if((lastRowArr.length-pairExistsArr.length)!=0){
                $(".bookerror").show();
                pairExists = false;
            }
            else
                pairExists = true;
            // Save only if there's no last rows or if last row with pairExists=true
            if(!lastRow || pairExists)
                this.save();
            
            return false;
        },
        save: function(){
            var confirmlist = $('#confirmlist');
            var liChildren = confirmlist.children();                
            var childrenLength = liChildren.length;
            this.bookArr = [];
            var self =this;
            
            for(var i = 0; i < childrenLength; i++){
                var idSeat = liChildren[i].innerHTML.split(":")[0];
                var bookModel = this.options.model;
                
                bookModel.set({
                    idSeat: idSeat,
                    date: bookDate
                });
                
                this.options.bookcollection.create(bookModel,{
                    success: function () {
                        // see isNew() method implementation in the model
                        //self.model.notSynced = false;
                        //self.options.navigate(self.model.id);
                        alert("Model is successfully saved");
                        var li_elem = $("#li"+bookModel.idSeat);
                        li_elem.remove();
                        self.bookArr.push(li_elem);
                        if((self.bookArr.length-childrenLength)==0){
                            window.location.assign(window.location.href);
                        }
                    },
                    error : function(err) {
                        console.log('error callback');
                        // this error message for dev only
                        alert('There was an error. See console for details');
                        console.log(err);
                    }
                });
            }
        }
        
    });
    
//////////////////////    
    views.ListView = Backbone.View.extend({
        tagName: 'tbody',
        initialize: function (options) {
            this.options = options || {};
            this.model.bind("reset", this.render, this);
        },
        render: function (eventName) {
            var self = this;
            var length = mapCollection.get(idMap).get("length");
            var width = mapCollection.get(idMap).get("width");
            var i = 1;
            var j = 1;
            //Hall map is drawn here
            _.each(this.model.models, function (modelName) {
                if(j==1){
                    $(this.el).append("<tr id="+i+">").append(new views.ListItemView({
                        model: modelName,
                        bookcollection: self.options.bookcollection,
                        templateName: self.options.templateName
                    }).render().el);
                    j++;
                }
                else if(j==width){
                    $(this.el).append(new views.ListItemView({
                        model: modelName,
                        bookcollection: self.options.bookcollection,
                        templateName: self.options.templateName
                    }).render().el).append("</tr>");
                    j=1;
                    i++;
                }
                else{
                    $(this.el).append(new views.ListItemView({
                        model: modelName,
                        bookcollection: self.options.bookcollection,
                        templateName: self.options.templateName
                    }).render().el);
                    j++;
                }
            }, this);
            return this;
        }
    });
    
    views.ListItemView = Backbone.View.extend({
        tagName: 'td',
        initialize: function (options) {
            this.options = options || {};
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },
        template: function (json) {
            /*
             *  templateName is element identifier in HTML
             *  $(this.options.templateName) is element access to the element
             *  using jQuery 
             */ 
            return _.template($(this.options.templateName).html())(json);
        },
        render: function (eventName) {
            var self = this;
            
            if(this.options.bookcollection){
                var bookedSeats = this.options.bookcollection.find(
                            function(model) { 
                                return model.get('idSeat') == self.model.id; 
                            });
                if(bookedSeats !== undefined){
                    $(this.el).prop("class","lightblue");
                }
                else
                    $(this.el).class = "white";
            }

            $(this.el).html(this.template(this.model.toJSON()));
        
            return this;
        },
        close: function () {
        }
        
    });
    
    views.ModelView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};
            Backbone.Validation.bind(this, {
                model: this.model,
                
                valid: function(view, attr) {
                  // do something
                },
                invalid: function(view, attr, error) {
                  // do something
                    $(".validation-error").html($(".validation-error").html()+"<br>error:" +attr + error+"<br>Data won't be saved in database unless corrected!<br>");
                  _.each(error, function(attr, error){
                  });
                }
              });
            this.model.bind("change", this.render, this);
        },
        render: function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },
        template: function (json) {
            /*
             *  templateName is element identifier in HTML
             *  $(this.options.templateName) is element access to the element
             *  using jQuery 
             */
            return _.template($(this.options.templateName).html())(json);
        },
        /*
         *  Classes "save"  and "delete" are used on the HTML controls to listen events.
         *  So it is supposed that HTML has controls with these classes.
         */
        events: {
            "change input": "change",
            "click .save": "save",
            "click .delete": "drop",
            "click .cancel": "cancel"
        },
        cancel: function(event) {
            window.location.assign(window.location.href.split(window.location.hash)[0]);
        },
        change: function (event) {
            var target = event.target;
            console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
        },
        save: function () {
            // TODO : put save code here
            var hash = this.options.getHashObject();
            this.model.set(hash);
            
            var length = mapCollection.get(idMap).get("length");
            var width = mapCollection.get(idMap).get("width");
            
            if(this.model.isValid(true)){
                if (this.model.id=='') {
                    var self = this;
                    
                    var existSeat = this.options.collection.find(
                            function(model) { 
                                return model.get('lengthNo') == self.model.get("lengthNo") && model.get('widthNo') == self.model.get("widthNo"); 
                            });
                    
                    if(existSeat == undefined)
                        if(this.model.get('lengthNo')<=length && this.model.get('widthNo')<=width)
                            this.collection.create(this.model, {
                                success: function () {
                                    // see isNew() method implementation in the model
                                    //self.model.notSynced = false;
                                    //self.options.navigate(self.model.id);
                                    alert("Model is successfully saved");
                                    window.history.back();
                                },
                                error : function(err) {
                                    console.log('error callback');
                                    // this error message for dev only
                                    alert('There was an error. See console for details');
                                    console.log(err);
                                }
                            });
                        else
                            alert('Hall rows are '+length+' and columns are '+width+'\nInput mustn\'t exceed \nCheck row and column');
                    else
                        alert("This seat already exists!");
                } else {
                    this.model.save();
                    this.model.el.parent().parent().trigger("update");
                }
            }
            return false;
        },
        drop: function () {
            this.model.destroy({
                success: function () {
                    /*
                     *  TODO : put your code here
                     *  f.e. alert("Model is successfully deleted");
                     */  
                    alert("Model is successfully deleted");
                    window.history.back();
                }
            });
            return false;
        },
        close: function () {
            $(this.el).unbind();
            $(this.el).empty();
        }
    });
    
    // This view is used to create new model element for seatMap
    views.CreateView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};
            this.render();  
        },
        render: function (eventName) {
            $(this.el).html(this.template());
            return this;
        },
        template: function (json) {
            /*
             *  templateName is element identifier in HTML
             *  $(this.options.templateName) is element access to the element
             *  using jQuery 
             */
            return _.template($(this.options.templateName).html())(json);
        },
        /*
         *  Class "new" is used on the control to listen events.
         *  So it is supposed that HTML has a control with "new" class.
         */
        events: {
            "click .new": "create"
        },
        create: function (event) {
            this.options.navigate();
            return false;
        }
    });
    
})(app.module("views"));


$(function () {
    var models = app.module("models");
    var views = app.module("views");
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'list',
            'new': 'create'
            ,
            ':id': 'details'
        },
        initialize: function () {
            var self = this;
            $('#create').html(new views.CreateView({
                // tpl-create is template identifier for 'create' block
                templateName: '#tpl-create',
                navigate: function () {
                    self.navigate('new', true);
                }
            }).render().el);
        },
        list: function () {
            var self = this;
            console.log('listing..');
////////////////////////
            this.bookcollection = new models.BookinfoCollection();
            this.bookcollection.fetch({
                success: function () {
                    self.booklistView = new views.BookListView({
                        model: self.bookcollection,
                        // tpl-bookinfo-list-itemis template identifier for item
                        templateName: '#tpl-bookinfo-list-item'
                    });
                    $('#bookdatatable').html(self.booklistView.render().el).append(_.template($('#thead').html())());
                  /*  if (self.requestedId) {
                        self.details(self.requestedId);
                    }*/
                    var pagerOptions = {
                        // target the pager markup 
                        container: $('.pager'),
                        // output string - default is '{page}/{totalPages}'; possiblevariables: {page}, {totalPages},{startRow}, {endRow} and {totalRows}
                        output: '{startRow} to {endRow} ({totalRows})',
                        // starting page of the pager (zero based index)
                        page: 0,
                        // Number of visible rows - default is 10
                        size: 10
                    };
                    $('#bookdatatable').tablesorter({widthFixed: true,
                        widgets: ['zebra']}).
                            tablesorterPager(pagerOptions);
                }
            });
/////////////////////////
            this.collection = new models.SeatmapCollection();
            this.collection.fetch({
                success: function () {
                    console.log("success fetch!");
                    self.listView = new views.ListView({
                        model: self.collection,
                        bookcollection: self.bookcollection,
                        // tpl-seatmap-list-itemis template identifier for item
                        templateName: '#tpl-seatmap-list-item'
                    });
                    $('#datatable').html(self.listView.render().el);//.append(_.template($('#thead').html())());
                    if (self.requestedId) {
                        self.details(self.requestedId);
                    }
                    $('#datatable').tablesorter({widthFixed: true,
                        widgets: ['zebra']});
                },
                    error : function(err) {
                        console.log('error callback');
                        // this error message for dev only
                        alert('There was an error. See console for details');
                        console.log(err);
                    }
            });
////////////////////////////
            var bookModel = new models.Bookinfo();
            this.confirmview = new views.ConfirmView({
                model: bookModel,
                bookcollection: self.bookcollection,
                templateName: '#tpl-confirm-list'
            });
            $('#confirm').html(this.confirmview.render().el);

        },
        details: function (id) {
            if (this.collection) {
                this.seatmap = this.collection.get(id);
                if (this.view) {
                    this.view.close();
                }
                var self = this;
                this.view = new views.ModelView({
                    model: this.seatmap,
                    // tpl-seatmap-details is template identifier for chosen model element
                    templateName: '#tpl-seatmap-details',
                    getHashObject: function () {
                        return self.getData();
                    }
                });
                $('#details').html(this.view.render().el);
            } else {
                this.requestedId = id;
                this.list();
            }
        },
        create: function () {
            if (this.view) {
                this.view.close();
            }
            var self = this;
            var dataModel = new models.Seatmap();
            this.view = new views.ModelView({
                model: dataModel,
                collection: self.collection,
                // tpl-seatmap-details is a template identifier for chosen model element
                templateName: '#tpl-seatmap-details',
                navigate: function (id) {
                    self.navigate(id, false);
                },
                getHashObject: function () {
                    return self.getData();
                }
            });
            $('#details').html(this.view.render().el);
        },
        getData: function () {
            return {
                id: $('#id').val(),
                price: $('#price').val(),
                idMap: $('#idMap').val(),
                lengthNo: $('#lengthNo').val(),
                widthNo: $('#widthNo').val()
            };
        }
    });
    new AppRouter();
    
    
    Backbone.history.start();
});
