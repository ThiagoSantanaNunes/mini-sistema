from conectarBancoDados import conectarBancoDeDados

def inserirNaTabela(dadosResgatados):
    cursor, conn = conectarBancoDeDados()

    schemaPadrao = 'usuarios'
    definirSchema = f'''use {schemaPadrao}'''
    cursor.execute(definirSchema)

    nomeDaTabela = "informacao_usuarios"
    inserirNaTabela = f'''insert into {nomeDaTabela} (primeiro_nome,
        sobre_nome,
        cep,
        rua,
        cidade,
        uf,
        bairro,
        numero,
        complemento,
        profissao) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'''
    cursor.execute(inserirNaTabela, dadosResgatados)
    conn.commit()
