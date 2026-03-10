import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer border-t bg-[var(--bs-body-bg)]">
      <div className="container footer-inner text-center">
        <p className="ftrtxt footer-brandline">
          <span className="subtxt1">Basaʾir</span>
          <span className="footer-divider">x</span>
          <a
            href="https://www.sameerion.com"
            className="footer-sameerion"
            target="_blank"
            rel="noreferrer"
          >
            <span className="subtxt2">Sameerion</span>
          </a>
        </p>

        <Link href="/contact" className="footer-contact p">
          Contact
        </Link>

        <p className="footer-copyright">
          Copyright &copy; <span className="footer-year">{year}</span>{" "}
          <span className="subtxt1">Basaʾir</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
