# cliente/paciente
# cadastro/login

#secretario -> informaçoes do paciente/ marcar exames
#medico -> condiçoes do paciente/agenda
users = {
    "secretaria":{
        "login": "ADMIN_SECRETARIA",
        "senha": "1234",
    },
    "medicos": {
        "login":"MED123_ADMIN",
        "senha": "9876",
        "consultas": []
    }    
}

def ver_exame(register):
    nome = forca_mensagem("nome: ", register.keys())
    print(register[nome]['exames'])

def ver_resultados(register):
    nome = forca_mensagem("nome: ", register.keys())
    print(register[nome]['resultados'])

def add_user(register):
    nome = input("nome: ")
    login = input("nome de login: ")
    idade = input("idade: ")
    rua = input("rua: ")
    cep = input("cep: ")
    bairro = input("bairro: ")
    senha = input("senha: ")
    register[nome] = {
        "nome" : nome,
        "idade" : idade,
        "endereço": {
            "cep" : cep,
            "rua": rua,
            "bairro": bairro
        },
        "exames": [],
        "senha": senha,
        "login": login,
        "resultados": []

    }
    return register

def login_user(register, keys):
    nome = input("nome: ")
    if nome not in keys:
        print("usuario nao encontrado, redirecionando para cadastro.")
        add_user(register)
        return register
    elif nome in keys:
        login = input("login: ")
        senha = input("senha: ")
        if (register[nome]['login'] == login and register[nome]['senha'] == senha):
            print("Acesso liberado!")
        else:
            print("acesso negado. tente novamente com credenciais corretas.")
            login_user(register, keys)


def change_info(register):
    nome = forca_mensagem("nome: ", register.keys())
    user_infos = register[nome]
    option = forca_mensagem("qual informação deseja mudar? (senha/login/endereço)",["senha", "login", "endereço"])
    if option == "senha":
        new_password = input("nova senha: ")
        user_infos['senha'] = new_password
    elif option == "login":
        new_login = input("novo login: ")
        user_infos["login"] = new_login
    elif option == "endereço":
        for keys in user_infos["endereço"]:
            new_info = input(f"novo/a {keys}: ")
            user_infos["endereço"][keys] = new_info


def check_infos(register):
    print(register.keys())
    nome = forca_mensagem("nome: ", register.keys())
    for key in register[nome].keys():
        print(f"{key}: {register[nome][key]}")

def forca_mensagem(mensagem: str, options: list):
    while True:
        try:
            inputed = input(mensagem)
            if inputed not in options:
                raise IndexError
            return inputed
        except IndexError:
            print("Opção inválida. Por favor, escolha uma opção válida.")

def login_medico(register):
    login = input("login: ")
    senha = input("senha: ")
    while login != register["medicos"]["login"] and senha != register["medicos"]["senha"]:
        login = input("login: ")
        senha = input("senha: ")

def secretaria_login(register):
    login = input("login: ")
    senha = input("senha: ")
    while login != register["secretaria"]["login"] and senha != register["secretaria"]["senha"]:
        login = input("login: ")
        senha = input("senha: ")

def marcar_exame(register):
    nome = forca_mensagem("nome do paciente: ", register.keys())
    exame = input("digite o nome do exame e o horário igual o exemplo(exame - 12h00): ")
    register[nome]['exames'].append(exame)

def menu_medico(register):
    while True:
        print("1 - Ver consultas marcadas")
        print("2 - Marcar novos exames")
        print("3 - Ver resultados exames")
        print("4 - Sair")
        medico_option = forca_mensagem("Digite a opção desejada: ", ["1", "2", "3", "4"])
        if medico_option == "1":
            print(register['medicos']['consultas'])
        elif medico_option == "2":
            marcar_exame(register)
        elif medico_option == "3":
            ver_resultados(register)
        else:
            print("encerrando sistema!")
            break


def menu_secretaria(register):
    while True:
        print("1 - Informações do paciente")
        print("2 - Marcar exame")
        print("3 - Sair")
        secretaria_option = forca_mensagem("Digite a opção desejada: ",["1", "2", "3"])
        if secretaria_option == "1":
            check_infos(register)
        elif secretaria_option == "2":
            marcar_exame(register)
        else:
            print("encerrando sistema!")
            break

def menu_geral():
    print("Olá! Bem vindo ao nosso sistema!\n"
          "ProntuCare: Tecnologia e Saúde\n")
    
    print("1 - paciente\n"
          "2 - Secretário/a\n"
          "3 - Médico\n"
          "4 - Sair")
    
def menu_paciente_1():
    print("Seja bem-vindo paciente!\n"
          "ProntuCare: Tecnologia e Saúde sempre repeitando sua confidencialidade!")
    
    print("Deseja fazer login ou cadastro?\n"
          "1 - cadastro\n"
          "2 - login\n"
          "3- Sair")

def menu_paciente_2():
    print("Menu do paciente.\n")
    print("1 - Mudar Informações")
    print("2 - Consultar Exames")
    print("3 - Consultar resultados")
    print("4 - Sair")

def menu_paciente_3(register):
    while True:
        paciente_option_2 = forca_mensagem("Digite a opção desejada: ",["1", "2", "3", "4"])
        if paciente_option_2 == "1":
                change_info(register)
        elif paciente_option_2 == "2":
                ver_exame(users)
        elif paciente_option_2 == "3":
                ver_resultados(register)
        elif paciente_option_2 == "4":
            print("encerrando sistema!")
            break

def main(register):
    while True:
        menu_geral()
        option = forca_mensagem("digite a opção desejada: ", ["1", "2", "3", "4"])
        if option == "1":
            menu_paciente_1()
            paciente_option = forca_mensagem("digite a opção desejada: ", ["1", "2", "3"])
            if paciente_option == "1":
                add_user(register)
                menu_paciente_2()
                menu_paciente_3(register)
            elif paciente_option == "2":
                login_user(register, register.keys())
                menu_paciente_2()
                menu_paciente_3(register)
            else:
                break
        elif option == "2":
            secretaria_login(register)
            menu_secretaria(register)

        elif option == "3":
            login_medico(register)
            menu_medico(register)
        else:
            print("encerrando sistema!")
            break

main(users)