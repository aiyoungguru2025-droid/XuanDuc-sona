// ==================== GLOBAL STATE ====================
let hollandScores = {};
let currentSection = 0;
let selectedCareer = null;
let hollandChart = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initHollandTest();
    initCareerGrid();
    initEducationToggle();
    initCheckboxCards();
    updateProgress();
});

// ==================== HOLLAND TEST INITIALIZATION ====================
function initHollandTest() {
    const container = document.getElementById('hollandAccordion');
    
    hollandData.forEach((group, groupIndex) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group-container';
        
        // Header
        const header = document.createElement('div');
        header.className = 'group-header';
        header.innerHTML = `
            <div>
                <span style="font-size: 1.5rem; margin-right: 10px;">${['🔧', '🔬', '🎨', '🤝', '📊', '📋'][groupIndex]}</span>
                <strong>${group.name}</strong>
                <span style="font-size: 0.85rem; opacity: 0.8; margin-left: 10px;">${group.description}</span>
            </div>
            <span class="arrow">▼</span>
        `;
        
        // Content
        const content = document.createElement('div');
        content.className = 'group-content';
        
        group.questions.forEach((question, qIndex) => {
            const quizDiv = document.createElement('div');
            quizDiv.className = 'quiz-item';
            
            const questionText = document.createElement('div');
            questionText.className = 'quiz-question';
            questionText.innerHTML = `<strong>${qIndex + 1}.</strong> Bạn có thích ${question}?`;
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';
            
            scoresText.forEach((text, score) => {
                const optBtn = document.createElement('span');
                optBtn.className = 'opt';
                optBtn.textContent = text;
                optBtn.dataset.score = score + 1;
                optBtn.dataset.key = `${group.id}_${qIndex}`;
                
                optBtn.addEventListener('click', function() {
                    // Remove active from siblings
                    optionsDiv.querySelectorAll('.opt').forEach(o => o.classList.remove('active'));
                    // Add active to clicked
                    this.classList.add('active');
                    // Save score
                    hollandScores[this.dataset.key] = parseInt(this.dataset.score);
                    // Update count
                    updateAnsweredCount();
                });
                
                optionsDiv.appendChild(optBtn);
            });
            
            quizDiv.appendChild(questionText);
            quizDiv.appendChild(optionsDiv);
            content.appendChild(quizDiv);
        });
        
        groupDiv.appendChild(header);
        groupDiv.appendChild(content);
        container.appendChild(groupDiv);
        
        // Toggle accordion
        header.addEventListener('click', function() {
            const isActive = content.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.group-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.group-header').forEach(h => h.classList.remove('active'));
            
            // Open clicked if it wasn't active
            if (!isActive) {
                content.classList.add('active');
                header.classList.add('active');
            }
        });
    });
}

// ==================== CAREER GRID INITIALIZATION ====================
function initCareerGrid() {
    const grid = document.getElementById('careerGrid');
    
    Object.values(careersDatabase).forEach(career => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.dataset.category = career.category;
        card.dataset.id = career.id;
        
        // Check if hot career
        const isHot = ['it-software', 'semiconductor', 'auto-ev', 'business-marketing'].includes(career.id);
        
        card.innerHTML = `
            ${isHot ? '<div class="career-tag">HOT</div>' : ''}
            <span class="career-icon">${career.icon}</span>
            <div class="career-name">${career.name}</div>
            <div class="career-category">${getCategoryName(career.category)} • ${career.hollandCode}</div>
            <div class="career-salary">${career.salary.entry}</div>
        `;
        
        card.addEventListener('click', function() {
            // Remove selected from all
            document.querySelectorAll('.career-card').forEach(c => c.classList.remove('selected'));
            // Add to clicked
            this.classList.add('selected');
            selectedCareer = career;
        });
        
        grid.appendChild(card);
    });
}

function getCategoryName(cat) {
    const names = {
        'tech': 'Công nghệ',
        'business': 'Kinh doanh',
        'health': 'Y tế',
        'creative': 'Sáng tạo'
    };
    return names[cat] || cat;
}

// ==================== EDUCATION TOGGLE ====================
function initEducationToggle() {
    const radios = document.querySelectorAll('input[name="edu"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            const vocBox = document.getElementById('vocationalSelection');
            vocBox.style.display = this.value === 'vocational' ? 'block' : 'none';
        });
    });
}

