document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    // Load saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        html.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener('change', () => {
        html.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', html.classList.contains('dark-mode'));
    });

    // Bottom Navigation
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = document.querySelectorAll('.section');

    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSectionId = item.getAttribute('data-target');

            // Remove active from all nav items and sections
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active to clicked nav item and corresponding section
            item.classList.add('active');
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    // Mood Tracking
    const moodCards = document.querySelectorAll('.mood-card');
    const moodHistory = document.getElementById('moodHistory');

    moodCards.forEach(card => {
        card.addEventListener('click', () => {
            const mood = card.textContent.trim();
            const moodEntry = document.createElement('div');
            moodEntry.textContent = `${new Date().toLocaleDateString()} - ${mood}`;
            moodHistory.appendChild(moodEntry);
        });
    });

    // Font Size Control
    const fontSizeButtons = document.querySelectorAll('.font-size-btn');

    // Load saved font size preference
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    html.classList.add(`font-${savedFontSize}`);
    
    fontSizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.getAttribute('data-size');
            
            // Remove existing font classes
            html.classList.remove('font-small', 'font-medium', 'font-large');
            html.classList.add(`font-${size}`);

            // Update active button
            fontSizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Save preference
            localStorage.setItem('fontSize', size);
        });
    });

    // Notification Toggle
    const notificationToggle = document.getElementById('notificationsToggle');
    const savedNotificationPreference = localStorage.getItem('notifications') === 'true';
    
    notificationToggle.checked = savedNotificationPreference;

    notificationToggle.addEventListener('change', () => {
        localStorage.setItem('notifications', notificationToggle.checked);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos
    const glucoseInput = document.getElementById('glucoseLevel');
    const checkMenuButton = document.getElementById('checkMenu');
    const menuMessage = document.getElementById('menuMessage');
    const progressChartCanvas = document.getElementById('progressChart');

    // Recomendaciones basadas en glucosa
    checkMenuButton.addEventListener('click', () => {
        const glucoseLevel = parseInt(glucoseInput.value);
        let menu = "";

        if (glucoseLevel < 70) {
            menu = "Desayuno: Jugo de naranja. Almuerzo: Arroz integral con pollo. Cena: Yogur con frutas.";
        } else if (glucoseLevel <= 140) {
            menu = "Desayuno: Avena con fresas. Almuerzo: Pescado a la parrilla con verduras. Cena: Ensalada César.";
        } else {
            menu = "Desayuno: Té verde y nueces. Almuerzo: Pollo al vapor con brócoli. Cena: Caldo de verduras.";
        }

        menuMessage.textContent = menu;
    });

    // Gráfico de progreso
    const progressData = {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{
            label: 'Nivel de Glucosa',
            data: [120, 110, 105, 100],
            backgroundColor: 'rgba(71, 183, 132, 0.5)',
            borderColor: 'rgba(71, 183, 132, 1)',
            borderWidth: 2
        }]
    };

    const progressChart = new Chart(progressChartCanvas, {
        type: 'line',
        data: progressData,
        options: {
            responsive: true,
            plugins: {
                legend: { display: true }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('loginSection');
    const registerSection = document.getElementById('registerSection');
    const forgotPasswordSection = document.getElementById('forgotPasswordSection');
    const moodSection = document.getElementById('moodSection');

    const loginButton = document.getElementById('loginButton');
    const registerLink = document.getElementById('registerLink');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const registerButton = document.getElementById('registerButton');
    const forgotPasswordButton = document.getElementById('forgotPasswordButton');

    // Navegación entre secciones
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.classList.remove('active');
        registerSection.classList.add('active');
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.classList.remove('active');
        forgotPasswordSection.classList.add('active');
    });

    // Simulación de registro
    registerButton.addEventListener('click', () => {
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        if (name && email && password) {
            alert('Cuenta creada con éxito. Inicia sesión.');
            registerSection.classList.remove('active');
            loginSection.classList.add('active');
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Recuperación de contraseña
    forgotPasswordButton.addEventListener('click', () => {
        const email = document.getElementById('forgotEmail').value;
        if (email) {
            alert(`Se ha enviado un correo de recuperación a ${email}.`);
            forgotPasswordSection.classList.remove('active');
            loginSection.classList.add('active');
        } else {
            alert('Por favor, introduce tu correo.');
        }
    });

    // Simulación de inicio de sesión
    loginButton.addEventListener('click', () => {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (email && password) {
            alert('Inicio de sesión exitoso.');
            loginSection.classList.remove('active');
            moodSection.classList.add('active');
        } else {
            alert('Por favor, introduce tus credenciales.');
        }
    });
});


