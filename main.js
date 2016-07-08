$.ajax({
  url: 'http://tiny-za-server.herokuapp.com/collections/tgToDoList',
  dataType: 'json',
  type: 'GET',
  success: function( response ){
    console.log( response );
    
  } 
});
