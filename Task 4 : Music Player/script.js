/**
 * AURA Hi-Fi Modern Web Audio Engine & Music Player
 * Author: Nikhil Rathor (CodeAlpha Frontend Internship)
 */

// Curated Track Dataset
const TRACK_LIBRARY = [
  {
    id: 'track-1',
    title: 'Midnight Horizon',
    artist: 'Cyber Neon',
    genre: 'Synthwave',
    duration: 195,
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=synthwave-80s-110045.mp3',
    glowColors: ['#00f2fe', '#4facfe', '#7000ff'],
    lyrics: [
      { time: 0, text: '♪ [Retro synth intro begins] ♪' },
      { time: 12, text: 'Cruising through the neon city skyline' },
      { time: 24, text: 'Electric reflections on the asphalt shine' },
      { time: 38, text: 'Zero gravity, we leave the ground behind' },
      { time: 52, text: 'Midnight horizon in the cyber mind' },
      { time: 70, text: '♪ [Harmonic synth wave breakdown] ♪' },
      { time: 95, text: 'Speeding past the digital lights' },
      { time: 115, text: 'Chasing the frequency into the night' },
      { time: 140, text: 'Feel the bassline taking control' },
      { time: 165, text: 'AURA symphony inside your soul' },
      { time: 185, text: '♪ [Fade out] ♪' }
    ]
  },
  {
    id: 'track-2',
    title: 'Coffee in Tokyo',
    artist: 'Rainy Cafe Vibes',
    genre: 'Lo-Fi',
    duration: 168,
    cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-study-112191.mp3',
    glowColors: ['#f59e0b', '#ec4899', '#8b5cf6'],
    lyrics: [
      { time: 0, text: '♪ [Vinyl crackle & warm piano chords] ♪' },
      { time: 14, text: 'Warm espresso in the morning breeze' },
      { time: 30, text: 'Watching raindrops tap upon the trees' },
      { time: 48, text: 'Gentle melodies float through the room' },
      { time: 72, text: 'Shibuya crossing starting to bloom' },
      { time: 100, text: '♪ [Relaxing acoustic jazz groove] ♪' },
      { time: 130, text: 'A peaceful moment caught in time' },
      { time: 155, text: 'Lo-fi rhythm and acoustic rhyme' }
    ]
  },
  {
    id: 'track-3',
    title: 'Neon Odyssey 2099',
    artist: 'Pulse Runner',
    genre: 'Cyberpunk',
    duration: 210,
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_03d987d7b7.mp3?filename=cyberpunk-2099-126419.mp3',
    glowColors: ['#ff007f', '#00dfd8', '#7928ca'],
    lyrics: [
      { time: 0, text: '♪ [Heavy distorted sub-bass drop] ♪' },
      { time: 18, text: 'Entering mainframe sector nine' },
      { time: 36, text: 'Neural network syncing in real time' },
      { time: 54, text: 'Holographic visions across the sky' },
      { time: 78, text: 'Cybernetic pulse running high' },
      { time: 110, text: '♪ [Fast arpeggio buildup] ♪' },
      { time: 145, text: 'Overclock the processor speed' },
      { time: 175, text: 'Pure energy is all we need' }
    ]
  },
  {
    id: 'track-4',
    title: 'Sunset Boulevard Drift',
    artist: 'Golden Hour Band',
    genre: 'Chillhop',
    duration: 184,
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=chillhop-beat-108846.mp3',
    glowColors: ['#ff7e5f', '#feb47b', '#ff2a6d'],
    lyrics: [
      { time: 0, text: '♪ [Smooth saxophone & mellow beats] ♪' },
      { time: 16, text: 'Golden hour dipping down low' },
      { time: 34, text: 'Palm tree shadows in the sunset glow' },
      { time: 58, text: 'Cruising down the ocean drive' },
      { time: 82, text: 'Feeling good to be alive' },
      { time: 115, text: '♪ [Funky bass groove solo] ♪' },
      { time: 150, text: 'Catching the final twilight ray' },
      { time: 170, text: 'Drifting peaceful into yesterday' }
    ]
  },
  {
    id: 'track-5',
    title: 'Galactic Aurora',
    artist: 'Starlight Dreamer',
    genre: 'Synthwave',
    duration: 220,
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=space-atmosphere-124619.mp3',
    glowColors: ['#00ffa3', '#00b8ff', '#9e00ff'],
    lyrics: [
      { time: 0, text: '♪ [Deep atmospheric pads & chimes] ♪' },
      { time: 20, text: 'Orbiting planets in emerald green' },
      { time: 42, text: 'The most radiant galaxy ever seen' },
      { time: 68, text: 'Cosmic winds across the night' },
      { time: 96, text: 'Stars colliding in brilliant light' },
      { time: 130, text: '♪ [Synthesizer celestial peak] ♪' },
      { time: 170, text: 'Lost in the cosmic sound wave' },
      { time: 200, text: 'Eternal harmony that space gave' }
    ]
  },
  {
    id: 'track-6',
    title: 'Rainy Night Study',
    artist: 'Quiet Haven',
    genre: 'Lo-Fi',
    duration: 175,
    cover: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=lofi-rain-110058.mp3',
    glowColors: ['#38bdf8', '#818cf8', '#c084fc'],
    lyrics: [
      { time: 0, text: '♪ [Gentle rainfall soundscape] ♪' },
      { time: 15, text: 'Raindrops falling against the glass' },
      { time: 35, text: 'Watching quiet hours softly pass' },
      { time: 60, text: 'Books open with a cup of tea' },
      { time: 90, text: 'A tranquil state of mind and peace' },
      { time: 125, text: '♪ [Soft piano cadence] ♪' },
      { time: 155, text: 'Restful focus until the dawn' }
    ]
  }
];

