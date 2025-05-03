function triggerAnimation() {
    const box = document.getElementById('box');
  
    // Check localStorage to prevent repeating animation
    const alreadyAnimated = localStorage.getItem('boxAnimated');
  
    if (!alreadyAnimated) {
      box.classList.add('animate');
      localStorage.setItem('boxAnimated', 'true');
    } else {
      alert("Animation already played. Clear localStorage to play again.");
    }
  }
  
  // Optionally clear animation state on load (for testing)
  window.onload = () => {
    const box = document.getElementById('box');
    box.classList.remove('animate');
  };