const express = require("express");
const cors = require("cors");
const blobRoute = require("./routes/blobRoutes");
const keyPhraseRoute = require("./routes/keyPhrase");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/getImage", blobRoute);
app.use("/api/v1/getPhraselText", keyPhraseRoute);

const port = 3000;

// const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");
// const { default: blobRoutes } = require("./routes/blobRoutes");

// //use your `key` and `endpoint` environment variables
// const key = process.env.AZURE_KEY;
// const endpoint = process.env.AZURE_ENDPOINT;

// // sample document
// const documentUrlRead =
//   "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/rest-api/read.png";

// // helper function
// function* getTextOfSpans(content, spans) {
//   for (const span of spans) {
//     yield content.slice(span.offset, span.offset + span.length);
//   }
// }

// async function main() {
//   // create your `DocumentAnalysisClient` instance and `AzureKeyCredential` variable
//   const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
//   const poller = await client.beginAnalyzeDocument("prebuilt-read", documentUrlRead);

//   const { content, pages, languages, styles } = await poller.pollUntilDone();

//   if (pages.length <= 0) {
//     console.log("No pages were extracted from the document.");
//   } else {
//     console.log("Pages:");
//     for (const page of pages) {
//       console.log("- Page", page.pageNumber, `(unit: ${page.unit})`);
//       console.log(`  ${page.width}x${page.height}, angle: ${page.angle}`);
//       console.log(`  ${page.lines.length} lines, ${page.words.length} words`);

//       if (page.lines.length > 0) {
//         console.log("  Lines:");

//         for (const line of page.lines) {
//           console.log(`  - "${line.content}"`);

//           // The words of the line can also be iterated independently. The words are computed based on their
//           // corresponding spans.
//           for (const word of line.words()) {
//             console.log(`    - "${word.content}"`);
//           }
//         }
//       }
//     }
//   }

//   if (languages.length <= 0) {
//     console.log("No language spans were extracted from the document.");
//   } else {
//     console.log("Languages:");
//     for (const languageEntry of languages) {
//       console.log(`- Found language: ${languageEntry.languageCode} (confidence: ${languageEntry.confidence})`);
//       for (const text of getTextOfSpans(content, languageEntry.spans)) {
//         const escapedText = text.replace(/\r?\n/g, "\\n").replace(/"/g, '\\"');
//         console.log(`  - "${escapedText}"`);
//       }
//     }
//   }

//   if (styles.length <= 0) {
//     console.log("No text styles were extracted from the document.");
//   } else {
//     console.log("Styles:");
//     for (const style of styles) {
//       console.log(`- Handwritten: ${style.isHandwritten ? "yes" : "no"} (confidence=${style.confidence})`);

//       for (const word of getTextOfSpans(content, style.spans)) {
//         console.log(`  - "${word}"`);
//       }
//     }
//   }
// }

// main().catch((error) => {
//   console.error("An error occurred:", error);
//   process.exit(1);
// });

app.listen(port, () => {
  console.log("port running on");
});
