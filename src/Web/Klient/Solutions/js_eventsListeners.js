// Čekáme na načtení všech HTML elementů
document.addEventListener('DOMContentLoaded', function() {
    
    // Získání referencí na elementy
    const dodgeImage = document.getElementById('dodge-image');
    const textDisplay = document.getElementById('text-display');
    
    // Funkce pro pohyb obrázku
    function moveImage() {
        const smeryPohybu = [
            { x: dodgeImage.offsetWidth, y: 0 },   // vpravo
            { x: -dodgeImage.offsetWidth, y: 0 },  // vlevo
            { x: 0, y: dodgeImage.offsetHeight },  // dolů
            { x: 0, y: -dodgeImage.offsetHeight }  // nahoru
        ];
        
        // Vybíráme ze čtyř směrů náhodně
        const randomDirection = smeryPohybu[Math.floor(Math.random() * smeryPohybu.length)];
        
        const currentLeft = dodgeImage.offsetLeft;
        const currentTop = dodgeImage.offsetTop;
        
        dodgeImage.style.left = `${currentLeft + randomDirection.x}px`;
        dodgeImage.style.top = `${currentTop + randomDirection.y}px`;
    }
    
    // Událost pro uhýbání obrázku před kurzorem myši
    dodgeImage.addEventListener('mouseover', moveImage);
    
    // Událost pro detekci stisku klávesy - funkci lze také beze jména vytvořit přímo v event posluchači
    document.addEventListener('keydown', function(event) {
        textDisplay.textContent = `Stiskla jsi klávesu: ${event.key}`;
    });
    
    // Kontrolní odpověď: NE, událost keydown nebude fungovat na dotykovém displeji,
    // protože dotykové displeje nemají fyzickou klávesnici a negenerují keydown události
    // (pokud není otevřena virtuální klávesnice v textovém poli).
    
});