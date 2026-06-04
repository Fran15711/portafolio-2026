(() => {
  "use strict";

  const translations = {
  "es": {
    "meta.title": "Francisco Noriega | Portafolio de Marketing",
    "nav.evidence": "Evidencia",
    "nav.impact": "Impacto",
    "nav.galga": "Galga",
    "nav.projects": "Proyectos",
    "nav.certs": "Certificaciones",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Growth · Creatividad · Revenue",
    "hero.title": "Hola :) más que marketing, contruyo sistemas de adquisición",
    "hero.lead": "  Si estás viendo esto es porque quiero trabajar contigo y agradezco mucho tu tiempo, tu interés y tu buena intuición :) En este portafolio encontrarás evidencias y resultados de las estrategias y proyectos de los que he sido responsable",
    "hero.ctaEvidence": "Ver evidencia",
    "hero.ctaProjects": "Explorar proyectos",
    "hero.ctaCv": "Descargar CV",
    "hero.signal1": "B2B",
    "hero.signal2": "B2C",
    "hero.signal3": "SEO",
    "hero.signal4": "CRM",
    "hero.signal5": "Pauta",
    "hero.signal6": "Contenido",
    "evidence.eyebrow": "Recorrido rápido",
    "evidence.title": "Ve directo a lo que importa.",
    "evidence.text": "Reportes, proyectos y piezas reales que puedes abrir.",
    "evidence.galga": "Reporte anual Galga",
    "evidence.galgaSub": "ventas, inversión y resultados",
    "evidence.colombia": "Reporte ETM Colombia",
    "evidence.colombiaSub": "seguimiento mensual",
    "evidence.semrush": "SEMrush Galga",
    "evidence.semrushSub": "tráfico y SEO orgánico",
    "evidence.projects": "Proyectos destacados",
    "evidence.projectsSub": "marcas, sectores y entregables",
    "evidence.reel": "Demo Reel",
    "evidence.reelSub": "video, edición y contenido",
    "evidence.certs": "Certificaciones",
    "evidence.certsSub": "Google, HubSpot e inglés",
    "impact.eyebrow": "Impacto resumido",
    "impact.title": "Resultados en corto.",
    "metric.revenue": "mensuales atribuidos a marketing",
    "metric.leads": "leads mensuales",
    "metric.sql": "SQLs aprox. al mes",
    "metric.seo": "posiciones SEO en búsquedas industriales",
    "galga.eyebrow": "Caso principal",
    "galga.title": "Galga Maquinaria",
    "galga.lead": "Producto técnico, venta consultiva y ticket alto.",
    "galga.block1": "SEO comercial",
    "galga.block1Sub": "intención de compra",
    "galga.block2": "CRM + atribución",
    "galga.block2Sub": "fuente → lead → asesor → venta",
    "galga.block3": "Activos de venta",
    "galga.block3Sub": "web, fichas, videos, 3D",
    "galga.block4": "Pauta + seguimiento",
    "galga.block4Sub": "Meta, Google y conversación comercial",
    "galga.keywords": "Búsquedas trabajadas",
    "projects.filterLabel": "Filtrar por:",
    "projects.sectors": "Sectores",
    "projects.workTypes": "Tipos de trabajos",
    "projects.title": "Proyectos destacados",
    "projects.subtitle": "Haz clic en una marca para ver entregables.",
    "sector.security": "Seguridad",
    "sector.apparel": "Ropa y Calzado",
    "sector.manufacturing": "Manufactura",
    "sector.food": "Alimentos y Bebidas",
    "sector.realestate": "Bienes Raíces",
    "sector.agency": "Agencia de Marketing",
    "sector.tourism": "Turismo y Hotelería",
    "sector.mall": "Plaza Comercial",
    "sector.supplements": "Suplementos",
    "sector.leasing": "Arrendamiento",
    "sector.machinery": "Maquinaria y Transporte",
    "sector.agro": "Agroalimentario",
    "sector.appraisals": "Avalúos",
    "sector.art": "Arte y Decoración",
    "sector.medical": "Médico",
    "work.research": "Investigación de mercado",
    "work.radio": "Comercial de radio",
    "work.influencers": "Campañas con Influencers",
    "work.photo": "Fotografía",
    "work.web": "Página web - E-commerce",
    "work.posts": "Posts",
    "work.expo": "Expo",
    "work.video": "Video",
    "work.salesDeck": "Presentación de Ventas",
    "work.blog": "Blog SEO",
    "work.internal": "Endomarketing",
    "work.communication": "Estrategia de Comunicación",
    "work.mystery": "Mistery Shopper",
    "work.mailing": "Mailing",
    "work.naming": "Naming",
    "cert.eyebrow": "Evidencia profesional",
    "cert.title": "Certificaciones",
    "cert.google": "Búsqueda Google Ads",
    "cert.email": "Inbound Marketing",
    "cert.content": "Software de Marketing de Hubspot",
    "cert.english": "Inglés: evaluación C1",
    "exp.eyebrow": "Trayectoria",
    "exp.title": "Creatividad, contenido y growth.",
    "exp.galga": "Growth, SEO, CRM, pauta y atribución comercial para maquinaria industrial.",
    "exp.eva": "Contenido técnico B2B, SEO, email y materiales comerciales.",
    "exp.mdr": "Estrategias para 15+ marcas: branding, SEO, copy, guiones y KPIs.",
    "exp.mex7": "Branding, Shopify, redes, campañas, ferias y prospección.",
    "exp.letter": "Carta",
    "reel.eyebrow": "Contenido audiovisual",
    "reel.title": "Demo Reel",
    "reel.text": "Una muestra breve de video, edición y dirección de contenido.",
    "contact.eyebrow": "Contacto",
    "contact.title": "¿Agendamos una llamada?",
    "contact.text": "Si llegaste hasta aquí, gracias por revisar mi trabajo. Me dará gusto hablar contigo.",
    "contact.email": "Enviar correo",
    "contact.cvEs": "CV Español",
    "contact.cvEn": "CV English",
    "footer.text": "Francisco Noriega · Marketing Portfolio",
    "popup.close": "Cerrar"
  },
  "en": {
    "meta.title": "Francisco Noriega | Marketing Portfolio",
    "nav.evidence": "Evidence",
    "nav.impact": "Impact",
    "nav.galga": "Galga",
    "nav.projects": "Projects",
    "nav.certs": "Certifications",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "Growth · Creative · Revenue",
    "hero.title": "Hello :) I'm Francisco. I enjoy building marketing systems that generate real results.",
    "hero.lead": "If you're viewing this portfolio, it's because I'd love the opportunity to work with you. Thank you for your time, your interest, and your good intuition :) Here you'll find real projects, results, and examples of the strategies and initiatives I've been responsible for",
    "hero.ctaEvidence": "See evidence",
    "hero.ctaProjects": "Explore projects",
    "hero.ctaCv": "Download CV",
    "hero.signal1": "B2B",
    "hero.signal2": "B2C",
    "hero.signal3": "SEO",
    "hero.signal4": "CRM",
    "hero.signal5": "Paid media",
    "hero.signal6": "Content",
    "evidence.eyebrow": "Quick path",
    "evidence.title": "Go straight to what matters.",
    "evidence.text": "Reports, projects and real work you can open.",
    "evidence.galga": "Galga annual report",
    "evidence.galgaSub": "sales, investment and results",
    "evidence.colombia": "ETM Colombia report",
    "evidence.colombiaSub": "monthly executive tracking",
    "evidence.semrush": "Galga on SEMrush",
    "evidence.semrushSub": "traffic and organic SEO",
    "evidence.projects": "Featured projects",
    "evidence.projectsSub": "brands, industries and deliverables",
    "evidence.reel": "Demo Reel",
    "evidence.reelSub": "video, editing and content",
    "evidence.certs": "Certifications",
    "evidence.certsSub": "Google, HubSpot and English",
    "impact.eyebrow": "Impact snapshot",
    "impact.title": "Results, in short.",
    "metric.revenue": "monthly revenue attributed to marketing",
    "metric.leads": "monthly leads",
    "metric.sql": "approx. SQLs per month",
    "metric.seo": "SEO positions in industrial searches",
    "galga.eyebrow": "Main case",
    "galga.title": "Galga Maquinaria",
    "galga.lead": "Technical product, consultative sales and high-ticket buying decisions.",
    "galga.block1": "Commercial SEO",
    "galga.block1Sub": "purchase intent",
    "galga.block2": "CRM + attribution",
    "galga.block2Sub": "source → lead → advisor → sale",
    "galga.block3": "Sales assets",
    "galga.block3Sub": "website, spec sheets, videos, 3D",
    "galga.block4": "Paid media + follow-up",
    "galga.block4Sub": "Meta, Google and sales conversation",
    "galga.keywords": "Targeted searches",
    "projects.filterLabel": "Filter by:",
    "projects.sectors": "Industries",
    "projects.workTypes": "Work types",
    "projects.title": "Featured projects",
    "projects.subtitle": "Click a brand to view deliverables.",
    "sector.security": "Security",
    "sector.apparel": "Apparel and Footwear",
    "sector.manufacturing": "Manufacturing",
    "sector.food": "Food and Beverage",
    "sector.realestate": "Real Estate",
    "sector.agency": "Marketing Agency",
    "sector.tourism": "Tourism and Hospitality",
    "sector.mall": "Shopping Center",
    "sector.supplements": "Supplements",
    "sector.leasing": "Leasing",
    "sector.machinery": "Machinery and Transport",
    "sector.agro": "Agribusiness",
    "sector.appraisals": "Appraisals",
    "sector.art": "Art and Decoration",
    "sector.medical": "Medical",
    "work.research": "Market research",
    "work.radio": "Radio commercial",
    "work.influencers": "Influencer campaigns",
    "work.photo": "Photography",
    "work.web": "Website / E-commerce",
    "work.posts": "Posts",
    "work.expo": "Expo",
    "work.video": "Video",
    "work.salesDeck": "Sales deck",
    "work.blog": "SEO blog",
    "work.internal": "Internal marketing",
    "work.communication": "Communication strategy",
    "work.mystery": "Mystery shopper",
    "work.mailing": "Mailing",
    "work.naming": "Naming",
    "cert.eyebrow": "Professional evidence",
    "cert.title": "Certifications",
    "cert.google": "Google Ads Search",
    "cert.email": "Inbound Marketing",
    "cert.content": "Hubspot Marketing Hub",
    "cert.english": "English: C1 assessment",
    "exp.eyebrow": "Career path",
    "exp.title": "Creative work, content and growth.",
    "exp.galga": "Growth, SEO, CRM, paid media and commercial attribution for industrial machinery.",
    "exp.eva": "Technical B2B content, SEO, email and commercial materials.",
    "exp.mdr": "Strategies for 15+ brands: branding, SEO, copy, scripts and KPIs.",
    "exp.mex7": "Branding, Shopify, social media, campaigns, trade shows and prospecting.",
    "exp.letter": "Letter",
    "reel.eyebrow": "Video content",
    "reel.title": "Demo Reel",
    "reel.text": "A brief sample of video, editing and content direction.",
    "contact.eyebrow": "Contact",
    "contact.title": "Schedule a call?",
    "contact.text": "If you made it this far, thank you for reviewing my work. I’d be happy to talk.",
    "contact.email": "Email me",
    "contact.cvEs": "Spanish CV",
    "contact.cvEn": "English CV",
    "footer.text": "Francisco Noriega · Marketing Portfolio",
    "popup.close": "Close"
  }
};
  const dynamicTranslationsRaw = {
    "Comercial de Radio": "Radio commercial",
    "Diseño y copy de posts": "Post design and copywriting",
    "Campaña de comunicación": "Communication campaign",
    "Investigación de mercado y segmentación": "Market research and segmentation",
    "Campañas con Influencers": "Influencer campaigns",
    "Shootings de producto y modelos": "Product and model shoots",
    "Ecommerce Shopify, Mercado Libre y Amazon": "Shopify, Mercado Libre and Amazon ecommerce",
    "Campaña Bota Vaquera": "Cowboy boot campaign",
    "Stand Expo Empaque Norte": "Expo Empaque Norte booth",
    "Videos recursos para labor de ventas": "Sales support videos",
    "Presentación de ventas": "Sales presentation",
    "Blogs SEO": "SEO blogs",
    "Campañas de Marketing": "Marketing campaigns",
    "Endomarketing": "Internal marketing",
    "Estrategia de Comunicación": "Communication strategy",
    "Mistery Shopper": "Mystery shopper",
    "Investigación de mercado": "Market research",
    "Posts Redes Sociales": "Social media posts",
    "Posts redes sociales": "Social media posts",
    "Posts Facebook/ Instagram": "Facebook / Instagram posts",
    "Posts Facebook": "Facebook posts",
    "Prospección de clientes": "Customer prospecting",
    "Catálogo": "Catalog",
    "Giveaway": "Giveaway",
    "Memorias de la Andrade (Abre otra ventana)": "Memorias de la Andrade (opens in a new tab)",
    "Cuadríptico": "Four-panel brochure",
    "Página web": "Website",
    "Página Web - E-commerce": "Website / E-commerce",
    "Sitio Web": "Website",
    "Sitio web": "Website",
    "Sitio Web Ecoparque Providencia": "Ecoparque Providencia website",
    "Página web - E-commerce": "Website / E-commerce",
    "Mailing": "Email marketing",
    "Videos": "Videos",
    "Video": "Video",
    "Videos de Activaciones": "Activation videos",
    "Videos Camila": "Camila videos",
    "Video Ecoparque": "Ecoparque video",
    "Recorrido UX": "UX walkthrough",
    "Naming de la marca": "Brand naming",
    "Análisis de Empaques": "Packaging analysis",
    "Blog SEO": "SEO blog",
    "Blog": "Blog",
    "CENTINELA: Empresa de alarmas, monitoreo y GPS para casas, negocios y automóviles": "CENTINELA: Alarm, monitoring and GPS company for homes, businesses and vehicles",
    "DENVER ICY: Empresa de ropa y calzado vaquero": "DENVER ICY: Western apparel and footwear company",
    "EVACOLORS: Empresa fabricante de crosslink foam-foamy": "EVACOLORS: Crosslink foam manufacturer",
    "ITALIAN COFFEE LEÓN: Marca de sucursales cafeterías": "ITALIAN COFFEE LEÓN: Coffee shop branch brand",
    "CHIMIRICA: Marca de chimichurri; aderezo para todas las comidas": "CHIMIRICA: Chimichurri and condiment brand",
    "MEX7 BOOTS: Empresa fabricante de botas vaqueras": "MEX7 BOOTS: Western boot manufacturer",
    "BIKIA: Desarrollo vertical construído en la colonia Andrade": "BIKIA: Vertical real estate development in Colonia Andrade",
    "MERCADOCTOR: Agencia de Innovación y Marketing": "MERCADOCTOR: Innovation and marketing agency",
    "ECOPARQUE PROVIDENCIA: Ecoparque en la Sierra de Durango": "ECOPARQUE PROVIDENCIA: Ecopark in the Durango mountains",
    "PLAZA NORTE: Plaza Comercial en Zona Norte, León, Gto.": "PLAZA NORTE: Shopping center in northern León, Guanajuato",
    "WELLNESS NOBRAND: Marca vendedora de aceites esenciales para mujeres": "WELLNESS NOBRAND: Essential oils brand for women",
    "ROCARENT: Marca de arrendamiento puro": "ROCARENT: Operating leasing brand",
    "PASEO MORELOS: Plaza Comercial en la zona noreste de León, Gto.": "PASEO MORELOS: Shopping center in northeastern León, Guanajuato",
    "ACABADOS DEL PACÍFICO: Empresa vendedora de materiales de barro para construcción en Sinaloa": "ACABADOS DEL PACÍFICO: Clay construction materials supplier in Sinaloa",
    "CAMPESTRE PROVIDENCIA: Empresa de venta y renta de cabañas en la sierra de Durango": "CAMPESTRE PROVIDENCIA: Cabin rental and sales company in the Durango mountains",
    "11INKS: Empresa fabricante y vendedora de arte decorativo": "11INKS: Decorative art manufacturer and seller",
    "SUMA LIFT: Empresa de renta y venta de montacargas": "SUMA LIFT: Forklift rental and sales company",
    "AGRO GUANAJUATO: Empresa de venta y distribución de plántula": "AGRO GUANAJUATO: Seedling sales and distribution company",
    "TORTIGAMA: Empresa de venta de maquinaria e insumos para hacer tortillas": "TORTIGAMA: Machinery and supplies company for tortilla production",
    "VALLUA: Empresa de avalúos": "VALLUA: Appraisal company",
    "TORRE NEEN: Desarrollo vertical en zona norte de León, Gto.": "TORRE NEEN: Vertical real estate development in northern León, Guanajuato",
    "SLIDER DESARROLLOS: Desarrolladora de proyectos arquitectónicos en Durango": "SLIDER DESARROLLOS: Architectural development company in Durango",
    "DRA. KAREN KELLY ODONTOPEDIATRA: Odontopediatra en Mazatlán": "DR. KAREN KELLY PEDIATRIC DENTIST: Pediatric dentist in Mazatlán"
};
  const dynamicTranslations = Object.fromEntries(Object.entries(dynamicTranslationsRaw).map(([key, value]) => [normalize(key), value]));
  let currentLang = localStorage.getItem("portfolioLang") || "es";

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .trim();
  }

  function t(key) {
    return translations[currentLang]?.[key] || translations.es?.[key] || key;
  }

  function localizeDynamic(value) {
    if (currentLang === "es") return value;
    return dynamicTranslations[normalize(value)] || value;
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "es";
    localStorage.setItem("portfolioLang", currentLang);
    document.documentElement.lang = currentLang;
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value) el.textContent = value;
    });
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      const active = button.dataset.langButton === currentLang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".dynamic-translatable").forEach((el) => {
      if (el.dataset.rawText) el.textContent = localizeDynamic(el.dataset.rawText);
    });
    document.querySelectorAll(".dynamic-button span[data-raw-text]").forEach((el) => {
      el.textContent = localizeDynamic(el.dataset.rawText);
    });
    document.querySelectorAll("[data-cv-download]").forEach((el) => {
      el.setAttribute("href", currentLang === "en" ? "assets/CV_Francisco_Noriega_EN.pdf" : "assets/CV_Francisco_Noriega_ES.pdf");
    });
  }

  function initLanguage() {
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
    });
    applyLanguage(currentLang);
  }

  window.openPopup = function openPopup(eventOrUrl, maybeUrl) {
    let url = maybeUrl || eventOrUrl;
    if (eventOrUrl && typeof eventOrUrl.preventDefault === "function") eventOrUrl.preventDefault();
    if (!url || typeof url !== "string") return;
    if (window.innerWidth < 980 || url.includes("semrush.com")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    overlay.innerHTML = `<div class="popup"><button class="popup__close" type="button">${t("popup.close")}</button><iframe src="${url}" loading="lazy"></iframe></div>`;
    document.body.appendChild(overlay);
    overlay.querySelector(".popup__close").addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (event) => { if (event.target === overlay) overlay.remove(); });
  };

  function initNav() {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  function initShinyButtons() {
    const buttons = [...document.querySelectorAll("[data-shiny-button]")];
    if (!buttons.length) return;
    const colorStops = [[0,"rgb(84,94,109)"],[0.2,"rgb(111,122,137)"],[0.4,"rgb(153,156,168)"],[0.6,"rgb(195,200,219)"],[0.9,"rgb(74,73,83)"],[1,"rgb(93,93,93)"]];
    const drawFns = buttons.map((button) => {
      const canvas = button.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      const draw = (x, y, i = 0) => {
        const rect = button.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        canvas.width = rect.width * ratio;
        canvas.height = rect.height * ratio;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.setTransform(ratio,0,0,ratio,0,0);
        const gradient = ctx.createLinearGradient(x / 10 - i * 40, y / 10, rect.width, rect.height);
        colorStops.forEach(([stop, color]) => gradient.addColorStop(stop, color));
        ctx.fillStyle = gradient;
        ctx.fillRect(0,0,rect.width,rect.height);
      };
      draw(window.innerWidth / 2, window.innerHeight / 2, 0);
      return draw;
    });
    document.addEventListener("mousemove", (event) => {
      drawFns.forEach((draw, i) => requestAnimationFrame(() => draw(event.clientX, event.clientY, i)));
    });
    window.addEventListener("resize", () => drawFns.forEach((draw, i) => draw(window.innerWidth/2, window.innerHeight/2, i)));
  }

  function initHexProjects() {
    const seccion3 = document.querySelector(".seccion3");
    const hexagons = [...document.querySelectorAll(".hex")];
    const filtro1 = document.getElementById("filtro1");
    const filtro2 = document.getElementById("filtro2");
    if (!seccion3 || !hexagons.length) return;

    const hexData = [
        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/refs/heads/main/radio.png', link: 'https://fran15711.github.io/radio/', text: 'Comercial de Radio', id2: 'comercial de radio' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postscentinela1/', text: 'Diseño y copy de posts', id2: 'Posts' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategia-de-comunicacion-centinela/', text: 'Campaña de comunicación', id2: 'Estrategia de Comunicación' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/investigacioncentinela/', text: 'Investigación de mercado y segmentación', id2: 'Investigación de mercado' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/centi.jpg',
          textColor: '#FFF',
          datatext: 'CENTINELA: Empresa de alarmas, monitoreo y GPS para casas, negocios y automóviles'
        },
            {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/main/influencers.png', link: 'https://fran15711.github.io/influencersdenver/', text:'Campañas con Influencers', id2: 'Campañas con Influencers' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/foto.png', link: 'https://fran15711.github.io/shootingproductosdenver/', text:'Shootings de producto y modelos', id2: 'Fotografía' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://fran15711.github.io/ecommercedenver/', text:'Ecommerce Shopify, Mercado Libre y Amazon', id2: 'Página web - E-commerce' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/botavaqueradenver/', text: 'Campaña Bota Vaquera', id2: 'Posts' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/dvr1.jpg',
          textColor: '#fff',
          datatext: 'DENVER ICY: Empresa de ropa y calzado vaquero'    
        },
         {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/main/expo.png', link: 'https://fran15711.github.io/standevacolors/', text:'Stand Expo Empaque Norte', id2: 'Expo' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://www.youtube.com/@evacolors', text:'Videos recursos para labor de ventas', id2: 'Video' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/presentacoinevacolors/', text:'Presentación de ventas', id2: 'Presentación de Ventas' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/blog.png', link: 'https://blog.evacolors.com/', text: 'Blogs SEO', id2: 'Blog' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/eva.jpg',
          textColor: '#000',
          datatext: 'EVACOLORS: Empresa fabricante de crosslink foam-foamy'
        },
        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsitaliancoffee/', text:'Campañas de Marketing', id2: 'Posts' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/endomarketing.png', link: 'https://fran15711.github.io/endomarketing/', text:'Endomarketing', id2: 'Endomarketing' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/italianestrategiadecomunicacion/', text:'Estrategia de Comunicación', id2: 'Estrategia de Comunicación' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/mistery.png', link: 'https://fran15711.github.io/misteryshopper/', text: 'Mistery Shopper', id2: 'Mistery Shopper' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/ita.jpg',
          textColor: '#fff',
          datatext: 'ITALIAN COFFEE LEÓN: Marca de sucursales cafeterías'
        },
            {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/investigaciondemercadochimirica/', text:'Investigación de mercado', id2: 'Investigación de Mercado' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postschimirica/', text:'Posts Redes Sociales', id2: 'Posts' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategiadecomunicacionchimirica/', text:'Estrategia de Comunicación', id2: 'Estrategia de Comunicación' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/morfologiadeempaques/', text: 'Análisis de Empaques', id2: 'Investigaciòn de Mercado'}
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/chi.jpg',
          textColor: '#fff',
          datatext: 'CHIMIRICA: Marca de chimichurri; aderezo para todas las comidas'
        },
        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsmex7boots/', text:'Posts Redes Sociales', id2: 'Posts' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/postsmex7boots/', text:'Prospección de clientes', id2: 'Investigaciòn de Mercado' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/catalogomex7boots/', id2: 'Presentación de Ventas', text:'Catálogo' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://www.instagram.com/p/CYWrMtgrqSt/?img_index=1', text: 'Giveaway', id2: 'Posts' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/mex7.jpg',
          textColor: '#000',
          datatext: 'MEX7 BOOTS: Empresa fabricante de botas vaqueras'
        },
         {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/memoriasdelandrade/', text:'Memorias de la Andrade (Abre otra ventana)', id2: 'Investigación de Mercado'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/cuadripticobka/', text:'Cuadríptico', id2: 'Presentación de Ventas' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsbikia/', text:'Posts redes sociales' , id2: 'Posts'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://bikia.mx/', text: 'Página web', id2: 'Página web - E-commerce' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/bikia.jpg',
          textColor: '#000',
          datatext: 'BIKIA: Desarrollo vertical construído en la colonia Andrade' 
        },
                       {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/mailing.png', link: 'https://fran15711.github.io/mdrmailing/', text:'Mailing', id2: 'Mailing' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://www.youtube.com/watch?v=2Hd1Rdo8umw', text:'Videos', id2: 'Video' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategiamdr/', text:'Estrategia de Comunicación', id2: 'Estrategia de Comunicación' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/blog.png', link: 'https://mercadr.com/blog/', text: 'Blog SEO', id2: 'Blog' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/mdr.jpg',
          textColor: '#fff',
          datatext: 'MERCADOCTOR: Agencia de Innovación y Marketing'               
        },
                            {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategiadecomunicacionprveco/', text:'Estrategia de Comunicación' , id2: 'Estrategia de Comunicación'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsprveco/', text:'Posts Providencia' , id2: 'Posts'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://ecoparqueprovidencia.com/', text:'Sitio Web Ecoparque Providencia', id2: 'Página web - E-commerce' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/videoprv/', text: 'Video Ecoparque', id2: 'Video' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/prveco.jpg',
          textColor: '#fff',
          datatext: 'ECOPARQUE PROVIDENCIA: Ecoparque en la Sierra de Durango'
        },
                                {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/activacionesplazanorte/', text:'Videos de Activaciones', id2: 'Video' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/videocamila/', text:'Videos Camila', id2: 'Video' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/presentacionplazanorte/', text:'Presentación de Ventas', id2: 'Presentación de Ventas' },
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/plazanorte.jpg',
          textColor: '#000',
          datatext: 'PLAZA NORTE: Plaza Comercial en Zona Norte, León, Gto.'
        },
                                {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsWNB/', text:'Posts Facebook/ Instagram', id2: 'Posts'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/blog.png', link: 'https://wellnessnobrand.com/blog-2/', text:'Blog', id2: 'Blog' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://www.youtube.com/watch?v=lNGgUKzngfs&t=6s', text:'Video', id2: 'Video' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://wellnessnobrand.com/', text: 'Sitio web', id2: 'Página web - E-commerce' }
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/wnb.jpg',
          textColor: '#fff',
          datatext: 'WELLNESS NOBRAND: Marca vendedora de aceites esenciales para mujeres'
        },
                                    {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/analyticsrocarent/', text:'Investigación de mercado', id2: 'Investigación de Mercado' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://fran15711.github.io/UXrocarent/', text:'Recorrido UX', id2: 'Página web - E-commerce' },
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/roc.jpg',
          textColor: '#000',
          datatext: 'ROCARENT: Marca de arrendamiento puro'                            
        },
                                    {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postspaseomorelos/', text:'Posts Facebook/ Instagram', id2: 'Posts' },
          ],
          image:'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/paseomorelos.jpg',
          textColor: '#000',
          datatext: 'PASEO MORELOS: Plaza Comercial en la zona noreste de León, Gto.'                            
        },
                                    {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/mailing.png', link: 'https://fran15711.github.io/mailingaco/', text:'Mailing', id2: 'Mailing' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsaco/', text:'Posts Facebook/ Instagram', id2: 'Posts'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://acabadosdelpacifico.com/', text:'Sitio Web', id2: 'Página Web - E-commerce' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/presentacionaco/', text:'Presentación de ventas', id2: 'Presentación de Ventas' },
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/aco.jpg',
          textColor: '#fff',
          datatext: 'ACABADOS DEL PACÍFICO: Empresa vendedora de materiales de barro para construcción en Sinaloa'                            
        },
                                    {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postprocamp/', text:'Posts Facebook', id2: 'Posts'},
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://campestreprovidencia.com/', text:'Página web', id2: 'Página Web - E-commerce' },
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/prvcam.jpg',
          textColor: '#fff',
          datatext: 'CAMPESTRE PROVIDENCIA: Empresa de venta y renta de cabañas en la sierra de Durango'                            
        },
                                        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://11inks.com/', text:'Página web' , id2: 'Página Web - E-commerce'},
    
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/11INKS.jpg',
          textColor: '#000',
          datatext: '11INKS: Empresa fabricante y vendedora de arte decorativo'                                
        },
                                    {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/sumposts/', text:'Posts Facebook', id2: 'Posts' },
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/sum.jpg',
          textColor: '#000',
          datatext: 'SUMA LIFT: Empresa de renta y venta de montacargas'
        },
                                        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://agrogto.com/', text:'Página web', id2: 'Página Web - E-commerce' },
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/agro.jpg',
          textColor: '#000',
          datatext: 'AGRO GUANAJUATO: Empresa de venta y distribución de plántula'                                
        },
                                        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://tortigama.com/', text:'Página web', id2: 'Página Web - E-commerce' },
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/tortiga.jpg',
          textColor: '#000',
          datatext: 'TORTIGAMA: Empresa de venta de maquinaria e insumos para hacer tortillas'                                
        },
                                            {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/naming.png', link: 'https://vallua.mx/somos-vallua/', text:'Naming de la marca',id2: 'Naming' },
                    { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://vallua.mx/', text:'Página web',id2: 'Página Web - E-commerce' },
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/val.jpg',
          textColor: '#fff',
          datatext: 'VALLUA: Empresa de avalúos'
        }, 
                                                {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/naming.png', link: 'https://torreneen.com/', text:'Naming de la marca',id2: 'Naming' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://torreneen.com/', text:'Página web',id2: 'Página Web - E-commerce' },
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/neen.jpg',
          textColor: '#fff',
          datatext: 'TORRE NEEN: Desarrollo vertical en zona norte de León, Gto.'                                        
        }, 
                                                    {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/naming.png', link: 'https://sliderdesarrollos.com/acerca-de-nosotros/', text:'Naming de la marca',id2: 'Naming' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://sliderdesarrollos.com/', text:'Página web',id2: 'Página Web - E-commerce' },
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/slider.jpg',
          textColor: '#fff',
          datatext: 'SLIDER DESARROLLOS: Desarrolladora de proyectos arquitectónicos en Durango'
        },
                                                        {
          buttons: [
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/kkposts/', text:'Posts Facebook/ Instagram',id2: 'Posts' },
            { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/videokk/', text:'Videos',id2: 'Video' },
    
          ],
          image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/kk.jpg',
          textColor: '#fff',
          datatext: 'DRA. KAREN KELLY ODONTOPEDIATRA: Odontopediatra en Mazatlán'                                                 
        },    
      ];

    const defaultImage = "https://raw.githubusercontent.com/Fran15711/prueba1/refs/heads/main/blanco.jpg";
    let currentImage = document.createElement("img");
    Object.assign(currentImage.style, {position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",zIndex:"-1",opacity:"0",pointerEvents:"none"});
    currentImage.src = defaultImage;
    seccion3.appendChild(currentImage);
    let currentButtons = [];
    let currentDatatextElement = null;

    hexagons.forEach((hex, index) => {
      hex.addEventListener("click", () => {
        const data = hexData[index];
        if (!data) return;
        removeButtons();
        changeImageWithSlider(data.image);
        changeDatatext(data.datatext, data.textColor || "#fff");
        createHexButtons(data.buttons || [], data.textColor || "#fff");
      });
    });

    filtro1?.addEventListener("change", applySectorFilter);
    filtro2?.addEventListener("change", applyWorkFilter);

    function applySectorFilter() {
      const selected = normalize(filtro1?.value || "");
      hexagons.forEach((hex) => {
        const img = hex.querySelector("img");
        const matches = !selected || normalize(hex.getAttribute("id")) === selected;
        if (img) {
          img.style.filter = matches ? "none" : "grayscale(100%)";
          img.style.opacity = matches ? "1" : "0.16";
        }
      });
    }

    function applyWorkFilter() {
      const selected = normalize(filtro2?.value || "");
      currentButtons.forEach((button) => {
        const matches = !selected || normalize(button.dataset.id2) === selected;
        button.style.opacity = matches ? "1" : "0.16";
        button.style.filter = matches ? "drop-shadow(0 16px 24px rgba(0,0,0,.28))" : "grayscale(100%)";
      });
      hexagons.forEach((hex, index) => {
        const img = hex.querySelector("img");
        const relatedButtons = hexData[index]?.buttons || [];
        const hasMatch = !selected || relatedButtons.some((btn) => normalize(btn.id2) === selected);
        if (img) {
          img.style.filter = hasMatch ? "none" : "grayscale(100%)";
          img.style.opacity = hasMatch ? "1" : "0.16";
        }
      });
    }

    function changeImageWithSlider(newImageSrc) {
      const newImage = document.createElement("img");
      newImage.src = newImageSrc;
      Object.assign(newImage.style, {position:"absolute",top:"0",left:"-100%",width:"100%",height:"100%",objectFit:"cover",zIndex:"-1",opacity:"0.78",pointerEvents:"none",transition:"left .8s ease, opacity .8s ease"});
      seccion3.appendChild(newImage);
      requestAnimationFrame(() => { newImage.style.left = "0"; });
      newImage.addEventListener("transitionend", () => { if (currentImage) currentImage.remove(); currentImage = newImage; }, { once:true });
    }

    function createHexButtons(buttons, textColor) {
      const isMobile = window.innerWidth < 600;
      buttons.forEach((buttonData, i) => {
        const offsetX = isMobile ? (i % 2 === 0 ? -38 : 25) : (i % 2 === 0 ? -32 : 27);
        const offsetY = isMobile ? (i < 2 ? 10 : 52) : (i < 2 ? -3 : 28);
        const button = createButton(buttonData.image, buttonData.link, buttonData.text, textColor, buttonData.id2);
        positionButton(button, offsetX, offsetY);
        currentButtons.push(button);
      });
      applyWorkFilter();
    }

    function removeButtons() {
      currentButtons.forEach((button) => button.remove());
      currentButtons = [];
    }

    function changeDatatext(newText, textColor) {
      if (currentDatatextElement) {
        currentDatatextElement.remove();
      }
      const container = document.createElement("div");
      container.className = "project-caption";
      container.style.color = textColor;
      const h3 = document.createElement("h3");
      h3.textContent = localizeDynamic(newText);
      h3.dataset.rawText = newText;
      h3.classList.add("dynamic-translatable");
      container.appendChild(h3);
      seccion3.appendChild(container);
      requestAnimationFrame(() => container.classList.add("is-visible"));
      currentDatatextElement = container;
    }

    function createButton(image, link, text, textColor, id2) {
      const button = document.createElement("button");
      button.className = "dynamic-button";
      button.type = "button";
      Object.assign(button.style, {position:"absolute",opacity:"0",transform:"scale(.88)",transition:"opacity .35s ease, transform .25s ease, filter .25s ease",zIndex:"10",background:"transparent",border:"0",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center"});
      const img = document.createElement("img");
      img.src = image;
      img.alt = "";
      img.style.width = window.matchMedia("(max-width:768px)").matches ? "12vw" : "4vw";
      button.appendChild(img);
      const span = document.createElement("span");
      span.textContent = localizeDynamic(text);
      span.dataset.rawText = text;
      Object.assign(span.style, {color:textColor,fontFamily:"'Poppins',sans-serif",fontSize:window.matchMedia("(max-width:768px)").matches ? ".68rem" : ".78rem",fontWeight:"900",textAlign:"center",lineHeight:"1.25",marginTop:"8px",textShadow:"0 2px 10px rgba(0,0,0,.45)",maxWidth:"120px"});
      button.appendChild(span);
      button.dataset.id2 = id2 || "";
      button.addEventListener("click", () => window.openPopup(link));
      return button;
    }

    function positionButton(button, leftVW, topVH) {
      button.style.left = `calc(50vw + ${leftVW}vw)`;
      button.style.top = `calc(50vh + ${topVH}vh)`;
      seccion3.appendChild(button);
      requestAnimationFrame(() => { button.style.opacity = "1"; button.style.transform = "scale(1)"; });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initNav();
    initReveal();
    initShinyButtons();
    initHexProjects();
  });
})()
