import db from './db'

async function loadFixtures(clearData = false){
    if(clearData){
        console.warn('clearing data')
        await db('category').del()
    }
    await db.batchInsert('category', [
        {id: 1, title: 'Romance'},
        {id: 2, title: 'Horror'},
        {id: 3, title: 'Sci-fi'}
    ])
}
export default loadFixtures
