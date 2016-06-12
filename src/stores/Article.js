import BasicStore from './BasicStore'
import { DELETE_ARTICLE } from '../constants'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break

                default:
                    return
            }

            this._emitChange()
        })
    }
}