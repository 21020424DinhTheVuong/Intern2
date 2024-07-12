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
        { text: "input: a json data that contains words and some details of these words {    \"data\": [        {            \"word\": \"không nghe lời\",            \"_word\": \"khong nghe loi\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không cho\",            \"_word\": \"khong cho\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không cần\",            \"_word\": \"khong can\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không nên\",            \"_word\": \"khong nen\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không quen\",            \"_word\": \"khong quen\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không có\",            \"_word\": \"khong co\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không có chi\",            \"_word\": \"khong co chi\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không đẹp\",            \"_word\": \"khong dep\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"suy ra (Toán học)\",            \"_word\": \"suy ra (toan hoc)\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không muốn\",            \"_word\": \"khong muon\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không ngon\",            \"_word\": \"khong ngon\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"không dám\",            \"_word\": \"khong dam\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"gấp đôi\",            \"_word\": \"gap doi\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"gấp ba\",            \"_word\": \"gap ba\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"đi lạc (đường, rừng..)\",            \"_word\": \"di lac (duong, rung..)\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"ăn đủ\",            \"_word\": \"an du\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"ăn vừa\",            \"_word\": \"an vua\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"ăn ít\",            \"_word\": \"an it\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"gãy chân\",            \"_word\": \"gay chan\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        },        {            \"word\": \"gãy tay\",            \"_word\": \"gay tay\",            \"description\": \"\",            \"tl\": \"Ngữ động từ\"        }    ]}" },
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