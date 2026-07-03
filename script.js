// Global state
let selectedImages = [];
let selectedCurrency = 'USD';
const API_KEY = 'sk-proj-YOUR_CLAUDE_API_KEY'; // Replace with your API key

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    loadSounds();
    setupTabNavigation();
});

function setupTabNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

function initializeUI() {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const clearBtn = document.getElementById('clearBtn');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const currencySelect = document.getElementById('currencySelect');

    // Upload zone
    uploadZone.addEventListener('click', () => fileInput.click());
    
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        handleFiles(Array.from(e.dataTransfer.files));
    });

    fileInput.addEventListener('change', (e) => handleFiles(Array.from(e.target.files)));
    browseBtn.addEventListener('click', () => fileInput.click());
    clearBtn.addEventListener('click', clearImages);
    analyzeBtn.addEventListener('click', analyzeCards);
    currencySelect.addEventListener('change', (e) => {
        selectedCurrency = e.target.value;
    });
}

function handleFiles(files) {
    const imageFiles = files.filter(f => f.type.startsWith('image/'));
    selectedImages.push(...imageFiles);
    displayPreviews();
}

function displayPreviews() {
    const previewContainer = document.getElementById('previewContainer');
    const previewGrid = document.getElementById('previewGrid');
    const clearBtn = document.getElementById('clearBtn');
    
    if (selectedImages.length === 0) {
        previewGrid.style.display = 'none';
        clearBtn.style.display = 'none';
        return;
    }

    previewContainer.innerHTML = '';
    previewGrid.style.display = 'block';
    clearBtn.style.display = 'block';

    selectedImages.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const div = document.createElement('div');
            div.className = 'preview-item';
            div.innerHTML = `
                <img src="${e.target.result}" alt="Card ${index + 1}">
                <button class="remove-btn" onclick="removeImage(${index})">×</button>
            `;
            previewContainer.appendChild(div);
        };
        reader.readAsDataURL(file);
    });
}

function removeImage(index) {
    selectedImages.splice(index, 1);
    displayPreviews();
}

function clearImages() {
    selectedImages = [];
    displayPreviews();
    document.getElementById('fileInput').value = '';
}

function loadSounds() {
    // Using data URIs for sounds or external URLs
    // For production, replace with real sound URLs
    const moneySound = document.getElementById('moneySound');
    const completeSound = document.getElementById('completeSound');
    
    // Using placeholder - replace with real sounds
    moneySound.src = createAudioUrl('money');
    completeSound.src = createAudioUrl('complete');
}

function createAudioUrl(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sampleRate = audioContext.sampleRate;
    const duration = type === 'money' ? 1.2 : 0.5;
    const buffer = audioContext.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);

    if (type === 'money') {
        // Money counter sound simulation
        const pulses = 15;
        for (let i = 0; i < pulses; i++) {
            const start = (i / pulses) * duration * sampleRate;
            const end = ((i + 0.5) / pulses) * duration * sampleRate;
            const freq = 500 + i * 50;
            
            for (let j = start; j < end; j++) {
                const t = (j - start) / sampleRate;
                data[Math.floor(j)] = Math.sin(2 * Math.PI * freq * t) * 0.5 * Math.exp(-t * 6);
            }
        }
    } else {
        // Completion beep
        const freq = 1000;
        for (let i = 0; i < duration * sampleRate; i++) {
            const t = i / sampleRate;
            data[i] = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 3);
        }
    }

    return blobToUrl(bufferToWav(buffer));
}

function bufferToWav(buffer) {
    const length = buffer.length * buffer.numberOfChannels * 2 + 44;
    const arrayBuffer = new ArrayBuffer(length);
    const view = new DataView(arrayBuffer);
    const channels = [];

    for (let i = 0; i < buffer.numberOfChannels; i++) {
        channels.push(buffer.getChannelData(i));
    }

    const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + buffer.length * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, buffer.length * 2, true);

    let index = 44;
    for (let i = 0; i < buffer.length; i++) {
        view.setInt16(index, channels[0][i] * 0x7fff, true);
        index += 2;
    }

    return arrayBuffer;
}

function blobToUrl(arrayBuffer) {
    return URL.createObjectURL(new Blob([arrayBuffer], { type: 'audio/wav' }));
}

async function analyzeCards() {
    if (selectedImages.length === 0) {
        alert('Please upload at least one card image');
        return;
    }

    const loadingState = document.getElementById('loadingState');
    const resultsArea = document.getElementById('resultsArea');
    const emptyState = document.getElementById('emptyState');
    
    loadingState.style.display = 'flex';
    emptyState.style.display = 'none';
    resultsArea.style.display = 'none';

    try {
        // Call Claude Vision API to analyze cards
        const cardData = await analyzeCardsWithClaude();
        
        if (cardData.length === 0) {
            alert('No cards detected. Please upload clearer images.');
            loadingState.style.display = 'none';
            return;
        }

        // Get market prices
        const cardsWithPrices = await enrichCardsWithPrices(cardData);
        
        // Display results
        displayResults(cardsWithPrices);
        playCountingAnimation();
    } catch (error) {
        console.error('Analysis error:', error);
        alert('Error analyzing cards: ' + error.message);
    } finally {
        loadingState.style.display = 'none';
    }
}