// ==================== CHECKBOX CARDS STYLING ====================
function initCheckboxCards() {
    console.log('✅ initCheckboxCards() đã chạy');
    
    // Delegate event để hoạt động với tất cả checkbox cards, kể cả trong hidden sections
    document.addEventListener('click', function(e) {
        const label = e.target.closest('.checkbox-card');
        if (!label) return;
        
        const checkbox = label.querySelector('input[type="checkbox"]');
        if (!checkbox) return;
        
        console.log('🖱️ Click vào checkbox-card:', checkbox.value);
        
        // Nếu click vào chính checkbox, để nó xử lý tự nhiên
        if (e.target === checkbox) {
            // Toggle class sau khi checkbox state thay đổi
            setTimeout(() => {
                if (checkbox.checked) {
                    label.classList.add('checked');
                    console.log('✅ Đã thêm class checked');
                } else {
                    label.classList.remove('checked');
                    console.log('❌ Đã xóa class checked');
                }
            }, 0);
        } else {
            // Click vào label, toggle checkbox
            e.preventDefault();
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                label.classList.add('checked');
                console.log('✅ Đã thêm class checked (via label)');
            } else {
                label.classList.remove('checked');
                console.log('❌ Đã xóa class checked (via label)');
            }
            
            // Trigger change event
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
    
    // Also handle direct checkbox change events
    document.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox') {
            const label = e.target.closest('.checkbox-card');
            if (label) {
                if (e.target.checked) {
                    label.classList.add('checked');
                    console.log('✅ Change event: thêm checked');
                } else {
                    label.classList.remove('checked');
                    console.log('❌ Change event: xóa checked');
                }
            }
        }
    });
}

