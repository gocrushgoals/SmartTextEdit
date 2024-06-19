const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // stash the event so it can be triggered later.
  window.deferredPrompt = event;
  //remove the hidden class from the install button
  butInstall.classList.remove('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
    return;
    }
    // Show the prompt
    promptEvent.prompt();
    // Wait for the user to respond to the prompt
    const result = await promptEvent.userChoice;
    // Log the result
    console.log(result.outcome);
    // Clear the saved event
    window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  //log the event
  console.log('PWA installed', event);
});
