"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import changelog from "@/data/changelog.json";
import { useChangelog } from "../contexts /ChangelogContext";

export default function ChangelogView() {
  const data = changelog;
  const { expandAll } = useChangelog();

  return (
    <>
      {data.versions.map((version) => (
        <section
          id={version.id}
          key={version.id}
          className="flex flex-col my-8"
        >
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-foreground/80 mb-2">
              Lançamento da Versão {version.version}{" "}
              <span className="ml-2">🎉</span>
            </h2>
            <div className="flex flex-wrap max-md:flex-col gap-2 text-sm mt-2 mb-8">
              <p className="text-gray-400">{version.date}</p>
              {version.links.map((link, index) => (
                <div key={index} className="flex items-center justify-center">
                  <span className="text-foreground/30 mx-2">•</span>
                  <Link
                    href={link.url}
                    className="text-foreground/60 font-bold hover:text-foreground transition-all delay-75 duration-300 hover:underline"
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mb-8 gap-4">
            <p className="text-foreground/60">
              Caso encontre algum problema, informe-o na{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir issus do Github"
                href={version.issuesUrl || "#"}
                className="text-foreground/60 font-bold hover:text-foreground transition-all delay-75 duration-300 hover:underline"
              >
                página de problemas
              </a>
              .
            </p>

            <p className="text-foreground/90 leading-relaxed">
              {version.description}
            </p>
          </div>

          {version.sections.map((section) => (
            <div key={section.id} className=" border-b border-dashed py-8">
              <details open={expandAll} className="group">
                <summary className="flex items-center cursor-pointer mb-4">
                  <Plus className="size-5 transform transition-all delay-75 duration-300 group-open:rotate-135" />
                  <h3 className="text-xl font-semibold text-foreground/60 group-hover:text-foreground transition-all delay-75 duration-300 ml-2">
                    {section.title}
                  </h3>
                </summary>
                <div className="text-foreground/60 group-hover:text-foreground transition-all delay-75 duration-300">
                  {section.type === "list" ? (
                    <ul className="space-y-3 pl-8 list-disc list-inside ">
                      {section.items.map((item, index) => (
                        <li key={index}>{item} </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="pl-7">
                      {section.items &&
                        section.items.map((item, index) => (
                          <p key={index} className="mb-4">
                            {item}
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              </details>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
