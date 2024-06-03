export const addOrder = async (api, data, headers = {}, params = {}) => {
    return await api.post('api/order', data, headers, params)
}

export const getOrder = async (api, data, headers = {}, params = {}) => {
    return await api.get('api/order', data, headers, params)
}

export const removeOrder = async (api, data, headers = {}, params = {}) => {
    return api.delete('api/order', data, headers, params)
}

export const getToken = async (api, data, headers = {}, params = {}) => {
    return await api.get('api/token', data, headers, params)
}
  
