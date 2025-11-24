let tasks = [
            // PRVNÍ ČÁST - základy html a css
            {
                id: "about",
                part: "html_css_init",
                heading: "Jak to tu funguje? ",
                descriptionHtml: "<p>Popis úkolu: Tato stránka obsahuje úkoly, které na sebe obsahově navazují. Toto je vždy obecný popis úkolu.</p>",
                topicHintHtml: "<p>Tip na obsah: Pokud si <strong>nevytváříš stránku na vlastní téma</strong> (vlastní téma doporučujeme...), tak budeš vytvářet stránku na téma <strong>Osobní webová stránka</strong> a zde budeš mít vždy tip, k čemu použít zadaný prvek - můžeš samozřejmě prvek použít k čemukoliv jinému chceš.</p>",
                iframeSrc: "about.html",
                help: [
                    {text: "Zde najdeš odkazy na stránky,", url: "https://www.w3schools.com/"},
                    {text: "které ti pomohou se splněním úkolu.", url: "https://developer.mozilla.org"}
                ],
            },
            {
                id: "setup",
                part: "html_css_init",
                heading: "Základní nastavení projektu",
                descriptionHtml: "<p>Vytvoř složku pro svůj projekt, přidej do ní dva textové soubory: <code>index.html</code> a <code>styles.css</code>. Otevři oba soubory v textovém editoru a <code>index.html</code> v prohlížeči.</p><p>Do <code>index.html</code> přidej základní strukturu HTML dokumentu. A nezapomeň na propojení html souboru se souborem <code>styles.css</code>.</p>",
                topicHintHtml: "<p>Složka s názvem <code>web-osobni</code>.</p>",
                iframeSrc: "",
                help: [
                    {text: "Jak vytvořit HTML stránku (W3Schools)", url: "https://www.w3schools.com/html/html_intro.asp"},
                    {text: "Propojení html a css (W3Schools)", url: "https://www.w3schools.com/css/css_howto.asp"},
                    {text: "Základy práce se soubory (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"},
                ]
            },
            {
                id: "h_p",
                part: "html_css_init",
                heading: "Nadpisy a odstavce",
                descriptionHtml: "<p>Vytvoř stránku s hlavním nadpisem, několika podnadpisy a několika odstavci.</p><p>Změň font písma celé stránky, pozadí nadpisů a podnadpisů a barvu písma odstavců.</p>",
                topicHintHtml: "<p>Hlavní nadpis - tvoje jméno.</br>Podnadpisy - osobní údaje, vzdělání, pracovní zkušenosti, volnočasové zájmy, ...</br>Odstavce - text  ke každému podnadpisu.</p>",
                iframeSrc: "h_p.html",
                help: [
                    {text: "Nadpisy (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
                    {text: "Nadpisy (W3Schools)", url: "https://www.w3schools.com/html/html_headings.asp"},
                    {text: "Text CSS (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals"},
                    {text: "Základy CSS (W3Schools)", url: "https://www.w3schools.com/css/css_intro.asp"}
                ]
            },
            {
                id: "ul",
                part: "html_css_init",
                heading: "Odrážkový seznam",
                descriptionHtml: "<p>Přidej do stránky seznam, který není číslovaný, ale má odrážky. Uprav barvu pozadí seznamu a změň styl odrážek.</p>",
                topicHintHtml: "<p>Nečíslovaný seznam tvých zájmů nebo oblíbených věcí (např. sporty, hudba, filmy...).</p>",
                iframeSrc: "ul.html",
                help: [
                    {text: "Seznamy v HTML (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"},
                    {text: "Seznamy v HTML (W3Schools)", url: "https://www.w3schools.com/html/html_lists.asp"},
                    {text: "Styly seznamů v CSS (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style"},
                    {text: "CSS background-color (W3Schools)", url: "https://www.w3schools.com/cssref/pr_background-color.asp"}
                ]
            },
            {
                id: "ol",
                part: "html_css_init",
                heading: "Číslovaný seznam",
                descriptionHtml: "<p>Přidej do stránky seznam, jehož položky jsou číslované. Uprav zarovnání textu na střed a nastav jinou barvu písma pro položky seznamu.</p>",
                topicHintHtml: "<p>Číslovaný seznam tvého vzdělání nebo pracovních zkušeností.</p>",
                iframeSrc: "ol.html",
                help: [
                    {text: "Číslované seznamy (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"},
                    {text: "Číslované seznamy (W3Schools)", url: "https://www.w3schools.com/html/html_lists_ordered.asp"},
                    {text: "CSS text-align (W3Schools)", url: "https://www.w3schools.com/cssref/pr_text_text-align.asp"},
                    {text: "CSS color (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color"}
                ]
            },
            {
                id: "a",
                part: "html_css_init",
                heading: "Odkaz",
                descriptionHtml: "<p>Přidej do stránky odkaz. Uprav jeho barvu a přidej změnu vzhledu při najetí myší.</p>",
                topicHintHtml: "<p>Odkaz na oblíbenou webovou stránku (např. sociální síť, oblíbený filmový web nebo osobní blog).</p>",
                iframeSrc: "a.html",
                help: [
                    {text: "Odkazy v HTML (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"},
                    {text: "Odkazy v HTML (W3Schools)", url: "https://www.w3schools.com/html/html_links.asp"},
                    {text: "Pseudo-třídy CSS :hover (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover"},
                    {text: "CSS odkazy (W3Schools)", url: "https://www.w3schools.com/css/css_link.asp"}
                ]
            },
            {
                id: "img",
                part: "html_css_init",
                heading: "Obrázek",
                descriptionHtml: "<p>Přidej do stránky obrázek. Nastav jeho šířku na 300 pixelů a zarovnej ho na střed.</p>",
                topicHintHtml: "<p>Obrázek, který tě vystihuje (např. portrét, oblíbený sport nebo zvíře).</p>",
                iframeSrc: "img.html",
                help: [
                    {text: "Obrázky v HTML (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"},
                    {text: "Obrázky v HTML (W3Schools)", url: "https://www.w3schools.com/html/html_images.asp"},
                    {text: "CSS obrázky (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_images"},
                    {text: "CSS text-align (W3Schools)", url: "https://www.w3schools.com/cssref/pr_text_text-align.asp"}
                ]
            },
            {
                id: "id_class",
                part: "html_css_init",
                heading: "Id a třídy",
                descriptionHtml: "<p>Přidej do stránky prvek s atributem <code>id</code> a prvek s atributem <code>class</code>. Uprav jejich vzhled pomocí CSS. A vytvoř ve svojí stránce odkaz na prvek s <code>id</code>.</p>",
                topicHintHtml: "<p>Prvek s <code>id</code> bude jeden z vedlejších nadpisů, prvek s <code>class</code> může být vždy první odstavec za nadpisem (přidej i další odstavce tak, aby některé měli <code>class</code> a některé ne).</p>",
                iframeSrc: "id_class.html",
                help: [
                    {text: "Atribut id (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id"},
                    {text: "Atribut class (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class"},
                    {text: "CSS id a class (W3Schools)", url: "https://www.w3schools.com/css/css_selectors.asp"},
                    {text: "HTML id (W3Schools)", url: "https://www.w3schools.com/html/html_id.asp"},
                    {text: "HTML class (W3Schools)", url: "https://www.w3schools.com/html/html_classes.asp"},
                    {text: "Odkazy na části stránky (W3Schools)", url: "https://www.w3schools.com/html/html_links.asp#linkto"}
                ]
            },
            {
                id: "layout",
                part: "html_css_init",
                heading: "Rozvržení stránky",
                descriptionHtml: "<p>Použij na stránce prvky <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code> a <code>&lt;section&gt;</code> pro rozdělení obsahu.</p><p>Každé sekci nastav zaoblené rohy a barevné pozadí pomocí CSS.</p>",
                topicHintHtml: "<p>V <code>&lt;header&gt;</code> může být hlavní nadpis, v <code>&lt;nav&gt;</code> odkazy na sekce, v <code>&lt;footer&gt;</code> informace o datu poslední úpravy a důvodu vzniku těchto stránek, v <code>&lt;section&gt;</code> jednotlivé části obsahu.</p>",
                iframeSrc: "layout.html",
                help: [
                    {text: "Struktura stránky (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"},
                    {text: "Navigace (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"},
                    {text: "Sekce (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"},
                    {text: "Zápatí (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"},
                    {text: "Rozvržení stránky (W3Schools)", url: "https://www.w3schools.com/html/html_layout.asp"},
                    {text: "Zaoblené rohy v CSS (W3Schools)", url: "https://www.w3schools.com/css/css3_borders.asp"}
                ]
            },
            {
                id: "div_span",
                part: "html_css_init",
                heading: "Blokové a řádkové prvky: div a span",
                descriptionHtml: "<p>Přidej do stránky blokový prvek <code>&lt;div&gt;</code> a řádkový prvek <code>&lt;span&gt;</code>. Uprav jejich vzhled pomocí CSS: <code>div</code> nastav rámeček, barvu pozadí a vnitřní odsazení, <code>span</code> změň barvu písma a přidej podtržení.</p>",
                topicHintHtml: "<p>Do <code>div</code> vlož text a obrázek v jedné ze sekcí, do <code>span</code> napiš oddělovač v rámci zápatí <code>footer</code>.</p>",
                iframeSrc: "div_span.html",
                help: [
                    {text: "Blokové prvky (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements"},
                    {text: "Řádkové prvky (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements"},
                    {text: "div element (W3Schools)", url: "https://www.w3schools.com/html/html_div.asp"},
                    {text: "span element (W3Schools)", url: "https://www.w3schools.com/html/html_span.asp"},
                    {text: "CSS border (W3Schools)", url: "https://www.w3schools.com/css/css_border.asp"},
                    {text: "CSS padding (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding"},
                    {text: "CSS text-decoration (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"}
                ]
            },
            {
                id: "box_model",
                part: "html_css_init",
                heading: "Box model",
                descriptionHtml: "<p>U vybraného prvku na stránce nastav pomocí CSS okraj (<code>margin</code>), vnitřní odsazení (<code>padding</code>), rámeček (<code>border</code>) a barvu pozadí (<code>background-color</code>). Sleduj, jak se mění prostor kolem a uvnitř prvku.</p><p>Využij také, že všechny zmíněné vlastnosti se dají nastavit i pro jednotlivé strany prvku zvlášť.</p>",
                topicHintHtml: "<p>Vyber jeden z bloků na své osobní stránce (například část s informacemi o vzdělání nebo zájmech) a použij na něj různé hodnoty vlastností <code>margin</code>, <code>padding</code> a <code>border</code>, aby byl vizuálně odlišený od okolí.</p>",
                iframeSrc: "box_model.html",
                help: [
                    {text: "Box model (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"},
                    {text: "Box model (W3Schools)", url: "https://www.w3schools.com/css/css_boxmodel.asp"},
                    {text: "CSS margin (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"},
                    {text: "CSS padding (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding"},
                    {text: "CSS border (W3Schools)", url: "https://www.w3schools.com/css/css_border.asp"}
                ]
            },
            {
                id: "inline_block",
                part: "html_css_init",
                heading: "Vodorovné uspořádání prvků",
                descriptionHtml: "<p>Umísti několik prvků vedle sebe vodorovně. K tomu použij vlastnost <code>display: inline-block</code>. Každému prvku nastav šířku, výšku, barvu pozadí a vnější okraje, aby mezi nimi byl prostor.</p><p>Můžeš si vyzkoušet, jak se prvky chovají při různých šířkách okna a jak se zalamují na další řádek, pokud se nevejdou.</p>",
                topicHintHtml: "<p>Na své osobní stránce můžeš tímto způsobem vedle sebe zobrazit například několik fotografií, ikon, krátkých textových bloků nebo odkazy na sociální sítě.</p>",
                iframeSrc: "inline_block.html",
                help: [
                    {text: "Display – inline-block (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"},
                    {text: "Display inline-block (W3Schools)", url: "https://www.w3schools.com/css/css_inline-block.asp"},
                    {text: "CSS width and height (W3Schools)", url: "https://www.w3schools.com/css/css_dimension.asp"},
                ]
            },
            {
                id: "ucesani_1",
                part: "html_css_init",
                heading: "Učesání poprvé",
                descriptionHtml: "<p>Nyní již znáš základy html a css dostatečné k tomu, abys vytvořil*a vcelku slušně vypadající jednoduchou webovou stránku. Pusť se do toho a zkus upravit tvojí stránku tak, aby vypadala k světu!</p>",
                topicHintHtml: "<p>Moderní stránky obvykle využívají jednoduché, čisté tvary, zaoblené rohy a pouze několik málo decentních barev.</p>",
                iframeSrc: "ucesani_1.html",
                help: [
                ]
            },

            // DRUHÁ ČÁST - responzivita

            {
                id: "jednotky",
                part: "html_css_responsive",
                heading: "Jednotky v css",
                descriptionHtml: "<p>Seznam se s jednotkami používanými v css - především s relativními jednotkami a uprav použití jednotek ve tvé stránce. Od této chvíle už používej zásadně jednotky relativní, pokud nemáš velmi dobrý důvod používat jednotky absolutní.</p>",
                topicHintHtml: "<p>Jde pouze o úpravu použití jednotek ve tvé stránce.</p>",
                iframeSrc: "jednotky.html",
                help: [
                    {text: "CSS Units (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"},
                    {text: "CSS Units (W3Schools)", url: "https://www.w3schools.com/cssref/css_units.asp"}
                ]
            },
            {
                id: "vice_souboru",
                part: "html_css_responsive",
                heading: "Více souborů",
                descriptionHtml: "<p>Vytvoř druhý nebo i více souborů na tvé stránce. Na prvním souboru bude odkaz na druhý soubor a naopak ve druhém souboru bude odkaz na první soubor. V obou souborech mohou být dva odkazy - na oba soubory (tedy i odkaz na soubor, ve kterém je tento odkaz) tomu se také někdy říká navigace nebo navigační menu.</p>",
                topicHintHtml: "<p>Druhou stránku vytvoř na téma „Blog“, kde budou sepsané krátké články na různá témata, která řešíš, nebo tě zajímají, nebo by ses jimi chtěla zabývat v budoucnu. Vytvoř na obou stránkách navigační menu odkazující na obě stránky.</p>",
                iframeSrc: "vice_souboru_blog.html",
                help: [
                    {text: "Více stránek (W3Schools)", url: "https://www.w3schools.com/html/html_links.asp"},
                    {text: "Odkazy v HTML (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"}
                ]
            },
            {
                id: "pseudo",
                part: "html_css_responsive",
                heading: "Pseudotřídy a pseudoelementy",
                descriptionHtml: "<p>Použij pseudotřídy a pseudoelementy pro zajímavější grafické nastavení stránky.</p>",
                topicHintHtml: "<p>Pseudotřídu použij při nastavení navigačního menu - jak budou vypadat položky při najetí kurzorem myši a poté, co se na ně již kliklo.</p><p>Použij pseudoelementy pro přidání dekorativních prvků na stránku blog - například první písmeno textu každé stránky bude jinak veliké, než zbytek textu a dále myší označený kus textu bude mít zvolenou barvu textu a zvolenou barvu pozadí.</p>",
                iframeSrc: "vice_souboru_blog_pseudo.html",
                help: [
                    {text: "CSS Pseudo-classes (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"},
                    {text: "CSS Pseudo-elements (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"},
                    {text: "CSS Pseudo-classes (W3Schools)", url: "https://www.w3schools.com/css/css_pseudo_classes.asp"},
                    {text: "CSS Pseudo-elements (W3Schools)", url: "https://www.w3schools.com/css/css_pseudo_elements.asp"}
                ]
            },
            {
                id: "responzivita",
                part: "html_css_responsive",
                heading: "Responzivní design",
                descriptionHtml: "<p>Použij responzivní design (media queries) pro zajištění lepšího zobrazení na různě velkých zařízeních - telefonech a velkých monitorech, případně na telefonech na šířku a na výšku.</p><p>Dej si pozor na to, pro kterou velikost obrazovky se má nastavení vytvořit jako hlavní a pro kterou se má změnit (které nastavení bude v media query).</p><p>Aby sis vyzkoušela responzivní design, můžeš jednoduše zmenšit/zúžit okno prohlížeče, nebo můžeš použít nástroje pro vývojáře (klávesa F12) v prohlížeči a simulovat různé velikosti obrazovky a ovládání na dotykovém displeji.</p>",
                topicHintHtml: "<p>Na úzké obrazovce budou krajní mezery velmi malé a dále se zvětší obrázky na titulní straně na 100% šířky, zatímco na širokých obrazovkách budou pouze přes 30% šířky.</p>",
                iframeSrc: "responzivita.html",
                help: [
                    {text: "Responzivní design (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"},
                    {text: "Media Queries (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"},
                    {text: "Responzivní design (W3Schools)", url: "https://www.w3schools.com/css/css_rwd_intro.asp"},
                    {text: "CSS Media Queries (W3Schools)", url: "https://www.w3schools.com/css/css3_mediaqueries.asp"}
                ]
            },
            {
                id: "tabulky",
                part: "html_css_responsive",
                heading: "Tabulky",
                descriptionHtml: "<p>Vytvoř na webové stránce tabulku. Využij i souhrnné části tabulky jako <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> a <code>&lt;tfoot&gt;</code>.",
                topicHintHtml: "<p>Vytvoř tabulku s oblíbenými knihami/filmy/tvůrci. V tabulce zapiš název díla (knihy/filmu/videa), jméno autora, rok vydání a typ díla (text, obraz, video).</p>",
                iframeSrc: "vice_souboru_blog.html",
                help: [
                    {text: "Tabulky v HTML (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"},
                    {text: "Tabulky v HTML (W3Schools)", url: "https://www.w3schools.com/html/html_tables.asp"},
                    {text: "CSS tabulky (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables"},
                    {text: "CSS tabulky (W3Schools)", url: "https://www.w3schools.com/css/css_table.asp"}
                ]
            },
            {
                id: "flexbox_grid",
                part: "html_css_responsive",
                heading: "Flexbox a Grid",
                descriptionHtml: "<p>Vytvoř na webové stránce prvek s dalšími prvky uvnitř, k jehož rozložení využiješ jednou Flexbox a jednou Grid. Ujisti se, že rozložení je responzivní a dobře se zobrazuje na různých zařízeních.</p>",
                topicHintHtml: "<p>Vyzkoušej si vytvořit jednoduchou galerii obrázků pomocí Flexboxu a Gridu. Můžeš také experimentovat s různými směry a zarovnáním prvků.</p>",
                iframeSrc: "vice_souboru.html",
                help: [
                    {text: "CSS Flexbox (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"},
                    {text: "CSS Grid (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},
                    {text: "CSS Flexbox (W3Schools)", url: "https://www.w3schools.com/css/css3_flexbox.asp"},
                    {text: "CSS Grid (W3Schools)", url: "https://www.w3schools.com/css/css_grid.asp"}
                ]
            },
            {
                id: "ucesani_2",
                part: "html_css_responsive",
                heading: "Učesání podruhé",
                descriptionHtml: "<p>Nyní již znáš solidní množství možností pro to, abys vytvořila moderní a atraktivní webovou stránku se statickým obsahem! Statický obsah znamená, že je vše pevně napsané v kódu stránky a nezáleží například na datech uložených v databázi, nebo na tom co zadá uživatel do formuláře.</p><p>Nenech se odradit tím, že ze začátku je obtížné dosáhnout své představy...</p><p>Neváhej také využít některé z LLM, které jsou v dnešní době mocným pomocníkem - nyní již víš, jak popsat do LLM tvůj požadavek pomocí správných termínů a co můžeš přibližně očekávat za výsledek.</p><p>Výsledku, který dostaneš z LLM, bys <strong>vždy měla rozumět</strong> a nemít ve svém projektu nic, o čem nevíš jak to funguje, co to dělá a proč je to v kódu napsané.</p>",
                topicHintHtml: "<p>Vytvoř pěknou, čistou moderní stránku a vyzkoušej jak vypadá i na malých obrazovkách</p>",
                help: [
                ]
            },

            // TŘETÍ ČÁST - javascript - úvod, funkce, onclick

            {
                id: "js_uvod",
                part: "js_init",
                heading: "Jak funguje JavaScript",
                descriptionHtml: "<p>Seznam se s tím, jak v principu funguje JavaScript (jak se zapisuje do souboru typu html, kde se kód vykonává (kde se spotřebovává procesorový čas a paměť), co to je a kde lze najít konzoli).</p><p>Vytvoř jednoduchý skript v rámci html souboru, který vypíše do konzole zprávu 'Ahoj, už mi to běží!' pomocí <code>console.log()</code>.</p>",
                topicHintHtml: "<p>Stačí jednoduchý skript, který vypíše zprávu do konzole - toto je pouze seznamovací úkol.</p>",
                iframeSrc: "js_uvod.html",
                help: [
                    {text: "Úvod do JavaScriptu (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"},
                    {text: "Jak funguje JavaScript (W3Schools)", url: "https://www.w3schools.com/js/js_intro.asp"},
                    {text: "Konzole v prohlížeči (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Console"},
                    {text: "console.log() (W3Schools)", url: "https://www.w3schools.com/jsref/met_console_log.asp"}
                ]
            },
            {
                id: "js_change_content",
                part: "js_init",
                heading: "Funkce, getElementById a změna obsahu stránky",
                descriptionHtml: "<p>Seznam se s tím, co je to funkce, jak se volá a také jak a k čemu lze použít <code>getElementById()</code>.</p><p>Vytvoř a zavolej jednoduchou funkci, která změní text v odstavci s daným ID (protože se to stane ihned při načtení stránky, tak nebude vidět, že tam předtím byl jiný text, ale to upravíme v dalším úkolu).</p>",
                topicHintHtml: "<p>V rámci html kódu bude v odstavci text 'Chudák text, který skoro okamžitě zmizí :-(' a JS funkce ho změní na 'Ahoj, jsem nový text, který je sem vložený pomocí JS'.</p>",
                iframeSrc: "js_change_content_simple.html",
                help: [
                    {text: "Funkce v JavaScriptu (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},
                    {text: "Funkce v JavaScriptu (W3Schools)", url: "https://www.w3schools.com/js/js_functions.asp"},
                    {text: "getElementById (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"},
                    {text: "getElementById (W3Schools)", url: "https://www.w3schools.com/jsref/met_document_getelementbyid.asp"}
                ]
            },
            {
                id: "js_buttons_onclick",
                part: "js_init",
                heading: "Tlačítka a onclick událost",
                descriptionHtml: "<p>Vytvoř v HTML tlačítko přidej k němu JS funkci, která se spustí při kliknutí. Vytvoř dvě tlačítka, která budou obě měnit text v odstavci se zadaným ID.</p><p>Každé tlačítko bude mít svou vlastní funkci, která provede požadovanou akci.</p>",
                topicHintHtml: "<p>Jedno tlačítko bude vkládat text 'Jiný text. ' a druhé 'Hop a je tu zase něco jiného.'</p>",
                iframeSrc: "js_buttons_onclick.html",
                help: [
                    {text: "HTML button element (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"},
                    {text: "HTML button (W3Schools)", url: "https://www.w3schools.com/tags/tag_button.asp"},
                    {text: "onclick event (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event"},
                    {text: "onclick event (W3Schools)", url: "https://www.w3schools.com/jsref/event_onclick.asp"},
                    {text: "JavaScript Events (W3Schools)", url: "https://www.w3schools.com/js/js_events.asp"}
                ]
            },
            {
                id: "js_buttons_styles",
                part: "js_init",
                heading: "Tlačítka a změna stylů",
                descriptionHtml: "<p>Po kliknutí na tlačítko se změní nejen obsah, ale i grafika nápisu.</p><p>Nejprve vyzkoušej změnit styl přímo, jednu vlastnost po druhé. Většinou se však vytvoří css třída (viz úkoly v html a css) a pomocí js se změní třída, která je k prvku přiřazená (například se jedna třída odebere a druhá se přidá)</p>",
                topicHintHtml: "<p>Změn pomocí tlačítka font a barvu písma.</p>",
                iframeSrc: "js_buttons_styles.html",
                help: [
                    {text: "Manipulace s CSS pomocí JavaScriptu (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#manipulating_styles"},
                    {text: "JavaScript HTML DOM Style (W3Schools)", url: "https://www.w3schools.com/jsref/prop_style_color.asp"},
                    {text: "Class list - třídy (W3Schools)", url: "https://www.w3schools.com/jsref/prop_element_classlist.asp"}
                ]
            },

            // ČTVRTÁ ČÁST - javascript - formuláře, události
            {
                id: "js_forms_simple",
                part: "js_forms_events",
                heading: "Formuláře a zpracování vstupu",
                descriptionHtml: "<p>Vytvoř formulář a do připraveného odstavce textu vypiš, po stisknutí tlačítka, hodnoty zadané do formuláře. Vyzkoušej si ve formuláři různé typy vstupů jako např. text, e-mail, heslo, číslo, datum, barvu a další.</p>",
                topicHintHtml: "<p>Až si vyzkoušíš různé možnosti vstupu, vytvoř formulář, do kterého lze zadat své jméno, datum narození a oblíbené jídlo a po stisknutí tlačítka se objeví nějaká pěkná zpráva s těmito třemi informacemi - třeba: Ahoj [jméno], co jsi se narodil*a [datum] a máš rád*a [jídlo], měj dnes hezký den :-)</p>",
                iframeSrc: "js_forms_simple.html",
                help: [
                    {text: "HTML Forms (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"},
                    {text: "HTML Forms (W3Schools)", url: "https://www.w3schools.com/html/html_forms.asp"},
                    {text: "Typy vstupů (W3Schools)", url: "https://www.w3schools.com/html/html_form_input_types.asp"},
                    {text: "Čtení dat z formuláře (W3Schools)", url: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_elements_nameditem"},
                    {text: "Label (W3Schools)", url: "https://www.w3schools.com/tags/tag_label.asp"}
                ]
            },
            {
                id: "js_forms_sum",
                part: "js_forms_events",
                heading: "Formuláře součet",
                descriptionHtml: "<p>Vytvoř formulář, do kterého se zadají dvě čísla a po stisknutí tlačítka se jejich součet vypíše do připraveného odstavce.</p>",
                topicHintHtml: "<p>Zkus vytvořit více tlačítek, pro různé operace (např. násobení, dělení, odčítání atd.).</p>",
                iframeSrc: "js_forms_sum.html",
                help: [
                    {text: "Typy vstupů (W3Schools)", url: "https://www.w3schools.com/html/html_form_input_types.asp"},
                    {text: "Čtení dat z formuláře (W3Schools)", url: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_elements_nameditem"},
                    {text: "JavaScript Operators (W3Schools)", url: "https://www.w3schools.com/js/js_operators.asp"}
                ]
            },
            {
                id: "js_eventsListeners",
                part: "js_forms_events",
                heading: "Události - eventsListeners",
                descriptionHtml: "<p>Události jako takové jsou v JS velmi rozsáhlé téma, které obsahuje mnoho detailů, které by tě nejspíš na první pohled nenapadli. Pro začátek nám však postačí, vyzkoušet si obyčejnou práci i s jinými událostmi, než je <code>onclick</code>.</p> <p>Od tohoto úkolu již piš JS kód zásadně do samostatného souboru a vlož ho do HTML souboru podobně, jako se vkládá reference na CSS soubor.<br>Vytvoř stránku, ve které se spustí JS kód až po načtení všech html prvků na stránce (událost <code>DOMContentLoaded</code>) a vlož do stránky obrázek, který bude 'uhybat' před kurzorem myši (událost <code>onmouseover</code>) - tedy vždy, když na něj kurzor myši najede, změní svou polohu na stránce.<br>Po kliknutí na klávesu na klávesnici se přepíše obsah popisku/odstavce. (Kontrolní dotaz - bude tato akce fungovat i na dotykovém displeji?)</p>",
                topicHintHtml: "<p>Po načtení stránky (událost <code>DOMContentLoaded</code>) pomocí JS změň hlavní nadpis stránky na 'Trénujeme JS'. Druhý a třetí úkol je zadaný v popisku.</p>",
                iframeSrc: "js_eventsListeners.html",
                help: [
                    {text: "Jak vložit JavaScript část External JavaScript (W3Schools)", url: "https://www.w3schools.com/js/js_whereto.asp"},
                    {text: "JavaScript Events (W3Schools)", url: "https://www.w3schools.com/js/js_events.asp"},
                    {text: "EventListener (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},
                    {text: "DOMContentLoaded (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event"},
                    {text: "addEventListener (W3Schools)", url: "https://www.w3schools.com/jsref/met_document_addeventlistener.asp"},
                    {text: "DOM Events (W3Schools)", url: "https://www.w3schools.com/jsref/dom_obj_event.asp"}
                ]
            },

            // PÁTÁ ČÁST - javascript - podrobněji

            {
                id: "js_syntax_first",
                part: "js_syntax_basic",
                heading: "Syntaxe JavaScriptu",
                descriptionHtml: "<p>Tento úkol bude trochu otravný, ale je nutné ho absolvovat, abys mohla pokračovat.</p><p>Přečti si část tutoriálu, která se věnuje základní syntaxi JavaScriptu.</p>",
                topicHintHtml: "<p>Čím lépe porozumíš základům syntaxe, tím snazší bude další práce s JavaScriptem.</p>",
                help: [
                    {text: "JavaScript Syntax (W3Schools)", url: "https://www.w3schools.com/js/js_syntax.asp"},
                    {text: "JavaScript Guide (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"}
                ]
            },

        ];