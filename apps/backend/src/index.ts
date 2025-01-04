import { Hono } from 'hono'
import { app2 } from '@common/index'
import routes from './routes'

const app = new Hono()

app.route('/', routes);

app.get('/app', (c) => {
  return c.text(`${app2}`);
})

export default app
