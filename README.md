# Fabiano Sachs — Advocacia e Consultoria Jurídica

Landing page informativa em Next.js 16 e React 19, com identidade em dourado e verde profundo, layout responsivo e fontes locais.

## Executar

```sh
npm install
npm run dev
```

Para produção:

```sh
npm run build
npm run start
```

## Conteúdo e preferências

- Português é o idioma inicial. O controle PT / EN troca todos os textos da página, os rótulos acessíveis, o idioma do documento e os metadados de título e descrição.
- O botão de tema alterna entre as versões clara e escura.
- Idioma e tema são preservados no `localStorage`. Quando o armazenamento não está disponível, os controles continuam funcionando durante a sessão.
- Os controles de navegação apenas deslocam a página para as seções. Não alteram a URL.
- Telefone e e-mail são textos selecionáveis, sem `tel:`, `mailto:`, WhatsApp ou outros redirecionamentos. Não há formulário nem coleta de dados.

Os textos dos dois idiomas estão em `src/lib/content.ts`. A página está em `src/components/landing-page.tsx`; os estilos em `src/app/globals.css`.

## Identidade e recursos visuais

O monograma vetorial em `src/components/monogram.tsx` foi construído a partir das referências visuais fornecidas. O favicon usa a mesma direção visual. As fontes Cormorant Garamond e Manrope são servidas localmente; as licenças OFL estão em `src/app/fonts/licenses/`.

A imagem de apoio em `public/images/architecture.webp` foi criada com a ferramenta integrada **imagegen**, convertida para WebP e inspecionada visualmente. Ela representa arquitetura genérica e não retrata um escritório ou tribunal específico.

Prompt utilizado:

> Use case: photorealistic-natural.
> Asset type: editorial architectural photograph for the tall right-half hero of a refined Brazilian legal consultancy website.
> Primary request: a close upward oblique view of monumental classical courthouse limestone fluted columns. A beautifully sculpted Ionic or Corinthian capital on the right, with a rhythm of columns receding on the left.
> Style/medium: exceptionally realistic architectural editorial photography, fine natural limestone grain and subtle patina, restrained and timeless.
> Composition/framing: vertical 3:4 image, architectural details fill the frame, strong perspective and ordered rhythm.
> Lighting/mood: softly warm daylight, sophisticated deep charcoal shadows, muted stone highlights, calm and dignified.
> Color palette: warm charcoal, desaturated limestone, quiet antique-gold warmth.
> Constraints: generic architectural building rather than an identifiable real courthouse. No text, people, lettering, symbols, logos, watermarks, gavels, or scales of justice.
