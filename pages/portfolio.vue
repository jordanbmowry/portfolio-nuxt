<template>
  <main>
    <section
      id="portfolio"
      class="pb-48 scroll-mt-5 layout-section"
      aria-labelledby="heading-portfolio"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 class="title--sm mb-9">Portfolio</h2>

        <div class="flex mb-24 portfolio" style="gap: var(--gap)">
          <img
            src="~/assets/images/portfolio-05.png"
            width="300"
            height="300"
            alt="Serverless TODO Application"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Serverless TODO Application</h3>
            <p class="text">
              The Serverless TODO Application is a full-stack project developed
              as part of the Udacity Cloud Developer Nanodegree program. This
              application allows users to manage their tasks, providing features
              like creating, updating, deleting, and retrieving TODO items. Each
              item can have an optional attachment image.
            </p>
            <p class="text">
              The backend is built with AWS Lambda and managed through the
              Serverless Framework. It uses API Gateway for routing, DynamoDB
              for storage, and S3 for file uploads. User authentication is
              handled through Auth0, ensuring secure access to data.
            </p>
            <p class="text">
              This project showcases my ability to develop scalable, serverless
              applications on AWS, using a combination of infrastructure as
              code, cloud services, and modern development practices.
            </p>
            <a
              href="https://magnificent-eclair-0c01b7.netlify.app/"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
        <div class="flex mb-24 portfolio" style="gap: var(--gap)">
          <img
            src="~/assets/images/portfolio-01.png"
            width="300"
            height="300"
            alt="Restaurant reservations app"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Restaurant Reservations App</h3>
            <p class="text">
              The Restaurant Reservations App is a full-stack application,
              designed as a capstone project for Thinkful's software engineering
              bootcamp. The application is developed to manage and optimize the
              process of restaurant reservations. Its main purpose is to help
              fine dining restaurants coordinate and manage their reservations
              effectively. It is used exclusively by restaurant personnel,
              thereby, making the reservation process easy and organized.
            </p>
            <p class="text">
              Key functionalities of this app include creating and listing
              reservations and tables, creating reservations for future and
              working dates, seating reservations, changing existing
              reservations, and more. These operations are driven by user
              stories simulating restaurant employees' workflows, thereby
              ensuring the application aligns with the real-world needs of its
              users.
            </p>
            <p class="text">
              Built with an array of powerful technologies such as React,
              Bootstrap on the front end, and Node, Express, and PostgreSQL on
              the back end, this application provides a stable, user-friendly,
              and secure platform for managing restaurant reservations.
            </p>
            <a
              href="https://github.com/jordanbmowry/restaurant-reservation"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
        <div class="portfolio">
          <img
            src="~/assets/images/portfolio-02.png"
            width="300"
            height="300"
            alt="We Love Movies app"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">We Love Movies</h3>
            <p class="text">
              We Love Movies is a robust REST API designed to provide
              comprehensive information about movies. The core of the project
              was developed using Node.js and Express.js, and leverages the
              power of Knex.js for effective querying of a PostgreSQL database.
              This backend API is intended to serve as the foundation for
              applications that need access to extensive and reliable movie
              details.
            </p>
            <p class="text">
              The API offers a multitude of endpoints, enabling features such as
              listing all movies, fetching specific movie details, showcasing
              theaters where a movie is playing, and managing reviews. It's
              designed with a keen focus on usability and performance, ensuring
              seamless integration with frontend applications.
            </p>
            <p class="text">
              With an easy setup process, you can run We Love Movies locally,
              making development and testing a breeze. Simply clone the project,
              install dependencies, create your .env file, connect to your
              PostgreSQL database, run migrations, seed data, and finally, start
              the server.
            </p>
            <a
              href="https://github.com/jordanbmowry/we-love-movies"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>

        <div class="portfolio">
          <img
            src="~/assets/images/portfolio-03.png"
            width="300"
            height="300"
            alt="Decoder Ring"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Decoder Ring</h3>
            <p class="text">
              Decoder Ring is an interactive frontend application that
              translates encoded texts using three different methods that have
              been historically significant - Caesar Shift, Polybius Square, and
              Substitution Cipher. The project serves as a capstone from
              Thinkful's curriculum, focusing on the creation of complex
              algorithms and the application of unit testing with Mocha and
              Chai.
            </p>
            <p class="text">
              The application allows users to input the text they wish to decode
              along with additional parameters depending on the decoding method.
              For example, the Caesar Shift requires a shift number that isn't 0
              or less than -25 or greater than 25. The Polybius Square simply
              needs the text, and the Substitution Cipher requires the text and
              an alphabet key with 26 unique characters.
            </p>
            <p class="text">
              The core goal of the project was not only to build a user-friendly
              decoding tool but also to test the ability to write effective unit
              tests. This serves as an excellent showcase of problem-solving
              skills, understanding of various decoding techniques, and
              proficiency in testing code reliability.
            </p>
            <a
              href="https://github.com/jordanbmowry/decoder-ring"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>

        <div class="portfolio">
          <img
            src="~/assets/images/portfolio-04.png"
            width="300"
            height="300"
            alt="Flashcard App"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Flashcard App</h3>
            <p class="text">
              The Flashcard App is a dynamic and engaging frontend application
              designed to help users enhance their studying process. Using this
              tool, you can create, store, and utilize digital flashcards for
              any subject.
            </p>
            <p class="text">
              The application offers a convenient and efficient way to memorize
              new information and review it whenever necessary. Whether you're
              studying for an exam, learning a new language, or simply want to
              retain new information better, the Flashcard App is a practical
              tool for self-education.
            </p>
            <p class="text">
              It is built with a user-friendly interface to ensure a seamless
              learning experience. Get started with your personalized flashcards
              and revolutionize your study habits!
            </p>
            <a
              href="https://github.com/jordanbmowry/Flashcard-o-matic"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.portfolio {
  display: flex;
  gap: var(--gap);
  margin-bottom: 100px;
}

.portfolio:nth-child(odd) .portfolio-screenshot {
  order: 1;
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
