/**
 * eDEX-UI 风格效果增强脚本
 * 灵感来自 eDEX-UI 的科幻终端界面
 * 包含网格背景、系统监控风格和故障艺术效果
 */

(function() {
  'use strict';

  // eDEX-UI 配置
  const CONFIG = {
    enableGlitch: true,
    enableGridBackground: true,
    enableTimeControl: true,
    enableSystemMonitor: false, // 预留系统监控功能
    glitchInterval: 3000,
    gridColor: '#00ffea',
    gridOpacity: 0.05
  };

  // eDEX-UI 网格背景效果
  function initGridBackground() {
    if (!CONFIG.enableGridBackground) return;
    
    console.log('📡 eDEX-UI 网格背景已启用');
    // CSS 已经处理了网格背景，这里可以添加动态效果
  }

  // 粒子系统（保留但简化）
  class CyberParticle {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.reset();
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = `hsla(${Math.random() * 60 + 160}, 100%, 50%, ${Math.random() * 0.5 + 0.3})`;
      this.life = Math.random() * 100 + 50;
      this.maxLife = this.life;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;

      if (this.x < 0 || this.x > this.canvas.width ||
          this.y < 0 || this.y > this.canvas.height ||
          this.life <= 0) {
        this.reset();
      }
    }

    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  // 背景粒子效果
  function initParticles() {
    if (!CONFIG.enableParticles) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'cyber-particles';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.3;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new CyberParticle(canvas, ctx));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // 故障效果
  function applyGlitchEffect() {
    if (!CONFIG.enableGlitch) return;

    const titles = document.querySelectorAll('.site-title, .post-title');
    
    titles.forEach(title => {
      title.style.position = 'relative';
      
      setInterval(() => {
        const original = title.textContent;
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let iterations = 0;
        
        const interval = setInterval(() => {
          title.textContent = original.split('')
            .map((char, index) => {
              if (index < iterations) return original[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
          
          iterations += 1/3;
          
          if (iterations >= original.length) {
            clearInterval(interval);
            title.textContent = original;
          }
        }, 30);
        
      }, CONFIG.glitchInterval);
    });
  }

  // 时间线控制器
  function initTimeController() {
    if (!CONFIG.enableTimeControl) return;

    const controller = document.createElement('div');
    controller.className = 'timeline-indicator';
    controller.innerHTML = '⏱';
    controller.title = '阅读时间估算';
    document.body.appendChild(controller);

    controller.addEventListener('click', () => {
      showReadingProgress();
    });

    // 计算阅读时间
    function calculateReadingTime() {
      const text = document.querySelector('.post-body')?.textContent || '';
      const wordsPerMinute = 200;
      const minutes = Math.ceil(text.length / (wordsPerMinute * 3));
      return minutes;
    }

    function showReadingProgress() {
      const readingTime = calculateReadingTime();
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      const message = `📊 阅读进度：${scrollPercent}% | 预计剩余：${Math.ceil(readingTime * (1 - scrollPercent/100))}分钟`;
      
      // 创建提示框
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(10, 10, 10, 0.95);
        border: 2px solid #00ffff;
        color: #00ffff;
        padding: 20px 40px;
        font-size: 16px;
        font-family: 'Courier New', monospace;
        z-index: 9999;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        animation: fadeInOut 2s ease-in-out;
      `;
      toast.textContent = message;
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
      `;
      document.head.appendChild(style);
      
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.remove();
        style.remove();
      }, 2000);
    }
  }

  // 代码块增强
  function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.highlight-container');
    
    codeBlocks.forEach(block => {
      // 添加扫描线效果
      const scanline = document.createElement('div');
      scanline.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(0, 255, 255, 0.3);
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        animation: scan 3s linear infinite;
        pointer-events: none;
      `;
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `;
      document.head.appendChild(style);
      
      block.style.position = 'relative';
      block.appendChild(scanline);
    });
  }

  // 链接霓虹效果
  function enhanceLinks() {
    const links = document.querySelectorAll('.post-body a');
    
    links.forEach(link => {
      link.style.position = 'relative';
      link.style.transition = 'all 0.3s ease';
      
      link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 10px currentColor, 0 0 20px currentColor';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
      });
    });
  }

  // 初始化所有效果
  function init() {
    console.log('🚀 eDEX-UI 风格效果已加载');
    
    initGridBackground();
    applyGlitchEffect();
    initTimeController();
    
    // DOM 加载完成后执行
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        enhanceCodeBlocks();
        enhanceLinks();
      });
    } else {
      enhanceCodeBlocks();
      enhanceLinks();
    }
  }

  // 启动
  init();
})();
