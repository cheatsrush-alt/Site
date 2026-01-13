// Credenciais atualizadas
const CORRECT_USERNAME = 'pedrin';
const CORRECT_PASSWORD = 'auxilio';

// Variáveis globais
let sessionStartTime = null;
let sessionTimer = null;
let currentMode = 'safe';

// Função de login atualizada
function login() {
    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const loginError = document.getElementById('loginError');
    
    // Validação de entrada
    if (!user || !pass) {
        showError('Preencha todos os campos');
        return;
    }
    
    // Verificar credenciais
    if (user === CORRECT_USERNAME && pass === CORRECT_PASSWORD) {
        // Login bem-sucedido
        document.getElementById('login').style.display = 'none';
        document.getElementById('panel').style.display = 'block';
        loginError.style.display = 'none';
        
        // Iniciar sessão
        startSession();
        
        // Log de segurança
        console.log('🔐 Sistema @pedrinhox - Acesso autorizado');
        console.log('👤 Usuário:', user);
        console.log('🕐 Hora de acesso:', new Date().toLocaleString());
        console.log('🌐 IP Simulado:', generateFakeIP());
        
    } else {
        // Login falhou
        showError('Acesso não autorizado');
        
        // Log de tentativa falha
        console.log('⚠️ Tentativa de acesso não autorizado');
        console.log('📝 Usuário inserido:', user);
        console.log('🕐 Hora da tentativa:', new Date().toLocaleString());
    }
}

// Função para exibir erro
function showError(message) {
    const loginError = document.getElementById('loginError');
    const errorContent = loginError.querySelector('.error-content p');
    
    errorContent.textContent = message;
    loginError.style.display = 'flex';
    loginError.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        loginError.style.animation = '';
    }, 500);
}

// Gerar IP fake para logs
function generateFakeIP() {
    const parts = [];
    for (let i = 0; i < 4; i++) {
        parts.push(Math.floor(Math.random() * 255));
    }
    return parts.join('.');
}

// Iniciar sessão
function startSession() {
    sessionStartTime = new Date();
    updateSessionTimer();
    
    // Atualizar timer a cada segundo
    sessionTimer = setInterval(updateSessionTimer, 1000);
    
    // Inicializar sistema
    initializeSystem();
}

// Atualizar timer da sessão
function updateSessionTimer() {
    if (!sessionStartTime) return;
    
    const now = new Date();
    const diff = Math.floor((now - sessionStartTime) / 1000);
    
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    
    const timeString = 
        hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
    
    document.getElementById('sessionTimer').textContent = timeString;
    document.getElementById('uptime').textContent = hours > 0 ? `${hours}h` : `${minutes}m`;
}

// Inicializar sistema
function initializeSystem() {
    // Detectar dispositivo
    detectDevice();
    
    // Configurar módulos
    setupModules();
    
    // Iniciar monitoramento de sistema
    startSystemMonitoring();
    
    console.log('🚀 Sistema @pedrinhox inicializado');
    console.log('🖥️ Modo:', currentMode.toUpperCase());
}

// Detectar dispositivo
function detectDevice() {
    const deviceCard = document.getElementById('deviceCard');
    const userAgent = navigator.userAgent;
    
    let deviceInfo = "Dispositivo iOS";
    let icon = "fas fa-mobile-alt";
    
    // Detecção simplificada
    if (/iPhone/.test(userAgent)) {
        deviceInfo = "iPhone (iOS)";
        icon = "fas fa-mobile-screen-button";
    } else if (/iPad/.test(userAgent)) {
        deviceInfo = "iPad (iPadOS)";
        icon = "fas fa-tablet-screen-button";
    } else if (/Mac/.test(userAgent)) {
        deviceInfo = "Mac (macOS)";
        icon = "fas fa-laptop";
    }
    
    deviceCard.innerHTML = `
        <i class="${icon}"></i>
        <div class="status-content">
            <h4>${deviceInfo}</h4>
            <p>Sistema compatível</p>
        </div>
    `;
    
    console.log('📱 Dispositivo detectado:', deviceInfo);
}

