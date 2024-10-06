document.getElementById('playBtn').addEventListener('click', function() {
  const boxes = document.querySelectorAll('.box');
  const loading = document.getElementById('loading');
  const diamondIndexes = [];

  // Reset all boxes
  boxes.forEach(box => {
    box.classList.remove('revealed');
    box.textContent = '';
  });

  // Show loading animation
  loading.style.display = 'block';

  // Simulate a delay for loading animation
  setTimeout(() => {
    // Hide loading animation
    loading.style.display = 'none';

    // Generate 5 unique random indexes
    while (diamondIndexes.length < 5) {
      const randomIndex = Math.floor(Math.random() * 25);
      if (!diamondIndexes.includes(randomIndex)) {
        diamondIndexes.push(randomIndex);
      }
    }

    // Reveal diamonds
    diamondIndexes.forEach(index => {
      boxes[index].classList.add('revealed');
      boxes[index].textContent = '💎';
    });

    // Refresh the page after 10 seconds
    setTimeout(() => {
      window.location.reload();
    }, 10000);

  }, 2000); // Delay of 2 seconds to show the loading animation
});