/**
 * LUMINA Modern Image Gallery - Interactive Client-side Application
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Curated Image Dataset ---
  const GALLERY_DATA = [
    {
      id: 'img-1',
      title: 'Majestic Alpine Peaks',
      category: 'nature',
      description: 'Golden hour sunlight breaking through rugged snow-capped peaks in the Swiss Alps.',
      photographer: 'Elena Rostova',
      location: 'Zermatt, Switzerland',
      camera: 'Sony A7R V • 24-70mm f/2.8 • ISO 100',
      date: '2026-05-12',
      likes: 142,
      tags: ['mountains', 'snow', 'sunset', 'alpine', 'golden-hour'],
      urlFull: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-2',
      title: 'Neon Tokyo Nocturne',
      category: 'urban',
      description: 'Vibrant neon reflections shimmering on rain-soaked pavement in Shinjuku alleys.',
      photographer: 'Kenji Sato',
      location: 'Shinjuku, Tokyo, Japan',
      camera: 'Fujifilm X-T5 • 35mm f/1.4 • ISO 800',
      date: '2026-06-20',
      likes: 215,
      tags: ['neon', 'tokyo', 'rain', 'night', 'cyberpunk', 'city'],
      urlFull: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-3',
      title: 'Geometric Spiral Architecture',
      category: 'architecture',
      description: 'Minimalist perspective looking up through a spiraling concrete stairwell.',
      photographer: 'Marcus Vance',
      location: 'Copenhagen, Denmark',
      camera: 'Canon EOS R5 • 16-35mm f/4 • ISO 200',
      date: '2026-04-18',
      likes: 98,
      tags: ['stairs', 'geometry', 'minimalism', 'spiral', 'concrete'],
      urlFull: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-4',
      title: 'Serengeti Lioness Glance',
      category: 'animals',
      description: 'Intense golden-eyed gaze of a lioness resting under the shade of an acacia tree.',
      photographer: 'Amara Diallo',
      location: 'Serengeti National Park, Tanzania',
      camera: 'Nikon Z9 • 400mm f/2.8 • ISO 400',
      date: '2026-07-02',
      likes: 310,
      tags: ['lion', 'wildlife', 'safari', 'big-cat', 'africa'],
      urlFull: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-5',
      title: 'Santorini Cliffside Serenity',
      category: 'travel',
      description: 'Iconic blue-domed churches and whitewashed stone villas overlooking the Aegean Sea.',
      photographer: 'Sophia Constantinou',
      location: 'Oia, Santorini, Greece',
      camera: 'Leica Q3 • 28mm f/1.7 • ISO 100',
      date: '2026-05-30',
      likes: 275,
      tags: ['greece', 'santorini', 'sea', 'blue-dome', 'vacation', 'aegean'],
      urlFull: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-6',
      title: 'Artisan Potter at Work',
      category: 'people',
      description: 'Hands weathered with craftsmanship carefully shaping spinning wet clay.',
      photographer: 'Lucas Meyer',
      location: 'Florence, Italy',
      camera: 'Sony A7 IV • 50mm f/1.2 • ISO 320',
      date: '2026-03-14',
      likes: 184,
      tags: ['craft', 'artisan', 'portrait', 'pottery', 'hands', 'clay'],
      urlFull: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-7',
      title: 'Emerald Forest Sunbeam',
      category: 'nature',
      description: 'Ethereal morning light piercing through towering mossy redwoods in mist.',
      photographer: 'Rachel Green',
      location: 'Redwood National Park, USA',
      camera: 'Canon EOS R6 II • 24-105mm f/4 • ISO 250',
      date: '2026-06-05',
      likes: 240,
      tags: ['forest', 'redwoods', 'sunbeams', 'moss', 'green', 'fog'],
      urlFull: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-8',
      title: 'Futuristic Glass Skyscraper',
      category: 'architecture',
      description: 'Curvilinear glass and steel facade reflecting dramatic sunset clouds.',
      photographer: 'David Zhang',
      location: 'Singapore',
      camera: 'Nikon Z8 • 14-24mm f/2.8 • ISO 160',
      date: '2026-04-29',
      likes: 165,
      tags: ['skyscraper', 'glass', 'futuristic', 'modern', 'lines'],
      urlFull: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-9',
      title: 'Highland Fox in Winter',
      category: 'animals',
      description: 'A striking red fox alert against a pristine blanket of crisp white snow.',
      photographer: 'Nils Lindqvist',
      location: 'Lapland, Finland',
      camera: 'Sony A1 • 200-600mm f/5.6 • ISO 500',
      date: '2026-02-19',
      likes: 380,
      tags: ['fox', 'snow', 'winter', 'wildlife', 'arctic', 'red'],
      urlFull: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-10',
      title: 'Venetian Canal Twilight',
      category: 'travel',
      description: 'Gondolas gently swaying moored along ancient Venetian palazzos at dusk.',
      photographer: 'Matteo Rossi',
      location: 'Venice, Italy',
      camera: 'Fujifilm GFX 100S • 45mm f/2.8 • ISO 400',
      date: '2026-05-18',
      likes: 220,
      tags: ['venice', 'canal', 'gondola', 'italy', 'twilight', 'water'],
      urlFull: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-11',
      title: 'Cyberpunk Skateboarder',
      category: 'people',
      description: 'Motion blur captured under vivid purple and teal street lighting at an urban skate bowl.',
      photographer: 'Chloe Bennett',
      location: 'Berlin, Germany',
      camera: 'Canon R3 • 24mm f/1.4 • ISO 1250',
      date: '2026-06-11',
      likes: 195,
      tags: ['skater', 'action', 'urban', 'youth', 'night', 'berlin'],
      urlFull: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-12',
      title: 'Manhattan Grid Symphony',
      category: 'urban',
      description: 'A dense aerial view of Manhattan avenue canyons illuminated during rush hour.',
      photographer: 'Brandon Cole',
      location: 'New York City, USA',
      camera: 'Sony A7R IV • 70-200mm f/2.8 • ISO 640',
      date: '2026-03-28',
      likes: 290,
      tags: ['nyc', 'manhattan', 'cityscape', 'traffic', 'aerial', 'traffic-lights'],
      urlFull: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-13',
      title: 'Cascading Nordic Waterfall',
      category: 'nature',
      description: 'Thunderous glacial melt cascades into a volcanic black basalt canyon.',
      photographer: 'Ari Gunnarsson',
      location: 'Skógafoss, Iceland',
      camera: 'Nikon Z7 II • 24-70mm f/2.8 • ISO 64',
      date: '2026-07-15',
      likes: 335,
      tags: ['waterfall', 'iceland', 'nature', 'moss', 'rainbow', 'nordic'],
      urlFull: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-14',
      title: 'Moroccan Riad Geometry',
      category: 'architecture',
      description: 'Intricate zellige tilework surrounding a calm, turquoise courtyard pool.',
      photographer: 'Youssef Bennani',
      location: 'Marrakech, Morocco',
      camera: 'Fujifilm X-T4 • 16-55mm f/2.8 • ISO 200',
      date: '2026-04-05',
      likes: 178,
      tags: ['morocco', 'riad', 'tile', 'patterns', 'courtyard', 'arabic'],
      urlFull: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-15',
      title: 'Humpback Whale Breach',
      category: 'animals',
      description: 'Tremendous breach of a humpback whale emerging through calm Pacific waters.',
      photographer: 'Captain Liam Scott',
      location: 'Maui, Hawaii',
      camera: 'Canon R5 • 100-500mm f/7.1 • ISO 400',
      date: '2026-01-22',
      likes: 420,
      tags: ['whale', 'ocean', 'marine', 'wildlife', 'hawaii', 'sea'],
      urlFull: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-16',
      title: 'Hot Air Balloons Over Cappadocia',
      category: 'travel',
      description: 'Scores of colorful hot air balloons floating gently over fairy chimneys at dawn.',
      photographer: 'Selin Demir',
      location: 'Göreme, Cappadocia, Turkey',
      camera: 'Sony A7R III • 35mm f/1.4 • ISO 100',
      date: '2026-06-25',
      likes: 360,
      tags: ['balloon', 'cappadocia', 'sunrise', 'turkey', 'travel', 'landscape'],
      urlFull: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-17',
      title: 'Elderly Fisherman Portrait',
      category: 'people',
      description: 'Reflective and resilient expression telling stories of decades at sea.',
      photographer: 'Joao Silva',
      location: 'Nazaré, Portugal',
      camera: 'Leica SL2 • 50mm f/1.4 • ISO 200',
      date: '2026-05-02',
      likes: 210,
      tags: ['portrait', 'fisherman', 'portugal', 'eyes', 'character', 'bnw-ready'],
      urlFull: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=70'
    },
    {
      id: 'img-18',
      title: 'Midnight Crossing in Seoul',
      category: 'urban',
      description: 'Pedestrians navigating luminous zebra crossing amidst vibrant city billboards.',
      photographer: 'Min-Jun Park',
      location: 'Gangnam, Seoul, South Korea',
      camera: 'Sony A7S III • 28mm f/2.0 • ISO 1600',
      date: '2026-07-09',
      likes: 188,
      tags: ['seoul', 'night', 'street', 'crossing', 'lights', 'korea'],
      urlFull: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1600&q=85',
      urlThumb: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=600&q=80',
      urlMini: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=150&q=70'
    }
  ];

  // --- State Management ---
  const state = {
    images: [...GALLERY_DATA],
    filteredImages: [...GALLERY_DATA],
    currentCategory: 'all',
    searchQuery: '',
    currentSort: 'popular',
    visualFilter: 'none',
    viewMode: 'grid',
    likedPhotoIds: new Set(JSON.parse(localStorage.getItem('lumina_liked_photos') || '[]')),
    
    // Lightbox State
    lightbox: {
      isOpen: false,
      currentIndex: 0,
      zoomLevel: 1.0,
      isSlideshowPlaying: false,
      slideshowTimer: null,
      slideshowDuration: 3500, // 3.5 seconds
      touchStartX: 0,
      touchEndX: 0
    }
  };

  // --- DOM Elements ---
  const elements = {
    // Gallery & Filter Elements
    galleryGrid: document.getElementById('gallery-grid'),
    emptyState: document.getElementById('empty-state'),
    categoryPills: document.getElementById('category-pills'),
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    visualFilterSelect: document.getElementById('visual-filter-select'),
    sortSelect: document.getElementById('sort-select'),
    viewButtons: document.querySelectorAll('.view-btn'),
    filterStatusBar: document.getElementById('filter-status-bar'),
    activeFilterLabel: document.getElementById('active-filter-label'),
    filteredCount: document.getElementById('filtered-count'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    emptyResetBtn: document.getElementById('empty-reset-btn'),
    photoCountText: document.getElementById('photo-count-text'),
    themeToggle: document.getElementById('theme-toggle'),
    
    // Lightbox Elements
    lightbox: document.getElementById('lightbox'),
    lightboxBackdrop: document.getElementById('lightbox-backdrop'),
    lightboxImage: document.getElementById('lightbox-image'),
    lightboxImageWrapper: document.getElementById('lightbox-image-wrapper'),
    lightboxSpinner: document.getElementById('lightbox-spinner'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxCounter: document.getElementById('lightbox-counter'),
    lightboxDescription: document.getElementById('lightbox-description'),
    lightboxAuthor: document.getElementById('lightbox-author'),
    lightboxLocationWrapper: document.getElementById('lightbox-location-wrapper'),
    lightboxLocation: document.getElementById('lightbox-location'),
    lightboxCameraWrapper: document.getElementById('lightbox-camera-wrapper'),
    lightboxCamera: document.getElementById('lightbox-camera'),
    lightboxTags: document.getElementById('lightbox-tags'),
    lightboxLikeBtn: document.getElementById('lightbox-like-btn'),
    lightboxLikeCount: document.getElementById('lightbox-like-count'),
    lightboxDownloadBtn: document.getElementById('lightbox-download-btn'),
    lightboxPrevBtn: document.getElementById('lightbox-prev-btn'),
    lightboxNextBtn: document.getElementById('lightbox-next-btn'),
    lightboxCloseBtn: document.getElementById('lightbox-close-btn'),
    lightboxSlideshowBtn: document.getElementById('lightbox-slideshow-btn'),
    slideshowProgress: document.getElementById('slideshow-progress'),
    lightboxZoomIn: document.getElementById('lightbox-zoom-in'),
    lightboxZoomOut: document.getElementById('lightbox-zoom-out'),
    zoomLevelText: document.getElementById('zoom-level-text'),
    lightboxFullscreenBtn: document.getElementById('lightbox-fullscreen-btn'),
    lightboxThumbsStrip: document.getElementById('lightbox-thumbs-strip'),

    // Shortcuts Modal
    helpBtn: document.getElementById('help-btn'),
    shortcutsModal: document.getElementById('shortcuts-modal'),
    shortcutsBackdrop: document.getElementById('shortcuts-backdrop'),
    shortcutsCloseBtn: document.getElementById('shortcuts-close-btn'),

    // Toast
    toast: document.getElementById('toast')
  };

  // --- Initial Setup & Theme Initialization ---
  function initTheme() {
    const savedTheme = localStorage.getItem('lumina_theme') || 
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('lumina_theme', newTheme);
    showToast(`Switched to ${newTheme.toUpperCase()} theme`);
  }

  // --- Toast Notification Utility ---
  let toastTimer = null;
  function showToast(message, icon = 'fa-circle-info') {
    if (!elements.toast) return;
    elements.toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    elements.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 2400);
  }

  // --- Data Filtering & Sorting Logic ---
  function applyFiltersAndSort() {
    let result = [...state.images];

    // 1. Category Filter
    if (state.currentCategory !== 'all') {
      result = result.filter(item => item.category === state.currentCategory);
    }

    // 2. Search Query Filter (Matches title, tags, photographer, location, category)
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      result = result.filter(item => {
        const inTitle = item.title.toLowerCase().includes(q);
        const inDesc = item.description.toLowerCase().includes(q);
        const inPhotographer = item.photographer.toLowerCase().includes(q);
        const inLocation = item.location.toLowerCase().includes(q);
        const inCategory = item.category.toLowerCase().includes(q);
        const inTags = item.tags.some(tag => tag.toLowerCase().includes(q));
        return inTitle || inDesc || inPhotographer || inLocation || inCategory || inTags;
      });
    }

    // 3. Sorting Logic
    if (state.currentSort === 'popular') {
      result.sort((a, b) => {
        const likesA = a.likes + (state.likedPhotoIds.has(a.id) ? 1 : 0);
        const likesB = b.likes + (state.likedPhotoIds.has(b.id) ? 1 : 0);
        return likesB - likesA;
      });
    } else if (state.currentSort === 'newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (state.currentSort === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    state.filteredImages = result;
    renderGallery();
    updateFilterStatusUI();
  }

  // --- Render Gallery Cards ---
  function renderGallery() {
    elements.galleryGrid.innerHTML = '';

    if (state.filteredImages.length === 0) {
      elements.emptyState.hidden = false;
      elements.galleryGrid.style.display = 'none';
      return;
    }

    elements.emptyState.hidden = true;
    elements.galleryGrid.style.display = '';

    state.filteredImages.forEach((item, index) => {
      const isLiked = state.likedPhotoIds.has(item.id);
      const currentLikes = item.likes + (isLiked ? 1 : 0);

      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${item.title} by ${item.photographer}`);

      card.innerHTML = `
        <div class="card-media">
          <span class="card-category-badge">${item.category}</span>
          <div class="card-quick-actions">
            <button class="quick-btn ${isLiked ? 'liked' : ''}" data-action="like" title="Like photo" aria-label="Like photo">
              <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
            </button>
            <a href="${item.urlFull}" target="_blank" rel="noopener" download class="quick-btn" data-action="download" title="Download High-Res" aria-label="Download image">
              <i class="fa-solid fa-arrow-down"></i>
            </a>
          </div>
          <img 
            src="${item.urlThumb}" 
            alt="${item.title}" 
            class="gallery-img" 
            loading="lazy"
          >
          <div class="card-overlay">
            <div class="overlay-content">
              <span class="view-photo-btn"><i class="fa-solid fa-expand"></i> View Fullscreen</span>
            </div>
          </div>
        </div>
        <div class="card-details">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-meta">
            <span class="card-author"><i class="fa-solid fa-camera"></i> ${item.photographer}</span>
            <span class="card-likes ${isLiked ? 'liked' : ''}"><i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i> ${currentLikes}</span>
          </div>
        </div>
      `;

      // Event Listeners for Card
      card.addEventListener('click', (e) => {
        // Handle like button click specifically
        const likeBtn = e.target.closest('[data-action="like"]');
        if (likeBtn) {
          e.stopPropagation();
          toggleLike(item.id);
          return;
        }

        // Handle download button click specifically
        const downloadBtn = e.target.closest('[data-action="download"]');
        if (downloadBtn) {
          e.stopPropagation();
          showToast(`Opening high-res image...`, 'fa-download');
          return;
        }

        // Open Lightbox
        openLightbox(index);
      });

      // Keyboard accessibility for cards
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      elements.galleryGrid.appendChild(card);
    });

    // Update Header Counter
    elements.photoCountText.textContent = `${state.filteredImages.length} Photos`;
  }

  // --- Like Toggle Mechanism ---
  function toggleLike(photoId) {
    const isLiked = state.likedPhotoIds.has(photoId);
    if (isLiked) {
      state.likedPhotoIds.delete(photoId);
      showToast('Removed from favorites', 'fa-heart-crack');
    } else {
      state.likedPhotoIds.add(photoId);
      showToast('Added to favorites!', 'fa-heart');
    }

    // Persist in localStorage
    localStorage.setItem('lumina_liked_photos', JSON.stringify([...state.likedPhotoIds]));

    // Re-render gallery cards to update counts and heart icons
    renderGallery();

    // If lightbox is open and displaying this photo, update its like button
    if (state.lightbox.isOpen) {
      const currentPhoto = state.filteredImages[state.lightbox.currentIndex];
      if (currentPhoto && currentPhoto.id === photoId) {
        updateLightboxLikeState(photoId, currentPhoto.likes);
      }
    }
  }

  function updateLightboxLikeState(photoId, baseLikes) {
    const isLiked = state.likedPhotoIds.has(photoId);
    elements.lightboxLikeBtn.classList.toggle('liked', isLiked);
    elements.lightboxLikeBtn.innerHTML = `
      <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
      <span>${baseLikes + (isLiked ? 1 : 0)}</span>
    `;
  }

  // --- Filter Status & Pill Management ---
  function updateFilterStatusUI() {
    const hasCategoryFilter = state.currentCategory !== 'all';
    const hasSearch = state.searchQuery.trim().length > 0;

    if (hasCategoryFilter || hasSearch) {
      elements.filterStatusBar.hidden = false;
      const parts = [];
      if (hasCategoryFilter) parts.push(`Category: "${state.currentCategory.toUpperCase()}"`);
      if (hasSearch) parts.push(`Search: "${state.searchQuery}"`);
      
      elements.activeFilterLabel.textContent = parts.join(' • ');
      elements.filteredCount.textContent = state.filteredImages.length;
    } else {
      elements.filterStatusBar.hidden = true;
    }

    // Update Category Pills active class
    const pills = elements.categoryPills.querySelectorAll('.category-pill');
    pills.forEach(pill => {
      const cat = pill.getAttribute('data-category');
      const isActive = cat === state.currentCategory;
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update Clear Search Button visibility
    elements.clearSearchBtn.hidden = !state.searchQuery;
  }

  function resetAllFilters() {
    state.currentCategory = 'all';
    state.searchQuery = '';
    elements.searchInput.value = '';
    applyFiltersAndSort();
    showToast('Filters reset to default', 'fa-rotate-left');
  }

  // --- Visual Style Filter Applicator ---
  function applyVisualFilter(filterClass) {
    state.visualFilter = filterClass;
    
    // Remove previous filter classes from grid and lightbox
    const filterClasses = [
      'filter-vivid', 'filter-vintage', 'filter-noir', 
      'filter-sepia', 'filter-cool', 'filter-cinematic'
    ];
    
    filterClasses.forEach(cls => {
      elements.galleryGrid.classList.remove(cls);
      elements.lightboxImage.classList.remove(cls);
    });

    if (filterClass !== 'none') {
      elements.galleryGrid.classList.add(filterClass);
      elements.lightboxImage.classList.add(filterClass);
      showToast(`Filter applied: ${filterClass.replace('filter-', '').toUpperCase()}`, 'fa-wand-magic-sparkles');
    } else {
      showToast(`Filter reset to original`, 'fa-wand-magic-sparkles');
    }
  }

  // --- Grid View Mode Switcher ---
  function setViewMode(mode) {
    state.viewMode = mode;
    elements.galleryGrid.classList.remove('view-grid', 'view-masonry', 'view-compact');
    elements.galleryGrid.classList.add(`view-${mode}`);

    elements.viewButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === mode);
    });
  }

  // ==========================================================================
  // LIGHTBOX LOGIC & CONTROLS
  // ==========================================================================

  function openLightbox(index) {
    if (!state.filteredImages[index]) return;
    
    state.lightbox.isOpen = true;
    state.lightbox.currentIndex = index;
    state.lightbox.zoomLevel = 1.0;

    elements.lightbox.classList.add('active');
    elements.lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    renderLightboxContent();
    renderLightboxThumbnails();
  }

  function closeLightbox() {
    state.lightbox.isOpen = false;
    stopSlideshow();
    resetZoom();

    elements.lightbox.classList.remove('active');
    elements.lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderLightboxContent() {
    const photo = state.filteredImages[state.lightbox.currentIndex];
    if (!photo) return;

    // Reset Zoom
    resetZoom();

    // Show loading spinner
    elements.lightboxSpinner.classList.add('active');
    elements.lightboxImage.style.opacity = '0';

    // Preload image
    const tempImg = new Image();
    tempImg.src = photo.urlFull;
    tempImg.onload = () => {
      elements.lightboxImage.src = photo.urlFull;
      elements.lightboxImage.alt = photo.title;
      elements.lightboxSpinner.classList.remove('active');
      elements.lightboxImage.style.opacity = '1';
    };
    tempImg.onerror = () => {
      elements.lightboxImage.src = photo.urlThumb;
      elements.lightboxSpinner.classList.remove('active');
      elements.lightboxImage.style.opacity = '1';
    };

    // Update Counter & Text
    elements.lightboxCounter.textContent = `${state.lightbox.currentIndex + 1} / ${state.filteredImages.length}`;
    elements.lightboxTitle.textContent = photo.title;
    elements.lightboxDescription.textContent = photo.description;
    elements.lightboxAuthor.textContent = photo.photographer;
    elements.lightboxLocation.textContent = photo.location;
    elements.lightboxCamera.textContent = photo.camera;
    elements.lightboxDownloadBtn.href = photo.urlFull;

    // Update Tags
    elements.lightboxTags.innerHTML = photo.tags
      .map(tag => `<span class="lightbox-tag-chip">#${tag}</span>`)
      .join('');

    // Update Likes Button
    updateLightboxLikeState(photo.id, photo.likes);

    // Update Active Thumbnail in Strip
    updateActiveThumbnail();
  }

  function navigateLightbox(direction) {
    const total = state.filteredImages.length;
    if (total <= 1) return;

    if (direction === 'next') {
      state.lightbox.currentIndex = (state.lightbox.currentIndex + 1) % total;
    } else if (direction === 'prev') {
      state.lightbox.currentIndex = (state.lightbox.currentIndex - 1 + total) % total;
    }

    renderLightboxContent();
  }

  // --- Thumbnail Strip in Lightbox ---
  function renderLightboxThumbnails() {
    elements.lightboxThumbsStrip.innerHTML = '';

    state.filteredImages.forEach((photo, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${idx === state.lightbox.currentIndex ? 'active' : ''}`;
      thumb.setAttribute('role', 'tab');
      thumb.setAttribute('aria-label', `Thumbnail ${idx + 1}: ${photo.title}`);
      thumb.innerHTML = `<img src="${photo.urlMini}" alt="${photo.title}" loading="lazy">`;

      thumb.addEventListener('click', () => {
        state.lightbox.currentIndex = idx;
        renderLightboxContent();
      });

      elements.lightboxThumbsStrip.appendChild(thumb);
    });
  }

  function updateActiveThumbnail() {
    const thumbs = elements.lightboxThumbsStrip.querySelectorAll('.thumb-item');
    thumbs.forEach((th, idx) => {
      const isActive = idx === state.lightbox.currentIndex;
      th.classList.toggle('active', isActive);
      if (isActive) {
        th.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  // --- Zoom Controls ---
  function setZoom(newZoom) {
    state.lightbox.zoomLevel = Math.max(0.5, Math.min(2.5, newZoom));
    elements.lightboxImage.style.transform = `scale(${state.lightbox.zoomLevel})`;
    elements.zoomLevelText.textContent = `${Math.round(state.lightbox.zoomLevel * 100)}%`;
    elements.lightboxImageWrapper.classList.toggle('zoomed', state.lightbox.zoomLevel > 1.0);
  }

  function resetZoom() {
    setZoom(1.0);
  }

  // --- Slideshow Autoplay ---
  function toggleSlideshow() {
    if (state.lightbox.isSlideshowPlaying) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  }

  function startSlideshow() {
    if (state.filteredImages.length <= 1) return;
    state.lightbox.isSlideshowPlaying = true;
    elements.lightboxSlideshowBtn.classList.add('playing');
    elements.lightboxSlideshowBtn.querySelector('i').className = 'fa-solid fa-pause';
    showToast('Slideshow started (3.5s per image)', 'fa-play');

    runSlideshowStep();
  }

  function runSlideshowStep() {
    if (!state.lightbox.isSlideshowPlaying) return;

    // Animate progress bar
    elements.slideshowProgress.style.transition = 'none';
    elements.slideshowProgress.style.width = '0%';
    
    setTimeout(() => {
      elements.slideshowProgress.style.transition = `width ${state.lightbox.slideshowDuration}ms linear`;
      elements.slideshowProgress.style.width = '100%';
    }, 20);

    state.lightbox.slideshowTimer = setTimeout(() => {
      if (state.lightbox.isSlideshowPlaying) {
        navigateLightbox('next');
        runSlideshowStep();
      }
    }, state.lightbox.slideshowDuration);
  }

  function stopSlideshow() {
    state.lightbox.isSlideshowPlaying = false;
    clearTimeout(state.lightbox.slideshowTimer);
    elements.lightboxSlideshowBtn.classList.remove('playing');
    elements.lightboxSlideshowBtn.querySelector('i').className = 'fa-solid fa-play';
    elements.slideshowProgress.style.transition = 'none';
    elements.slideshowProgress.style.width = '0%';
  }

  // --- Fullscreen Toggle ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      elements.lightbox.requestFullscreen?.().catch(err => {
        showToast(`Fullscreen error: ${err.message}`, 'fa-triangle-exclamation');
      });
    } else {
      document.exitFullscreen?.();
    }
  }

  // --- Keyboard Shortcuts Guide Modal ---
  function openShortcutsModal() {
    elements.shortcutsModal.classList.add('active');
    elements.shortcutsModal.setAttribute('aria-hidden', 'false');
  }

  function closeShortcutsModal() {
    elements.shortcutsModal.classList.remove('active');
    elements.shortcutsModal.setAttribute('aria-hidden', 'true');
  }

  // ==========================================================================
  // EVENT LISTENERS & INTERACTION HANDLERS
  // ==========================================================================

  // Theme Toggle
  elements.themeToggle.addEventListener('click', toggleTheme);

  // Category Filter Pill Clicks
  elements.categoryPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.category-pill');
    if (!pill) return;
    state.currentCategory = pill.getAttribute('data-category');
    applyFiltersAndSort();
  });

  // Search Input Handler (Debounced)
  let searchDebounceTimer = null;
  elements.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      state.searchQuery = e.target.value;
      applyFiltersAndSort();
    }, 200);
  });

  // Clear Search Button
  elements.clearSearchBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.searchQuery = '';
    applyFiltersAndSort();
    elements.searchInput.focus();
  });

  // Visual Effect Filter Dropdown
  elements.visualFilterSelect.addEventListener('change', (e) => {
    applyVisualFilter(e.target.value);
  });

  // Sort Dropdown
  elements.sortSelect.addEventListener('change', (e) => {
    state.currentSort = e.target.value;
    applyFiltersAndSort();
    showToast(`Sorted by ${elements.sortSelect.selectedOptions[0].text}`);
  });

  // Grid View Mode Buttons
  elements.viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setViewMode(btn.getAttribute('data-view'));
    });
  });

  // Reset Filters Buttons
  elements.resetFiltersBtn.addEventListener('click', resetAllFilters);
  elements.emptyResetBtn.addEventListener('click', resetAllFilters);

  // Lightbox Button Handlers
  elements.lightboxPrevBtn.addEventListener('click', () => {
    stopSlideshow();
    navigateLightbox('prev');
  });

  elements.lightboxNextBtn.addEventListener('click', () => {
    stopSlideshow();
    navigateLightbox('next');
  });

  elements.lightboxCloseBtn.addEventListener('click', closeLightbox);
  elements.lightboxBackdrop.addEventListener('click', closeLightbox);

  elements.lightboxSlideshowBtn.addEventListener('click', toggleSlideshow);
  elements.lightboxFullscreenBtn.addEventListener('click', toggleFullscreen);

  elements.lightboxZoomIn.addEventListener('click', () => setZoom(state.lightbox.zoomLevel + 0.25));
  elements.lightboxZoomOut.addEventListener('click', () => setZoom(state.lightbox.zoomLevel - 0.25));

  elements.lightboxLikeBtn.addEventListener('click', () => {
    const photo = state.filteredImages[state.lightbox.currentIndex];
    if (photo) toggleLike(photo.id);
  });

  // Keyboard Shortcuts Modal Handlers
  elements.helpBtn.addEventListener('click', openShortcutsModal);
  elements.shortcutsCloseBtn.addEventListener('click', closeShortcutsModal);
  elements.shortcutsBackdrop.addEventListener('click', closeShortcutsModal);

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // If typing in search box, ignore navigation hotkeys (except Escape)
    if (document.activeElement === elements.searchInput) {
      if (e.key === 'Escape') {
        elements.searchInput.blur();
      }
      return;
    }

    // Lightbox Hotkeys
    if (state.lightbox.isOpen) {
      switch (e.key) {
        case 'ArrowRight':
        case 'j':
        case 'J':
          e.preventDefault();
          stopSlideshow();
          navigateLightbox('next');
          break;
        case 'ArrowLeft':
        case 'k':
        case 'K':
          e.preventDefault();
          stopSlideshow();
          navigateLightbox('prev');
          break;
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
        case ' ':
          e.preventDefault();
          toggleSlideshow();
          break;
        case '+':
        case '=':
          e.preventDefault();
          setZoom(state.lightbox.zoomLevel + 0.25);
          break;
        case '-':
        case '_':
          e.preventDefault();
          setZoom(state.lightbox.zoomLevel - 0.25);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
      return;
    }

    // Shortcuts Modal Hotkey
    if (elements.shortcutsModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeShortcutsModal();
      }
      return;
    }

    // General App Hotkeys
    if (e.key === '/') {
      e.preventDefault();
      elements.searchInput.focus();
    } else if (e.key === 't' || e.key === 'T') {
      toggleTheme();
    } else if (e.key === '?') {
      openShortcutsModal();
    }
  });

  // Touch Swipe Gesture Support for Lightbox (Mobile & Tablet)
  elements.lightboxImageWrapper.addEventListener('touchstart', (e) => {
    state.lightbox.touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  elements.lightboxImageWrapper.addEventListener('touchend', (e) => {
    state.lightbox.touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });

  function handleSwipeGesture() {
    const swipeDistance = state.lightbox.touchEndX - state.lightbox.touchStartX;
    const minSwipeDistance = 50; // pixels

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      stopSlideshow();
      if (swipeDistance < 0) {
        // Swiped Left -> Next
        navigateLightbox('next');
      } else {
        // Swiped Right -> Previous
        navigateLightbox('prev');
      }
    }
  }

  // --- Initial Boot ---
  initTheme();
  applyFiltersAndSort();
  console.log('✨ LUMINA Gallery initialized successfully with 18 high-resolution photos.');
});
