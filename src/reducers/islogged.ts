export const loggedReducer = (state = false, action: any) => {
    switch (action.type) {
        case 'SIGN_IN':
            return true
        case 'SIGN_OUT':
            return false
        default:
            return false
    }
}