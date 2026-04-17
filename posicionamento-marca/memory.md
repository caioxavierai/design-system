# Memory — Posicionamento de Marca Sunter

> Última atualização: 2026-04-08
> Dono do projeto: Caio + BOB
> Status geral: concluído

---

## Objetivo do projeto

Construir o sistema de marca da Sunter de forma progressiva, registrada e reaproveitável, para servir tanto à comunicação da empresa quanto aos artefatos internos e aos agents que usam `product-marketing-context.md` como base.

---

## Método de trabalho

Fluxo acordado com Caio:

1. BOB conduz por etapas
2. BOB pergunta e sugere a melhor resposta com base no contexto já existente da Sunter
3. Caio ajusta ou aprova
4. BOB registra a versão aprovada no documento temático correto
5. BOB atualiza este `memory.md`
6. Só então a próxima etapa é iniciada

---

## Fontes-base já identificadas

### Fonte principal de marketing/produto
- `../.agents/product-marketing-context.md`

### Fonte principal de estratégia de negócio
- `../documentos/Modelo de Negócio - Sunter Tecnologia - cópia.md`

### Fonte principal de direção visual / design system
- `./sunter-design-system.md`

### Fonte complementar de histórico visual / design
- `../raice/memory.md`

### Fonte complementar de contexto institucional da Sunter na base do BOB
- `~/.openclaw/workspace/shared/knowledge/sunter/contexto.md`

---

## Roadmap do projeto

### Fase 0A — Fundamentos Estratégicos
**Status:** concluída e aprovada

Objetivo: consolidar a base conceitual da marca antes de fechar discurso e identidade.

Escopo:
- problema central que a Sunter resolve
- tese da empresa
- público principal
- diferenciais reais
- promessa central da marca
- percepção desejada

Entregável principal:
- alinhamento base para iniciar `01-plataforma-de-marca.md`
- registro estruturado em `00A-fundamentos-estrategicos.md`

---

### Fase 0B — Plataforma de Marca
**Status:** concluída e aprovada

Escopo:
- propósito
- visão
- missão
- promessa de marca
- valores
- personalidade
- princípios de comportamento

Entregável principal:
- `01-plataforma-de-marca.md`

---

### Fase 0C — Posicionamento
**Status:** concluída e aprovada

Escopo:
- categoria da marca
- inimigo comum
- diferencial competitivo
- território da marca
- posicionamento central
- one-liner
- tagline
- elevator pitch

Entregável principal:
- `02-posicionamento.md`

---

### Fase 0D — Arquitetura de Mensagens
**Status:** concluída e aprovada

Escopo:
- mensagem-mãe
- pilares de mensagem
- provas
- mensagens por ICP
- mensagens por contexto
- tratamento de objeções

Entregável principal:
- `03-arquitetura-de-mensagens.md`

---

### Fase 0E — Tom de Voz
**Status:** concluída e aprovada

Escopo:
- pilares de voz
- o que a marca faz
- o que a marca evita
- vocabulário preferido
- exemplos por canal

Entregável principal:
- `04-tom-de-voz.md`

---

### Fase 0F — Direção Visual
**Status:** concluída e aprovada

Escopo:
- conceito visual
- referências
- paleta
- tipografia
- estilo gráfico
- princípios de aplicação

Entregável principal:
- `05-direcao-visual.md`

Observação:
- a fonte normativa de verdade desta fase passou a ser `./sunter-design-system.md`
- `../raice/memory.md` permanece como referência complementar de histórico visual

---

### Fase 0G — Consolidação do Brandbook
**Status:** concluída e aprovada

Escopo:
- consolidar narrativa estratégica + verbal + visual

Entregável principal:
- `06-brandbook.md`

---

### Fase 0H — Consolidação do Manual de Marca
**Status:** concluída e aprovada

Escopo:
- regras de uso
- consistência
- aplicações mínimas
- padrões de ativos

Entregável principal:
- `07-manual-de-marca.md`

---

### Fase 0I — Integração com Product Marketing Context
**Status:** concluída e aprovada

