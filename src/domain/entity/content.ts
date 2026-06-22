import { Entity } from './entity.js'

export enum status {
  PUBLISHED = 'Published',
  REMOVED = 'Removed',
}

type ContentProps = {
  authorId: string
  title: string
  description: string
  Actiondate: Date
  imagesUrl: string[]
  status: status
  createdAt: Date
  deletedAt?: Date | null
  updatedAt?: Date | null
}

export class Content extends Entity<ContentProps> {
  get title() {
    return this.props.title
  }
  get description() {
    return this.props.description
  }
  get Actiondate() {
    return this.props.Actiondate
  }
  get imagesUrl() {
    return this.props.imagesUrl
  }
  get authorId() {
    return this.props.authorId
  }
  get Status() {
    return this.props.status
  }
  get createdAt() {
    return this.props.createdAt
  }
  get deletedAt(): Date | null {
    return this.props.deletedAt ?? null
  }
  get updatedAt(): Date | null {
    return this.props.updatedAt ?? null
  }
}
