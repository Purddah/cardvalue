// Initialize all currencies in alphabetical order
const CURRENCIES = {
    'AED': 'AED - UAE Dirham',
    'AFN': 'AFN - Afghan Afghani',
    'ALL': 'ALL - Albanian Lek',
    'AMD': 'AMD - Armenian Dram',
    'ANG': 'ANG - Neth. Antillean Guilder',
    'AOA': 'AOA - Angolan Kwanza',
    'ARS': 'ARS - Argentine Peso',
    'AUD': 'AUD - Australian Dollar',
    'AWG': 'AWG - Aruban Florin',
    'AZN': 'AZN - Azerbaijani Manat',
    'BAM': 'BAM - Bosnia Mark',
    'BBD': 'BBD - Barbadian Dollar',
    'BDT': 'BDT - Bangladeshi Taka',
    'BGN': 'BGN - Bulgarian Lev',
    'BHD': 'BHD - Bahraini Dinar',
    'BIF': 'BIF - Burundian Franc',
    'BMD': 'BMD - Bermudian Dollar',
    'BND': 'BND - Brunei Dollar',
    'BOB': 'BOB - Bolivian Boliviano',
    'BRL': 'BRL - Brazilian Real',
    'BSD': 'BSD - Bahamian Dollar',
    'BTC': 'BTC - Bitcoin',
    'BTN': 'BTN - Bhutanese Ngultrum',
    'BWP': 'BWP - Botswanan Pula',
    'BYN': 'BYN - Belarusian Ruble',
    'BZD': 'BZD - Belize Dollar',
    'CAD': 'CAD - Canadian Dollar',
    'CDF': 'CDF - Congolese Franc',
    'CHF': 'CHF - Swiss Franc',
    'CLF': 'CLF - Chilean Unit of Account',
    'CLP': 'CLP - Chilean Peso',
    'CNY': 'CNY - Chinese Yuan',
    'COP': 'COP - Colombian Peso',
    'CRC': 'CRC - Costa Rican Colon',
    'CUC': 'CUC - Cuban Convertible Peso',
    'CUP': 'CUP - Cuban Peso',
    'CVE': 'CVE - Cape Verdean Escudo',
    'CZK': 'CZK - Czech Koruna',
    'DJF': 'DJF - Djiboutian Franc',
    'DKK': 'DKK - Danish Krone',
    'DOP': 'DOP - Dominican Peso',
    'DZD': 'DZD - Algerian Dinar',
    'EGP': 'EGP - Egyptian Pound',
    'ERN': 'ERN - Eritrean Nakfa',
    'ETB': 'ETB - Ethiopian Birr',
    'EUR': 'EUR - Euro',
    'FJD': 'FJD - Fijian Dollar',
    'FKP': 'FKP - Falkland Pound',
    'GBP': 'GBP - British Pound',
    'GEL': 'GEL - Georgian Lari',
    'GHS': 'GHS - Ghanaian Cedi',
    'GIP': 'GIP - Gibraltar Pound',
    'GMD': 'GMD - Gambian Dalasi',
    'GNF': 'GNF - Guinean Franc',
    'GTQ': 'GTQ - Guatemalan Quetzal',
    'GYD': 'GYD - Guyanaese Dollar',
    'HKD': 'HKD - Hong Kong Dollar',
    'HNL': 'HNL - Honduran Lempira',
    'HRK': 'HRK - Croatian Kuna',
    'HTG': 'HTG - Haitian Gourde',
    'HUF': 'HUF - Hungarian Forint',
    'IDR': 'IDR - Indonesian Rupiah',
    'ILS': 'ILS - Israeli Shekel',
    'INR': 'INR - Indian Rupee',
    'IQD': 'IQD - Iraqi Dinar',
    'IRR': 'IRR - Iranian Rial',
    'ISK': 'ISK - Icelandic Krona',
    'JMD': 'JMD - Jamaican Dollar',
    'JOD': 'JOD - Jordanian Dinar',
    'JPY': 'JPY - Japanese Yen',
    'KES': 'KES - Kenyan Shilling',
    'KGS': 'KGS - Kyrgyzstani Som',
    'KHR': 'KHR - Cambodian Riel',
    'KMF': 'KMF - Comorian Franc',
    'KPW': 'KPW - North Korean Won',
    'KRW': 'KRW - South Korean Won',
    'KWD': 'KWD - Kuwaiti Dinar',
    'KYD': 'KYD - Caymanian Dollar',
    'KZT': 'KZT - Kazakhstani Tenge',
    'LAK': 'LAK - Laotian Kip',
    'LBP': 'LBP - Lebanese Pound',
    'LKR': 'LKR - Sri Lankan Rupee',
    'LRD': 'LRD - Liberian Dollar',
    'LSL': 'LSL - Lesotho Loti',
    'LYD': 'LYD - Libyan Dinar',
    'MAD': 'MAD - Moroccan Dirham',
    'MDL': 'MDL - Moldovan Leu',
    'MGA': 'MGA - Malagasy Ariary',
    'MKD': 'MKD - Macedonian Denar',
    'MMK': 'MMK - Myanma Kyat',
    'MNT': 'MNT - Mongolian Tugrik',
    'MOP': 'MOP - Macanese Pataca',
    'MRU': 'MRU - Mauritanian Ouguiya',
    'MUR': 'MUR - Mauritian Rupee',
    'MVR': 'MVR - Maldivian Rufiyaa',
    'MWK': 'MWK - Malawian Kwacha',
    'MXN': 'MXN - Mexican Peso',
    'MYR': 'MYR - Malaysian Ringgit',
    'MZN': 'MZN - Mozambican Metical',
    'NAD': 'NAD - Namibian Dollar',
    'NGN': 'NGN - Nigerian Naira',
    'NIO': 'NIO - Nicaraguan Cordoba',
    'NOK': 'NOK - Norwegian Krone',
    'NPR': 'NPR - Nepalese Rupee',
    'NZD': 'NZD - New Zealand Dollar',
    'OMR': 'OMR - Omani Rial',
    'PAB': 'PAB - Panamanian Balboa',
    'PEN': 'PEN - Peruvian Nuevo Sol',
    'PGK': 'PGK - Papua New Guinean Kina',
    'PHP': 'PHP - Philippine Peso',
    'PKR': 'PKR - Pakistani Rupee',
    'PLN': 'PLN - Polish Zloty',
    'PYG': 'PYG - Paraguayan Guarani',
    'QAR': 'QAR - Qatari Rial',
    'RON': 'RON - Romanian Leu',
    'RSD': 'RSD - Serbian Dinar',
    'RUB': 'RUB - Russian Ruble',
    'RWF': 'RWF - Rwandan Franc',
    'SAR': 'SAR - Saudi Riyal',
    'SBD': 'SBD - Solomon Islander Dollar',
    'SCR': 'SCR - Seychellois Rupee',
    'SDG': 'SDG - Sudanese Pound',
    'SEK': 'SEK - Swedish Krona',
    'SGD': 'SGD - Singapore Dollar',
    'SHP': 'SHP - Saint Helenian Pound',
    'SLL': 'SLL - Sierra Leonean Leone',
    'SOS': 'SOS - Somali Shilling',
    'SRD': 'SRD - Surinamese Dollar',
    'STN': 'STN - Sao Tome Principe Dobra',
    'SYP': 'SYP - Syrian Pound',
    'SZL': 'SZL - Swazi Lilangeni',
    'THB': 'THB - Thai Baht',
    'TJS': 'TJS - Tajikistani Somoni',
    'TMT': 'TMT - Turkmenistani Manat',
    'TND': 'TND - Tunisian Dinar',
    'TOP': 'TOP - Tongan Paanga',
    'TRY': 'TRY - Turkish Lira',
    'TTD': 'TTD - Trinidad & Tobago Dollar',
    'TVD': 'TVD - Tuvalu Dollar',
    'TWD': 'TWD - New Taiwan Dollar',
    'TZS': 'TZS - Tanzanian Shilling',
    'UAH': 'UAH - Ukrainian Hryvnia',
    'UGX': 'UGX - Ugandan Shilling',
    'USD': 'USD - US Dollar',
    'UYU': 'UYU - Uruguayan Peso',
    'UZS': 'UZS - Uzbekistani Som',
    'VES': 'VES - Venezuelan Bolivar',
    'VND': 'VND - Vietnamese Dong',
    'VUV': 'VUV - Vanuatu Vatu',
    'WST': 'WST - Samoan Tala',
    'XAF': 'XAF - CFA Franc BEAC',
    'XCD': 'XCD - East Caribbean Dollar',
    'XOF': 'XOF - CFA Franc BCEAO',
    'XPF': 'XPF - CFP Franc',
    'YER': 'YER - Yemeni Rial',
    'ZAR': 'ZAR - South African Rand',
    'ZMW': 'ZMW - Zambian Kwacha',
    'ZWL': 'ZWL - Zimbabwean Dollar'
};

