const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const questionList = [
	{
		question: 'What is 2 + 2?',
		answers: [
			{ text: '4', correct: true },
			{ text: '22', correct: false },
		],
	},
	{
		question: 'Is web development fun?',
		answers: [
			{ text: 'Kinda', correct: false },
			{ text: 'YES!!!', correct: true },
			{ text: 'Um no', correct: false },
			{ text: 'IDK', correct: false },
		],
	},
	{
		question: 'What is 4 * 2?',
		answers: [
			{ text: '6', correct: false },
			{ text: '8', correct: true },
			{ text: 'Yes', correct: false },
		],
	},
]

let currentQuestionIndex

function startGame() {
	startButton.classList.add('hide')
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}

function showQuestion(item) {
	questionElement.innerText = item.question
	item.answers.forEach((answer) => {
		const button = document.createElement('button')
		button.innerText = answer.text

		if (answer.correct) {
			button.dataset.correct = true
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function setNextQuestion() {
	resetState()
	showQuestion(questionList[currentQuestionIndex])
}

function setStatusClass(element) {
	if (element.dataset.correct) {
		element.classList.add('color-correct')
	} else {
		element.classList.add('color-wrong')
	}
}

function selectAnswer() {
	Array.from(answerButtonsElement.children).forEach((button) => {
		setStatusClass(button)
	})
	if (questionList.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide')
	} else {
		startButton.innerText = 'Restart'
		startButton.classList.remove('hide')
	}
}

nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

function resetState() {
	nextButton.classList.add('hide')

	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

startButton.addEventListener('click', startGame)
