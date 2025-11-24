const https = require('https');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_KEY;

if (!apiKey) {
    console.error("No API key found in environment variables.");
    process.exit(1);
}

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const jsonData = JSON.parse(data);
            if (jsonData.error) {
                console.error("API Error:", jsonData.error);
                return;
            }

            if (!jsonData.models) {
                console.log("No models found or unexpected response structure.");
                console.log(data);
                return;
            }

            console.log("Generative Models:");
            jsonData.models.forEach(model => {
                if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes("generateContent")) {
                    console.log(model.name.replace("models/", ""));
                }
            });
        } catch (error) {
            console.error("Error parsing JSON:", error);
            console.log("Raw Data:", data);
        }
    });

}).on("error", (err) => {
    console.error("Error: " + err.message);
});
