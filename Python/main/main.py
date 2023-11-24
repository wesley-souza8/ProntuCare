from defs import *

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