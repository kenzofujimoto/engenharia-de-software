# Engenharia de Software N2 - Guia de Estudo

Site estatico multipagina para estudar Introducao a Engenharia de Software com base nos PDFs das aulas 1 a 8.

O projeto foi montado para revisao de prova: resumos por aula, pontos que costumam cair, pegadinhas, questoes objetivas, atividades reais do curso e exemplos de entrega externa.

## Como visualizar

Nao precisa de build nem instalacao de dependencias.

Abra direto no navegador:

```text
index.html
```

Ou rode um servidor local:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8080/index.html
```

## Conteudo

- Aula 1: fundamentos de Engenharia de Software
- Aula 2: paradigmas, processos e desenvolvimento agil
- Aula 3: Engenharia de Requisitos
- Aula 4: especificacao, SRS, casos de uso e historias de usuario
- Aula 5: modelagem com diagrama de casos de uso
- Aula 6: projeto, arquitetura, implementacao e implantacao
- Aula 7: qualidade, defeito, erro, falha, verificacao, validacao e testes
- Aula 8: evolucao, sistemas legados e manutencao

## Aviso sobre complementos

Alguns blocos aparecem marcados como:

```text
Complemento fora do material base
```

Esses trechos nao foram retirados diretamente dos PDFs. Eles foram adicionados como reforco de estudo quando o material da aula fica introdutorio ou raso para prova pratica.

## Estrutura

```text
.
+-- README.md
+-- index.html
+-- teoria/
+-- atividades/
+-- revisao/
+-- assets/
+-- vercel.json
```

## Deploy na Vercel

O projeto esta configurado para deploy estatico.

Na Vercel, use:

- Framework Preset: `Other`
- Build Command: vazio
- Output Directory: vazio ou raiz do projeto
