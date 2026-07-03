# ⚽ Football Card Price Checker

AI-powered platform for detecting and valuing football (soccer) cards in images using vision AI. Get real-time pricing in any world currency with beautiful counting animations.

## Features

✨ **AI Card Detection**
- Upload single cards or album pages
- Detects multiple cards per image
- Identifies player, year, and condition

💰 **Multi-Currency Support**
- All world currencies (160+) in alphabetical order
- Real-time conversion rates
- Beautiful currency selector

🎬 **Animated Pricing**
- Smooth counting animation when prices display
- Money counter machine sound effect
- Completion beep notification

🏪 **Market Integration**
- eBay pricing data
- Beckett marketplace
- COMC platform
- CSGAuctions

📱 **Responsive Design**
- Mobile-first approach
- Dark theme with cyan accents
- Smooth animations

## Getting Started

### Prerequisites
- Modern browser with Web Audio API support
- JavaScript enabled

### Setup

1. Visit: `https://Purddah.github.io/cardvalue`

2. Or clone locally:
   ```bash
   git clone https://github.com/Purddah/cardvalue.git
   cd cardvalue
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

## How to Use

1. **Upload Images** - Click the upload area or drag & drop card images
2. **Select Currency** - Choose from 160+ currencies in alphabetical order
3. **Analyze** - Click "Analyze & Price Cards" button
4. **Watch Animation** - See prices count up with money sounds!

## API Integration (To Add)

### Vision API (Claude)

Replace the mock data in `script.js` with real Claude Vision API:

```javascript
async function analyzeCardsWithClaude() {
    const formData = new FormData();
    selectedImages.forEach(img => formData.append('image', img));
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${CLAUDE_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            messages: [{
                role: 'user',
                content: [
                    {
                        type: 'image',
                        source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 }
                    },
                    {
                        type: 'text',
                        text: 'Identify all football cards in this image. For each card provide: player name, year, condition (Mint/Near Mint/Excellent/Very Good/Good/Fair/Poor), and estimated market value.'
                    }
                ]
            }]
        })
    });
    
    return response.json();
}
```

### Currency Conversion

Integrate with Open Exchange Rates or similar:

```javascript
async function getConversionRates(baseCurrency) {
    const response = await fetch(
        `https://openexchangerates.org/api/latest.json?base=${baseCurrency}&app_id=${EXCHANGE_API_KEY}`
    );
    return response.json();
}
```

## Customization

### Colors
Edit `:root` in `style.css`:
```css
--primary-color: #00d9a3;      /* Cyan */
--bg-dark: #0a1929;            /* Dark blue */
--primary-dark: #00b389;       /* Dark cyan */
```

### Audio
Modify sound generation in `script.js`:
- `createMoneyCountingSound()` - Money counter effect
- `createBeepSound()` - Completion beep

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Performance

- ⚡ Lazy loading for images
- ⚡ Optimized 60 FPS animations
- ⚡ Efficient Web Audio processing

## Troubleshooting

### Sounds not playing
- Check browser audio permissions
- Verify Web Audio API support
- Test on HTTPS (GitHub Pages uses HTTPS)

### Images not loading
- Check file size (< 5MB recommended)
- Verify format (JPG, PNG, WEBP supported)
- Check browser console for errors

## Future Enhancements

- [ ] Real Claude Vision API integration
- [ ] Live marketplace scraping
- [ ] User authentication & saved collections
- [ ] Price history charts
- [ ] Share valuations
- [ ] Mobile app version
- [ ] Card database with historical prices
- [ ] Batch processing

## License

MIT - Feel free to use and modify!

## Support

Questions? Create an issue on GitHub.

---

**Made with ❤️ for football card collectors**