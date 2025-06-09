function calcular(){
    const fila=parseInt(document.getElementById("fila").value);
    const columna=parseInt(document.getElementById("columna").value);
    const resultado=document.getElementById("resultado");
    if(fila < 1||fila > 8 || columna < 1|| columna > 8){
        alert("Numero no valido");
        return;
    }
    const movimientos=[
        [fila+2,columna+1],
        [fila+2,columna-1],
        [fila-2,columna+1],
        [fila -2,columna-1],
        [fila+1,columna+2],
        [fila+1,columna-2],
        [fila-1,columna+2],
        [fila-1,columna-2],
    ]
    let validos=[];
    for(let i=0;i<movimientos.length;i++){
        let [filas,columnas]=movimientos[i];
        if(filas>=1&& filas<=8 && columnas>=1 && columnas<=8){
            validos.push([filas,columnas])
        }
    }
    if(validos.length===0){
        resultado.textContent="No es un movimiento válido";
    }else{
        let texmovimientos=validos
        .map((posicion)=>`(${posicion[0]} ,${posicion[1]})`)
        .join(" , ");
        resultado.textContent=`El caballo en ${fila}, ${columna} puede moverse a:\n ${texmovimientos}`;

    }
}
