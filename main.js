$.ajax({
  url: 'http://tiny-za-server.herokuapp.com/collections/tgToDoList',
  dataType: 'json',
  type: 'POST',
  data: {
    "todo": "make a container"
  },
  success: function( response ){
    console.log( response );
    
  } 
});

$.ajax({
  url: "http://tiny-za-server.herokuapp.com/collections/tgToDoList",
  dataType: "json",
  type: "DELETE",
  data: {
    "_id": "577d773b69837d0300d191b2"
  },
  success: function( response ){
    console.log( response )
  }
});


