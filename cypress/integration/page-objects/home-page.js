import * as data from "../../fixtures/datasource/users.json";
import { faker } from '@faker-js/faker';

class HomePage {
    
    definirLayout() {
        cy.viewport(1440, 900)
    }
    
    abrirPaginaPrincipal() {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.wait(2000)
    }

    acessarAreaLogin() {
        cy.get('.active > a').click()
        cy.wait(2000)
    }

    acessarAreaCadastro() {
        cy.get(':nth-child(2) > a').click()
        cy.wait(2000) 
    }

    inserirDadosAcesso() {
        cy.get('#email').type(data.users.usuario)
        cy.get('#senha').type(data.users.senha) 
        cy.wait(2000)       
    }

    clickLogin() {
        cy.get('.btn').click()
        cy.wait(2000) 
    }

    confirmarLogin() {
        cy.contains('Bem vindo, Matheus!')
        cy.wait(500) 
    }

    inserirDadosCadastrais() {
        cy.get('#nome').type(data.users.nome)
        cy.get('#email').type(faker.internet.email())
        cy.get('#senha').type('TesteTestinha')
        cy.wait(2000) 
    }

    clickCadastro() {
        cy.get('.btn').click()
        cy.wait(2000) 
    }

    confirmaCadastro() {
        cy.contains('Usuário inserido com sucesso')
        cy.wait(500) 
    }

    login() {
        this.definirLayout()
        this.abrirPaginaPrincipal()
        this.inserirDadosAcesso()
        this.clickLogin()
        this.confirmarLogin()
    }

    logout() {
        cy.get(':nth-child(5) > a').click()
        cy.wait(2000) 
    }

    abrirPaginaAdicao() {
        cy.get('.caret').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.wait(2000) 
        cy.contains('Nome')
    }

    abrirPaginaLista() {
        cy.get('.caret').click()
        cy.contains('Listar').click()
        cy.wait(2000) 
        cy.contains('Conta')
    }

    inserirNovaConta() {
        cy.get('#nome').type('Teste')
        cy.get('.btn').click()
        cy.wait(2000) 
    }

    confirmarNovaConta() {
        cy.contains('Teste')
        cy.wait(500) 
    }

    excluirConta() {
        this.abrirPaginaLista()
        cy.get('span.glyphicon.glyphicon-remove-circle').click() 
        cy.wait(2000)    
    }

    confirmarExclusaoConta() {
        cy.contains('Conta removida com sucesso!')
        cy.wait(500) 
    }

    acessarPaginaMovimentacao() {
        cy.get(':nth-child(3) > a').click()
        cy.contains('Tipo da Movimentação')
        cy.wait(2000) 
    }

    inserirDadosMovimentacao() {
        cy.get('#tipo').select('Despesa')
        cy.get('#data_transacao').type('13/01/2023')
        cy.get('#data_pagamento').type('13/01/2023')
        cy.get('#descricao').type('Teste de Descrição')
        cy.get('#interessado').type('Matheus')
        cy.get('#valor').type('5000')
        cy.get('#status_pago').click()
        cy.wait(2000)
        cy.get('.btn').click()
        cy.wait(2000)
    }

    confirmarNovaMovimentacao() {
        cy.contains('Movimentação adicionada com sucesso!')
        cy.wait(500)
    }

    acessarPaginaResumo() {
        cy.get(':nth-child(4) > a').click()
        cy.contains('Descrição')
        cy.wait(2000)
    }

    filtrarDataMovimentacao() {
        cy.get('#mes').select('Janeiro')
        cy.get('#ano').select('2023')
        cy.get('.btn').click()
        cy.wait(2000)
    }

    excluirMovimentacao() {
        cy.get('span.glyphicon.glyphicon-remove-circle').click()
        cy.wait(2000)
    }

    confirmarExclusaoMovimentacao() {
        cy.contains('Movimentação removida com sucesso!')
        cy.wait(500)
    }

    confirmarLogout() {
        cy.contains('Email')
        cy.wait(500) 
    }

}

export default HomePage;