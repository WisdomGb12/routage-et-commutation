
// ============================================
// QUIZ ENGINE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});

function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    const phaseId = quizContainer.dataset.phase;
    const data = window.quizData[phaseId];

    if (!data) {
        quizContainer.innerHTML = '<div class="alert alert-warning">Quiz loading error...</div>';
        return;
    }

    let userAnswers = {}; // { questionId: [selectedOptionIndex] }
    let isSubmitted = false;
    let score = 0;

    // Render Quiz Form
    function renderQuiz() {
        let html = `
            <div class="quiz-header">
                <h3>${data.title}</h3>
                <p>Testez vos connaissances ! Sélectionnez la ou les bonnes réponses.</p>
            </div>
            <div class="quiz-questions">
        `;

        data.questions.forEach((q, index) => {
            html += `
                <div class="question-card" id="q-${q.id}">
                    <div class="question-header">
                        <span class="question-number">Question ${index + 1}</span>
                        <h4 class="question-text">${q.question}</h4>
                    </div>
                    <div class="options-list">
            `;

            q.options.forEach((opt, optIndex) => {
                const inputType = q.correct.length > 1 ? 'checkbox' : 'radio';
                const isSelected = userAnswers[q.id]?.includes(optIndex);

                // Determine class for styling results
                let resultClass = '';
                if (isSubmitted) {
                    if (q.correct.includes(optIndex)) {
                        resultClass = 'correct-option'; // Always highlight correct answers
                    } else if (isSelected && !q.correct.includes(optIndex)) {
                        resultClass = 'wrong-option'; // Highlight wrong selections
                    }
                }

                html += `
                    <label class="option-item ${resultClass} ${isSelected ? 'selected' : ''}">
                        <input type="${inputType}" 
                               name="q-${q.id}" 
                               value="${optIndex}" 
                               ${isSelected ? 'checked' : ''}
                               ${isSubmitted ? 'disabled' : ''}
                               onchange="handleOptionChange(${q.id}, ${optIndex}, '${inputType}')">
                        <span class="option-text">${opt}</span>
                        ${isSubmitted && q.correct.includes(optIndex) ? '<span class="result-icon">✓</span>' : ''}
                        ${isSubmitted && isSelected && !q.correct.includes(optIndex) ? '<span class="result-icon">✗</span>' : ''}
                    </label>
                `;
            });

            html += `</div>`; // Close options-list

            // Explanation (Hidden until submitted)
            if (isSubmitted) {
                html += `
                    <div class="explanation ${userAnswers[q.id]?.toString() === q.correct.toString() ? 'success' : 'info'}">
                        <strong>Explication :</strong> ${q.explanation}
                    </div>
                `;
            }

            html += `</div>`; // Close question-card
        });

        html += `</div>`; // Close quiz-questions

        // Action Buttons
        html += `
            <div class="quiz-actions">
                ${!isSubmitted ?
                `<button class="btn-primary" onclick="submitQuiz()">Valider mes réponses</button>` :
                `<div class="result-summary">
                        <span class="score-display">Score : ${score}%</span>
                        <p>${getFeedbackMessage(score)}</p>
                        <button class="btn-secondary" onclick="resetQuiz()">Recommencer le Quiz</button>
                     </div>`
            }
            </div>
        `;

        quizContainer.innerHTML = html;
    }

    // Handle Option Selection
    window.handleOptionChange = (questionId, optionIndex, type) => {
        if (isSubmitted) return;

        if (type === 'radio') {
            userAnswers[questionId] = [optionIndex];
        } else {
            // Checkbox logic
            if (!userAnswers[questionId]) userAnswers[questionId] = [];
            const idx = userAnswers[questionId].indexOf(optionIndex);
            if (idx > -1) {
                userAnswers[questionId].splice(idx, 1);
            } else {
                userAnswers[questionId].push(optionIndex);
            }
        }
        // Re-render to update classes (optional, simpler to just let CSS handle :checked but for custom styles we might want JS)
        // With current render logic, re-rendering might lose focus or feel jumpy. 
        // Optimization: Don't re-render whole quiz, just toggle classes on labels.
        updateSelectionClasses(questionId, optionIndex, type);
    };

    function updateSelectionClasses(questionId, optionIdx, type) {
        const container = document.getElementById(`q-${questionId}`);
        const inputs = container.querySelectorAll('input');

        inputs.forEach(input => {
            if (input.checked) {
                input.closest('.option-item').classList.add('selected');
            } else {
                input.closest('.option-item').classList.remove('selected');
            }
        });
    }

    // Calculate Score
    window.submitQuiz = () => {
        // Validation: Check if all questions are answered
        /* 
        // Optional: Force answer all
        if (Object.keys(userAnswers).length < data.questions.length) {
            alert("Veuillez répondre à toutes les questions avant de valider.");
            return;
        }
        */

        let correctCount = 0;
        data.questions.forEach(q => {
            const userAns = userAnswers[q.id] || [];
            // Sort arrays to compare
            const sortedUser = [...userAns].sort();
            const sortedCorrect = [...q.correct].sort();

            if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
                correctCount++;
            }
        });

        score = Math.round((correctCount / data.questions.length) * 100);
        isSubmitted = true;
        renderQuiz(); // Re-render to show results

        // Scroll to results
        document.querySelector('.quiz-actions').scrollIntoView({ behavior: 'smooth' });
    };

    window.resetQuiz = () => {
        userAnswers = {};
        isSubmitted = false;
        score = 0;
        renderQuiz();
    };

    function getFeedbackMessage(score) {
        if (score === 100) return "Excellent ! Vous maîtrisez parfaitement ce chapitre ! 🏆";
        if (score >= 80) return "Très bon travail ! Quelques petits détails à revoir. 👏";
        if (score >= 50) return "Pas mal, mais vous pouvez faire mieux. Relisez le cours ! 👍";
        return "Oula... Il faut revoir le cours avant de passer à la suite. 📚";
    }

    // Initial render
    renderQuiz();
}
