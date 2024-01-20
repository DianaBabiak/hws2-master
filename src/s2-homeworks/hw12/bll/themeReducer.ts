export interface StateType{
    themeId:number
}

type ActionType=ChangeThemeId



const initState = {
    themeId: 1,
}

export const themeReducer = (state:StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return  {...state, themeId:action.id}
        }

        default:
            return state
    }
}

type ChangeThemeId = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }as const) // fix any

