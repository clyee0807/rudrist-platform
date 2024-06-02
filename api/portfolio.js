export const getPortfolio = async (api, data, headers = {}, params = {}) => {
    return await api.get('/api/portfolio', data, params)
}

export const addPortfolio = async (api, data, headers = {}, params = {}) => {
    return await api.post('/api/portfolio', data, params)
}

export const modifyPortfolio = async (api, data, headers = {}, params = {}) => {
    return api.put('/api/portfolio', data, params)
}

export const removePortfolio = async (api, data, headers = {}, params = {}) => {
    return api.delete('/api/portfolio', data, params)
}
  
