import {Author} from "./PostType";

/* export type UserInfo = {
    avatarMedium: string
    nickname: string
    signature: string
    relation: number
    duetSetting: number
    stitchSetting: number
} */

type AuthorStats = {
    followingCount: number
    followerCount: number
    heartCount: number
    videoCount: number
}

export type UserInfo = {
    author: Author
    authorStats: AuthorStats
}