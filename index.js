const EXPRESS = require('express')
const APP = EXPRESS()
const PORT = process.env.PORT || 3000

APP.get("/", (req, res) => res.send("<h1>Hello World</h1>"))

APP.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))