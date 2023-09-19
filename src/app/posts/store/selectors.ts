import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../types/AppState.interface";

export const selectFeatures = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(selectFeatures,
    (state) => state.isLoading
);

export const postsSelector = createSelector(selectFeatures,
    (state) => state.posts
);

export const errorSelector = createSelector(selectFeatures,
    (state) => state.error
);