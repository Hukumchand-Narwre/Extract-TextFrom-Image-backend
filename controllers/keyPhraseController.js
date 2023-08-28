exports.keyPhrase = (req, res) => {
  getKeyPhrase();
  res.status(200).json({ data: "successfull" });
};

function getKeyPhrase() {
  const { TextAnalysisClient, AzureKeyCredential } = require("@azure/ai-language-text");
  const key = process.env.AZURE_KEY_AI_LANGUAGE;
  const endpoint = process.env.AZURE_ENDPOINT_AI_LANGUAGE;

  //example sentence for performing key phrase extraction
  const documents = ["Dr. Smith has a very modern medical office, and she has great staff."];

  //example of how to use the client to perform entity linking on a document
  async function main() {
    console.log("== key phrase extraction sample ==");

    const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(key));

    const results = await client.analyze("KeyPhraseExtraction", documents);

    for (const result of results) {
      console.log(`- Document ${result.id}`);
      if (!result.error) {
        console.log("\tKey phrases:");
        for (const phrase of result.keyPhrases) {
          console.log(`\t- ${phrase}`);
        }
      } else {
        console.error("  Error:", result.error);
      }
    }
  }

  main().catch((err) => {
    console.error("The sample encountered an error:", err);
  });
}

//https://language.cognitive.azure.com
