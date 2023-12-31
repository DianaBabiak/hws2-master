const initState = {
    isLoading: false,
}

export  type LoadingStateType = {
    isLoading: boolean
}




export const loadingReducer = (state:LoadingStateType = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':{
          return {...state, isLoading:action.isLoading}
      }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
   return {
        type: 'CHANGE_LOADING',
            isLoading,
    }
}
