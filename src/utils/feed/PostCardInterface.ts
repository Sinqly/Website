export interface PostCardInterface {
  post: {
    id?: string
    title: string
    description: string
    area: string
    image: string
  }
  user: {
    id: string
    name: string
    lastName: string
    username: string
    profileImage: string
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
    profileImage: string
  }
}