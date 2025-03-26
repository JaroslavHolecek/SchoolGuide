function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    
    const code = codeBlock.querySelector('pre code').innerText;
    
    navigator.clipboard.writeText(code);

    alert('Code copied to clipboard!');
}
