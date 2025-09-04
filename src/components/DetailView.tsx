'use client';
import { useStore } from '@nanostores/react';
import { viewSettings } from "../store";


export default function DetailView() {
  const letter = useStore(viewSettings);
  const imgSrc = '';
  const content = '';
  return letter && (
    <section className='details-view'>
      <span className="details-text">
          {/* <img class="dropcap" src={letter.dropcap.} alt=".Title" align="left" /> */}
          <img className='dropcap' src={letter.dropcap.src} alt=""/>
          { letter.content }
      </span>
      <hr />
      {/* <section class="examples">
          {{ range $selectedLetter.Resources.Match "examples/*" }}
              <div><img src={{.RelPermalink}} alt=".Title"></div>
          {{ end }}
      </section> */}
    </section>
  );
}