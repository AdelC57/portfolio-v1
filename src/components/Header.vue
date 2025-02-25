<template>
  <header class="header">
    <div class="logo">
      <a href="#" class="logo-link" @click.prevent="scrollToTop">
        <img src="../assets/logo.png" alt="Logo Portfolio" class="logo-image">
      </a>
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a 
            href="#presentation" 
            class="nav-link"
            :class="{ 'active': activeSection === 'presentation' }"
          >
            Présentation
          </a>
        </li>
        <li class="nav-item">
          <a 
            href="#realisations" 
            class="nav-link"
            :class="{ 'active': activeSection === 'realisations' }"
          >
            Réalisations
          </a>
        </li>
        <li class="nav-item">
          <a 
            href="#contact" 
            class="nav-link"
            :class="{ 'active': activeSection === 'contact' }"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      activeSection: 'presentation'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Vérifier une première fois au chargement
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      // Détecter la section visible à l'écran
      const sections = ['presentation', 'realisations', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset pour une meilleure détection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const topPosition = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= topPosition && scrollPosition < topPosition + height) {
            this.activeSection = section;
            return;
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.logo-link {
  display: block;
}

.logo-image {
  height: 40px;
  width: auto;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3498db;
}

/* Effet de soulignement pour l'élément actif */
.nav-link.active {
  color: #3498db;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
    flex-direction: column;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .nav-item {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
  }
}
</style>