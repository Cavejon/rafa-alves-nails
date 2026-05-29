# 🌸 Estúdio Sublime - Landing Page Premium

Uma Landing Page sofisticada e minimalista para um estúdio de beleza premium especializado em Nails & Lashes, desenvolvida com Angular 21 Standalone Components e Tailwind CSS.

## ✨ Características

### Design
- **Mobile First**: Design responsivo que funciona perfeitamente em todos os dispositivos
- **Minimalista & Elegante**: Paleta de cores neutras (off-white, bege, nude, cinza chumbo)
- **Premium**: Transmite luxo discreto, delicadeza e refinamento
- **Clean**: Interface limpa e sofisticada

### Funcionalidades
- ✅ Navbar sticky com navegação inteligente
- ✅ Hero Section com CTAs impactantes
- ✅ About Section com highlights e benefícios
- ✅ Services Section com separação Nails & Lashes
- ✅ Pricing Section com 3 cards de preços (incluindo combo destacado)
- ✅ Testimonials Section com depoimentos de clientes
- ✅ Contact Section com formulário funcional
- ✅ Footer com links, redes sociais e copyright

### Stack Técnico
- **Framework**: Angular 21+ com Standalone Components
- **Styling**: Tailwind CSS v3
- **Linguagem**: TypeScript
- **Build Tool**: Angular CLI com esbuild

## 📁 Estrutura do Projeto

```
src/app/
├── data/
│   └── data.ts                    # Mock data (serviços, preços, depoimentos)
├── components/
│   ├── layout/
│   │   ├── navbar/
│   │   │   └── navbar.ts
│   │   └── footer/
│   │       └── footer.ts
│   └── sections/
│       ├── hero/
│       │   └── hero.ts
│       ├── about/
│       │   └── about.ts
│       ├── services/
│       │   └── services.ts
│       ├── pricing/
│       │   └── pricing.ts
│       ├── testimonials/
│       │   └── testimonials.ts
│       └── contact/
│           └── contact.ts
├── app.ts                         # Componente raiz
└── ...

src/
├── styles.scss                    # Estilos globais com Tailwind
└── main.ts                        # Bootstrap da aplicação

tailwind.config.js                # Configuração Tailwind
postcss.config.js                 # Configuração PostCSS
```

## 🚀 Como Rodar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm start
```
A aplicação estará disponível em `http://localhost:4200`

### Build de Produção
```bash
npm run build
```

### Testes
```bash
npm test
```

## 📝 Seções Principais

### 1. Navbar
- Logo: "Estúdio Sublime"
- Links de navegação: Sobre, Serviços, Galeria, Contato
- Botão CTA "Agendar" destacado
- Design responsivo com menu mobile

### 2. Hero Section
- Título principal: "Beleza Sublime."
- Subtítulo: "Especialistas em Nails & Lashes premium"
- Dois botões CTA: "Agendar pelo WhatsApp" e "Ver serviços"
- Background gradient elegante

### 3. About Section
- Descrição do estúdio e valores
- 3 tags de destaque: Estética Premium, Ambiente Acolhedor, Profissionais Especialistas
- Botões: "Agendar horário" e "Ver galeria"

### 4. Services Section
- **Unhas**: Alongamento, Manicure Premium, Nail Art, Spa das Mãos
- **Cílios**: Extensão, Volume Brasileiro, Volume Russo, Lash Lifting
- Layout em 2 colunas com descrições

### 5. Pricing Section
- **Card 1 (Unhas)**: R$120
- **Card 2 (Cílios)**: R$130
- **Card 3 (Combo - Destacado)**: R$220 - "MAIS POPULAR"
- Cada card com lista de serviços e botão "Agendar"

### 6. Testimonials Section
- 3 depoimentos com 5 estrelas
- Nome, profissão e texto do cliente
- Layout em grid responsivo

### 7. Contact Section
- Formulário com campos: Nome, Email, Mensagem
- Informações: Telefone, Email, Endereço
- Horários de funcionamento
- Mensagem de sucesso após envio

### 8. Footer
- Logo e descrição do estúdio
- Links de navegação
- Redes sociais (LinkedIn, Twitter, Instagram)
- Copyright 2024–2026

## 🎨 Paleta de Cores

Usando as cores padrão do Tailwind com foco em neutrals:
- **Background**: `neutral-50` (off-white)
- **Text Principal**: `neutral-900` (preto chumbo)
- **Text Secundário**: `neutral-600` (cinza médio)
- **Accents**: `neutral-800` / `neutral-900`
- **Borders**: `neutral-200`

## 🔧 Configuração Tailwind

O arquivo `tailwind.config.js` está configurado para:
- Detectar classes em arquivos `.ts`, `.html`, `.tsx`, `.jsx`
- Usar cores padrão do Tailwind (incluindo neutras)
- Suportar animações custom

## 📦 Mock Data

Todos os dados (serviços, preços, depoimentos) são gerenciados em `src/app/data/data.ts`, permitindo fácil atualização sem alterar HTML.

### Dados Disponíveis:
- `SERVICES`: Lista de serviços por categoria
- `PRICING_CARDS`: Informações de preços
- `TESTIMONIALS`: Depoimentos de clientes
- `CONTACT_INFO`: Dados de contato
- `HIGHLIGHTS`: Tags destacadas

## ♿ Acessibilidade

- Atributos `aria-label` em botões e links
- Navegação semântica com âncoras
- Contraste de cores adequado
- Focus styles para teclado

## 📱 Responsividade

A página é totalmente responsiva usando:
- Classes Tailwind responsive: `sm:`, `md:`, `lg:`
- Flexbox e Grid layouts
- Imagens e containers flexíveis

## 🔐 Boas Práticas

✅ Components Standalone (sem módulos)
✅ Sem código hardcoded (tudo em `data.ts`)
✅ Tipagem TypeScript completa
✅ Componentes reutilizáveis
✅ Estilos centralizados com Tailwind
✅ Formulário funcional com validação básica

## 🌐 Próximos Passos (Sugestões)

- [ ] Integrar API real de agendamentos
- [ ] Conectar WhatsApp Business API
- [ ] Adicionar sistema de galeria de imagens
- [ ] Implementar analytics
- [ ] Adicionar animações com Framer Motion
- [ ] Criar painel admin para gerenciar dados
- [ ] Implementar sistema de reviews/comentários
- [ ] Multi-idioma (PT-BR, EN)

## 📞 Informações de Contato

**Estúdio Sublime**
- 📱 +55 (21) 98765-4321
- 📧 contato@estudiosubilme.com.br
- 📍 Rua da Beleza, 123 - Rio de Janeiro, RJ

**Horários:**
- Seg–Sex: 9h–19h
- Sábado: 10h–16h
- Domingo: Fechado

## 📄 Licença

© 2024–2026 Estúdio Sublime. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Angular & Tailwind CSS**
