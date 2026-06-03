
(function () {
  "use strict";

  const normalize = (value) => String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  let currentLang = localStorage.getItem("portfolioLang") || "es";
  const translations = {
    "es": {
        "meta.title": "Francisco Noriega | Growth Marketing Portfolio",
        "meta.titleEn": "Francisco Noriega | Growth Marketing Portfolio",
        "nav.direct": "Directo",
        "nav.impact": "Impacto",
        "nav.case": "Caso Galga",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "hero.eyebrow": "Growth Marketing · CRM · Demand Generation",
        "hero.title": "Hola, soy Francisco. Gracias por darte el tiempo de ver mi trabajo.",
        "hero.lead": "Construyo sistemas de adquisición que conectan marketing con ventas reales: SEO, CRM, pauta, contenido, UX y seguimiento comercial trabajando como un solo flujo.",
        "hero.note": "Si estás viendo esto es porque me interesa trabajar contigo. Agradezco tu tiempo, tu interés y tu buena intuición :). Aquí encontrarás evidencia, resultados y una parte de la forma en la que pienso los proyectos.",
        "hero.cta1": "Empezar recorrido",
        "hero.cta2": "Descargar CV ES",
        "hero.cta3": "Download CV EN",
        "hero.panelEyebrow": "En una frase",
        "hero.panelTitle": "Marketing para productos que necesitan explicación, confianza y seguimiento.",
        "hero.panelText": "Mi experiencia más fuerte está en productos de alta consideración: cuando no basta con “hacer ruido”, sino que hay que educar, medir, calificar y acompañar al comprador.",
        "jump.eyebrow": "Recorrido rápido",
        "jump.title": "Ve directo a lo que más importa",
        "jump.text": "Si tienes poco tiempo, puedes saltar a la evidencia que más te interese. Si prefieres conocer el contexto, sigue bajando.",
        "jump.impact": "Impacto",
        "jump.galga": "Caso Galga",
        "jump.certs": "Certificaciones",
        "jump.exp": "Experiencia",
        "jump.projects": "Proyectos",
        "jump.reel": "Demo Reel",
        "impact.eyebrow": "Resumen rápido",
        "impact.title": "Algunos números antes de entrar al detalle",
        "impact.text": "No pongo estos datos como adorno. Los uso para explicar cómo conecté adquisición, CRM, calificación y ventas en un entorno B2B de ticket alto.",
        "metric.revenue": "ingresos mensuales reportados y atribuidos a marketing",
        "metric.leads": "leads mensuales generados por SEO, pauta y activos digitales",
        "metric.mql": "aprox. por mes bajo criterios de calificación de marketing",
        "metric.sql": "oportunidades comerciales calificadas por ventas al mes",
        "metric.cpl": "costo por lead estimado sobre inversión mensual",
        "metric.cpo": "costo estimado por oportunidad calificada de ventas",
        "metric.top": "posicionamiento SEO en búsquedas como bordadora, plotter, calandra, DTF e impresora DTF",
        "metric.organic": "visitas orgánicas mensuales estimadas partiendo casi desde cero",
        "discovery.eyebrow": "Cómo pienso el marketing",
        "discovery.title": "Elige una capa del trabajo",
        "discovery.text": "La estrategia se entiende mejor por partes. Puedes tocar cada área para ver cómo la conecto con resultados.",
        "discovery.tab1": "Adquisición",
        "discovery.tab2": "CRM",
        "discovery.tab3": "SEO",
        "discovery.tab4": "Ventas",
        "discovery.acquisitionTitle": "Adquisición que no se queda en clics",
        "discovery.acquisitionText": "Para mí, adquirir no es solo traer tráfico. Es atraer a la persona correcta, darle contexto suficiente y abrir una conversación que ventas pueda continuar.",
        "discovery.crmTitle": "CRM para que las oportunidades no se pierdan",
        "discovery.crmText": "Un lead sirve poco si nadie sabe de dónde vino, qué pidió, qué tan listo está o qué debe pasar después. Por eso conecto fuentes, calificación y seguimiento comercial.",
        "discovery.seoTitle": "SEO como activo comercial, no solo como tráfico",
        "discovery.seoText": "Me interesa posicionar búsquedas que importan: términos donde el usuario está comparando, evaluando o buscando una solución concreta.",
        "discovery.salesTitle": "Ventas necesita contexto, no solo nombres y teléfonos",
        "discovery.salesText": "Cuando el prospecto llega más educado, el vendedor puede usar mejor su tiempo. Por eso trabajo fichas, videos, materiales y rutas de decisión.",
        "cert.eyebrow": "Evidencia profesional",
        "cert.title": "Certificaciones",
        "cert.text": "Los enlaces abren la evidencia. Mantuve estas tarjetas porque visualmente ayudan a que el portafolio se sienta más personal.",
        "cert.google": "Certificación profesional en búsqueda Google Ads",
        "cert.email": "Certificación Email Marketing",
        "cert.content": "Certificación Marketing de Contenidos",
        "cert.english": "Evaluación Inglés C1 · trabajo cómodo B2",
        "exp.eyebrow": "Experiencia profesional",
        "exp.title0": "De contenido a revenue",
        "exp.text0": "Mi trayectoria empezó cerca del contenido y fue moviéndose hacia sistemas de adquisición, CRM, medición y crecimiento comercial.",
        "exp.current": "Actualidad",
        "exp.galga": "Growth Marketing / Demand Generation: HubSpot, SEO, pauta, UX, sales enablement, atribución comercial y reporting ejecutivo para maquinaria industrial de ticket alto.",
        "exp.galgaBtn": "Ver caso Galga",
        "exp.eva": "Contenido técnico B2B, SEO, email marketing, materiales comerciales y educación del comprador para una empresa fabricante de Crosslink Foam.",
        "exp.mdr": "Estrategias de contenido para 15+ marcas, SEO, branding, guiones, reportes de KPIs, procesos creativos y capacitación interna.",
        "exp.mex7": "Marketing para marca de calzado: branding, redes, Shopify, contenido, campañas, ferias, lanzamientos y prospección de clientes.",
        "exp.letter": "Carta de recomendación",
        "galga.eyebrow": "Caso principal",
        "galga.title": "Galga Maquinaria: demanda, CRM y atribución comercial",
        "galga.subtitle": "Un proyecto de growth B2B para producto técnico, ticket alto y venta consultiva.",
        "galga.card1Title": "Punto de partida",
        "galga.card1Text": "Una venta industrial larga, con mucho prospecto curioso, poco contexto inicial y necesidad de que marketing ayudara a ordenar la conversación.",
        "galga.card2Title": "Qué construí",
        "galga.card2Text": "Un flujo con SEO, pauta, UX, landings, fichas técnicas, videos, modelados 3D, simulador de crédito, HubSpot y seguimiento comercial.",
        "galga.card3Title": "Para qué sirvió",
        "galga.card3Text": "Para que marketing dejara de medirse solo por clics y pudiera hablar de leads, MQLs, SQLs, oportunidades e ingresos reportados.",
        "galga.systemTitle": "El sistema, por piezas",
        "galga.systemText": "Puedes tocar cada bloque. La gracia no está en una sola campaña, sino en cómo cada pieza ayuda a que el prospecto avance.",
        "system.seoTab": "SEO comercial",
        "system.crmTab": "CRM y atribución",
        "system.conversionTab": "Conversión",
        "system.salesTab": "Ventas",
        "system.seoTitle": "SEO para búsquedas que sí podían terminar en una conversación comercial",
        "system.seoText": "Trabajé el posicionamiento de términos industriales donde la intención ya venía muy cerca de compra o evaluación: bordadora industrial, plotter de impresión, calandra, DTF, impresora DTF, Mimaki, papel de sublimación y tejedora rectilínea.",
        "system.crmTitle": "HubSpot como puente entre fuente, lead y venta reportada",
        "system.crmText": "El sistema permitió registrar fuentes originales de tráfico, dar seguimiento a leads, distinguir MQLs y SQLs y relacionar ventas cargadas por vendedores con marketing.",
        "system.conversionTitle": "Una experiencia digital que educa antes de vender",
        "system.conversionText": "El sitio integró precios abiertos, fichas técnicas, videos, simulador de crédito, modelados 3D y mecanismos de autocalificación para que el prospecto llegara con menos dudas.",
        "system.salesTitle": "Sales enablement para que ventas pudiera patear mejor el balón",
        "system.salesText": "Preparé materiales, videos, catálogos y recursos técnicos para que el equipo comercial tuviera argumentos más claros durante el seguimiento.",
        "evidence.title": "Reportes y evidencia",
        "evidence.text": "Abrí estos enlaces como botones reales porque son parte importante del caso. Algunos sitios externos pueden abrir en pestaña nueva por restricciones técnicas.",
        "evidence.annual": "Reporte anual 2025",
        "evidence.monthly": "Reporte mensual ejemplo",
        "evidence.semrush": "Revisión orgánica SEMrush",
        "method.eyebrow": "Forma de trabajo",
        "method.title": "Me gusta construir sistemas de marketing donde cada pieza tenga una función.",
        "method.text": "Entender el producto, mapear objeciones, crear activos que eduquen al comprador, generar demanda medible, calificar la oportunidad y alinear ventas con seguimiento. Esa es la parte del marketing que más me interesa: cuando deja de ser una colección de piezas y se convierte en una operación de crecimiento.",
        "projects.filterLabel": "Filtrar proyectos por:",
        "projects.sectors": "Sectores",
        "projects.workTypes": "Tipos de trabajos",
        "projects.title": "Proyectos destacados",
        "projects.subtitle": "Agrupados por marca. Haz clic en un hexágono para descubrir entregables.",
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
        "reel.eyebrow": "Contenido audiovisual",
        "reel.title": "Demo Reel",
        "reel.text": "Recopilatorio de piezas grabadas, editadas o dirigidas dentro de proyectos de contenido.",
        "scope.eyebrow": "Alcance acumulado",
        "scope.title": "Más que piezas sueltas: experiencia cruzando sectores",
        "scope.brands": "marcas y proyectos visibles",
        "scope.simultaneous": "marcas gestionadas simultáneamente en agencia",
        "scope.content": "contenidos, blogs y piezas desarrolladas aprox.",
        "scope.years": "años de experiencia profesional",
        "contact.eyebrow": "Contacto",
        "contact.title": "¿Agendamos una llamada?",
        "contact.text": "Si lo que viste aquí te hizo sentido, me dará gusto hablar contigo. Podemos partir de objetivos de negocio, retos comerciales o cualquier punto del portafolio que quieras revisar con más detalle.",
        "contact.email": "Enviar correo",
        "contact.cvEs": "CV Español",
        "contact.cvEn": "CV English",
        "footer.text": "Francisco Noriega · Growth Marketing Portfolio",
        "popup.close": "Cerrar",
        "popup.title": "Vista previa del proyecto"
    },
    "en": {
        "meta.title": "Francisco Noriega | Growth Marketing Portfolio",
        "meta.titleEn": "Francisco Noriega | Growth Marketing Portfolio",
        "nav.direct": "Quick path",
        "nav.impact": "Impact",
        "nav.case": "Galga case",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.eyebrow": "Growth Marketing · CRM · Demand Generation",
        "hero.title": "Hi, I’m Francisco. Thank you for taking the time to see my work.",
        "hero.lead": "I build acquisition systems that connect marketing with real sales: SEO, CRM, paid media, content, UX and commercial follow-up working as one flow.",
        "hero.note": "If you are here, it is because I would like to work with you. I appreciate your time, your interest and your good intuition :). Here you will find evidence, results and part of the way I think about projects.",
        "hero.cta1": "Start the walkthrough",
        "hero.cta2": "Download CV ES",
        "hero.cta3": "Download CV EN",
        "hero.panelEyebrow": "In one sentence",
        "hero.panelTitle": "Marketing for products that need explanation, trust and follow-up.",
        "hero.panelText": "My strongest experience is in high-consideration products: cases where it is not enough to create noise; you need to educate, measure, qualify and support the buyer.",
        "jump.eyebrow": "Quick path",
        "jump.title": "Go straight to what matters most",
        "jump.text": "If you have little time, you can jump to the evidence you care about. If you prefer context, keep scrolling.",
        "jump.impact": "Impact",
        "jump.galga": "Galga case",
        "jump.certs": "Certifications",
        "jump.exp": "Experience",
        "jump.projects": "Projects",
        "jump.reel": "Demo Reel",
        "impact.eyebrow": "Quick summary",
        "impact.title": "A few numbers before the details",
        "impact.text": "I do not use these numbers as decoration. I use them to explain how I connected acquisition, CRM, qualification and sales in a high-ticket B2B environment.",
        "metric.revenue": "monthly revenue reported and attributed to marketing",
        "metric.leads": "monthly leads generated through SEO, paid media and digital assets",
        "metric.mql": "approx. per month under marketing qualification criteria",
        "metric.sql": "sales-qualified opportunities per month",
        "metric.cpl": "estimated cost per lead based on monthly investment",
        "metric.cpo": "estimated cost per sales-qualified opportunity",
        "metric.top": "SEO positions for searches such as embroidery machine, plotter, calender, DTF and DTF printer",
        "metric.organic": "estimated monthly organic visits, starting almost from zero",
        "discovery.eyebrow": "How I think about marketing",
        "discovery.title": "Choose one layer of the work",
        "discovery.text": "The strategy is easier to understand by parts. You can click each area to see how I connect it with results.",
        "discovery.tab1": "Acquisition",
        "discovery.tab2": "CRM",
        "discovery.tab3": "SEO",
        "discovery.tab4": "Sales",
        "discovery.acquisitionTitle": "Acquisition that goes beyond clicks",
        "discovery.acquisitionText": "For me, acquisition is not just bringing traffic. It is attracting the right person, giving enough context and opening a conversation sales can continue.",
        "discovery.crmTitle": "CRM so opportunities do not get lost",
        "discovery.crmText": "A lead does not mean much if nobody knows where it came from, what it asked for, how ready it is or what should happen next. That is why I connect sources, qualification and commercial follow-up.",
        "discovery.seoTitle": "SEO as a commercial asset, not only traffic",
        "discovery.seoText": "I care about ranking for searches that matter: terms where the user is comparing, evaluating or looking for a concrete solution.",
        "discovery.salesTitle": "Sales needs context, not just names and phone numbers",
        "discovery.salesText": "When the prospect arrives better educated, the sales advisor can use time better. That is why I work on spec sheets, videos, materials and decision paths.",
        "cert.eyebrow": "Professional evidence",
        "cert.title": "Certifications",
        "cert.text": "The links open the evidence. I kept these cards because visually they make the portfolio feel more personal.",
        "cert.google": "Google Ads Search Professional Certification",
        "cert.email": "Email Marketing Certification",
        "cert.content": "Content Marketing Certification",
        "cert.english": "English assessment C1 · comfortable working level B2",
        "exp.eyebrow": "Professional experience",
        "exp.title0": "From content to revenue",
        "exp.text0": "My career started close to content and gradually moved toward acquisition systems, CRM, measurement and commercial growth.",
        "exp.current": "Current role",
        "exp.galga": "Growth Marketing / Demand Generation: HubSpot, SEO, paid media, UX, sales enablement, revenue attribution and executive reporting for high-ticket industrial machinery.",
        "exp.galgaBtn": "See Galga case",
        "exp.eva": "B2B technical content, SEO, email marketing, sales materials and buyer education for a Crosslink Foam manufacturing company.",
        "exp.mdr": "Content strategies for 15+ brands, SEO, branding, scripts, KPI reports, creative processes and internal training.",
        "exp.mex7": "Marketing for a footwear brand: branding, social media, Shopify, content, campaigns, fairs, launches and customer prospecting.",
        "exp.letter": "Recommendation letter",
        "galga.eyebrow": "Main case study",
        "galga.title": "Galga Machinery: demand, CRM and revenue attribution",
        "galga.subtitle": "A B2B growth project for a technical, high-ticket product with a consultative sales cycle.",
        "galga.card1Title": "Starting point",
        "galga.card1Text": "A long industrial sale, many curious prospects, little initial context and a need for marketing to help structure the conversation.",
        "galga.card2Title": "What I built",
        "galga.card2Text": "A flow with SEO, paid media, UX, landing pages, spec sheets, videos, 3D models, credit simulator, HubSpot and commercial follow-up.",
        "galga.card3Title": "Why it mattered",
        "galga.card3Text": "Marketing could stop being measured only by clicks and start speaking about leads, MQLs, SQLs, opportunities and reported revenue.",
        "galga.systemTitle": "The system, piece by piece",
        "galga.systemText": "You can click each block. The point is not one isolated campaign, but how each piece helps the prospect move forward.",
        "system.seoTab": "Commercial SEO",
        "system.crmTab": "CRM & attribution",
        "system.conversionTab": "Conversion",
        "system.salesTab": "Sales",
        "system.seoTitle": "SEO for searches that could actually become commercial conversations",
        "system.seoText": "I worked on ranking industrial terms where the intent was already close to purchase or evaluation: industrial embroidery machine, print plotter, calender, DTF, DTF printer, Mimaki, sublimation paper and flat knitting machine.",
        "system.crmTitle": "HubSpot as the bridge between source, lead and reported sale",
        "system.crmText": "The system made it possible to register original traffic sources, follow up on leads, distinguish MQLs from SQLs and connect sales reported by advisors back to marketing.",
        "system.conversionTitle": "A digital experience that educates before selling",
        "system.conversionText": "The website included open pricing, technical sheets, videos, a credit simulator, 3D models and self-qualification mechanisms to help prospects arrive with fewer doubts.",
        "system.salesTitle": "Sales enablement so the sales team could play the ball better",
        "system.salesText": "I prepared materials, videos, catalogs and technical resources so the sales team had clearer arguments during follow-up.",
        "evidence.title": "Reports and evidence",
        "evidence.text": "I made these links look and behave like real buttons because they are an important part of the case. Some external sites may open in a new tab due to technical restrictions.",
        "evidence.annual": "2025 annual report",
        "evidence.monthly": "Monthly report example",
        "evidence.semrush": "SEMrush organic review",
        "method.eyebrow": "Way of working",
        "method.title": "I like building marketing systems where every piece has a job.",
        "method.text": "Understanding the product, mapping objections, creating assets that educate the buyer, generating measurable demand, qualifying the opportunity and aligning sales with follow-up. That is the part of marketing I care about most: when it stops being a collection of pieces and becomes a growth operation.",
        "projects.filterLabel": "Filter projects by:",
        "projects.sectors": "Sectors",
        "projects.workTypes": "Types of work",
        "projects.title": "Featured projects",
        "projects.subtitle": "Grouped by brand. Click a hexagon to discover deliverables.",
        "sector.security": "Security",
        "sector.apparel": "Apparel & Footwear",
        "sector.manufacturing": "Manufacturing",
        "sector.food": "Food & Beverage",
        "sector.realestate": "Real Estate",
        "sector.agency": "Marketing Agency",
        "sector.tourism": "Tourism & Hospitality",
        "sector.mall": "Shopping Center",
        "sector.supplements": "Supplements",
        "sector.leasing": "Leasing",
        "sector.machinery": "Machinery & Transportation",
        "sector.agro": "Agri-food",
        "sector.appraisals": "Appraisals",
        "sector.art": "Art & Decoration",
        "sector.medical": "Medical",
        "work.research": "Market research",
        "work.radio": "Radio commercial",
        "work.influencers": "Influencer campaigns",
        "work.photo": "Photography",
        "work.web": "Website / E-commerce",
        "work.posts": "Posts",
        "work.expo": "Expo",
        "work.video": "Video",
        "work.salesDeck": "Sales presentation",
        "work.blog": "SEO blog",
        "work.internal": "Internal marketing",
        "work.communication": "Communication strategy",
        "work.mystery": "Mystery shopper",
        "work.mailing": "Email marketing",
        "work.naming": "Naming",
        "reel.eyebrow": "Audiovisual content",
        "reel.title": "Demo Reel",
        "reel.text": "A compilation of pieces I recorded, edited or directed within content projects.",
        "scope.eyebrow": "Accumulated scope",
        "scope.title": "More than isolated pieces: experience across sectors",
        "scope.brands": "visible brands and projects",
        "scope.simultaneous": "brands managed simultaneously in an agency environment",
        "scope.content": "approx. content pieces, blogs and assets developed",
        "scope.years": "years of professional experience",
        "contact.eyebrow": "Contact",
        "contact.title": "Should we schedule a call?",
        "contact.text": "If what you saw here makes sense, I would be happy to talk. We can start from business goals, commercial challenges or any part of the portfolio you want to review in more detail.",
        "contact.email": "Send email",
        "contact.cvEs": "Spanish CV",
        "contact.cvEn": "English CV",
        "footer.text": "Francisco Noriega · Growth Marketing Portfolio",
        "popup.close": "Close",
        "popup.title": "Project preview"
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

  function t(key) {
    return translations[currentLang]?.[key] || translations.es?.[key] || key;
  }

  function localizeDynamic(value) {
    if (currentLang === "es") return value;
    return dynamicTranslations[normalize(value)] || value;
  }

  function currentLocale() {
    return currentLang === "en" ? "en-US" : "es-MX";
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "es";
    localStorage.setItem("portfolioLang", currentLang);
    document.documentElement.lang = currentLang;
    document.title = t(currentLang === "en" ? "meta.titleEn" : "meta.title");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = t(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langButton === currentLang);
      button.setAttribute("aria-pressed", String(button.dataset.langButton === currentLang));
    });

    document.querySelectorAll(".dynamic-translatable").forEach((el) => {
      if (el.dataset.rawText) el.textContent = localizeDynamic(el.dataset.rawText);
    });
    document.querySelectorAll(".dynamic-button span[data-raw-text]").forEach((el) => {
      el.textContent = localizeDynamic(el.dataset.rawText);
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
    if (eventOrUrl && typeof eventOrUrl.preventDefault === "function") {
      eventOrUrl.preventDefault();
    }
    if (!url || typeof url !== "string") return;

    const isMobile = window.innerWidth < 1100;
    const forceNewTab = /semrush|youtube|instagram|amazon|mercado\s?libre/i.test(url);

    if (isMobile || forceNewTab) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    const popup = document.createElement("div");
    popup.className = "portfolio-popup";
    popup.innerHTML = `
      <div class="portfolio-popup__panel" role="dialog" aria-modal="true">
        <button class="portfolio-popup__close" type="button" aria-label="${t("popup.close")}">${t("popup.close")}</button>
        <iframe src="${url}" title="${t("popup.title")}"></iframe>
      </div>
    `;
    document.body.appendChild(popup);
    document.body.style.overflow = "hidden";

    const close = () => {
      popup.remove();
      document.body.style.overflow = "";
    };
    popup.querySelector(".portfolio-popup__close").addEventListener("click", close);
    popup.addEventListener("click", (event) => {
      if (event.target === popup) close();
    });
    document.addEventListener("keydown", function escapeClose(event) {
      if (event.key === "Escape") {
        close();
        document.removeEventListener("keydown", escapeClose);
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initNav();
    initReveal();
    initShinyButtons();
    initExperienceSlider();
    initDiscoveryTabs();
    initSystemTabs();
    initClickFeedback();
    initGalgaCounters();
    initWorkCounters();
    initHexProjects();
  });

  function initNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav__toggle");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach((item) => observer.observe(item));
  }

  function initShinyButtons() {
    const colorStops = [
      [0, "rgb(84, 94, 109)"],
      [0.2, "rgb(111, 122, 137)"],
      [0.4, "rgb(153, 156, 168)"],
      [0.6, "rgb(195, 200, 219)"],
      [0.9, "rgb(74, 73, 83)"],
      [1, "rgb(93, 93, 93)"]
    ];

    const buttons = Array.from(document.querySelectorAll("[data-shiny-button]"));
    if (!buttons.length) return;

    const buildLoops = () => buttons.map((button) => {
      const canvas = button.querySelector("canvas");
      if (!canvas) return null;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      const draw = (x, y, viewportWidth, viewportHeight, i) => {
        const rect = button.getBoundingClientRect();
        const width = Math.max(1, Math.round(rect.width));
        const height = Math.max(1, Math.round(rect.height));
        if (canvas.width !== width) canvas.width = width;
        if (canvas.height !== height) canvas.height = height;

        const xRatio = viewportWidth / Math.max(x, 1);
        const yRatio = viewportHeight / Math.max(y, 1);
        const diff = i + 1;
        const gradient = ctx.createLinearGradient(
          yRatio * (width / 2) / 8 * -diff * 2,
          xRatio * (width / 2) / 8 - diff * 2,
          xRatio * (width / 2),
          yRatio * height / (diff / 2)
        );
        colorStops.forEach(([stop, color]) => gradient.addColorStop(stop, color));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      };
      return draw;
    });

    let loops = buildLoops();
    const animate = (clientX, clientY) => {
      loops.forEach((draw, i) => {
        if (!draw) return;
        requestAnimationFrame(() => draw(clientX, clientY, window.innerWidth, window.innerHeight, i));
      });
    };

    document.addEventListener("mousemove", ({ clientX, clientY }) => animate(clientX, clientY), { passive: true });
    window.addEventListener("resize", () => {
      loops = buildLoops();
      animate(window.innerWidth / 2, window.innerHeight / 2);
    });
    animate(window.innerWidth / 2, window.innerHeight / 2);
  }

  function initExperienceSlider() {
    const slider = document.querySelector(".seccion2 .slider");
    const controls = document.querySelector(".slider-nav");
    if (!slider || !controls) return;

    controls.addEventListener("click", (event) => {
      const items = slider.querySelectorAll(".item");
      if (!items.length) return;
      if (event.target.matches(".next")) slider.append(items[0]);
      if (event.target.matches(".prev")) slider.prepend(items[items.length - 1]);
    });
  }

  function animateNumber(element, to, formatter, duration = 1200) {
    const start = 0;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = start + (to - start) * eased;
      element.textContent = formatter(value);
      if (progress < 1) requestAnimationFrame(tick);
      else element.textContent = formatter(to);
    };
    requestAnimationFrame(tick);
  }

  function makeFormatter(element) {
    const format = element.dataset.format || "number";
    const currency = element.dataset.currency || "MXN";
    const compact = element.dataset.compact === "1";
    const suffix = element.dataset.suffix || "";

    if (format === "currency") {
      return (value) => {
        if (compact && value >= 1000000) return `$${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M ${currency}`;
        if (compact && value >= 1000) return `$${Math.round(value / 1000)}K ${currency}`;
        return new Intl.NumberFormat(currentLocale(), { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
      };
    }
    if (format === "percent") return (value) => `${Math.round(value).toLocaleString(currentLocale())}${suffix || "%"}`;
    if (format === "multiple") return (value) => `${value.toFixed(1)}${suffix || "x"}`;
    return (value) => Math.round(value).toLocaleString(currentLocale()) + suffix;
  }


  function initDiscoveryTabs() {
    const buttons = document.querySelectorAll("[data-discovery-tab]");
    const title = document.querySelector("[data-discovery-title]");
    const text = document.querySelector("[data-discovery-text]");
    if (!buttons.length || !title || !text) return;
    const map = {
      acquisition: ["discovery.acquisitionTitle", "discovery.acquisitionText"],
      crm: ["discovery.crmTitle", "discovery.crmText"],
      seo: ["discovery.seoTitle", "discovery.seoText"],
      sales: ["discovery.salesTitle", "discovery.salesText"]
    };
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        const [titleKey, textKey] = map[button.dataset.discoveryTab] || map.acquisition;
        title.dataset.i18n = titleKey;
        text.dataset.i18n = textKey;
        title.textContent = t(titleKey);
        text.textContent = t(textKey);
      });
    });
  }

  function initSystemTabs() {
    const buttons = document.querySelectorAll("[data-system-tab]");
    const title = document.querySelector("[data-system-title]");
    const text = document.querySelector("[data-system-text]");
    if (!buttons.length || !title || !text) return;
    const map = {
      seo: ["system.seoTitle", "system.seoText"],
      crm: ["system.crmTitle", "system.crmText"],
      conversion: ["system.conversionTitle", "system.conversionText"],
      sales: ["system.salesTitle", "system.salesText"]
    };
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        const [titleKey, textKey] = map[button.dataset.systemTab] || map.seo;
        title.dataset.i18n = titleKey;
        text.dataset.i18n = textKey;
        title.textContent = t(titleKey);
        text.textContent = t(textKey);
      });
    });
  }

  function initClickFeedback() {
    document.addEventListener("click", (event) => {
      const button = event.target.closest(".galgaX__btn, .button, .btn");
      if (!button) return;
      button.classList.remove("is-clicked");
      void button.offsetWidth;
      button.classList.add("is-clicked");
    });
  }

  function initGalgaCounters() {
    const counts = document.querySelectorAll(".galgaX__count");
    const bars = document.querySelectorAll(".galgaX__bar");
    const section = document.querySelector(".galgaX__kpis");
    if (!counts.length || !section) return;

    const run = () => {
      counts.forEach((element) => {
        if (element.dataset.done === "1") return;
        element.dataset.done = "1";
        animateNumber(element, Number(element.dataset.to || 0), makeFormatter(element), 1300);
      });
      bars.forEach((bar) => {
        const span = bar.querySelector("span");
        if (span) span.style.width = `${Number(bar.dataset.bar || 0)}%`;
      });
    };

    if (!("IntersectionObserver" in window)) return run();
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(section);
  }

  function initWorkCounters() {
    const counters = document.querySelectorAll(".count-number");
    const section = document.querySelector(".counter-grid");
    if (!counters.length || !section) return;

    const run = () => counters.forEach((element) => {
      if (element.dataset.done === "1") return;
      element.dataset.done = "1";
      animateNumber(element, Number(element.dataset.to || 0), (value) => Math.round(value).toLocaleString(currentLocale()), Number(element.dataset.speed || 1100));
    });

    if (!("IntersectionObserver" in window)) return run();
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(section);
  }

  function initHexProjects() {
    const seccion3 = document.querySelector(".seccion3");
    const hexagons = document.querySelectorAll(".hex");
    const h2Element = document.querySelector(".seccion3 h2");
    const pElement = document.querySelector(".seccion3 > p");
    const filtroSector = document.getElementById("filtro1");
    const filtroTrabajo = document.getElementById("filtro2");
    if (!seccion3 || !hexagons.length || !h2Element || !pElement || !filtroSector || !filtroTrabajo) return;

    const defaultImage = "https://raw.githubusercontent.com/Fran15711/prueba1/refs/heads/main/blanco.jpg";

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
      ]


    let currentImage = document.createElement("img");
    currentImage.src = defaultImage;
    Object.assign(currentImage.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: "0",
      opacity: "0.18",
      pointerEvents: "none"
    });
    seccion3.appendChild(currentImage);

    let currentButtons = [];
    let currentDatatextElement = null;

    hexagons.forEach((hex, index) => {
      hex.addEventListener("click", () => {
        const data = hexData[index];
        if (!data) return;
        removeButtons();
        changeImageWithSlider(data.image);
        changeTextColor(data.textColor);
        changeDatatext(data.datatext, data.textColor);
        createHexButtons(data.buttons, data.textColor);
      });
    });

    filtroTrabajo.addEventListener("change", applyWorkFilter);
    filtroSector.addEventListener("change", applySectorFilter);

    function resetHexagonStyles() {
      hexagons.forEach((hex) => {
        const img = hex.querySelector("img");
        if (!img) return;
        img.style.filter = "none";
        img.style.opacity = "1";
      });
    }

    function applyWorkFilter() {
      const selected = normalize(filtroTrabajo.value);
      resetHexagonStyles();

      currentButtons.forEach((button) => {
        const isMatching = normalize(button.dataset.id2) === selected || selected === "";
        button.style.opacity = isMatching ? "1" : "0.12";
        button.style.filter = isMatching ? "none" : "grayscale(100%)";
      });

      hexagons.forEach((hex, index) => {
        const relatedButtons = hexData[index]?.buttons || [];
        const img = hex.querySelector("img");
        if (!img) return;
        const hasMatchingButton = relatedButtons.some((btn) => normalize(btn.id2) === selected);
        if (selected === "" || hasMatchingButton) {
          img.style.filter = "none";
          img.style.opacity = "1";
        } else {
          img.style.filter = "grayscale(100%)";
          img.style.opacity = "0.12";
        }
      });
    }

    function applySectorFilter() {
      const selectedSector = normalize(filtroSector.value);
      hexagons.forEach((hex) => {
        const sector = normalize(hex.getAttribute("id"));
        const img = hex.querySelector("img");
        if (!img) return;
        if (selectedSector === "" || sector === selectedSector) {
          img.style.filter = "none";
          img.style.opacity = "1";
        } else {
          img.style.filter = "grayscale(100%)";
          img.style.opacity = "0.12";
        }
      });
    }

    function changeImageWithSlider(newImageSrc) {
      const newImage = document.createElement("img");
      newImage.src = newImageSrc;
      Object.assign(newImage.style, {
        position: "absolute",
        top: "0",
        left: "-100%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "0",
        opacity: "0.75",
        pointerEvents: "none",
        transition: "left 0.9s ease-in-out, opacity 0.9s ease-in-out"
      });
      seccion3.appendChild(newImage);
      requestAnimationFrame(() => { newImage.style.left = "0"; });
      newImage.addEventListener("transitionend", () => {
        if (currentImage) currentImage.remove();
        currentImage = newImage;
      }, { once: true });
    }

    function changeTextColor(color) {
      h2Element.style.color = color;
      pElement.style.color = color;
    }

    function createHexButtons(buttons, textColor) {
      currentButtons = [];
      const isMobile = window.innerWidth < 450;
      buttons.forEach((buttonData, i) => {
        const offsetX = isMobile ? (i % 2 === 0 ? -45 : 30) : (i % 2 === 0 ? -35 : 30);
        const offsetY = isMobile ? (i < 2 ? 15 : 65) : (i < 2 ? -5 : 25);
        const button = createButton(buttonData.image, buttonData.link, buttonData.text, textColor, buttonData.id2);
        positionButtons(button, offsetX, offsetY);
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
        currentDatatextElement.style.opacity = "0";
        setTimeout(() => {
          currentDatatextElement.remove();
          createNewDatatext(newText, textColor);
        }, 260);
      } else {
        createNewDatatext(newText, textColor);
      }
    }

    function createNewDatatext(newText, textColor) {
      const container = document.createElement("div");
      Object.assign(container.style, {
        position: "absolute",
        transition: "opacity 0.35s ease-in-out, transform 0.35s ease-in-out",
        opacity: "0",
        maxWidth: "min(640px, 88vw)",
        textAlign: "center",
        zIndex: "100",
        borderRadius: "16px",
        backgroundColor: "rgba(0, 0, 0, 0.58)",
        boxShadow: "0 14px 34px rgba(0, 0, 0, 0.28)",
        padding: "12px 16px",
        left: "50%",
        top: "calc(100% - 82px)",
        transform: "translateX(-50%)"
      });
      seccion3.appendChild(container);

      const datatextElement = document.createElement("h3");
      datatextElement.textContent = localizeDynamic(newText);
      datatextElement.dataset.rawText = newText;
      datatextElement.classList.add("dynamic-translatable");
      Object.assign(datatextElement.style, {
        color: textColor,
        fontSize: "0.92rem",
        fontFamily: "'Poppins', sans-serif",
        margin: "0",
        lineHeight: "1.45",
        wordWrap: "break-word"
      });
      container.appendChild(datatextElement);
      setTimeout(() => { container.style.opacity = "1"; }, 30);
      currentDatatextElement = container;
    }

    function createButton(image, link, text, textColor, id2) {
      const button = document.createElement("button");
      button.classList.add("dynamic-button");
      button.type = "button";
      Object.assign(button.style, {
        position: "absolute",
        opacity: "0",
        transform: "scale(0.86)",
        transition: "opacity 0.45s ease, transform 0.3s ease, filter 0.3s ease",
        zIndex: "10",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      });

      const img = document.createElement("img");
      img.src = image;
      img.alt = "";
      const updateImageSize = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
          img.style.width = "12vw";
          button.style.width = "14vw";
          button.style.height = "16vw";
        } else {
          img.style.width = "4vw";
          button.style.width = "8vw";
          button.style.height = "10vw";
        }
      };
      updateImageSize();
      window.addEventListener("resize", updateImageSize);
      button.appendChild(img);

      const span = document.createElement("span");
      span.textContent = localizeDynamic(text);
      span.dataset.rawText = text;
      Object.assign(span.style, {
        color: textColor,
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        wordWrap: "break-word",
        lineHeight: "1.35",
        display: "block",
        marginTop: "10px",
        textShadow: "0 2px 10px rgba(0, 0, 0, 0.45)",
        fontWeight: "800"
      });
      const updateFontSize = () => {
        span.style.fontSize = window.matchMedia("(max-width: 768px)").matches ? "0.68rem" : "0.78rem";
      };
      updateFontSize();
      window.addEventListener("resize", updateFontSize);
      button.appendChild(span);
      button.dataset.id2 = id2 || "";
      button.addEventListener("click", () => window.openPopup(link));
      return button;
    }

    function positionButtons(button, leftVW, topVH) {
      button.style.left = `calc(50vw + ${leftVW}vw)`;
      button.style.top = `calc(50vh + ${topVH}vh)`;
      seccion3.appendChild(button);
      requestAnimationFrame(() => {
        button.style.opacity = "1";
        button.style.transform = "scale(1)";
      });
    }
  }
})();
