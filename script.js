//your JS code here. If required.
 const delayedGreeting = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('Hello, world!');
          }, 1000);
        });

      // Update HTML element with the resolved value
      const updateOutput = () => {
        delayedGreeting().then((message) => {
          document.getElementById('output').textContent = message;
        });
      };

      // Call the update function
      updateOutput();