Objetivo:
atualizar o arquivo `../.agents/product-marketing-context.md` ao final do processo com a versão madura da marca, para que outros agents e skills operem sobre a base correta.

Entregável principal:
- `08-integracao-product-marketing-context.md`
- atualização do `../.agents/product-marketing-context.md`

---

### Fase 0J — Benchmark de Comunicação e Calibração de Mercado
**Status:** concluída

Objetivo:
mapear como empresas brasileiras com forte apelo tech e base relevante de clientes PME se comunicam, para comparar esses padrões com o posicionamento da Sunter e identificar oportunidades de melhoria.

Escopo:
- seleção de referências de mercado
- análise comparativa de posicionamento, mensagem, confiança e conversão
- síntese dos padrões vencedores
- delta de melhoria para os documentos da Sunter

Entregável principal:
- `10-benchmark-comunicacao-mercado.md`
- `10A-benchmark-bruto-empresas.md`

---

### Fase 0K — Benchmark de Redes Sociais e Calibração de Conteúdo
**Status:** concluída

Objetivo:
mapear como as mesmas empresas de referência se comunicam em Instagram e LinkedIn, para complementar o benchmark institucional com uma camada específica de posicionamento social da Sunter.

Escopo:
- consolidação de URLs sociais oficiais
- scraping via Apify
- análise comparativa de Instagram e LinkedIn
- identificação de padrões sociais de autoridade, prova, bastidor e conversão
- impactos potenciais na presença social da Sunter

Entregável principal:
- `11-benchmark-redes-sociais.md`

---

## Status atual por fase

| Fase | Nome | Status |
|---|---|---|
| 0A | Fundamentos Estratégicos | ✅ Concluída e aprovada |
| 0B | Plataforma de Marca | ✅ Concluída e aprovada |
| 0C | Posicionamento | ✅ Concluída e aprovada |
| 0D | Arquitetura de Mensagens | ✅ Concluída e aprovada |
| 0E | Tom de Voz | ✅ Concluída e aprovada |
| 0F | Direção Visual | ✅ Concluída e aprovada |
| 0G | Brandbook | ✅ Concluída e aprovada |
| 0H | Manual de Marca | ✅ Concluída e aprovada |
| 0I | Integração com Product Marketing Context | ✅ Concluída e aprovada |
| 0J | Benchmark de Comunicação e Calibração de Mercado | ✅ Concluída |
| 0K | Benchmark de Redes Sociais e Calibração de Conteúdo | ✅ Concluída |

---

## Decisões já tomadas

### 2026-04-08 — Fase 0K com URLs sociais consolidadas
- Consolidada a tabela de URLs oficiais de Instagram e LinkedIn das 13 empresas-base da fase 0K em `11-benchmark-redes-sociais.md`
- A maior parte das URLs foi confirmada por consistência entre site oficial, branding e páginas canônicas indexadas
- `Viver de IA` ficou com LinkedIn marcado como **não confirmado**, por falta de evidência forte o bastante para confirmação segura
- Próximo passo da fase 0K: usar essa base para o scraping via Apify e então iniciar a análise comparativa dos perfis


### 2026-04-06 — Estrutura do projeto criada
- Criada a pasta `posicionamento-marca/`
- Criados os arquivos-base do projeto
- Definido que o fluxo será iterativo por aprovação do Caio
- Definido que o `product-marketing-context.md` será atualizado ao final como etapa formal do projeto

### 2026-04-06 — Estrutura ajustada para início 100%
- Corrigida a referência quebrada `../memory.md`
- Definido como fonte correta da base do BOB: `~/.openclaw/workspace/shared/knowledge/sunter/contexto.md`
- Criado o arquivo dedicado `00A-fundamentos-estrategicos.md` para registrar a fase inicial

### 2026-04-06 — Fase 0A aprovada
- A Sunter foi definida como uma empresa de implementação
- A marca passou a reconhecer explicitamente duas verticais complementares: software sob medida e consultoria de implementação de IA
- Ficou decidido que a expressão `transformação digital` não deve ser a definição principal da marca nesta etapa
- Ficou decidido que `Service as Software` entra como tese estratégica de bastidor, e não como formulação principal de mercado
- A verdade central aprovada foi: a Sunter existe para transformar necessidade operacional em implementação real
- O conteúdo final da fase foi registrado em `00A-fundamentos-estrategicos.md`

