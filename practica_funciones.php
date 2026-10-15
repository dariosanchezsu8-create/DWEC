<?php
//PRACTICA CON FUNCIONES CLOUSURES Y FN
$tasaCambio=1.08;
$aDolaresAnonima=0.0;
$aDolaresAnonima=function($importe) use($tasaCambio):float{
    return $importe*$tasaCambio;

};
$aDolaresAnonima2=fn($importe)=>$importe*$tasaCambio;
    echo $aDolaresAnonima2(210)."€";
    echo"<br>";
    echo"-------------";
    echo"<br>";
    echo $aDolaresAnonima(100)."€";
?>


<?php
$contador=0;
$nombres=["Yandel","Luar","Almighty","Noriel","Ana"];
$resultado=function($nombres) use($contador){
    foreach($nombres as $valor){
        if(isset($valor)){
            $contador++;
        }
    }
    echo $contador;
};
echo"<br>";
echo"-------------";
echo"<br>";
$resultado($nombres);
//Las funciones fn no admiten bucles sino operaciones directas
//tampoco admite variables pasadas por referencia
//$resultado2=fn($nombres)=>foreach($nombres=>$valor){ contador++};







//PRACTICA CON FUNCIONES SUPERIORES FILTER,MAP Y REDUCE
$precios=[10,20,50,100];
function descuento( int $n){
    return $n*0.80;


}
echo "<br>";
//La funcion hay que ponerla entre comillas
$precioFinal=array_map('descuento',$precios);
print_r($precioFinal);

echo "<br>";

//Otra alternativa aun mas corta
$preciosFinal=array_map(fn($n)=>$n*0.80,$precios);
print_r($precioFinal);

echo "<br>";

$edades=[12,17,18,25,14,30];
$mayores=array_filter($edades,fn($n)=>$n>=18);
print_r($mayores);
echo "<br>";

//Otra alternativa 
function mayorEdad(int $n){
    return $n>17;
}
$mayores=array_filter($edades,'mayorEdad');
print_r($mayores);
echo "<br>";

$gastosSemanales=[15.50,40.00,5.25,12.00];
$total=array_reduce($gastosSemanales,fn($suma,$n)=>$suma+=$n,0);
echo $total;
//Otra alternativa 
function sumatorio(int $suma,int $n){
    $suma+=$n;
    return $suma;
}
echo "<br>";
$total=array_reduce($gastosSemanales,'sumatorio',0);
echo $total;


//EJERCICIOS AVANZADOS
$productos = [
    ["nombre" => "Camiseta", "precio" => 20],
    ["nombre" => "Pantalón", "precio" => 45],
    ["nombre" => "Zapatos", "precio" => 80]
];

function iva(array $n){
    $resultado=$n['precio']*1.21;    
    $resultado=$resultado.round(2);
    return $resultado;
}
echo "<br>";

$total=array_map('iva',$productos);
print_r($total);
echo "<br>";

$usuarios = [
    ["nombre" => "Ana", "edad" => 17, "estado" => "activo"],
    ["nombre" => "Carlos", "edad" => 22, "estado" => "activo"],
    ["nombre" => "Beatriz", "edad" => 30, "estado" => "inactivo"],
    ["nombre" => "David", "edad" => 19, "estado" => "activo"]
];

$finalistas=array_filter($usuarios,fn($n)=>$n['edad']>17 && $n['estado']==="activo");
print_r($finalistas);
echo "<br>";

$notas = [3.5, 6.0, 4.2, 8.5, 9.0, 2.0, 7.5];
$aprobados=array_filter($notas,fn($n)=>$n>=5.0);
$longitud=count($aprobados);
$sumatorio=array_reduce($aprobados,fn($suma,$n)=>$suma+=$n,0);
$media=$sumatorio/$longitud;
echo $media;

echo "<br>";



//FUNCIONES DE ORDENACION
//SI DEVUELVE UNO LA FUNCION MAYOR A MENOR SINO MENOR A MAYOR
$numeros = [15, 3, 9, 27, 8];
$ordenado = usort($numeros, fn($a, $b) => $a <=> $b);
print_r($numeros);

echo "<br>";

$juegos = [
    ["titulo" => "Zelda", "horas" => 50],
    ["titulo" => "Tetris", "horas" => 10],
    ["titulo" => "Cyberpunk", "horas" => 35]
];
$resulado=usort($juegos,fn($a, $b) => $a['horas'] <=> $b['horas']);
print_r($juegos);

echo "<br>";

$puntuaciones = [
    "Ana" => 450,
    "Carlos" => 890,
    "Beatriz" => 620,
    "David" => 300
];

//Los array asociativos para ordenar es igual que los normales
//lo unico que cambia son en los array multidimensionales
uasort($puntuaciones, fn($a, $b) => $b <=> $a);

print_r($puntuaciones);

?>