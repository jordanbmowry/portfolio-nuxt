<template>
  <main>
    <section
      id="portfolio"
      class="pb-48 scroll-mt-5 layout-section"
      aria-labelledby="heading-portfolio"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 class="title--sm mb-9">Portfolio</h2>
        <PortfolioItem
          v-for="(item, index) in portfolioItems"
          :key="index"
          :imageSrc="item.imageSrc"
          :altText="item.altText"
          :title="item.title"
          :description="item.description"
          :link="item.link"
          :index="index"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import PortfolioItem from '@/components/PortfolioItem.vue';

const portfolioItems = [
  {
    imageSrc: '/images/portfolio-05.png',
    altText: 'Serverless TODO Application',
    title: 'Serverless TODO Application',
    description: [
      'The Serverless TODO Application is a full-stack project developed as part of the Udacity Cloud Developer Nanodegree program. This application allows users to manage their tasks, providing features like creating, updating, deleting, and retrieving TODO items. Each item can have an optional attachment image.',
      'The backend is built with AWS Lambda and managed through the Serverless Framework. It uses API Gateway for routing, DynamoDB for storage, and S3 for file uploads. User authentication is handled through Auth0, ensuring secure access to data.',
      'This project showcases my ability to develop scalable, serverless applications on AWS, using a combination of infrastructure as code, cloud services, and modern development practices.',
    ],
    link: 'https://magnificent-eclair-0c01b7.netlify.app/',
  },
  {
    imageSrc: '/images/portfolio-01.png',
    altText: 'Restaurant reservations app',
    title: 'Restaurant Reservations App',
    description: [
      "The Restaurant Reservations App is a full-stack application, designed as a capstone project for Thinkful's software engineering bootcamp. The application is developed to manage and optimize the process of restaurant reservations. Its main purpose is to help fine dining restaurants coordinate and manage their reservations effectively.",
      'Key functionalities include creating and listing reservations, seating reservations, and changing existing reservations, ensuring the application aligns with real-world needs.',
      'Built with React, Bootstrap, Node, Express, and PostgreSQL, this app provides a stable, user-friendly, and secure platform for managing restaurant reservations.',
    ],
    link: 'https://github.com/jordanbmowry/restaurant-reservation',
  },
  {
    imageSrc: '/images/portfolio-02.png',
    altText: 'We Love Movies app',
    title: 'We Love Movies',
    description: [
      'We Love Movies is a robust REST API designed to provide comprehensive information about movies. The project was developed using Node.js, Express.js, and Knex.js for querying a PostgreSQL database.',
      'The API offers endpoints to list movies, fetch specific movie details, showcase theaters where a movie is playing, and manage reviews.',
      'You can run the API locally by cloning the repository, installing dependencies, and setting up the PostgreSQL database.',
    ],
    link: 'https://github.com/jordanbmowry/we-love-movies',
  },
  {
    imageSrc: '/images/portfolio-03.png',
    altText: 'Decoder Ring',
    title: 'Decoder Ring',
    description: [
      'Decoder Ring is an interactive frontend application that translates encoded texts using three historically significant methods: Caesar Shift, Polybius Square, and Substitution Cipher.',
      'The project focuses on the creation of complex algorithms and the application of unit testing with Mocha and Chai.',
      'This app allows users to decode text using various parameters, showcasing my problem-solving skills and proficiency in testing code reliability.',
    ],
    link: 'https://github.com/jordanbmowry/decoder-ring',
  },
  {
    imageSrc: '/images/portfolio-04.png',
    altText: 'Flashcard App',
    title: 'Flashcard App',
    description: [
      'The Flashcard App is a dynamic frontend application designed to help users enhance their studying process by creating, storing, and using digital flashcards for any subject.',
      'The app offers a convenient way to memorize and review information, built with a user-friendly interface to ensure a seamless learning experience.',
    ],
    link: 'https://github.com/jordanbmowry/Flashcard-o-matic',
  },
];
</script>

<style scoped>
.portfolio {
  display: flex;
  gap: var(--gap);
  margin-bottom: 100px;
}

@media (max-width: 37.5rem) {
  .portfolio {
    display: block;
  }
}

.portfolio-screenshot {
  border-radius: 50%;
  width: clamp(175px, 20vw, 300px);
  height: clamp(175px, 20vw, 300px);
}
</style>
