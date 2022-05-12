export default {
  methods: {
    getElement: (id) => {
      return new Promise((resolve, reject) => {
        let count = 0
        const interval = setInterval(() => {
          const el = document.querySelector(id)

          if (el) {
            clearInterval(interval)
            return resolve(el)
          } else if (count > 20) {
            clearInterval(interval)
            // eslint-disable-next-line prefer-promise-reject-errors
            return reject('fail to find element')
          }

          count += 1
        }, 100)
      })
    },
    async goToElement (anchor = null) {
      if (
        !this.$route.name ||
        this.$route.name === 'page-slug' ||
        this.$route.name === 'index'
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return null
      }

      try {
        const { id } = this.$route.meta
        const el = await this.getElement(anchor || id)
        const top = el.offsetTop

        if (top !== undefined) {
          window.scrollTo({ top, behavior: 'smooth' })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
