export default {
   isAuthenticated: false,
   authenticate(cb: () => void): void {
      console.log('logging in...');
      setTimeout(cb, 1000);
   },
   signout(cb: () => void): void {
      console.log('logging out...');
      this.isAuthenticated = false;
      setTimeout(cb, 1000);
   },
};
