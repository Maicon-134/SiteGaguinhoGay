<?php
$index = __DIR__ . '/index.html';
if (is_file($index)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($index);
    exit;
}
http_response_code(404);
echo 'Arquivo index.html nao encontrado.';