// Configurar módulos
function setupModules() {
    const modules = document.querySelectorAll('.module-card[data-module]');
    
    modules.forEach(module => {
        const toggle = module.querySelector('input[type="checkbox"]');
        if (!toggle) return;
        
        toggle.addEventListener('change', function() {
            const moduleName = this.id;
            const isActive = this.checked;
            
            // Efeito visual
            const moduleCard = this.closest('.module-card');
            if (isActive) {
                moduleCard.style.borderColor = 'rgba(255, 0, 100, 0.5)';
                moduleCard.style.boxShadow = '0 10px 30px rgba(255, 0, 100, 0.2)';
            } else {
                moduleCard.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                moduleCard.style.boxShadow = 'none';
            }
            
            // Log de alteração
            console.log(`⚙️ Módulo "${moduleName}": ${isActive ? 'ATIVADO' : 'DESATIVADO'}`);
            
            // Atualizar contador
            updateActiveModules();
        });
    });
}

// Atualizar contador de módulos ativos
function updateActiveModules() {
    const activeModules = document.querySelectorAll('.module-card input[type="checkbox"]:checked').length;
    document.getElementById('activeModules').textContent = activeModules;
    
    // Atualizar estatísticas
    updateSystemStats(activeModules);
}

// Atualizar estatísticas do sistema
function updateSystemStats(activeModules) {
    // Simular valores baseados nos módulos ativos
    const cpuBase = 12;
    const ramBase = 48;
    const latencyBase = 28;
    
    const cpuUsage = Math.min(99, cpuBase + (activeModules * 5));
    const ramUsage = Math.min(99, ramBase + (activeModules * 8));
    const latency = Math.max(10, latencyBase - (activeModules * 2));
    
    document.getElementById('cpuUsage').textContent = `${cpuUsage}%`;
    document.getElementById('ramUsage').textContent = `${ramUsage}%`;
    document.getElementById('latency').textContent = `${latency}ms`;
}

// Iniciar monitoramento do sistema
function startSystemMonitoring() {
    // Simular variações nas estatísticas
    setInterval(() => {
        updateActiveModules();
    }, 5000);
}

// Definir modo de operação
function setMode(mode) {
    currentMode = mode;
    
    // Atualizar botões
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    console.log(`🎯 Modo alterado para: ${mode.toUpperCase()}`);
    
    // Ajustar configurações baseadas no modo
    switch(mode) {
        case 'safe':
            updateModeSettings(1, 0.8, 'Baixo risco');
            break;
        case 'aggressive':
            updateModeSettings(2, 1.2, 'Alto desempenho');
            break;
        case 'stealth':
            updateModeSettings(0.5, 0.6, 'Máximo sigilo');
            break;
    }
}

// Atualizar configurações do modo
function updateModeSettings(power, speed, description) {
    const statusText = document.querySelector('.status-text');
    if (statusText) {
        statusText.textContent = description;
    }
    
    console.log(`⚡ Configurações do modo ${currentMode}:`);
    console.log(`   - Potência: ${power}x`);
    console.log(`   - Velocidade: ${speed}x`);
    console.log(`   - Descrição: ${description}`);
}

