export type Author = {
    uniqueId: string
    avatarMedium: string
    nickname: string
    signature?: string
}

export type Music = {
    title: string
    authorName: string
}

export type Status = {
    diggCount: number
    commentCount: number
    shareCount: number
    playCount: number
}

export type Video = {
    cover: string
    playAddr: string
}

export type PostType = {
    author: Author
    desc: string
    music: Music
    stats: Status
    video: Video
}