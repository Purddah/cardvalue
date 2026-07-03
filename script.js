// All world currencies in alphabetical order
const CURRENCIES = {
    'AED': { name: 'UAE Dirham', flag: '🇦🇪' },
    'AFN': { name: 'Afghan Afghani', flag: '🇦🇫' },
    'ALL': { name: 'Albanian Lek', flag: '🇦🇱' },
    'AMD': { name: 'Armenian Dram', flag: '🇦🇲' },
    'ARS': { name: 'Argentine Peso', flag: '🇦🇷' },
    'AUD': { name: 'Australian Dollar', flag: '🇦🇺' },
    'AZN': { name: 'Azerbaijani Manat', flag: '🇦🇿' },
    'BAM': { name: 'Bosnia Mark', flag: '🇧🇦' },
    'BDT': { name: 'Bangladeshi Taka', flag: '🇧🇩' },
    'BGN': { name: 'Bulgarian Lev', flag: '🇧🇬' },
    'BHD': { name: 'Bahraini Dinar', flag: '🇧🇭' },
    'BRL': { name: 'Brazilian Real', flag: '🇧🇷' },
    'BTC': { name: 'Bitcoin', flag: '₿' },
    'CAD': { name: 'Canadian Dollar', flag: '🇨🇦' },
    'CHF': { name: 'Swiss Franc', flag: '🇨🇭' },
    'CLP': { name: 'Chilean Peso', flag: '🇨🇱' },
    'CNY': { name: 'Chinese Yuan', flag: '🇨🇳' },
    'COP': { name: 'Colombian Peso', flag: '🇨🇴' },
    'CRC': { name: 'Costa Rican Colón', flag: '🇨🇷' },
    'CZK': { name: 'Czech Koruna', flag: '🇨🇿' },
    'DKK': { name: 'Danish Krone', flag: '🇩🇰' },
    'DOP': { name: 'Dominican Peso', flag: '🇩🇴' },
    'EGP': { name: 'Egyptian Pound', flag: '🇪🇬' },
    'EUR': { name: 'Euro', flag: '🇪🇺' },
    'GBP': { name: 'British Pound', flag: '🇬🇧' },
    'GEL': { name: 'Georgian Lari', flag: '🇬🇪' },
    'GHS': { name: 'Ghanaian Cedi', flag: '🇬🇭' },
    'HKD': { name: 'Hong Kong Dollar', flag: '🇭🇰' },
    'HNL': { name: 'Honduran Lempira', flag: '🇭🇳' },
    'HRK': { name: 'Croatian Kuna', flag: '🇭🇷' },
    'HUF': { name: 'Hungarian Forint', flag: '🇭🇺' },
    'IDR': { name: 'Indonesian Rupiah', flag: '🇮🇩' },
    'ILS': { name: 'Israeli Shekel', flag: '🇮🇱' },
    'INR': { name: 'Indian Rupee', flag: '🇮🇳' },
    'ISK': { name: 'Icelandic Króna', flag: '🇮🇸' },
    'JPY': { name: 'Japanese Yen', flag: '🇯🇵' },
    'KES': { name: 'Kenyan Shilling', flag: '🇰🇪' },
    'KRW': { name: 'South Korean Won', flag: '🇰🇷' },
    'KWD': { name: 'Kuwaiti Dinar', flag: '🇰🇼' },
    'KZT': { name: 'Kazakhstani Tenge', flag: '🇰🇿' },
    'LBP': { name: 'Lebanese Pound', flag: '🇱🇧' },
    'LKR': { name: 'Sri Lankan Rupee', flag: '🇱🇰' },
    'MAD': { name: 'Moroccan Dirham', flag: '🇲🇦' },
    'MXN': { name: 'Mexican Peso', flag: '🇲🇽' },
    'MYR': { name: 'Malaysian Ringgit', flag: '🇲🇾' },
    'NGN': { name: 'Nigerian Naira', flag: '🇳🇬' },
    'NOK': { name: 'Norwegian Krone', flag: '🇳🇴' },
    'NZD': { name: 'New Zealand Dollar', flag: '🇳🇿' },
    'PEN': { name: 'Peruvian Sol', flag: '🇵🇪' },
    'PHP': { name: 'Philippine Peso', flag: '🇵🇭' },
    'PKR': { name: 'Pakistani Rupee', flag: '🇵🇰' },
    'PLN': { name: 'Polish Zloty', flag: '🇵🇱' },
    'RON': { name: 'Romanian Leu', flag: '🇷🇴' },
    'RUB': { name: 'Russian Ruble', flag: '🇷🇺' },
    'SAR': { name: 'Saudi Riyal', flag: '🇸🇦' },
    'SEK': { name: 'Swedish Krona', flag: '🇸🇪' },
    'SGD': { name: 'Singapore Dollar', flag: '🇸🇬' },
    'THB': { name: 'Thai Baht', flag: '🇹🇭' },
    'TRY': { name: 'Turkish Lira', flag: '🇹🇷' },
    'TWD': { name: 'Taiwan Dollar', flag: '🇹🇼' },
    'UAH': { name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
    'USD': { name: 'US Dollar', flag: '🇺🇸' },
    'UYU': { name: 'Uruguayan Peso', flag: '🇺🇾' },
    'VND': { name: 'Vietnamese Dong', flag: '🇻🇳' },
    'ZAR': { name: 'South African Rand', flag: '🇿🇦' }
};

let selectedImages = [];
let selectedCurrency = 'USD';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    initializeAudio();
});

