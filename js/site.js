const root = document.documentElement;

window.addEventListener("pointermove", (event) => {
  const x = `${Math.round((event.clientX / window.innerWidth) * 100)}%`;
  const y = `${Math.round((event.clientY / window.innerHeight) * 100)}%`;
  root.style.setProperty("--x", x);
  root.style.setProperty("--y", y);
});
