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
        { text: "input: a json data that contains words and some details of these words {    \"data\": [        {            \"word\": \"kia\",            \"_word\": \"kia\",            \"description\": \"Từ dùng để chỉ một sự vật, địa điểm, hiện tượng ở xa vị trí của người nói, nhưng trong phạm vi có thể nhìn thấy cụ thể.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (2 người) (đại từ)\",            \"_word\": \"chung toi (2 nguoi) (dai tu)\",            \"description\": \"Chỉ hai người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (3 người) (đại từ)\",            \"_word\": \"chung toi (3 nguoi) (dai tu)\",            \"description\": \"Chỉ ba người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (4 người) (đại từ)\",            \"_word\": \"chung toi (4 nguoi) (dai tu)\",            \"description\": \"Chỉ bốn người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (5 người) (đại từ)\",            \"_word\": \"chung toi (5 nguoi) (dai tu)\",            \"description\": \"Chỉ năm người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (đại từ)\",            \"_word\": \"chung toi (dai tu)\",            \"description\": \"Tổ hợp dùng để nhân danh một số người mà tự xưng.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"các bạn (2 người) \",            \"_word\": \"cac ban (2 nguoi) \",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"họ (2 người) (đại từ)\",            \"_word\": \"ho (2 nguoi) (dai tu)\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"họ (đại từ)\",            \"_word\": \"ho (dai tu)\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"ai\",            \"_word\": \"ai\",            \"description\": \"Từ dùng để nói về người nào đó, không rõ. \",            \"tl\": \"Đại từ\"        },        {            \"word\": \"bao nhiêu?\",            \"_word\": \"bao nhieu?\",            \"description\": \"Số lượng không rõ nhiều hay ít (thường dùng để hỏi).\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"các bạn\",            \"_word\": \"cac ban\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"là gì?\",            \"_word\": \"la gi?\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"mấy giờ?\",            \"_word\": \"may gio?\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"thế nào?\",            \"_word\": \"the nao?\",            \"description\": \"Tổ hợp biểu thị có một điều muốn hỏi.\",            \"tl\": \"Đại từ\"        }    ]}" },
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