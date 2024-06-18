const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // stash the event so it can be triggered later.
  deferredPrompt = event;
  //remove the hidden class from the install button
  butInstall.style.display = 'none';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  //show the install button
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
   // Log the users response to the prompt
    console.log('User response to the install prompt', outcome);
    // Clear the deferrec prompt so it does not get triggered again
    deferredPrompt = null;
    //hide the install button
    butInstall.style.display = 'none';
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  //log the event
  console.log('PWA installed', event);
});