### 2026-04-06 — Fase 0B aprovada
- A plataforma de marca consolidou a Sunter como empresa de implementação com software sob medida e consultoria de implementação de IA
- O documento de cultura existente foi incorporado como referência, com separação clara entre marca e cultura operacional interna
- Valores centrais aprovados: execução, clareza, critério técnico, responsabilidade e relacionamentos de longo prazo
- Traços de personalidade aprovados: técnica, pragmática, confiável, próxima, consultiva e inquieta por evolução
- O conteúdo final da fase foi registrado em `01-plataforma-de-marca.md`

### 2026-04-06 — Fase 0C aprovada
- A categoria da marca foi consolidada como empresa de implementação
- Ficou oficializado o território da marca: implementação real
- A tagline aprovada foi: `IA e software que viram operação real.`
- O posicionamento central passou a unir explicitamente software sob medida e consultoria de implementação de IA na mesma narrativa
- `Service as Software` permaneceu como tese estratégica de bastidor, sem virar formulação principal de mercado
- O conteúdo final da fase foi registrado em `02-posicionamento.md`

### 2026-04-06 — Fase 0D aprovada
- A mensagem-mãe foi consolidada em torno de implementação real
- Os três pilares oficiais passaram a ser: clareza antes da construção, implementação real e tecnologia com utilidade prática
- A messaging house passou a contemplar mensagens por ICP e respostas às principais objeções comerciais
- O conteúdo final da fase foi registrado em `03-arquitetura-de-mensagens.md`

### 2026-04-06 — Fase 0E aprovada
- O tom de voz passou a explicitar o que a Sunter faz: software sob medida, sistemas, automações e implementação de IA
- A linguagem da marca foi ajustada para conectar operação com resultado de negócio, incluindo receita, margem, eficiência, controle e retorno
- Ficou reforçado que a marca deve evitar falar de resultado sem deixar claro o que está sendo implementado
- O conteúdo final da fase foi registrado em `04-tom-de-voz.md`

### 2026-04-07 — Fase 0F iniciada
- Foi apresentada a proposta inicial de direção visual da Sunter
- Conceito-base proposto: tecnologia que gera clareza, controle e resultado
- Direção recomendada: fusão entre consultoria executiva moderna e empresa de software premium orientada a resultado
- Proposta visual incluiu sensações desejadas/evitadas, referências de linguagem visual, paleta inicial, tipografia e aplicações prioritárias
- Status inicial da etapa: aguardando consolidação no documento final

### 2026-04-07 — Fase 0F aprovada e consolidada
- `sunter-design-system.md` foi definido como fonte normativa de verdade para toda e qualquer decisão visual da marca
- `05-direcao-visual.md` foi reescrito integralmente com base no conceito `Warm Intelligence`
- A direção visual oficial passou a consolidar dark premium, undertones quentes, terracotta como único accent e motion com intenção
- `../raice/memory.md` foi mantido apenas como referência complementar de histórico visual

### 2026-04-07 — Fase 0G iniciada
- `06-brandbook.md` deixou de ser apenas estrutura reservada e ganhou a primeira versão consolidada
- O brandbook passou a unir, em narrativa única, fundamentos estratégicos, posicionamento, mensagem, voz e direção visual
- Próxima etapa ativa inicial: refinamento editorial e fechamento do brandbook

### 2026-04-07 — Fase 0G aprovada e consolidada
- `06-brandbook.md` foi atualizado para a versão final aprovada
- O brandbook passou a incorporar explicitamente plataforma de marca, valores, princípios, definição do que a Sunter é e não é, mensagens por ICP e objeções-chave
- A fase foi considerada concluída como consolidação narrativa oficial da marca Sunter

