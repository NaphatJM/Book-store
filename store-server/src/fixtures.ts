import db from './db'

async function loadFixtures(clearData = false){
    if(clearData){
        console.warn('clearing data')
        await db('book').del()
        await db('category').del()
    }
    await db.batchInsert('category', [
        {id: 1, title: 'Romance'},
        {id: 2, title: 'Fantasy'},
        {id: 3, title: 'Sci-fi'}
    ])
    await db.batchInsert('book', [
        { id: 1, title: 'Percy jackson', price: 490, stockAmount: 10, categoryId: 2 },
        { id: 2, title: 'Interstella', price: 299, stockAmount: 6, categoryId: 3 },
        { id: 3, title: 'Titanic', price: 399, stockAmount: 4, categoryId: 1 },
        { id: 4, title: 'Fantastic beast', price: 490, stockAmount: 7, categoryId: 2}
    ])
}
export default loadFixtures
