import { initialBlogInterface, actionInterface } from '../types/reducerTypes';

export const LessonType = {
    LOAD_LESSONS: "LOAD_LESSONS",
    LOAD_LESSON_DETAIL: "LOAD_DETAILS",
    LOAD_LESSON_DETAIL_ASSETS: "LOAD_LESSON_DETAIL_ASSETS"
}

const lessionReducer = (state: initialBlogInterface, action: actionInterface) => {
    switch (action.type) {
        case LessonType.LOAD_LESSONS:
            return {
                ...state,
                posts: action.payload,
            }
        case LessonType.LOAD_LESSON_DETAIL:
            return {
                ...state,
                post: action.payload
            }

        default:
            return state
    }
}


export default lessionReducer