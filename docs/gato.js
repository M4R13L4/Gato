matrix=[2,2,2,2,2,2,2,2,2];
function revisar(boton){

	if(boton.innerHTML =='<i class="fa fa-spinner fa-4x" aria-hidden="true"></i>' && ganador()==2){
		boton.innerHTML ='<i class="fa fa-star fa-4x" aria-hidden="true"></i>';
	
		if(boton.id=='b0')
			matrix[0]=1;
		else if(boton.id=='b1')
			matrix[1]=1;
		else if(boton.id=='b2')
			matrix[2]=1;
		else if(boton.id=='b3')
			matrix[3]=1;
		else if(boton.id=='b4')
			matrix[4]=1;
		else if(boton.id=='b5')
			matrix[5]=1;
		else if(boton.id=='b6')
			matrix[6]=1;
		else if(boton.id=='b7')
			matrix[7]=1;
		else if(boton.id=='b8')
			matrix[8]=1;
		//La màquina hace su tiro
		tiro();			
	}
}
function inicial(){
	
	var x=parseInt(Math.random() * (5 -1) + 1);
	switch(x){
		case 1:
			matrix[0]=0;
			document.getElementById("b0").innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';
		break;
		case 2:
			matrix[2]=0;
			document.getElementById("b2").innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';
		break;
		case 3:
			matrix[6]=0;
			document.getElementById("b6").innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';
		break;
		case 4:
			matrix[8]=0;
			document.getElementById("b8").innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';
		break;
	}
}
//funciòn que regresa si ya gano alguien:1 si gano el user, 0si gana la maquina y 2 si aun no gana nadie o es empate
function ganador(){
	if((matrix[0]==0 && matrix[1]==0 && matrix[2]==0) || 
	   (matrix[3]==0 && matrix[4]==0 && matrix[5]==0) ||
	   (matrix[6]==0 && matrix[7]==0 && matrix[8]==0) ||
	   (matrix[0]==0 && matrix[4]==0 && matrix[8]==0) ||
	   (matrix[2]==0 && matrix[4]==0 && matrix[6]==0) ||
	   (matrix[0]==0 && matrix[3]==0 && matrix[6]==0) ||
	   (matrix[1]==0 && matrix[4]==0 && matrix[7]==0) ||
	   (matrix[2]==0 && matrix[5]==0 && matrix[8]==0)
		)
		return 0;	
	if((matrix[0]==1 && matrix[1]==1 && matrix[2]==1) || 
	   (matrix[3]==1 && matrix[4]==1 && matrix[5]==1) ||
	   (matrix[6]==1 && matrix[7]==1 && matrix[8]==1) ||
	   (matrix[0]==1 && matrix[4]==1 && matrix[8]==1) ||
	   (matrix[2]==1 && matrix[4]==1 && matrix[6]==1) ||
	   (matrix[0]==1 && matrix[3]==1 && matrix[6]==1) ||
	   (matrix[1]==1 && matrix[4]==1 && matrix[7]==1) ||
	   (matrix[2]==1 && matrix[5]==1 && matrix[8]==1)
		)
		return 1;
	return 2;	
}
//funcionque verifica que aun haya espacios para tirar
function hayEspacio(){
	for(i=0;i<9;i++){
		if(matrix[i]==2)
			return 1;
	}
	return 0;
}
//tiro de la maquina
function tiro(){
	//si gana el userno hace ningun otro tiro
	if(ganador()==1){
		document.getElementById("result").innerHTML="Ganaste";
		changeColor(1);
	}else{
		var aux=puedo_ganar();
		var aux2=puede_ganar();
		//primero lamaquina verifica si ya puede ganar, si si tira y gana
		if(aux > -1 ){
			document.getElementById("b"+aux).innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';
			matrix[aux]=0;
			document.getElementById("result").innerHTML="Yo gano, suerte para la pròxima C:";
			changeColor(0);

		}else if(aux2 > -1 ){
			//si no, verifica si el usuario puede ganar para poder bloquearlo
				matrix[aux2]=0;
				document.getElementById("b"+aux2).innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';
				if(hayEspacio()==0)
					document.getElementById("result").innerHTML="Empatamos";
				}else{
					//si ninguno puede ganar aun, hace un tiro aleatorio
					var pos=parseInt(Math.random() * 9);
					while(matrix[pos]!=2)
						pos=parseInt(Math.random() * 9);
					matrix[pos]=0;
					if(hayEspacio()==0)
						document.getElementById("result").innerHTML="Empatamos";	
					document.getElementById("b"+pos).innerHTML ='<i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>';


				}
	}
}

