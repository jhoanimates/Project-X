function toggleMobileMenu() {
  console.log('toggleMobileMenu');
  let mobileMenuClass = document.getElementById('mobile-menu').className;
  if (mobileMenuClass == 'opened') {
    document.getElementById('mobile-menu').className = 'closed';
  } else {
    document.getElementById('mobile-menu').className = 'opened';
  }
}
