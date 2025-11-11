// ============================================================
// 3D ANIMATED BACKGROUND WITH THREE.JS
// ============================================================
const container = document.getElementById('three-container');

if (container && typeof THREE !== 'undefined') {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  container.appendChild(renderer.domElement);
  
  camera.position.z = 15;
  
  // Create 3D geometric objects
  const objects = [];
  const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1.5, 0.5, 1.5),
    new THREE.OctahedronGeometry(0.8),
    new THREE.TetrahedronGeometry(0.9),
    new THREE.IcosahedronGeometry(0.7),
    new THREE.DodecahedronGeometry(0.6),
    new THREE.TorusGeometry(0.6, 0.2, 8, 12),
    new THREE.ConeGeometry(0.7, 1.2, 6),
  ];
  
  // Create multiple objects with wireframe material - increased to 25
  for (let i = 0; i < 25; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    
    // Alternate between navy blue and warm gold
    const colorChoice = Math.random();
    let color, opacity;
    
    if (colorChoice < 0.65) {
      color = 0x1e3a5f; // Navy blue (65%)
      opacity = 0.12 + Math.random() * 0.08;
    } else {
      color = 0xc8a882; // Warm gold accent (35%)
      opacity = 0.1 + Math.random() * 0.08;
    }
    
    const material = new THREE.MeshBasicMaterial({ 
      color: color,
      wireframe: true,
      transparent: true,
      opacity: opacity
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    // Wider random positioning
    mesh.position.x = (Math.random() - 0.5) * 40;
    mesh.position.y = (Math.random() - 0.5) * 50;
    mesh.position.z = (Math.random() - 0.5) * 25;
    
    // Random rotation
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    
    // Random scale for variety
    const scale = 0.5 + Math.random() * 1.5;
    mesh.scale.set(scale, scale, scale);
    
    // Store initial Y position for scroll animation
    mesh.userData.initialY = mesh.position.y;
    mesh.userData.scrollSpeed = 0.3 + Math.random() * 1.2;
    mesh.userData.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.008,
      y: (Math.random() - 0.5) * 0.008,
      z: (Math.random() - 0.5) * 0.008
    };
    
    scene.add(mesh);
    objects.push(mesh);
  }
  
  let scrollY = 0;
  
  // Update scroll position
  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;
  });
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Animate each object
    objects.forEach((obj, index) => {
      // Rotate
      obj.rotation.x += obj.userData.rotationSpeed.x;
      obj.rotation.y += obj.userData.rotationSpeed.y;
      obj.rotation.z += obj.userData.rotationSpeed.z;
      
      // Move down based on scroll
      const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      obj.position.y = obj.userData.initialY - (scrollProgress * 60 * obj.userData.scrollSpeed);
      
      // Loop objects back to top when they go too far down
      if (obj.position.y < -30) {
        obj.position.y = 30 + Math.random() * 20;
      }
    });
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ============================================================
// FEATHERS ANIMATION FOR CONTACT SECTION
// ============================================================
const feathersCanvas = document.getElementById('feathers-canvas');