function initializeUI() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const takePhotoBtn = document.getElementById('takePhotoBtn');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const currencySelect = document.getElementById('currencySelect');

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    });

    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => handleFiles(Array.from(e.target.files)));
    browseBtn.addEventListener('click', () => fileInput.click());
    
    takePhotoBtn.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment';
        input.addEventListener('change', (e) => handleFiles(Array.from(e.target.files)));
        input.click();
    });

    analyzeBtn.addEventListener('click', analyzeCards);
    
    // Currency change
    currencySelect.addEventListener('change', (e) => {
        selectedCurrency = e.target.value;
        const currencyData = CURRENCIES[selectedCurrency];
        document.getElementById('selectedCurrencyDisplay').textContent = `${selectedCurrency} ${currencyData.flag}`;
    });

    // Set initial currency display
    document.getElementById('selectedCurrencyDisplay').textContent = 'USD 🇺🇸';
}

function handleFiles(files) {
    const imageFiles = files.filter(f => f.type.startsWith('image/'));
    selectedImages = imageFiles;
    
    if (imageFiles.length > 0) {
        displayImagePreviews();
    }
}

function displayImagePreviews() {
    const previewContainer = document.getElementById('previewContainer');
    const imagePreview = document.getElementById('imagePreview');
    previewContainer.innerHTML = '';
    
    selectedImages.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const div = document.createElement('div');
            div.className = 'preview-item';
            div.innerHTML = `
                <img src="${e.target.result}" alt="Preview ${index + 1}">
                <button class="remove-btn" onclick="removeImage(${index})">✕</button>
            `;
            previewContainer.appendChild(div);
        };
        reader.readAsDataURL(file);
    });
    
    imagePreview.style.display = selectedImages.length > 0 ? 'block' : 'none';
}

function removeImage(index) {
    selectedImages.splice(index, 1);
    displayImagePreviews();
}

function initializeAudio() {
    const moneyCountingAudio = document.getElementById('moneyCountingAudio');
    moneyCountingAudio.src = createMoneyCountingSound();

    const beepAudio = document.getElementById('beepAudio');
    beepAudio.src = createBeepSound();
}

function createMoneyCountingSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 1.0;
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);

    // Create realistic money counting machine sound
    // Multiple rapid pulses simulating bill counter
    const pulseCount = 12;
    for (let i = 0; i < pulseCount; i++) {
        const startSample = (i / pulseCount) * duration * sampleRate;
        const endSample = ((i + 0.6) / pulseCount) * duration * sampleRate;
        const freq = 400 + i * 60 + Math.sin(i * 0.5) * 100; // Variable frequency

        for (let j = startSample; j < endSample; j++) {
            const t = (j - startSample) / sampleRate;
            // Multiple sine waves for richer sound
            const wave1 = Math.sin(2 * Math.PI * freq * t);
            const wave2 = Math.sin(2 * Math.PI * (freq * 1.5) * t) * 0.3;
            data[Math.floor(j)] = (wave1 + wave2) * 0.7 * Math.exp(-t * 5);
        }
    }

    const blob = new Blob([getWavBlob(buffer)], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
}

function createBeepSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.5;
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);

    // Create double beep - first higher, then lower
    const freq1 = 1200;
    const freq2 = 900;
    const midPoint = duration * sampleRate * 0.6;

    for (let i = 0; i < duration * sampleRate; i++) {
        const t = i / sampleRate;
        const freq = i < midPoint ? freq1 : freq2;
        const wave = Math.sin(2 * Math.PI * freq * t);
        data[i] = wave * Math.exp(-t * 4);
    }

    const blob = new Blob([getWavBlob(buffer)], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
}

function getWavBlob(audioBuffer) {
    const length = audioBuffer.length * audioBuffer.numberOfChannels * 2 + 44;
    const arrayBuffer = new ArrayBuffer(length);
    const view = new DataView(arrayBuffer);
    const channels = [];

    for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
        channels.push(audioBuffer.getChannelData(i));
    }

    const writeString = (view, offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + audioBuffer.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, audioBuffer.sampleRate, true);
    view.setUint32(28, audioBuffer.sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, audioBuffer.length * 2, true);

    let index = 44;
    for (let i = 0; i < audioBuffer.length; i++) {
        view.setInt16(index, channels[0][i] * 0x7fff, true);
        index += 2;
    }

    return arrayBuffer;
}

