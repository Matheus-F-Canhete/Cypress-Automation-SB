import HomePage from './page-objects/home-page';

describe('Adição e Exclusão de Movimentação', ()=> {

    const homePage = new HomePage()

        it('Automação de Criação de Movimentação', ()=> {

            // Eis que eu acesso a minha conta na plataforma Seu Barriga
            homePage.login()

            // Eu acesso a página "Criar Movimentação"
            homePage.acessarPaginaMovimentacao()

            // Eu insiro os dados da movimentação e clico em "Salvar"
            homePage.inserirDadosMovimentacao()

            // Então a página confirma a criação da movimentação
            homePage.confirmarNovaMovimentacao()

        })

        it('Automação de Exclusão de Movimentação', ()=> {

            // Eis que eu acesso a minha conta na plataforma Seu Barriga
            homePage.login()

            // Eu acesso a página de resumo mensal
            homePage.acessarPaginaResumo()

            // Filtro a data da movimentação
            homePage.filtrarDataMovimentacao()

            // E excluo a movimentação
            homePage.excluirMovimentacao()

            // Então a página confirma a exclusão da movimentação
            homePage.confirmarExclusaoMovimentacao()

        })

})