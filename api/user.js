export const login = async (api, data, headers = {}, params = {}) => {
    return await api.get('/api/auth/login', data, params)
}

export const register = async (api, data, headers = {}, params = {}) => {
    return await api.post('/api/auth/user', '/auth/addUser', data, params)
}

export const getCurrentUser = async (api, data, headers = {}, params = {}) => {
    return await api.get('/api/auth/user', data, params)
}

export const modifyuser = async (api, data, headers = {}, params = {}) => {
    return api.put('/api/auth/user', data, params)
}

export const removeUser = async (api, data, headers = {}, params = {}) => {
    return api.delete('/api/auth/user', data, params)
}
  
