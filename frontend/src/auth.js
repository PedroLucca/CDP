export const Authentication = {
    isAuthenticated: true,
    authenticate(callback) {
       this.isAuthenticated = true;
       setTimeout(callback, 300);
    },
    signout(callback) {
       this.isAuthenticated = false;
       setTimeout(callback, 300); 
    }
 };