const app = require('express')()
const http = require('http').Server(app)
// const io = require('socket.io')(http) // if using socket.io
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const Next = next({ dir: '.', dev })
const handle = Next.getRequestHandler()

const PORT = process.env.PORT || 3000

app.get('/api', (req, res) => res.json({ message: 'Hello World!!!' }))

Next.prepare().then(_ => {
	 app.get('*', (req, res) => {
		if (req.url === '/sw.js' || req.url.startsWith('/precache-manifest')) {
			Next.serveStatic(req, res, path.join(__dirname, '.next', req.url))
		} else {
			handle(req, res)
		}
	})

	app.listen(PORT, err => {
		if (err) throw err

		console.log(`> next running on port ${PORT}`)
	})
})
