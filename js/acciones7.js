// JavaScript Document
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){ //escuchador de eventos
	   $('#izquierda').on("swipeleft",function(){ //deslizar a la izquierda
		   navigator.notification.alert("dezlizó hacia la izquierda",function(){"aplicación 7", "ok"}); //aparece mensaje alert
	   }); //cierra swipeleft
	   $('#Derecha').on("swiperight",function(){ //deslizar derecha
		   navigator.notification.confirm("¿que quieres hacer?",function(op){ //aparece mensaje para confirmar
			   switch(op) //variable op para las opciones
			   {
				   case 1:
				   navigator.notification.beep(1); //suena el dispositivo
				   break; 
				   
				   case 2:
				   navigator.notification.vibrate(3000); //vibra el dispositivo
				   break;
			   }
		   },"aplicacion7","beepear,vibrar,cancelar");
		   });
	   },false);
   });