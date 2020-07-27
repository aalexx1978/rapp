import initialState from "./initialState";
import {
    FETCH_DATA,
    RECEIVE_DATA,
    IS_ERROR,
    IS_LOADING,
    SEARCH,
    PAGE,
    ITEMS,
    PAGES,
    FETCH_INFO,
    SHOW_MODAL
} from "../actions/allActions";

export default function appRed(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, loading: true};
        case RECEIVE_DATA:
            return { ...state, data: action.items, error: false, loading: false };
        case IS_ERROR:
            return { ...state, error: action.error, loading: false  };
        case IS_LOADING:
            return { ...state, loading: action.loading };
            case SEARCH:
            return { ...state, search: action.search };
            case PAGE:
            return { ...state, page: action.page };
            case PAGES:
            return { ...state, pages: action.pages };
            case ITEMS:
            return { ...state, items: action.items };
            case FETCH_INFO:
                return { ...state, loading: true};
                case SHOW_MODAL:
                    return { ...state, modal: action.modal, loading: false, info: action.info};
                     
        default:
            return state;
    }
}