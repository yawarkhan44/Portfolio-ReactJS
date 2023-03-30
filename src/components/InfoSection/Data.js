export const dataObjOne = {
    id: "about",
    headLine: "Skills and Experience",
    description: (
      <span>
        <p>I am passionate about creating beautiful and intuitive websites. I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies and techniques to improve my skills. </p>
        <br/>
        <p>As a front-end website developer I am responsible for creating the user interface and experience of a website. This includes designing and coding the layout, navigation, and visual elements of a site. I have a good understanding of user experience and design principles to create a site that is easy to use and visually appealing. I can work closely with back-end developers and designers to bring a website to life.</p>
      </span>
    )
  };
  
  export const dataObjTwo = {
    id: "team",
    topLine: "",
    headLine: "Team",
    description: (
      <span>
        Nach vielen Jahren in Angestellten­verhältnissen, setzten wir unsere
        Vision eines Unternehmens in die Tat um. Drei junge Männer – naja, sagen
        wir mittelalte – wagten den Aufbruch in eine neue Welt. Wir gründeten BAM.
        Ein Unternehmen, in dem Freiheit, Wertschätzung und positive Kultur die
        Grundlage für Erfolg sind.
        <br />
        <br />
        Hinter dem Kürzel stecken Christian Bäumer, Miguel Afonso dos Santos und
        Dennis Meissner. Wir Drei kommen jeweils auf eine Dekade Berufserfahrung.
        Summiert sind das 30 Jahre – rechnet ruhig nach. Geteilt durch zehn ergibt
        das drei. BAM! Rund um die Musketiere gesellen sich bereits weitere
        Weggefährten, die Werte und Vision teilen. Denn eines ist klar: Mit einem
        starken Team kann man es so richtig knallen lassen.
      </span>
    ),
  
    listItems: "",
    buttonLabel: "Get Started",
    img: require("../../images/svg-1.svg").default,
    imgStart: true,
    alt: "Team",
    light: true
  };
  
  export const dataObjThree = {
    id: "services",
    topLine: "",
    headLine: "Kernkompetenzen",
    description: "",
    listItems: (
      <span>
        <ul>
          <li>Webentwicklung</li>
          <li>Individualsoftware</li>
          <li>Design</li>
          <li>Digitales Marketing</li>
        </ul>
      </span>
    ),
    buttonLabel: "Get Started",
    img: require("../../images/svg-2.svg").default,
    imgStart: false,
    alt: "Services",
    light: false
  };
  