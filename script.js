// Função de login
function login() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const loginError = document.getElementById('loginError');
    
    // Credenciais padrão
    if (user === 'admin' && pass === '1234') {
        // Esconder login e mostrar painel
        document.getElementById('login').style.display = 'none';
        document.getElementById('panel').style.display = 'block';
        loginError.style.display = 'none';
        
        // Detectar dispositivo e mostrar informações
        detectDevice();
        
        // Configurar eventos dos checkboxes
        setupCheckboxes();
    } else {
        loginError.style.display = 'flex';
        // Adicionar efeito de shake no erro
        loginError.style.animation = 'shake 0.5s';
        setTimeout(() => {
            loginError.style.animation = '';
        }, 500);
    }
}

// Função para detectar dispositivo (simulação)
function detectDevice() {
    const deviceInfo = document.getElementById('deviceInfo');
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    let deviceName = "Dispositivo iOS";
    let deviceIcon = "fas fa-mobile-screen-button";
    
    // Detecção simples de dispositivo
    if (/iPad/.test(userAgent)) {
        deviceName = "iPad Detectado";
        deviceIcon = "fas fa-tablet-screen-button";
    } else if (/iPhone/.test(userAgent)) {
        deviceName = "iPhone Detectado";
        deviceIcon = "fas fa-mobile-screen-button";
    } else if (/Android/.test(userAgent)) {
        deviceName = "Dispositivo Android";
        deviceIcon = "fas fa-mobile-alt";
    }
    
    // Atualizar informações do dispositivo
    deviceInfo.innerHTML = `
        <i class="${deviceIcon}"></i>
        <p>${deviceName}</p>
        <p style="font-size: 0.9rem; color: #aaa; margin-top: 5px;">
            ${navigator.platform || "Sistema desconhecido"}
        </p>
    `;
}

// Função para configurar eventos dos checkboxes
function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.feature-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const featureName = this.id;
            const isEnabled = this.checked;
            
            console.log(`Feature ${featureName}: ${isEnabled ? 'ativada' : 'desativada'}`);
            
            // Efeito visual ao ativar/desativar
            const featureItem = this.closest('.feature-item');
            if (isEnabled) {
                featureItem.style.borderColor = '#ff0066';
                featureItem.style.boxShadow = '0 0 10px rgba(255, 0, 100, 0.3)';
            } else {
                featureItem.style.borderColor = '#333';
                featureItem.style.boxShadow = 'none';
            }
        });
    });
}

// Função de injeção
function inject() {
    const msg = document.getElementById('msg');
    const checkboxes = document.querySelectorAll('.feature-item input[type="checkbox"]:checked');
    
    if (checkboxes.length === 0) {
        alert('Selecione pelo menos um recurso para injectar!');
        return;
    }
    
    // Mostrar mensagem de sucesso
    msg.style.display = 'flex';
    
    // Simular processo de injeção
    const features = Array.from(checkboxes).map(cb => cb.id);
    console.log('Injetando recursos:', features);
    
    // Efeito visual
    const injectBtn = document.querySelector('.inject-btn');
    injectBtn.innerHTML = '<i class="fas fa-sync fa-spin"></i> Injectando...';
    injectBtn.disabled = true;
    
    // Simular tempo de injeção
    setTimeout(() => {
        injectBtn.innerHTML = '<i class="fas fa-play-circle"></i> Injectar Mods';
        injectBtn.disabled = false;
        
        // Adicionar animação à mensagem
        msg.style.animation = 'pulse 2s';
        
        // Esconder mensagem após 5 segundos
        setTimeout(() => {
            msg.style.display = 'none';
            msg.style.animation = '';
        }, 5000);
    }, 2000);
}

// Função de logout
function logout() {
    if (confirm('Deseja realmente sair do painel?')) {
        // Esconder painel e mostrar login
        document.getElementById('panel').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        
        // Limpar campos
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('loginError').style.display = 'none';
        
        // Desmarcar todos os checkboxes
        const checkboxes = document.querySelectorAll('.feature-item input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            const featureItem = checkbox.closest('.feature-item');
            featureItem.style.borderColor = '#333';
            featureItem.style.boxShadow = 'none';
        });
        
        // Esconder mensagem de injeção
        document.getElementById('msg').style.display = 'none';
    }
}

// Permitir login com Enter
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de Enter nos campos de login
    const userField = document.getElementById('user');
    const passField = document.getElementById('pass');
    
    userField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            passField.focus();
        }
    });
    
    passField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
    
    // Adicionar estilos de animação dinamicamente
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});