let selectedImages = [];
let conversionRates = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    initializeAudio();
    populateCurrencySelect();
});

function initializeUI() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const takePhotoBtn = document.getElementById('takePhotoBtn');
    const analyzeBtn = document.getElementById('analyzeBtn');

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
}

function handleFiles(files) {
    const imageFiles = files.filter(f => f.type.startsWith('image/'));
    selectedImages = imageFiles;
    console.log(`Selected ${selectedImages.length} images`);
    alert(`${imageFiles.length} image(s) selected and ready to analyze!`);
}

function populateCurrencySelect() {
    const select = document.getElementById('currencySelect');
    select.innerHTML = '';
    Object.entries(CURRENCIES).sort().forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        select.appendChild(option);
    });
    select.value = 'USD';
}

function initializeAudio() {
    // Money counting sound (simulated with Web Audio API)
    const moneyCountingAudio = document.getElementById('moneyCountingAudio');
    moneyCountingAudio.src = createMoneyCountingSound();

    // Beep sound (simulated with Web Audio API)
    const beepAudio = document.getElementById('beepAudio');
    beepAudio.src = createBeepSound();
}

function createMoneyCountingSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.8;
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);

    // Create a series of quick beeps to simulate money counting
    const beepCount = 8;
    for (let i = 0; i < beepCount; i++) {
        const startSample = (i / beepCount) * duration * sampleRate;
        const endSample = ((i + 0.7) / beepCount) * duration * sampleRate;
        const freq = 600 + i * 80;

        for (let j = startSample; j < endSample; j++) {
            const t = (j - startSample) / sampleRate;
            data[Math.floor(j)] = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 8);
        }
    }

    const blob = new Blob([getWavBlob(buffer)], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
}

function createBeepSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.4;
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);

    // Create double beep - first higher, then lower
    const freq1 = 1200;
    const freq2 = 900;
    const midPoint = duration * sampleRate * 0.5;

    for (let i = 0; i < duration * sampleRate; i++) {
        const t = i / sampleRate;
        const freq = i < midPoint ? freq1 : freq2;
        data[i] = Math.sin(2 * Math.PI * freq * (t % (1 / freq))) * Math.exp(-t * 5);
    }

    const blob = new Blob([getWavBlob(buffer)], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
}

function getWavBlob(audioBuffer) {
    const length = audioBuffer.length * audioBuffer.numberOfChannels * 2 + 44;
    const arrayBuffer = new ArrayBuffer(length);
    const view = new DataView(arrayBuffer);
    const channels = [];
    let offset = 0;

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
        alert('Please select images first');
        return;
    }

    const loadingState = document.getElementById('loadingState');
    const resultsSection = document.getElementById('resultsSection');
    loadingState.style.display = 'flex';

    try {
        // For now using mock data - integrate with Claude Vision API
        const mockCards = await getMockCardAnalysis();
        const currency = document.getElementById('currencySelect').value;

        // Convert prices to selected currency
        const convertedCards = mockCards.map(card => {
            const convertedPrices = {};
            Object.keys(CURRENCIES).forEach(code => {
                convertedPrices[code] = Math.random() * 500 + 20;
            });
            return {
                ...card,
                prices: convertedPrices
            };
        });

        displayResults(convertedCards, currency);
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
            image: 'https://via.placeholder.com/200x280?text=Ronaldo'
        },
        {
            name: 'Lionel Messi',
            year: 2005,
            condition: 'Near Mint',
            image: 'https://via.placeholder.com/200x280?text=Messi'
        },
        {
            name: 'Pele',
            year: 1970,
            condition: 'Good',
            image: 'https://via.placeholder.com/200x280?text=Pele'
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
                    <div class="price-counter value">$${card.prices[currency]?.toFixed(2) || 'N/A'}</div>
                </div>
            </div>
        </div>
    `).join('');

    resultsSection.style.display = 'block';
    playCountingAnimation();
}

function playCountingAnimation() {
    const priceCounters = document.querySelectorAll('.price-counter');
    const moneyAudio = document.getElementById('moneyCountingAudio');

    let completedAnimations = 0;

    priceCounters.forEach((counter, index) => {
        const finalValue = parseFloat(counter.textContent.replace(/[^0-9.]/g, ''));
        let currentValue = 0;
        const duration = 1500;
        const steps = 40;
        const increment = finalValue / steps;
        let step = 0;

        // Play money sound with slight delay for each card
        setTimeout(() => {
            moneyAudio.currentTime = 0;
            moneyAudio.play().catch(e => console.log('Audio play failed:', e));
        }, index * 100);

        const interval = setInterval(() => {
            currentValue += increment;
            counter.textContent = `$${currentValue.toFixed(2)}`;
            step++;

            if (step >= steps) {
                counter.textContent = `$${finalValue.toFixed(2)}`;
                clearInterval(interval);
                completedAnimations++;

                // Play beep when all animations complete
                if (completedAnimations === priceCounters.length) {
                    setTimeout(() => {
                        document.getElementById('beepAudio').currentTime = 0;
                        document.getElementById('beepAudio').play().catch(e => console.log('Beep play failed:', e));
                    }, 200);
                }
            }
        }, duration / steps);
    });
}

console.log('Football Card Price Checker loaded!');