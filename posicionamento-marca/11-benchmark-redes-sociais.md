# 11 — Benchmark de Redes Sociais e Calibração de Conteúdo

**Status:** em andamento — URLs sociais oficiais validadas, inputs Apify preparados, scraping pendente

## Objetivo

Mapear como as empresas de referência do benchmark institucional se comunicam no Instagram e no LinkedIn, para complementar a análise da Sunter com uma camada específica de posicionamento em redes sociais.

## Relação com a fase anterior

Esta fase complementa, e não substitui, a fase `0J — Benchmark de Comunicação e Calibração de Mercado`.

O benchmark institucional continua sendo a principal base para:
- posicionamento central
- narrativa institucional
- promessa da marca
- estrutura comercial

O benchmark de redes sociais passa a servir para:
- direção de conteúdo
- embalagem social da marca
- tom e cadência por canal
- formato de autoridade
- uso de prova, desejo, bastidor e conversão nas redes

## Regra metodológica

As mesmas empresas e blocos da fase 0J serão mantidos nesta fase, para preservar consistência normativa entre benchmark institucional e benchmark social.

## Empresas-base da fase

### Bloco A — Consultoria, processos e transformação
- Falconi
- Auddas
- G4 Business
- V4 Company
- EloGroup
- Teclat

### Bloco B — Tech com distribuição forte para PME
- Omie
- Conta Azul
- Asaas
- Nuvemshop
- Stone

### Bloco C — IA, narrativa contemporânea e confiança comercial
- Viver de IA
- RD Station

## O que será analisado em cada empresa

### Instagram
- estética do feed
- tipo de headline
- formato dos carrosséis
- equilíbrio entre autoridade, bastidor, prova e conversão
- uso de founder-led content ou marca institucional
- nível de sofisticação visual
- frequência de CTA
- energia geral do canal

### LinkedIn
- tipo de narrativa
- construção de autoridade
- linguagem executiva vs comercial
- presença de prova e repertório de mercado
- peso institucional vs peso pessoal/founder-led
- formato dos posts
- CTA e intenção de conversão

## Uso esperado desta fase

O material desta fase deve permitir:
- calibrar a presença social da Sunter
- melhorar futuras diretrizes de conteúdo social
- eventualmente gerar um documento específico de posicionamento de redes sociais da marca
- identificar oportunidades de ajuste em `04-tom-de-voz.md`, `06-brandbook.md` e outros documentos, se fizer sentido

## Preparação para scraping

Esta fase prevê uso do **Apify** para coleta estruturada dos perfis de Instagram e LinkedIn das empresas selecionadas.

### Dados preparatórios necessários
- URL oficial do Instagram por empresa
- URL oficial do LinkedIn por empresa
- observações sobre contas ambíguas, múltiplas marcas ou perfis paralelos

## Tabela consolidada de URLs sociais

| Bloco | Empresa | Instagram | LinkedIn | Status de confirmação | Observações |
|---|---|---|---|---|---|
| A | Falconi | https://www.instagram.com/falconioficial/ | https://br.linkedin.com/company/falconi-oficial | Confirmado | URLs consistentes com presença oficial da marca. |
| A | Auddas | https://www.instagram.com/auddas_/ | https://br.linkedin.com/company/auddas-consulting | Confirmado | Branding e naming consistentes com `auddas.com`. |
| A | G4 Business | https://www.instagram.com/g4.business/ | https://br.linkedin.com/school/g4educacao/ | Confirmado | No LinkedIn, a página validada para o ecossistema da marca foi `G4 Educação`. |
| A | V4 Company | https://www.instagram.com/v4company/ | https://br.linkedin.com/company/v4companysa | Confirmado | Naming consistente com o site oficial. |
| A | EloGroup | https://www.instagram.com/elogroup/ | https://br.linkedin.com/company/elo-group | Confirmado | URLs validadas como corretas. |
| A | Teclat | https://www.instagram.com/teclat.of/ | https://br.linkedin.com/company/tecla-t | Confirmado | URLs validadas como corretas para a marca. |
| B | Omie | https://www.instagram.com/omieoficial/ | https://br.linkedin.com/company/omie | Confirmado | Conta institucional principal validada. |
| B | Conta Azul | https://www.instagram.com/contaazul/ | https://br.linkedin.com/company/contaazul | Confirmado | Conta institucional principal validada. |
| B | Asaas | https://www.instagram.com/asaas.brasil/ | https://br.linkedin.com/company/asaasbrasil | Confirmado | Handles consistentes entre canais. |
| B | Nuvemshop | https://www.instagram.com/nuvemshop/ | https://br.linkedin.com/company/nuvemshop | Confirmado | URLs canônicas aderentes à marca. |
| B | Stone | https://www.instagram.com/stone/ | https://br.linkedin.com/company/stone-co | Confirmado | URLs institucionais validadas. |
| C | Viver de IA | https://www.instagram.com/viverdeia.ai/ | https://br.linkedin.com/company/vivedeia | Confirmado | URLs validadas por Caio. |
| C | RD Station | https://www.instagram.com/rdstation/ | https://br.linkedin.com/company/rd-station | Confirmado | Naming institucional claro. |

## Artefatos operacionais já preparados

- `11A-apify-instagram-urls.json` — lista pronta de URLs de Instagram
- `11B-apify-linkedin-urls.json` — lista pronta de URLs de LinkedIn
- `11C-apify-operacao.md` — instrução operacional para uso com Apify via OpenClaw
- `11D-apify-social-urls.csv` — base tabular única com empresa, bloco, plataforma e URL

## Próximo passo desta fase

Escolher os Actors do Apify para Instagram e LinkedIn, adaptar os inputs ao schema dos Actors e iniciar o scraping dos perfis para análise comparativa.

## Critério de fechamento

A fase só será considerada concluída quando:

1. o scraping necessário tiver sido executado
2. o benchmark social comparativo estiver documentado
3. houver clareza sobre como isso impacta o posicionamento social da Sunter
4. as recomendações para a Sunter estiverem registradas
