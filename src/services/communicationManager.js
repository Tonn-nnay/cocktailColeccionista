import api from './apiClient'

export async function getAllPkm() {
  const data = await api.get(
    ('/pokemon',
    {
      params: { limit: 1328 },
    }),
  )
  return data
}

export async function getPkm(name) {
  try {
    return await api.get(`/pokemon/${name}`).then((res) => (res = res.data))
  } catch {
    return { error: 'El pokèmon no existeix'}
  }
}
