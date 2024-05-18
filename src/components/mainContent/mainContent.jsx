import "./mainContent.css";
function MainContent() {
  return (
    <main>
      <article className="action-text">
        <h2>Get Ready For The Next Battle!</h2>
        <p>
          Master the art of Tekken with comprehensive practice toolkit,
          featuring a range of resources designed to help you refine your
          gameplay and dominate the competition. Explore collection of drills,
          character guides, and strategy tips to take your fighting skills to
          new heights.
        </p>
      </article>
      <section className="action">
        <div className="action__card">
          <img src="src/assets/tekken8-fight.webp" alt="tekken 8 fight scene" />
          <section>
            <h3>Practice</h3>
            <p>
              Stay sharp and focused on becoming a better Tekken player with
              daily practice sessions designed for consistent skill improvement.
            </p>
          </section>
        </div>
        <div className="action__card">
          <img
            src="src/assets/tekken8-art.webp"
            alt="tekken 8 art"
            loading="lazy"
          />
          <section>
            <h3>Characters</h3>
            <p>
              Create your custom Tekken character cheat sheets for quick
              reference during gameplay.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
