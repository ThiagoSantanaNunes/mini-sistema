<h1>Instruções de Execução da Aplicação</h1>
Este guia contém as instruções necessárias para configurar e executar a aplicação, que consiste em um frontend em JavaScript e um backend em Flask, com um banco de dados MySQL.

<h1>Pré-requisitos</h1>
Certifique-se de ter o seguinte instalado em sua máquina:

<li>Python 3</li>
<li>Flask (pode ser instalado via pip).</li>
<li>MySQL Server.</li>
<li>Configuração do Banco de Dados.</li>
<li>Instale o MySQL Server em sua máquina, se ainda não estiver instalado.</li>
<li>Crie um banco de dados MySQL e anote as credenciais (nome do banco de dados, usuário e senha).</li>

<h1>Configuração do Backend</h1>

Navegue até o diretório do backend:
cd crud/server

<h1>Instale as dependências do Python:</h1>

<li>blinker                1.7.0</li>
<li>click                  8.1.7</li>
<li>colorama               0.4.6</li>
<li>Flask                  3.0.2</li>
<li>itsdangerous           2.1.2</li>
<li>Jinja2                 3.1.3</li>
<li>MarkupSafe             2.1.5</li>
<li>mysql-connector-python 8.3.0</li>
<li>pip                    24.0</li>
<li>Werkzeug               3.0.1</li>

<h1>Inicie o servidor Flask:</h1>

python app.py
O servidor irá rodar por padrão em http://localhost:5000.
