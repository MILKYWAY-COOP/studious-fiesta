import './services.scss';
import { BiCheck } from 'react-icons/bi';
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>ARTIFICIAL INTELLIGENCE</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Natural language processing (NLP) - Use state of the art
                algorithms, such as hugging face transformers, fastai and
                traditional NLP algorithms and deploy with AWS using EC2
                instance.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Computer Vision – Use tensorflow, opencv,mediapipe and keras api
                to build computer vision web apps with html, css and javascript
                and deploy it for production.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Reinforcement Learning - I build intelligent agents on virtual
                environments to maximize reward on particular situations using
                state of the art algoritms like DDPG.
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>DATA SCIENCE & ML</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Build stock market predictor models using RNN, FBProphet and
                streamlit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Use EDA for robust data analysis and deploy the graphical
                analysis using flask for web apps.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use Tableau for quick analysis of Data.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Deep Understanding of all machine learning algorithms like
                supervised and unsupervised ml models for buiding data predictor
                models.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Build supervised and unsupervised models to understand data and
                create predictors for effective data task performance.
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>MACHINE LEARNING TUTOR</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Helped Univesity students in their Projects related to machine
                Learning and Artificial Intelligence and improved the overall
                performance of their models.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Have 2 years of experience in teaching Machine Learning to
                students with hands on projects that would enable them to meet
                industrial needs.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Improved performance to students who studied machine learning in
                the university as a unit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Created complex AI projects with students who took part in my
                Machine Learning program to have a wide view of understanding
                complex data.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
