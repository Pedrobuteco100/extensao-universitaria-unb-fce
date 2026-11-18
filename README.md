# Extensão Universitária na FCE

Site institucional educativo sobre cuidados paliativos — Brasília/DF.
Responsável informada: Lara Sadê Sousa Lira.

Stack: React 19 + Vite, Tailwind CSS v4, React Router, Lucide React.

## Como executar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev       # servidor local em http://localhost:5173
npm run build     # gera a versão de produção em dist/
npm run preview   # serve o conteúdo de dist/ localmente
```

## Estrutura

```
src/
├── assets/            ilustração do hero (SVG)
├── components/
│   ├── common/        Seo, Section, SectionHeading, Card, ButtonLink, PageHero
│   ├── navigation/    Header, Footer
│   ├── sections/      Hero, Pillars, PalliativeIntro, LeagueQuestions, ContactCTA
│   └── forms/         ContactForm, FormField, validateContact
├── data/
│   ├── site.js        informações institucionais e menu
│   └── content.js     textos editoriais (pilares, perguntas da liga, temas, referências)
├── layouts/           MainLayout (header, footer, link "pular para o conteúdo")
├── pages/             Home, About, PalliativeCare, PatientsFamilies, Contact, NotFound
├── routes/router.jsx  definição das rotas
├── services/          contactService (integração futura do formulário)
└── styles/index.css   tokens do design system (cores, fontes, animação)
```

- Textos institucionais: `src/data/site.js`.
- Textos editoriais: `src/data/content.js`.
- Visual: definido no bloco `@theme` de `src/styles/index.css`. Cores: cinza elefante claro `#E7E6E3`, creme `#F7F3E9`, azul royal `#2547A8` e azul profundo `#172F59`. Fontes: Times New Roman nos títulos (Tinos como alternativa web) e Segoe UI/Tahoma nos textos. Estética quadrada e brutalista: nenhum canto arredondado (os raios do Tailwind estão zerados no `@theme`), bordas grossas em azul profundo e botões sólidos com sombra dura (classes `btn-solid` e `btn-outline`). O site não usa animações nem transições.
- Fotografias: `src/data/images.js` (componente `Photo`).
- Logo da FCE/UnB: `public/fce-unb-logo.png`, fornecido pela equipe. Aparece no cabeçalho, no rodapé e como ícone da aba.

## Formulário de contato

Nesta versão o formulário é **demonstrativo**: valida os campos, mas não envia nem armazena dados, e informa isso ao usuário.

> Para a apresentação demonstrativa, **não** defina `VITE_CONTACT_ENDPOINT` no Netlify. Sem essa variável, o formulário nunca envia dados.

Para ativar o envio futuramente, crie um arquivo `.env` com o endpoint de um serviço de formulários que aceite JSON via POST:

```
VITE_CONTACT_ENDPOINT=https://exemplo-de-servico/endpoint
```

O envio é feito por `src/services/contactService.js`. Revise a política de privacidade (LGPD) do serviço escolhido antes de ativar.

## Publicação gratuita no Netlify

O projeto já inclui `netlify.toml` (build e fallback de rotas) e `public/_redirects` (copiado para `dist/`), para que URLs como `/sobre` funcionem ao recarregar a página ou ao abrir um link direto.

**Opção A — Netlify Drop (mais simples, sem Git):**

1. Execute `npm run build`.
2. Acesse https://app.netlify.com/drop e entre com uma conta gratuita.
3. Arraste a pasta `dist/` para a página.
4. O Netlify gera um link `https://<nome>.netlify.app`. Em *Site configuration → Change site name*, é possível escolher um nome. O site atual está em https://extensao-fce.netlify.app.

Para atualizar, gere um novo build e arraste `dist/` novamente em *Deploys*.

**Opção B — Netlify CLI:**

```bash
npx netlify-cli deploy --prod --dir=dist
```

Se o link abrir a tela "This site is private", a equipe Netlify está com *Team protection* ativa: desative em *Site configuration → Access & security → Visitor access* para tornar o site público.

**Compartilhar:** envie o link `https://<nome>.netlify.app`. O site é público para quem tiver o link.

## Pendências para uma versão definitiva

1. **Revisão técnica do conteúdo de saúde.** Itens marcados com `review: true` em `src/data/content.js` (definição, princípios, desde o diagnóstico, qualidade de vida, alívio do sofrimento, equipe) devem ser revisados por profissional de saúde qualificado. Os textos seguem a OMS, o Ministério da Saúde (Política Nacional de Cuidados Paliativos — Portaria GM/MS nº 3.681/2024) e materiais da ANCP, mas não foram validados por especialista.
2. **Fotografias.** O site usa 6 fotografias ilustrativas do Unsplash (Licença Unsplash, uso gratuito), listadas com autor e link em `src/data/images.js` e creditadas no rodapé. São servidas pelo CDN do Unsplash em WebP/AVIF. Não retratam a equipe nem atividades do projeto. Fotos institucionais autorizadas podem substituí-las nesse mesmo arquivo.
3. **Contato.** E-mail oficial: liacup.unb@gmail.com (`src/data/site.js`). Nenhum telefone, endereço ou rede social foi informado.
4. **Pesquisa e perguntas da liga acadêmica.** O material não está no projeto e precisa ser fornecido pela equipe antes de ser publicado.
4. **Serviço de formulário** e **política de privacidade** (LGPD) a definir.
5. **Domínio, imagem de compartilhamento (og:image) e favicon definitivo** — o favicon atual é um círculo neutro provisório, não um logotipo.
6. **Links de referência** (OMS e ANCP) responderam normalmente em 10/11/2026; reconferir periodicamente.
7. Metadados por página são definidos no cliente (React 19). Para SEO avançado, avaliar pré-renderização futuramente.