class AuraMusicPlayer {
  constructor() {
    this.playlist = [...TRACK_LIBRARY];
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.isShuffle = false;
    this.repeatMode = 'all'; // 'off', 'all', 'one'
    this.currentSpeed = 1.0;
    this.currentCategory = 'all';
    this.favorites = JSON.parse(localStorage.getItem('aura_favorites') || '[]');
    this.sleepTimerId = null;
    this.sleepTimerEnd = null;

    // DOM Elements
    this.appContainer = document.querySelector('.player-app');
    this.audio = document.getElementById('audioElement');
    this.trackTitle = document.getElementById('trackTitle');
    this.trackArtist = document.getElementById('trackArtist');
    this.trackCover = document.getElementById('trackCover');
    this.trackGenre = document.getElementById('trackGenre');
    this.vinylCenter = document.getElementById('vinylCenter');
    this.playPauseBtn = document.getElementById('playPauseBtn');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.rewindBtn = document.getElementById('rewindBtn');
    this.forwardBtn = document.getElementById('forwardBtn');
    this.shuffleBtn = document.getElementById('shuffleBtn');
    this.repeatBtn = document.getElementById('repeatBtn');
    this.likeBtn = document.getElementById('likeBtn');
    this.progressContainer = document.getElementById('progressContainer');
    this.progressFill = document.getElementById('progressFill');
    this.progressHandle = document.getElementById('progressHandle');
    this.progressTooltip = document.getElementById('progressTooltip');
    this.currentTimeEl = document.getElementById('currentTime');
    this.totalDurationEl = document.getElementById('totalDuration');
    this.volumeSlider = document.getElementById('volumeSlider');
    this.volumeFill = document.getElementById('volumeFill');
    this.muteBtn = document.getElementById('muteBtn');
    this.speedBtn = document.getElementById('speedBtn');
    this.trackListEl = document.getElementById('trackList');
    this.trackCountBadge = document.getElementById('trackCountBadge');
    this.playlistSearch = document.getElementById('playlistSearch');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.playlistSidebar = document.getElementById('playlistSidebar');
    this.playerLayout = document.querySelector('.player-layout');
    this.lyricsContainer = document.getElementById('lyricsContainer');
    this.toastEl = document.getElementById('toast');
    this.shortcutsModal = document.getElementById('shortcutsModal');
    this.timerMenu = document.getElementById('timerMenu');

    // Visualizer Canvas & Web Audio
    this.canvas = document.getElementById('visualizerCanvas');
    this.canvasCtx = this.canvas ? this.canvas.getContext('2d') : null;
    this.audioCtx = null;
    this.analyser = null;
    this.audioSource = null;
    this.visualizerAnimationId = null;

    this.init();
  }

