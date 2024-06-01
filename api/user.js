export const login = async (api, data, headers = {}, params = {}) => {
    return await api.get('/auth/login', data, params)
}

export const register = async (api, data, headers = {}, params = {}) => {
    return await api.post('/auth/user', '/auth/addUser', data, params)
}

export const getCurrentUser = async (api, data, headers = {}, params = {}) => {
    return await api.get('/auth/user', data, params)
}

export const modifyuser = async (api, data, headers = {}, params = {}) => {
    return api.put('/auth/user', data, params)
}

export const removeUser = async (api, data, headers = {}, params = {}) => {
    return api.delete('/auth/user', data, params)
}
  
