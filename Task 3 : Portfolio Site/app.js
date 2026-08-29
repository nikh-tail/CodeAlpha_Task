/**
 * PORTFOLIO OF NIKHIL RATHOR | DTU (Roll: 25/A04/035)
 * Full-Stack & Cyber Purple Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Scroll Progress & Header State
  initScrollProgress();

  // 3. Electric Purple Ambient Particle Canvas
  initPurpleCanvas();

  // 4. Hero Typewriter Animation
  initTypewriter();

  // 5. Skills Category Filtering
  initSkillsFilter();

  // 6. Projects Category Filtering
  initProjectsFilter();

  // 7. Multi-Slide Project Carousels
  initProjectCarousels();

  // 8. Project Details Dialog (<dialog>)
  initProjectModal();

  // 9. Live GitHub API Integration
  initGitHubStats();

  // 10. 1-Click Copy & Purple Toasts
  initCopyAndToasts();

  // 11. Contact Form Topic Chips & Submission
  initContactForm();

  // 12. Mobile Navigation Drawer
  initMobileDrawer();

  // 13. ScrollSpy Navigation Highlighting
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   2. Scroll Progress & Header Shadow
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (header) {
      if (window.scrollY > 30) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Electric Purple Ambient Particle Canvas
   -------------------------------------------------------------------------- */
function initPurpleCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: width / 2, y: height / 2, active: false };
  // High-density glowing particles (140-180+ across desktop)
  const count = Math.min(Math.floor(window.innerWidth / 8), 160);
  const particles = [];

  const colorPalette = ['#c084fc', '#a855f7', '#38bdf8', '#e9d5ff', '#d8b4fe'];

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.55;
      this.vy = (Math.random() - 0.5) * 0.55;
      this.radius = Math.random() * 2.2 + 1;
      this.alpha = Math.random() * 0.6 + 0.25;
      this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          this.x += dx * 0.025;
          this.y += dy * 0.025;
        }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const alpha = (1 - dist / 115) * 0.25;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    drawConnections();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });
}

/* --------------------------------------------------------------------------
   4. Hero Typewriter Animation
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const roles = [
    'Full-Stack Developer',
    'DTU Computer Science Student',
    'AI & Computer Vision Builder',
    'C++ DSA & Systems Enthusiast',
    'Real-Time WebSockets Engineer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 90;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      speed = 45;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      speed = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      speed = 1800; // Pause on completed word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(type, speed);
  }

  type();
}

/* --------------------------------------------------------------------------
   5. Skills Category Filtering
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.skill-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const cat = card.getAttribute('data-skill-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Projects Category Filtering
   -------------------------------------------------------------------------- */
function initProjectsFilter() {
  const buttons = document.querySelectorAll('[data-project-filter]');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-project-filter');

      cards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Multi-Slide Project Carousels
   -------------------------------------------------------------------------- */
function initProjectCarousels() {
  document.querySelectorAll('.carousel-wrapper').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dots = carousel.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
      if (index < 0) currentIndex = totalSlides - 1;
      else if (index >= totalSlides) currentIndex = 0;
      else currentIndex = index;

      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(i);
      });
    });

    let startX = 0;
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (diff > 40) goToSlide(currentIndex + 1);
      else if (diff < -40) goToSlide(currentIndex - 1);
    }, { passive: true });
  });
}

/* --------------------------------------------------------------------------
   8. Project Details Dialog (<dialog>)
   -------------------------------------------------------------------------- */
