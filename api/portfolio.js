export const getPortfolio = async (api, data, headers = {}, params = {}) => {
    return await api.get('/auth/login', data, params)
}

export const addPortfolio = async (api, data, headers = {}, params = {}) => {
    return await api.post('/auth/user', '/auth/addUser', data, params)
}

export const modifyPortfolio = async (api, data, headers = {}, params = {}) => {
    return api.put('/auth/user', data, params)
}

export const removePortfolio = async (api, data, headers = {}, params = {}) => {
    return api.delete('/auth/user', data, params)
}
  
