const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.removeAttribute('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

  deferredPrompt.prompt(); 
  const { outcome } = await deferredPrompt.userChoice;  
  console.log(`User response to the install prompt: ${outcome}`);  
  butInstall.setAttribute('hidden', '');  
  deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  //log the event
  console.log('PWA installed', event);
});
