export interface PostCardInterface {
  post: {
    id: string
    title: string
    description: string
    area: string
    image: string
    user: {
      id: number
      name: string
      lastName: string
      username: string
      email: string
      password: string
      phone: string
      cpf: string
      biography: string
      profileImage?: string | undefined
    }
  }
}

export interface PostInterface {
  dateTime: string
  title: string
  description: string
  file?: File
  area: string
  image?: string
  user: {
    id: string
    name: string
    lastName: string
    username: string
    profileImage?: string
  }
}
