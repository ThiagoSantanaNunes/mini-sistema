Instruções de Execução da Aplicação
Este guia contém as instruções necessárias para configurar e executar a aplicação, que consiste em um frontend em JavaScript e um backend em Flask, com um banco de dados MySQL.

Pré-requisitos
Certifique-se de ter o seguinte instalado em sua máquina:

Python 3
Flask (pode ser instalado via pip)
MySQL Server
Configuração do Banco de Dados
Instale o MySQL Server em sua máquina, se ainda não estiver instalado.
Crie um banco de dados MySQL e anote as credenciais (nome do banco de dados, usuário e senha).

Configuração do Backend
Navegue até o diretório do backend:
cd crud/server

Instale as dependências do Python:
pip install -r requirements.txt

blinker                1.7.0
click                  8.1.7
colorama               0.4.6
Flask                  3.0.2
itsdangerous           2.1.2
Jinja2                 3.1.3
MarkupSafe             2.1.5
mysql-connector-python 8.3.0
pip                    24.0
Werkzeug               3.0.1

Inicie o servidor Flask:
python app.py
O servidor irá rodar por padrão em http://localhost:5000.
