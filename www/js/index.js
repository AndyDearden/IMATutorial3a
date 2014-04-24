/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        $(document).addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },


    updateNurseList: function() {

           $.ajax ({
              dataType: "html",
              url: "http://localhost/~student/IMATutorial3a/www/nursesListing.json",
    
              success: function (data) {
              var nurses = $.parseJSON(data); // convert the response to a JSON object
              alert ("got the data successfully");
              app.nurses_data = nurses;

              for (index = 0; index < nurses.length; ++index) {
// Maybe you could subnavigate the specialisms
// list here and add a "tag" for each specialism
                  $("#NurseList").append ("<li " +
"onClick=\"javascript:app.showNurseDetails("+nurses[index].id+");\">"+
  
                  "<h3>"+
                  nurses[index].forename+", "+ nurses[index].surname + "</h3><p>Grade"+
                  nurses[index].grade+"</p></a></li>");
                  }

              }
            });

      //        $("#NurseList").listview ("refresh");
      },

      showNurseDetails: function(nurse_id) {
        alert("Show nurse details "+nurse_id);
        var nurse_to_show
          for (index = 0; index < app.nurses_data.length; ++index) {
            if ( app.nurses_data[index].id == nurse_id ) {
               nurse_to_show = app.nurses_data[index]
            }
          }
        if ( nurse_to_show != null ) {
            $("#NurseDetailsHeader").html("<h1>"+ nurse_to_show.surname+", "+nurse_to_show.forename + "</h1>");
            $("#NurseDetailsContent").html("Grade "+nurse_to_show.grade);
        }
        $.mobile.pageContainer.pagecontainer("change", "#NurseDetails");
      }



}




