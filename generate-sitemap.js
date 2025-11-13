import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://buddhisagarnyaupane.com.np",
});

// Add each page of your site
sitemap.write({ url: "/", changefreq: "monthly", priority: 1.0 });
sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/projects", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.7 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
  console.log("✅ sitemap.xml created!");
});