if (feathersCanvas && typeof THREE !== 'undefined') {
  const feathersScene = new THREE.Scene();
  const feathersCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const feathersRenderer = new THREE.WebGLRenderer({ 
    canvas: feathersCanvas,
    alpha: true, 
    antialias: true 
  });
  
  feathersRenderer.setSize(window.innerWidth, window.innerHeight);
  feathersRenderer.setClearColor(0xffffff, 0);
  feathersCamera.position.z = 10;
  
  // Create feather shapes
  const feathers = [];
  const featherCount = 15;
  
  function createFeatherGeometry() {
    const shape = new THREE.Shape();
    
    // Create realistic feather outline
    // Central shaft (rachis)
    shape.moveTo(0, 0);
    shape.lineTo(0, 4);
    
    // Right side barbs
    const barbCount = 20;
    for (let i = 0; i <= barbCount; i++) {
      const t = i / barbCount;
      const y = t * 4;
      const width = Math.sin(t * Math.PI) * 0.8; // Wider in middle, tapered at ends
      
      if (i === 0) {
        shape.moveTo(0, 0);
      }
      shape.lineTo(width, y);
    }
    
    // Return along left side
    for (let i = barbCount; i >= 0; i--) {
      const t = i / barbCount;
      const y = t * 4;
      const width = Math.sin(t * Math.PI) * 0.8;
      shape.lineTo(-width, y);
    }
    
    shape.lineTo(0, 0);
    
    const extrudeSettings = {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2
    };
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    return geometry;
  }
  
  // Create multiple feathers distributed across entire width
  for (let i = 0; i < featherCount; i++) {
    const geometry = createFeatherGeometry();
    
    // Colorful feather variations
    const colorChoice = Math.random();
    let color, opacity;
    
    if (colorChoice < 0.3) {
      // Navy blue (30%)
      color = 0x2a4a6f;
      opacity = 0.12 + Math.random() * 0.08;
    } else if (colorChoice < 0.55) {
      // Warm gold (25%)
      color = 0xc8a882;
      opacity = 0.15 + Math.random() * 0.1;
    } else if (colorChoice < 0.75) {
      // Soft teal/turquoise (20%)
      color = 0x6b9b9e;
      opacity = 0.13 + Math.random() * 0.08;
    } else if (colorChoice < 0.90) {
      // Muted coral/rose (15%)
      color = 0xc99b8a;
      opacity = 0.14 + Math.random() * 0.09;
    } else {
      // Sage green (10%)
      color = 0x8b9e8c;
      opacity = 0.12 + Math.random() * 0.08;
    }
    
    const material = new THREE.MeshBasicMaterial({ 
      color: color,
      transparent: true,
      opacity: opacity,
      side: THREE.DoubleSide
    });
    
    const feather = new THREE.Mesh(geometry, material);
    
    // Evenly distribute feathers across the width first, then add randomness
    const segmentWidth = 40; // Total width
    const numSegments = featherCount;
    const segmentSize = segmentWidth / numSegments;
    
    // Calculate base position for even distribution
    const baseX = -20 + (i * segmentSize) + (segmentSize / 2);
    // Add small random offset within segment
    const randomOffset = (Math.random() - 0.5) * (segmentSize * 0.6);
    
    feather.position.x = baseX + randomOffset;
    feather.position.y = Math.random() * 20 - 5;
    feather.position.z = -8 + Math.random() * 6;
    
    // More varied rotation for natural look
    feather.rotation.z = (Math.random() - 0.5) * Math.PI * 0.6;
    feather.rotation.x = (Math.random() - 0.5) * 0.4;
    feather.rotation.y = (Math.random() - 0.5) * 0.3;
    
    // Random scale for variety
    const scale = 0.6 + Math.random() * 0.6;
    feather.scale.set(scale, scale, scale);
    
    // Store animation properties
    feather.userData = {
      speedY: 0.008 + Math.random() * 0.015,
      speedRotation: (Math.random() - 0.5) * 0.008,
      amplitude: 0.6 + Math.random() * 0.8,
      frequency: 0.0008 + Math.random() * 0.0015,
      swayOffset: Math.random() * Math.PI * 2,
      initialX: feather.position.x
    };
    
    feathers.push(feather);
    feathersScene.add(feather);
  }
  
  // Animation loop for feathers
  function animateFeathers() {
    requestAnimationFrame(animateFeathers);
    
    feathers.forEach((feather, index) => {
      const time = Date.now() * feather.userData.frequency + feather.userData.swayOffset;
      
      // Floating downward motion
      feather.position.y -= feather.userData.speedY;
      
      // Gentle horizontal sway
      feather.position.x = feather.userData.initialX + Math.sin(time) * feather.userData.amplitude;
      
      // Gentle rotation on multiple axes for realistic floating
      feather.rotation.z += feather.userData.speedRotation;
      feather.rotation.y = Math.sin(time * 0.8) * 0.2;
      feather.rotation.x = Math.cos(time * 0.6) * 0.15;
      
      // Reset position when feather goes too low with even distribution
      if (feather.position.y < -12) {
        feather.position.y = 12 + Math.random() * 5;
        
        // Recalculate even distribution
        const segmentWidth = 40;
        const numSegments = featherCount;
        const segmentSize = segmentWidth / numSegments;
        const baseX = -20 + (index * segmentSize) + (segmentSize / 2);
        const randomOffset = (Math.random() - 0.5) * (segmentSize * 0.6);
        
        feather.userData.initialX = baseX + randomOffset;
        feather.position.x = feather.userData.initialX;
      }
    });
    
    feathersRenderer.render(feathersScene, feathersCamera);
  }
  
  animateFeathers();
  
  // Handle window resize for feathers
  window.addEventListener('resize', () => {
    feathersCamera.aspect = window.innerWidth / window.innerHeight;
    feathersCamera.updateProjectionMatrix();
    feathersRenderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Update feathers canvas position on scroll
  window.addEventListener('scroll', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      feathersCanvas.style.opacity = isVisible ? '1' : '0';
    }
  });
}

