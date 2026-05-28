# Engenharia de Software N2: Guia de Estudo

Site estático multipágina para estudar Introdução a Engenharia de Software com base nos PDFs das aulas 1 a 8.

O projeto foi montado para revisão de prova: resumos por aula, pontos que costumam cair, pegadinhas, questões objetivas, atividades reais do curso e exemplos de entrega externa.

## Como visualizar

Não precisa de build nem instalação de dependências.

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

## Conteúdo

- Aula 1: fundamentos de Engenharia de Software
- Aula 2: paradigmas, processos e desenvolvimento ágil
- Aula 3: Engenharia de Requisitos
- Aula 4: especificação, SRS, casos de uso e historias de usuário
- Aula 5: modelagem com diagrama de casos de uso
- Aula 6: projeto, arquitetura, implementação e implantação
- Aula 7: qualidade, defeito, erro, falha, verificacao, validação e testes
- Aula 8: evolução, sistemas legados e manutencao

## Aviso sobre complementos

Alguns blocos aparecem marcados como:

```text
Complemento fora do material base
```

Esses trechos não foram retirados diretamente dos PDFs. Eles foram adicionados como reforco de estudo quando o material da aula fica introdutório ou raso para prova pratica.

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

O projeto está configurado para deploy estático.

Na Vercel:

- Framework Preset: `Other`
- Build Command: vazio
- Output Directory: vazio ou raiz do projeto
- Root Directory: a raiz deste repositório
