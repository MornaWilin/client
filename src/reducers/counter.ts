export const counterReducer = (state = 0, action: any) => {
    switch (action.type) {
        case "inc":
            return state + 1
        case "dec":
            return state + 1
        default:
            return state
    }
}
