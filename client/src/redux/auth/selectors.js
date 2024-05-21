export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRegistered = (state) => state.auth.isRegistered;
export const selectLoginCount = (state)=>state.auth.user.loginCount
