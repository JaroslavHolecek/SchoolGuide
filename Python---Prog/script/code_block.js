function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    
    const code = codeBlock.querySelector('pre code').innerText;
    
    navigator.clipboard.writeText(code);

    const copyMessage = button.nextElementSibling;

    copyMessage.style.transition = "none";
    copyMessage.style.opacity = "1";

    setTimeout(() => {
        copyMessage.style.transition = "opacity 1s ease-in-out";
    }, 10);

    setTimeout(() => {
        copyMessage.style.opacity = "0";
    }, 2000);
}
