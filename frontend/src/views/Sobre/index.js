import React, {Component} from "react";
import {Link , Redirect} from "react-router-dom";
import {Authentication} from "../../auth";
import {FiUser} from "react-icons/fi"

import "./styles.css";

class Sobre extends Component{
     

    render(){
        return(

            <div className="sobre-geral">
                <h1>Conheça o Corações do Poti:</h1>
                <h3>Conheça o projeto que está ajudando a transformar a vida de milhares de crianças e adolescentes</h3>
                <div className="sobre-2">
                <p>A história do WWF no Brasil começou em 1971, quando a Rede WWF iniciou o seu trabalho no país apoiando os primeiros estudos feitos sobre um desconhecido primata ameaçado de extinção do Rio de Janeiro. Esse trabalho pioneiro viria a se transformar no Programa de Conservação do Mico-Leão-Dourado, um dos mais bem-sucedidos do gênero no mundo, que há 30 anos vem sendo executado pelo WWF em parceria com outras organizações. Nos anos seguintes vários pequenos projetos em todo o Brasil contaram com ao ajuda financeira da entidade.
Foi na década de 80 que a presença do WWF no país aumentou, com o apoio dado aos primeiros anos do Projeto Tamar, entre outras iniciativas. Ao optar por trabalhar com parceiros locais, o WWF ajudou a criar e fortalecer várias entidades ambientalistas que hoje ocupam lugar de destaque na área da conservação, como a Fundação Vitória Amazônica (FVA).
Até 1989, diferentes organizações nacionais da rede WWF (WWF-EUA, WWF-Reino Unido e WWF-Suécia) financiavam diretamente projetos desenvolvidos por instituições ou estudantes e pesquisadores brasileiros. Todavia, com a ampliação do suporte técnico-financeiro ao longo dos anos, tornou-se necessária a criação de um escritório de representação. Isso aconteceu em 1990 com a contratação do biólogo Dr. Cléber Alho, que ficou responsável pelo escritório aberto em Brasília. A unidade passou a ser mantida pelo WWF-EUA que administrava, em nome da Rede, todos os projetos apoiados pelo WWF no Brasil.
A estrutura do escritório e o número de técnicos e funcionários cresceu continuamente, dentro do objetivo de fortalecer as ações do WWF no Brasil e maximizar o impacto para a conservação da natureza. Em 1993, para dar mais agilidade ao trabalho, foi nomeado o primeiro diretor do escritório, o biólogo Eduardo Martins.
Consolidação no Brasil
Aos poucos, no entanto, percebe-se que um país com as dimensões, ameaças e  diversidade biológica do Brasil precisava contar com uma entidade nacional própria, que pudesse contribuir de forma mais efetiva para o debate e as soluções dos problemas ambientais. Em 1994, a equipe brasileira recebe o sinal verde para viabilizar uma estrutura própria.
No dia 30 de agosto de 1996, é criado oficialmente o WWF-Brasil, organização brasileira autônoma e sem fins lucrativos de conservação da natureza que passa a integrar a Rede WWF. Na ocasião, toma posse o primeiro Conselho Diretor do WWF-Brasil, formado por nove representantes do empresariado, ambientalismo e outros setores da sociedade brasileira.
O Brasil se tornou a 25a organização nacional da Rede WWF e a primeira da América Latina, que inclui ainda escritórios no México, Peru, Colômbia, Bolívia e Costa Rica (responsável por toda a América Central), além de organizações associadas na Argentina (Fundación Vida Silvestre Argentina), Equador (Fundación Natura) e Venezuela (Fudena).
Os passos seguintes foram a aprovação do primeiro plano estratégico para o período 1996-2001, consolidando objetivos e metas do programa de conservação; a intensificação das ações de educação ambiental, comunicação e políticas públicas, aumentando o perfil público da organização; e o lançamento de um Quadro de Afiliados, com a abertura da entidade à participação de pessoas interessadas em apoiar as atividades de conservação. Mais de 500 afiliados foram registrados nos primeiros seis meses de funcionamento.
Atualidade
Hoje, o WWF-Brasil executa projetos em todo o país por meio de parcerias com empresas, organizações não-governamentais, órgãos dos governos federal, estaduais e municipais, desenvolvendo atividades de pesquisa e diagnóstico; proteção de espécies e de ecossistemas ameaçados; desenvolvimento de modelos alternativos de conservação e uso dos recursos naturais; capacitação e desenvolvimento de entidades parceiras; disseminação de resultados por meio de educação ambiental, políticas ambientais e comunicação; e campanhas de mobilização social.
Além da sede em Brasília, o WWF-Brasil conta ainda com outros quatro escritórios: São Paulo (SP), Rio Branco (AC), Manaus (AM) e Campo Grande (MS). Atualmente, portanto, a instituição conta com ampla estrutura para atuar em escala nacional, trabalhando na Amazônia, no Pantanal, no Cerrado e na Mata Atlântica.</p>
            </div>
            </div>
        );
    }
}

export default Sobre;