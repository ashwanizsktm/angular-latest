import { PostInterface } from "./PostInterface";

export interface PostStateInterface {
    isLoading: boolean;
    posts: PostInterface[];
    error: string | null;
}