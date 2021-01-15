const port = process.env.PORT || 3000
const root = new URL('../src', import.meta.url)
const db = {
    host: 'localhost',
    port: 5432
}

export { port, root, db }