// ============================================================
// GEOMETRIC SHAPES ANIMATION FOR BENTO SECTION
// ============================================================
const shapesCanvas = document.getElementById('shapes-canvas');

if (shapesCanvas && typeof THREE !== 'undefined') {
  const shapesScene = new THREE.Scene();
  const shapesCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const shapesRenderer = new THREE.WebGLRenderer({ 
    canvas: shapesCanvas,
    alpha: true, 
    antialias: true 
  });
  
  shapesRenderer.setSize(window.innerWidth, window.innerHeight);
  shapesRenderer.setClearColor(0xffffff, 0);
  shapesCamera.position.z = 12;
  
  // Create geometric shapes
  const geometricShapes = [];
  const shapeCount = 25; // Increased from 18
  
  // Define professional geometric shapes (diamonds, hexagons, triangles, squares) - LARGER
  const shapeGeometries = [
    // Diamond (rotated square) - larger
    new THREE.PlaneGeometry(2.5, 2.5),
    // Hexagon - larger
    new THREE.CircleGeometry(1.4, 6),
    // Triangle - larger
    new THREE.CircleGeometry(1.5, 3),
    // Pentagon - larger
    new THREE.CircleGeometry(1.2, 5),
    // Thin rectangle - larger
    new THREE.PlaneGeometry(3, 0.8),
    // Square - larger
    new THREE.PlaneGeometry(1.8, 1.8),
    // Octagon
    new THREE.CircleGeometry(1.3, 8),
  ];
  
  // Create multiple shapes with wireframe/outline style
  for (let i = 0; i < shapeCount; i++) {
    const geometry = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
    
    // Create wireframe outline
    const edges = new THREE.EdgesGeometry(geometry);
    
    // Alternate between navy and gold
    const colorChoice = Math.random();
    let color, opacity;
    
    if (colorChoice < 0.6) {
      color = 0x2a4a6f; // Navy (60%)
      opacity = 0.15 + Math.random() * 0.1;
    } else {
      color = 0xc8a882; // Gold (40%)
      opacity = 0.12 + Math.random() * 0.08;
    }
    
    const material = new THREE.LineBasicMaterial({ 
      color: color,
      transparent: true,
      opacity: opacity,
      linewidth: 2
    });
    
    const shape = new THREE.LineSegments(edges, material);
    
    // Better even distribution across entire width
    const totalWidth = 50; // Increased width
    const segmentSize = totalWidth / shapeCount;
    const baseX = -(totalWidth / 2) + (i * segmentSize) + (segmentSize / 2);
    const randomOffset = (Math.random() - 0.5) * (segmentSize * 0.4); // Smaller offset to keep in zones
    
    shape.position.x = baseX + randomOffset;
    shape.position.y = Math.random() * 30 - 5; // Increased vertical spread
    shape.position.z = -10 + Math.random() * 8;
    
    // Random rotation
    shape.rotation.z = Math.random() * Math.PI * 2;
    shape.rotation.x = (Math.random() - 0.5) * 0.5;
    
    // Larger scale range
    const scale = 0.8 + Math.random() * 0.8; // 0.8 to 1.6 (larger)
    shape.scale.set(scale, scale, scale);
    
    // Store animation properties
    shape.userData = {
      speedY: 0.015 + Math.random() * 0.025, // Faster movement
      speedRotation: (Math.random() - 0.5) * 0.015,
      rotationAxis: Math.random() < 0.5 ? 'z' : 'x',
      amplitude: 0.5 + Math.random() * 0.7,
      frequency: 0.0008 + Math.random() * 0.0012,
      swayOffset: Math.random() * Math.PI * 2,
      initialX: shape.position.x
    };
    
    geometricShapes.push(shape);
    shapesScene.add(shape);
  }
  
  // Animation loop for geometric shapes
  function animateShapes() {
    requestAnimationFrame(animateShapes);
    
    geometricShapes.forEach((shape, index) => {
      const time = Date.now() * shape.userData.frequency + shape.userData.swayOffset;
      
      // Floating downward motion
      shape.position.y -= shape.userData.speedY;
      
      // Gentle horizontal drift
      shape.position.x = shape.userData.initialX + Math.sin(time) * shape.userData.amplitude;
      
      // Smooth rotation
      if (shape.userData.rotationAxis === 'z') {
        shape.rotation.z += shape.userData.speedRotation;
      } else {
        shape.rotation.x += shape.userData.speedRotation;
      }
      
      // Reset position when shape goes too low - faster regeneration
      if (shape.position.y < -18) {
        shape.position.y = 18 + Math.random() * 8; // Higher respawn
        
        // Recalculate even distribution
        const totalWidth = 50;
        const segmentSize = totalWidth / shapeCount;
        const baseX = -(totalWidth / 2) + (index * segmentSize) + (segmentSize / 2);
        const randomOffset = (Math.random() - 0.5) * (segmentSize * 0.4);
        
        shape.userData.initialX = baseX + randomOffset;
        shape.position.x = shape.userData.initialX;
      }
    });
    
    shapesRenderer.render(shapesScene, shapesCamera);
  }
  
  animateShapes();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    shapesCamera.aspect = window.innerWidth / window.innerHeight;
    shapesCamera.updateProjectionMatrix();
    shapesRenderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Update visibility based on scroll
  window.addEventListener('scroll', () => {
    const bentoSection = document.getElementById('bento');
    if (bentoSection) {
      const rect = bentoSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      shapesCanvas.style.opacity = isVisible ? '1' : '0';
    }
  });
}

