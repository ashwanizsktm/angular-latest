import { createAction, props } from "@ngrx/store";
import { PostInterface } from "../types/PostInterface";

export const getPosts = createAction('[Posts] Get Posts')
export const getPostsSuccess = createAction('[Posts] Get Posts Success',
    props<{ posts: PostInterface[] }>()
)
export const getPostsFailure = createAction('[Posts] Get Posts failure',
    props<{ error: string }>()
)