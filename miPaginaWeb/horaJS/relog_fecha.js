// JavaScript Document
var miReloj = function(){
		// Obtenemos la fecha actual, incluyendo las horas, minutos, segundos, dia de la semana, dia del mes, mes y año; mediante los metodos getHours(), getMinutes....etc
	    var miFecha = new Date();
		
		var horas = miFecha.getHours(),ampm;
		var minutos = miFecha.getMinutes();
		var segundos = miFecha.getSeconds();
		var diaSemana = miFecha.getDay();
		var dia = miFecha.getDate();
		var mes = miFecha.getMonth();
		var year = miFecha.getFullYear();
	
		
		var p_hora = document.getElementById('horas');
		var p_AMPM = document.getElementById('ampm');
		var p_minuto = document.getElementById('minutos');
		var p_segundo = document.getElementById('segundos');
		var p_DiaSemana = document.getElementById('diaSemana');
		var p_dia = document.getElementById('dia');
		var p_mes = document.getElementById('mes');
		var p_year = document.getElementById('year');
		
		//como necesitamos los dias de la semana lo que hacmeos sera crear un arreglo con los dias de la semana 
		var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		p_DiaSemana.textContent = semana[diaSemana];
		
		p_dia.textContent = dia;//mostramos el dia
        
		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		
		p_mes.textContent = meses[mes];//mostraremos los meses
		
		p_year.textContent = year;//mostraremos los años
		
		p_hora.textContent = horas;//mostraremos las horas
		
		p_minuto.textContent = minutos;//mostramos los minutos
		
		p_segundo.textContent = segundos;//mostramos los segundos
		
	}
	
	var relojDinamico = setInterval(miReloj, 1000);
		
		miReloj();