// Função de inicialização do sistema
function inject() {
    const msg = document.getElementById('msg');
    const activeModules = document.querySelectorAll('.module-card input[type="checkbox"]:checked');
    const injectBtn = document.querySelector('.inject-btn');
    
    if (activeModules.length === 0) {
        showError('Selecione pelo menos um módulo');
        return;
    }
    
    // Mostrar mensagem de sucesso
    msg.style.display = 'flex';
    msg.style.animation = 'successPulse 2s';
    
    // Inicializar sistema
    console.log('🚀 Iniciando inicialização do sistema...');
    console.log(`📊 Módulos ativos: ${activeModules.length}`);
    console.log(`🎯 Modo: ${currentMode.toUpperCase()}`);
    
    // Efeito visual de carregamento
    injectBtn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Inicializando...';
    injectBtn.disabled = true;
    
    // Simular processo de inicialização
    let progress = 0;
    const modulesList = Array.from(activeModules).map(m => m.id);
    
    console.log('📋 Módulos selecionados:', modulesList);
    
    const progressInterval = setInterval(() => {
        progress += 20;
        console.log(`📈 Progresso: ${progress}%`);
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            
            // Concluir inicialização
            injectBtn.innerHTML = '<i class="fas fa-check-circle"></i> Sistema Pronto!';
            
            setTimeout(() => {
                injectBtn.innerHTML = '<i class="fas fa-play"></i> Inicializar Sistema';
                injectBtn.disabled = false;
                
                // Log de conclusão
                console.log('✅ Sistema inicializado com sucesso!');
                console.log('🎮 Módulos ativados:', modulesList.length);
                console.log('🛡️  Modo de segurança:', currentMode);
                console.log('📊 Performance otimizada');
                
                // Esconder mensagem após 5 segundos
                setTimeout(() => {
                    msg.style.display = 'none';
                    msg.style.animation = '';
                }, 5000);
            }, 1000);
        }
    }, 300);
}

// Mostrar informações do sistema
function showSystemInfo() {
    const info = `
        Sistema: @pedrinhox v2.4
        Usuário: ${CORRECT_USERNAME}
        Sessão: ${document.getElementById('sessionTimer').textContent}
        Modo: ${currentMode.toUpperCase()}
        Módulos ativos: ${document.getElementById('activeModules').textContent}
        Status: Operacional
    `;
    
    alert('📋 Informações do Sistema\n\n' + info);
    console.log('ℹ️  Informações do sistema exibidas');
}

// Atualizar sistema
function refreshSystem() {
    const refreshBtn = document.querySelector('.refresh-btn');
    
    refreshBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Atualizando...';
    
    // Simular atualização
    setTimeout(() => {
        // Atualizar estatísticas
        detectDevice();
        updateActiveModules();
        
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Atualizar';
        
        console.log('🔄 Sistema atualizado');
        showTemporaryMessage('Sistema atualizado com sucesso!', 'success');
    }, 1500);
}

// Mostrar mensagem temporária
function showTemporaryMessage(message, type) {
    const tempMsg = document.createElement('div');
    tempMsg.className = `temp-message ${type}`;
    tempMsg.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.querySelector('.container').appendChild(tempMsg);
    
    setTimeout(() => {
        tempMsg.remove();
    }, 3000);
}

// Função de logout
function logout() {
    if (confirm('Deseja encerrar a sessão atual?')) {
        // Limpar timer
        if (sessionTimer) {
            clearInterval(sessionTimer);
        }
        
        // Resetar sistema
        document.getElementById('panel').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        
        // Limpar campos
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';
        
        // Desativar todos os módulos
        document.querySelectorAll('.module-card input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
            const moduleCard = cb.closest('.module-card');
            moduleCard.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            moduleCard.style.boxShadow = 'none';
        });
        
        // Resetar modo
        currentMode = 'safe';
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('.mode-btn').classList.add('active');
        
        // Esconder mensagens
        document.getElementById('msg').style.display = 'none';
        document.getElementById('loginError').style.display = 'none';
        
        // Log de logout
        console.log('👋 Sessão encerrada');
        console.log('🕐 Tempo total da sessão:', document.getElementById('sessionTimer').textContent);
    }
}

// Event Listeners ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Permitir login com Enter
    document.getElementById('user').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('pass').focus();
        }
    });
    
    document.getElementById('pass').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
    
    // Focar no primeiro campo
    document.getElementById('user').focus();
    
    // Adicionar estilos CSS para mensagens temporárias
    const style = document.createElement('style');
    style.textContent = `
        .temp-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(30, 30, 30, 0.95);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        }
        
        .temp-message.success {
            border-color: rgba(0, 255, 136, 0.3);
            background: rgba(0, 255, 136, 0.1);
        }
        
        .temp-message i {
            font-size: 20px;
        }
        
        .temp-message.success i {
            color: #00ff88;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes successPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🟢 Sistema @pedrinhox carregado');
    console.log('🔒 Acesso restrito - Sistema de autenticação ativo');
});
