// Credenciais atualizadas
const CORRECT_USERNAME = 'pedrin';
const CORRECT_PASSWORD = 'auxilio';

// Variáveis globais
let sessionStartTime = null;
let sessionTimer = null;
let currentMode = 'safe';

// Função de login atualizada - CORRIGIDA
function login() {
    console.log('🔑 Tentativa de login...');
    
    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const loginError = document.getElementById('loginError');
    
    // DEBUG: Mostrar valores inseridos
    console.log('Usuário digitado:', user);
    console.log('Senha digitada:', pass ? '***' : '(vazia)');
    
    // Validação de entrada
    if (!user || !pass) {
        showError('Preencha todos os campos');
        return;
    }
    
    // Verificar credenciais - CORRIGIDO
    if (user === CORRECT_USERNAME && pass === CORRECT_PASSWORD) {
        console.log('✅ Credenciais corretas!');
        
        // Login bem-sucedido - CORRIGIDO
        const loginBox = document.getElementById('login');
        const panel = document.getElementById('panel');
        
        // Verificar se os elementos existem
        if (!loginBox || !panel) {
            console.error('❌ Elementos não encontrados!');
            showError('Erro no sistema');
            return;
        }
        
        console.log('Escondendo login...');
        loginBox.style.display = 'none';
        
        console.log('Mostrando painel...');
        panel.style.display = 'block';
        
        loginError.style.display = 'none';
        
        // Iniciar sessão
        startSession();
        
        // Log de segurança
        console.log('🔐 Sistema @pedrinhox - Acesso autorizado');
        console.log('👤 Usuário:', user);
        console.log('🕐 Hora de acesso:', new Date().toLocaleString());
        
    } else {
        console.log('❌ Credenciais incorretas!');
        // Login falhou
        showError('Acesso não autorizado');
        
        // Log de tentativa falha
        console.log('⚠️ Tentativa de acesso não autorizado');
    }
}

// Função para exibir erro - SIMPLIFICADA
function showError(message) {
    const loginError = document.getElementById('loginError');
    if (!loginError) {
        console.error('Elemento de erro não encontrado');
        return;
    }
    
    const errorContent = loginError.querySelector('.error-content p');
    if (errorContent) {
        errorContent.textContent = message;
    }
    
    loginError.style.display = 'flex';
    loginError.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        loginError.style.animation = '';
    }, 500);
}

// Iniciar sessão - SIMPLIFICADA
function startSession() {
    console.log('🚀 Iniciando sessão...');
    
    sessionStartTime = new Date();
    
    // Inicializar timer
    updateSessionTimer();
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
    
    const timerElement = document.getElementById('sessionTimer');
    if (timerElement) {
        timerElement.textContent = timeString;
    }
    
    const uptimeElement = document.getElementById('uptime');
    if (uptimeElement) {
        uptimeElement.textContent = hours > 0 ? `${hours}h` : `${minutes}m`;
    }
}

// Inicializar sistema - SIMPLIFICADA
function initializeSystem() {
    console.log('🔄 Inicializando sistema...');
    
    // Detectar dispositivo
    detectDevice();
    
    // Configurar módulos
    setupModules();
    
    // Atualizar contador inicial
    updateActiveModules();
    
    console.log('✅ Sistema inicializado');
}

// Detectar dispositivo - SIMPLIFICADA
function detectDevice() {
    const deviceCard = document.getElementById('deviceCard');
    if (!deviceCard) return;
    
    const userAgent = navigator.userAgent;
    let deviceInfo = "Dispositivo iOS";
    let icon = "fas fa-mobile-alt";
    
    if (/iPhone/.test(userAgent)) {
        deviceInfo = "iPhone (iOS)";
        icon = "fas fa-mobile-screen-button";
    } else if (/iPad/.test(userAgent)) {
        deviceInfo = "iPad (iPadOS)";
        icon = "fas fa-tablet-screen-button";
    }
    
    deviceCard.innerHTML = `
        <i class="${icon}"></i>
        <div class="status-content">
            <h4>${deviceInfo}</h4>
            <p>Sistema compatível</p>
        </div>
    `;
}

// Configurar módulos - SIMPLIFICADA
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
            
            // Atualizar contador
            updateActiveModules();
        });
    });
}

