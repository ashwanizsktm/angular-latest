import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../services/posts.service";
import * as PostsActions from '../store/actions'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()

export class PostsEffects {
    constructor(private $actions: Actions, private postSrv: PostsService) { }
    getPosts$ = createEffect(() =>
        this.$actions.pipe(ofType(PostsActions.getPosts), mergeMap(() => {
            return this.postSrv
                .getPosts()
                .pipe(map((posts) => PostsActions.getPostsSuccess({ posts })),
                    catchError((error: Error) => of(PostsActions.getPostsFailure({ error: error.message })))
                )
        }))
    )
}