async function analyzeCards() {
    if (selectedImages.length === 0) {
        alert('Please select at least one image');
        return;
    }

    const loadingState = document.getElementById('loadingState');
    const resultsSection = document.getElementById('resultsSection');
    loadingState.style.display = 'flex';

    try {
        // Mock card analysis - Replace with real Claude Vision API
        const mockCards = await getMockCardAnalysis();
        
        // Convert prices to selected currency
        const convertedCards = mockCards.map(card => {
            const convertedPrices = {};
            const basePrice = card.basePrice || 150;
            Object.keys(CURRENCIES).forEach(code => {
                // Simple mock conversion
                const rates = {
                    'USD': 1,
                    'EUR': 0.92,
                    'GBP': 0.79,
                    'JPY': 149.50,
                    'CNY': 7.24,
                    'AUD': 1.53,
                    'CAD': 1.36,
                    'CHF': 0.88,
                    'INR': 83.12,
                    'MXN': 17.05
                };
                convertedPrices[code] = basePrice * (rates[code] || 1) + (Math.random() * 50 - 25);
            });
            return {
                ...card,
                prices: convertedPrices
            };
        });

        displayResults(convertedCards, selectedCurrency);
    } catch (error) {
        console.error('Error analyzing cards:', error);
        alert('Error analyzing cards. Please try again.');
    } finally {
        loadingState.style.display = 'none';
    }
}

function getMockCardAnalysis() {
    // Mock data - Replace with real Claude Vision API call
    return Promise.resolve([
        {
            name: 'Cristiano Ronaldo',
            year: 2008,
            condition: 'Mint',
            basePrice: 250,
            image: 'https://via.placeholder.com/200x280?text=Ronaldo&bg=ff6b6b&text_color=fff'
        },
        {
            name: 'Lionel Messi',
            year: 2005,
            condition: 'Near Mint',
            basePrice: 280,
            image: 'https://via.placeholder.com/200x280?text=Messi&bg=4c6ef5&text_color=fff'
        },
        {
            name: 'Pelé',
            year: 1970,
            condition: 'Good',
            basePrice: 180,
            image: 'https://via.placeholder.com/200x280?text=Pele&bg=1f9e44&text_color=fff'
        },
        {
            name: 'Diego Maradona',
            year: 1986,
            condition: 'Excellent',
            basePrice: 320,
            image: 'https://via.placeholder.com/200x280?text=Maradona&bg=fab005&text_color=fff'
        }
    ]);
}

function displayResults(cards, currency) {
    const resultsSection = document.getElementById('resultsSection');
    const cardsResults = document.getElementById('cardsResults');

    cardsResults.innerHTML = cards.map((card, idx) => `
        <div class="card-result" style="animation-delay: ${idx * 0.1}s">
            <img src="${card.image}" alt="${card.name}">
            <div class="card-info">
                <h3>${card.name}</h3>
                <p>${card.year}</p>
                <span class="card-condition">${card.condition}</span>
            </div>
            <div class="card-prices">
                <div class="price-item">
                    <label>${currency}</label>
                    <div class="price-counter value" data-price="${card.prices[currency].toFixed(2)}">$0.00</div>
                </div>
            </div>
        </div>
    `).join('');

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    playCountingAnimation();
}

function playCountingAnimation() {
    const priceCounters = document.querySelectorAll('.price-counter');
    const moneyAudio = document.getElementById('moneyCountingAudio');
    const beepAudio = document.getElementById('beepAudio');

    let completedAnimations = 0;

    priceCounters.forEach((counter, index) => {
        const finalValue = parseFloat(counter.getAttribute('data-price'));
        let currentValue = 0;
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = finalValue / steps;
        let step = 0;

        // Play money sound with staggered start
        setTimeout(() => {
            moneyAudio.currentTime = 0;
            moneyAudio.play().catch(e => console.log('Money sound failed:', e));
        }, index * 150);

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
            }
            counter.textContent = formatPrice(currentValue);
            step++;

            if (step >= steps) {
                counter.textContent = formatPrice(finalValue);
                clearInterval(interval);
                completedAnimations++;

                // Play beep when all animations complete
                if (completedAnimations === priceCounters.length) {
                    setTimeout(() => {
                        beepAudio.currentTime = 0;
                        beepAudio.play().catch(e => console.log('Beep sound failed:', e));
                    }, 300);
                }
            }
        }, duration / steps);
    });
}

function formatPrice(price) {
    if (selectedCurrency === 'JPY' || selectedCurrency === 'CNY' || selectedCurrency === 'VND') {
        return Math.round(price).toLocaleString();
    }
    return '$' + price.toFixed(2);
}

console.log('Football Card Price Checker loaded successfully! 🎉');