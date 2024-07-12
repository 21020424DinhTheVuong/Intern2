// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyBFDy3Idxce0_8r7PxI-Orv1RQpmAO8nBA";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 0.2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

async function run() {
    const parts = [
        { text: "input: a json data that contains words and some details of these words {\n        \"data\": [\n{\n            \"word\": \"địa chỉ\",\n            \"_word\": \"dia chi\",\n            \"description\": \"Những thông tin cụ thể về chỗ ở, nơi làm việc của một người, một cơ quan, v.v.\",\n            \"tl\": \"Danh từ\"\n        },\n]\n}" },
        { text: "output: add  \"synset_vi\" field that contains synonym and same class words with \"wordd\" field {\n        \"data\": [\n{\n            \"word\": \"địa chỉ\",\n            \"_word\": \"dia chi\",\n            \"description\": \"Những thông tin cụ thể về chỗ ở, nơi làm việc của một người, một cơ quan, v.v.\",\n            \"tl\": \"Danh từ\",\n            \"synset_vi\": [\"địa chỉ nhà\", \"địa chỉ liên lạc\", \"nơi ở\", \"địa điểm\", \"đường\", \"số nhà\"]\n\n\n        },\n]\n}" },
        { text: "input: a json data that contains words and some details of these words {    \"data\": [        {            \"word\": \"rau diếp cá\",            \"_word\": \"rau diep ca\",            \"description\": \"\",            \"tl\": \"Cụm danh từ\"        },        {            \"word\": \"rằm trung thu\",            \"_word\": \"ram trung thu\",            \"description\": \"\",            \"tl\": \"Cụm danh từ\"        }    ]}" },
        { text: "output: add  \"synset_vi\" field that contains synonym and same class words with \"wordd\" field " },
    ];
    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
    });
    console.log(JSON.parse(result.response.text()));

}

run();