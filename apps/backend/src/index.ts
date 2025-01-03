import { Hono } from 'hono'
import { app2 } from '@common/index'

const app = new Hono()

app.get('/app', (c) => {
  return c.text(`${app2}`);
})

export default app
