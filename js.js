
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const submitBtn = document.querySelector(".submit-btn");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

     
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> UPLOADING...`;
            submitBtn.disabled = true;
io
            let terminalOutput = document.getElementById("terminal-output");
            if (!terminalOutput) {
                terminalOutput = document.createElement("div");
                terminalOutput.id = "terminal-output";
                terminalOutput.style.marginTop = "20px";
                terminalOutput.style.padding = "15px";
                terminalOutput.style.backgroundColor = "#05070a";
                terminalOutput.style.borderLeft = "3px solid #00ff41";
                terminalOutput.style.fontFamily = "'Fira Code', monospace";
                terminalOutput.style.fontSize = "0.85rem";
                contactForm.appendChild(terminalOutput);
            }

 
            const messages = [
                "> Establishing secure connection...",
                "> Encrypting payload...",
                "> Sending data to remote host: 127.0.0.1",
                "> Transmission successful.",
                "> [SUCCESS]: Gracias, he recibido tu mensaje."
            ];

            terminalOutput.innerHTML = ""; 
            let i = 0;

            function typeLog() {
                if (i < messages.length) {
                    const line = document.createElement("p");
                    line.style.color = i === messages.length - 1 ? "#00ff41" : "#8b949e";
                    line.textContent = messages[i];
                    terminalOutput.appendChild(line);
                    i++;
                    setTimeout(typeLog, 600); 
                } else {
                  
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        contactForm.reset(); 
                    }, 2000);
                }
            }

            typeLog();
        });
    }

    console.log("%c System Status: Online | Welcome back, Root.", "color: #00ff41; font-weight: bold;");
});