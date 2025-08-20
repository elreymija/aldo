<?php
$user_message = strtolower(trim($_POST["message"]));

$responses = [
    "hola" => "¡Hola! ¿Cómo estás?",
    "como estas" => "Estoy bien, gracias. ¿Y tú?",
    "que puedes hacer" => "Puedo responderte con mensajes predefinidos porque estoy offline.",
    "adios" => "¡Hasta luego!"
];

// Respuesta por defecto
$response = "No entiendo lo que dices, pero puedo aprender si me programas 😄";

// Si el mensaje coincide con una clave, responde
if (array_key_exists($user_message, $responses)) {
    $response = $responses[$user_message];
}

echo $response;
?>
