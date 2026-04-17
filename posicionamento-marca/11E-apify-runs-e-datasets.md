# 11E — Apify Runs, Retries e Datasets

Data: 2026-04-08
Objetivo: registrar a execução dos Actors do Apify para o benchmark social da Sunter, incluindo retries das falhas do LinkedIn.

## Actors utilizados

- Instagram: `apify/instagram-profile-scraper`
- LinkedIn: `automation-lab/linkedin-company-scraper`

## Credencial

A credencial do Apify foi localizada em `~/projetos/agentes-ai/agente-sunter/backend/.env` e salva em `SECRETS.md`.

## Run 1 — Instagram

- Status: `SUCCEEDED`
- Run ID: `5wg9tn8JVvqfjt9uC`
- Dataset ID: `hbpre14OgnWh3yhs2`
- Perfis coletados: `13`
- Custo: `US$ 0.0338`

### Usernames coletados

- `elogroup`
- `viverdeia.ai`
- `asaas.brasil`
- `g4.business`
- `falconioficial`
- `omieoficial`
- `nuvemshop`
- `contaazul`
- `stone`
- `v4company`
- `teclat.of`
- `rdstation`
- `auddas_`

## Run 2 — LinkedIn (lote principal)

- Status: `SUCCEEDED`
- Run ID: `1gmycaNhCTtJ9BqmL`
- Dataset ID: `Qumew6BntsdE4pmpk`
- Empresas coletadas: `10`
- Custo: `US$ 0.0395`

### Empresas coletadas

- Falconi
- AUDDAS
- V4 Company
- EloGroup
- Omie
- Conta Azul
- Asaas
- Nuvemshop
- Stone
- RD Station

### Faltantes após o lote principal

- G4
- Teclat
- Viver de IA

## Retry 1 — LinkedIn (3 faltantes)

Input usado:
- `https://www.linkedin.com/company/g4educacao/`
- `https://www.linkedin.com/company/teclat-of/`
- `https://www.linkedin.com/company/vivedeia/`

Resultado:
- Status: `SUCCEEDED`
- Run ID: `IgofU10LCQ5tKk2LQ`
- Dataset ID: `0FsVoIMfXMKX1jn1L`
- Empresas coletadas: `1`
- Custo: `US$ 0.00845`

### Empresa recuperada no retry 1

- Tecla T

## Retry 2 — LinkedIn (tentativa final nas 2 remanescentes)

Input usado:
- `https://br.linkedin.com/company/g4educacao`
- `https://br.linkedin.com/company/vivedeia`

Resultado:
- Status: `SUCCEEDED`
- Run ID: `HQgPHg4Cy25KExES0`
- Dataset ID: `gQ2djHgr8tdIlcfxV`
- Empresas coletadas: `0`
- Custo: `US$ 0.005`

## Consolidação final do LinkedIn

### Empresas confirmadas após retries

- Falconi
- AUDDAS
- V4 Company
- EloGroup
- Omie
- Conta Azul
- Asaas
- Nuvemshop
- Stone
- RD Station
- Tecla T

Total final confirmado no LinkedIn: `11 de 13`

### Pendências remanescentes no LinkedIn

- G4
- Viver de IA

## Leitura operacional

- O dataset do Instagram foi concluído integralmente com os 13 perfis esperados.
- No LinkedIn, o Actor funcionou bem para páginas padrão de empresa, mas não resolveu G4 e Viver de IA mesmo após retry dedicado.
- G4 aparenta ter ambiguidade entre página de `school` e `company`, o que pode ter afetado a coleta neste Actor específico.
- Viver de IA possui página indexada no LinkedIn, mas não retornou item no Actor durante as tentativas realizadas nesta sessão.

## Próximo passo recomendado

1. usar os datasets já consolidados para a normalização do benchmark social;
2. tratar G4 e Viver de IA manualmente ou com abordagem complementar, se forem críticos para fechar 13/13 no LinkedIn.
