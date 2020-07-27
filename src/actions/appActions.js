import {
    RECEIVE_DATA,
    FETCH_DATA,
    IS_ERROR,
    IS_LOADING,
    SEARCH,
    PAGE,
    ITEMS,
    PAGES,
    SHOW_MODAL,
    FETCH_INFO
} from "./allActions";

export function receiveData(items) {
    return {
        type: RECEIVE_DATA,
        items
    };
}

export function fetchingData() {
    return {
        type: FETCH_DATA,
        data: []
    };
}

export function search(search) {
    return {
        type: SEARCH,
        search
    };
}
export function page(page) {
    return {
        type: PAGE,
        page
    };
}
export function pages(pages) {
    return {
        type: PAGES,
        pages
    };
}
export function items(items) {
    return {
        type: ITEMS,
        items
    };
}
export function isError(error) {
    return {
        type: IS_ERROR,
        error
    };
}
export function isLoading(loading) {
    return {
        type: IS_LOADING,
        loading
    };
}
export function showModal(datos) {
    return {
        type: SHOW_MODAL,
        modal: datos.modal,
        info: datos.info
    };
}
export function fetchInformation() {
    return {
        type: FETCH_INFO,
        modalInfo: []
    };
}
export const fetchInfo = (id) => {
    return dispatch => {
        dispatch(fetchInformation());
        fetch("https://hn.algolia.com/api/v1/items/" + id, {
                "timeout": 3000
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (info) {
                dispatch(showModal({
                    info,
                    "modal": true
                }));
            })
            .catch(function (error) {
                dispatch(isError(error.message));
            });
    };
}
export const fetchData = (query = {}) => {
    const numpage = query.page ? "&page=" + query.page : ""
    const searchTerm = query.search ? "&query=" + query.search : ""
    const numitems = query.items ? "&hitsPerPage=" + query.items : ""
    const offset = query.offset ? "&offset=" + query.offset : ""
    return dispatch => {
        dispatch(fetchingData());
        fetch("https://hn.algolia.com/api/v1/search?" + numpage + searchTerm + numitems + offset, {
                "timeout": 3000
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const filtered = data.hits.filter((f) => {
                    return (f.autor !== null && f.title !== null && f.title !== "")
                })
                dispatch(receiveData(filtered));
                dispatch(page(data.page));
                dispatch(items(data.hitsPerPage));
                dispatch(pages(data.nbPages));
            })
            .catch(function (error) {
                dispatch(isError(error.message));
            });
    };
}
