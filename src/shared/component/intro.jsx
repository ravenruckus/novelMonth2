// @flow

import React from 'react'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import LoginButton from './login-button'




const Intro = () =>

  <div className="intro">

    <div className="intro-header">
     <img src="https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/blue_pen.svg">
     </img>
     <PageHeader>Write a Novel </PageHeader>
  </div>
    <h4>* Write a novel in a month or take your time tackling one tiny piece at a time.</h4>
    <p>Have you ever thought about writing a novel? It's probably one of the funnest things you could do. I know it sounds overwhelming but it doesn't have to be. That is what this web app is for, to make sure it's not overwhelming. </p>

    <h3>Why would writing a novel be fun? </h3>
    <p>Well have you ever read a book or watched a movie and thought, I want to see it this way? Well you can make that happen. Plus when you let go and write what you see in your head you might be surprized by what colorful things you come up with.   Without art life can become too black and white like the opening scenes in the Wizard of OZ. </p>

    <p><i>"Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else. When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also."</i>
  </p>

  <h3> Are You Ready For a Hero's Journey?</h3>
  <p>Joseph Campbell spent much of his life studying the hero's journey found in mythology. In his book <a href="https://www.amazon.com/Thousand-Faces-Collected-Joseph-Campbell/dp/1577315936/ref=sr_1_1?ie=UTF8&qid=1491158358&sr=8-1&keywords=joseph+campbell+hero+with+a+thousand+faces" target="_blank">The Hero With a Thousand Faces </a> we learn that the story of the hero is told over and over again. The heroes' journey influenced the creation of Star Wars, Titanic, Harry Potter, The Full Monty, and many many other movies and books.
 </p>

  <h3>How Can You Incorporate the Hero's Journey into Your Stories?</h3>
  <p>Christopher Vogler, who has worked with Disney solving story problems for movies such as The Lion King, makes it simple for you and I to incorporate the heroes' journey into our stories. He clearly explains the twelve stages of the hero's journey in his book  <a href="https://www.amazon.com/Writers-Journey-Mythic-Structure-3rd/dp/193290736X/ref=sr_1_1?ie=UTF8&qid=1491158305&sr=8-1&keywords=writers+journey" target="_blank">The Writers Journey</a>. We are going to use the help of Joseph Campbell, Christoper Vogler, the Wizard of Oz, and knowledge from my past writing classes to write a novel or ten novels. As many as we feel like. By the time we are done we are going to know intuitively how a novel, following the hero's journey, is structured, know how to use language to keep readers reading, and how to use our emotions to draw people into the magical worlds of our minds. </p>

  <h3>What! Emotions?</h3>
  <p>Yeah. Thank you <a href="https://www.ibm.com/watson/developercloud/tone-analyzer.html" target="_blank"> IBM Watson</a> for helping us out here. With the power of data science and machine learning we are going to leverage IBM Watson's Tone analysis service to see what emotions our writing most likely exhibits. That's right. Just write your piece and click the button and you will be able to see what score Watson gave each of your sentences.</p>

  <div className="color-instructions">
  <h4>Click on a sentence to see the emotion scores Watson gave it.</h4>
  <img src="https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/click_emotions3.png" alt="click to see emotions" />
  </div>

   <div className="color-instructions">
  <h4 style={{color: 'rgb(13, 87, 198)'}}> View the emotional range of your piece at a glance. </h4>
  <p>Sentences high in an emotion are highlighted.</p>
    <img src="https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/emotion_colors2.png" />
  </div>


  <h3>How?</h3>
  <ul>
    <li>Once you log in you will be directed to the story initiation page where you will choose the title for your story.</li>
    <li>You will then be directed to your work area (or play area).</li>
    <li> The Wizard of Oz is broken up into 24 sections. Do a section a day if you are shooting to finish a novel in one month.</li>
    <li>Each section is broken up into three micro pieces.</li>
    <li>Each micro piece is accompanied by a snip bit explaining what part of the hero's journey this piece most likely is a part of.</li>
    <li>Each micro piece is also accompanied by writing tips to help you decide what to focus your writing on.</li>
    <li>There is a space for you to enter your writing.</li>
    <li>Click a the button and you will see an emotional analysis of your writing. </li>
  </ul>


<div className="start">
  <h2>Lets Get Started</h2>
    <LoginButton />
 </div>

 </div>

export default Intro
