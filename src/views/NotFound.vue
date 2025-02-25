<template>
    <div class="not-found">
      <div class="not-found-content">
        <img src="../assets/404-image.png" alt="Page non trouvée" class="not-found-image">
        <!-- <h1 class="not-found-title">404</h1> -->
        <p class="not-found-text">Oups ! La page que vous recherchez semble avoir disparu.</p>
        <router-link to="/" class="not-found-button">Retour à l'accueil</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f8f9fa;
    text-align: center;
    padding: 2rem;
  }
  
  .not-found-content {
    max-width: 500px;
  }
  
  .not-found-image {
  max-width: 300px;
  margin-top: 5rem; /* créer de l'espace au-dessus */
  margin-bottom: 2rem;
}
  
  .not-found-title {
    font-size: 6rem;
    color: #333;
    margin: 0;
    line-height: 1;
  }
  
  .not-found-text {
    font-size: 1.2rem;
    color: #666;
    margin: 1.5rem 0 2rem;
  }
  
  .not-found-button {
    display: inline-block;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .not-found-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    .not-found-title {
      font-size: 4rem;
    }
    
    .not-found-image {
      max-width: 200px;
    }
  }
  </style>