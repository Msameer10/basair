"use client";

import { useEffect, useRef } from "react";

const ISNAD_CHART = `flowchart TB

%% ===================== ROOT =====================
P["Prophet ?"]:::root

P --> MK["MAKKAH"]:::city
P --> MD["MADINAH"]:::city
P --> KF["KUFA"]:::city

%% ===================== SAHABA =====================
subgraph S1["Sahabah (by city)"]
direction LR

subgraph MK_S["Makkah"]
direction TB
MKIBA["Ibn Abbas"]:::sahabi
end

subgraph MD_S["Madinah"]
direction TB
MDAB["Abu Bakr"]:::sahabi
MDUM["Umar"]:::sahabi
MDUT["Uthman"]:::sahabi
MDIU["Ibn Umar"]:::sahabi
MDAI["Aishah"]:::sahabi
MDZT["Zayd b. Thabit"]:::sahabi
MDUB["Ubayy b. Kab"]:::sahabi
end

subgraph KF_S["Kufa"]
direction TB
KFIBM["Abdullah b. Masud"]:::sahabi
KFALI["Ali b. Abi Talib"]:::sahabi
KFAMA["Abu Musa al-Ashari"]:::sahabi
end

end

%% City labels to their Sahaba blocks (visual anchoring)
MK --> MKIBA
MD --> MDAB
MD --> MDUM
MD --> MDUT
MD --> MDIU
MD --> MDAI
MD --> MDZT
MD --> MDUB
KF --> KFIBM
KF --> KFALI
KF --> KFAMA

%% ===================== TAABI'UN =====================
subgraph S2["Tabiun (assumed taught by all Sahabah in the city)"]
direction LR

subgraph MK_T["Makkah Tabiun"]
direction TB
MKMUJ["Mujahid"]:::tabi
MKATA["Ata"]:::tabi
MKIKR["Ikrimah"]:::tabi
end

subgraph MD_T["Madinah Tabiun"]
direction TB
MDUBD["Ubaydullah"]:::tabi
MDURW["Urwah b. al-Zubayr"]:::tabi
MDQAS["al-Qasim"]:::tabi
MDSAI["Said b. al-Musayyib"]:::tabi
MDKHA["Kharijah"]:::tabi
MDSAL["Salim b. Abdullah b. Umar"]:::tabi
end

subgraph KF_T["Kufa Tabiun"]
direction TB
KFSHU["Shurayh"]:::tabi
KFMAS["Masruq"]:::tabi
KFASW["al-Aswad b. Yazid"]:::tabi
KFALQ["Alqamah"]:::tabi
end

end

%% Sahaba -> ALL Tabiun (your assumption)

%% Makkah: Ibn Abbas -> (all)
MKIBA --> MKMUJ
MKIBA --> MKATA
MKIBA --> MKIKR

%% Madinah: every Sahabi -> every Tabi
MDAB --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL
MDUM --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL
MDUT --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL
MDIU --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL
MDAI --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL
MDZT --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL
MDUB --> MDUBD & MDURW & MDQAS & MDSAI & MDKHA & MDSAL

%% Kufa: every Sahabi -> every Tabi
KFIBM --> KFSHU & KFMAS & KFASW & KFALQ
KFALI --> KFSHU & KFMAS & KFASW & KFALQ
KFAMA --> KFSHU & KFMAS & KFASW & KFALQ

%% ===================== TABA' TAABI'UN =====================
subgraph S3["Taba Tabiun (assumed taught by all Tabiun in the city)"]
direction LR

subgraph MK_TT["Makkah"]
direction TB
MKSUF["Sufyan b. Uyaynah"]:::taba
end

subgraph MD_TT["Madinah"]
direction TB
MDYAH["Yahya b. Said"]:::taba
MDRAB["Rabiah al-Rai"]:::taba
MDAZ["Abu al-Zinad"]:::taba
MDZUH["al-Zuhri"]:::taba
MDNAF["Nafi"]:::taba
MDHUM["Abdullah b. Humuz"]:::taba
end

subgraph KF_TT["Kufa"]
direction TB
KFIBR["Ibrahim al-Nakhai"]:::taba
KFAMR["Amir al-Shabi"]:::taba
end

end

%% Tabiun -> ALL Taba Tabiun (your assumption)

%% Makkah Tabiun -> Sufyan
MKMUJ --> MKSUF
MKATA --> MKSUF
MKIKR --> MKSUF

%% Madinah Tabiun -> ALL Madinah Taba Tabiun
MDUBD --> MDYAH & MDRAB & MDAZ & MDZUH & MDNAF & MDHUM
MDURW --> MDYAH & MDRAB & MDAZ & MDZUH & MDNAF & MDHUM
MDQAS --> MDYAH & MDRAB & MDAZ & MDZUH & MDNAF & MDHUM
MDSAI --> MDYAH & MDRAB & MDAZ & MDZUH & MDNAF & MDHUM
MDKHA --> MDYAH & MDRAB & MDAZ & MDZUH & MDNAF & MDHUM
MDSAL --> MDYAH & MDRAB & MDAZ & MDZUH & MDNAF & MDHUM

%% Kufa Tabiun -> both (Ibrahim, Amir)
KFSHU --> KFIBR & KFAMR
KFMAS --> KFIBR & KFAMR
KFASW --> KFIBR & KFAMR
KFALQ --> KFIBR & KFAMR

%% ===================== IMAMS + SPECIAL LINKS =====================

%% Madinah Taba Tabiun -> Imam Malik
MAL["Imam Malik"]:::imam
MDYAH --> MAL
MDRAB --> MAL
MDAZ  --> MAL
MDZUH --> MAL
MDNAF --> MAL
MDHUM --> MAL

%% Kufa Taba Tabiun -> Hammad -> Abu Hanifah
KFHAM["Hammad b. Sulayman"]:::taba
AHN["Imam Abu Hanifah"]:::imam

KFIBR --> KFHAM
KFAMR --> KFHAM
KFHAM --> AHN

%% Students of Malik
IW["Ibn Wahb"]:::student
IQ["Ibn al-Qasim"]:::student
ASH["Ashhab"]:::student
ABD["Abdullah"]:::student
YBY["Yahya b. Yahya"]:::student

MAL --> IW & IQ & ASH & ABD & YBY

%% Students of Abu Hanifah
ZUF["Zufar"]:::student
AYQ["Abu Yusuf al-Qadi"]:::student
AHN --> ZUF & AYQ

%% Muhammad b. al-Hasan taught by BOTH Malik & Abu Hanifah
MBH["Muhammad b. al-Hasan"]:::student
MAL --> MBH
AHN --> MBH

%% All students of Malik INCLUDING MBH -> Imam al-Shafii
SHF["Imam al-Shafii"]:::imam
IW --> SHF
IQ --> SHF
ASH --> SHF
ABD --> SHF
YBY --> SHF
MBH --> SHF

%% Teachers of Imam Ahmad
AHM["Imam Ahmad b. Hanbal"]:::imam
MKSUF --> AHM
SHF  --> AHM
AYQ  --> AHM

%% ===================== STYLES =====================
classDef root fill:#111827,color:#fff,stroke:#111827,stroke-width:2px;
classDef city fill:#0f172a,color:#fff,stroke:#0f172a,stroke-width:2px;
classDef sahabi fill:#1f2a60,color:#fff,stroke:#1f2a60;
classDef tabi fill:#1f4d2e,color:#fff,stroke:#1f4d2e;
classDef taba fill:#2e5f6b,color:#fff,stroke:#2e5f6b;
classDef student fill:#3b3b3b,color:#fff,stroke:#3b3b3b;
classDef imam fill:#6b1b1b,color:#fff,stroke:#6b1b1b,stroke-width:2px;`;