async function analyzeCardsWithClaude() {
    const formData = new FormData();
    
    // Convert images to base64
    const base64Images = await Promise.all(
        selectedImages.map(file => fileToBase64(file))
    );

    // For demo purposes, return mock data
    // In production, send to Claude Vision API
    return mockCardAnalysis();
}

function fileToBase64(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
}

function mockCardAnalysis() {
    // Mock detected cards - replace with real Claude API
    return Promise.resolve([
        {
            player: 'Cristiano Ronaldo',
            year: 2008,
            brand: 'Panini',
            condition: 'Near Mint',
            detected: true
        },
        {
            player: 'Lionel Messi',
            year: 2005,
            brand: 'Panini',
            condition: 'Excellent',
            detected: true
        }
    ]);
}

async function enrichCardsWithPrices(cards) {
    // Mock prices - replace with real marketplace scraping
    return cards.map(card => ({
        ...card,
        basePrice: Math.random() * 500 + 50,
        eBayPrice: Math.random() * 400 + 60,
        beckettPrice: Math.random() * 450 + 80,
        comcPrice: Math.random() * 380 + 70
    }));
}

function displayResults(cards) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsArea = document.getElementById('resultsArea');
    
    const conditionMultiplier = {
        'Mint': 1.0,
        'Near Mint': 0.9,
        'Excellent': 0.8,
        'Very Good': 0.7,
        'Good': 0.6,
        'Fair': 0.4,
        'Poor': 0.2
    };

    resultsContainer.innerHTML = cards.map((card, idx) => {
        const multiplier = conditionMultiplier[card.condition] || 0.7;
        const adjustedPrice = card.basePrice * multiplier;

        return `
            <div class="result-card" style="animation-delay: ${idx * 0.1}s">
                <div class="result-header">
                    <div class="result-image">
                        <img src="https://via.placeholder.com/100x140?text=${encodeURIComponent(card.player)}">
                    </div>
                    <div class="result-info">
                        <div class="result-title">${card.player}</div>
                        <div class="result-meta">
                            <div class="result-meta-item">
                                <span class="result-meta-label">Year</span>
                                <span class="result-meta-value">${card.year}</span>
                            </div>
                            <div class="result-meta-item">
                                <span class="result-meta-label">Brand</span>
                                <span class="result-meta-value">${card.brand}</span>
                            </div>
                        </div>
                        <span class="condition-badge">${card.condition}</span>
                    </div>
                </div>
                <div class="result-prices">
                    <div class="price-item">
                        <span class="price-label">Adjusted Price</span>
                        <span class="price-value" data-price="${adjustedPrice.toFixed(2)}" data-currency="${selectedCurrency}">$0.00</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    resultsArea.style.display = 'block';
    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function playCountingAnimation() {
    const priceValues = document.querySelectorAll('.price-value');
    const moneySound = document.getElementById('moneySound');
    const completeSound = document.getElementById('completeSound');

    let completedAnimations = 0;

    priceValues.forEach((element, index) => {
        const finalPrice = parseFloat(element.getAttribute('data-price'));
        let currentPrice = 0;
        const duration = 1500;
        const steps = 40;
        const increment = finalPrice / steps;

        // Play money sound with delay
        setTimeout(() => {
            moneySound.currentTime = 0;
            moneySound.play().catch(() => {});
        }, index * 100);

        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            currentPrice = finalPrice * progress;

            element.textContent = formatCurrency(currentPrice, element.getAttribute('data-currency'));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = formatCurrency(finalPrice, element.getAttribute('data-currency'));
                completedAnimations++;

                if (completedAnimations === priceValues.length) {
                    setTimeout(() => {
                        completeSound.currentTime = 0;
                        completeSound.play().catch(() => {});
                    }, 200);
                }
            }
        };
        animate();
    });
}

function formatCurrency(value, currency) {
    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'JPY': '¥',
        'CNY': '¥',
        'AUD': 'A$',
        'CAD': 'C$',
        'CHF': 'CHF',
        'INR': '₹',
        'MXN': '$'
    };

    const symbol = currencySymbols[currency] || '$';
    const isNoDecimal = ['JPY', 'CNY', 'KRW'];
    const decimals = isNoDecimal.includes(currency) ? 0 : 2;
    
    return symbol + value.toFixed(decimals);
}