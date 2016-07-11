
// for each item in collection, make entry element, pull `data.todo` into it,
// and append to the container

var elements;
// GET- show all todos on page load
$.ajax({
  url: 'http://tiny-za-server.herokuapp.com/collections/tgToDoList',
  dataType: 'json',
  type: 'GET',
  success: function( response ){
    response.forEach( function( item){
      var $entry = $('<section><i class="fa fa-ellipsis-h bullet"></i><span id="todo"></span><i class="fa fa-close close" id="x"></i></section>');
      $entry.find('#todo').append( item.todo );
      $entry.find('#x').attr( 'data-id', item._id ).on('click', del);
      $('.container').append( $entry );
    });
  }
});
// make a new entry - POST
var $post = $('#do');
$post.keyup( function( event ){
    if( event.keyCode === 13 ){
        $.ajax({
          url: 'http://tiny-za-server.herokuapp.com/collections/tgToDoList',
          contentType: 'application/json',
          type: 'POST',
          data: JSON.stringify ({
            "todo": event.target.value
          }),
          success: function( response ){
            $post.val('');
            var $entry = $('<section><i class="fa fa-ellipsis-h bullet"></i><span id="todo"></span><i class="fa fa-close close" id="x"></i></section>');
            $entry.find('#todo').append( response.todo );
            $entry.find('#x').attr( 'data-id', response._id ).on('click', del);
            $('.container').append( $entry );
            console.log('you made a post');
          }
        });
    }
});

function del(evt){
  var $id = $(this).data().id;
  console.log(event);
  var self = event.target;

  $.ajax({
    url: "http://tiny-za-server.herokuapp.com/collections/tgToDoList/" + $id,
    dataType: "json",
    type: "DELETE",
    success: function( response ){
      console.log( self );
    $( self ).parent().remove();
    }
  });
}

// POST - on enter key press - append value from input `#do` to server
// append to $entry
