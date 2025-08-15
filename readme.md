# 🐝 Zé Comeia

Sistema de monitoramento e gestão de colmeias para apicultores, desenvolvido com **TypeScript** e **Fastify**.  
O objetivo é fornecer uma visão clara sobre localização, produção, manutenção e períodos de descanso das colmeias.

---

## 📌 Visão Geral
O **Zé Comeia** ajuda o produtor de mel a:
- Cadastrar e localizar suas colmeias.
- Registrar datas de extração de mel e quantidades produzidas.
- Controlar períodos em que não é recomendado extrair (inverno).
- Registrar manutenção e troca de peças.
- Gerar relatórios de produção e alertas.

---

## 🎯 Funcionalidades (MVP)

### Cadastro e gerenciamento
- **Cadastro de colmeias**:
  - Nome/identificador.
  - Localização (latitude/longitude ou endereço).
  - Data de instalação.
- **Registro de produções**:
  - Data de extração.
  - Quantidade de mel (kg).
  - Colmeias envolvidas.
- **Controle de manutenção**:
  - Troca de miogueiros ou peças.
  - Estado de conservação.
- **Período de descanso**:
  - Bloqueio ou aviso de extração no inverno.
  - Próxima data estimada para extração.

### Relatórios e visão geral
- Produção total e média por colmeia.
- Filtro por período e localização.
- Alertas de manutenção ou período de descanso.

---

## 🏗 Arquitetura

