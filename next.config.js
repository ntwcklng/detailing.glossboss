module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/leistungen': { page: '/leistungen' },
      '/anfahrt': { page: '/anfahrt' },
      '/impressum': { page: '/impressum' },
      '/referenzen': { page: '/referenzen' },
      '/team': { page: '/team' }
    }
  }
}
