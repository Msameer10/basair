import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-[var(--bs-body-bg)]">
      <div className="footer text-center mt-3 py-4">
        <p className="ftrtxt">
          <span className="subtxt1">Basaʾir</span>
          <span> x </span>
          <a
            href="https://www.sameerion.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <span className="subtxt2">Sameerion</span>
          </a>
        </p>
        <span>
          <Link href="/contact" className="p" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </span>
        <p>
          Copyright &copy;{" "}
          <span
            style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem" }}
          >
            {year}
          </span>{" "}
          <span className="subtxt1">Basaʾir</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