// Atualizar contador de módulos ativos
function updateActiveModules() {
    const activeModules = document.querySelectorAll('.module-card input[type="checkbox"]:checked').length;
    const activeModulesElement = document.getElementById('activeModules');
    
    if (activeModulesElement) {
        activeModulesElement.textContent = activeModules;
    }
}

// Definir modo de operação - SIMPLIFICADA
function setMode(mode) {
    currentMode = mode;
    
    // Atualizar botões
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    console.log(`🎯 Modo alterado para: ${mode.toUpperCase()}`);
}

// Função de inicialização do sistema - SIMPLIFICADA
function inject() {
    console.log('🚀 Iniciando sistema...');
    
    const msg = document.getElementById('msg');
    const activeModules = document.querySelectorAll('.module-card input[type="checkbox"]:checked');
    const injectBtn = document.querySelector('.inject-btn');
    
    if (activeModules.length === 0) {
        alert('⚠️ Selecione pelo menos um módulo');
        return;
    }
    
    // Mostrar mensagem de sucesso
    if (msg) {
        msg.style.display = 'flex';
        msg.style.animation = 'successPulse 2s';
    }
    
    // Efeito visual de carregamento
    if (injectBtn) {
        injectBtn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Inicializando...';
        injectBtn.disabled = true;
    }
    
    // Simular processo
    setTimeout(() => {
        if (injectBtn) {
            injectBtn.innerHTML = '<i class="fas fa-check-circle"></i> Sistema Pronto!';
        }
        
        setTimeout(() => {
            if (injectBtn) {
                injectBtn.innerHTML = '<i class="fas fa-play"></i> Inicializar Sistema';
                injectBtn.disabled = false;
            }
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                if (msg) {
                    msg.style.display = 'none';
                    msg.style.animation = '';
                }
            }, 5000);
        }, 1000);
    }, 2000);
}

// Mostrar informações do sistema
function showSystemInfo() {
    const info = `
        Sistema: @pedrinhox v2.4
        Usuário: ${CORRECT_USERNAME}
        Sessão: ${document.getElementById('sessionTimer')?.textContent || '00:00:00'}
        Modo: ${currentMode.toUpperCase()}
        Módulos ativos: ${document.getElementById('activeModules')?.textContent || '0'}
        Status: Operacional
    `;
    
    alert('📋 Informações do Sistema\n\n' + info);
}

// Atualizar sistema
function refreshSystem() {
    const refreshBtn = document.querySelector('.refresh-btn');
    
    if (refreshBtn) {
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Atualizando...';
        
        setTimeout(() => {
            // Atualizar estatísticas
            detectDevice();
            updateActiveModules();
            
            refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Atualizar';
            
            alert('✅ Sistema atualizado!');
        }, 1000);
    }
}

// Função de logout - SIMPLIFICADA
function logout() {
    if (confirm('Deseja encerrar a sessão atual?')) {
        // Limpar timer
        if (sessionTimer) {
            clearInterval(sessionTimer);
        }
        
        // Resetar sistema
        const panel = document.getElementById('panel');
        const loginBox = document.getElementById('login');
        
        if (panel) panel.style.display = 'none';
        if (loginBox) loginBox.style.display = 'block';
        
        // Limpar campos
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';
        
        // Desativar todos os módulos
        document.querySelectorAll('.module-card input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
            const moduleCard = cb.closest('.module-card');
            if (moduleCard) {
                moduleCard.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                moduleCard.style.boxShadow = 'none';
            }
        });
        
        // Resetar modo
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        if (document.querySelector('.mode-btn')) {
            document.querySelector('.mode-btn').classList.add('active');
        }
        
        // Esconder mensagens
        const msg = document.getElementById('msg');
        const loginError = document.getElementById('loginError');
        
        if (msg) msg.style.display = 'none';
        if (loginError) loginError.style.display = 'none';
        
        console.log('👋 Sessão encerrada');
    }
}

// Event Listeners ao carregar a página - CORRIGIDO
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 Página carregada');
    
    // Verificar se os elementos existem
    const userField = document.getElementById('user');
    const passField = document.getElementById('pass');
    
    if (!userField || !passField) {
        console.error('❌ Campos de login não encontrados!');
        return;
    }
    
    // Permitir login com Enter
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
    
    // Focar no primeiro campo
    userField.focus();
    
    console.log('✅ Sistema pronto para uso');
    console.log('👤 Usuário correto:', CORRECT_USERNAME);
    console.log('🔑 Senha correta:', CORRECT_PASSWORD);
});

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
