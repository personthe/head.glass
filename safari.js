      
      

      
      // Create the h1 element
      const h1 = document.createElement("h1");
      h1.innerText = "SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY SAFARI NOT YET SUPPORTED SORRY ";

      // Set the style of the h1 element
      h1.style.fontSize = "20px";
      h1.style.textAlign = "center";
      h1.style.marginTop = 0 + 'px';
      h1.style.zIndex = 2;
      
      h1.style.color = "white";

      // Create the keyframes for the flashing animation
      const keyframes = [
        {color: "white"},
        {color: "black"},
        {color: "red"}
      ];
      const animationName = "flash";
      const animationDuration = "8s";
      const animationTimingFunction = "linear";
      const animationIterationCount = "infinite";

      // Create the animation rule
      const animationRule = `
        @keyframes ${animationName} {
          ${keyframes.map((keyframe, index) => `
            ${(index / keyframes.length) * 100}% {
              ${Object.entries(keyframe).map(([prop, value]) => `${prop}: ${value};`).join("")}
            }
          `).join("")}
        }
      `;

      // Create a style element and add the animation rule to it
      const style = document.createElement("style");
      style.innerHTML = animationRule;
      document.head.appendChild(style);

      // Set the animation style of the h1 element
      h1.style.animationName = animationName;
      h1.style.animationDuration = animationDuration;
      h1.style.animationTimingFunction = animationTimingFunction;
      h1.style.animationIterationCount = animationIterationCount;

      // Set the body's background color
      document.body.style.backgroundColor = "black";

      // Add the h1 element to the body
      document.body.appendChild(h1);

      const img = document.createElement("img");

      // Set the src attribute of the img element
      img.setAttribute("src", "imges/nosaf.png");

      // Add the img element to the body
      document.body.appendChild(img);
      img.style.position = 'absolute';

      img.style.zIndex = 0;
      

      img.style.marginTop = -100 + '%';
      img.style.marginBlockEnd = 300 + '%';
      img.style.marginLeft = 105 + 'px';
      img.style.width = 50+"%";
      img.style.height = 20+"%";
      img.style.Top = 0 + 'px';