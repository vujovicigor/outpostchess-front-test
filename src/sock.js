//import io from "socket.io-client"
import io from "socket.io-client"
console.log('socket connect init');

var socket = io.connect('https://app.outpostchess.com/');
//window.socket = socket;
console.log('socket connect req');


socket.on('connect', async function(){
    console.log('socket connected, sending token:', localStorage.getItem('token'));
    //if (localStorage.getItem('token')) 
      //  socket.emit('client_token', localStorage.getItem('token'))
      socket.emit('client_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX2ZpcnN0IjoiIiwibmFtZV9sYXN0IjoiIiwiZW1haWwiOiJ2dWpvdmljaGlnb3JAZ21haWwuY29tIiwidXNlcl91dWlkIjoiZTk4YjgwMmUtNDUzYS0xMWVjLWJiYzQtMmE0YWQzNTc2OTgxIiwicm9sYSI6WyJQTEFZRVIiXSwicm9sZXNfaWQiOjIsImlhdCI6MTYzODkwNTA5NCwiZXhwIjoxNjcwNDYyNjk0fQ.1ZtpKNFpczVGT-nRcH-8K90dIJkl6arvIgEUQMie1k0');
});    

//socket.on('live_path', function(p){
//    console.log(p)
    //if (ractive) ractive.set('live_path', p)
//})

socket.on('server_message', function(type, text){
    console.log(type, text)
})
socket.test = function(){
    console.log('socket connect init');
}
export default  socket;