import types from './types';


const initialState = {}

export default (state=initialState, action) => {
    switch(action.type) {
        case types.TEST:
            return{
                ...state,
                test1: action.test1
            }
        case types.REQUEST_MODS_DATA:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case types.RECEIVE_MODS_DATA:
            return{
                ...state,
                modsData: action.modsData,
                isFetching: action.isFetching,
                errorMods: action.error,
                nextRoomsData: action.nextRoomsData
            }
        case types.REQUEST_MODS_DATA_FAILURE:
            return{
                ...state,
                isFetching: action.isFetching,
                errorMods: action.error
            }
        case types.REQUEST_NEXT_MODS_DATA: 
            return{
                ...state,
                isFetchingNext: action.isFetching
            }
        case types.RECEIVE_NEXT_MODS_DATA:
            return{
                ...state,
                modsData: [...state.modsData, ...action.modsData],
                isFetchingNext: action.isFetching,
                errorMods: action.error,
                nextRoomsData: action.nextRoomsData
            }
        case types.REQUEST_NEXT_MODS_DATA_FAILURE:
            return{
                ...state,
                isFetchingNext: action.isFetching,
                errorMods: action.error
            }
        default: 
            return state;
    }
}