// ============================================================
// MOBILE MENU FUNCTIONALITY
// ============================================================
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeMenu = document.getElementById('close-menu');
const hamburger = document.querySelector('.hamburger');
const mobileLinks = document.querySelectorAll('#mobile-menu a');

function openMenu() {
  mobileMenu.classList.add('active');
  menuOverlay.classList.add('active');
  hamburger.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
}

navToggle?.addEventListener('click', openMenu);
closeMenu?.addEventListener('click', closeMenuFunc);
menuOverlay?.addEventListener('click', closeMenuFunc);

// Close menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenuFunc);
});

// ============================================================
// INTERSECTION OBSERVER FOR FADE-UP ANIMATIONS
// ============================================================
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + '%';
  }
});

// ============================================================
// BACK TO TOP BUTTON
// ============================================================
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop?.classList.add('show');
  } else {
    backToTop?.classList.remove('show');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ============================================================
// CONTACT FORM HANDLER WITH VALIDATION
// ============================================================
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const feedbackElement = document.getElementById('form-feedback');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  
  // Reset feedback
  feedbackElement.textContent = '';
  feedbackElement.className = 'text-sm font-medium';
  
  // Validate all fields are filled
  if (!name || !email || !message) {
    feedbackElement.textContent = 'Please fill in all fields.';
    feedbackElement.className = 'text-sm font-medium text-red-600';
    return;
  }
  
  // Validate name (at least 2 characters)
  if (name.length < 2) {
    feedbackElement.textContent = 'Please enter a valid name.';
    feedbackElement.className = 'text-sm font-medium text-red-600';
    return;
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedbackElement.textContent = 'Please enter a valid email address.';
    feedbackElement.className = 'text-sm font-medium text-red-600';
    return;
  }
  
  // Validate message (at least 10 characters)
  if (message.length < 10) {
    feedbackElement.textContent = 'Message must be at least 10 characters long.';
    feedbackElement.className = 'text-sm font-medium text-red-600';
    return;
  }
  
  // If all validations pass, proceed with mailto
  const subject = encodeURIComponent('Website inquiry from ' + name);
  const body = encodeURIComponent(message + '\n\n' + name + '\n' + email);
  window.location.href = `mailto:priyanka.ghosh@email.com?subject=${subject}&body=${body}`;
  
  feedbackElement.textContent = 'Opening email client...';
  feedbackElement.className = 'text-sm font-medium text-green-600';
  
  setTimeout(() => {
    form.reset();
    feedbackElement.textContent = '';
  }, 3000);
});

// ============================================================
// LENIS SMOOTH SCROLL INITIALIZATION
// ============================================================

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Lenis animation frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Anchor links with Lenis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#resume') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        // Calculate offset for fixed navbar
        const navbarHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        // Use Lenis scrollTo
        lenis.scrollTo(targetPosition, {
          offset: 0,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          onComplete: () => {
            // Focus on contact form name input when clicking "Get in Touch" or contact links
            if (href === '#contact') {
              const nameInput = document.getElementById('contact-name');
              if (nameInput) {
                setTimeout(() => {
                  nameInput.focus();
                }, 100);
              }
            }
          }
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      }
    }
  });
});
