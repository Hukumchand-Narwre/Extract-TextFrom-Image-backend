const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");
async function getText(req, res, next) {
  const key = process.env.AZURE_KEY;
  const endpoint = process.env.AZURE_ENDPOINT;
  const documentUrlRead = req.body.url;
  console.log(documentUrlRead, key, endpoint);
  const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
  const poller = await client.beginAnalyzeDocument("prebuilt-read", documentUrlRead);
  const { content, pages, languages, styles } = await poller.pollUntilDone();
  if (pages.length <= 0) {
    console.log("No pages were extracted from the document.");
  } else {
    req.content = content;
    next();
  }
}

module.exports = getText;
