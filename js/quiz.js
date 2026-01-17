
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

    // State Variables
    let userAnswers = {}; // { questionId: [selectedOptionIndex] }
    let isSubmitted = false;
    let score = 0;
    let isExpanded = false; // Track locally if quiz is open

    // Load from LocalStorage
    const storageKey = `quiz_state_${phaseId}`;
    const savedState = localStorage.getItem(storageKey);

    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            userAnswers = parsed.userAnswers || {};
            isSubmitted = parsed.isSubmitted || false;
            score = parsed.score || 0;
            // We do NOT load isExpanded, user wants it closed by default unless interacting
        } catch (e) {
            console.error("Error loading quiz state", e);
        }
    }

    // Save to LocalStorage
    function saveState() {
        const state = {
            userAnswers,
            isSubmitted,
            score
        };
        localStorage.setItem(storageKey, JSON.stringify(state));
    }

    // Render Quiz Form
    function renderQuiz() {
        // Calculate class based on state
        const expandedClass = isExpanded ? '' : 'collapsed';
        const chevronClass = isExpanded ? 'fa-chevron-up' : 'fa-chevron-down';

        let html = `
            <div class="quiz-header">
                <div class="quiz-title-row">
                    <h3>${data.title}</h3>
                    <button class="quiz-toggle-btn" onclick="toggleQuizContent(this)" aria-label="Réduire/Agrandir le quiz">
                        <i class="fas ${chevronClass}"></i>
                    </button>
                </div>
                <p class="quiz-subtitle">Testez vos connaissances ! Sélectionnez la ou les bonnes réponses.</p>
            </div>
            <div class="quiz-content-wrapper ${expandedClass}">
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
            </div> <!-- Close quiz-content-wrapper -->
        `;

        quizContainer.innerHTML = html;

        // Restore scroll position if needed (optional)
    }

    // Toggle Quiz Content Visibility
    window.toggleQuizContent = (btn) => {
        // Toggle Local State
        isExpanded = !isExpanded;

        // Update DOM without full re-render for smooth animation
        const wrapper = btn.closest('.quiz-header').nextElementSibling;
        const icon = btn.querySelector('i');

        if (isExpanded) {
            wrapper.classList.remove('collapsed');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            wrapper.classList.add('collapsed');
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    };

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

        saveState(); // Save to local storage
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
        saveState(); // Save submitted state

        // Ensure expanded when showing results
        isExpanded = true;
        renderQuiz();

        // Scroll to results
        setTimeout(() => {
            document.querySelector('.quiz-actions').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    window.resetQuiz = () => {
        if (confirm("Voulez-vous vraiment effacer vos réponses et recommencer ?")) {
            userAnswers = {};
            isSubmitted = false;
            score = 0;
            saveState(); // Clear state in storage
            renderQuiz();
            // Scroll back to top of quiz
            document.querySelector('.quiz-header').scrollIntoView({ behavior: 'smooth' });
        }
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
