document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage("Tú: " + userInput, "user");
    document.getElementById("user-input").value = "";

    fetch("backendchat.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "message=" + encodeURIComponent(userInput)
    })
    .then(response => response.text())
    .then(data => {
        addMessage("Bot: " + data, "bot");
    });
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