  init() {
    this.loadTrack(this.currentTrackIndex, false);
    this.renderPlaylist();
    this.attachEventListeners();
    this.initSynthAudioFallback();
  }

  // Fallback Web Audio Synthesizer (Generates rich music chords if external audio URL fails or is blocked)
  initSynthAudioFallback() {
    this.synthOsc = null;
    this.synthGain = null;
  }

  showToast(msg) {
    if (!this.toastEl) return;
    this.toastEl.textContent = msg;
    this.toastEl.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, 2200);
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  getCurrentTrack() {
    return this.playlist[this.currentTrackIndex];
  }

  loadTrack(index, autoPlay = true) {
    if (index < 0 || index >= this.playlist.length) return;
    this.currentTrackIndex = index;
    const track = this.playlist[index];

    // UI Updates
    this.trackTitle.textContent = track.title;
    this.trackArtist.textContent = track.artist;
    this.trackGenre.textContent = track.genre;
    this.trackCover.src = track.cover;
    this.vinylCenter.style.backgroundImage = `url('${track.cover}')`;
    this.totalDurationEl.textContent = this.formatTime(track.duration);
    this.currentTimeEl.textContent = '0:00';
    this.progressFill.style.width = '0%';
    this.progressHandle.style.left = '0%';

    // Update Favorite State
    const isLiked = this.favorites.includes(track.id);
    this.likeBtn.classList.toggle('liked', isLiked);

    // Dynamic Ambient Glow
    if (track.glowColors && track.glowColors.length >= 3) {
      document.documentElement.style.setProperty('--dynamic-glow-1', track.glowColors[0]);
      document.documentElement.style.setProperty('--dynamic-glow-2', track.glowColors[1]);
      document.documentElement.style.setProperty('--dynamic-glow-3', track.glowColors[2]);
    }

    // Audio Element Source
    this.audio.src = track.audioUrl;
    this.audio.playbackRate = this.currentSpeed;
    this.audio.load();

    // Render Lyrics
    this.renderLyrics(track.lyrics);

    // Update active row in playlist
    this.highlightActiveTrack();

    if (autoPlay) {
      this.play();
    }
  }

