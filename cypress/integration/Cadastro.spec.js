import HomePage from './page-objects/home-page';

describe('Automação do Cadastro', ()=> {

    const homePage = new HomePage()

        it('Automação de Cadastro', ()=> {
            
            // Eis que eu acesso a página principal do site Seu Barriga
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Eu clico em "Novo Usuário?"
            homePage.acessarAreaCadastro()

            // Eu insiro meus dados cadastrais
            homePage.inserirDadosCadastrais()

            // E clico em "Entrar"
            homePage.clickCadastro()

            // Então é retornada a mensagem de que o cadastro foi efetuado com sucesso
            homePage.confirmaCadastro()

        })
}) 