// ==================== FILTER CAREERS ====================
function filterCareers(category) {
    const cards = document.querySelectorAll('.career-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==================== NAVIGATION ====================
function nextSection(current) {
    // Validation based on current section (0-indexed)
    if (current === 0) {
        // Holland Test validation
        const answeredCount = Object.keys(hollandScores).length;
        if (answeredCount < 18) {
            alert(`⚠️ Vui lòng trả lời ít nhất 18/36 câu hỏi!\n\nBạn mới trả lời ${answeredCount} câu. Để có kết quả chính xác, cần ít nhất 50% số câu hỏi.`);
            return;
        }
    }
    
    if (current === 2) {
        // Skills section validation
        const subjects = document.querySelectorAll('#subjects input:checked');
        if (subjects.length < 2) {
            alert('⚠️ Vui lòng chọn ít nhất 2 môn học bạn tự tin!');
            return;
        }
    }
    
    if (current === 3) {
        // Career section validation
        if (!selectedCareer) {
            alert('⚠️ Vui lòng chọn một ngành nghề bạn quan tâm!');
            return;
        }
    }
    
    // Hide current, show next
    const currentSectionName = getSectionName(current);
    const nextSectionName = getSectionName(current + 1);
    
    console.log('Navigating from:', currentSectionName, 'to:', nextSectionName); // Debug
    
    document.getElementById(`section-${currentSectionName}`).style.display = 'none';
    document.getElementById(`section-${nextSectionName}`).style.display = 'block';
    
    currentSection = current + 1;
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevSection(current) {
    document.getElementById(`section-${getSectionName(current)}`).style.display = 'none';
    document.getElementById(`section-${getSectionName(current - 1)}`).style.display = 'block';
    
    currentSection = current - 1;
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getSectionName(num) {
    const names = ['holland', 'education', 'skills', 'career'];
    return names[num];
}

// ==================== UPDATE PROGRESS ====================
function updateProgress() {
    const progress = ((currentSection + 1) / 4) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    const texts = [
        'Bước 1/4: Khám phá Tố chất',
        'Bước 2/4: Hệ đào tạo',
        'Bước 3/4: Năng lực & Kỹ năng',
        'Bước 4/4: Ngành nghề mục tiêu'
    ];
    document.getElementById('progressText').textContent = texts[currentSection];
}

// ==================== UPDATE ANSWERED COUNT ====================
function updateAnsweredCount() {
    const count = Object.keys(hollandScores).length;
    document.getElementById('answeredCount').innerHTML = `<strong>${count}/36</strong>`;
}

// ==================== MAIN ANALYSIS FUNCTION ====================
function analyzeCareer() {
    if (!selectedCareer) {
        alert('⚠️ Vui lòng chọn ngành nghề!');
        return;
    }
    
    // Show loading
    document.getElementById('loadingOverlay').style.display = 'flex';
    
    // Simulate AI processing
    setTimeout(() => {
        performAnalysis();
        document.getElementById('loadingOverlay').style.display = 'none';
        
        // Hide career section, show results
        document.getElementById('section-career').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

// ==================== ADVANCED AI ANALYSIS ALGORITHM ====================
function performAnalysis() {
    // 1. Calculate Holland Scores
    const hollandTotals = calculateHollandScores();
    
    // 2. Get user inputs
    const eduType = document.querySelector('input[name="edu"]:checked').value;
    const currentVocJob = document.getElementById('currentVocJob').value;
    const subjects = Array.from(document.querySelectorAll('#subjects input:checked')).map(i => i.value);
    const softSkills = Array.from(document.querySelectorAll('#softSkills input:checked')).map(i => i.value);
    
    // 3. Calculate Match Score with weights
    const matchScore = calculateMatchScore(hollandTotals, subjects, softSkills, selectedCareer);
    
    // 4. Generate insights
    displayResults(hollandTotals, matchScore, eduType, currentVocJob, subjects, softSkills);
}

// ==================== CALCULATE HOLLAND SCORES ====================
function calculateHollandScores() {
    const totals = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    const counts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    
    // Sum scores
    Object.keys(hollandScores).forEach(key => {
        const type = key.split('_')[0];
        totals[type] += hollandScores[key];
        counts[type]++;
    });
    
    // Normalize (average per question answered)
    Object.keys(totals).forEach(type => {
        if (counts[type] > 0) {
            totals[type] = (totals[type] / counts[type]) * 20; // Scale to 100
        }
    });
    
    return totals;
}

// ==================== ADVANCED MATCH SCORE CALCULATION ====================
function calculateMatchScore(hollandTotals, subjects, softSkills, career) {
    let score = 0;
    
    // 1. Holland Code Match (40% weight)
    const careerCodes = career.hollandCode.split('-');
    const userCodes = getTopHollandCodes(hollandTotals, 2);
    
    if (userCodes[0] === careerCodes[0]) score += 25; // Perfect primary match
    else if (careerCodes.includes(userCodes[0])) score += 15; // Primary in career codes
    
    if (userCodes[1] === careerCodes[1]) score += 15; // Perfect secondary match
    else if (careerCodes.includes(userCodes[1])) score += 10; // Secondary in career codes
    
    // 2. Subject Match (25% weight)
    const subjectMatch = subjects.filter(s => career.skills.includes(s)).length;
    score += Math.min(subjectMatch * 5, 25);
    
    // 3. Soft Skills Match (20% weight)
    const skillMatch = softSkills.filter(s => career.skills.includes(s)).length;
    score += Math.min(skillMatch * 4, 20);
    
    // 4. Overall Holland Alignment (15% weight)
    const hollandAlignment = calculateHollandAlignment(hollandTotals, careerCodes);
    score += hollandAlignment * 0.15;
    
    // Ensure score is between 0-100
    return Math.min(Math.max(score, 40), 100);
}

function getTopHollandCodes(totals, n) {
    return Object.entries(totals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map(entry => entry[0]);
}

function calculateHollandAlignment(totals, careerCodes) {
    let alignment = 0;
    careerCodes.forEach(code => {
        alignment += totals[code] || 0;
    });
    return alignment / careerCodes.length;
}

// ==================== DISPLAY RESULTS ====================
function displayResults(hollandTotals, matchScore, eduType, currentVocJob, subjects, softSkills) {
    const career = selectedCareer;
    const topCodes = getTopHollandCodes(hollandTotals, 2);
    const userCode = topCodes.join('-');
    
    // Hero Card
    document.getElementById('resTag').textContent = eduType === 'thpt' ? 'LỘ TRÌNH ĐẠI HỌC' : 'LỘ TRÌNH NGHỀ NGHIỆP';
    document.getElementById('resName').textContent = career.name;
    document.getElementById('resScore').textContent = Math.round(matchScore);
    
    // Animate score circle
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (matchScore / 100) * circumference;
    document.getElementById('scoreCircle').style.strokeDashoffset = offset;
    
    document.getElementById('resTypeName').textContent = `Mã Holland: ${userCode} (${hollandTypeNames[topCodes[0]]} & ${hollandTypeNames[topCodes[1]]})`;
    
    // Create Holland Chart
    createHollandChart(hollandTotals);
    
    // AI Analysis
    generateAIAnalysis(hollandTotals, matchScore, userCode, career, subjects, softSkills, eduType, currentVocJob);
    
    // Schools
    displaySchools(career, eduType);
    
    // Roadmap
    displayRoadmap(career, eduType, currentVocJob, subjects);
    
    // Prospects
    displayProspects(career);
    
    // Recommendations
    generateRecommendations(career, softSkills, subjects, matchScore);
}

// ==================== CREATE HOLLAND CHART ====================
function createHollandChart(totals) {
    const ctx = document.getElementById('hollandChart');
    
    if (hollandChart) {
        hollandChart.destroy();
    }
    
    hollandChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Kỹ thuật (R)', 'Nghiên cứu (I)', 'Nghệ thuật (A)', 'Xã hội (S)', 'Quản lý (E)', 'Quy củ (C)'],
            datasets: [{
                label: 'Điểm Tố chất của bạn',
                data: [totals.R, totals.I, totals.A, totals.S, totals.E, totals.C],
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 3,
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(59, 130, 246)',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
}

// ==================== GENERATE AI ANALYSIS ====================
function generateAIAnalysis(hollandTotals, matchScore, userCode, career, subjects, softSkills, eduType, currentVocJob) {
    const topType = hollandTypeNames[userCode.split('-')[0]];
    const secondType = hollandTypeNames[userCode.split('-')[1]];
    
    let analysis = `<strong>🎯 Phân tích AI chuyên sâu:</strong><br><br>`;
    
    // Match level
    if (matchScore >= 85) {
        analysis += `✅ <strong>Xuất sắc!</strong> Đây là sự kết hợp <strong>gần như hoàn hảo</strong>. Tố chất <strong>${topType}</strong> chiếm ưu thế của bạn hoàn toàn phù hợp với yêu cầu của ngành <strong>${career.name}</strong>. `;
    } else if (matchScore >= 70) {
        analysis += `✅ <strong>Rất tốt!</strong> Bạn có tiềm năng lớn trong ngành <strong>${career.name}</strong>. Tố chất <strong>${topType}</strong> và <strong>${secondType}</strong> của bạn phù hợp với đặc thù công việc. `;
    } else if (matchScore >= 55) {
        analysis += `⚠️ <strong>Khá phù hợp.</strong> Bạn có một số tố chất cần thiết, nhưng cần phát triển thêm kỹ năng để đạt hiệu quả cao nhất. `;
    } else {
        analysis += `⚠️ <strong>Cần cân nhắc.</strong> Ngành này có thể không phải là lựa chọn tối ưu dựa trên tố chất hiện tại. Hãy xem xét các ngành khác phù hợp hơn với mã Holland ${userCode}. `;
    }
    
    // Vocational background bonus
    if (eduType === 'vocational' && currentVocJob !== 'none') {
        analysis += `<br><br>💡 <strong>Lợi thế:</strong> Việc bạn đã có nền tảng <strong>${currentVocJob}</strong> sẽ giúp rút ngắn thời gian học tập 1-2 năm và tăng tính cạnh tranh khi xin việc.`;
    }
    
    document.getElementById('resExplain').innerHTML = analysis;
    
    // Skills match
    let skillsText = `<strong>🔥 Điểm mạnh cạnh tranh:</strong><br><br>`;
    skillsText += `Bạn có <strong>${subjects.length + softSkills.length} kỹ năng/năng lực</strong> phù hợp với ngành nghề. `;
    
    const keySkills = softSkills.filter(s => ['Sử dụng AI', 'Logic', 'Giao tiếp', 'Tư duy sáng tạo'].includes(s));
    if (keySkills.length > 0) {
        skillsText += `Đặc biệt, kỹ năng <strong>${keySkills[0]}</strong> sẽ giúp bạn có lợi thế vượt trội trong thời đại công nghệ 4.0.`;
    }
    
    document.getElementById('resSkillsMatch').innerHTML = skillsText;
}

// ==================== DISPLAY SCHOOLS ====================
function displaySchools(career, eduType) {
    const schools = eduType === 'thpt' ? career.universities : career.vocational;
    
    let html = `<strong>🏫 Cơ sở đào tạo uy tín:</strong><br><br>`;
    html += `<ul style="margin-left: 20px; line-height: 2;">`;
    schools.forEach(school => {
        html += `<li>${school}</li>`;
    });
    html += `</ul>`;
    
    document.getElementById('resSchool').innerHTML = html;
    
    // Admission info
    let admissionHtml = `<strong>📋 Điểm chuẩn & Tổ hợp môn:</strong><br><br>`;
    admissionHtml += `Điểm chuẩn dự kiến: <strong>${career.admissionScore.university}</strong><br>`;
    admissionHtml += `Tổ hợp môn: <strong>${career.admissionScore.subjects}</strong>`;
    
    document.getElementById('resAdmission').innerHTML = admissionHtml;
}

// ==================== DISPLAY ROADMAP ====================
function displayRoadmap(career, eduType, currentVocJob, subjects) {
    const roadmap = eduType === 'thpt' ? career.roadmap.thpt : career.roadmap.vocational;
    
    let html = '';
    roadmap.forEach((step, index) => {
        let customStep = step;
        
        // Personalize first step
        if (index === 0 && subjects.length > 0) {
            customStep = customStep.replace(/Toán, Lý, Anh|Toán, Văn, Anh/g, subjects.slice(0, 3).join(', '));
        }
        
        html += `
        <div class="timeline-item">
            <div class="timeline-number">${index + 1}</div>
            <div class="timeline-content">
                <h3>${getTimelineTitle(index, eduType)}</h3>
                <p>${customStep}</p>
            </div>
        </div>
        `;
    });
    
    document.getElementById('resPath').innerHTML = html;
}

function getTimelineTitle(index, eduType) {
    if (eduType === 'thpt') {
        const titles = ['Chuẩn bị thi THPT', 'Chọn trường & ngành', 'Năm 1-2: Nền tảng', 'Năm 3-4: Chuyên sâu'];
        return titles[index] || `Bước ${index + 1}`;
    } else {
        const titles = ['Chọn trường nghề', 'Học và thực hành', 'Thi tay nghề', 'Vào nghề & Thăng tiến'];
        return titles[index] || `Bước ${index + 1}`;
    }
}

// ==================== DISPLAY PROSPECTS ====================
function displayProspects(career) {
    document.getElementById('resSalary').innerHTML = `
        <strong>Khởi điểm:</strong> ${career.salary.entry}<br>
        <strong>3-5 năm:</strong> ${career.salary.mid}<br>
        <strong>Senior:</strong> ${career.salary.senior}
    `;
    
    document.getElementById('resGrowth').textContent = career.growth;
    
    document.getElementById('resPositions').innerHTML = career.positions.slice(0, 3).map(p => `• ${p}`).join('<br>');
}

// ==================== GENERATE RECOMMENDATIONS ====================
function generateRecommendations(career, softSkills, subjects, matchScore) {
    let recommendations = [];
    
    // Add career-specific recommendations
    recommendations = recommendations.concat(career.recommendations);
    
    // Add personalized recommendations based on gaps
    if (!softSkills.includes('Sử dụng AI')) {
        recommendations.push('🤖 Học cách sử dụng AI tools (ChatGPT, Midjourney) - kỹ năng cốt lõi thế kỷ 21');
    }
    
    if (!subjects.includes('Anh')) {
        recommendations.push('🌍 Ưu tiên học tiếng Anh - mở ra nhiều cơ hội việc làm và thu nhập cao hơn 30-50%');
    }
    
    if (matchScore < 70) {
        recommendations.push('⚠️ Tham khảo thêm các ngành nghề khác có mã Holland phù hợp hơn');
    }
    
    // Display
    let html = '';
    recommendations.forEach((rec, index) => {
        html += `
        <div class="recommendation-item">
            <div class="recommendation-icon">${['💡', '🎯', '🚀', '📚', '⭐'][index % 5]}</div>
            <div>${rec}</div>
        </div>
        `;
    });
    
    document.getElementById('resRecommendations').innerHTML = html;
}

// ==================== EXPORT PDF ====================
function exportPDF() {
    alert('📄 Tính năng xuất PDF đang được phát triển!\n\nBạn có thể sử dụng Print (Ctrl+P) để lưu kết quả tạm thời.');
    window.print();
}

// ==================== SHARE RESULTS ====================
function shareResults() {
    const url = window.location.href;
    const text = `Tôi vừa hoàn thành bài test hướng nghiệp V-Mentor AI! Ngành nghề phù hợp: ${selectedCareer.name}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'V-Mentor AI - Kết quả hướng nghiệp',
            text: text,
            url: url
        }).catch(err => console.log('Share failed', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text + ' ' + url).then(() => {
            alert('✅ Đã copy link chia sẻ vào clipboard!');
        });
    }
}

// ==================== RESET TEST ====================
function resetTest() {
    if (confirm('🔄 Bạn có chắc muốn làm lại? Toàn bộ dữ liệu hiện tại sẽ bị xóa.')) {
        hollandScores = {};
        selectedCareer = null;
        currentSection = 0;
        
        // Reset UI
        document.querySelectorAll('.opt').forEach(o => o.classList.remove('active'));
        document.querySelectorAll('input[type="checkbox"]').forEach(i => i.checked = false);
        document.querySelectorAll('.career-card').forEach(c => c.classList.remove('selected'));
        
        // Show first section
        document.getElementById('resultsSection').style.display = 'none';
        document.getElementById('section-holland').style.display = 'block';
        
        updateAnsweredCount();
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
