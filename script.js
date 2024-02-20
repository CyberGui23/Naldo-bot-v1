
  const accounts = [
    { username: "CyberGui", password: "230801" },
    { username: "Maricoua", password: "4321" },
    { username: "343Mafupa", password: "001122" },
    // Adicione mais contas conforme necessário
  ];
  
  // ... (mantenha o código anterior)
  
  const userContent = document.getElementById("userContent");
  const loggedInUsername = document.getElementById("loggedInUsername");
  const logoutBtn = document.getElementById("logoutBtn");
  
  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const account = accounts.find(acc => acc.username === username && acc.password === password);
  
    if (account) {
      loggedInUsername.textContent = username;
      showUserScreen();
    } else {
      Swal.fire("Credenciais inválidas. Tente novamente.", "", "error");
    }
  });
  notificationBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Bem Vindo ao NALDO BOT V1 Atenção: Crie sua conta enquanto estiver no bot.Para os usuarios com contas, aconselhamos a criar novas contas para aceder a versao com 98,9% de acertos. SUPORTE:842900642.",
      icon: "info",
      confirmButtonText: "Fechar"
    });
  });
  
  logoutBtn.addEventListener("click", () => {
    showLoginScreen();
  });
  
  function showUserScreen() {
    userContent.style.display = "block";
    document.querySelector(".login-container").style.display = "none";
  }
  
  function showLoginScreen() {
    userContent.style.display = "none";
    document.querySelector(".login-container").style.display = "block";
  }
  
  
  // ... (mantenha o código anterior)
  
  const androidBtn = document.getElementById("androidBtn");
  
  document.querySelectorAll(".square").forEach((square, index) => {
    square.addEventListener("click", () => {
      redirectToNewPage(index + 1);
    });
  });
  
  androidBtn.addEventListener("click", () => {
    window.open("https://chat.openai.com/", "_blank");
  });
  
  function redirectToNewPage(pageNumber) {
    switch (pageNumber) {
      case 1:
        // Redirecionar para a página 1
        window.location.href = "page1.html";
        break;
      case 2:
        // Redirecionar para a página 2
        window.location.href = "page2.html";
        break;
      case 3:
        // Redirecionar para a página 3
        window.location.href = "page3.html";
        break;
      case 4:
        // Redirecionar para a página 4
        window.location.href = "page4.html";
        break;
      case 5:
        // Redirecionar para a página 5
        window.location.href = "page5.html";
        break;
      case 6:
        // Redirecionar para a página 6
        window.location.href = "page6.html";
        break;
      case 7:
        // Redirecionar para a página 7
        window.location.href = "page7.html";
        break;
      default:
        break;
    }
  }
  
