const EXPRESS = require('express')
const APP = express()
const PORT = process.env.PORT || 3000

APP.get("/", (req, res) => req.send("<h1>Hello World</h1>"))

APP.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))