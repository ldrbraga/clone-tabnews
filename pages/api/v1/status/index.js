function status(request, response) {
  response.status(200).json({ chave: "value" });
}

export default status;