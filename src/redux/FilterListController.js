const data = require('../data/data.json').data

export const getAllAdvisors = () => data.advisorProfileCollection.items

export const getAdvisorById = (id) => data.advisorProfileCollection.items.find(item => item.sys.id === id)

export const getCategoriesById = (id) => getAdvisorById(id).categoriesCollection

export const getAdvisorByName = (name) => data.advisorProfileCollection.items.filter(item => item.displayName.includes(name))

export const getAdvisorByCategory = (categoryName) => {
    data.advisorProfileCollection.items.filter(item => {
        item.categoriesCollection.items.find(category => category.displayName.includes(categoryName))
    })
}