import ThemeLab from "@/components/ThemeLab";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CREDITspective | Institutional Memory for the Full Credit Lifecycle",
  description:
    "CREDITspective is the AI-native intelligence layer for the full credit lifecycle, grounded in Institutional Memory.",
};

export default function Home() {
  const teamMembers = [
    {
      name: "Tom Kramer",
      role: "CEO",
      bio: "Private credit operator focused on turning institutional expertise into scalable AI workflows.",
      image: "/images/testimonials/auth-001.jpg",
    },
    {
      name: "Christopher Rigg",
      role: "CTO",
      bio: "Technology leader bridging agentic systems, data architecture, and production-grade credit intelligence.",
      image: "/images/testimonials/auth-002.jpg",
    },
    {
      name: "Anurag Jain",
      role: "CTO",
      bio: "Investment and strategy specialist advancing AI-powered underwriting and portfolio decision support.",
      image: "/images/testimonials/auth-003.jpg",
    },
    {
      name: "Craig R. Schmidt",
      role: "Senior Advisor",
      bio: "Seasoned market advisor bringing decades of credit-cycle insight and institutional perspective.",
      image: "/images/testimonials/auth-004.png",
    },
  ];

  return (
    <>
      <ThemeLab />

      <header className="site-header">
        <div className="header-inner container">
          <a className="brand" href="#top" aria-label="CREDITspective home">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-word">
              CREDIT<span>spective</span>
            </span>
          </a>

          <nav className="primary-nav" aria-label="Primary navigation">
            <div className="nav-group">
              <a className="nav-trigger" href="#platform">
                Platform
              </a>
              <div
                className="nav-dropdown"
                role="menu"
                aria-label="Platform sections"
              >
                <a href="#memory">Institutional Memory</a>
                <a href="#integration">No Touch Integration</a>
                <a href="#problems">Problems We Solve</a>
                <a href="#platform">Workflow Modules</a>
                <a href="#outcomes">Outcomes</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-trigger" href="#resources">
                Insights
              </a>
              <div
                className="nav-dropdown"
                role="menu"
                aria-label="Insights sections"
              >
                <a href="#resources">Blog & Resources</a>
                <a href="#outcomes">Customer Outcomes</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-trigger" href="#team">
                Company
              </a>
              <div
                className="nav-dropdown"
                role="menu"
                aria-label="Company sections"
              >
                <a href="#team">Our Team</a>
                <a href="#who-we-serve">Who We Serve</a>
                <a href="#demo">Request a Demo</a>
              </div>
            </div>
          </nav>

          <a className="button button-small button-primary" href="#demo">
            Request a Demo
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">
                Built by credit experts, for credit experts
              </p>
              <h1>
                Institutional Memory:
                <br />
                <span>Your untapped alpha-generating superpower.</span>
              </h1>
              <p className="hero-lede">
                The AI-native application for the full credit lifecycle,
                grounded in your firm&apos;s underwriting judgment, actual
                portfolio outcomes, and market context.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#platform">
                  Explore the Platform
                </a>
                <a className="button button-secondary" href="#demo">
                  Request a Demo
                </a>
              </div>{" "}
            </div>

            <div
              className="hero-visual"
              aria-label="CREDITspective lifecycle visualization"
            >
              <div className="orbit orbit-large" />
              <div className="orbit orbit-small" />
              <div className="lifecycle-card lifecycle-card-1">
                <span className="step-number">01</span>
                <strong>Discover</strong>
                <small>Mandate and portfolio fit</small>
              </div>
              <div className="lifecycle-card lifecycle-card-2">
                <span className="step-number">02</span>
                <strong>Underwrite</strong>
                <small>Evidence-backed judgment</small>
              </div>
              <div className="lifecycle-card lifecycle-card-3">
                <span className="step-number">03</span>
                <strong>Manage</strong>
                <small>Actuals versus thesis</small>
              </div>
              <div className="lifecycle-card lifecycle-card-4">
                <span className="step-number">04</span>
                <strong>Monitor</strong>
                <small>Early warning and action</small>
              </div>
              <div className="memory-core">
                <span className="core-ring" />
                <strong>
                  Institutional
                  <br />
                  Memory
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Customer proof">
          <div className="proof-strip-grid container">
            <p className="quote-mark" aria-hidden="true">
              “
            </p>
            <blockquote>
              Of all the AI credit tools we have evaluated, CREDITspective is
              the only one designed to work across the end-to-end credit
              lifecycle.
              <cite>Global Asset Manager</cite>
            </blockquote>
            <a href="#platform">
              See the platform <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="mantle section-pad-sm">
          <div className="mantle-grid container">
            <div>
              <p className="eyebrow">A mantle intelligence layer</p>
              <h2>Add intelligence without replacing your credit stack.</h2>
              <p className="section-intro">
                CREDITspective works across the systems, models, repositories,
                and workflows your teams already trust. It connects the context
                around each transaction without forcing a platform replacement.
              </p>
            </div>
            <div
              className="mantle-stack"
              aria-label="Existing systems connected by CREDITspective"
            >
              <div className="stack-layer stack-top">
                <span>CREDITspective</span>
                <strong>Firm-specific credit intelligence</strong>
              </div>
              <div className="stack-connector" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="stack-systems">
                <span>Data rooms</span>
                <span>Excel models</span>
                <span>Credit documents</span>
                <span>Portfolio systems</span>
              </div>
            </div>
          </div>
          <div
            className="capability-ticker container"
            aria-label="Integration benefits"
          >
            <span>Preserve established workflows</span>
            <span>Connect internal and external data</span>
            <span>Configure to policy and risk appetite</span>
            <span>Deploy without core-system replacement</span>
          </div>
        </section>

        <section id="memory" className="memory section-pad">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">From deal history to decision advantage</p>
              <h2>
                Institutional Memory turns past credit experience into current
                credit judgment.
              </h2>
            </div>

            <div className="memory-grid">
              <article className="memory-card">
                <span className="card-index">01</span>
                <h3>Underwriting Judgment</h3>
                <p>
                  The reasoning behind why a deal was structured, priced,
                  approved, or passed - captured and reusable.
                </p>
              </article>
              <article className="memory-card">
                <span className="card-index">02</span>
                <h3>Performance Outcomes</h3>
                <p>
                  How the credit actually performed after close - ground truth,
                  not just what the model projected.
                </p>
              </article>
              <article className="memory-card">
                <span className="card-index">03</span>
                <h3>Market Context</h3>
                <p>
                  Vintage, market regime, comparable terms, and sector
                  conditions so every precedent is judged in context.
                </p>
              </article>
              <article className="memory-card memory-card-accent">
                <span className="card-index">04</span>
                <h3>Precedent, Applied</h3>
                <p>
                  Relevant successes, misses, and avoided risks are surfaced on
                  every new deal with evidence and rationale.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="integration" className="integration section-pad-sm">
          <div className="integration-grid container">
            <div>
              <p className="eyebrow">Integration</p>
              <h2>No Touch Integration</h2>
              <p className="section-intro">
                CREDITspective runs as a mantle intelligence layer above your
                existing stack, standardizing analysis and surfacing judgment
                without forcing rip-and-replace implementation.
              </p>
              <ul
                className="no-touch-list"
                aria-label="No touch integration benefits"
              >
                <li>Light mantle architecture</li>
                <li>AI-driven standardized assessments</li>
                <li>No rip-and-replace implementation</li>
                <li>Works with existing workflows</li>
                <li>Accelerated time-to-value</li>
                <li>Lower upfront investment</li>
              </ul>
            </div>

            <aside
              className="no-touch-panel"
              aria-label="Illustration of connected credit stack"
            >
              <figure className="no-touch-video">
                <video autoPlay muted loop playsInline>
                  <source src="/videos/finance.mp4" type="video/mp4" />
                </video>
              </figure>
            </aside>
          </div>
        </section>

        <section
          id="problems"
          className="challenges section-pad"
          aria-labelledby="problems-title"
        >
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Problems we solve</p>
              <h2 id="problems-title">
                Convert market complexity into <br /> credit advantage.
              </h2>
              <p>
                Purpose-built workflows that turn fragmented information into
                faster, more consistent credit decisions.
              </p>
            </div>

            <div className="challenge-grid">
              <article className="challenge-card">
                <h3 className="challenge-title">
                  Credit expertise is not keeping pace with industry growth.
                </h3>
                <p className="challenge-copy">
                  CREDITspective amplifies each analyst with the firm&apos;s
                  collective acumen, giving every team member access to
                  senior-level pattern recognition.
                </p>
              </article>
              <article className="challenge-card">
                <h3 className="challenge-title">
                  Changing market dynamics alter the meaning of precedent.
                </h3>
                <p className="challenge-copy">
                  Regime- and vintage-aware analysis combines current market
                  context, comparable terms, and the conditions under which
                  prior decisions were made.
                </p>
              </article>
              <article className="challenge-card">
                <h3 className="challenge-title">
                  Insights from past deals are fragmented and underused.
                </h3>
                <p className="challenge-copy">
                  Institutional Memory organizes prior underwriting, actual
                  performance, and outcomes into reusable context for the next
                  decision.
                </p>
              </article>
              <article className="challenge-card">
                <h3 className="challenge-title">
                  Portfolio monitoring is too reactive.
                </h3>
                <p className="challenge-copy">
                  Continuous variance, covenant, liquidity, and working-capital
                  analysis highlights emerging risks before they become loss
                  events.
                </p>
              </article>
              <article className="challenge-card">
                <h3 className="challenge-title">
                  Workflow bottlenecks consume scarce analyst capacity.
                </h3>
                <p className="challenge-copy">
                  Parallel, agent-driven workflows automate extraction,
                  first-pass analysis, evidence gathering, and drafting while
                  preserving human judgment.
                </p>
              </article>
              <article className="challenge-card">
                <h3 className="challenge-title">
                  Credit context lives across too many systems.
                </h3>
                <p className="challenge-copy">
                  A unified context layer organizes documents, data, models,
                  discussions, and decisions around each transaction.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="platform" className="platform section-pad">
          <div className="container">
            <div className="section-heading split-heading platform-heading">
              <div>
                <p className="eyebrow">The entire credit workflow, unified</p>
                <h2>
                  Built for the work credit and portfolio teams actually do.
                </h2>
              </div>
              <p>
                Every output includes an evidence layer showing the source
                material, assumptions, calculations, and Institutional Memory
                used to produce it.
              </p>
            </div>

            <input
              className="platform-radio"
              type="radio"
              name="platform-tab"
              id="platform-discovery"
              defaultChecked
            />
            <input
              className="platform-radio"
              type="radio"
              name="platform-tab"
              id="platform-underwriting"
            />
            <input
              className="platform-radio"
              type="radio"
              name="platform-tab"
              id="platform-portfolio"
            />
            <input
              className="platform-radio"
              type="radio"
              name="platform-tab"
              id="platform-monitoring"
            />

            <div className="platform-shell">
              <div
                className="platform-tabs"
                role="tablist"
                aria-label="Platform capabilities"
              >
                <label htmlFor="platform-discovery" role="tab">
                  <span>01</span>Deal Discovery
                </label>
                <label htmlFor="platform-underwriting" role="tab">
                  <span>02</span>Underwriting
                </label>
                <label htmlFor="platform-portfolio" role="tab">
                  <span>03</span>Portfolio Management
                </label>
                <label htmlFor="platform-monitoring" role="tab">
                  <span>04</span>Monitoring
                </label>
              </div>

              <div className="platform-panels">
                <article className="platform-panel panel-discovery">
                  <div className="platform-copy">
                    <p className="mini-label">Discovery</p>
                    <h3>
                      Find and prioritize opportunities that fit the mandate.
                    </h3>
                    <p>
                      Track deals from initial discovery through closing, score
                      opportunities against the credit box, and surface relevant
                      internal and external context.
                    </p>
                    <ul>
                      <li>Pipeline and stage management</li>
                      <li>
                        Mandate, risk, return, and portfolio-fit screening
                      </li>
                      <li>Deal-specific market and internal context</li>
                    </ul>
                  </div>
                  <figure className="product-frame landscape-frame">
                    <img
                      src="/images/stages/01.png"
                      alt="CREDITspective deal discovery and pipeline interface"
                    />
                  </figure>
                </article>

                <article className="platform-panel panel-underwriting">
                  <div className="platform-copy">
                    <p className="mini-label">Underwriting</p>
                    <h3>Start with a point of view, not a blank page.</h3>
                    <p>
                      Auto-spread financials, identify deal-specific areas of
                      focus, review base and downside assumptions, and draft
                      analysis grounded in policy and precedent.
                    </p>
                    <ul>
                      <li>AI-generated base-case areas of focus</li>
                      <li>Financial, structural, and sensitivity analysis</li>
                      <li>Source-linked evidence and analyst review</li>
                    </ul>
                  </div>
                  <figure className="product-frame square-frame">
                    <img
                      src="/images/stages/02.png"
                      alt="CREDITspective underwriting hotsheet interface"
                    />
                  </figure>
                </article>

                <article className="platform-panel panel-portfolio">
                  <div className="platform-copy">
                    <p className="mini-label">Portfolio Management</p>
                    <h3>
                      Keep the original thesis connected to every ownership
                      decision.
                    </h3>
                    <p>
                      Bring underwriting, current financials, portfolio context,
                      and credit actions into one decision workspace for
                      reviews, amendments, waivers, and exits.
                    </p>
                    <ul>
                      <li>Portfolio and industry comparisons</li>
                      <li>Risk-rating, amendment, and waiver support</li>
                      <li>Consistent review packages and committee evidence</li>
                    </ul>
                  </div>
                  <figure className="product-frame portrait-frame">
                    <img
                      src="/images/stages/03.png"
                      alt="CREDITspective portfolio tearsheet interface"
                    />
                  </figure>
                </article>

                <article className="platform-panel panel-monitoring">
                  <div className="platform-copy">
                    <p className="mini-label">Monitoring</p>
                    <h3>
                      Measure actual performance against the underwriting
                      thesis.
                    </h3>
                    <p>
                      Continuously compare borrower actuals with the base case,
                      downside case, and credit agreement, then direct attention
                      to the variances that matter.
                    </p>
                    <ul>
                      <li>Variance and covenant analysis</li>
                      <li>
                        Working-capital, liquidity, and early-warning signals
                      </li>
                      <li>Evidence-backed alerts and recommended actions</li>
                    </ul>
                  </div>
                  <figure className="product-frame landscape-frame">
                    <img
                      src="/images/stages/04.png"
                      alt="CREDITspective monitoring and analyst interaction workspace"
                    />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="outcomes" className="outcomes section-pad">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">What CREDITspective enables</p>
              <h2>More judgment. More capacity. Better credit decisions.</h2>
            </div>

            <div className="outcome-grid">
              <article>
                <span className="outcome-icon" aria-hidden="true">
                  ↗
                </span>
                <h3>Discover better-fit deals</h3>
                <p>
                  Prioritize opportunities aligned with mandate, credit box,
                  portfolio concentration, and vintage preferences.
                </p>
              </article>
              <article>
                <span className="outcome-icon" aria-hidden="true">
                  ◎
                </span>
                <h3>Turn hindsight into insight</h3>
                <p>
                  Make every funded, declined, amended, and exited deal reusable
                  context for the next decision.
                </p>
              </article>
              <article>
                <span className="outcome-icon" aria-hidden="true">
                  ≋
                </span>
                <h3>Underwrite smarter and faster</h3>
                <p>
                  Compress document review and first-pass production while
                  expanding the depth of analysis and challenge.
                </p>
              </article>
              <article>
                <span className="outcome-icon" aria-hidden="true">
                  △
                </span>
                <h3>Identify risk earlier</h3>
                <p>
                  Connect actual performance to the original thesis and act
                  before emerging weakness becomes a loss event.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="resources" className="blogs section-pad-sm">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Latest insights</p>
              <h2>
                From our research desk to your <br /> credit workflow.
              </h2>
              <p>
                Perspectives on full-lifecycle credit AI, underwriting judgment,
                and institutional memory in practice.
              </p>
            </div>

            <div className="blog-grid">
              {blogData.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <a className="blog-media" href="/blog-details">
                    <img src={blog.image} alt={blog.title} />
                    <span className="blog-tag">{blog.tags[0]}</span>
                  </a>

                  <div className="blog-body">
                    <p className="blog-meta">
                      <span>{blog.author.name}</span>
                      <span aria-hidden="true">•</span>
                      <span>{blog.publishDate}</span>
                    </p>
                    <h3>
                      <a href="/blog-details">{blog.title}</a>
                    </h3>
                    <p>{blog.paragraph}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="team section-pad-sm">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Our Team</p>
              <h2>Designed by industry veterans.</h2>
              <p>
                CREDITspective is built by professionals who pair deep private
                credit experience with production-grade AI and data systems.
              </p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member) => (
                <article key={member.name} className="team-card">
                  <div className="team-head">
                    <div className="team-avatar">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-meta">
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                  <p className="team-bio">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-serve" className="who section-pad-sm">
          <div className="who-grid container">
            <div>
              <p className="eyebrow">Purpose-built for institutional credit</p>
              <h2>One intelligence layer. Multiple credit operating models.</h2>
            </div>
            <div className="who-columns">
              <div>
                <h3>Industries</h3>
                <div className="tag-list">
                  <span>Private Credit</span>
                  <span>BSL Investors</span>
                  <span>Banks</span>
                  <span>Insurance</span>
                  <span>Private Equity Credit</span>
                </div>
              </div>
              <div>
                <h3>Users</h3>
                <div className="tag-list">
                  <span>Credit Analysts</span>
                  <span>Portfolio Managers</span>
                  <span>Investment Committee</span>
                  <span>Chief Credit Officers</span>
                  <span>Credit Oversight</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="cta section-pad">
          <div className="cta-inner container">
            <div>
              <p className="eyebrow eyebrow-light">See it on a real credit</p>
              <h2>
                Bring your next deal. See what your Institutional Memory can do.
              </h2>
              <p>
                Evaluate underwriting depth, workflow fit, portfolio monitoring,
                and the incremental value of firm-specific precedent.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="button button-light"
                href="mailto:demo@creditspective.com"
              >
                Request a Demo
              </a>
              <a className="text-link" href="#platform">
                Explore Product <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid container">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="brand-word">
                CREDIT<span>spective</span>
              </span>
            </a>
            <p>AI-native intelligence for institutional credit markets.</p>
            <small>Built in partnership with Global Economics Group.</small>
          </div>
          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <a href="#platform">Deal Discovery</a>
              <a href="#platform">Underwriting</a>
              <a href="#platform">Portfolio Management</a>
              <a href="#platform">Monitoring</a>
            </div>
            <div>
              <strong>Company</strong>
              <a href="#memory">About</a>
              <a href="#who-we-serve">Industries</a>
              <a href="#demo">Pilot Program</a>
              <a href="#demo">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© 2026 CREDITspective. All rights reserved.</span>
          <span>Prototype for design communication.</span>
        </div>
      </footer>
    </>
  );
}
