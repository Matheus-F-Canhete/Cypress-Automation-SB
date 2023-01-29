import HomePage from './page-objects/home-page';
import { faker } from '@faker-js/faker';

describe("Testes na plataforma Seu Barriga", ()=> {

    const homePage = new HomePage()

        it('Automação da adição de contas', ()=> {

            // Eis que eu acesso a minha conta na plataforma Seu Barriga
            homePage.login()

            // Eu navego até a página de adição de contas
            homePage.abrirPaginaAdicao()

            // Eu informo os dados da nova conta e clico em "Salvar"
            homePage.inserirNovaConta()

            // Então a lista confirma a adição da conta
            homePage.confirmarNovaConta()

        })

        it('Automação da exclusão de contas', ()=> {

            // Eis que eu acessp a minha conta na plataforma Seu Barriga
            homePage.login()

            // Eu navego até a página de listagem de contas
            homePage.abrirPaginaLista()

            // E excluo a conta existente
            homePage.excluirConta()

            // Então a página confirma a exclusão da conta
            homePage.confirmarExclusaoConta()

        })
})