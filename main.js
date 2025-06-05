function calcular(){
    const fila=document.getElementById("fila").value;
    const columna=document.getElementById("columna").value;
    const resultado=document.getElementById("boton").value;
    if(fila>8 && columna>8){
        alert("Numero no valido")
    }
    for(let filas=0;i<fila;i++){
        filas+=2
    }
    for(let columnas;i<columna;i++){
        columnas+=1
    }
    resultado.push(fila + columna);
}

