document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const ativarBtn = document.getElementById('ativar');
    const toast = document.getElementById('toast');
    
    // Sliders e seus valores
    const miraSlider = document.getElementById('mira');
    const sensiSlider = document.getElementById('sensi');
    const valorMira = document.getElementById('valor-mira');
    const valorSensi = document.getElementById('valor-sensi');
    
    // Atualizar valores dos sliders em tempo real
    miraSlider.addEventListener('input', function() {
        valorMira.textContent = this.value;
    });
    
    sensiSlider.addEventListener('input', function() {
        valorSensi.textContent = this.value;
    });
    
    // Função para ativar as funções selecionadas
    ativarBtn.addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const sliders = document.querySelectorAll('input[type="range"]');
        let ativo = false;
        
        // Verificar se pelo menos uma checkbox está marcada
        checkboxes.forEach(cb => {
            if(cb.checked) ativo = true;
        });
        
        // Verificar se algum slider foi alterado do valor padrão
        sliders.forEach(slider => {
            if(slider.value !== slider.defaultValue) ativo = true;
        });
        
        // Exibir mensagem de acordo
        if (ativo) {
            // Coletar configurações ativadas
            const configuracoes = [];
            
            checkboxes.forEach(cb => {
                if(cb.checked) {
                    const label = cb.closest('.funcao').querySelector('label').textContent;
                    configuracoes.push(label);
                }
            });
            
            sliders.forEach(slider => {
                if(slider.value !== slider.defaultValue) {
                    const label = slider.closest('.funcao').querySelector('label').textContent;
                    configuracoes.push(`${label}: ${slider.value}`);
                }
            });
            
            // Mostrar toast com sucesso
            toast.textContent = `✅ ${configuracoes.length} função(ões) ativada(s) com sucesso!`;
            toast.style.display = 'block';
            
            // Efeito visual no botão
            ativarBtn.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
            ativarBtn.textContent = 'FUNÇÕES ATIVADAS!';
            
            setTimeout(() => {
                ativarBtn.style.background = 'linear-gradient(90deg, #6a00ff, #9b4dff)';
                ativarBtn.textContent = 'ATIVAR FUNÇÕES';
            }, 2000);
            
        } else {
            // Nenhuma função selecionada
            toast.textContent = '❌ Nenhuma função selecionada!';
            toast.style.display = 'block';
            
            // Efeito visual de erro
            ativarBtn.style.background = 'linear-gradient(90deg, #ff4444, #cc0000)';
            ativarBtn.textContent = 'SELECIONE UMA FUNÇÃO!';
            
            setTimeout(() => {
                ativarBtn.style.background = 'linear-gradient(90deg, #6a00ff, #9b4dff)';
                ativarBtn.textContent = 'ATIVAR FUNÇÕES';
            }, 2000);
        }
        
        // Ocultar toast após 2.5 segundos
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2500);
    });
    
    // Adicionar efeito de clique nas funções
    const funcoes = document.querySelectorAll('.funcao');
    funcoes.forEach(funcao => {
        funcao.addEventListener('click', function(e) {
            // Se não clicou diretamente no checkbox ou slider
            if (!e.target.matches('input[type="checkbox"]') && !e.target.matches('input[type="range"]')) {
                const checkbox = this.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.checked = !checkbox.checked;
                    
                    // Efeito visual de seleção
                    if (checkbox.checked) {
                        this.style.boxShadow = '0 0 0 2px rgba(155, 77, 255, 0.5)';
                        setTimeout(() => {
                            this.style.boxShadow = 'none';
                        }, 300);
                    }
                }
            }
        });
    });
    
    // Efeito inicial ao carregar a página
    setTimeout(() => {
        document.querySelector('.painel').style.transform = 'scale(1)';
        document.querySelector('.painel').style.opacity = '1';
    }, 100);
});