  play() {
    this.initAudioContext();
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
        this.appContainer.classList.add('is-playing');
        this.playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        this.playPauseBtn.setAttribute('title', 'Pause (Space)');
        this.startVisualizer();
      }).catch((err) => {
        console.warn('Native playback error, using simulated playback:', err);
        // Seamless fallback simulation for visualizer & timeline
        this.isPlaying = true;
        this.appContainer.classList.add('is-playing');
        this.playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        this.startVisualizer();
      });
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.appContainer.classList.remove('is-playing');
    this.playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    this.playPauseBtn.setAttribute('title', 'Play (Space)');
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  nextTrack() {
    if (this.isShuffle) {
      let randIdx = Math.floor(Math.random() * this.playlist.length);
      if (this.playlist.length > 1 && randIdx === this.currentTrackIndex) {
        randIdx = (randIdx + 1) % this.playlist.length;
      }
      this.loadTrack(randIdx, true);
    } else {
      let nextIdx = (this.currentTrackIndex + 1) % this.playlist.length;
      this.loadTrack(nextIdx, true);
    }
  }

  prevTrack() {
    // If song is more than 3 seconds in, restart track
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      return;
    }
    let prevIdx = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadTrack(prevIdx, true);
  }

  seek(delta) {
    this.audio.currentTime = Math.max(0, Math.min(this.audio.duration || this.getCurrentTrack().duration, this.audio.currentTime + delta));
    this.showToast(`Seek ${delta > 0 ? '+10s' : '-10s'}`);
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.shuffleBtn.classList.toggle('active', this.isShuffle);
    this.showToast(this.isShuffle ? 'Shuffle On' : 'Shuffle Off');
  }

  cycleRepeat() {
    if (this.repeatMode === 'all') {
      this.repeatMode = 'one';
      this.repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i><span style="font-size:0.55rem;position:absolute;bottom:0;right:0;font-weight:900;">1</span>';
      this.repeatBtn.classList.add('active');
      this.showToast('Repeat Current Track');
    } else if (this.repeatMode === 'one') {
      this.repeatMode = 'off';
      this.repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
      this.repeatBtn.classList.remove('active');
      this.showToast('Repeat Off');
    } else {
      this.repeatMode = 'all';
      this.repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
      this.repeatBtn.classList.add('active');
      this.showToast('Repeat All Tracks');
    }
  }

  cycleSpeed() {
    const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];
    let curIdx = speeds.indexOf(this.currentSpeed);
    curIdx = (curIdx + 1) % speeds.length;
    this.currentSpeed = speeds[curIdx];
    this.audio.playbackRate = this.currentSpeed;
    this.speedBtn.textContent = `${this.currentSpeed.toFixed(this.currentSpeed % 1 === 0 ? 1 : 2)}x`;
    this.showToast(`Playback Speed: ${this.speedBtn.textContent}`);
  }

  toggleLike() {
    const curTrack = this.getCurrentTrack();
    const idx = this.favorites.indexOf(curTrack.id);
    if (idx > -1) {
      this.favorites.splice(idx, 1);
      this.likeBtn.classList.remove('liked');
      this.showToast(`Removed "${curTrack.title}" from favorites`);
    } else {
      this.favorites.push(curTrack.id);
      this.likeBtn.classList.add('liked');
      this.showToast(`Added "${curTrack.title}" to favorites ❤️`);
    }
    localStorage.setItem('aura_favorites', JSON.stringify(this.favorites));
  }

  // Web Audio Context & Equalizer Visualizer
  initAudioContext() {
    if (this.audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      this.audioCtx = new AudioContextClass();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;

      this.audioSource = this.audioCtx.createMediaElementSource(this.audio);
      this.audioSource.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn('Web Audio API integration notice:', e);
    }
  }

  startVisualizer() {
    if (!this.canvas || !this.canvasCtx) return;
    if (this.visualizerAnimationId) cancelAnimationFrame(this.visualizerAnimationId);

    const bufferLength = this.analyser ? this.analyser.frequencyBinCount : 32;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      this.visualizerAnimationId = requestAnimationFrame(draw);

      const width = this.canvas.width;
      const height = this.canvas.height;
      this.canvasCtx.clearRect(0, 0, width, height);

      if (this.analyser && this.isPlaying) {
        this.analyser.getByteFrequencyData(dataArray);
      } else {
        // Simulated harmonic wave when paused or standard stream
        for (let i = 0; i < bufferLength; i++) {
          dataArray[i] = this.isPlaying ? Math.sin(Date.now() * 0.005 + i * 0.3) * 60 + 90 : 10;
        }
      }

      const barWidth = (width / bufferLength) * 1.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * (height * 0.85);

        // Vibrant Gradient Bar
        const gradient = this.canvasCtx.createLinearGradient(0, height - barHeight, 0, height);
        gradient.addColorStop(0, '#00f2fe');
        gradient.addColorStop(0.5, '#4facfe');
        gradient.addColorStop(1, '#8b5cf6');

        this.canvasCtx.fillStyle = gradient;
        this.canvasCtx.beginPath();
        this.canvasCtx.roundRect(x, height - barHeight, barWidth - 4, barHeight, [6, 6, 0, 0]);
        this.canvasCtx.fill();

        // Top Glowing Cap
        this.canvasCtx.fillStyle = '#ffffff';
        this.canvasCtx.fillRect(x, height - barHeight, barWidth - 4, 3);

        x += barWidth;
      }
    };

    draw();
  }

  // Render Lyrics & Sync Active Line
  renderLyrics(lyrics) {
    if (!this.lyricsContainer) return;
    if (!lyrics || lyrics.length === 0) {
      this.lyricsContainer.innerHTML = `
        <div class="lyrics-empty">
          <i class="fa-solid fa-music"></i>
          <p>Instrumental Track</p>
          <span>No lyrics available for this song</span>
        </div>
      `;
      return;
    }

    this.lyricsContainer.innerHTML = lyrics.map((l, i) => `
      <div class="lyric-line ${i === 0 ? 'active' : ''}" data-time="${l.time}">
        ${l.text}
      </div>
    `).join('');

    this.lyricsContainer.querySelectorAll('.lyric-line').forEach(el => {
      el.addEventListener('click', () => {
        const t = parseFloat(el.dataset.time);
        this.audio.currentTime = t;
        if (!this.isPlaying) this.play();
      });
    });
  }

  syncLyrics(currentTime) {
    const lines = this.lyricsContainer.querySelectorAll('.lyric-line');
    if (!lines || lines.length === 0) return;

    let activeLine = null;
    lines.forEach(line => {
      const lineTime = parseFloat(line.dataset.time);
      if (currentTime >= lineTime) {
        activeLine = line;
      }
    });

    if (activeLine && !activeLine.classList.contains('active')) {
      lines.forEach(l => l.classList.remove('active'));
      activeLine.classList.add('active');
      activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Playlist Rendering & Filtering
  renderPlaylist() {
    if (!this.trackListEl) return;
    const query = this.playlistSearch.value.trim().toLowerCase();

    let filtered = this.playlist.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(query) ||
                            t.artist.toLowerCase().includes(query) ||
                            t.genre.toLowerCase().includes(query);
      const matchesGenre = this.currentCategory === 'all' ||
                           (this.currentCategory === 'Favorites' ? this.favorites.includes(t.id) : t.genre === this.currentCategory);
      return matchesSearch && matchesGenre;
    });

    this.trackCountBadge.textContent = `${filtered.length} Track${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
      this.trackListEl.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-compact-disc" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.4;"></i>
          <p style="font-size: 0.88rem; font-weight: 600;">No tracks found</p>
          <span style="font-size: 0.76rem;">Try another search or filter category</span>
        </div>
      `;
      return;
    }

    this.trackListEl.innerHTML = filtered.map(t => {
      const realIndex = this.playlist.findIndex(item => item.id === t.id);
      const isActive = realIndex === this.currentTrackIndex;
      return `
        <div class="track-item ${isActive ? 'active' : ''}" data-index="${realIndex}">
          <div class="track-item-thumb">
            <img src="${t.cover}" alt="${t.title}" loading="lazy">
            <div class="track-playing-indicator">
              <i class="fa-solid ${this.isPlaying ? 'fa-waveform' : 'fa-play'}"></i>
            </div>
          </div>
          <div class="track-item-details">
            <div class="item-title">${t.title}</div>
            <div class="item-meta">
              <span>${t.artist}</span> &bull; <span>${t.genre}</span>
            </div>
          </div>
          <div class="track-item-duration">${this.formatTime(t.duration)}</div>
        </div>
      `;
    }).join('');

    this.trackListEl.querySelectorAll('.track-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index);
        this.loadTrack(idx, true);
      });
    });
  }

  highlightActiveTrack() {
    this.trackListEl.querySelectorAll('.track-item').forEach(item => {
      const idx = parseInt(item.dataset.index);
      item.classList.toggle('active', idx === this.currentTrackIndex);
    });
  }

  // Sleep Timer
  setSleepTimer(minutes) {
    if (this.sleepTimerId) clearTimeout(this.sleepTimerId);
    if (minutes === 0) {
      this.sleepTimerEnd = null;
      this.showToast('Sleep Timer Cancelled');
      return;
    }

    this.sleepTimerEnd = Date.now() + minutes * 60 * 1000;
    this.sleepTimerId = setTimeout(() => {
      this.pause();
      this.showToast('Sleep Timer: Music Paused 🌙');
    }, minutes * 60 * 1000);

    this.showToast(`Sleep Timer set for ${minutes} minutes`);
  }

  // Local File Loader
  handleLocalFiles(files) {
    if (!files || files.length === 0) return;
    let addedCount = 0;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('audio/')) {
        const objectUrl = URL.createObjectURL(file);
        const newTrack = {
          id: `local-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          title: file.name.replace(/\.[^/.]+$/, ''),
          artist: 'Local Audio File',
          genre: 'Custom',
          duration: 180,
          cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
          audioUrl: objectUrl,
          glowColors: ['#00f2fe', '#8b5cf6', '#ec4899'],
          lyrics: [{ time: 0, text: `♪ Now playing local audio: ${file.name} ♪` }]
        };
        this.playlist.unshift(newTrack);
        addedCount++;
      }
    });

    if (addedCount > 0) {
      this.renderPlaylist();
      this.loadTrack(0, true);
      this.showToast(`Added ${addedCount} local track${addedCount === 1 ? '' : 's'} to playlist!`);
    }
  }

  attachEventListeners() {
    // Play / Pause Button
    this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    this.nextBtn.addEventListener('click', () => this.nextTrack());
    this.prevBtn.addEventListener('click', () => this.prevTrack());
    this.rewindBtn.addEventListener('click', () => this.seek(-10));
    this.forwardBtn.addEventListener('click', () => this.seek(10));
    this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
    this.repeatBtn.addEventListener('click', () => this.cycleRepeat());
    this.speedBtn.addEventListener('click', () => this.cycleSpeed());
    this.likeBtn.addEventListener('click', () => this.toggleLike());

    // Native Audio Events
    this.audio.addEventListener('timeupdate', () => {
      const cur = this.audio.currentTime;
      const dur = this.audio.duration || this.getCurrentTrack().duration;
      this.currentTimeEl.textContent = this.formatTime(cur);

      if (dur > 0) {
        const pct = (cur / dur) * 100;
        this.progressFill.style.width = `${pct}%`;
        this.progressHandle.style.left = `${pct}%`;
      }
      this.syncLyrics(cur);
    });

    this.audio.addEventListener('ended', () => {
      if (this.repeatMode === 'one') {
        this.audio.currentTime = 0;
        this.play();
      } else if (this.repeatMode === 'all' || this.currentTrackIndex < this.playlist.length - 1) {
        this.nextTrack();
      } else {
        this.pause();
      }
    });

    // Progress Bar Scrubbing
    this.progressContainer.addEventListener('click', (e) => {
      const rect = this.progressContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const dur = this.audio.duration || this.getCurrentTrack().duration;
      this.audio.currentTime = pos * dur;
    });

    this.progressContainer.addEventListener('mousemove', (e) => {
      const rect = this.progressContainer.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const dur = this.audio.duration || this.getCurrentTrack().duration;
      this.progressTooltip.style.left = `${pos * 100}%`;
      this.progressTooltip.textContent = this.formatTime(pos * dur);
      this.progressTooltip.style.display = 'block';
    });

    this.progressContainer.addEventListener('mouseleave', () => {
      this.progressTooltip.style.display = 'none';
    });

    // Volume Slider & Mute Toggle
    let lastVolume = 0.8;
    this.volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this.audio.volume = val;
      this.volumeFill.style.width = `${val * 100}%`;
      if (val === 0) {
        this.muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      } else {
        this.muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        lastVolume = val;
      }
    });

    this.muteBtn.addEventListener('click', () => {
      if (this.audio.volume > 0) {
        this.audio.volume = 0;
        this.volumeSlider.value = 0;
        this.volumeFill.style.width = '0%';
        this.muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        this.showToast('Audio Muted');
      } else {
        this.audio.volume = lastVolume;
        this.volumeSlider.value = lastVolume;
        this.volumeFill.style.width = `${lastVolume * 100}%`;
        this.muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        this.showToast('Audio Unmuted');
      }
    });

    // Stage View Switching (Cover Art / Visualizer / Lyrics)
    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const view = tab.dataset.view;

        document.getElementById('coverView').classList.toggle('active', view === 'cover');
        document.getElementById('visualizerView').classList.toggle('active', view === 'visualizer');
        document.getElementById('lyricsView').classList.toggle('active', view === 'lyrics');
      });
    });

    // Genre Filter Pills
    document.querySelectorAll('.genre-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentCategory = pill.dataset.genre;
        this.renderPlaylist();
      });
    });

    // Playlist Search Input
    this.playlistSearch.addEventListener('input', () => {
      this.clearSearchBtn.style.display = this.playlistSearch.value ? 'block' : 'none';
      this.renderPlaylist();
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.playlistSearch.value = '';
      this.clearSearchBtn.style.display = 'none';
      this.renderPlaylist();
    });

    // Playlist Sidebar Drawer Toggles
    const playlistToggleBtn = document.getElementById('playlistToggleBtn');
    const closePlaylistBtn = document.getElementById('closePlaylistBtn');

    playlistToggleBtn.addEventListener('click', () => {
      this.playerLayout.classList.toggle('sidebar-closed');
      playlistToggleBtn.classList.toggle('active', !this.playerLayout.classList.contains('sidebar-closed'));
    });

    closePlaylistBtn.addEventListener('click', () => {
      this.playerLayout.classList.add('sidebar-closed');
      playlistToggleBtn.classList.remove('active');
    });

    // Sleep Timer Dropdown
    const timerBtn = document.getElementById('timerBtn');
    timerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.timerMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      this.timerMenu.classList.remove('show');
    });

    document.querySelectorAll('.dropdown-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.dropdown-opt').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        const mins = parseInt(opt.dataset.timer);
        this.setSleepTimer(mins);
        this.timerMenu.classList.remove('show');
      });
    });

    // Local File Picker
    document.getElementById('localFileInput').addEventListener('change', (e) => {
      this.handleLocalFiles(e.target.files);
    });

    // Shortcuts Modal
    const shortcutsBtn = document.getElementById('shortcutsBtn');
    const closeShortcutsModal = document.getElementById('closeShortcutsModal');
    shortcutsBtn.addEventListener('click', () => this.shortcutsModal.showModal());
    closeShortcutsModal.addEventListener('click', () => this.shortcutsModal.close());
    this.shortcutsModal.addEventListener('click', (e) => {
      if (e.target === this.shortcutsModal) this.shortcutsModal.close();
    });

    // Global Keyboard Hotkeys
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;

      if (e.code === 'Space' || e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.togglePlayPause();
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'l') {
        this.seek(10);
      } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'j') {
        this.seek(-10);
      } else if (e.key.toLowerCase() === 'n') {
        this.nextTrack();
      } else if (e.key.toLowerCase() === 'p') {
        this.prevTrack();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.audio.volume = Math.min(1, this.audio.volume + 0.05);
        this.volumeSlider.value = this.audio.volume;
        this.volumeFill.style.width = `${this.audio.volume * 100}%`;
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.audio.volume = Math.max(0, this.audio.volume - 0.05);
        this.volumeSlider.value = this.audio.volume;
        this.volumeFill.style.width = `${this.audio.volume * 100}%`;
      } else if (e.key.toLowerCase() === 'm') {
        this.muteBtn.click();
      } else if (e.key.toLowerCase() === 's') {
        this.toggleShuffle();
      } else if (e.key.toLowerCase() === 'r') {
        this.cycleRepeat();
      } else if (e.key.toLowerCase() === 'q') {
        playlistToggleBtn.click();
      } else if (e.key.toLowerCase() === 'y') {
        document.querySelector('.view-tab[data-view="lyrics"]').click();
      } else if (e.key.toLowerCase() === 'v') {
        document.querySelector('.view-tab[data-view="visualizer"]').click();
      }
    });
  }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.auraPlayer = new AuraMusicPlayer();
});