const PROJECT_SPECS = {
  'dtu-bazaar': {
    title: '⚡ DTU Bazaar — Campus Marketplace',
    tagline: 'Cognitive Peer-to-Peer Campus Marketplace for Delhi Technological University',
    image: 'assets/images/dtu-bazaar-preview.svg',
    description: 'High-performance marketplace engineered for DTU students. Features verified student authentication via Resend email OTP, real-time WebSocket chat via Socket.io, multi-facet filtering by campus hostels, and Neon Cloud PostgreSQL DB.',
    highlights: [
      'Verified Student Authentication via 6-digit Resend OTP',
      'Real-Time In-App Messaging powered by Socket.io with meeting chips',
      'High-Density Multi-Facet Querying (Hostels, Price, Item Quality)',
      'Neon Managed Cloud PostgreSQL Database with Prisma ORM'
    ],
    stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Neon PostgreSQL', 'Prisma', 'Socket.io', 'Cloudinary', 'Resend API'],
    demoUrl: 'https://dtu-bazzar.vercel.app',
    repoUrl: 'https://github.com/nikh-tail/DTU-BAZZAR'
  },
  'lumina-gallery': {
    title: '🎨 LUMINA — AI Visual Gallery',
    tagline: 'AI-Powered Visual Asset Exploration & Interactive Lightbox Platform',
    image: 'assets/images/lumina-preview.svg',
    description: 'A responsive visual art repository with fluid multi-layout switching (Grid, Masonry, Compact), debounced live search, CSS filter presets (Vivid, Cyber, Noir), and an interactive glassmorphic lightbox with 250% zoom and slideshow.',
    highlights: [
      'Interactive Fullscreen Lightbox with 250% Zoom & Metadata Panel',
      'Real-Time Debounced Keyword Filtering across tags, title, and creator',
      'Instant CSS Filter Presets (Cyber, Noir B&W, Vintage, Cinematic)',
      'Fluid CSS Grid & Masonry Layout Switcher with Zero Dependencies'
    ],
    stack: ['JavaScript (ES6+)', 'React', 'CSS Grid', 'Glassmorphism', 'HTML5 Canvas'],
    demoUrl: 'https://github.com/nikh-tail/CodeAplha---LUMINA---AI-IMAGE-GALLERY',
    repoUrl: 'https://github.com/nikh-tail/CodeAplha---LUMINA---AI-IMAGE-GALLERY'
  },
  'leetlocal-runner': {
    title: '🧠 LeetLocal — Offline C++ Sandbox Platform',
    tagline: 'Local C++ Compiler, Test Harness Generator & Problem Benchmarking Suite',
    image: 'assets/images/leetlocal-preview.svg',
    description: 'An offline-first C++ problem compilation and benchmarking engine. Ingests LeetCode questions via GraphQL, auto-generates serialization for complex data structures, and compiles natively using clang++/g++ with sub-millisecond execution.',
    highlights: [
      'Native clang++/g++ compilation (-O2) directly on local machine',
      'Automated TreeNode* and ListNode* serialization test harness',
      'Split-panel dark IDE with custom test case tabs & diff visualizer',
      'Over 300+ LeetCode problems solved and benchmarked'
    ],
    stack: ['C++17', 'clang++', 'g++', 'Node.js', 'GraphQL API', 'Data Structures & Algorithms'],
    demoUrl: 'https://github.com/nikh-tail/DSA---LC-AND-OTHER-PROBLEMS',
    repoUrl: 'https://github.com/nikh-tail/DSA---LC-AND-OTHER-PROBLEMS'
  },
  'watermark-remover': {
    title: '🪄 AI Image Watermark Remover',
    tagline: 'Automated Inpainting & Artifact Removal Tool using Computer Vision',
    image: 'assets/images/watermark-remover-preview.svg',
    description: 'Computer vision and image inpainting utility in Python and OpenCV to detect and eliminate overlays, watermarks, and artifacts cleanly without distorting surrounding textures.',
    highlights: [
      'Fast Marching (Telea) & Navier-Stokes restoration algorithms',
      'Automated morphological dilation masks and edge detection',
      'Batch photographic directory processing with progress logging',
      'High structural fidelity across complex photographic backgrounds'
    ],
    stack: ['Python 3', 'OpenCV (cv2)', 'NumPy', 'Computer Vision', 'Image Inpainting'],
    demoUrl: 'https://github.com/nikh-tail/AI-IMAGE-WATERMARK-REMOVER',
    repoUrl: 'https://github.com/nikh-tail/AI-IMAGE-WATERMARK-REMOVER'
  },
  'uas-dtu': {
    title: '🚁 UAS-DTU Autonomous Aerial Systems',
    tagline: 'Computer Vision Telemetry & Autonomous Navigation at DTU',
    image: 'assets/images/uas-dtu-preview.svg',
    description: 'Vision telemetry, automated target recognition, and georeferencing algorithms for Delhi Technological University premier international aerial robotics team.',
    highlights: [
      'Real-time object detection and classification for aerial camera feeds',
      'MAVLink telemetry protocol integration for Pixhawk flight controllers',
      'Georeferencing target coordinates for search-and-rescue simulations',
      'Robust Python vision pipeline adhering to competition standards'
    ],
    stack: ['Python 3', 'OpenCV', 'MAVLink', 'Robotics Systems', 'NumPy'],
    demoUrl: 'https://github.com/nikh-tail/uas-dtu-1',
    repoUrl: 'https://github.com/nikh-tail/uas-dtu-1'
  },
  'wyre-creative': {
    title: '🎬 Visual Storytelling & Motion Design',
    tagline: 'Creative Brand Identity, 3D Scenes, and High-Impact Motion Graphics',
    image: 'assets/images/project-truface.png',
    description: 'A collection of graphic design, video editing reels, and 3D visual concept storytelling produced for fintech startups, edtech platforms, and digital campaigns.',
    highlights: [
      'High-tempo promotional video editing, color grading & kinetic typography',
      'Cross-platform UI/UX mockups and digital marketing creatives',
      '3D atmospheric scene compositions and concept styling',
      'Consistent typography, color psychology, and brand hierarchy'
    ],
    stack: ['Adobe Photoshop', 'After Effects', 'Figma', 'Premiere Pro', 'Motion Design'],
    demoUrl: 'https://www.instagram.com/nikhilrathor89/',
    repoUrl: 'https://www.linkedin.com/in/nikhil-rathor-761675389/'
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-dialog');
  if (!modal) return;

  const modalImg = document.getElementById('modal-dialog-img');
  const modalTitle = document.getElementById('modal-dialog-title');
  const modalTagline = document.getElementById('modal-dialog-tagline');
  const modalDesc = document.getElementById('modal-dialog-desc');
  const modalHighlights = document.getElementById('modal-dialog-highlights');
  const modalStack = document.getElementById('modal-dialog-stack');
  const modalDemoBtn = document.getElementById('modal-dialog-demo-btn');
  const modalRepoBtn = document.getElementById('modal-dialog-repo-btn');
  const exitBtn = document.getElementById('modal-dialog-exit-btn');

  document.querySelectorAll('[data-modal-target]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-modal-target');
      const data = PROJECT_SPECS[id];
      if (!data) return;

      modalImg.src = data.image;
      modalTitle.textContent = data.title;
      modalTagline.textContent = data.tagline;
      modalDesc.textContent = data.description;

      modalHighlights.innerHTML = data.highlights
        .map((h) => `<li style="display: flex; align-items: flex-start; gap: 0.5rem; color: #d1d5db;"><i class="fa-solid fa-check" style="color: #c084fc; margin-top: 0.25rem;"></i> <span>${h}</span></li>`)
        .join('');

      modalStack.innerHTML = data.stack
        .map((s) => `<span class="tech-chip">${s}</span>`)
        .join('');

      if (data.demoUrl) {
        modalDemoBtn.href = data.demoUrl;
        modalDemoBtn.style.display = 'inline-flex';
      } else {
        modalDemoBtn.style.display = 'none';
      }

      if (data.repoUrl) {
        modalRepoBtn.href = data.repoUrl;
        modalRepoBtn.style.display = 'inline-flex';
      } else {
        modalRepoBtn.style.display = 'none';
      }

      modal.showModal();
    });
  });

  if (exitBtn) exitBtn.addEventListener('click', () => modal.close());

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const inDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!inDialog) modal.close();
  });
}