### 2026-04-07 — Fase 0H iniciada
- `07-manual-de-marca.md` deixou de ser apenas placeholder e recebeu a estrutura inicial da fase
- O manual passou a ser orientado como documento operacional de aplicação da marca, subordinado ao `sunter-design-system.md`
- Próxima etapa ativa inicial: detalhar regras práticas de uso, consistência, não uso e aplicação por canal

### 2026-04-08 — Fase 0H aprovada e consolidada
- `07-manual-de-marca.md` foi atualizado para a versão final aprovada
- A fase consolidou regras práticas de consistência, cor, tipografia, elementos gráficos, motion, aplicações institucionais, aplicações digitais e critérios de não uso
- O manual foi registrado como documento oficial de aplicação da marca Sunter

### 2026-04-08 — Fase 0I iniciada
- `08-integracao-product-marketing-context.md` deixou de ser apenas um placeholder de intenção e recebeu um mapeamento inicial concreto
- Foi identificado o desalinhamento central do `product-marketing-context.md`: ainda ancorado em transformação digital, automação e adoção como eixo principal
- A nova direção da fase passou a ser alinhar o arquivo operacional à formulação madura da marca como empresa de implementação
- Próxima etapa ativa inicial: atualizar o `../.agents/product-marketing-context.md` com base na marca consolidada

### 2026-04-08 — Fase 0I aprovada e consolidada
- `../.agents/product-marketing-context.md` foi atualizado com a versão aprovada do posicionamento da Sunter
- O eixo central do arquivo foi migrado de transformação digital para empresa de implementação
- Foram atualizados: one-liner, categoria, problema central, diferenciação, brand voice, customer language, personas e objeções
- A fase foi considerada concluída como integração oficial da marca consolidada com o contexto operacional usado por agents

### 2026-04-08 — Fase 0J recalibrada
- Foi decidido que o benchmark não pode ficar excessivamente ancorado em SaaS, para não distorcer a essência da Sunter
- A metodologia da fase passou a separar referências por arquétipo de comunicação, e não apenas por tipo de empresa
- Regra estabelecida: SaaS serve como benchmark de clareza, escala e fricção comercial, mas não como benchmark de essência da marca
- A base consultiva e processual da Sunter deve ser calibrada principalmente por empresas ligadas a consultoria, processos, transformação e execução
- Empresas alinhadas até aqui para compor a base inicial: Falconi, Auddas, G4 Business, V4 Company, EloGroup, Teclat, Omie, Conta Azul, Asaas, Nuvemshop, Stone, Viver de IA e RD Station
- A Teclat foi incorporada como referência importante no bloco consultivo/execução tech por sua proximidade com serviço, entrega e tecnologia aplicada

### 2026-04-08 — Benchmark bruto da fase 0J concluído
- Foi criado o documento `10A-benchmark-bruto-empresas.md` com análise comparável das 13 empresas selecionadas
- O benchmark foi estruturado em três blocos: consultoria/processos/transformação, tech PME com forte distribuição e IA/narrativa contemporânea/confiança comercial
- Cada empresa foi analisada nos eixos: posicionamento, comunicação comercial, linguagem, confiança, estrutura de conversão e forma/estética
- Ficou reforçado no material que a Sunter não deve usar SaaS como benchmark de essência, apenas como benchmark de clareza comercial, simplicidade, fricção e escala
- Padrão preliminar mais forte identificado: combinar essência consultiva e execução real com linguagem mais simples, prova mais explícita e entrada comercial mais clara
- Limitações foram registradas no benchmark quando houve bloqueio de site ou baixa visibilidade de conteúdo renderizado

### 2026-04-08 — Fase 0K iniciada
- Foi criada a fase específica de benchmark social para Instagram e LinkedIn
- Ficou decidido que a fase manterá os mesmos blocos e empresas da fase 0J para preservar a normativa comparativa
- Ficou decidido que o scraping será feito via Apify
- Próxima etapa ativa inicial: consolidar as URLs oficiais de Instagram e LinkedIn das empresas analisadas

