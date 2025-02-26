<template>
  <div class="container">
    <!-- Section Présentation -->
    <section class="presentation" id="presentation">
      <div class="presentation-container">
        <div class="image-container">
          <img
            id="mascotte-presentation"
            src="../assets/mascotte-presentation.png"
            alt="mascotte"
          />
        </div>
        <div class="text-container">
          <h1>Présentation</h1>
          <div class="separator"></div>
          <p class="intro">Développeur web en devenir, passionné par le numérique</p>
          <p class="description">
            Bonjour, je m'appelle Adel, j'ai 27 ans et je suis actuellement en pleine reconversion
            professionnelle dans le développement web avec le Centre Européen de Formation (CEF).
            <br /><br />
            Après une expérience enrichissante dans le domaine de la sécurité où j'ai développé un
            sens aigu de la rigueur, de la responsabilité et de l'observation, j'ai décidé
            d'orienter ma carrière vers ma passion : le développement web.
            <br /><br />
            Ce portfolio représente l'aboutissement de mon parcours d'apprentissage et témoigne de
            ma motivation à relever de nouveaux défis dans le monde du numérique. À travers mes
            projets, vous découvrirez mes compétences techniques en HTML, CSS, JavaScript et Vue.js,
            ainsi que ma capacité à concevoir des interfaces utilisateur intuitives et responsives.
            <br /><br />
            Je suis constamment à la recherche de nouvelles opportunités pour développer mes
            compétences et contribuer à des projets innovants. N'hésitez pas à explorer mes
            réalisations et à me contacter pour discuter de potentielles collaborations.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Réalisations -->
    <section class="realisations" id="realisations">
      <h2>Mes Réalisations</h2>
      <div class="separator"></div>
      <div class="realisations-container">
        <!-- Carte Réalisation 1 -->
        <div class="realisation-card" @click="openModal(projects[0])">
          <div class="realisation-image">
            <img src="../assets/realisation1.jpg" alt="Réalisation 1" />
          </div>
          <div class="realisation-content">
            <h3>Doctolib</h3>
            <p>Description du projet et des technologies utilisées.</p>
          </div>
        </div>

        <!-- Carte Réalisation 2 -->
        <div class="realisation-card" @click="openModal(projects[1])">
          <div class="realisation-image">
            <img src="../assets/realisation2.jpg" alt="Réalisation 2" />
          </div>
          <div class="realisation-content">
            <h3>MyBoulanger</h3>
            <p>Description du projet et des technologies utilisées.</p>
          </div>
        </div>

        <!-- Carte Réalisation 3 -->
        <div class="realisation-card" @click="openModal(projects[2])">
          <div class="realisation-image">
            <img src="../assets/realisation3.jpg" alt="Réalisation 3" />
          </div>
          <div class="realisation-content">
            <h3>Site E-Commerce</h3>
            <p>Description du projet et des technologies utilisées.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Formulaire Contact -->
    <section class="contact" id="contact">
      <h2>Contactez-moi</h2>
      <div class="separator"></div>
      <p class="contact-intro">
        Vous avez un projet à réaliser ou une question ? N'hésitez pas à me contacter !
      </p>

      <form class="contact-form">
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input type="text" id="name" name="name" placeholder="Votre nom" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Votre email" required />
        </div>

        <div class="form-group">
          <label for="subject">Sujet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Envoyer</button>
      </form>
    </section>

    <!-- Modal pour les projets -->
    <div v-if="isModalOpen" class="project-modal-overlay" @click="closeModalOnOverlay">
      <div class="project-modal-container">
        <div class="project-modal-header">
          <h3>{{ selectedProject.title }}</h3>
          <button class="close-button" @click="closeModal">×</button>
        </div>
        <div class="project-modal-content">
          <div class="project-modal-image">
            <img :src="selectedProject.image" :alt="selectedProject.title" />
          </div>
          <div class="project-modal-details">
            <p class="date"><strong>Date :</strong> {{ selectedProject.date }}</p>
            <div class="technologies">
              <strong>Technologies utilisées :</strong>
              <ul>
                <li v-for="(tech, index) in selectedProject.technologies" :key="index">
                  {{ tech }}
                </li>
              </ul>
            </div>
            <p class="description">{{ selectedProject.description }}</p>
            <div class="project-modal-links">
              <a
                v-if="selectedProject.siteUrl"
                :href="selectedProject.siteUrl"
                target="_blank"
                class="btn btn-primary"
              >
                Visiter le site
              </a>
              <a
                v-if="selectedProject.pdfUrl"
                :href="selectedProject.pdfUrl"
                target="_blank"
                class="btn btn-primary"
              >
                Voir le PDF
              </a>
              <a
                v-if="selectedProject.githubUrl"
                :href="selectedProject.githubUrl"
                target="_blank"
                class="btn btn-secondary"
              >
                <i class="fa fa-github"></i> Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="../assets/logo.png" alt="Logo" />
        <h3>Mon Portfolio</h3>
      </div>

      <div class="footer-links">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#presentation">Présentation</a></li>
          <li><a href="#realisations">Réalisations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-social">
        <h4>Retrouvez-moi</h4>
        <div class="social-icons">
          <a href="https://linkedin.com/in/votre-profil" target="_blank" aria-label="LinkedIn"
            ><i class="fa fa-linkedin"></i
          ></a>
          <a href="https://github.com/votre-username" target="_blank" aria-label="GitHub"
            ><i class="fa fa-github"></i
          ></a>
          <a href="https://twitter.com/votre-profil" target="_blank" aria-label="Twitter"
            ><i class="fa fa-twitter"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Mon Portfolio. Tous droits réservés.</p>
      <p class="update-date">Dernière mise à jour : {{ lastUpdate }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isModalOpen: false,
      selectedProject: {},
      lastUpdate: '25 février 2025',
      projects: [
        {
          id: 1,
          title: 'Projet 1',
          description:
            'Description détaillée du projet 1. Ce projet a été réalisé dans le cadre de ma formation et a permis de mettre en pratique mes compétences en développement front-end.',
          image: '../assets/realisation1.png',
          date: 'Janvier 2025',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js'],
          siteUrl: 'https://exemple.com/projet1',
          githubUrl: 'https://github.com/votre-username/projet1',
        },
        {
          id: 2,
          title: 'Projet 2',
          description:
            'Description détaillée du projet 2. Ce projet a consisté à développer une application web interactive avec une interface utilisateur moderne et intuitive.',
          image: '../assets/realisation2.png',
          date: 'Février 2025',
          technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
          pdfUrl: '../assets/projet2.pdf',
          githubUrl: 'https://github.com/votre-username/projet2',
        },
        {
          id: 3,
          title: 'Projet 3',
          description:
            "Description détaillée du projet 3. Ce projet m'a permis d'explorer des technologies avancées et de résoudre des problématiques complexes en matière de développement web.",
          image: '../assets/realisation3.png',
          date: 'Mars 2025',
          technologies: ['React', 'Firebase', 'Tailwind CSS'],
          siteUrl: 'https://exemple.com/projet3',
          githubUrl: 'https://github.com/votre-username/projet3',
        },
      ],
    }
  },
  methods: {
    openModal(project) {
      this.selectedProject = project
      this.isModalOpen = true
      document.body.style.overflow = 'hidden' // Empêcher le défilement
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflow = '' // Rétablir le défilement
    },
    closeModalOnOverlay(event) {
      // Fermer la modal seulement si on clique en dehors du contenu
      if (event.target === event.currentTarget) {
        this.closeModal()
      }
    },
  },
}
</script>