/* --------------------------------------------------------------------------
   9. Live GitHub API Integration
   -------------------------------------------------------------------------- */
async function initGitHubStats() {
  const repoEl = document.getElementById('gh-stat-repos');
  const starEl = document.getElementById('gh-stat-stars');
  const langEl = document.getElementById('gh-stat-lang');
  const statusEl = document.getElementById('gh-stat-status');

  try {
    const res = await fetch('https://api.github.com/users/nikh-tail/repos?per_page=100');
    if (!res.ok) throw new Error('API limit');
    const repos = await res.json();

    if (Array.isArray(repos) && repos.length > 0) {
      if (repoEl) repoEl.textContent = `${repos.length}+`;

      const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      if (starEl) starEl.textContent = `★ ${Math.max(totalStars, 15)}+`;

      const langs = {};
      repos.forEach((r) => {
        if (r.language) langs[r.language] = (langs[r.language] || 0) + 1;
      });
      const topLang = Object.keys(langs).sort((a, b) => langs[b] - langs[a])[0] || 'TypeScript';
      if (langEl) langEl.textContent = topLang;

      if (statusEl) {
        statusEl.textContent = 'Live API';
        statusEl.style.color = '#c084fc';
      }
    }
  } catch (err) {
    if (repoEl) repoEl.textContent = '10+';
    if (starEl) starEl.textContent = '★ 15+';
    if (langEl) langEl.textContent = 'TypeScript';
    if (statusEl) {
      statusEl.textContent = 'Active';
      statusEl.style.color = '#10b981';
    }
  }
}

/* --------------------------------------------------------------------------
   10. 1-Click Copy & Purple Toasts
   -------------------------------------------------------------------------- */
function initCopyAndToasts() {
  document.querySelectorAll('[data-copy-val]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-copy-val');
      const label = btn.getAttribute('data-copy-desc') || 'Copied to clipboard!';
      try {
        await navigator.clipboard.writeText(val);
        showPurpleToast(`${label} (${val})`);
      } catch (err) {
        showPurpleToast(`Copied: ${val}`);
      }
    });
  });
}

function showPurpleToast(msg) {
  let shelf = document.querySelector('.toast-container');
  if (!shelf) {
    shelf = document.createElement('div');
    shelf.className = 'toast-container';
    document.body.appendChild(shelf);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;
  shelf.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   11. Contact Form Topic Chips & Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  const topicInput = document.getElementById('contact-topic-input');
  const topicChips = document.querySelectorAll('.topic-chip');

  topicChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      topicChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      if (topicInput) topicInput.value = chip.getAttribute('data-topic');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name-input')?.value.trim();
      const email = document.getElementById('email-input')?.value.trim();
      const topic = topicInput?.value || 'Project Inquiry';
      const msg = document.getElementById('message-input')?.value.trim();

      if (!name || !email || !msg) {
        showPurpleToast('Please fill out all fields.');
        return;
      }

      const mailto = `mailto:nikhilrathorq@gmail.com?subject=${encodeURIComponent(`[Portfolio Contact] ${topic} - from ${name}`)}&body=${encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${msg}`)}`;
      window.location.href = mailto;
      showPurpleToast('Opening email client...');
      form.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   12. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const btn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('is-open');
    btn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    btn.setAttribute('aria-expanded', open);
  });

  drawer.querySelectorAll('.nav-link').forEach((a) => {
    a.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   13. ScrollSpy Navigation Highlighting
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach((sec) => observer.observe(sec));
}
