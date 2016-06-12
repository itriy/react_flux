import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(text) {
    const action = {
        type: ADD_COMMENT,
        payload: { text }
    }

    AppDispatcher.dispatch(action)
}