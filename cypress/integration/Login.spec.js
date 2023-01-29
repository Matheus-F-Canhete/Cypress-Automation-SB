import HomePage from './page-objects/home-page';

describe("Testes na plataforma Seu Barriga", ()=> {

    const homePage = new HomePage()

        it("Automação do Login", ()=> {

            // Eis que eu acesso a página principal do site Seu Barriga
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Eu informo meus dados de acesso
            homePage.inserirDadosAcesso()

            // E clico em "Entrar"
            homePage.clickLogin()

            // Então eu acesso a plataforma
            homePage.confirmarLogin()
            
        })

        it('Automação de Logout', ()=> {

            // Eis que eu acesso a minha conta na plataforma Seu Barriga
            homePage.login()

            // Eu clico em "Sair"
            homePage.logout()

            // Então verifico que não estou mais logado na plataforma
            homePage.confirmarLogout()

        })

})