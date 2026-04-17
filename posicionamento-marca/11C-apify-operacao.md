# 11C — Operação Apify para o Benchmark Social da Sunter

## Objetivo

Padronizar o uso do Apify para coletar dados de Instagram e LinkedIn das 13 empresas do benchmark social da Sunter.

## Princípio operacional

Usar o Apify como backend oficial de coleta.

Fluxo recomendado:
1. `discover` para encontrar o Actor mais adequado por rede
2. `start` para rodar a coleta em batch
3. `collect` para buscar os resultados depois

A lógica da coleta deve ser:
- **um batch para Instagram**
- **um batch para LinkedIn**
- evitar rodar empresa por empresa, salvo se o Actor exigir

## Arquivos prontos desta fase

### Inputs
- `11A-apify-instagram-urls.json`
- `11B-apify-linkedin-urls.json`
- `11D-apify-social-urls.csv`

### Documento-base da fase
- `11-benchmark-redes-sociais.md`

## Como usar com o plugin da Apify no OpenClaw

### Etapa 1 — Descobrir o Actor certo
Buscar um Actor adequado para cada rede.

Consultas sugeridas:
- `instagram profile scraper`
- `instagram posts scraper`
- `linkedin company scraper`
- `linkedin company posts scraper`

### Etapa 2 — Validar o schema do Actor
Antes de rodar, checar:
- se aceita `startUrls`, `profileUrls`, `handles` ou outro campo
- se coleta apenas perfil ou também posts
- se suporta batch com múltiplas URLs
- se exige autenticação, cookies ou proxy específico

### Etapa 3 — Adaptar o input
Os arquivos desta pasta já deixam as URLs preparadas.

Dependendo do Actor escolhido, a adaptação pode ser:
- transformar `urls` em `startUrls`
- transformar URLs em handles
- dividir Instagram e LinkedIn em inputs separados

### Etapa 4 — Rodar em batch
Recomendação:
- 1 run para Instagram
- 1 run para LinkedIn

Se o Actor ficar instável com as 13 URLs de uma vez, dividir por bloco:
- Bloco A
- Bloco B
- Bloco C

## O que queremos extrair

### Instagram
- bio/perfil
- métricas públicas básicas, se disponíveis
- últimos posts ou amostra recente
- tipo dominante de conteúdo
- headlines e CTA recorrentes
- estética do feed
- nível de prova, bastidor, autoridade e conversão

### LinkedIn
- descrição institucional
- métricas públicas básicas, se disponíveis
- posts recentes ou amostra recente
- tom institucional vs executivo
- narrativa dominante
- prova social
- CTA e intenção de conversão

## Estrutura mínima de normalização pós-coleta

Para cada empresa e canal, organizar depois em:
- posicionamento social percebido
- estética e forma
- tom de voz do canal
- formato dominante de conteúdo
- sinais de autoridade
- sinais de prova
- sinais de conversão
- leitura crítica para a Sunter

## Recomendação metodológica

Não tentar transformar scraping bruto em conclusão direta.

O fluxo correto é:
1. coletar
2. limpar
3. normalizar
4. comparar
5. só então gerar síntese estratégica para a Sunter

## Próximo passo

Escolher os Actors do Apify para Instagram e LinkedIn e adaptar os arquivos `11A` e `11B` ao schema específico de cada Actor selecionado.