### 2026-04-08 — Fase 0K avançada
- `11-benchmark-redes-sociais.md` foi atualizado com a tabela consolidada de URLs sociais das 13 empresas do benchmark
- Caio validou todas as URLs como corretas, incluindo o LinkedIn da Viver de IA
- A fase passou da preparação de fontes para a preparação operacional do scraping via Apify
- Foram criados os artefatos operacionais: `11A-apify-instagram-urls.json`, `11B-apify-linkedin-urls.json`, `11C-apify-operacao.md` e `11D-apify-social-urls.csv`

### 2026-04-08 — Benchmark social normalizado e auditoria concluída
- A leitura comparativa final do benchmark social foi consolidada em `11F-normalizacao-comparativa-benchmark-social.md`
- A auditoria dos documentos da marca após o benchmark foi registrada em `12-auditoria-docs-pos-benchmark-social.md`
- A conclusão estratégica foi que a tese da Sunter permaneceu correta e que o principal ajuste necessário era operacionalizar melhor o posicionamento, sem reabrir a fundação da marca
- Caio decidiu evitar abertura de novos documentos para isso, priorizando incorporação dos ajustes diretamente nos docs centrais já existentes
- Os ajustes finais foram incorporados em `03-arquitetura-de-mensagens.md`, `04-tom-de-voz.md`, `05-direcao-visual.md` e `08-integracao-product-marketing-context.md`
- Ficou reforçado como regra final que nenhum refinamento subjetivo de direção visual pode alterar qualquer definição normativa originada do `sunter-design-system.md`

### 2026-04-08 — Fechamento formal do projeto
- `09-checklist-de-entrega.md` foi atualizado com todos os itens concluídos
- O `README.md` e este `memory.md` foram atualizados para registrar o encerramento formal
- O projeto passou a ser considerado concluído como base oficial de marca da Sunter para uso institucional, comercial, editorial e operacional

---

## Próximo passo

Projeto concluído.

Próximo uso esperado da base:
- aplicar a marca consolidada em site, propostas, apresentações e presença social;
- reutilizar os documentos como referência oficial para agents, materiais e futuras peças da Sunter.

---

## Log de progresso

### 2026-04-06
- Estrutura inicial do projeto criada
- Roadmap e método registrados
- Integração futura com `product-marketing-context.md` registrada como etapa obrigatória
- Referência de contexto complementar corrigida para a base oficial do BOB sobre a Sunter
- Fase 0A ganhou arquivo próprio para registro das decisões iniciais
- Fase 0A foi concluída e aprovada
- A base estratégica da marca passou a considerar explicitamente as duas verticais da Sunter
- Fase 0B foi concluída e aprovada
- O documento de cultura existente foi absorvido como referência para a plataforma de marca
- Fase 0C foi concluída e aprovada
- O território da marca foi definido como implementação real
- Fase 0D foi concluída e aprovada
- A messaging house oficial da marca foi registrada
- Fase 0E foi concluída e aprovada
- O tom de voz oficial da marca foi registrado
- Próxima etapa definida: Fase 0F — Direção Visual

### 2026-04-07
- Memory atualizado com o status corrente do projeto
- Fase 0F passou de “não iniciada” para “em andamento”
- Proposta inicial de direção visual foi registrada como apresentada
- Fase 0F foi consolidada e aprovada
- `sunter-design-system.md` foi oficializado como fonte normativa de verdade para padrões visuais da marca
- `05-direcao-visual.md` foi reescrito integralmente
- Fase 0G foi iniciada com primeira versão de `06-brandbook.md`
- Fase 0G foi consolidada e aprovada com versão final do brandbook
- Fase 0H foi iniciada com a estrutura inicial de `07-manual-de-marca.md`
- Fase 0H foi consolidada e aprovada com a versão final do manual de marca
- Fase 0I foi iniciada com mapeamento inicial de integração com o `product-marketing-context.md`
- Fase 0I foi consolidada e aprovada com atualização do arquivo real usado pelos agents
- Fase 0J foi aberta para benchmark de comunicação e calibração de mercado antes do checklist final
- Benchmark bruto completo da fase 0J foi concluído e registrado em `10A-benchmark-bruto-empresas.md`
- `10-benchmark-comunicacao-mercado.md` foi atualizado com o novo status da fase e referência ao documento bruto
