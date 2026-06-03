
(function () {
  "use strict";

  const normalize = (value) => String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

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
        <button class="portfolio-popup__close" type="button" aria-label="Cerrar">Cerrar</button>
        <iframe src="${url}" title="Vista previa del proyecto"></iframe>
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
    initNav();
    initReveal();
    initShinyButtons();
    initExperienceSlider();
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
        return new Intl.NumberFormat("es-MX", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
      };
    }
    if (format === "percent") return (value) => `${Math.round(value).toLocaleString("es-MX")}${suffix || "%"}`;
    if (format === "multiple") return (value) => `${value.toFixed(1)}${suffix || "x"}`;
    return (value) => Math.round(value).toLocaleString("es-MX") + suffix;
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
      animateNumber(element, Number(element.dataset.to || 0), (value) => Math.round(value).toLocaleString("es-MX"), Number(element.dataset.speed || 1100));
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
      datatextElement.textContent = newText;
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
      span.textContent = text;
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
