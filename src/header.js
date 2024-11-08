import './header.css';


function Header() {
  return (
    <>
       
    <div class="header">
        <nav>
        <img src="/images/logo.png" class="logo"/>
        <div>
          <button class="language-btn">
            English <img src="/images/world.png" alt="" />
          </button>
          <button>Sign In</button>
        </div>
        </nav>

      <div class="header-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form class="email-signup">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Header;