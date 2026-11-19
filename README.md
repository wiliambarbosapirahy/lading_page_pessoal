# Wiliam Desing — landing page

Landing page em português, HTML/CSS/JavaScript sem dependências de execução.

## Conteúdo

- Identidade: Wiliam Desing, conforme grafia solicitada.
- WhatsApp: +55 55 9112-0509, preservado exatamente como informado.
- Start: R$ 1.290; PRO: R$ 2.290; Expansão: R$ 3.490.
- Premiações: 4 Top de Marketing RS, 5 Top of Mind MG, 4 Top of Mind RS e 3 Marcas de Quem Decide. Reconhecimentos atribuídos às empresas e marcas da trajetória profissional.
- Experiência: 12 anos no mercado e 9 anos na Pirahy Alimentos.
- Formações: nomenclaturas fornecidas pelo usuário na última revisão.

## Estrutura

`dist/index.html` contém todo o conteúdo, com links de WhatsApp funcionais também sem JavaScript. `dist/styles.css` contém estilos responsivos. `dist/app.js` controla o menu móvel, navegação por seções e mensagens dos planos. O número e o conteúdo das mensagens estão nos links e no JavaScript.

As imagens foram fornecidas pelo usuário e otimizadas em WebP, preservando o conteúdo. A logo original é utilizada no cabeçalho e no rodapé, em tamanho maior no rodapé. A seção Últimos projetos mostra, nessa ordem, Sempre & Bom, Pirahy Alimentos e Express Protein. As imagens podem ser abertas integralmente em uma nova aba. Fotos de estúdio continuam na seção Por trás da criação.

O azul de destaque solicitado é `#008bff`, substituindo as ocorrências de `#8da6ff` da primeira versão.

Os botões principais de WhatsApp usam o degradê `#008bff` → `#002fff`, inclusive ao passar o mouse. O Plano Start apresenta logotipo, versões e variações e conceito resumido.

## Executar localmente

O projeto é estático e não exige instalação de pacotes nem compilação. Com Python 3 instalado, execute na raiz do repositório:

```sh
python3 -m http.server 8080 --directory dist
```

Abra `http://localhost:8080`. Para publicar em uma hospedagem estática, use o conteúdo de `dist/`.

## Organização do repositório

- `dist/index.html`: seções, planos e conteúdo da landing page.
- `dist/styles.css`: cores, tipografia e apresentação responsiva.
- `dist/app.js`: menu móvel, navegação e mensagens de WhatsApp.
- `dist/assets/`: logo, fotos, projetos, pacotes, troféus e fontes.
- `.openai/hosting.json`: configuração da publicação existente no Sites.

As fotografias, marcas e projetos foram fornecidos pelo proprietário. A licença OFL incluída se aplica à fonte Nacelle; não estende uma licença de uso às imagens e marcas.

Nacelle é distribuída sob SIL Open Font License; licença em `dist/assets/fonts/OFL-Nacelle.txt`. O template Open, da Cruip, foi usado como referência de estilo. O código da página foi desenvolvido para este projeto.

Não há formulário, analytics, cookies de rastreamento ou envio automático de mensagens. Os botões abrem o WhatsApp com texto preenchido. Prazo, revisões e condições comerciais adicionais são combinados no atendimento.

O manifesto `.openai/hosting.json` identifica o Site e define `dist` como diretório estático.
