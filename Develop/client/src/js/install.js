const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later
  window.deferredPrompt = event;
  // Remove the hidden class from the install button
  butInstall.style.display = 'block';

  butInstall.addEventListener('click', async () => {
    // Show the install prompt
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    // Show the install prompt
    promptEvent.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await promptEvent.userChoice;
    // Log the user's response to the prompt
    console.log(`User response to the install prompt: ${outcome}`);
    // Clear the deferred prompt variable, since it can only be used once
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  });
});

// Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Log the event
  console.log('PWA was installed', event);
  // Clear the deferred prompt
  window.deferredPrompt = null;
});
