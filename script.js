// Credenciais atualizadas
const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = 'PE-DRIN-7GJ-3NB-9Lk';

// Função de login atualizada
function login() {
    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const loginError = document.getElementById('loginError');
    
    // Verificar credenciais atualizadas
    if (user === CORRECT_USERNAME && pass === CORRECT_PASSWORD) {
        // Login bem-sucedido
        document.getElementById('login').style.display = 'none';
        document.getElementById('panel').style.display = 'block';
        loginError.style.display = 'none';
        
        // Atualizar nome do usuário no painel
        document.getElementById('currentUser').textContent = user;
        
        // Inicializar sistema
        detectDevice();
        setupCheckboxes();
        updateActiveFeaturesCount();
        
        // Log de acesso bem-sucedido
        console.log('✅ Acesso concedido ao painel premium');
        console.log('📱 Usuário:', user);
        console.log('🔑 Senha validada com sucesso');
        
    } else {
        // Login falhou
        loginError.style.display = 'flex';
        loginError.style.animation = 'shake 0.5s';
        
        // Limpar animação após término
        setTimeout(() => {
            loginError.style.animation = '';
        }, 500);
        
        // Log de tentativa falha
        console.log('❌ Tentativa de acesso falhou');
        console.log('📝 Usuário inserido:', user);
        console.log('🔐 Senha inserida:', pass ? '***' : '(vazia)');
    }
}

// Função para detectar dispositivo
function detectDevice() {
    const deviceInfo = document.getElementById('deviceInfo');
    const deviceStatus = document.getElementById('deviceStatus');
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    let deviceName = "Dispositivo iOS";
    let deviceIcon = "fas fa-mobile-screen-button";
    let osInfo = "iOS";
    
    // Detecção avançada de dispositivo
    if (/iPad/.test(userAgent)) {
        deviceName = "iPad Pro";
        deviceIcon = "fas fa-tablet-screen-button";
        osInfo = "iPadOS";
    } else if (/iPhone/.test(userAgent)) {
        deviceName = "iPhone";
        deviceIcon = "fas fa-mobile-screen-button";
        
        // Tentar detectar modelo específico
        if (/iPhone 15/.test(userAgent)) {
            deviceName = "iPhone 15 Pro";
        } else if (/iPhone 14/.test(userAgent)) {
            deviceName = "iPhone 14 Pro Max";
        } else if (/iPhone 13/.test(userAgent)) {
            deviceName = "iPhone 13 Pro";
        }
    } else if (/Android/.test(userAgent)) {
        deviceName = "Dispositivo Android";
        deviceIcon = "fas fa-mobile-alt";
        osInfo = "Android";
    }
    
    // Atualizar informações do dispositivo
    deviceInfo.innerHTML = `
        <div class="device-icon">
            <i class="${deviceIcon}"></i>
        </div>
        <div class="device-details">
            <p class="device-name">${deviceName}</p>
            <p class="device-status">
                <span class="status-dot"></span>
                ${osInfo} • Conectado
            </p>
        </div>
    `;
    
    deviceStatus.innerHTML = `<span class="status-dot"></span> ${osInfo} • Conectado`;
    
    console.log('📱 Dispositivo detectado:', deviceName);
    console.log('🖥️ Sistema Operacional:', osInfo);
    console.log('🔧 User Agent:', userAgent);
}

// Função para configurar checkboxes
function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.feature-item input[type="checkbox"]:not(:disabled)');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const featureName = this.id;
            const isEnabled = this.checked;
            const featureItem = this.closest('.feature-item');
            
            // Efeito visual
            if (isEnabled) {
                featureItem.style.borderColor = '#ff0066';
                featureItem.style.boxShadow = '0 0 15px rgba(255, 0, 100, 0.3)';
                featureItem.style.transform = 'translateY(-3px)';
            } else {
                featureItem.style.borderColor = '#333';
                featureItem.style.boxShadow = 'none';
                featureItem.style.transform = 'translateY(0)';
            }
            
            // Log de alteração
            console.log(`⚙️ Recurso "${featureName}": ${isEnabled ? 'ATIVADO' : 'DESATIVADO'}`);
            
            // Atualizar contador de recursos ativos
            updateActiveFeaturesCount();
        });
    });
}

// Função para atualizar contador de recursos ativos
function updateActiveFeaturesCount() {
    const activeCheckboxes = document.querySelectorAll('.feature-item input[type="checkbox"]:checked').length;
    document.getElementById('activeFeatures').textContent = activeCheckboxes;
    
    // Atualizar contador no console
    console.log(`📊 Recursos ativos: ${activeCheckboxes}/5`);
}

// Função de injeção
function inject() {
    const msg = document.getElementById('msg');
    const checkboxes = document.querySelectorAll('.feature-item input[type="checkbox"]:checked');
    const injectBtn = document.querySelector('.inject-btn');
    
    if (checkboxes.length === 0) {
        alert('⚠️ Selecione pelo menos um recurso para injectar!');
        return;
    }
    
    // Mostrar mensagem de sucesso
    msg.style.display = 'flex';
    msg.style.animation = 'successPulse 2s';
    
    // Simular processo de injeção
    const features = Array.from(checkboxes).map(cb => cb.id);
    console.log('💉 Iniciando injeção de recursos:', features);
    console.log('🔄 Processando módulos...');
    
    // Efeito visual de carregamento
    injectBtn.innerHTML = '<i class="fas fa-sync fa-spin"></i> Injectando...';
    injectBtn.disabled = true;
    
    // Simulação de tempo de injeção
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 20;
        console.log(`📈 Progresso: ${progress}%`);
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            
            // Concluir injeção
            injectBtn.innerHTML = '<i class="fas fa-check-circle"></i> Injectado!';
            
            setTimeout(() => {
                injectBtn.innerHTML = '<i class="fas fa-play-circle"></i> Injectar Mods Selecionados';
                injectBtn.disabled = false;
                
                // Log de conclusão
                console.log('✅ Injeção concluída com sucesso!');
                console.log('🎮 Recursos ativados:', features.length);
                
                // Manter mensagem visível por 5 segundos
                setTimeout(() => {
                    msg.style.display = 'none';
                    msg
