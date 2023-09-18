import React from 'react'
import { Octocat } from './Components/Octocat'

export function App() {
  return (
    <html>
      <head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Melissas Octodex</title>
        <link
          rel="shortcut icon"
          href="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <link
          rel="preload"
          href="https://github.github.com/fonts/alliance/Alliance-No-1-Regular.woff2"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://github.github.com/fonts/alliance/Alliance-No-1-Semibold.woff2"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://github.github.com/fonts/alliance/alliance.css"
        />
        <link rel="stylesheet" href="src/style.css" />
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45"
                    height="45"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li>
                <a href="#">Octodex</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Octocat
              title="Femalecodertocat"
              number="101"
              authors={['jeejkang']}
            />
            <Octocat title="Pusheencat" number="83" authors={['billyroh']} />
            <Octocat
              title="Welcometocat"
              number="121"
              authors={['tonyjaramillo', 'johncreek', 'jglovier']}
            />
            <Octocat
              title="Stormtroopocat"
              number="84"
              authors={['jeejkang']}
            />
            <Octocat title="Labtocat" number="104" authors={['johncreek']} />
            <Octocat title="Surftocat" number="140" authors={['jeejkang']} />
            <Octocat
              title="Scubatocat"
              number="138"
              authors={['cameronfoxly']}
            />
            <Octocat
              title="Dinotocat"
              number="130"
              authors={['kimestoesta', 'heyhayhay']}
            />
            <Octocat title="Spidertocat" number="88" authors={['jeejkang']} />
            <Octocat title="Yogitocat" number="152" authors={['johncreek']} />
            <Octocat title="Yaktocat" number="107" authors={['jeejkang']} />
            <Octocat title="Filmtocats" number="142" authors={['heyhayhay']} />
            <Octocat
              title="Vinyltocat"
              number="135"
              authors={['johncreek', 'suziejurado']}
            />
            <Octocat
              title="Blacktocats"
              number="131"
              authors={['cameronfoxly']}
            />
            <Octocat title="Inflatocat" number="122" authors={['rubbyjazzy']} />
            <Octocat
              title="Catstello"
              number="126"
              authors={['tonyjaramillo']}
            />
            <Octocat title="Saritocat" number="112" authors={['johncreek']} />
            <Octocat title="Kimonotocat" number="95" authors={['jeejkang']} />
            <Octocat title="Skitchtocat" number="90" authors={['jonrohan']} />
            <Octocat title="Deckfailcat" number="82" authors={['mattgraham']} />
          </section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
