export interface PostCardInterface {
  id?: string
  title: string
  description: string
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