<style>
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.presentation {
  height: auto;
  min-height: 30rem;
  margin: 6rem auto 3rem auto; /* Augmentez la première valeur (3rem → 6rem) */
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  transition: all 0.3s ease;
}

.presentation:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.presentation-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.image-container {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.text-container {
  width: 60%;
  padding: 3rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.separator {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  margin: 20px 0;
  border-radius: 2px;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  color: #333;
  font-weight: 700;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

#mascotte-presentation {
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));
}

#mascotte-presentation:hover {
  transform: scale(1.05);
}

/* Section Réalisations */
.realisations {
  padding: 2rem 0;
  margin: 3rem auto;
  width: 90%;
  max-width: 1200px;
  text-align: center;
}

.realisations h2 {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.realisations .separator {
  margin: 20px auto;
}

.realisations-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.realisation-card {
  width: 300px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer; /* Ajout pour indiquer que c'est cliquable */
}

.realisation-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.realisation-image {
  height: 180px;
  overflow: hidden;
}

.realisation-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.realisation-card:hover .realisation-image img {
  transform: scale(1.1);
}

.realisation-content {
  padding: 1.5rem;
  text-align: left;
}

.realisation-content h3 {
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.realisation-content p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Section Contact */
.contact {
  padding: 2rem 0;
  margin: 3rem auto;
  width: 90%;
  max-width: 800px;
  text-align: center;
}

.contact h2 {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.contact .separator {
  margin: 20px auto;
}

.contact-intro {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-form {
  text-align: left;
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.submit-btn {
  background: linear-gradient(90deg, #3498db, #2ecc71);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

/* Styles pour la Modal de Projet */
.project-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
}

.project-modal-container {
  background-color: white;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.project-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.project-modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}

.project-modal-content {
  padding: 1.5rem;
}

.project-modal-image {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
}

.project-modal-image img {
  width: 100%;
  height: auto;
  display: block;
}

.project-modal-details {
  color: #333;
}

.project-modal-details p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.date {
  color: #666;
  font-size: 0.95rem;
}

.technologies {
  margin-bottom: 1.5rem;
}

.technologies ul {
  margin-top: 0.5rem;
  padding-left: 1.5rem;
}

.technologies li {
  margin-bottom: 0.3rem;
}

.project-modal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.btn i {
  margin-right: 0.5rem;
}

.btn-primary {
  background: linear-gradient(90deg, #3498db, #2ecc71);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: #333;
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  padding-top: 2rem;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 2rem 1.5rem 2rem;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.footer-logo img {
  height: 40px;
  margin-bottom: 0.5rem;
}

.footer-logo h3 {
  margin: 0;
  font-size: 1.2rem;
}

.footer-links,
.footer-social {
  margin-bottom: 1rem;
}

.footer-links h4,
.footer-social h4 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #3498db;
}

.social-icons {
  display: flex;
  gap: 0.8rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: #3498db;
  transform: translateY(-3px);
}

.footer-bottom {
  background-color: #222;
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
}

.footer-bottom p {
  margin: 0;
  color: #aaa;
}

.update-date {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 0.5rem;
}

/* Pour les écrans mobiles */
@media (max-width: 768px) {
  .presentation {
    margin: 5rem 1rem;
    min-height: auto;
  }

  .presentation-container {
    flex-direction: column;
  }

  .image-container,
  .text-container {
    width: 100%;
    padding: 2rem;
  }

  .text-container {
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  .separator {
    margin: 20px auto;
  }

  h1 {
    font-size: 2rem;
  }

  #mascotte-presentation {
    max-width: 200px;
  }

  .realisations-container {
    flex-direction: column;
    align-items: center;
  }

  .realisation-card {
    width: 100%;
    max-width: 320px;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .footer-content {
    flex-direction: column;
    padding: 0 1.5rem 2rem 1.5rem;
  }

  .footer-logo,
  .footer-links,
  .footer-social {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .project-modal-links {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
