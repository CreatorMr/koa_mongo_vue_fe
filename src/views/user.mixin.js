class User {
  constructor() {
    this.count = 0
    this.userShow = false
  }
  addCount() {
    this.count += 1
    this.userShow = this.count === 5
  }
}

export const userShow = new User()