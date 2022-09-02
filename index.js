const EXPRESS = require('express')
const APP = express()
const PORT = process.env.PORT || 3000

APP.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))