let tasks = [
            {
                id: "about",
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
            heading: "Nadpisy a odstavce",
            descriptionHtml: "<p>Vytvoř stránku s hlavním nadpisem, několika podnadpisy a několika odstavci.</p><p>Změň font písma celé stránky, pozadí nadpisú a podnadpisů a barvu písma odstavců.</p>",
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
                heading: "Rozvržení stránky",
                descriptionHtml: "<p>Použij na stránce prvky <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code> a <code>&lt;section&gt;</code> pro rozdělení obsahu.</p><p>Každé sekci nastav zaoblené rohy a barevné pozadí pomocí CSS.</p>",
                topicHintHtml: "<p>V <code>&lt;header&gt;</code> může být hlavní nadpis, v <code>&lt;nav&gt;</code> odkazy na sekce, v <code>&lt;footer&gt;</code> informace o datumu poslední úpravy a důvodu vzniku těchto stránek, v <code>&lt;section&gt;</code> jednotlivé části obsahu.</p>",
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
                heading: "Učesání poprvé",
                descriptionHtml: "<p>Nyní již znáš základy html a css dostatečné k tomu, abys vytvořil*a vcelku slušně vypadající jednoduchou webovou stránku. Pusť se do toho a zkus upravit tvojí stránku tak, aby vypadala k světu!</p>",
                topicHintHtml: "<p>Moderní stránky obvykle využívají jednoduché, čisté tvary, zaoblené rohy a pouze několik málo decentních barev.</p>",
                iframeSrc: "ucesani_1.html",
                help: [
                ]
            },
            {
                id: "jednotky",
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
                heading: "Učesání podruhé",
                descriptionHtml: "<p>Nyní již znáš solidní množství možností pro to, abys vytvořila moderní a atraktivní webovou stránku se statickým obsahem! Statický obsah znamená, že je vše pevně napsané v kódu stránky a nezáleží například na datech uložených v databázi, nebo na tom co zadá uživatel do formuláře.</p><p>Nenech se odradit tím, že ze začátku je obtížné dosáhnout své představy...</p><p>Neváhej také využít některé z LLM, které jsou v dnešní době mocným pomocníkem - nyní již víš, jak popsat do LLM tvůj požadavek pomocí správných termínů a co můžeš přibližně očekávát za výsledek.</p><p>Výsledku, který dostaneš z LLM, bys <strong>vždy měla rozumět</strong> a nemít ve svém projektu nic, o čem nevíš jak to funguje, co to dělá a proč je to v kódu napsané.</p>",
                topicHintHtml: "<p>Vytvoř pěknou, čistou moderní stránku a vyzkoušej jak vypadá i na malých obrazovkách</p>",
                help: [
                ]
            },
            
            //javascript - úvod, formuláře ...


        ];