type MermaidType = (typeof import("mermaid"))["default"];

function getMermaidTheme() {
  if (typeof document === "undefined") return "default";
  const activeTheme = document.documentElement.getAttribute("data-bs-theme");
  return activeTheme === "dark" ? "dark" : "default";
}

export function ImamsMermaid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mermaidRef = useRef<MermaidType | null>(null);

  useEffect(() => {
    let isDisposed = false;
    let isRendering = false;

    const renderDiagram = async () => {
      if (isDisposed || isRendering || !containerRef.current) return;
      isRendering = true;

      if (!mermaidRef.current) {
        const mermaidModule = await import("mermaid");
        mermaidRef.current = mermaidModule.default;
      }

      const mermaid = mermaidRef.current;
      const host = containerRef.current;
      const fresh = document.createElement("div");
      fresh.className = "mermaid";
      fresh.textContent = ISNAD_CHART;

      host.replaceChildren(fresh);

      mermaid.initialize({
        startOnLoad: false,
        theme: getMermaidTheme(),
        securityLevel: "loose",
        flowchart: { curve: "linear" },
        themeVariables: {
          fontSize: "40px",
          fontFamily: "Times New Roman, serif",
          nodeTextColor: "#000",
        },
      });

      try {
        await mermaid.run({ nodes: [fresh] });
      } finally {
        isRendering = false;
      }
    };

    void renderDiagram();

    let rerenderTimer: ReturnType<typeof setTimeout> | null = null;
    const observer = new MutationObserver(() => {
      if (rerenderTimer) clearTimeout(rerenderTimer);
      rerenderTimer = setTimeout(() => {
        void renderDiagram();
      }, 50);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });

    return () => {
      isDisposed = true;
      observer.disconnect();
      if (rerenderTimer) clearTimeout(rerenderTimer);
    };
  }, []);

  return <div id="isnadDiagram" ref={containerRef} />;
}
