
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
      $entry.find('#x').attr( 'data-id', item._id ).on('click', function(evt){
        console.log(evt);
      });

      $('.container').append( $entry );
    });
  }
});

// DELETE entry elements on click of the `x` icon


// POST - on enter key press - append value from input `#do` to server
// append to $entry
