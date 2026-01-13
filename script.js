document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const ativarBtn = document.getElementById('ativar');
    const injetarBtn = document.getElementById('injetar');
    const toast = document.getElementById('toast');
    const modal = document.getElementById('modal');
    const fecharModal = document.getElementById('fechar-modal');
    const progressoBar = document.getElementById('progresso-bar');
    const statusTexto = document.getElementById('status-texto');
    
    // Sliders e seus valores
    const miraSlider = document.getElementById('mira');
    const sensiSlider = document.getElementById('sensi');
    const valorMira = document.getElementById('valor-mira');
    const valorSensi = document.getElementById('valor-sensi');
    
    // Configuração FreeFireEliteOptimization
    const configuracaoElite = {
        "FreeFireEliteOptimization": {
            "Metadata": {
                "CompatiblePackages": [
                    "com.dts.freefireth",
                    "com.dts.freefiremax"
                ],
                "Version": "8.5-OmegaQuantum",
                "Description": "Domínio absoluto de mira, recoil inexistente, resposta instantânea, predição neural avançada e otimização total do sistema"
            },

            "AimbotSystem": {
                "Enable": true,
                "AimLock": {
                    "Enable": true,
                    "LockStrength": 1.65,
                    "Smoothness": 0.999999,
                    "AutoHeadAdjust": true,
                    "Humanize": false,
                    "LockFOV": 55,
                    "DynamicFOV": true
                },
                "NoRecoil": {
                    "Enable": true,
                    "VerticalCompensation": 2.85,
                    "HorizontalCompensation": 2.45,
                    "PatternControl": "NeuralAdaptive-V5",
                    "StabilizationFactor": 0.999999
                },
                "AutoTarget": {
                    "Enable": true,
                    "Prediction": "QuantumTracking-V4",
                    "SwitchDelay": 0.00005,
                    "TargetSwitching": "OmegaPriority-Z"
                }
            },

            "AIEnhancer": {
                "BehaviorPrediction": {
                    "EnemyMovementPattern": "QuantumAnalyzed-UltraDeep",
                    "AutoDragAdjust": true,
                    "ScopeSwitchPredict": true,
                    "JitterReduction": true
                },
                "ShotCorrection": {
                    "PreFireAdjustment": true,
                    "ReAimDelay": 0.0002,
                    "DragCurveOptimization": true,
                    "SmartBulletPath": true
                },
                "SmartAimCorrector": {
                    "Enable": true,
                    "PredictiveAdjustment": true,
                    "AutoTiltCorrection": true,
                    "AdaptiveTracking": "OmniScan-V6",
                    "MicroCorrection": 0.00015
                },
                "AI-SnapAssist": {
                    "Enable": true,
                    "SnapLockPrecision": 0.0001,
                    "TargetRecognition": "Instant-V3",
                    "HumanLikeDelay": false,
                    "SmartSwitch": true
                }
            },

            "TouchOptimizer": {
                "TouchStability": {
                    "Enable": true,
                    "DragBalance": 0.999999,
                    "FlickBoost": 2.25,
                    "FineControlAssist": true
                },
                "TouchLatencyPredictor": {
                    "Enable": true,
                    "PredictionWindow": 0.00015,
                    "AutoCompensate": true,
                    "LatencyCorrectionFactor": 0.999999
                },
                "SmartDragTiming": {
                    "Enable": true,
                    "StartDelay": 0.00008,
                    "ReleaseTiming": 0.00045,
                    "AutoOptimize": true,
                    "DragSmoothing": "Phantom-V4"
                }
            },

            "SensorAdjustments": {
                "GyroEnhancer": {
                    "Enable": true,
                    "SmoothBoost": 2.85,
                    "StabilityAssist": true,
                    "DeadZoneFix": 0.0,
                    "HighPrecisionMode": true
                },
                "NoiseCancellerV2": {
                    "Enable": true,
                    "SensorFusion": true,
                    "GyroFilter": "Quantum-V4",
                    "AccelerometerFilter": "UltraPrecisionMax",
                    "NoiseFloorReduction": true
                },
                "RecoilCompensator": {
                    "Enable": true,
                    "GyroAssist": true,
                    "VerticalBalance": 1.55,
                    "HorizontalBalance": 1.45
                }
            },

            "SystemControl": {
                "ZeroInputLag": {
                    "Enable": true,
                    "TouchToFrameDelay": 0,
                    "CommandQueueBypass": true
                },
                "AdvancedFrameSync": {
                    "Enable": true,
                    "InputToRenderSync": "Phantom-V4",
                    "LatencyBudget": 0.00015,
                    "DynamicFrameAdjust": true
                },
                "MemoryBoost": {
                    "Enable": true,
                    "CachePrioritization": "ExtremeUltra",
                    "GarbageCollectorOptimization": true
                }
            },

            "VisualPerformance": {
                "RenderPipelineBoost": {
                    "Enable": true,
                    "PipelineMode": "ZeroOverhead-V4",
                    "DepthOptimization": true,
                    "ShadowCascadeBypass": true,
                    "TextureStreamingBoost": true
                },
                "FrameRateOptimizer": {
                    "Enable": true,
                    "StabilityLock": true,
                    "DynamicScaling": "AggressiveUltra",
                    "TearingFix": true
                }
            },

            "SystemTuning": {
                "MouseControl": {
                    "ActiveWindowTracking": 0,
                    "Beep": "No",
                    "DoubleClickHeight": 1,
                    "DoubleClickSpeed": 200,
                    "DoubleClickWidth": 1,
                    "MouseHoverHeight": 1,
                    "MouseHoverTime": 100,
                    "MouseHoverWidth": 1,
                    "MouseSensitivity": 15,
                    "MouseSpeed": 0,
                    "MouseThreshold1": 0,
                    "MouseThreshold2": 0,
                    "MouseTrails": 0,
                    "SnapToDefaultButton": 0,
                    "SwapMouseButtons": 0,
                    "SmoothMouseXCurve": "00,00,00,00,00,00,00,00,35,ff,00,00,00,00,00,00,00,90,01,00,00,00,00,00,55,ff,05,00,00,00,00,00,00,00,60,00,00,00,00,00",
                    "SmoothMouseYCurve": "00,00,00,00,00,00,00,00,ff,80,03,00,00,00,00,00,00,80,08,00,00,00,00,00,00,ff,55,00,00,00,00,00,00,f0,ff,03,00,00,00,00",
                    "DoubleClickHeight2": 0.15,
                    "DoubleClickSpeed2": 0.15,
                    "DoubleClickWidth2": 0.15,
                    "MouseSensibility2": 0,
                    "MouseSpeed2": 0,
                    "MouseThreshold12": 1,
                    "MouseThreshold22": 1
                },
                "NetworkControl": {
                    "TcpWindowSize": 2097152,
                    "TcpNoDelay": true,
                    "TCPDelAckTicks": 0,
                    "Tcp1323Opts": 4,
                    "TcpMaxDataRetransmissions": 1,
                    "SackOpts": 1,
                    "DefaultTTL": 65535,
                    "EnablePMTUDiscovery": 1,
                    "EnablePMTUBHDetect": 1,
                    "AEnablePMTUBHDetect": 0,
                    "GlobalMaxTcpWindowSize": 2097152,
                    "TcpMaxDupAcks": 1
                }
            }
        }
    };
    
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
    
    // Função para injetar configuração
    injetarBtn.addEventListener('click', function() {
        // Mostrar modal de injeção
        modal.style.display = 'block';
        
        // Resetar progresso
        progressoBar.style.width = '0%';
        statusTexto.textContent = 'Iniciando processo de injeção...';
        
        // Simular processo de injeção
        simularProcessoInjecao();
        
        // Ativar automaticamente todas as funções
        ativarTodasFuncoes();
    });
    
    // Fechar modal
    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Função para simular o processo de injeção
    function simularProcessoInjecao() {
        let progresso = 0;
        const intervalo = setInterval(() => {
            progresso += 2;
            progressoBar.style.width = progresso + '%';
            
            // Atualizar mensagens de status
            if (progresso < 20) {
                statusTexto.textContent = 'Analisando processos em segundo plano...';
            } else if (progresso < 40) {
                statusTexto.textContent = 'Conectando ao Free Fire...';
            } else if (progresso < 60) {
                statusTexto.textContent = 'Injetando FreeFireEliteOptimization...';
            } else if (progresso < 80) {
                statusTexto.textContent = 'Aplicando otimizações avançadas...';
            } else if (progresso < 100) {
                statusTexto.textContent = 'Finalizando configurações...';
            } else {
                statusTexto.textContent = '✅ Configuração injetada com sucesso!';
                statusTexto.style.color = '#4caf50';
                
                // Mostrar toast de sucesso
                toast.textContent = '🚀 Configuração Elite 8.5 injetada no Free Fire!';
                toast.style.display = 'block';
                
                setTimeout(() => {
                    toast.style.display = 'none';
                }, 3000);
                
                clearInterval(intervalo);
                
                // Fechar automaticamente após 3 segundos
                setTimeout(() => {
                    modal.style.display = 'none';
                    // Resetar status
                    statusTexto.textContent = 'Injetando no processo de segundo plano...';
                    statusTexto.style.color = '#bb86fc';
                }, 3000);
            }
        }, 50);
    }
    
    // Função para ativar todas as funções automaticamente
    function ativarTodasFuncoes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const sliders = document.querySelectorAll('input[type="range"]');
        
        // Ativar todas as checkboxes
        checkboxes.forEach(cb => {
            cb.checked = true;
        });
        
        // Ajustar sliders para valores máximos
        sliders.forEach(slider => {
            if (slider.id === 'mira') {
                slider.value = 120;
                valorMira.textContent = '120';
            } else if (slider.id === 'sensi') {
                slider.value = 120;
                valorSensi.textContent = '120';
            }
        });
    }
    
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
