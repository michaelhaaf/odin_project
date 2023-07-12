const page = () => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  header.textContent="header";
  main.textContent="main";
  footer.textContent="footer";

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};

export default page;
