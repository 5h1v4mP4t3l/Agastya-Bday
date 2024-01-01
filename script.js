const images = [
    'gust_images/img1.png',
    'gust_images/img2.png',
    'gust_images/img3.png',
    'gust_images/img4.png',
    'gust_images/img5.png',  
    'gust_images/img6.png', 
    'gust_images/img7.png', 
    'gust_images/img8.png', 
    'gust_images/img9.png', 
    'gust_images/img10.png', 
    'gust_images/img11.png', 
    'gust_images/img12.png', 
    'gust_images/img13.png', 
    'gust_images/img14.png', 
    'gust_images/img15.png', 
    'gust_images/img16.png', 
  ];
  
  function displayImage() {
    const img = new Image();
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
  
    img.onload = function () {
      const maxWidth = window.innerWidth * 0.6;
      const maxHeight = window.innerHeight * 0.6; 
      const aspectRatio = img.width / img.height;
  
      let newWidth = maxWidth;
      let newHeight = newWidth / aspectRatio;
  
      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * aspectRatio;
      }
  
      img.width = newWidth;
      img.height = newHeight;
  
      const x = Math.random() * (window.innerWidth - img.width);
      const y = Math.random() * (window.innerHeight - img.height);
  
      const randomTilt = Math.random() * 20 - 10; 
      img.style.transform = `rotate(${randomTilt}deg)`;
  
      img.style.position = 'absolute';
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
  
      document.body.appendChild(img);
  
      setTimeout(() => {
        img.remove();
      }, 60000);
    };
  }
  
  setInterval(displayImage, 500);  