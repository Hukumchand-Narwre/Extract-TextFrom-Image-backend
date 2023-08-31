exports.blobLinkController = async (req, res) => {
  const content = req.content;
  console.log(content);
  res.status(200).send(content);
};
