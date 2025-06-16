//Parte 1: Declaración y Asignación de Variables
console.log("Parte 1")


// Asignación a la variable del nombre de mi empresa favorita
let company= "Google";

// Asignación a la variable la cantidad de productos en el almacén
let products= 150;

// Asignación a la variable el precio unitario de un artículo en decimal
let price=  29.99;

// Asignación a la variable para señalar si un sistema o usuario está actualmente True (activo)
let activo= true

// Asignación a la variable los puntos con el valor inicial sumandole los nuevos puntos
let punctuation= 100
punctuation+= 20;


// Impresion de la variable company para mostrar el nombre de la empresa favorita
console.log("El nombre de mi empresa favorita es: " + company);

// Impresion de la variable products para mostrar la cantidad de productos existentes en el almacén
console.log("La cantidad de productos en el almacén es: " + products);

// Impresion de la variable price para mostrar el precio unitario de un artículo
console.log("El precio unitario de un artículo es: " + price);

// Impresion de la variable activo para mostrar que el sistema o usuario que esta activo con un: true
console.log("El sistema o usuario está actualmente activo? " + activo)

// Impresion de la variable punctuation para mostrar la suma de los nuevos puntos
console.log("El nuevo total de puntos es: " + punctuation)





//Parte 2: Identificación de Tipos de Datos
console.log("Parte 2")


// Asignación a la variable un código postal "05001" 
let postal_code= "05001";

// Asignación a la variable el número de empleados en una sucursal que es: 50
let employees= 50;

// Asignación a la variable un valor de 0.19 interpretandolo como un numero decimal
let percentage= parseFloat(0.19)

// Asignación a la variable un valor false
let availability= false

// Asignación a las variables unos datos sobre alimales
let animal = "perro";
let number_paws = 4;
let is_mammal = true;


/*Impresion de la variable postal_code donde me indica el tipo de dato;
pero como el dato esta entre comillas lo tomara como un string y no lo puedo poner sin comillas;
porque no toma como un numero, con el inicial 0*/
console.log("El tipo de dato del codigo postal " + postal_code + " es: " + typeof postal_code )

//Impresion de la variable employees donde se muestra el tipo de dato de la cantidad de empleados de una sucursal que es: 50
console.log("El tipo de dato de " + employees + " empleados de una sucursal es: " + typeof employees)

/* Impresion de la variable percentage donde se muestra el valor y tipo de variable,
aunque lo interprete como un número decimal se me mostrara como tipo de dato number;
ya que el tipo de dato decimal en sí no existe en JavaScript*/
console.log("El valor del IVA " + percentage + " es un tipo de dato: " + typeof percentage)

/*Impresion de la variable availability con el valor false;
para mostrar su tipo de dato; 
asegurando que me arroje el tipo de dato booleano*/
console.log("La variable disponible con el valor " + availability + " es un tipo de dato: " + typeof availability)

//Impresion de las variables (animal, number_paws, is_mammal) para asegurar su tipo de dato
console.log("El tipo de datos del animal " + animal + " es: " + typeof animal)
console.log("El tipo de datos del numero de patas " + number_paws + " es: " + typeof number_paws)
console.log("El tipo de datos de ¿es mamífero? " + is_mammal + " es: " + typeof is_mammal)