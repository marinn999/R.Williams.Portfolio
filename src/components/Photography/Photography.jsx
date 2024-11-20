const Photography = () => {
  return (
    <>
      <section className="photography-section" id="section-photo">
        <h2 className="photography-section-title">Photography</h2>
        <p className="photography-section-text">
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.{" "}
        </p>
        <div className="photography-section-buttons">
          <button className="photography-section-btn">italy</button>
          <button className="photography-section-btn">australia</button>
          <button className="photography-section-btn">india</button>
          <button className="photography-section-btn">brazil</button>
        </div>
        <div className="photography-section-images">
          <img
            src="./img/desktop img/13/Rectangle 47.jpg"
            alt=""
            width="306"
            height="420"
          />
          <img
            src="./img/desktop img/14/Rectangle 48.jpg"
            alt=""
            width="306"
            height="420"
          />
          <img
            src="./img/desktop img/15/Rectangle 49.jpg"
            alt=""
            width="306"
            height="420"
          />
          <img
            src="./img/desktop img/16/Rectangle 50.jpg"
            alt=""
            width="306"
            height="420"
          />
        </div>
      </section>
    </>
  );
};

export default Photography;
