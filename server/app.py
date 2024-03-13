from flask import Flask, render_template, request, jsonify
from inserirNaTabela import inserirNaTabela
from conectarBancoDados import conectarBancoDeDados

app = Flask(__name__, template_folder="../client/templates", static_folder = '../client/service')

@app.route("/")
def index(): 
    cursor, conn = conectarBancoDeDados()
    cursor.execute('select id from informacao_usuarios')
    opcoes = [row[0] for row in cursor.fetchall()]
    return render_template("index.html", opcoes = opcoes)

@app.route("/handle_post/", methods = ["POST"])

def handle_post(): 
    return render_template('index.html')

@app.route("/criar/<string:primeiro_nome>/<string:sobre_nome>/<int:cep>/<string:rua>/<string:cidade>/<string:uf>/<string:bairro>/<int:numero>/<string:complemento>/<string:profissao>", methods = ["POST"])
def criar(primeiro_nome, sobre_nome, cep, rua, cidade, uf, bairro, numero, complemento, profissao):
    cursor, conn = conectarBancoDeDados()
    cursor.execute("insert into informacao_usuarios (primeiro_nome, sobre_nome, cep, rua, cidade, uf, bairro, numero, complemento, profissao) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", 
                  (primeiro_nome, sobre_nome, cep, rua, cidade, uf, bairro, numero, complemento, profissao) )
    conn.commit()
    return "um dado foi criado"


@app.route("/detalhes/<int:id>", methods=["GET"])
def detalhes(id):
    cursor, conn = conectarBancoDeDados()
    cursor.execute("SELECT * FROM informacao_usuarios WHERE id = %s", (id,))
    detalhes = cursor.fetchone()
    return jsonify(detalhes=detalhes)

@app.route("/atualizar/<int:id>/<string:primeiro_nome>/<string:sobre_nome>/<int:cep>/<string:rua>/<string:cidade>/<string:uf>/<string:bairro>/<int:numero>/<string:complemento>/<string:profissao>", methods = ["POST"])
def atualizar(id, primeiro_nome, sobre_nome, cep, rua, cidade, uf, bairro, numero, complemento, profissao):
    cursor, conn = conectarBancoDeDados()
    cursor.execute("update informacao_usuarios set primeiro_nome = %s, sobre_nome = %s, cep = %s, rua = %s, cidade = %s, uf = %s, bairro = %s, numero = %s, complemento = %s, profissao = %s where id = %s",
                           (primeiro_nome, sobre_nome, cep, rua, cidade, uf, bairro, numero, complemento, profissao, id))
    conn.commit()
    return "atualização realizada com sucesso"

@app.route("/deletar/<int:id>", methods = ["DELETE"])
def deletar(id):
    cursor, conn = conectarBancoDeDados()
    cursor.execute("delete from informacao_usuarios where id = %s", (id,))
    conn.commit()
    return "linha deletada com sucesso"


@app.route("/pegarDados", methods = ["GET"])
def pegarDados():
    cursor, conn = conectarBancoDeDados()
    cursor.execute("select * from informacao_usuarios;")
    resultados = cursor.fetchall()
    return str(resultados)

if __name__ == "__main__":
    app.run(port=5000, debug=True)