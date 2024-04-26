function App() {
  return (
    <div className="google-map">
      <h2>Google Map Tunisia</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1423167.5302614437!2d10.471073745124803!3d34.055445037841324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1714162552432!5m2!1sar!2seg"
        // width="800"
        // height="550"
        allowFullScreen={true}
        loading="lazy"
        title="Google Map Tunisia"></iframe>
    </div>
  );
}

export default App;
