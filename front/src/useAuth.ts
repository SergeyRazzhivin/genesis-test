import appAxios from './appAxios.ts'

export default function () {
  async function auth() {
    await appAxios.get('http://localhost:3000/')
  }

  return {
    auth,
  }
}
