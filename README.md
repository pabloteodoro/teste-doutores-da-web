# Teste Técnico Front-end (Júnior) - Doutores da Web

Repositório destinado ao desenvolvimento do teste prático para a vaga de **Desenvolvedor Front-end Júnior** na empresa **Doutores da Web**. O objetivo do projeto é avaliar competências em estruturação semântica, estilização avançada, fidelidade ao layout proposto e responsividade fluida entre dispositivos desktop e mobile.

## 🚀 Funcionalidades

* **Menu com Submenus Multinível:** Suporte a dropdowns em cascata (Submenu 1 e Submenu 2).
    * *Desktop:* Ativado por hover com pontes de foco em CSS para evitar o fechamento precoce do menu.
    * *Mobile:* Menu empilhado no formato acordeão integrado via JavaScript (Vanilla) para melhor usabilidade em dispositivos touch.
* **Slider Responsivo:** Carrossel de banners principais implementado de forma performática através da biblioteca **Splide.js**.
* **Imagens Fluidas:** Utilização da propriedade `object-fit: cover` nas seções de conteúdo para garantir que as proporções das imagens se adaptem perfeitamente aos containers sem distorção.
* **Design Totalmente Responsivo:** Breakpoints estratégicos para Media Queries (`992px` e `600px`), garantindo legibilidade e uma experiência fluida em smartphones, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`).
* **CSS3:** Estilização moderna utilizando conceitos de CSS Grid, Flexbox e regras avançadas de Media Queries.
* **JavaScript (ES6+):** Lógica nativa (Vanilla) para controle de comportamento interativo do menu em telas menores.
* **Splide.js (v4.1.4):** Biblioteca leve para a seção de sliders (carregada via CDN).

## 📁 Estrutura do Projeto

```text
├── index.html     # Estrutura principal da página
├── style.css      # Estilização completa e media queries
├── script.js      # Inicialização do carrossel e comportamento mobile
└── logo.png       # Arquivo de imagem do logotipo da empresa
