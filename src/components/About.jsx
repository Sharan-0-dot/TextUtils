
function About(props) {
  
  return (
    <>
      <div className={`container text-${props.mode == 'light' ? 'dark' : 'light'}`}>
        <h1>About</h1>
        <p>
          TextUtils is a quick and easy-to-use web application designed to simplify everyday text editing tasks. 
          It lets you instantly convert your text to uppercase or lowercase, clear it with one click, and see real-time statistics such as word and character counts while you type. 
          A live preview section helps you review changes immediately, so you know exactly what your text will look like before using it anywhere else. 
          The app also includes a light and dark mode option, making it comfortable to use in any lighting condition. 
          Built to be fast and responsive, TextUtils performs all its actions instantly without refreshing the page, ensuring a smooth experience.
          Whether you are drafting content, preparing notes, or quickly adjusting text formatting, TextUtils provides a clean, 
          straightforward interface that focuses on speed, simplicity, and convenience.
        </p>
      </div>
    </>
  );
}

export default About;
