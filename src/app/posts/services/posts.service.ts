import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { PostInterface } from "../types/PostInterface";

@Injectable()

export class PostsService {
    getPosts(): Observable<PostInterface[]> {
        const posts = [
            { id: 1, title: 'first post' },
            { id: 2, title: 'second post' },
            { id: 1, title: 'third post' }
        ];
        return of(posts).pipe(delay(2000))
    }
}