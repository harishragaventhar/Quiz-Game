import React, { useState } from 'react';
import './secondpage.css'

 function Secondpage() {
	const questions = [
		{
			questionText: 'Which country hosted the 2018 FIFA World Cup?',
			answerOptions: [
				{ answerText: 'Russia', isCorrect: true },
				{ answerText: 'Saudi Arabia', isCorrect: false },
				{ answerText: 'US', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
				
			],
		},
		{
			questionText: 'Who won the 2015 Formula 1 World Championship?',
			answerOptions: [
				{ answerText: 'Nico Rosberg', isCorrect: false },
				{ answerText: 'Sebastian Vettel', isCorrect: false },
				{ answerText: 'Lewis Hamilton', isCorrect: true },
				{ answerText: 'Jenson Button', isCorrect: false },
			],
		},
		{
			questionText: 'Who won the 2011 Cricket World Cup?',
			answerOptions: [
				{ answerText: 'Pakistan', isCorrect: false },
				{ answerText: 'Sri Lanka', isCorrect: false },
				{ answerText: 'New Zealand', isCorrect: false },
				{ answerText: 'India', isCorrect: true },
			],
		},
		{
			questionText: 'Who won the UEFA Champions League in 2019?',
			answerOptions: [
				{ answerText: 'Real Madrid', isCorrect: false },
				{ answerText: 'Liverpool', isCorrect: true },
				{ answerText: 'Barcelona', isCorrect: false },
				{ answerText: 'Tottenham', isCorrect: false },
			],
		},
		{
			questionText: 'Which player holds the NHL record of 2,857 points?',
			answerOptions: [
				{ answerText: 'Sidney Crosby', isCorrect: false },
				{ answerText: 'Mario Lemieux', isCorrect: false },
				{ answerText: 'Gordie Howe', isCorrect: false },
				{ answerText: 'Wayne Gretzky', isCorrect: true },
			],
		}
	];
	const getUserName = localStorage.getItem("getUserName");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score +10);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			
			setShowScore(true);
		}
	};

	const correctAnswers = [];

for (const question of questions) {
  const { answerOptions } = question;

  for (const answer of answerOptions) {
    if (answer.isCorrect) {
      correctAnswers.push(answer.answerText);
      break; // Assuming only one correct answer per question
    }
  }
}

console.log('Correct Answers:', correctAnswers);
var questno = 1;
	return (
		<>
		
		<div className='app text-white ml-auto mr-auto container-fluid'>
			{showScore ? (
				<div className='score-section'>
					<p className='font-weight-bold'>Welldone {getUserName} You scored {score} out of {50}</p>
					<h1 className='font-weight-bold'>Review</h1>
					
					<div className='review-section'>
						{questions.map((value,index) => (
						<>
							<p className=' mr-auto ml-auto reviewquestions'>{questno++}.{value.questionText}</p>
							
							</>
							
						))}
						<h2>Answers</h2>
						<li className='mr-auto ml-auto'>{correctAnswers[0]}</li>
						<li className='mr-auto ml-auto'>{correctAnswers[1]}</li>
						<li className='mr-auto ml-auto'>{correctAnswers[2]}</li>
						<li className='mr-auto ml-auto'>{correctAnswers[3]}</li>
						<li className='mr-auto ml-auto'>{correctAnswers[4]}</li>
					</div>

				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>
							<h4 className='text-center'>{questions[currentQuestion].questionText}</h4>
							</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						
							<button className='col-lg-6 mr-auto ml-auto' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		
		</>
	);
}
export default Secondpage