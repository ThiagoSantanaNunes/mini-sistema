import mysql.connector
def conectarBancoDeDados():
    try: 
        hostName = "127.0.0.1"
        dataBase = "usuarios"
        userName = "root"
        pwd = "mysql"
        conn = None
        cursor = None

        conn = mysql.connector.connect(
            host = hostName,
            user= userName,
            password = pwd,
            database = dataBase
        )

        cursor = conn.cursor()
        return cursor, conn
    except Exception as error:
        if cursor is not None: 
            cursor.close()
        if conn is not None:
            conn.close()