// 流浪地球风格科技效果 - 未来科幻感个人博客系统
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有流浪地球科技效果
  initWanderingEarthTechEffects();
});

// 初始化流浪地球科技效果
function initWanderingEarthTechEffects() {
  // 添加微弱的推进器光效动画
  addEngineGlowEffect();
  // 添加微妙的数据流效果
  addSubtleDataFlow();
  // 添加悬浮粒子效果
  addFloatingParticles();
}

// 添加微弱的推进器光效动画
function addEngineGlowEffect() {
  // 创建推进器光效元素
  const engineGlow = document.createElement('div');
  engineGlow.id = 'engine-glow';
  engineGlow.style.position = 'fixed';
  engineGlow.style.bottom = '20px';
  engineGlow.style.right = '20px';
  engineGlow.style.width = '60px';
  engineGlow.style.height = '60px';
  engineGlow.style.borderRadius = '50%';
  engineGlow.style.background = 'radial-gradient(circle, rgba(0,188,212,0.8) 0%, rgba(0,188,212,0.2) 70%, transparent 100%)';
  engineGlow.style.boxShadow = '0 0 30px rgba(0,188,212,0.6)';
  engineGlow.style.zIndex = '-999';
  engineGlow.style.opacity = '0.3';
  engineGlow.style.pointerEvents = 'none';
  engineGlow.style.animation = 'pulse 4s infinite ease-in-out';
  
  document.body.appendChild(engineGlow);
  
  // 添加脉冲动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.1); }
      100% { opacity: 0.2; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}

// 添加微妙的数据流效果
function addSubtleDataFlow() {
  // 创建数据流动画
  const style = document.createElement('style');
  style.textContent = `
    .subtle-data-flow {
      position: relative;
      overflow: hidden;
    }
    
    .subtle-data-flow::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100px;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(79, 195, 247, 0.1),
        transparent
      );
      animation: dataFlow 8s infinite linear;
    }
    
    @keyframes dataFlow {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `;
  document.head.appendChild(style);
  
  // 对特定元素添加数据流效果
  const elements = document.querySelectorAll('.post-block, .card, .header, .footer');
  elements.forEach(element => {
    element.classList.add('subtle-data-flow');
  });
}

// 添加悬浮粒子效果
function addFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.id = 'particles-container';
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '-998';
  particlesContainer.style.overflow = 'hidden';
  
  document.body.appendChild(particlesContainer);
  
  // 创建多个悬浮粒子
  for (let i = 0; i < 15; i++) {
    createFloatingParticle(particlesContainer);
  }
  
  // 定期添加新粒子
  setInterval(() => {
    if (particlesContainer.children.length < 20) {
      createFloatingParticle(particlesContainer);
    }
  }, 5000);
}

// 创建单个悬浮粒子
function createFloatingParticle(container) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = Math.random() * 3 + 1 + 'px';
  particle.style.height = particle.style.width;
  particle.style.backgroundColor = `rgba(79, 195, 247, ${Math.random() * 0.4 + 0.1})`;
  particle.style.borderRadius = '50%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px rgba(79, 195, 247, 0.5)`;
  
  // 设置动画
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;
  particle.style.animation = `floatMovement ${duration}s infinite linear ${delay}s`;
  
  container.appendChild(particle);
  
  // 添加浮动动画
  if (!document.querySelector('#float-animation-style')) {
    const style = document.createElement('style');
    style.id = 'float-animation-style';
    style.textContent = `
      @keyframes floatMovement {
        0% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0.3;
        }
        25% {
          opacity: 0.6;
        }
        50% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg);
          opacity: 0.4;
        }
        75% {
          opacity: 0.5;
        }
        100% {
          transform: translate(0, 0) rotate(180deg);
          opacity: 0.3;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// 添加页面加载动画
window.addEventListener('load', function() {
  const pageElements = document.querySelectorAll('body > *');
  pageElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 100);
  });
});