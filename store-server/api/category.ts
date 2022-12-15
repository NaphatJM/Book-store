import Router from 'koa-router'
const router = new Router()
router
    .get('/', async(ctx,next) => {
        ctx.body = [
            {id:1, title:'romance'},
            {id:2, title:'Horror'}
        ]
    })
export default router
