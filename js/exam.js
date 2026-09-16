/**
 * MOTEUR D'EXAMEN BLANC CCNA — 100 QUESTIONS
 * Routage & Commutation — Formation Complète
 */

(function () {
    'use strict';

    // --- Variables d'état global de l'examen ---
    let examQuestions = []; // Questions sélectionnées et mélangées pour la session
    let currentIndex = 0;   // Index de la question active (0 à N-1)
    let userAnswers = {};   // { questionId: [selectedIndices] }
    let flaggedQuestions = new Set(); // Set des questionId marquées pour relecture
    let examMode = 'full';  // 'full' (100), 'express' (30), 'half' (50)
    let timerDuration = 180 * 60; // en secondes (180 min = 3h par défaut)
    let timerRemaining = 180 * 60;
    let timerInterval = null;
    let timerPaused = false;
    let examStartTime = null;
    let isExamFinished = false;

    // Initialisation au chargement du DOM
    document.addEventListener('DOMContentLoaded', () => {
        initExamApp();
    });

    function initExamApp() {
        renderPreparationDashboard();
        setupEventListeners();
    }

    // =========================================================================
    // 1. TABLEAU DE BORD DE PRÉPARATION (ACCUEIL)
    // =========================================================================

    function renderPreparationDashboard() {
        const dashboardContainer = document.getElementById('exam-dashboard');
        if (!dashboardContainer) return;

        // Récupérer l'état des 10 phases depuis le localStorage
        const phaseStatuses = [];
        let completedCount = 0;
        let totalScoreSum = 0;
        let totalQuestionsAttempted = 0;

        for (let i = 1; i <= 10; i++) {
            const key = `quiz_state_phase${i}`;
            const raw = localStorage.getItem(key);
            let status = 'not_started';
            let score = 0;
            let totalQ = 10;

            if (raw) {
                try {
                    const parsed = JSON.parse(raw);
                    if (parsed.isSubmitted) {
                        status = 'completed';
                        score = parsed.score || 0;
                        completedCount++;
                        totalScoreSum += score;
                        totalQuestionsAttempted += totalQ;
                    } else if (parsed.userAnswers && Object.keys(parsed.userAnswers).length > 0) {
                        status = 'in_progress';
                    }
                } catch (e) {
                    console.error(`Erreur lecture ${key}:`, e);
                }
            }

            const phaseMeta = examData[`phase${i}`] || { title: `Phase ${i}`, color: '#4f46e5' };
            phaseStatuses.push({
                phaseNum: i,
                title: phaseMeta.title,
                color: phaseMeta.color,
                status: status,
                score: score,
                totalQ: totalQ
            });
        }

        const readinessPercent = Math.round((completedCount / 10) * 100);

        let readinessBadgeClass = 'readiness-low';
        let readinessMsg = 'Il est recommandé de terminer les modules de cours avant de tenter l\'épreuve complète, mais vous pouvez démarrer quand vous le souhaitez.';
        if (readinessPercent >= 80) {
            readinessBadgeClass = 'readiness-high';
            readinessMsg = 'Excellent niveau de préparation ! Vous disposez des bases requises pour aborder l\'examen final avec succès.';
        } else if (readinessPercent >= 40) {
            readinessBadgeClass = 'readiness-med';
            readinessMsg = 'Bonne avancée dans les modules. Vous pouvez tester vos compétences pour identifier les points à consolider.';
        }

        dashboardContainer.innerHTML = `
            <div class="exam-welcome-hero">
                <div class="welcome-header-content">
                    <span class="exam-hero-badge"><i class="fas fa-graduation-cap"></i> Examen Blanc Officiel Cisco CCNA 200-301</span>
                    <h1 class="exam-hero-title">Grand Quiz de Fin de Révision</h1>
                    <p class="exam-hero-desc">
                        Mesurez votre niveau de maîtrise sur l'ensemble du cursus avec <strong>100 questions inédites</strong> 
                        (10 par phase), rigoureusement conçues et mélangées aléatoirement pour reproduire les conditions réelles de certification.
                    </p>
                </div>

                <div class="readiness-card ${readinessBadgeClass}">
                    <div class="readiness-meta">
                        <div class="readiness-circle">
                            <span class="readiness-num">${readinessPercent}%</span>
                            <span class="readiness-label">Préparation</span>
                        </div>
                        <div class="readiness-info">
                            <h3>Diagnostic de Préparation aux Modules</h3>
                            <p>${readinessMsg}</p>
                            <div class="readiness-substats">
                                <span><i class="fas fa-check-circle"></i> ${completedCount} / 10 quiz de phase complétés</span>
                                ${completedCount > 0 ? `<span><i class="fas fa-chart-line"></i> Moyenne cours : ${Math.round((totalScoreSum / totalQuestionsAttempted) * 100)}%</span>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grille de progression par Phase -->
            <div class="exam-phases-summary">
                <div class="section-title-row">
                    <h3><i class="fas fa-tasks"></i> État d'avancement par module (Quiz de cours)</h3>
                    <div class="storage-tools">
                        <button class="btn-tool" id="btn-export-storage" title="Sauvegarder ma progression en JSON">
                            <i class="fas fa-download"></i> Exporter
                        </button>
                        <button class="btn-tool" id="btn-import-storage" title="Restaurer une sauvegarde">
                            <i class="fas fa-upload"></i> Importer
                        </button>
                        <input type="file" id="import-file-input" accept=".json" style="display:none;">
                    </div>
                </div>

                <div class="phases-grid">
                    ${phaseStatuses.map(p => `
                        <div class="phase-status-item status-${p.status}" style="--p-color: ${p.color}">
                            <div class="phase-status-top">
                                <span class="phase-number-tag">P${p.phaseNum}</span>
                                <span class="phase-status-icon">
                                    ${p.status === 'completed' ? '<i class="fas fa-check-circle"></i>' : (p.status === 'in_progress' ? '<i class="fas fa-hourglass-half"></i>' : '<i class="far fa-circle"></i>')}
                                </span>
                            </div>
                            <div class="phase-status-title" title="${p.title}">${p.title.split('—')[1] || p.title}</div>
                            <div class="phase-status-footer">
                                ${p.status === 'completed' ? `<span class="score-pill">${p.score}/${p.totalQ} pts</span>` : `<span class="score-pill pending">${p.status === 'in_progress' ? 'En cours' : 'Non tenté'}</span>`}
                                <a href="phase${p.phaseNum}-${getPhaseSlug(p.phaseNum)}.html" class="phase-review-link" title="Ouvrir le cours">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Configuration & Lancement de l'épreuve -->
            <div class="exam-launcher-card">
                <div class="launcher-header">
                    <h3><i class="fas fa-sliders-h"></i> Configuration de l'épreuve</h3>
                    <p>Sélectionnez le format qui convient à votre temps disponible :</p>
                </div>

                <div class="launcher-modes">
                    <label class="mode-card active" data-mode="full">
                        <input type="radio" name="exam-mode" value="full" checked>
                        <div class="mode-content">
                            <div class="mode-badge-rec">Recommandé</div>
                            <div class="mode-icon"><i class="fas fa-certificate"></i></div>
                            <div class="mode-title">Examen Blanc Complet</div>
                            <div class="mode-details">100 Questions • 10 par phase • 180 min</div>
                            <p>Simulation intégrale du CCNA. Évalue avec précision votre préparation finale.</p>
                        </div>
                    </label>

                    <label class="mode-card" data-mode="half">
                        <input type="radio" name="exam-mode" value="half">
                        <div class="mode-content">
                            <div class="mode-icon"><i class="fas fa-layer-group"></i></div>
                            <div class="mode-title">Session Intermédiaire</div>
                            <div class="mode-details">50 Questions • 5 par phase • 60 min</div>
                            <p>Idéal pour un bilan complet en 1 heure de révision condensée.</p>
                        </div>
                    </label>

                    <label class="mode-card" data-mode="express">
                        <input type="radio" name="exam-mode" value="express">
                        <div class="mode-content">
                            <div class="mode-icon"><i class="fas fa-bolt"></i></div>
                            <div class="mode-title">Entraînement Express</div>
                            <div class="mode-details">30 Questions • 3 par phase • 35 min</div>
                            <p>Session rapide pour tester vos réflexes sur toutes les thématiques.</p>
                        </div>
                    </label>
                </div>

                <div class="launcher-options-row">
                    <div class="option-group">
                        <label for="timer-select"><i class="fas fa-stopwatch"></i> Minuteur :</label>
                        <select id="timer-select" class="exam-select">
                            <option value="180" selected>180 minutes (3h — Chrono officiel CCNA)</option>
                            <option value="90">90 minutes (Mode intensif)</option>
                            <option value="60">60 minutes</option>
                            <option value="0">Chronomètre libre (Sans limite de temps)</option>
                        </select>
                    </div>

                    <div class="option-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="shuffle-options-check" checked>
                            <span>Mélanger également l'ordre des options A, B, C, D</span>
                        </label>
                    </div>
                </div>

                <div class="launcher-actions">
                    <button id="btn-start-exam" class="btn-start-large">
                        <span>Démarrer l'Épreuve</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        // Événements pour les cartes de mode
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                card.querySelector('input[type="radio"]').checked = true;
                examMode = card.dataset.mode;
            });
        });

        // Bouton Démarrer
        const startBtn = document.getElementById('btn-start-exam');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                startExam();
            });
        }

        // Export de la progression
        const exportBtn = document.getElementById('btn-export-storage');
        if (exportBtn) {
            exportBtn.addEventListener('click', exportStorageData);
        }

        // Import de la progression
        const importBtn = document.getElementById('btn-import-storage');
        const importInput = document.getElementById('import-file-input');
        if (importBtn && importInput) {
            importBtn.addEventListener('click', () => importInput.click());
            importInput.addEventListener('change', importStorageData);
        }
    }

    function getPhaseSlug(num) {
        const slugs = {
            1: 'fondamentaux',
            2: 'commutation',
            3: 'routage',
            4: 'inter-vlan',
            5: 'securite',
            6: 'avance',
            7: 'wireless',
            8: 'automatisation',
            9: 'cloud',
            10: 'monitoring'
        };
        return slugs[num] || 'cours';
    }

    // =========================================================================
    // 2. GÉNÉRATION ET GESTION DU CYCLE D'EXAMEN
    // =========================================================================

    function startExam() {
        // Déterminer le nombre de questions par phase selon le mode
        let countPerPhase = 10;
        if (examMode === 'express') countPerPhase = 3;
        else if (examMode === 'half') countPerPhase = 5;

        // Récupérer le réglage du minuteur
        const timerSelect = document.getElementById('timer-select');
        const minutes = timerSelect ? parseInt(timerSelect.value, 10) : 180;
        timerDuration = minutes > 0 ? minutes * 60 : 0;
        timerRemaining = timerDuration;

        const shuffleOpts = document.getElementById('shuffle-options-check')?.checked ?? true;

        // Sélectionner les questions dans chaque phase
        examQuestions = [];
        for (let i = 1; i <= 10; i++) {
            const pKey = `phase${i}`;
            const pData = examData[pKey];
            if (!pData || !pData.questions) continue;

            // Tirer au sort countPerPhase parmi les questions de la phase
            const shuffledPool = shuffleArray([...pData.questions]);
            const selected = shuffledPool.slice(0, countPerPhase).map(q => {
                const copy = JSON.parse(JSON.stringify(q));
                copy.phaseNum = i;
                copy.phaseTitle = pData.title;
                copy.phaseColor = pData.color;

                // Mélanger les options si demandé
                if (shuffleOpts && copy.options && copy.options.length > 1) {
                    const originalCorrect = copy.correct;
                    const mappedOptions = copy.options.map((opt, idx) => ({
                        text: opt,
                        isCorrect: originalCorrect.includes(idx)
                    }));
                    const shuffledMapped = shuffleArray(mappedOptions);
                    copy.options = shuffledMapped.map(o => o.text);
                    copy.correct = [];
                    shuffledMapped.forEach((o, newIdx) => {
                        if (o.isCorrect) copy.correct.push(newIdx);
                    });
                }
                return copy;
            });
            examQuestions.push(...selected);
        }

        // Mélanger l'ensemble des questions sélectionnées (Fisher-Yates)
        examQuestions = shuffleArray(examQuestions);

        // Réinitialiser les états
        currentIndex = 0;
        userAnswers = {};
        flaggedQuestions.clear();
        isExamFinished = false;
        examStartTime = new Date();

        // Basculer l'affichage vers l'arène d'examen
        const dashboard = document.getElementById('exam-dashboard');
        const examArea = document.getElementById('exam-active-area');
        const resultsArea = document.getElementById('exam-results-area');

        if (dashboard) dashboard.style.display = 'none';
        if (resultsArea) resultsArea.style.display = 'none';
        if (examArea) examArea.style.display = 'block';

        // Lancer le chronomètre
        startTimer();

        // Rendu de la première question et de la grille
        renderActiveQuestion();
        renderDrawerGrid();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Algorithme de brassage Fisher-Yates
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // =========================================================================
    // 3. MINUTEUR D'EXAMEN
    // =========================================================================

    function startTimer() {
        clearInterval(timerInterval);
        const timerDisplay = document.getElementById('exam-timer-display');

        if (timerDuration === 0) {
            // Mode chronomètre progressif
            let elapsed = 0;
            timerInterval = setInterval(() => {
                if (!timerPaused) {
                    elapsed++;
                    if (timerDisplay) timerDisplay.textContent = formatTime(elapsed);
                }
            }, 1000);
            return;
        }

        // Mode compte à rebours
        timerInterval = setInterval(() => {
            if (!timerPaused) {
                timerRemaining--;
                if (timerDisplay) {
                    timerDisplay.textContent = formatTime(timerRemaining);
                    if (timerRemaining <= 300) { // Dernières 5 minutes
                        timerDisplay.classList.add('timer-warning');
                    }
                }

                if (timerRemaining <= 0) {
                    clearInterval(timerInterval);
                    alert("⏰ Le temps imparti est écoulé ! L'examen va être automatiquement validé et corrigé.");
                    finishExam();
                }
            }
        }, 1000);
    }

    function formatTime(totalSeconds) {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        if (h > 0) {
            return `${pad(h)}:${pad(m)}:${pad(s)}`;
        }
        return `${pad(m)}:${pad(s)}`;
    }

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    // =========================================================================
    // 4. RENDU DE LA QUESTION ACTIVE ET NAVIGATION
    // =========================================================================

    function renderActiveQuestion() {
        const qContainer = document.getElementById('active-question-container');
        if (!qContainer || examQuestions.length === 0) return;

        const q = examQuestions[currentIndex];
        const isMultiple = q.correct.length > 1;
        const currentAns = userAnswers[q.id] || [];
        const isFlagged = flaggedQuestions.has(q.id);

        // Mettre à jour les indicateurs d'en-tête
        document.getElementById('current-q-num').textContent = currentIndex + 1;
        document.getElementById('total-q-num').textContent = examQuestions.length;

        const phaseBadge = document.getElementById('active-phase-badge');
        if (phaseBadge) {
            phaseBadge.textContent = `P${q.phaseNum} • ${q.phaseTitle.split('—')[1] || q.phaseTitle}`;
            phaseBadge.style.backgroundColor = q.phaseColor;
        }

        // Bouton Flag
        const flagBtn = document.getElementById('btn-flag-question');
        if (flagBtn) {
            if (isFlagged) {
                flagBtn.classList.add('active');
                flagBtn.innerHTML = '<i class="fas fa-flag"></i> Marquée pour relecture';
            } else {
                flagBtn.classList.remove('active');
                flagBtn.innerHTML = '<i class="far fa-flag"></i> Marquer pour relecture';
            }
        }

        // Barre de progression
        const answeredCount = Object.keys(userAnswers).length;
        const progressPercent = Math.round((answeredCount / examQuestions.length) * 100);
        const pBar = document.getElementById('exam-progress-fill');
        if (pBar) pBar.style.width = `${progressPercent}%`;

        const answeredCounter = document.getElementById('answered-counter-label');
        if (answeredCounter) {
            answeredCounter.textContent = `${answeredCount} / ${examQuestions.length} répondues`;
        }

        // HTML de la question
        qContainer.innerHTML = `
            <div class="exam-question-card">
                <div class="question-type-hint">
                    ${isMultiple ? '<i class="fas fa-check-double"></i> <strong>Choix multiple :</strong> Plusieurs réponses sont requises.' : '<i class="fas fa-check-circle"></i> <strong>Choix unique :</strong> Une seule réponse est correcte.'}
                </div>
                <h3 class="exam-question-text">${q.question}</h3>

                <div class="exam-options-list">
                    ${q.options.map((opt, optIndex) => {
                        const isChecked = currentAns.includes(optIndex);
                        const inputType = isMultiple ? 'checkbox' : 'radio';
                        const letter = String.fromCharCode(65 + optIndex); // A, B, C, D...

                        return `
                            <label class="exam-option-item ${isChecked ? 'selected' : ''}" data-index="${optIndex}">
                                <input type="${inputType}" name="question-opt" value="${optIndex}" ${isChecked ? 'checked' : ''}>
                                <span class="option-letter">${letter}</span>
                                <span class="option-text">${opt}</span>
                            </label>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        // Événements de sélection sur les options
        qContainer.querySelectorAll('.exam-option-item').forEach(label => {
            label.addEventListener('click', (e) => {
                e.preventDefault();
                const optIdx = parseInt(label.dataset.index, 10);
                toggleOptionSelection(q.id, optIdx, isMultiple);
            });
        });

        // Gestion de l'état des boutons Précédent / Suivant
        const prevBtn = document.getElementById('btn-prev-q');
        const nextBtn = document.getElementById('btn-next-q');
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) {
            if (currentIndex === examQuestions.length - 1) {
                nextBtn.innerHTML = 'Terminer <i class="fas fa-check"></i>';
            } else {
                nextBtn.innerHTML = 'Suivante <i class="fas fa-arrow-right"></i>';
            }
        }

        // Mettre à jour la grille de pastilles
        updateDrawerGridActiveItem();
    }

    function toggleOptionSelection(questionId, optIndex, isMultiple) {
        if (!userAnswers[questionId]) {
            userAnswers[questionId] = [];
        }

        if (isMultiple) {
            const idx = userAnswers[questionId].indexOf(optIndex);
            if (idx > -1) {
                userAnswers[questionId].splice(idx, 1);
            } else {
                userAnswers[questionId].push(optIndex);
            }
            if (userAnswers[questionId].length === 0) {
                delete userAnswers[questionId];
            }
        } else {
            // Choix unique
            userAnswers[questionId] = [optIndex];
        }

        renderActiveQuestion();
        updateDrawerGridItem(currentIndex);
    }

    // =========================================================================
    // 5. TIROIR / PALETTE DE NAVIGATION RAPIDE (100 QUESTIONS)
    // =========================================================================

    function renderDrawerGrid() {
        const grid = document.getElementById('exam-drawer-grid');
        if (!grid) return;

        grid.innerHTML = examQuestions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] && userAnswers[q.id].length > 0;
            const isFlagged = flaggedQuestions.has(q.id);
            const isCurrent = idx === currentIndex;

            let statusClass = 'unanswered';
            if (isAnswered) statusClass = 'answered';
            if (isFlagged) statusClass += ' flagged';
            if (isCurrent) statusClass += ' current';

            return `
                <button class="grid-cell ${statusClass}" data-idx="${idx}" title="Question ${idx + 1} (${q.phaseTitle})">
                    ${idx + 1}
                    ${isFlagged ? '<span class="cell-flag"><i class="fas fa-flag"></i></span>' : ''}
                </button>
            `;
        }).join('');

        grid.querySelectorAll('.grid-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                const targetIdx = parseInt(cell.dataset.idx, 10);
                goToQuestion(targetIdx);
            });
        });
    }

    function updateDrawerGridItem(idx) {
        const q = examQuestions[idx];
        const cell = document.querySelector(`.grid-cell[data-idx="${idx}"]`);
        if (!cell || !q) return;

        const isAnswered = userAnswers[q.id] && userAnswers[q.id].length > 0;
        const isFlagged = flaggedQuestions.has(q.id);
        const isCurrent = idx === currentIndex;

        cell.className = 'grid-cell';
        if (isAnswered) cell.classList.add('answered');
        else cell.classList.add('unanswered');

        if (isFlagged) {
            cell.classList.add('flagged');
            if (!cell.querySelector('.cell-flag')) {
                const f = document.createElement('span');
                f.className = 'cell-flag';
                f.innerHTML = '<i class="fas fa-flag"></i>';
                cell.appendChild(f);
            }
        } else {
            const f = cell.querySelector('.cell-flag');
            if (f) f.remove();
        }

        if (isCurrent) cell.classList.add('current');
    }

    function updateDrawerGridActiveItem() {
        document.querySelectorAll('.grid-cell').forEach((cell, idx) => {
            if (idx === currentIndex) cell.classList.add('current');
            else cell.classList.remove('current');
        });
    }

    function goToQuestion(index) {
        if (index < 0 || index >= examQuestions.length) return;
        currentIndex = index;
        renderActiveQuestion();
    }

    // =========================================================================
    // 6. FIN ET CORRECTION DE L'EXAMEN
    // =========================================================================

    function confirmFinishExam() {
        const total = examQuestions.length;
        const answered = Object.keys(userAnswers).length;
        const remaining = total - answered;
        const flagged = flaggedQuestions.size;

        let msg = `Voulez-vous vraiment soumettre et terminer l'examen ?\n\n`;
        msg += `• Questions répondues : ${answered} / ${total}\n`;
        if (remaining > 0) {
            msg += `⚠️ Questions sans réponse : ${remaining}\n`;
        }
        if (flagged > 0) {
            msg += `🚩 Questions encore marquées pour relecture : ${flagged}\n`;
        }
        msg += `\nCette action arrêtera le chronomètre et calculera votre score officiel.`;

        if (confirm(msg)) {
            finishExam();
        }
    }

    function finishExam() {
        isExamFinished = true;
        clearInterval(timerInterval);

        // Calcul des résultats
        let totalScore = 0;
        const phaseScores = {}; // { 1: { correct: X, total: Y, title, color } }

        for (let i = 1; i <= 10; i++) {
            phaseScores[i] = {
                correct: 0,
                total: 0,
                title: examData[`phase${i}`]?.title || `Phase ${i}`,
                color: examData[`phase${i}`]?.color || '#4f46e5'
            };
        }

        examQuestions.forEach(q => {
            const uAns = (userAnswers[q.id] || []).sort();
            const cAns = [...q.correct].sort();

            const isCorrect = uAns.length === cAns.length && uAns.every((val, i) => val === cAns[i]);
            phaseScores[q.phaseNum].total++;

            if (isCorrect) {
                totalScore++;
                phaseScores[q.phaseNum].correct++;
            }
            q.userWasCorrect = isCorrect;
            q.userProvided = uAns;
        });

        // Masquer l'arène d'examen et afficher les résultats
        const examArea = document.getElementById('exam-active-area');
        const resultsArea = document.getElementById('exam-results-area');

        if (examArea) examArea.style.display = 'none';
        if (resultsArea) resultsArea.style.display = 'block';

        renderResultsView(totalScore, examQuestions.length, phaseScores);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // =========================================================================
    // 7. AFFICHAGE DES RÉSULTATS & BILAN DIAGNOSTIQUE
    // =========================================================================

    function renderResultsView(score, total, phaseScores) {
        const resultsContainer = document.getElementById('exam-results-area');
        if (!resultsContainer) return;

        const percent = Math.round((score / total) * 100);
        const ccnaScaledScore = Math.round(300 + (percent * 7)); // Barème Cisco 300-1000 pts (seuil 825)
        const isPassed = ccnaScaledScore >= 825;

        let verdictClass = isPassed ? 'verdict-success' : (percent >= 70 ? 'verdict-warning' : 'verdict-fail');
        let verdictTitle = isPassed ? 'Félicitations ! Examen Blanc Validé 🏆' : (percent >= 70 ? 'Niveau Solide — Quelques ajustements nécessaires ⚠️' : 'Examen Non Validé — Révisions approfondies conseillées 📚');
        let verdictDesc = isPassed
            ? `Vous avez obtenu ${score}/${total} (${percent}%). Votre score estimé CCNA est de <strong>${ccnaScaledScore}/1000 pts</strong> (seuil requis : 825 pts). Vous maîtrisez les concepts clés de Routage et Commutation.`
            : `Vous avez obtenu ${score}/${total} (${percent}%). Votre score estimé CCNA est de <strong>${ccnaScaledScore}/1000 pts</strong> (seuil requis : 825 pts). Consultez le diagnostic ci-dessous pour cibler les modules à réviser.`;

        resultsContainer.innerHTML = `
            <div class="exam-results-hero ${verdictClass}">
                <div class="results-score-circle">
                    <span class="score-percent">${percent}%</span>
                    <span class="score-ratio">${score} / ${total}</span>
                </div>
                <div class="results-verdict-content">
                    <span class="ccna-score-tag">Score Estimé Cisco : ${ccnaScaledScore} / 1000</span>
                    <h2>${verdictTitle}</h2>
                    <p>${verdictDesc}</p>
                    <div class="results-quick-actions">
                        <button class="btn-res-action" id="btn-restart-exam"><i class="fas fa-redo"></i> Refaire un Examen</button>
                        <button class="btn-res-action secondary" id="btn-print-report"><i class="fas fa-print"></i> Imprimer le Bilan</button>
                    </div>
                </div>
            </div>

            <!-- Bilan Diagnostique par Phase -->
            <div class="exam-phase-breakdown">
                <div class="breakdown-header">
                    <h3><i class="fas fa-chart-pie"></i> Diagnostic Pédagogique par Module (Phases 1 à 10)</h3>
                    <p>Découvrez vos points forts et les thématiques nécessitant une relecture avant l'examen réel :</p>
                </div>

                <div class="breakdown-grid">
                    ${Object.keys(phaseScores).map(pNum => {
                        const p = phaseScores[pNum];
                        const pPercent = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
                        let statusPill = 'status-green';
                        let statusText = 'Maîtrisé';
                        if (pPercent < 60) {
                            statusPill = 'status-red';
                            statusText = 'À retravailler';
                        } else if (pPercent < 80) {
                            statusPill = 'status-orange';
                            statusText = 'En consolidation';
                        }

                        return `
                            <div class="breakdown-card" style="--p-color: ${p.color}">
                                <div class="breakdown-card-top">
                                    <span class="p-badge">P${pNum}</span>
                                    <span class="p-title">${p.title.split('—')[1] || p.title}</span>
                                    <span class="p-status-pill ${statusPill}">${statusText}</span>
                                </div>
                                <div class="breakdown-progress-container">
                                    <div class="breakdown-bar">
                                        <div class="breakdown-fill" style="width: ${pPercent}%; background-color: ${p.color}"></div>
                                    </div>
                                    <div class="breakdown-nums">
                                        <span>${p.correct} / ${p.total} réussies</span>
                                        <strong>${pPercent}%</strong>
                                    </div>
                                </div>
                                <a href="phase${pNum}-${getPhaseSlug(pNum)}.html" class="p-action-link" target="_blank">
                                    <span>Revoir le cours</span> <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Revue intégrale des questions -->
            <div class="exam-review-section">
                <div class="review-header">
                    <h3><i class="fas fa-list-check"></i> Correction et Revue Détaillée des Questions</h3>
                    <div class="review-filters">
                        <button class="btn-filter active" data-filter="all">Toutes (${total})</button>
                        <button class="btn-filter" data-filter="errors">Erreurs uniquement (${total - score})</button>
                        <button class="btn-filter" data-filter="flagged">Marquées pour relecture (${flaggedQuestions.size})</button>
                    </div>
                </div>

                <div class="review-questions-list" id="review-list-container">
                    <!-- Rendu dynamique par renderReviewList() -->
                </div>
            </div>
        `;

        // Événements
        document.getElementById('btn-restart-exam')?.addEventListener('click', () => {
            if (confirm("Voulez-vous réinitialiser et lancer un nouvel examen avec un nouveau mélange de questions ?")) {
                const dashboard = document.getElementById('exam-dashboard');
                const results = document.getElementById('exam-results-area');
                if (dashboard) dashboard.style.display = 'block';
                if (results) results.style.display = 'none';
                renderPreparationDashboard();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        document.getElementById('btn-print-report')?.addEventListener('click', () => {
            window.print();
        });

        // Filtres de revue
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderReviewList(btn.dataset.filter);
            });
        });

        renderReviewList('all');
    }

    function renderReviewList(filter) {
        const container = document.getElementById('review-list-container');
        if (!container) return;

        let filtered = examQuestions;
        if (filter === 'errors') {
            filtered = examQuestions.filter(q => !q.userWasCorrect);
        } else if (filter === 'flagged') {
            filtered = examQuestions.filter(q => flaggedQuestions.has(q.id));
        }

        if (filtered.length === 0) {
            container.innerHTML = `<div class="empty-filter-state"><i class="fas fa-check-circle"></i> Aucune question ne correspond à ce filtre.</div>`;
            return;
        }

        container.innerHTML = filtered.map((q, displayIdx) => {
            const originalIdx = examQuestions.indexOf(q) + 1;
            const isCorrect = q.userWasCorrect;

            return `
                <div class="review-question-card ${isCorrect ? 'is-correct' : 'is-wrong'}">
                    <div class="review-q-header">
                        <div class="q-meta-left">
                            <span class="review-q-num">#${originalIdx}</span>
                            <span class="review-phase-badge" style="background-color: ${q.phaseColor}">P${q.phaseNum}</span>
                            <span class="review-result-badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                                ${isCorrect ? '<i class="fas fa-check"></i> Correct' : '<i class="fas fa-times"></i> Incorrect'}
                            </span>
                        </div>
                        ${flaggedQuestions.has(q.id) ? '<span class="review-flagged-tag"><i class="fas fa-flag"></i> Marquée</span>' : ''}
                    </div>

                    <h4 class="review-q-text">${q.question}</h4>

                    <div class="review-options-list">
                        ${q.options.map((opt, optIndex) => {
                            const isSelected = (q.userProvided || []).includes(optIndex);
                            const isRightAnswer = q.correct.includes(optIndex);

                            let itemClass = '';
                            if (isRightAnswer) itemClass = 'option-correct';
                            if (isSelected && !isRightAnswer) itemClass = 'option-incorrect';
                            if (isSelected && isRightAnswer) itemClass = 'option-correct option-user-picked';

                            return `
                                <div class="review-opt-item ${itemClass}">
                                    <span class="opt-indicator">
                                        ${isRightAnswer ? '<i class="fas fa-check"></i>' : (isSelected ? '<i class="fas fa-times"></i>' : '<i class="far fa-circle"></i>')}
                                    </span>
                                    <span class="opt-letter">${String.fromCharCode(65 + optIndex)}.</span>
                                    <span class="opt-label">${opt}</span>
                                    ${isSelected ? '<span class="user-picked-tag">(Votre réponse)</span>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div class="review-explanation-box">
                        <div class="exp-header"><i class="fas fa-lightbulb"></i> Explication Pédagogique Cisco :</div>
                        <p>${q.explanation}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // =========================================================================
    // 8. ÉVÉNEMENTS GLOBAUX & RESTAURATION / SAUVEGARDE
    // =========================================================================

    function setupEventListeners() {
        // Boutons navigation questions
        document.getElementById('btn-prev-q')?.addEventListener('click', () => {
            if (currentIndex > 0) goToQuestion(currentIndex - 1);
        });

        document.getElementById('btn-next-q')?.addEventListener('click', () => {
            if (currentIndex < examQuestions.length - 1) {
                goToQuestion(currentIndex + 1);
            } else {
                confirmFinishExam();
            }
        });

        // Bouton Flag
        document.getElementById('btn-flag-question')?.addEventListener('click', () => {
            const q = examQuestions[currentIndex];
            if (!q) return;
            if (flaggedQuestions.has(q.id)) {
                flaggedQuestions.delete(q.id);
            } else {
                flaggedQuestions.add(q.id);
            }
            renderActiveQuestion();
            updateDrawerGridItem(currentIndex);
        });

        // Bouton Drawer (Ouvrir / Fermer grille des 100)
        document.getElementById('btn-toggle-drawer')?.addEventListener('click', () => {
            const drawer = document.getElementById('exam-drawer-palette');
            if (drawer) drawer.classList.toggle('open');
        });

        document.getElementById('btn-close-drawer')?.addEventListener('click', () => {
            const drawer = document.getElementById('exam-drawer-palette');
            if (drawer) drawer.classList.remove('open');
        });

        // Bouton Terminer
        document.getElementById('btn-finish-exam')?.addEventListener('click', () => {
            confirmFinishExam();
        });

        // Pause / Reprendre Minuteur
        document.getElementById('btn-pause-timer')?.addEventListener('click', function () {
            timerPaused = !timerPaused;
            if (timerPaused) {
                this.innerHTML = '<i class="fas fa-play"></i>';
                this.title = 'Reprendre le chronomètre';
            } else {
                this.innerHTML = '<i class="fas fa-pause"></i>';
                this.title = 'Mettre en pause';
            }
        });
    }

    function exportStorageData() {
        const dump = {};

        // 1. Progression des quiz de modules (fonctionnalité existante)
        for (let i = 1; i <= 10; i++) {
            const k = `quiz_state_phase${i}`;
            const v = localStorage.getItem(k);
            if (v) dump[k] = JSON.parse(v);
        }

        // 2. Session d'examen en cours (si une session est active)
        if (examQuestions.length > 0 && !isExamFinished) {
            dump['exam_session'] = {
                examQuestions: examQuestions,      // Questions tirées (ordre + options mélangées)
                userAnswers: userAnswers,           // Réponses données { questionId: [indices] }
                flaggedQuestions: [...flaggedQuestions], // Flags (Set → Array)
                timerRemaining: timerRemaining,    // Temps restant en secondes
                examMode: examMode,                // Mode ('full', 'half', 'express')
                currentIndex: currentIndex         // Question active
            };
        }

        const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `routage-commutation-progression-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function importStorageData(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                const parsed = JSON.parse(event.target.result);

                // 1. Restaurer la progression des quiz de modules
                Object.keys(parsed).forEach(k => {
                    if (k !== 'exam_session') {
                        localStorage.setItem(k, JSON.stringify(parsed[k]));
                    }
                });

                // 2. Restaurer la session d'examen si présente
                if (parsed.exam_session) {
                    const s = parsed.exam_session;
                    examQuestions = s.examQuestions || [];
                    userAnswers   = s.userAnswers || {};
                    flaggedQuestions = new Set(s.flaggedQuestions || []);
                    timerRemaining  = s.timerRemaining != null ? s.timerRemaining : timerDuration;
                    examMode        = s.examMode || 'full';
                    currentIndex    = s.currentIndex || 0;
                    isExamFinished  = false;

                    // Basculer vers l'arène d'examen
                    const dashboard   = document.getElementById('exam-dashboard');
                    const examArea    = document.getElementById('exam-active-area');
                    const resultsArea = document.getElementById('exam-results-area');
                    if (dashboard)   dashboard.style.display = 'none';
                    if (resultsArea) resultsArea.style.display = 'none';
                    if (examArea)    examArea.style.display = 'block';

                    // Reprendre le timer là où il était
                    timerDuration = timerRemaining; // évite un reset involontaire
                    startTimer();
                    renderActiveQuestion();
                    renderDrawerGrid();
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    alert(`Session restaurée ! Reprise à la question ${currentIndex + 1}, temps restant : ${formatTime(timerRemaining)}.`);
                } else {
                    alert('Progression des modules restaurée avec succès !');
                    renderPreparationDashboard();
                }
            } catch (err) {
                alert('Erreur lors de la lecture du fichier de sauvegarde : ' + err.message);
            }
        };
        reader.readAsText(file);
    }

})();
