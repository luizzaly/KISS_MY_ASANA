/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')
var channelName = 'Asana Rebel'

$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: 'contentDetails',
      forUsername: channelName,
      key: 'AIzaSyBiBqrlAqc0ZPiur8d39fPSRH5JWVf63oQ'},
      function(data){
          console.log(data)
          $.each(data.items, function(i, item){
            pid = item.contentDetails.relatedPlaylists.uploads;
            getVids(pid);

          })
      }

  );

  function getVids(pid) {
    $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",{
      part: 'snippet',
      maxResults: 10,
      playlistId: pid,
      key: 'AIzaSyBiBqrlAqc0ZPiur8d39fPSRH5JWVf63oQ'},
      function(data){
        var output;
          $.each(data.items, function(i, item){
            videTitle = item.snippet.title;

            output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';

            //Append to results listStyleType
            $('#results').append(output);

          })
      }

  );

  }
});
