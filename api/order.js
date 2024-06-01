export const addOrder = async (api, data, headers = {}, params = {}) => {
    return await api.post('/order', '/auth/addUser', data, params)
}

export const getOrder = async (api, data, headers = {}, params = {}) => {
    return await api.get('/order', data, params)
}

export const removeOrder = async (api, data, headers = {}, params = {}) => {
    return api.delete('/order', data, params)
}

export const getToken = async (api, data, headers = {}, params = {}) => {
    return await api.get('/token', data, params)
}
  