/*funcion que verifica si hay unaposibilidad de ganar con el tiro actual, en caso de haberlo
retorna el indice donde se deberà tirar para ganar en caso contrario devuelve -1 */
function puedo_ganar(){
	if(matrix[0]==0 && matrix[1]==0)
		if(matrix[2]==2)
			return 2;
	if(matrix[1]==0 && matrix[2]==0)
		if(matrix[0]==2)
			return 0;
	if(matrix[0]==0 && matrix[2]==0)
		if(matrix[1]==2)
			return 1;
	if(matrix[3]==0 && matrix[4]==0)
		if(matrix[5]==2)
			return 5;
	if(matrix[4]==0 && matrix[5]==0)
		if(matrix[3]==2)
			return 3;
	if(matrix[3]==0 && matrix[5]==0)
		if(matrix[4]==2)
			return 4;
	if(matrix[6]==0 && matrix[7]==0)
		if(matrix[8]==2)
			return 8;
	if(matrix[7]==0 && matrix[8]==0)
		if(matrix[6]==2)
			return 6;
	if(matrix[6]==0 && matrix[8]==0)
		if(matrix[7]==2)
			return 7;
	if(matrix[0]==0 && matrix[3]==0)
		if(matrix[6]==2)
			return 6;
	if(matrix[3]==0 && matrix[6]==0)
		if(matrix[0]==2)
			return 0;
	if(matrix[0]==0 && matrix[6]==0)
		if(matrix[3]==2)
			return 3;
	if(matrix[1]==0 && matrix[4]==0)
		if(matrix[7]==2)
			return 7;
	if(matrix[4]==0 && matrix[7]==0)
		if(matrix[1]==2)
			return 1;
	if(matrix[7]==0 && matrix[1]==0)
		if(matrix[4]==2)
			return 4;
	if(matrix[2]==0 && matrix[5]==0)
		if(matrix[8]==2)
			return 8;
	if(matrix[5]==0 && matrix[8]==0)
		if(matrix[2]==2)	
			return 2;
	if(matrix[2]==0 && matrix[8]==0)
		if(matrix[5]==2)
			return 5;
	if(matrix[0]==0 && matrix[4]==0)
		if(matrix[8]==2)
			return 8;
	if(matrix[4]==0 && matrix[8]==0)
		if(matrix[0]==2)
			return 0;
	if(matrix[0]==0 && matrix[8]==0)
		if(matrix[4]==2)	
			return 4;
	if(matrix[6]==0 && matrix[4]==0)
		if(matrix[2]==2)
			return 2;
	if(matrix[2]==0 && matrix[4]==0)
		if(matrix[6]==2)
			return 6;
	if(matrix[2]==0 && matrix[6]==0)
		if(matrix[4]==2)
			return 4;
	return -1;

}
/* funcion que verifica si usuario tiene una posibilidad de ganar, en ese caso
la funcion retorna laposición donde debera tirar la maquina para impedir que el usuario gane*/
function puede_ganar(){
	if(matrix[0]==1 && matrix[1]==1)
		if(matrix[2]==2)	
			return 2;
	if(matrix[1]==1 && matrix[2]==1)
		if(matrix[0]==2)
			return 0;
	if(matrix[0]==1 && matrix[2]==1)
		if(matrix[1]==2)
			return 1;
	if(matrix[3]==1 && matrix[4]==1)
		if(matrix[5]==2)
			return 5;
	if(matrix[4]==1 && matrix[5]==1)
		if(matrix[3]==2)
			return 3;
	if(matrix[3]==1 && matrix[5]==1)
		if(matrix[4]==2)
			return 4;
	if(matrix[6]==1 && matrix[7]==1)
		if(matrix[8]==2)	
			return 8;
	if(matrix[7]==1 && matrix[8]==1)
		if(matrix[6]==2)
			return 6;
	if(matrix[6]==1 && matrix[8]==1)
		if(matrix[7]==2)
			return 7;
	if(matrix[0]==1 && matrix[3]==1)
		if(matrix[6]==2)
			return 6;
	if(matrix[3]==1 && matrix[6]==1)
		if(matrix[0]==2)
			return 0;
	if(matrix[0]==1 && matrix[6]==1)
		if(matrix[3]==2)
			return 3;
	if(matrix[1]==1 && matrix[4]==1)
		if(matrix[7]==2)
			return 7;
	if(matrix[4]==1 && matrix[7]==1)
		if(matrix[1]==2)
			return 1;
	if(matrix[7]==1 && matrix[1]==1)
		if(matrix[4]==2)	
			return 4;
	if(matrix[2]==1 && matrix[5]==1)
		if(matrix[8]==2)
			return 8;
	if(matrix[5]==1 && matrix[8]==1)
		if(matrix[2]==2)
			return 2;
	if(matrix[2]==1 && matrix[8]==1)
		if(matrix[5]==2)	
			return 5;
	if(matrix[0]==1 && matrix[4]==1)
		if(matrix[8]==2)	
			return 8;
	if(matrix[4]==1 && matrix[8]==1)
		if(matrix[0]==2)
			return 0;
	if(matrix[0]==1 && matrix[8]==1)
		if(matrix[4]==2)	
			return 4;
	if(matrix[6]==1 && matrix[4]==1)
		if(matrix[2]==2)	
			return 2;
	if(matrix[2]==1 && matrix[4]==1)
		if(matrix[6]==2)
			return 6;
	if(matrix[2]==1 && matrix[6]==1)
		if(matrix[4]==2)	
			return 4;
	return -1;

}
/* funcion que cambia de color la jugada ganadora*/
function changeColor(opc){
	if(opc==0){
		if(matrix[0]==0 && matrix[1]==0 && matrix[2]==0){
			document.getElementById('b00').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b0"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b01').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b1"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b02').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b2"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[3]==0 && matrix[4]==0 && matrix[5]==0){
			document.getElementById('b03').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b3"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b05').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b5"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[6]==0 && matrix[7]==0 && matrix[8]==0){
			document.getElementById('b06').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b6"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b07').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b7"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b08').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b8"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[0]==0 && matrix[4]==0 && matrix[8]==0){
			document.getElementById('b00').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b0"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b08').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b8"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[2]==0 && matrix[4]==0 && matrix[6]==0){
			document.getElementById('b02').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b2"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b06').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b6"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[0]==0 && matrix[3]==0 && matrix[6]==0){
			document.getElementById('b00').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b0"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b03').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b3"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b06').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b6"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[1]==0 && matrix[4]==0 && matrix[7]==0){
			document.getElementById('b01').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b1"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b07').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b7"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[2]==0 && matrix[5]==0 && matrix[8]==0){
			document.getElementById('b02').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b2"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b05').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b5"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b08').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b8"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i></button>';
		}
	}else if(opc==1){
		if(matrix[0]==1 && matrix[1]==1 && matrix[2]==1){
			document.getElementById('b00').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b0"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b01').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b1"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b02').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b2"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[3]==1 && matrix[4]==1 && matrix[5]==1){
			document.getElementById('b03').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b3"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b05').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b5"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[6]==1 && matrix[7]==1 && matrix[8]==1){
			document.getElementById('b06').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b6"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b07').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b7"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b08').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b8"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[0]==1 && matrix[4]==1 && matrix[8]==1){
			document.getElementById('b00').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b0"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b08').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b8"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[2]==1 && matrix[4]==1 && matrix[6]==1){
			document.getElementById('b02').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b2"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b06').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b6"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[0]==1 && matrix[3]==1 && matrix[6]==1){
			document.getElementById('b00').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b0"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b03').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b3"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b06').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b6"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[1]==1 && matrix[4]==1 && matrix[7]==1){
			document.getElementById('b01').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b1"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b04').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b4"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b07').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b7"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}else if(matrix[2]==1 && matrix[5]==1 && matrix[8]==1){
			document.getElementById('b02').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b2"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b05').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b5"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
			document.getElementById('b08').innerHTML='<button class="btn btn-outline-success btn-block" onclick="revisar(this)" id="b8"><i class="fa fa-star fa-4x" aria-hidden="true"></i></button>';
		}
	}	
}
