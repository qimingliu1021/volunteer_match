export function handler(req, res) {
  if (req.method === "GET") {
    const { volunteer, opportunity } = req.body;
    // Perform matching logic here
    res.status(200).json({ message: "Matched successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
