import './portfolio.scss';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      'HEALTHIT-Online HEALTH social system that is powered by Artificial Intelligence, contains Brain Tumor and Pneumonia MRI Scanner,More diseases still on research.',
    github: 'https://github.com',
    demo: 'https://youtu.be/TqrXUv2MjK8'
  },
  {
    id: 2,
    image: IMG2,
    title:
      'Facial id recognition system that leverages the power of Artificial Intelligence to help detect students joining the school',
    github: 'https://github.com/Godwin45/DIGITAL-FACIAL-ID',
    demo: 'https://youtu.be/hMe2S-FOLlg'
  },
  {
    id: 3,
    image: IMG3,
    title:
      'Nairobi Stock Market Prediction App - Web application that shows trends in stock of major companies in Nairobi and can give a prediction projection of upto 4 years',
    github: 'https://github.com/Godwin45/Nairobi-Stock-Prediction-App',
    demo: 'https://youtu.be/R8HUzeu2Ffc'
  },
  {
    id: 4,
    image: IMG4,
    title:
      'HPA - Height Prediction App that predicts someones height based on their Age',
    github: 'https://github.com/Godwin45/goddy-linear-regression',
    demo: 'https://youtu.be/X40YVHgGTgc'
  },
  {
    id: 5,
    image: IMG5,
    title:
      'NLP Sentiment Analysis that uses Deep Learning, Word2Vec models and BERTMODELS',
    github: 'https://github.com',
    demo: 'https://youtu.be/IYKqkQpAu1s'
  },
  {
    id: 6,
    image: IMG6,
    title:
      'Animal Prediction Web App-Web Application that predicts type of animals based on their Image',
    github: 'https://github.com/Godwin45/Animal-Prediction-Web-App',
    demo: 'https://www.youtube.com/watch?v=G30I_EP43Hg'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
